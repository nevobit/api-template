import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";

const routes: RouteOptions[] = [
    healthCheckRoute,
]
export const registerRoutes = (fastify: FastifyInstance) => {
    console.warn('registering routes', routes);

    routes.map((route) => {
        fastify.route(route)
    })
}