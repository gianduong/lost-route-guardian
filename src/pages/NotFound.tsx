
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-indigo-100 animate-pulse" />
          </div>
          <h1 className="text-9xl font-bold text-indigo-600 relative z-10">404</h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
          The URL <span className="font-medium text-indigo-600">{location.pathname}</span> could not be found.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="default" 
            className="bg-indigo-600 hover:bg-indigo-700 gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>
          
          <Button 
            variant="outline" 
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 gap-2"
            onClick={() => window.location.href = '/'}
          >
            <Home size={16} />
            Return Home
          </Button>
        </div>
      </div>
      
      <div className="mt-16 text-gray-500 text-sm">
        <p>If you believe this is an error, please contact support.</p>
      </div>
    </div>
  );
};

export default NotFound;
