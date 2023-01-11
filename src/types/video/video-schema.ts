import { IsEmail, IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { Video } from "./index";

@Entity("Video")
export class VideoSchema implements Video {
  @PrimaryColumn({ unique: true })
  uuid: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  hashtag: string[];

  @Column()
  hiring: string;

  @Column()
  url: string;

  @Column()
  song: string;

  @Column()
  user: string;

  @Column()
  type: string;

  @Column()
  likes: number;

  @Column()
  privacity: string;

  @Column()
  comments: [];

  @Column()
  location: string;

  @Column()
  job_type: string;

  @Column()
  modality_type: string;
}
