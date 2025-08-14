import { Ticket, Comment, User } from "@/lib/types";

export const mockTickets: Ticket[] = [
  {
    id: "101",
    title: "Cannot login to dashboard",
    status: "open",
    author: "Alice Ling",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    description:
      "User reports login failure after password reset. Needs investigation on auth callback handler.",
  },
  {
    id: "102",
    title: "Email notifications delayed",
    status: "in_progress",
    author: "David K.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    description:
      "Outgoing email queue is backlogged. Check provider rate limit + retry backoff policy.",
  },
  {
    id: "103",
    title: "Add bulk ticket import",
    status: "closed",
    author: "Chayan R.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    description:
      "Feature shipped in v0.5. Supports CSV with id,title,status,author,createdAt,description.",
  },
  {
    id: "104",
    title: "Search function returns incomplete results",
    status: "open",
    author: "Lena Perez",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    description:
        "Search queries only match titles but not descriptions. Needs review of search index configuration.",
  },
  {
    id: "105",
    title: "Attachment upload size limit too small",
    status: "in_progress",
    author: "Samuel J.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 15).toISOString(),
    description:
        "Current max file size is 5MB, but users need at least 20MB for certain documents.",
  },
  {
    id: "106",
    title: "User profile pictures not updating",
    status: "open",
    author: "Fiona G.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
    description:
        "Avatar updates appear in backend but are not reflected in frontend until hard refresh.",
  },
  {
    id: "107",
    title: "Notification bell badge count incorrect",
    status: "closed",
    author: "Oscar M.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    description:
        "Badge shows stale count due to caching; fix deployed and verified.",
  },
  {
    id: "108",
    title: "Two-factor authentication setup failing",
    status: "open",
    author: "Carla B.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    description:
        "QR code not scanning for some authenticator apps; possibly invalid URI format.",
  },
  {
    id: "109",
    title: "Export CSV missing header row",
    status: "in_progress",
    author: "John N.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(),
    description:
        "CSV export downloads without header row; regression introduced after v0.7.",
  },
  {
    id: "110",
    title: "Dashboard widgets not resizing on mobile",
    status: "closed",
    author: "Paula W.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 40).toISOString(),
    description:
        "Widgets maintain desktop layout on small screens; fixed with responsive grid update.",
  },
  {
    id: "111",
    title: "Report generation timing out for large datasets",
    status: "open",
    author: "Greg H.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(),
    description:
        "Large reports fail to generate due to 30s timeout; consider async job queue.",
  },
  {
    id: "112",
    title: "Dark mode toggle not persisting",
    status: "in_progress",
    author: "Amira S.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    description:
        "Dark mode preference resets on page reload; missing persistence in localStorage.",
  },
  {
    id: "113",
    title: "Broken link in help documentation",
    status: "closed",
    author: "Victor P.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    description:
        "FAQ link for password reset pointed to outdated page; fixed and redeployed.",
  }
];

export const mockComments: Record<string, Comment[]> = {
  "101": [
    { author: "Support Bot", date: "2025-08-10", content: "Ticket created." },
    { author: "Alice Ling", date: "2025-08-11", content: "Still blocked this morning." },
  ],
  "102": [
    { author: "Ops", date: "2025-08-09", content: "Bumped provider quota. Monitoring." },
  ],
  "103": [
    { author: "PM", date: "2025-08-08", content: "Feature validated. Closing ticket." },
  ],
};

export const mockUsers: User[] = [
  { id: "u1", name: "Alice Ling", job: "Software Engineer", isAvailable: false },
  { id: "u2", name: "David Kim", job: "Support Lead", isAvailable: true },
  { id: "u3", name: "Chayan Roy", job: "Product Manager", isAvailable: true },
  { id: "u4", name: "Lena Perez", job: "QA Analyst", isAvailable: true },
  { id: "u5", name: "Samuel Johnson", job: "Backend Developer", isAvailable: false },
  { id: "u6", name: "Fiona Green", job: "UI/UX Designer", isAvailable: true },
  { id: "u7", name: "Oscar Martin", job: "DevOps Engineer", isAvailable: true },
  { id: "u8", name: "Carla Brown", job: "Security Specialist", isAvailable: false },
  { id: "u9", name: "John Newman", job: "Data Analyst", isAvailable: true }
];
