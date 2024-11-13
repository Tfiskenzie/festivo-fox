import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Building2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [accountType, setAccountType] = useState<"individual" | "organization" | null>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-10 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <Skeleton className="h-10 w-48 mx-auto mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-6 w-48 mx-auto mt-6" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          {!isLogin && !accountType && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-6">Choose Account Type</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setAccountType("individual")}
                  className="p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
                >
                  <User className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <span className="font-medium">Individual</span>
                </button>
                <button
                  onClick={() => setAccountType("organization")}
                  className="p-6 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
                >
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <span className="font-medium">Organization</span>
                </button>
              </div>
            </div>
          )}

          {(isLogin || accountType) && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input type="email" placeholder="Email" required />
              </div>
              <div className="space-y-2">
                <Input type="password" placeholder="Password" required />
              </div>
              {!isLogin && accountType === "organization" && (
                <div className="space-y-2">
                  <Input placeholder="Organization Name" required />
                </div>
              )}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setAccountType(null);
              }}
              className="text-primary hover:underline"
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
