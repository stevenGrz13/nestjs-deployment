import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class Personne {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
