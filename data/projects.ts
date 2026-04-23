export interface Project {
  slug: string
  name: string
  type: "Residential" | "Commercial" | "Hospitality" | "Architecture" | "Landscape"
  location: string
  year: number
  area: string
  clientType: string
  coverImage: string
  brief: string
  approach: string
  outcome: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: "the-harbour-penthouse",
    name: "The Harbour Penthouse",
    type: "Residential",
    location: "Worli, Mumbai",
    year: 2023,
    area: "4,200 sq.ft",
    clientType: "Private HNI Residence",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    brief: "A 42nd-floor penthouse overlooking the Bandra-Worli sea link. The client wanted a space that felt open, warm, and timeless — not a showpiece, but a home.",
    approach: "We stripped the space to its bones and rebuilt with natural stone, warm timbers, and a restrained palette of ivory, sand, and deep bronze. Every room frames the water view deliberately.",
    outcome: "The completed residence was featured in Society Interiors and has since become one of our most-requested portfolio references.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80",
    ]
  },
  {
    slug: "bandra-corporate-suite",
    name: "Bandra Corporate Suite",
    type: "Commercial",
    location: "Bandra, Mumbai",
    year: 2023,
    area: "8,500 sq.ft",
    clientType: "Corporate Office",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    brief: "A fast-growing fintech company needed an office that would attract and retain top-tier talent. Hospitality-level finish, none of the corporate cliché.",
    approach: "We introduced biophilic elements, acoustic zoning, and a central breakout lounge that doubles as a client presentation space. Every meeting room tells a different story.",
    outcome: "Employee satisfaction scores increased 34% in the first quarter post-move. The office has since been used in three recruitment campaigns.",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80",
    ]
  },
  {
    slug: "juhu-beach-residence",
    name: "Juhu Beach Residence",
    type: "Residential",
    location: "Juhu, Mumbai",
    year: 2022,
    area: "6,100 sq.ft",
    clientType: "Private HNI Residence",
    coverImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    brief: "A beachside family home for a family of five — meant to feel effortlessly relaxed while remaining unmistakably luxurious.",
    approach: "Coastal materiality throughout: lime-wash walls, rattan accents, reclaimed wood floors, and bespoke furniture sourced from craftsmen in Rajasthan and Kerala.",
    outcome: "Published in Architectural Digest India, 2023. The family moved in permanently — they no longer needed a city apartment.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1400&q=80",
    ]
  },
  {
    slug: "mahalaxmi-hotel-lobby",
    name: "Mahalaxmi Hotel Lobby",
    type: "Hospitality",
    location: "Mahalaxmi, Mumbai",
    year: 2022,
    area: "12,000 sq.ft",
    clientType: "Boutique Hotel",
    coverImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    brief: "A 200-room boutique hotel needed a lobby that would become a destination in its own right — not just a check-in counter.",
    approach: "A 9-metre ceiling allowed us to commission a bespoke chandelier installation and create a double-height living wall with layered ambient lighting.",
    outcome: "The lobby became the most-tagged location at the property within 30 days of opening. Featured in GQ India.",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1400&q=80",
    ]
  },
  {
    slug: "the-atlas-showroom",
    name: "The Atlas Showroom",
    type: "Commercial",
    location: "Lower Parel, Mumbai",
    year: 2023,
    area: "3,200 sq.ft",
    clientType: "Luxury Retail",
    coverImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
    brief: "A luxury watch and jewellery brand needed a retail environment that matched the precision and exclusivity of its products.",
    approach: "Dark walnut display joinery, museum-grade lighting, and a private consultation room with bespoke seating. Every fixture custom-made to specification.",
    outcome: "Sales per square foot increased 28% compared to the brand's previous flagship location.",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&q=80",
    ]
  },
  {
    slug: "sea-view-villa-alibaug",
    name: "Sea View Villa",
    type: "Architecture",
    location: "Alibaug, Maharashtra",
    year: 2021,
    area: "7,800 sq.ft",
    clientType: "Private Villa",
    coverImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    brief: "A weekend escape for a Mumbai-based family. The brief was simple: make a home that makes you forget everything the moment you arrive.",
    approach: "Passive cooling design, infinity pool integrated into the landscape, open-plan living that dissolves the boundary between inside and outside.",
    outcome: "The family moved in full-time. They sold their Mumbai apartment six months after handover.",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1400&q=80",
    ]
  },
  {
    slug: "andheri-tech-office",
    name: "Andheri Tech Office",
    type: "Commercial",
    location: "Andheri, Mumbai",
    year: 2021,
    area: "11,000 sq.ft",
    clientType: "Technology Company",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    brief: "A 300-person technology company scaling rapidly needed a workspace that could support growth while reinforcing culture.",
    approach: "Flexible floor plates with modular furniture, a variety of work modes (focus, collaborate, recharge), and a brand-story wall at the entrance.",
    outcome: "The office was built to a 12-week deadline and delivered on time. Three media outlets covered the fit-out.",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200586c52bf?w=1400&q=80",
    ]
  },
  {
    slug: "nariman-apartment",
    name: "The Nariman Apartment",
    type: "Residential",
    location: "Nariman Point, Mumbai",
    year: 2020,
    area: "3,800 sq.ft",
    clientType: "Private Residence",
    coverImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    brief: "A heritage building apartment in South Mumbai's most prestigious address. The owner wanted the history of the building preserved, not erased.",
    approach: "Restoration of original Mangalore tile flooring, replication of colonial-era cornicing, and contemporary furniture that respects rather than fights the architecture.",
    outcome: "Shortlisted for the COA Heritage Preservation Award, 2021.",
    gallery: [
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=1400&q=80",
    ]
  },
  {
    slug: "hillside-retreat",
    name: "Hillside Retreat",
    type: "Landscape",
    location: "Lonavala, Maharashtra",
    year: 2024,
    area: "14,000 sq.ft",
    clientType: "Private Estate",
    coverImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
    brief: "A luxury estate requiring extensive landscaping to blend seamlessly with the natural topography.",
    approach: "We preserved existing trees and integrated stepped terraces with native flora and minimal hardscaping.",
    outcome: "A serene getaway that feels completely at one with nature.",
    gallery: [
      "https://images.unsplash.com/photo-1558904541-efa843a96f0f?w=1400&q=80",
    ]
  }
]
