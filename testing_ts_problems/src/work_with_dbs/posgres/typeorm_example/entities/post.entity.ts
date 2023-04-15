import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @ManyToOne(() => Author, (ent) => ent.posts, { onDelete: 'CASCADE' })
  author: Author;
}
