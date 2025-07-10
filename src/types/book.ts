export interface Author {
  id: number;
  name: string;
  bio: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Review {
  id: number;
  bookId: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  timestamp: string;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  category: string;
  authorId: number;
  author: string;
  yearPublished: number;
  pdfLink: string;
  reviews: Review[];
  averageRating: number;
}