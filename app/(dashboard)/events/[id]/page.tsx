'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { use } from "react";

export default function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);

    // This is mock data - will be replaced with real data from backend
    const event = {
        id: resolvedParams.id,
        name: "Tech Conference 2024",
        date: "April 15, 2024",
        location: "San Francisco Convention Center",
        description: "Join us for an exciting day of innovation and networking. This conference brings together industry leaders, developers, and tech enthusiasts for a day of learning and collaboration.",
        capacity: 500,
        registered: 342,
    };

    return (
        <div className="container mx-auto py-10">
            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="text-3xl">{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <img
                                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt={event.name}
                                className="w-full h-[300px] object-cover rounded-lg"
                            />
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="h-5 w-5" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="h-5 w-5" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="h-5 w-5" />
                                    <span>{event.registered} / {event.capacity} registered</span>
                                </div>
                                <Button className="w-full mt-4">Register Now</Button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">About this event</h3>
                            <p className="text-gray-600 whitespace-pre-line">
                                {event.description}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 