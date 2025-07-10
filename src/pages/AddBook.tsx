import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { categories, authors } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const AddBook = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    authorId: '',
    yearPublished: '',
    pdfLink: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.categoryId || !formData.authorId || !formData.yearPublished) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would make an API call
    toast({
      title: "Book Added Successfully",
      description: `"${formData.title}" has been added to the repository.`,
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      categoryId: '',
      authorId: '',
      yearPublished: '',
      pdfLink: ''
    });

    // Navigate back to home after a delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="cyberOutline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Books
          </Button>
        </Link>
      </div>

      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span>Add New Cybersecurity Book</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Book Title *
              </label>
              <Input
                placeholder="Enter the book title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="cyber-input"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Description *
              </label>
              <Textarea
                placeholder="Describe the book's content and key topics"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="cyber-input min-h-[120px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Category *
                </label>
                <Select value={formData.categoryId} onValueChange={(value) => handleInputChange('categoryId', value)}>
                  <SelectTrigger className="cyber-input">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Author *
                </label>
                <Select value={formData.authorId} onValueChange={(value) => handleInputChange('authorId', value)}>
                  <SelectTrigger className="cyber-input">
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    {authors.map((author) => (
                      <SelectItem key={author.id} value={author.id.toString()}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Year Published *
              </label>
              <Input
                type="number"
                placeholder="e.g., 2024"
                value={formData.yearPublished}
                onChange={(e) => handleInputChange('yearPublished', e.target.value)}
                className="cyber-input"
                min="1900"
                max={new Date().getFullYear()}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                PDF Link (Optional)
              </label>
              <Input
                type="url"
                placeholder="https://example.com/book.pdf"
                value={formData.pdfLink}
                onChange={(e) => handleInputChange('pdfLink', e.target.value)}
                className="cyber-input"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Provide a direct link to the PDF file if available
              </p>
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button type="button" variant="cyberOutline" onClick={() => navigate('/')}>
                Cancel
              </Button>
              <Button type="submit" variant="cyber">
                <Upload className="h-4 w-4 mr-2" />
                Add Book
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBook;