import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  posts = [
    {
      id: 1,
      name: 'dainghia',
      age: 23,
    },
    {
      id: 2,
      name: 'giaphat',
      age: 23,
    },
  ];

  getPosts(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.posts);
    });
  }

  getPost(postId): Promise<any> {
    const id = Number(postId);
    return new Promise((resolve) => {
      const post = this.posts.find((post) => post.id === id);
      if (!post) {
        throw new HttpException('Post not found', 404);
      }
      resolve(post);
    });
  }

  addPost(post): Promise<any> {
    return new Promise((resolve) => {
      this.posts.push(post);
      resolve(this.posts);
    });
  }

  deletePost(postId): Promise<any> {
    const id = Number(postId);
    return new Promise((resolve) => {
      const index = this.posts.findIndex((post) => post.id === id);
      if (index === -1) {
        throw new HttpException('Post not found', 404);
      }
      this.posts.splice(index, 1);
      resolve(this.posts);
    });
  }
}
