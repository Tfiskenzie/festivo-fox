import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

const EventPreview = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePurchase = () => {
    toast({
      title: "Ticket Purchased!",
      description: "You've earned 50 cashback coins!",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Skeleton className="h-96 w-full" />
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <Skeleton className="h-10 w-64 mb-4" />
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-6 w-56" />
                  <Skeleton className="h-6 w-44" />
                </div>
                <div className="text-right">
                  <Skeleton className="h-8 w-24 mb-4" />
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-4 w-40 mt-2" />
                </div>
              </div>
              <div className="mt-8">
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-24 w-full" />
              </div>
              <div className="mt-8">
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Event Cover Image */}
          <div className="h-96 bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Event Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-4">Summer Music Festival</h1>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>July 15, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>7:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Central Park, New York</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-primary mb-4">$50</p>
                <Button onClick={handlePurchase} size="lg" className="bg-primary hover:bg-primary/90">
                  Purchase Ticket
                </Button>
                <p className="text-sm text-gray-500 mt-2">Earn 50 cashback coins!</p>
              </div>
            </div>

            {/* Event Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-600">
                Join us for an unforgettable summer evening filled with live music, great food, and amazing atmosphere.
                Featured artists include some of the best local and international talents in the industry.
              </p>
            </div>

            {/* Directions */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Directions</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map View
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPreview;
