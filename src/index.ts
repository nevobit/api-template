import os from 'os'
import fastify from "fastify";
import * as dotenv from "dotenv";
import fastifyCors from "@fastify/cors";

// TODO: Import Data Sources

// @ts-ignore
import {version, name} from '../package.json';
import { registerRoutes } from './routes';

dotenv.config();
const PORT = Number(process.env.PORT);
const {HOST} = process.env;

(async () => {
    // TODO: data sources

    const server = fastify({
        logger: true,
    });

    server.register(fastifyCors, {
        origin: '*',
        methods: ["POST", 'GET']
    });

    server.register((instance, options, next) => {
        registerRoutes(instance);
        next();
    },{prefix: '/api/v1'});

    await server.listen({port:PORT || 5000, host:HOST}, () => {
        server.log.info(`${name} App is running at http://localhost:${5000} in it's version ${version} `);
        server.log.info('Press CTRL-c to stop');
    });

})();
