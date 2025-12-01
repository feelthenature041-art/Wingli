import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
  },
  {
    title: "How Mentorship Helps in Building Better Airlines",
    date: "October 3, 2024",
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=600",
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

      <section className="container py-10 md:py-14">
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
