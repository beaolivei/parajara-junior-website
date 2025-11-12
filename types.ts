export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  text: string;
  tags: string[];
  imageUrl: string;
  date: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
