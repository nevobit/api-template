import { makeFastifyRoute, RouteMethod } from "../../constant-definitions";
import { FastifyRequest, FastifyReply } from 'fastify';
import httpStatus from "http-status";
import multer from "fastify-multer";
import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

type FileNameCallback = (error: Error | null, filename: string) => void

cloudinary.config({
  cloud_name: 'prefectcode',
  api_key: '143831775987825',
  api_secret:'y8qB56rFcfWjckhy8kFujqx5KMA',
}
);


export const uploadVideoRoute = makeFastifyRoute(
    RouteMethod.POST,
    '/upload/video',
    async (request:FastifyRequest, reply: FastifyReply) => {
        const {body} = request as any;
        cloudinary.uploader.upload(body, {
          resource_type: 'video',
          folder: 'video',
        }, 
        (err, result) => {
          if(err){
            console.log(err);
            return reply.status(500).send(err);
          }

          // let upload = new Upload({
          //   name: body.name,
          //   url: result?.url,
          //   cloudinary_id: result?.public_id,
          //   description: body.description,
          // });

          // upload.save();
        }
        )
        return reply.status(httpStatus.CREATED)
    }
)