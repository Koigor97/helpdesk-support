
export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  image: string;
}

export const CarouselItems: CarouselItem[] = [
  {
    title: "Create Tickets",
    description: "Creating ticket has never been easier — a glimpse into the future of customer service.",
    id: 1,
    image: "/images/ticket-creation.webp",
  },
  {
    title: "Tickets by Department",
    description: "Streamlining support with department-specific ticketing — a new era of customer service",
    id: 2,
    image: "/images/ticket-by-department.webp",
  },
  {
    title: "Assigned Tickets",
    description: "Empowering teams with assigned tickets — a new era of customer service",
    id: 3,
    image: "/images/assign-ticket.webp",
  },
];