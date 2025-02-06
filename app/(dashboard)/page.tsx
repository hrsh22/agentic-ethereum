import { Button } from '@/components/ui/button';
import { Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Use a fixed date for featured events to avoid hydration issues
const featuredEvents = [
  {
    id: 1,
    name: "Virtual Tech Conference 1",
    date: "April 15, 2024",
    description: "Join us for an exciting day of innovation and networking",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    name: "Virtual Tech Conference 2",
    date: "April 20, 2024",
    description: "Join us for an exciting day of innovation and networking",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Virtual Tech Conference 3",
    date: "April 25, 2024",
    description: "Join us for an exciting day of innovation and networking",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center lg:text-left lg:col-span-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Host unforgettable
                <span className="block text-blue-600">events that matter</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Create and manage beautiful event experiences. From virtual meetups to conferences,
                make your events stand out with our powerful platform.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link href="/events/create">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg px-8 py-6">
                    Create your event
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" className="rounded-full text-lg px-8 py-6">
                    Explore events
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Event Preview"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to create successful events
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Easy Scheduling</h3>
              <p className="mt-4 text-gray-600">
                Create events in minutes with our intuitive scheduling tools and customizable templates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Attendee Management</h3>
              <p className="mt-4 text-gray-600">
                Seamlessly manage registrations, send updates, and track attendance for your events.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Beautiful Experience</h3>
              <p className="mt-4 text-gray-600">
                Deliver stunning event pages and immersive experiences your attendees will love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <Link href="/events">
              <Button variant="outline">
                View all events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to host your next event?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of event creators who trust our platform
          </p>
          <Link href="/events/create">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full text-lg px-8 py-6">
              Get started for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
