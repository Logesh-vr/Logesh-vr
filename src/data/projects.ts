export const categories = [
  "All projects",
  "Full stack",
  "Computer vision",
] as const;
export type Category = (typeof categories)[number];
export const projects = [
  {
    slug: "hoWrk",
    name: "hoWrk",
    category: "Full stack",
    kind: "Civic technology",
    headline: "A shared view of what matters.",
    description:
      "A hackathon-built incident platform connecting citizens, guardians, and authorities through live maps and role-based dashboards.",
    detail:
      "Combines a React interface with a FastAPI backend, JWT authentication, and incident mapping for different user roles.",
    stack: ["React", "TypeScript", "FastAPI"],
    visual: "map",
  },
  {
    slug: "UB",
    name: "UB",
    category: "Full stack",
    kind: "Fitness & performance",
    headline: "Build strength. Track the process.",
    description:
      "A gym tracker for personal records, weekly routines, training history, and lift-based leaderboards.",
    detail:
      "Pairs a React and TypeScript frontend with FastAPI and PostgreSQL. Includes routine management and a dedicated deload mode.",
    stack: ["React", "FastAPI", "PostgreSQL"],
    visual: "training",
  },
  {
    slug: "SignSenseAI",
    name: "SignSenseAI",
    category: "Computer vision",
    kind: "Gesture recognition",
    headline: "From movement to meaning.",
    description:
      "A webcam-based experiment that identifies common hand gestures from hand landmarks and finger states.",
    detail:
      "Streams camera frames to FastAPI and uses MediaPipe hand landmarks with heuristic finger-state logic. An exploration of gesture recognition, rather than a complete sign-language translator.",
    stack: ["React", "MediaPipe", "OpenCV"],
    visual: "gesture",
  },
] as const;
