import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({ 
  title = "Something went wrong", 
  message, 
  onRetry, 
  className 
}: ErrorMessageProps) {
  return (
    <Card className={`border-red-200 bg-red-50 ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-red-900 mb-2">{title}</h3>
        <p className="text-red-700 mb-6">{message}</p>
        {onRetry && (
          <Button 
            onClick={onRetry} 
            variant="outline" 
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function ErrorSection({ 
  title, 
  message, 
  onRetry 
}: { 
  title: string; 
  message: string; 
  onRetry?: () => void; 
}) {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ErrorMessage 
          title={title}
          message={message}
          onRetry={onRetry}
        />
      </div>
    </div>
  );
}