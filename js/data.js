// ALL EDITABLE CONTENT LIVES HERE. Change text, add or remove items, save, refresh.

// ---------------------------------------------------------------------------
// Interests
// ---------------------------------------------------------------------------
const interests = [
  "Networking",
  "Programming",
  "Web Development",
  "Cybersecurity",
  "IT Infrastructure",
];

// ---------------------------------------------------------------------------
// Currently learning
// ---------------------------------------------------------------------------
const learning = [
  "Cisco Networking",
  "VLANs and Switching",
  "Routing and Subnetting",
  "Linux Fundamentals",
  "Web Development",
  "Cybersecurity Fundamentals",
  "Git and GitHub",
];

// ---------------------------------------------------------------------------
// Education timeline
// ---------------------------------------------------------------------------
const education = [
  {
    year: "1st Year College",
    focus: [
      "IT Fundamentals",
      "Computer Hardware",
      "Programming Fundamentals",
      "Basic Networking",
      "Introduction to Information Technology",
    ],
  },
  {
    year: "2nd Year College",
    focus: [
      "Object-Oriented Programming",
      "Database Fundamentals",
      "Web Development",
      "Networking",
      "Cybersecurity Fundamentals",
      "Systems Analysis and Design",
    ],
  },
  {
    year: "3rd Year College",
    current: true,
    focus: [
      "Advanced Networking",
      "Network Design and Management",
      "Cisco Packet Tracer",
      "VLANs and Switching",
      "Routing and Subnetting",
      "Cybersecurity",
      "System Development",
      "Capstone Project",
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills
// level: "Beginner", "Learning" or "Comfortable". Be honest, it builds trust.
// ---------------------------------------------------------------------------
const skills = {
  Networking: [
    ["OSI Model", "Learning"],
    ["TCP/IP", "Learning"],
    ["IPv4 Addressing", "Learning"],
    ["Subnetting", "Learning"],
    ["VLANs", "Learning"],
    ["Switching", "Learning"],
    ["Basic Routing", "Beginner"],
    ["Cisco Packet Tracer", "Comfortable"],
  ],

  "Programming & Development": [
    ["HTML", "Comfortable"],
    ["CSS", "Comfortable"],
    ["JavaScript", "Learning"],
    ["Basic Python", "Beginner"],
    ["Basic Java", "Beginner"],
    ["SQL", "Learning"],
  ],

  Tools: [
    ["Git", "Learning"],
    ["GitHub", "Learning"],
    ["Cisco Packet Tracer", "Comfortable"],
    ["Visual Studio Code", "Comfortable"],
  ],

  Cybersecurity: [
    ["Cybersecurity Fundamentals", "Beginner"],
    ["Common Cyber Attacks", "Beginner"],
    ["Network Security Basics", "Beginner"],
    ["Security Awareness", "Learning"],
  ],
};

// ---------------------------------------------------------------------------
// Projects
// Leave github/demo as "" to hide that button.
// Replace the "#" links with real URLs.
// ---------------------------------------------------------------------------
const projects = [
  {
    name: "Programmers Profile",
    category: "Web Page",
    desc: "A simple programmers profile that contains personal information about me.",
    tech: "HTML, CSS, JavaScript",
    github: "#",
    demo: "",
  },
];

// ---------------------------------------------------------------------------
// Networking labs  [title, description]
// ---------------------------------------------------------------------------
const labs = [
  [
    "VLAN Configuration",
    "Split one switch into separate virtual networks so groups of devices stay apart.",
  ],
  [
    "Trunking",
    "Carry several VLANs over a single link between two switches.",
  ],
  [
    "Inter-VLAN Routing",
    "Let devices in different VLANs talk to each other through a router.",
  ],
  [
    "IPv4 Subnetting",
    "Divide an address range into smaller networks that fit each department.",
  ],
  [
    "Router Configuration",
    "Set interfaces, IP addresses, and basic routes on a Cisco router.",
  ],
  [
    "Switch Configuration",
    "Set hostnames, passwords, ports, and VLANs on a Cisco switch.",
  ],
  [
    "Network Topologies",
    "Design and compare star, bus, ring, and mesh layouts.",
  ],
  [
    "Cisco Packet Tracer Labs",
    "Build and test small networks in a simulator before touching real hardware.",
  ],
];

// ---------------------------------------------------------------------------
// Contact form
// Set endpoint to your service URL later (e.g. Formspree).
// Empty = form does not send.
// ---------------------------------------------------------------------------
const contactConfig = {
  endpoint: "",
};