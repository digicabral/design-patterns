class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  public createPost(): void {}

  public updatePost(): void {}

  public deletePost(): void {}
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) {}

  public displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}<p>`;
  }
}
