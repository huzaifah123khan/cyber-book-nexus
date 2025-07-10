import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Shield, BookOpen, Database } from 'lucide-react';
import { books } from '@/data/mockData';
import BookCard from '@/components/BookCard';
import SearchFilter from '@/components/SearchFilter';
import { Button } from '@/components/ui/button';
import cyberHeroImage from '@/assets/cyber-hero.jpg';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || book.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cyberHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="relative h-full flex items-center">
            <div className="max-w-2xl space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <Shield className="h-12 w-12 text-primary animate-glow" />
                <h1 className="text-5xl font-bold text-foreground">
                  CyberBookRepo
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your comprehensive repository for cybersecurity literature. 
                Discover, share, and review the best books in information security, 
                penetration testing, and cyber defense.
              </p>
              
              <div className="flex items-center space-x-4">
                <Link to="/add-book">
                  <Button variant="cyber" size="lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Add New Book
                  </Button>
                </Link>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Database className="h-5 w-5" />
                  <span>{books.length} books available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Browse Books</h2>
          </div>
          <Link to="/add-book" className="hidden md:block">
            <Button variant="cyberOutline">
              <Plus className="h-4 w-4 mr-2" />
              Add Book
            </Button>
          </Link>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />
      </section>

      {/* Books Grid */}
      <section className="space-y-6">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <div className="space-y-4">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">No books found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {searchTerm || selectedCategory !== 'all' 
                  ? "Try adjusting your search terms or filters to find what you're looking for."
                  : "Be the first to add a cybersecurity book to the repository!"
                }
              </p>
              {(!searchTerm && selectedCategory === 'all') && (
                <Link to="/add-book">
                  <Button variant="cyber" className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add First Book
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredBooks.length} of {books.length} books
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Index;
