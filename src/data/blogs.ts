export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  category: string;
  tags: string[];
  readTime: number;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-in-enterprise",
    title: "The Future of AI in Enterprise Software",
    excerpt:
      "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
    content: `Artificial Intelligence has become a cornerstone of modern enterprise software. From predictive analytics to automated decision-making, AI is revolutionizing how businesses operate.

In this article, we explore the latest trends in enterprise AI, including:

- Machine Learning for Business Intelligence
- Natural Language Processing in Customer Service
- Computer Vision in Quality Control
- AI-Driven Automation

As we move forward, the integration of AI into business processes will only deepen, creating new opportunities for efficiency and innovation.`,
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    date: "2024-11-15",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Enterprise"],
    readTime: 5,
  },
  {
    id: "2",
    slug: "scalable-architecture-patterns",
    title: "Building Scalable Architecture: Best Practices",
    excerpt:
      "A deep dive into architectural patterns that enable applications to scale efficiently.",
    content: `Scalability is crucial for any modern application. In this comprehensive guide, we examine proven architectural patterns that help systems handle growth.

Key topics covered:

- Microservices Architecture
- Event-Driven Design
- Database Sharding Strategies
- Load Balancing Techniques
- Caching Strategies

By implementing these patterns, organizations can build systems that grow seamlessly with their business needs.`,
    author: {
      name: "Michael Ross",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    date: "2024-11-10",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    category: "Development",
    tags: ["Architecture", "Scalability", "DevOps"],
    readTime: 8,
  },
  {
    id: "3",
    slug: "digital-transformation-guide",
    title: "Complete Guide to Digital Transformation",
    excerpt:
      "How organizations can successfully navigate their digital transformation journey.",
    content: `Digital transformation is no longer optional—it's essential for survival in today's market. This guide provides a roadmap for successful transformation.

What you'll learn:

- Assessing Digital Maturity
- Creating a Transformation Roadmap
- Change Management Strategies
- Measuring Success
- Common Pitfalls to Avoid

Organizations that embrace digital transformation position themselves for long-term success in an increasingly digital world.`,
    author: {
      name: "Emily Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    date: "2024-11-05",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    category: "Business",
    tags: ["Digital Transformation", "Strategy", "Innovation"],
    readTime: 6,
  },
  {
    id: "4",
    slug: "cybersecurity-best-practices-2024",
    title: "Cybersecurity Best Practices for 2024",
    excerpt:
      "Essential security measures every organization should implement to protect their digital assets.",
    content: `As cyber threats evolve, so must our defense strategies. This article outlines the most critical security practices for 2024.

Topics covered:

- Zero Trust Architecture
- Multi-Factor Authentication
- Security Awareness Training
- Incident Response Planning
- Regular Security Audits

Implementing these practices helps organizations build a robust security posture against modern threats.`,
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    date: "2024-11-01",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    category: "Security",
    tags: ["Cybersecurity", "Best Practices", "Security"],
    readTime: 7,
  },
];
