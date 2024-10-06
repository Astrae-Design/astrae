export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  tags: Array<Tag>;
  _id: string;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
}
