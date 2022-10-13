import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"})
    export class Tema{
        
        @PrimaryGeneratedColumn()
        id: number

        @IsNotEmpty()
        @MaxLength(250)
        @Column({length:250, nullable: false})
        descricao: string

        @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
        postagem: Postagem[]
    }