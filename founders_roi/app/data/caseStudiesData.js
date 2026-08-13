import { CalendarDays, Plane, ShoppingBag, GraduationCap } from "lucide-react";

export const categoriesConfig = [
  {
    key: "wedding-events",
    label: "1. Wedding & Event Management",
    icon: CalendarDays,
  },
  { key: "travel-hospitality", label: "2. Travel & Hospitality", icon: Plane },
  { key: "d2c-ecommerce", label: "3. D2C & E-commerce", icon: ShoppingBag },
  { key: "education", label: "4. Education", icon: GraduationCap },
];

export const caseStudiesData = [
  // --- 1. WEDDING & EVENT MANAGEMENT ---
  {
    id: "01",
    categoryKey: "wedding-events",
    cityOrRegion: "Madurai",
    industry: "Wedding & Events",
    headline: "How ₹85,570 in ad spend became",
    accentText: "₹43.36L in revenue.",
    subheadline:
      "A Madurai-based wedding photography brand, competing for high-value bookings in a crowded tier-2 city market — turned into a predictable, revenue-accountable acquisition system.",
    metrics: [
      { num: "₹85,570", lbl: "Ad Spend" },
      { num: "₹43.36L", lbl: "Revenue Generated" },
      { num: "50.67X", lbl: "ROAS · ₹1 → ₹50.67", isRoas: true },
    ],
    clientName: "Madurai-based Wedding Photography Brand",
    clientDescription:
      "A tier-2 city wedding brand competing for high-value wedding bookings in a crowded market.",
    problemTitle: "Spend without a system",
    problemDescription:
      "The brand didn't just need more leads. It needed a predictable system to turn marketing spend into qualified enquiries, bookings, and measurable revenue.",
    solutionTitle: "A performance-led customer acquisition system",
    pillars: [
      {
        n: "01",
        title: "Audience Strategy",
        description: "reaching high-intent wedding audiences.",
      },
      {
        n: "02",
        title: "Creative Strategy",
        description: "ads built to capture attention and communicate value.",
      },
      {
        n: "03",
        title: "Campaign Optimisation",
        description: "continuously improving and scaling what worked.",
      },
      {
        n: "04",
        title: "Lead Quality",
        description: "focused on enquiries with genuine commercial potential.",
      },
      {
        n: "05",
        title: "Revenue-led Scaling",
        description: "optimising for revenue, not vanity metrics.",
      },
    ],
    conclusionNote:
      "A wedding brand from Madurai turned a relatively modest advertising investment into ₹43.36L in attributed revenue.",
    takeawayTitle: "The city wasn't the limitation. The system was.",
  },
  {
    id: "02",
    categoryKey: "wedding-events",
    cityOrRegion: "Chennai",
    industry: "Wedding & Events",
    headline: "How ₹75,929 in ad spend became",
    accentText: "₹28.24L in wedding sales.",
    subheadline:
      "A Chennai-based premium wedding photography brand, operating where attention is easy to buy but bookings are hard to win.",
    metrics: [
      { num: "37", lbl: "Weddings Sold" },
      { num: "₹75,929", lbl: "Ad Spend" },
      { num: "₹28.24L", lbl: "Revenue Generated" },
      { num: "37.2X", lbl: "ROAS · ₹1 → ₹37.20", isRoas: true },
    ],
    clientName: "Chennai-based Wedding Photography Brand",
    clientDescription:
      "A premium wedding photography brand operating in a highly competitive market where attention is easy to buy — but actual bookings are harder to win.",
    problemTitle: "Interest without a path to revenue",
    problemDescription:
      "The challenge wasn't visibility. It was turning digital interest into real wedding bookings and meaningful revenue.",
    solutionTitle: "A conversion-focused acquisition system",
    pillars: [
      { n: "01", title: "High-intent audience targeting", description: "" },
      { n: "02", title: "Conversion-led creative strategy", description: "" },
      {
        n: "03",
        title: "Campaign optimisation and budget allocation",
        description: "",
      },
      { n: "04", title: "Lead quality and follow-up focus", description: "" },
      {
        n: "05",
        title: "Continuous optimisation against actual sales",
        description: "",
      },
    ],
    conclusionNote: "37 sales. ₹28.24L in revenue. From ₹75.9K in advertising.",
    takeawayTitle:
      "We didn't optimise for attention. We optimised for transactions.",
  },
  {
    id: "03",
    categoryKey: "wedding-events",
    cityOrRegion: "Coimbatore",
    industry: "Wedding & Events",
    headline: "How ₹1.41L in ad spend unlocked",
    accentText: "₹60L+ in wedding booking potential.",
    subheadline:
      "A Coimbatore-based wedding brand was struggling to attract the right customers through Meta — not because there was no demand, but because campaigns weren't bringing budget-qualified leads.",
    metrics: [
      { num: "₹1.41L", lbl: "Ad Spend" },
      { num: "₹60L+", lbl: "Booking Potential" },
      { num: "₹30L+", lbl: "Wedding Revenue Closed", isRoas: true },
    ],
    clientName: "Coimbatore-based Wedding Brand",
    clientDescription:
      "A growing wedding brand competing for premium bookings.",
    problemTitle: "Meta was bringing leads. Not the right leads.",
    problemDescription:
      "A significant portion of incoming leads didn't have the budget required for high-tier packages.",
    solutionTitle: "Rebuilt the acquisition system around buyer quality",
    pillars: [
      {
        n: "01",
        title: "Audience Strategy",
        description: "identified and targeted audiences with stronger intent.",
      },
      {
        n: "02",
        title: "Creative Strategy",
        description: "repositioned creatives to communicate value upfront.",
      },
      {
        n: "03",
        title: "Campaign Strategy",
        description: "restructured Meta campaigns beyond lead volume.",
      },
      {
        n: "04",
        title: "Lead Quality",
        description: "focused on enquiries with genuine budget potential.",
      },
      {
        n: "05",
        title: "Revenue-led Optimisation",
        description: "optimised around business outcomes, not CPL.",
      },
    ],
    conclusionNote:
      "₹1.41L in ad spend generated ₹60L+ in potential bookings, with ₹30L+ closed.",
    takeawayTitle: "The problem wasn't Meta. It was the system behind it.",
    takeawaySub:
      "When built to attract the right buyer, marketing becomes a predictable engine for revenue.",
  },
  {
    id: "04",
    categoryKey: "wedding-events",
    cityOrRegion: "Salem, Erode & Coimbatore",
    industry: "Wedding & Events",
    headline: "How we transformed inconsistent inbound into a",
    accentText: "₹25L/month revenue engine.",
    subheadline:
      "A multi-location photography brand was generating inbound enquiries, but low conversion rates stalled growth.",
    metrics: [
      { num: "3", lbl: "Locations" },
      { num: "20%", lbl: "Qualified Leads Before" },
      { num: "40-50%", lbl: "Qualified Wedding Leads" },
      { num: "₹25L", lbl: "Monthly Revenue", isRoas: true },
    ],
    clientName: "Multi-location Wedding & Baby Photography Brand",
    clientDescription: "Operating across Salem, Erode, and Coimbatore.",
    problemTitle: "Plenty of enquiries. Not enough real opportunities.",
    problemDescription:
      "Only around 20% of total inbound enquiries were genuinely qualified.",
    solutionTitle:
      "Built the acquisition system around lead quality and revenue",
    pillars: [
      {
        n: "01",
        title: "Demand Generation",
        description: "consistent inbound flow across locations.",
      },
      {
        n: "02",
        title: "Audience Strategy",
        description: "refined targeting for higher purchase intent.",
      },
      {
        n: "03",
        title: "Creative Strategy",
        description: "communication designed to attract ideal customers.",
      },
      {
        n: "04",
        title: "Lead Quality Optimisation",
        description: "analysed and optimised for conversion.",
      },
      {
        n: "05",
        title: "Location Strategy",
        description: "focused multi-regional approach.",
      },
    ],
    conclusionNote:
      "Today, the brand generates approximately ₹25L in monthly revenue.",
    takeawayTitle: "More leads don't always mean more business.",
    takeawaySub:
      "Growth came from improving who was enquiring and their buying potential.",
  },

  // --- 2. TRAVEL & HOSPITALITY ---
  {
    id: "05",
    categoryKey: "travel-hospitality",
    cityOrRegion: "Salem",
    industry: "Travel & Hospitality",
    headline: "How ₹96,738 in ad spend became",
    accentText: "₹43,41,175 in revenue generated.",
    subheadline:
      "Twinkle Holidays — a Salem-based travel brand competing in a price-sensitive market out of a tier-2 city.",
    metrics: [
      { num: "₹96,738", lbl: "Ad Spend" },
      { num: "₹43,41,175", lbl: "Revenue Generated" },
      { num: "44:1", lbl: "ROAS · 4,488%", isRoas: true },
    ],
    clientName: "Twinkle Holidays",
    clientDescription:
      "A travel and holiday-packages brand based in Salem, Tamil Nadu.",
    problemTitle:
      "Leads were coming in — at the wrong cost, with the wrong return",
    problemDescription:
      "A 4:1 ROAS meant marketing was working linearly, not compounding.",
    solutionTitle: "Rebuilt the full funnel — creative to sales closure",
    pillars: [
      {
        n: "01",
        title: "Creative & Campaign Strategy",
        description: "brought CPL down from ₹67 to ₹8.80.",
      },
      {
        n: "02",
        title: "Lead Generation System",
        description: "scalable lead-gen engine.",
      },
      {
        n: "03",
        title: "Dedicated Sales Team",
        description: "run specifically for Twinkle Holidays.",
      },
      {
        n: "04",
        title: "Sales System & Closure",
        description: "connected leads to booking closures.",
      },
      {
        n: "05",
        title: "Revenue-led Optimisation",
        description: "scaled spend against proven conversion.",
      },
    ],
    conclusionNote: "Ad spend was cut by 86.5% while revenue rose 241.9%.",
    takeawayTitle:
      "More leads at a lower cost isn't the win by itself. Closed bookings are.",
    takeawaySub:
      "Salem isn't a metro market — and the numbers didn't need it to be.",
  },

  // --- 3. D2C & E-COMMERCE ---
  {
    id: "06",
    categoryKey: "d2c-ecommerce",
    cityOrRegion: "Chennai",
    industry: "D2C & E-commerce",
    headline: "How ₹94,920 in ad spend became",
    accentText: "₹88.2L in revenue generated.",
    subheadline:
      "A Chennai-based D2C fresh-meat and protein delivery app scaled orders exponentially.",
    metrics: [
      { num: "₹94,920", lbl: "Ad Spend" },
      { num: "₹88.2L", lbl: "Revenue Generated" },
      { num: "9.27:1", lbl: "ROAS · 927%", isRoas: true },
    ],
    clientName: "Chennai-based D2C Consumer Brand",
    clientDescription:
      "Fresh meat and protein delivery app (Chicken, Mutton, Seafood, Eggs).",
    problemTitle: "No clear roadmap — inconsistent order volume",
    problemDescription:
      "It took roughly six months to reach 1,500 downloads under their legacy pace.",
    solutionTitle: "Built a paid + organic system tied to order volume",
    pillars: [
      {
        n: "01",
        title: "Performance Marketing System",
        description: "connected ad spend directly to completed orders.",
      },
      {
        n: "02",
        title: "Organic Social Branding",
        description: "built category trust alongside ads.",
      },
      {
        n: "03",
        title: "Month-on-Month Tracking",
        description: "trackable growth roadmap.",
      },
      {
        n: "04",
        title: "Install-to-Order Focus",
        description: "optimised toward completed transactions.",
      },
      {
        n: "05",
        title: "Revenue-led Scaling",
        description: "disciplined spend scaling.",
      },
    ],
    conclusionNote:
      "6,780 downloads drove 19,600 completed orders and ₹88.2L in revenue.",
    takeawayTitle: "Speed compounds. So does revenue.",
    takeawaySub:
      "1,500 downloads took six months before. It took one month after.",
  },

  // --- 4. EDUCATION ---
  {
    id: "07",
    categoryKey: "education",
    cityOrRegion: "Tamil Nadu",
    industry: "Education",
    headline: "From no digital presence to a",
    accentText: "complete digital ecosystem.",
    subheadline:
      "KSA Groups of Institutions moved from online obscurity to a fully structured multi-college identity.",
    metrics: [
      { num: "4", lbl: "Colleges Connected" },
      { num: "1", lbl: "Master KSA Group Website" },
      { num: "100%", lbl: "Digital Transformation" },
    ],
    clientName:
      "KSA Groups of Institutions (Kamarajar College of Institutions)",
    clientDescription:
      "Spanning Nursing, Pharmacy, Polytechnic, and Maritime education.",
    problemTitle: "No proper digital presence, across the entire group",
    problemDescription:
      "No central website or individual college sites for prospective students and parents.",
    solutionTitle: "A complete, connected digital ecosystem",
    pillars: [
      {
        n: "01",
        title: "Master KSA Group Hub",
        description: "unified brand identity.",
      },
      {
        n: "02",
        title: "Dedicated Institution Sites",
        description: "functional sites for each college.",
      },
      {
        n: "03",
        title: "Information Architecture",
        description: "clear access to courses and admissions.",
      },
      {
        n: "04",
        title: "Ecosystem Scalability",
        description: "built to grow with future expansion.",
      },
    ],
    conclusionNote:
      "A professional online identity connecting all four institutions into one ecosystem.",
    takeawayTitle:
      "We didn't just build four websites. We built a connected digital ecosystem.",
    takeawaySub: "Four institutions. One connected identity.",
  },
];
