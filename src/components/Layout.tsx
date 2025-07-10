import { Link, useLocation } from 'react-router-dom';
import { Book, Search, Plus, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <nav className="cyber-nav sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <Shield className="h-8 w-8 text-primary group-hover:animate-glow" />
              <span className="text-xl font-bold text-foreground">CyberBookRepo</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Book className="h-4 w-4" />
                <span>Books</span>
              </Link>
              
              <Link 
                to="/add-book" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive('/add-book') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Plus className="h-4 w-4" />
                <span>Add Book</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="cyberOutline" size="sm" className="hidden md:flex">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              
              <div className="md:hidden flex items-center space-x-2">
                <Link to="/add-book">
                  <Button variant="cyber" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;