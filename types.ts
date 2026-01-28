
export interface Celebrity {
  id: string;
  name: string;
  title: string;
  tag: string;
  score: number;
  change: number;
  description: string;
  philosophy: string;
  avatar: string;
  fullBio?: string;
  investmentStyle?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  image: string;
  fullText?: string;
  author?: string;
}

export interface ImpactData {
  label: string;
  value: string;
  icon: string;
  color: string;
}
