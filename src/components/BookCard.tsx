import { Link } from 'react-router-dom';
import { Star, Eye, Calendar, User } from 'lucide-react';
import { Book } from '@/types/book';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-accent fill-accent' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="cyber-card group">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="text-xs">
            {book.category}
          </Badge>
          {book.averageRating > 0 && (
            <div className="flex items-center space-x-1">
              <div className="flex space-x-0.5">
                {renderStars(book.averageRating)}
              </div>
              <span className="text-sm text-muted-foreground ml-1">
                ({book.reviews.length})
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {book.description}
          </p>
        </div>

        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{book.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{book.yearPublished}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link to={`/book/${book.id}`}>
            <Button variant="cyber" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
          
          {book.pdfLink && (
            <Button variant="cyberOutline" size="sm" asChild>
              <a href={book.pdfLink} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;