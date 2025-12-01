export interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  image: string;
  tags: string[];
  category: string;
  challenge: string;
  solution: string;
  results: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Satu Data Sukoharjo",
    description:
      "A full-stack platform for district data and statistics with integrated analytics.",
    client: "Global Logistics Co.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Analytics", "Dashboard", "Data"],
    category: "Analytics & Logistics Platform",
    challenge:
      "The client faced significant delays and inefficiencies in their supply chain due to lack of real-time visibility and predictive capabilities.",
    solution:
      "We implemented a custom AI model that analyzes historical data and real-time traffic patterns to optimize delivery routes and predict potential disruptions.",
    results:
      "Reduced delivery times by 25% and operational costs by 15% within the first quarter of implementation.",
  },
  {
    id: "2",
    title: "SEM ERP - HR Management",
    description:
      "ERP Application for HR Management including Employee Tracking and Performance.",
    client: "SecureBank Ltd.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["ERP", "HR", "Management"],
    category: "Digital Transformation Solutions",
    challenge:
      "Rising fraudulent transactions were causing financial losses and damaging customer trust.",
    solution:
      "Developed a blockchain-based verification system integrated with machine learning algorithms to detect anomalies in real-time.",
    results:
      "Fraudulent activities dropped by 40%, and customer satisfaction scores improved significantly.",
  },
  {
    id: "3",
    title: "Sriwijaya Consultants Marketplace",
    description:
      "Property Management in the Bali-Badung Property Marketplace platform.",
    client: "City of Future",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    tags: ["Marketplace", "Property", "Management"],
    category: "Web Sales Solutions",
    challenge:
      "Inefficient energy usage and waste collection schedules were leading to high costs and environmental impact.",
    solution:
      "Deployed a network of IoT sensors across the city to monitor energy usage and waste levels, feeding data into a centralized dashboard for optimized resource allocation.",
    results:
      "Energy consumption reduced by 20% and waste collection efficiency increased by 30%.",
  },
  {
    id: "4",
    title: "Lobak Badak Resort",
    description: "A Stunning Online Presence for a Luxury Resort in Bali.",
    client: "ShopifyPlus",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    tags: ["Resort", "Tourism", "Hospitality"],
    category: "Analytics & Logistics Platform",
    challenge:
      "Low conversion rates and cart abandonment due to irrelevant product suggestions.",
    solution:
      "Built a recommendation engine using deep learning to analyze user behavior and suggest products they are most likely to buy.",
    results:
      "Conversion rates increased by 18% and average order value grew by 12%.",
  },
];
