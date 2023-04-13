import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CreatePostDto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
}
