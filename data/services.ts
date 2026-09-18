import {
  FlaskConical,
  Hand,
  Waves,
  Leaf,
  Dumbbell,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string[];
  benefits: string[];
  process: string[];
  suitableFor: string[];
  duration: string;
  precautions: string[];
  image: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "hijama-cupping",
    title: "Hijama (Cupping)",
    description:
      "Traditional wet and dry cupping therapy delivered with careful consultation and hygiene.",
    fullDescription: [
      "Hijama, also known as cupping therapy, is a traditional practice used in Unani and related healing traditions. Our sessions begin with a consultation so the practitioner can understand your concerns and decide whether cupping is appropriate.",
      "The session may include dry cupping or wet cupping depending on the consultation. Treatment areas, aftercare, and session planning are discussed clearly before anything begins.",
    ],
    benefits: [
      "A structured consultation before treatment",
      "Traditional dry or wet cupping options when appropriate",
      "Clear aftercare guidance after the session",
      "A calm, hygienic treatment environment",
    ],
    process: [
      "Discuss your health concerns, history, and expectations.",
      "Review suitability, treatment areas, and the planned approach.",
      "Complete the cupping session using the agreed method.",
      "Receive aftercare guidance and recommendations for follow-up.",
    ],
    suitableFor: [
      "Adults exploring traditional cupping therapy",
      "People seeking a guided wellness session",
      "Visitors who can provide complete health information before treatment",
    ],
    duration: "Usually 30-60 minutes, depending on the consultation and selected approach.",
    precautions: [
      "Share your current medicines, medical conditions, allergies, and pregnancy status before booking.",
      "Cupping may not be suitable for everyone; final suitability is decided during consultation.",
      "This service is complementary wellness care and does not replace emergency or prescribed medical treatment.",
    ],
    image: "/hero/hero-image.png",
    icon: FlaskConical,
  },
  {
    id: 2,
    slug: "massage-therapy",
    title: "Massage Therapy",
    description:
      "A guided herbal oil massage session focused on relaxation and general body wellness.",
    fullDescription: [
      "Our massage therapy sessions use a traditional herbal oil approach selected around the visitor's comfort and stated wellness goals. The practitioner discusses pressure, areas to avoid, and any relevant health considerations before starting.",
      "The service is designed as a supportive wellness experience. It is not presented as a diagnosis or a replacement for treatment from a qualified medical professional.",
    ],
    benefits: [
      "Personalised discussion of comfort and pressure",
      "Traditional herbal oil application",
      "A focused session for rest and general wellbeing",
      "Practical guidance for post-session care",
    ],
    process: [
      "Share your goals, sensitivities, and areas of concern.",
      "Agree on the session focus, pressure, and areas to avoid.",
      "Complete the massage session in a comfortable setting.",
      "Review simple aftercare and hydration guidance.",
    ],
    suitableFor: [
      "Adults looking for a relaxation-focused wellness session",
      "People who prefer a guided herbal oil massage",
      "Visitors able to discuss sensitivities and health history beforehand",
    ],
    duration: "Usually 45-60 minutes, depending on the selected session.",
    precautions: [
      "Tell the practitioner about skin sensitivities, injuries, fever, medicines, or other health concerns.",
      "Postpone a session if you feel acutely unwell or have an unexplained injury.",
      "Stop the session and inform the practitioner if you feel discomfort.",
    ],
    image: "/hero/hero-image2.png",
    icon: Hand,
  },
  {
    id: 3,
    slug: "steam-therapy",
    title: "Steam Therapy",
    description:
      "A supervised herbal steam session for comfort, relaxation, and general respiratory wellness.",
    fullDescription: [
      "Steam therapy uses warm vapour in a supervised setting. We first discuss your comfort, sensitivities, and the reason you are considering a session before deciding whether it is appropriate.",
      "The session is kept practical and comfortable, with guidance on heat, duration, and when to stop. It should not be used as a substitute for evaluation of breathing difficulty or other urgent symptoms.",
    ],
    benefits: [
      "Supervised heat and steam exposure",
      "A consultation-led approach to comfort and duration",
      "Traditional herbal wellness support",
      "Clear guidance on when to stop or seek medical care",
    ],
    process: [
      "Discuss symptoms, sensitivities, and any relevant medical history.",
      "Confirm whether a supervised steam session is suitable.",
      "Complete a measured session with comfort checks.",
      "Receive aftercare guidance before leaving.",
    ],
    suitableFor: [
      "Adults seeking a supervised relaxation and wellness session",
      "Visitors with general comfort goals who can discuss their health history",
      "People who understand that steam therapy is not emergency respiratory care",
    ],
    duration: "Usually 15-30 minutes, including comfort checks.",
    precautions: [
      "Do not book this service for severe breathing difficulty, chest pain, fainting, or other urgent symptoms.",
      "Tell the practitioner about asthma, heart conditions, blood-pressure concerns, pregnancy, and heat sensitivity.",
      "Stop immediately if you feel dizzy, faint, short of breath, or unwell.",
    ],
    image: "/hero/hero-image3.png",
    icon: Waves,
  },
  {
    id: 4,
    slug: "detox-program",
    title: "Detox Program",
    description:
      "A consultation-led Unani wellness plan built around everyday routines and appropriate herbal guidance.",
    fullDescription: [
      "Our detox program begins with a conversation about routines, food habits, sleep, hydration, and the wellness goals you want to work toward. Any herbal recommendations are discussed in the context of your personal information.",
      "The program focuses on practical, sustainable habits rather than dramatic promises. The exact plan and follow-up schedule are confirmed after consultation.",
    ],
    benefits: [
      "A structured review of daily wellness routines",
      "Traditional Unani guidance discussed with context",
      "Practical steps for food, hydration, sleep, and activity",
      "Follow-up conversations to review progress",
    ],
    process: [
      "Discuss routines, goals, existing conditions, and current medicines.",
      "Agree on realistic food and lifestyle priorities.",
      "Review any appropriate Unani wellness support.",
      "Set a follow-up point to discuss questions and adjustments.",
    ],
    suitableFor: [
      "Adults seeking structured lifestyle guidance",
      "People willing to share accurate health and medicine information",
      "Visitors looking for gradual, routine-based wellness support",
    ],
    duration: "Initial consultation usually takes 30-45 minutes; follow-up timing is individual.",
    precautions: [
      "Do not stop prescribed medicines or begin restrictive diets without speaking to your doctor.",
      "Share pregnancy, chronic conditions, allergies, and all supplements before receiving guidance.",
      "This program is not a substitute for diagnosis or treatment of a medical condition.",
    ],
    image: "/hero/hero-image4.png",
    icon: Leaf,
  },
  {
    id: 5,
    slug: "regimental-therapy",
    title: "Regimental Therapy",
    description:
      "Traditional Unani-informed routines that connect movement, rest, and daily lifestyle habits.",
    fullDescription: [
      "Regimental therapy is a broad Unani approach to supporting wellbeing through routines such as movement, rest, and lifestyle adjustments. We begin by understanding what is practical for your schedule and current level of activity.",
      "Recommendations are kept gradual and personalised. The goal is to help you understand manageable next steps, not to make unsupported claims about treating a condition.",
    ],
    benefits: [
      "A practical review of movement and daily routine",
      "Gradual activity suggestions based on comfort",
      "Traditional principles explained in plain language",
      "A plan that can be revisited during follow-up",
    ],
    process: [
      "Discuss activity level, work routine, sleep, and health history.",
      "Identify realistic changes that fit your daily life.",
      "Set a gradual movement and rest routine.",
      "Review comfort and progress during follow-up.",
    ],
    suitableFor: [
      "Adults seeking routine and lifestyle guidance",
      "People ready to make gradual, sustainable changes",
      "Visitors who can discuss limitations and current health concerns",
    ],
    duration: "Usually 30-45 minutes for the first consultation.",
    precautions: [
      "Discuss injuries, heart or breathing conditions, pregnancy, and mobility limitations before starting.",
      "Avoid any activity that causes pain, dizziness, chest discomfort, or unusual breathlessness.",
      "Seek qualified medical care for new or worsening symptoms.",
    ],
    image: "/hero/hero-image.png",
    icon: Dumbbell,
  },
  {
    id: 6,
    slug: "diet-therapy",
    title: "Diet Therapy",
    description:
      "Personalised food and routine guidance shaped around your goals, preferences, and health information.",
    fullDescription: [
      "Diet therapy starts with a detailed conversation about your current meals, schedule, preferences, and wellness goals. The aim is to make food guidance understandable and realistic for everyday life.",
      "Any plan is discussed alongside your health history and existing care. We encourage visitors with medical dietary needs to coordinate recommendations with their qualified healthcare professional.",
    ],
    benefits: [
      "A review of current eating patterns and routines",
      "Guidance tailored to preferences and practical constraints",
      "Clear, gradual changes instead of extreme restrictions",
      "An opportunity to review questions during follow-up",
    ],
    process: [
      "Discuss meals, schedule, preferences, allergies, and health history.",
      "Identify a small number of realistic food and routine priorities.",
      "Create a practical guidance plan for daily use.",
      "Review progress and questions during follow-up.",
    ],
    suitableFor: [
      "Adults looking for practical food and routine guidance",
      "People willing to share accurate dietary and health information",
      "Visitors seeking gradual long-term wellness habits",
    ],
    duration: "Usually 30-45 minutes for the initial consultation.",
    precautions: [
      "Mention allergies, pregnancy, diabetes, kidney or liver conditions, and prescribed medicines.",
      "Do not replace a prescribed medical diet without speaking with your doctor or dietitian.",
      "Seek professional care for significant or unexplained weight change or other concerning symptoms.",
    ],
    image: "/hero/hero-image2.png",
    icon: HeartPulse,
  },
];