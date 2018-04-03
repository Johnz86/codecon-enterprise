import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    completed: boolean;
}