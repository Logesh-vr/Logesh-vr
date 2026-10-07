export const categories = [
  "All projects",
  "Interactive systems",
  "Evolutionary AI",
] as const;
export type Category = (typeof categories)[number];
export const projects = [
  {
    slug: "fuitfly2",
    name: "Virtual Fly Lab",
    category: "Interactive systems",
    kind: "Connectome simulation & embodied neuroscience",
    headline: "From neural spikes to a walking world.",
    description:
      "Couples a published fruit-fly connectome model to a NeuroMechFly body. Stimulate sensory neurons, watch activity become movement, and explore a second fly with an independent brain and physics world.",
    steps: [
      "Encode odor readings as sensory stimulation for a published Shiu/FlyWire spiking brain model running in Brian2.",
      "Decode descending-neuron firing rates into walking and turning drives; advance MuJoCo body physics in fixed steps to close the sensory–motor loop.",
      "Run a second brain in an isolated process with its own neural state and body. An engineered keyboard bridge adds sensory stimulation, while browser controls expose activity and preserve experiment logs.",
    ],
    detail:
      "A research prototype using engineered sensory and motor mappings. Neural activity views are schematic; simulation runs slower than real time. Nested full-scale behavior still awaits validation, and learned computer use is not implemented.",
    stack: ["Python", "Brian2", "MuJoCo"],
    visual: "connectome",
  },
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
] as const;
