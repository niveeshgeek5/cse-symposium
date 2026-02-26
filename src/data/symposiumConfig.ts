// ============================================
// SYMPOSIUM CONFIGURATION FILE
// Edit all event details, organizers, limits here
// ============================================

export const GOOGLE_FORM_LINK = "https://forms.gle/YOUR_FORM_LINK_HERE";

export const SYMPOSIUM = {
  name: "TECHNOVATE 2026",
  tagline: "Innovate • Create • Dominate",
  date: "March 15, 2026",
  venue: "Main Auditorium, CSE Block",
  college: "ABC College of Engineering",
  department: "Department of Computer Science and Engineering",
};

export const HOD = {
  name: "Dr. S. Ramesh Kumar",
  title: "Professor & Head",
  department: "Department of Computer Science and Engineering",
};

export const MAIN_ORGANIZER = {
  name: "Prof. A. Meena",
  phone: "+91 98765 43210",
  title: "Symposium Coordinator",
};

export interface EventOrganizer {
  name: string;
  phone: string;
}

export interface SymposiumEvent {
  id: string;
  title: string;
  description: string;
  rules: string[];
  type: "Individual" | "Team";
  teamSize?: number;
  category: "technical" | "non-technical";
  participantLimit: number;
  organizers: [EventOrganizer, EventOrganizer];
  icon: string;
}

export const EVENTS: SymposiumEvent[] = [
  // ---- TECHNICAL EVENTS ----
  {
    id: "debugging",
    title: "Debugging",
    description: "Hunt down bugs in code snippets across multiple rounds. Speed and accuracy matter!",
    rules: [
      "Individual participation only",
      "3 rounds of increasing difficulty",
      "Languages: C, Python, Java",
      "Time-bound rounds",
    ],
    type: "Individual",
    category: "technical",
    participantLimit: 50,
    organizers: [
      { name: "Organizer 1", phone: "+91 90000 00001" },
      { name: "Organizer 2", phone: "+91 90000 00002" },
    ],
    icon: "🐛",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Craft the perfect prompts to get AI models to produce the desired output.",
    rules: [
      "Individual participation only",
      "Use of ChatGPT / similar tools",
      "Judged on output accuracy & creativity",
      "Time limit: 45 minutes",
    ],
    type: "Individual",
    category: "technical",
    participantLimit: 40,
    organizers: [
      { name: "Organizer 3", phone: "+91 90000 00003" },
      { name: "Organizer 4", phone: "+91 90000 00004" },
    ],
    icon: "🤖",
  },
  {
    id: "coding-quiz",
    title: "Coding Quiz",
    description: "Test your knowledge of programming concepts, algorithms, and tech trivia.",
    rules: [
      "Individual participation only",
      "MCQ + rapid-fire rounds",
      "Covers DSA, OS, DBMS, Networks",
      "No electronic devices allowed",
    ],
    type: "Individual",
    category: "technical",
    participantLimit: 60,
    organizers: [
      { name: "Organizer 5", phone: "+91 90000 00005" },
      { name: "Organizer 6", phone: "+91 90000 00006" },
    ],
    icon: "💡",
  },
  {
    id: "ideathon",
    title: "Ideathon",
    description: "Present innovative ideas to solve real-world problems. Think big, pitch smart.",
    rules: [
      "Team of 2–4 members",
      "PPT presentation (max 10 slides)",
      "5 minutes pitch + 3 minutes Q&A",
      "Judged on innovation, feasibility, impact",
    ],
    type: "Team",
    teamSize: 4,
    category: "technical",
    participantLimit: 20,
    organizers: [
      { name: "Organizer 7", phone: "+91 90000 00007" },
      { name: "Organizer 8", phone: "+91 90000 00008" },
    ],
    icon: "🚀",
  },
  // ---- NON-TECHNICAL EVENTS ----
  {
    id: "rapid-rush",
    title: "Rapid Rush",
    description: "A fast-paced relay of fun challenges. Speed, teamwork, and chaos — all in one!",
    rules: [
      "Team of 3–5 members",
      "Multiple mini-games in relay format",
      "Fastest team wins",
      "Organizer decisions are final",
    ],
    type: "Team",
    teamSize: 5,
    category: "non-technical",
    participantLimit: 15,
    organizers: [
      { name: "Organizer 9", phone: "+91 90000 00009" },
      { name: "Organizer 10", phone: "+91 90000 00010" },
    ],
    icon: "⚡",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Capture the moment! Theme-based photography contest judged on creativity.",
    rules: [
      "Individual participation only",
      "Theme revealed on spot",
      "Mobile / DSLR allowed",
      "Basic editing allowed, no AI generation",
    ],
    type: "Individual",
    category: "non-technical",
    participantLimit: 40,
    organizers: [
      { name: "Organizer 11", phone: "+91 90000 00011" },
      { name: "Organizer 12", phone: "+91 90000 00012" },
    ],
    icon: "📸",
  },
  {
    id: "chess",
    title: "Chess",
    description: "Classic game of strategy. Outsmart your opponent in a timed chess tournament.",
    rules: [
      "Individual participation only",
      "Rapid format (10+5)",
      "Swiss-system tournament",
      "FIDE rules apply",
    ],
    type: "Individual",
    category: "non-technical",
    participantLimit: 32,
    organizers: [
      { name: "Organizer 13", phone: "+91 90000 00013" },
      { name: "Organizer 14", phone: "+91 90000 00014" },
    ],
    icon: "♟️",
  },
  {
    id: "meme-creation",
    title: "Meme Creation",
    description: "Create the funniest, most relatable memes on given topics. Humor wins!",
    rules: [
      "Individual participation only",
      "Topics given on spot",
      "Use any meme template or create original",
      "No offensive content",
    ],
    type: "Individual",
    category: "non-technical",
    participantLimit: 50,
    organizers: [
      { name: "Organizer 15", phone: "+91 90000 00015" },
      { name: "Organizer 16", phone: "+91 90000 00016" },
    ],
    icon: "😂",
  },
];
