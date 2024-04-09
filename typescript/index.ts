// Creating a post
// comment a post
// share post
// Admin user - can do the 3 operations
// Regular user - can only share and comment a post
interface Post {
  title: string;
  content: string;
}

interface Comment {
  title: string;
  content: string;
}

interface CreatePost {
  create(post: Post): void;
}

interface CommentPost {
  comment(comment: Comment): void;
}

interface SharePost {
  share(post: Post): void;
}

class AdminUser implements CreatePost, CommentPost, SharePost {
  create(post: Post): void {
    throw new Error("Method not implemented.");
  }
  comment(comment: Comment): void {
    throw new Error("Method not implemented.");
  }
  share(post: Post): void {
    throw new Error("Method not implemented.");
  }
}

class RegularUser implements SharePost, CommentPost {
  share(post: Post): void {
    throw new Error("Method not implemented.");
  }
  comment(post: Comment): void {
    throw new Error("Method not implemented.");
  }
}
