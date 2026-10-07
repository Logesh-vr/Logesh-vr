export const categories = [
  "All projects",
  "Interactive systems",
  "Evolutionary AI",
] as const;
export type Category = (typeof categories)[number];
export const projects = [
  {
    slug: "VaanThuli",
    name: "VaanThuli",
    category: "Interactive systems",
    kind: "Orbital tracking & 3D visualization",
    headline: "Turn orbital data into a sky you can explore.",
    description:
      "An interactive space explorer that propagates satellite orbits from real orbital elements, renders them on a 3D Earth, and brings nearby ground tracks into your own sky bubble.",
    steps: [
      "Ingest satellite orbital elements, then use SGP4 propagation to calculate latitude, longitude, altitude, and velocity at a given time.",
      "Render satellite positions with Three.js instancing, while a location-and-radius query filters ground tracks around the observer.",
      "Combine the orbital view with NASA near-Earth asteroid data, backed by an in-memory cache and persisted satellite records.",
    ],
    detail:
      "Orbital positions are calculated from available data, not measured live. The sky bubble uses surface distance to a satellite’s ground track; it is not a prediction of naked-eye visibility.",
    stack: ["Three.js", "SGP4", "Fastify"],
    visual: "orbital",
  },
  {
    slug: "EvoTheDino",
    name: "EvoTheDino",
    category: "Evolutionary AI",
    kind: "Neural networks & genetic algorithms",
    headline: "A dinosaur that evolves its own decisions.",
    description:
      "A neural network learns jump, duck, and run decisions in the Chromium Dino runner. Each failed run becomes a fitness score that shapes the next generation of brains.",
    steps: [
      "Feed six signals—including obstacle distance, size, clearance, and game speed—into a 6–8–3 neural network built in JavaScript.",
      "Evaluate candidate brains through game runs, preserve the strongest performers, and breed new candidates through tournament selection, crossover, and mutation.",
      "Inspect the active brain’s inputs, hidden activations, and outputs alongside generation statistics; save or reload a champion to continue experimenting.",
    ],
    detail:
      "Uses neuroevolution rather than a pretrained model or an LLM API. Performance emerges from candidate evaluation and depends on the training run; no guaranteed score is claimed.",
    stack: ["JavaScript", "Neural networks", "Genetic algorithms"],
    visual: "evolution",
  },
  {
    slug: "Emd",
    name: "Emd",
    category: "Interactive systems",
    kind: "Physics simulation & streaming analytics",
    headline: "Give a parcel’s journey a digital twin.",
    description:
      "A software digital twin that simulates a parcel’s drops, flips, and heat exposure, then turns its sensor stream into a 3D view, damage-risk breakdown, and incident timeline.",
    steps: [
      "Generate acceleration, rotation, temperature, and humidity samples as a parcel moves through simulated delivery stages, with injectable drops and handling events.",
      "Detect free-fall and impact signatures, estimate drop height from fall duration, and accumulate inversion time and thermal exposure.",
      "Stream telemetry through FastAPI WebSockets to a Three.js dashboard, and compare incident timing with delivery custody to produce an exportable audit report.",
    ],
    detail:
      "A pure software simulation with heuristic risk scores and custody rules. It demonstrates the analysis pipeline; it does not certify real damage or establish legal liability.",
    stack: ["Python", "FastAPI", "Three.js"],
    visual: "parcel",
  },
] as const;
