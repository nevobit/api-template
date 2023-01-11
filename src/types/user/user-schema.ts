import {IsEmail, IsNotEmpty} from 'class-validator'
import { BaseEntity, Column,  Entity, PrimaryColumn } from "typeorm";
import { User } from './index';

@Entity("User")
export class UserSchema implements User {
    @PrimaryColumn({unique: true})
    uuid: string;

    @Column()
    name: string;

    @Column()
    lastName: string;
    
    @Column({unique: true})
    @IsEmail(undefined, { message: 'The email is not valid' })
    @IsNotEmpty({message: 'The email is required'})
    email: string;

    @Column()
    password: string;

    @Column()
    gender: string;

} 