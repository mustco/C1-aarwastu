// lib/data/portfolio-data.ts
export interface PortfolioItem {
  id: number;
  title: string;
  category: "Exterior" | "Interior" | "Furniture" | "3D Render";
  imageUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Villa Exterior",
    category: "Exterior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=modern villa exterior with minimalist design and natural stone accents",
  },
  {
    id: 2,
    title: "Minimalist Kitchen Design",
    category: "Interior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=minimalist kitchen with wood cabinets and marble countertops",
  },
  {
    id: 3,
    title: "Custom Dining Set",
    category: "Furniture",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=custom wooden dining table with modern chairs in natural lighting",
  },
  {
    id: 4,
    title: "Contemporary Office Space",
    category: "Interior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=contemporary office space with clean lines and natural lighting",
  },
  {
    id: 5,
    title: "Residential Complex",
    category: "Exterior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=modern residential building complex with geometric facade",
  },
  {
    id: 6,
    title: "3D Villa Visualization",
    category: "3D Render",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=3D rendered modern villa with realistic lighting and materials",
  },
  {
    id: 7,
    title: "Luxury Bedroom Interior",
    category: "Interior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=luxury bedroom with neutral tones and natural materials",
  },
  {
    id: 8,
    title: "Commercial Building Facade",
    category: "Exterior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=modern commercial building with glass and steel facade",
  },
  {
    id: 9,
    title: "Custom Wardrobe Design",
    category: "Furniture",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=custom built-in wardrobe with modern sliding doors",
  },
  {
    id: 10,
    title: "3D Interior Rendering",
    category: "3D Render",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=photorealistic 3D interior rendering with modern furniture",
  },
  {
    id: 11,
    title: "Minimalist Living Room",
    category: "Interior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=minimalist living room with neutral colors and natural light",
  },
  {
    id: 12,
    title: "Garden Pavilion",
    category: "Exterior",
    imageUrl:
      "/jack-valley.webp?height=400&width=600&query=modern garden pavilion with wooden structure and glass walls",
  },
];

export const portfolioCategories = [
  "All",
  "Exterior",
  "Interior",
  "Furniture",
  "3D Render",
] as const;
