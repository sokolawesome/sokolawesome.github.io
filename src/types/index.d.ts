export type Side = 'left' | 'right';

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  side: Side;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
}

export interface Technology {
  category: string;
  items: string[];
}
