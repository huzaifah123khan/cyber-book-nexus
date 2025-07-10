import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, User, Download, MessageSquare } from 'lucide-react';
import { books } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState('');
  
  const book = books.find(b => b.id === parseInt(id || '0'));

  if (!book) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">Book Not Found</h1>
        <Link to="/">
          <Button variant="cyber">Back to Books</Button>
        </Link>
      </div>
    );
  }

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

  const handleSubmitReview = () => {
    if (!newReview.trim() || !newRating) {
      toast({
        title: "Incomplete Review",
        description: "Please provide both a rating and comment.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Review Submitted",
      description: "Thank you for your review!",
    });
    
    setNewReview('');
    setNewRating('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="cyberOutline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Books
          </Button>
        </Link>
      </div>

      <div className="cyber-card">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-4 flex-1">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{book.category}</Badge>
                {book.averageRating > 0 && (
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-0.5">
                      {renderStars(book.averageRating)}
                    </div>
                    <span className="text-sm text-muted-foreground ml-1">
                      ({book.reviews.length} reviews)
                    </span>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-foreground">{book.title}</h1>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{book.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{book.yearPublished}</span>
                </div>
              </div>
            </div>
            
            {book.pdfLink && (
              <Button variant="cyber" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            )}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-foreground leading-relaxed">{book.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Reviews ({book.reviews.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {book.reviews.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No reviews yet. Be the first to review this book!
              </p>
            ) : (
              book.reviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{review.userName}</span>
                    <div className="flex space-x-0.5">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{review.comment}</p>
                  <span className="text-xs text-muted-foreground">
                    {new Date(review.timestamp).toLocaleDateString()}
                  </span>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="cyber-card">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Rating
              </label>
              <Select value={newRating} onValueChange={setNewRating}>
                <SelectTrigger className="cyber-input">
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Star</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Your Review
              </label>
              <Textarea
                placeholder="Share your thoughts about this book..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="cyber-input min-h-[120px]"
              />
            </div>
            
            <Button 
              variant="cyber" 
              onClick={handleSubmitReview}
              className="w-full"
            >
              Submit Review
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookDetail;