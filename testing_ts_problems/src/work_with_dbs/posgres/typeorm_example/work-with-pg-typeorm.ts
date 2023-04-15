import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Post } from './entities/post.entity';
import { Author } from './entities/author.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5445,
  username: 'postgres',
  password: 'postgres',
  database: 'example-db',
  synchronize: true,
  logging: true,
  entities: [Post, Author],
  subscribers: [],
  migrations: [],
});

function createAuthor(author: Partial<Author>) {
  const repo = AppDataSource.getRepository(Author);
  return repo.save({ ...author });
}

function createPost(post: Partial<Post>, authorId: number) {
  const repo = AppDataSource.getRepository(Post);
  return repo.save({
    ...post,
    author: { id: authorId },
  });
}

async function getPostsByAuthorId(authorId: number) {
  const postRepository = AppDataSource.getRepository(Post);

  return postRepository.find({
    where: { author: { id: authorId } },
    relations: ['author'],
  });
}

async function deletePostById(id: number) {
  const repo = AppDataSource.getRepository(Post);
  return repo.delete({ id });
}

async function deleteAuthorById(id: number) {
  const repo = AppDataSource.getRepository(Author);
  return repo.delete({ id });
}

export async function mainExampleWithTypeorm() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }

  const author = await createAuthor({ name: 'Author 1' });

  console.log(author);

  const post1 = await createPost(
    {
      name: 'Post 1',
      description: 'Description 1',
      views: 1,
      isPublished: true,
    },
    author.id
  );

  console.log(post1);

  const post2 = await createPost(
    {
      name: 'Post 2',
      description: 'Description 2',
      views: 1,
      isPublished: true,
    },
    author.id
  );

  console.log(post2);

  const posts = await getPostsByAuthorId(author.id);

  console.log(posts);

  const delPostByIdRes1 = await deletePostById(post1.id);

  console.log(delPostByIdRes1);

  const delAuthorByIdRes1 = await deleteAuthorById(author.id);

  console.log(delAuthorByIdRes1);
}
