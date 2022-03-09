export interface Post {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
  };
}

export type Posts = Post[];
