import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://images.pexels.com/photos/34976240/pexels-photo-34976240.jpeg",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://images.pexels.com/photos/31948477/pexels-photo-31948477.jpeg",
  },
];

export default function Blog() {
  return (
    <>
      <section className="container py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore articles and insights from our experienced mentors in the aviation industry.
        </p>
      </section>

      <section className="container py-10 md:py-14 bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden bg-white hover:shadow-lg transition"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover bg-slate-200"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {post.date}
                </p>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <a href="#">Read More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-1">
          <button className="h-2 w-2 rounded-full bg-primary"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
          <button className="h-2 w-2 rounded-full bg-slate-300"></button>
        </div>
      </section>
    </>
  );
}
