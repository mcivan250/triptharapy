export type Destination = {
  /** URL slug — also the guide markdown filename and image basename. */
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  /** Short editorial badge shown on the card (only some destinations have one). */
  tag?: string;
  /** <title> of the destination page. */
  seoTitle: string;
};

export const destinations: Destination[] = [
  {
    id: "charleston",
    title: "Charleston, South Carolina",
    category: "City",
    image: "/charleston.png",
    description: "Historic charm, world-renowned food, and walkable cobblestone streets.",
    tag: "Featured",
    seoTitle: "Charleston by Fork: An Immersive Virtual Review",
  },
  {
    id: "outer-banks",
    title: "Outer Banks, North Carolina",
    category: "Beach",
    image: "/outer-banks.png",
    description: "Wild horses, iconic lighthouses, and laid-back coastal vibes.",
    seoTitle: "Outer Banks: Wild Horses & Lighthouses — Virtual Review",
  },
  {
    id: "aspen",
    title: "Aspen/Snowmass, Colorado",
    category: "Mountain",
    image: "/aspen.png",
    description: "Summer paradise with wildflower meadows and dramatic peaks.",
    seoTitle: "Aspen in Summer: The Rockies' Best-Kept Secret",
  },
  {
    id: "grand-teton",
    title: "Grand Teton, Wyoming",
    category: "National Park",
    image: "/grand-teton.png",
    description: "Dramatic mountains, abundant wildlife, and pristine alpine lakes.",
    seoTitle: "Grand Teton: A Self-Guided Wildlife Safari",
  },
  {
    id: "door-county",
    title: "Door County, Wisconsin",
    category: "Off the Beaten Path",
    image: "/door-county.png",
    description: "The Cape Cod of the Midwest with lighthouses and cherry orchards.",
    seoTitle: "Door County: Fish Boils & Lake Michigan Lighthouses",
  },
];

export function getDestination(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}
