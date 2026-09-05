import { ScrollTimeline } from "../lightswind/scroll-timeline";
import {
  MapPin,
  GraduationCap,
  Boxes,
Ticket,
  Globe,
  HeartPulse,
  Landmark,
  Calculator,
  Car,
  Coffee,
  ScanLine,
  UtensilsCrossed,
  Camera,
} from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    // --- 2023 ---
    {
      year: "2023",
      title: "FST Navigation",
      description:
        "Designed an Augmented Reality wayfinding system for the FST building at UIN Walisongo, covering floors 1 to 5, using Unity, C#, and the Immersal SDK for markerless indoor position tracking.",
      icon: <MapPin className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "SPMB TK-AMARTA Semarang Website",
      description:
        "Built a web-based new student registration system with HTML, CSS, PHP, and MySQL, replacing the manual registration process with a cleaner digital workflow.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "Human Sensory Organ Anatomy",
      description:
        "Modeled human sensory organs in 3D using Blender, used as an interactive learning medium based on Augmented Reality.",
      icon: <Boxes className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "E-Ticket Stadion Pemalang",
      description:
        "Developed an Android e-ticketing application with Flutter and Firebase to manage match tickets at Stadion Pemalang.",
      icon: <Ticket className="h-4 w-4 mr-2 text-primary" />,
    },

    // --- 2024 ---
    {
      year: "2024",
      title: "E-Commerce Toko Bangunan Martoyo Putra",
      description:
        "Built an e-commerce platform with an integrated payment system and responsive design, successfully increasing user traffic by 30% within the first 3 months.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "Tooth Extraction Simulation",
      description:
        "Developed a VR-based tooth extraction simulation with Unity, C#, and Meta Quest 2, designed as a safe training tool before hands-on practice.",
      icon: <HeartPulse className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "Explore JakARta",
      description:
        "Designed a marker-based AR experience introducing Jakarta's landmarks such as Monas, Istiqlal Mosque, and Kota Tua in interactive 3D form.",
      icon: <Landmark className="h-4 w-4 mr-2 text-primary" />,
    },

    // --- 2025 ---
    {
      year: "2025",
      title: "Aritmatika Kids",
      subtitle: "AR + Firebase for Elementary School",
      description:
        "Built an AR arithmetic learning app with interactive quizzes, where student scores and progress are stored in Firebase and can be monitored directly by teachers.",
      icon: <Calculator className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "AR Vehicle Damage Diagnostics",
      description:
        "Developed markerless AR to visualize four-wheeled vehicle damage diagnostics in 3D, making problem identification easier without additional tools.",
      icon: <Car className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "AR Menu Soraya Brewstar",
      description:
        "Designed markerless AR that displays 3D visuals of the cafe's drink menu directly from the packaging or table, enhancing the customer's ordering experience.",
      icon: <Coffee className="h-4 w-4 mr-2 text-primary" />,
    },

    // --- 2026 ---
    {
      year: "2026",
      title: "Smart Maintenance Portal Website",
      description:
        "Built a modular QR-based system for every machine: WebAR shows component locations, AI guides maintenance procedures, history & spare parts are stored in a database, and the OEM dashboard updates automatically with upcoming service scheduling.",
      icon: <ScanLine className="h-4 w-4 mr-2 text-primary" />,
    },
    
    {
      year: "2026",
      title: "Restaurant Waiter Simulation",
      description:
        "Designed a VR simulation where users play the role of a restaurant waiter, delivering food and drinks from the kitchen to the customer's table using Unity and Meta Quest 2.",
      icon: <UtensilsCrossed className="h-4 w-4 mr-2 text-primary" />,
    },
        {
      year: "2026",
      title: "Seven.grad",
      description:
        "Built a booking platform for outdoor graduation photography and video sessions using Laravel 11 and React.js, Tailwind CSS, and Supabase - clients book without creating an account, and slots lock automatically once payment is verified.",
      icon: <Camera className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Project Timeline"
        subtitle="3 selected projects each year since 2023"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};