export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Chapter {
  number: number;
  title: string;
  summary: string;
  details: string[];
}

export interface FeatureDetail {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: "benefit-1",
    title: "Decode any camera shot instantly",
    description: "Never feel lost during a screening or on a set. Learn to recognize wide, medium, close-up, and extreme angles at a glance.",
    iconName: "Camera",
  },
  {
    id: "benefit-2",
    title: "Master camera movement terms",
    description: "Understand the visual language of camera moves. Confidently define and differentiate pan, tilt, tracking, dollies, and crane shots.",
    iconName: "Move",
  },
  {
    id: "benefit-3",
    title: "Analyze editing techniques",
    description: "Look behind the scenes of seamless storytelling. Grasp the secrets of jump cuts, match cuts, cross cutting, and other transitions.",
    iconName: "Scissors",
  },
  {
    id: "benefit-4",
    title: "Identify diegetic vs non-diegetic sound",
    description: "Hear the cinematic world with new depth. Learn how dialogue, sound effects, ambient sound, and musical score function.",
    iconName: "Volume2",
  },
  {
    id: "benefit-5",
    title: "Break down lighting setups & mise-en-scène",
    description: "Deconstruct how light, shadows, props, costumes, and actor staging work in unison to convey deep emotional meaning.",
    iconName: "Film",
  },
  {
    id: "benefit-6",
    title: "Access a Quick Reference Glossary",
    description: "A fast, alphabetical breakdown of all 60+ terms. Perfect for quick look-ups right before an exam or walking onto a set.",
    iconName: "Book",
  },
];

export const CHAPTERS: Chapter[] = [
  {
    number: 1,
    title: "The Frame Speaks First",
    summary: "Shot sizes, camera angles, and framing composition.",
    details: ["Extreme Wide Shots to Extreme Close-Ups", "High, Low, and Dutch Angles", "Rule of Thirds and Headroom"],
  },
  {
    number: 2,
    title: "When the Camera Starts Moving",
    summary: "Camera movement vocabulary and hardware context.",
    details: ["Pans, Tilts, and Zooms", "Dolly, Steadicam, and Crane Shots", "Tracking and Handheld Aesthetics"],
  },
  {
    number: 3,
    title: "The Invisible Cut",
    summary: "Editing techniques, continuity rules, and creative transitions.",
    details: ["The 180-Degree Rule & Continuity", "Jump Cuts and Match Cuts", "Montage, Cross-cutting, and Dissolves"],
  },
  {
    number: 4,
    title: "Listening to the Unseen",
    summary: "Sound design vocabulary, mixing, and audio perspective.",
    details: ["Diegetic vs. Non-Diegetic Audio", "Foley, Ambience, and Sound Bridges", "Asynchronous Sound and Voiceover"],
  },
  {
    number: 5,
    title: "Light, Space, and Everything in Between",
    summary: "Lighting arrangements and mise-en-scène fundamentals.",
    details: ["Three-Point Lighting Setup", "High-Key vs. Low-Key Lighting Contrast", "Staging, Props, Costume, and Composition"],
  },
];

export const WHO_FOR = [
  "Film & Media students (GCSE, A-Level, BTEC, University) looking for a quick reference",
  "Self-taught filmmakers and videographers who want to speak the professional language",
  "Screenwriters seeking to describe visual scenes with proper terminology",
  "Cinephiles wanting to write or talk about film with academic precision",
  "YouTubers and video editors looking to improve their structural storytelling",
];

export const WHO_NOT_FOR = [
  "Advanced industry professionals looking for deeply technical camera rigging manuals",
  "Those seeking a full, practical production course with video tutorials and group mentorship",
  "People who prefer physical textbook format (this handbook is 100% digital PDF)",
];

export const HANDBOOK_SPECS: FeatureDetail[] = [
  { label: "Length", value: "20 Pages" },
  { label: "Format", value: "Digital PDF" },
  { label: "Language", value: "English" },
  { label: "Vocabulary Covered", value: "60+ Essential Film Terms" },
  { label: "Access & Updates", value: "Instant download + lifetime free updates" },
  { label: "Compatibility", value: "Mobile, tablet, desktop (E-Reader friendly)" },
  { label: "Structure", value: "5 comprehensive, structured chapters" },
];

export const FAQS: FAQItem[] = [
  {
    question: "What format is the handbook in, and how will I receive it?",
    answer: "The handbook is a beautifully formatted, high-resolution PDF. As soon as your purchase is completed, you'll receive an email with an instant download link to access the PDF on any of your devices.",
  },
  {
    question: "Does it work well on mobile phones or tablets?",
    answer: "Absolutely! The handbook has been custom designed with high-readability typography and a layout that is fully optimized for screens of all sizes, whether you're reading on a phone on set, on a tablet in class, or a desktop at your editing bay.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day, no-questions-asked money-back guarantee. If you feel the handbook didn't help you decode filmmaking terms or improve your confidence, just send an email and we'll issue a full refund.",
  },
  {
    question: "Is this suitable for complete beginners?",
    answer: "Yes, that is exactly who this was built for! This handbook is specifically designed for film students and aspiring directors who are currently overwhelmed by industry jargon. It strips away the pretension and defines each term using direct, visual, and simple explanations.",
  },
  {
    question: "Will I get future updates?",
    answer: "Yes! Any minor updates, spelling corrections, or small additions made to the book in the future will be sent directly to your email address 100% free of charge.",
  },
];
