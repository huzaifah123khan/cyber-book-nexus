import { Book, Author, Category, Review } from '@/types/book';

export const categories: Category[] = [
  { id: 1, name: 'Penetration Testing' },
  { id: 2, name: 'Malware Analysis' },
  { id: 3, name: 'Cryptography' },
  { id: 4, name: 'Network Security' },
  { id: 5, name: 'Digital Forensics' },
  { id: 6, name: 'Social Engineering' },
];

export const authors: Author[] = [
  { id: 1, name: 'Georgia Weidman', bio: 'Penetration tester, security researcher, and founder of Shevirah.' },
  { id: 2, name: 'Bruce Schneier', bio: 'International renowned security technologist and author.' },
  { id: 3, name: 'Kevin Mitnick', bio: 'World\'s most famous hacker turned security consultant.' },
  { id: 4, name: 'Chris Hadnagy', bio: 'Social engineering expert and founder of Social-Engineer LLC.' },
  { id: 5, name: 'Brian Krebs', bio: 'Investigative journalist covering cybersecurity.' },
];

export const reviews: Review[] = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    userName: 'SecurityPro',
    rating: 5,
    comment: 'Excellent comprehensive guide for beginners and experts alike.',
    timestamp: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    bookId: 1,
    userId: 2,
    userName: 'CyberAnalyst',
    rating: 4,
    comment: 'Great practical examples and hands-on approach.',
    timestamp: '2024-01-20T14:45:00Z'
  },
  {
    id: 3,
    bookId: 2,
    userId: 3,
    userName: 'CryptoExpert',
    rating: 5,
    comment: 'The definitive guide to modern cryptography.',
    timestamp: '2024-01-10T09:15:00Z'
  },
];

export const books: Book[] = [
  {
    id: 1,
    title: 'Penetration Testing: A Hands-On Introduction to Hacking',
    description: 'An in-depth guide to penetration testing with practical examples and methodologies for ethical hacking.',
    categoryId: 1,
    category: 'Penetration Testing',
    authorId: 1,
    author: 'Georgia Weidman',
    yearPublished: 2014,
    pdfLink: 'https://example.com/penetration-testing.pdf',
    reviews: reviews.filter(r => r.bookId === 1),
    averageRating: 4.5
  },
  {
    id: 2,
    title: 'Applied Cryptography',
    description: 'Comprehensive coverage of cryptographic protocols, algorithms, and their real-world applications.',
    categoryId: 3,
    category: 'Cryptography',
    authorId: 2,
    author: 'Bruce Schneier',
    yearPublished: 2015,
    pdfLink: 'https://example.com/applied-crypto.pdf',
    reviews: reviews.filter(r => r.bookId === 2),
    averageRating: 5.0
  },
  {
    id: 3,
    title: 'The Art of Deception',
    description: 'Controlling the human element of security through social engineering techniques.',
    categoryId: 6,
    category: 'Social Engineering',
    authorId: 3,
    author: 'Kevin Mitnick',
    yearPublished: 2002,
    pdfLink: 'https://example.com/art-of-deception.pdf',
    reviews: [],
    averageRating: 0
  },
  {
    id: 4,
    title: 'Social Engineering: The Science of Human Hacking',
    description: 'Modern techniques and countermeasures for social engineering attacks.',
    categoryId: 6,
    category: 'Social Engineering',
    authorId: 4,
    author: 'Chris Hadnagy',
    yearPublished: 2018,
    pdfLink: 'https://example.com/social-engineering.pdf',
    reviews: [],
    averageRating: 0
  },
  {
    id: 5,
    title: 'Spam Nation',
    description: 'Inside the world of cybercrime and the underground economy.',
    categoryId: 2,
    category: 'Malware Analysis',
    authorId: 5,
    author: 'Brian Krebs',
    yearPublished: 2014,
    pdfLink: 'https://example.com/spam-nation.pdf',
    reviews: [],
    averageRating: 0
  },
  {
    id: 6,
    title: 'Practical Malware Analysis',
    description: 'The hands-on guide to dissecting malicious software.',
    categoryId: 2,
    category: 'Malware Analysis',
    authorId: 1,
    author: 'Georgia Weidman',
    yearPublished: 2012,
    pdfLink: 'https://example.com/malware-analysis.pdf',
    reviews: [],
    averageRating: 0
  }
];