"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const blogPosts = [
  {
    id: 1,
    title: "GFRP vs Steel: The Ultimate Comparison for Modern Construction",
    excerpt:
      "Discover why GFRP rebars are revolutionizing the construction industry with superior corrosion resistance and durability compared to traditional steel reinforcement.",
    author: "Dr. Rajesh Kumar",
    date: "2024-01-15",
    category: "Technical",
    readTime: "8 min read",
    image: "/images/Blog/gfrp-vs-steel-advantages.png",
    slug: "gfrp-vs-steel-comparison",
  },
  {
    id: 2,
    title: "Marine Construction: Why GFRP is the Future",
    excerpt:
      "Explore how GFRP rebars are transforming marine infrastructure projects with their exceptional resistance to saltwater corrosion.",
    author: "Priya Sharma",
    date: "2024-01-10",
    category: "Applications",
    readTime: "6 min read",
    image: "/images/Blog/construction.png",
    slug: "marine-construction-gfrp-future",
  },
  {
    id: 3,
    title: "Sustainable Construction with GFRP Technology",
    excerpt:
      "Learn how GFRP rebars contribute to sustainable construction practices and reduce environmental impact.",
    author: "Amit Patel",
    date: "2024-01-05",
    category: "Sustainability",
    readTime: "7 min read",
    image: "/banner/banner3.jpeg",
    slug: "sustainable-construction-gfrp",
  },
  {
    id: 4,
    title: "Installation Best Practices for GFRP Rebars",
    excerpt:
      "A comprehensive guide to proper installation techniques for GFRP rebars to ensure optimal performance.",
    author: "Dr. Rajesh Kumar",
    date: "2023-12-28",
    category: "Technical",
    readTime: "10 min read",
    image: "/banner/banner4.jpeg",
    slug: "gfrp-installation-best-practices",
  },
  {
    id: 5,
    title: "Cost Analysis: GFRP vs Traditional Reinforcement",
    excerpt:
      "Detailed cost-benefit analysis showing long-term savings with GFRP reinforcement solutions.",
    author: "Priya Sharma",
    date: "2023-12-20",
    category: "Economics",
    readTime: "9 min read",
    image: "/banner/banaer0.png",
    slug: "gfrp-cost-analysis",
  },
];

const authors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Technical Officer",
    bio: "Leading expert in composite materials with 15+ years of experience in GFRP technology.",
    image: "/images/authors/rajesh-kumar.jpg",
    linkedin: "https://linkedin.com/in/rajesh-kumar-gfrp",
    email: "rajesh@vegnar.com",
  },
  {
    name: "Priya Sharma",
    role: "Senior Materials Engineer",
    bio: "Specialist in marine applications and corrosion-resistant materials.",
    image: "/images/authors/priya-sharma.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma-materials",
    email: "priya@vegnar.com",
  },
  {
    name: "Amit Patel",
    role: "Sustainability Director",
    bio: "Expert in sustainable construction practices and environmental impact assessment.",
    image: "/images/authors/amit-patel.jpg",
    linkedin: "https://linkedin.com/in/amit-patel-sustainability",
    email: "amit@vegnar.com",
  },
];

const POSTS_PER_PAGE = 4;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden h-[500px]">
        <div
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(/assets/Blog.jpeg)`,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                TECHNICAL
              </span>
              <br />
              <span className="text-5xl md:text-6xl text-orange-100">BLOG</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-[#9e5020]/20"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#9e5020] text-white hover:bg-[#9e5020]/90">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <UserIcon className="h-4 w-4" />
                          {post.author}
                        </div>
                      </div>

                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#9e5020] transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#9e5020] font-medium">
                          {post.readTime}
                        </span>

                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            variant="ghost"
                            className="text-[#9e5020] hover:text-[#9e5020]/80 hover:bg-[#9e5020]/10 p-0 h-auto font-semibold"
                          >
                            Read More
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="border-[#9e5020]/30 text-[#9e5020] hover:bg-[#9e5020]/10"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? "bg-[#9e5020] text-white hover:bg-[#9e5020]/90"
                            : "border-[#9e5020]/30 text-[#9e5020] hover:bg-[#9e5020]/10"
                        }
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="border-[#9e5020]/30 text-[#9e5020] hover:bg-[#9e5020]/10"
                  >
                    Next
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 h-fit">
              {/* First Author Card */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <UserIcon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">
                        Tushar
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Chief Executive Officer
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Leading expert in GFRP technology with 15+ years of
                        experience in composite materials research and
                        development. PhD in Materials Engineering from IIT
                        Mumbai.
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://www.linkedin.com/in/hiranitushar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tushar@vegnar.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <HiMail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Author Card */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto">
                      <UserIcon className="h-10 w-10 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">
                        Aashish
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Chief Technology Officer
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Specialist in GFRP structural applications and design
                        optimization. M.Tech in Structural Engineering with
                        expertise in composite reinforcement systems.
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://www.linkedin.com/in/ashiishchauhan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanashish360@vegnar.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <HiMail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
