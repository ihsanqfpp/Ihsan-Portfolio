import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="glass max-w-md w-full p-8 rounded-2xl border border-neon-blue/20 text-center neon-glow">
            <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} className="text-neon-blue" />
            </div>
            
            <h1 className="text-2xl font-heading font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              An unexpected error occurred. Don't worry, your progress is safe. Try refreshing the page.
            </p>

            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground font-medium py-6 rounded-xl"
              >
                <RefreshCcw size={18} className="mr-2" />
                Refresh Page
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={this.handleReset}
                className="w-full text-muted-foreground hover:text-foreground hover:bg-white/5 py-6 rounded-xl"
              >
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
            </div>

            {import.meta.env.DEV && (
              <div className="mt-8 p-4 bg-black/40 rounded-lg text-left overflow-auto max-h-40">
                <p className="text-[10px] font-mono text-neon-purple uppercase mb-2 tracking-widest">Debug Info</p>
                <p className="text-xs font-mono text-gray-400 whitespace-pre-wrap">
                  {this.state.error?.message}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
