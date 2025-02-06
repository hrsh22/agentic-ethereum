'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Plus } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
    // Mock data - will be replaced with real data from backend
    const events = [
        {
            id: "1",
            name: "Tech Conference 2024",
            date: "April 15, 2024",
            location: "San Francisco Convention Center",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: "2",
            name: "Design Workshop",
            date: "April 20, 2024",
            location: "New York Design Center",
            image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: "3",
            name: "Startup Meetup",
            date: "April 25, 2024",
            location: "Austin Convention Center",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
    ];

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Events</h1>
                <Link href="/events/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Event
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <Link href={`/events/${event.id}`} key={event.id}>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span className="text-sm">{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span className="text-sm">{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
} 