const projects = [
  {
    slug: "jos64",
    title: "JOS64 Operating System",
    subtitle: "A 64 bit x86-64 teaching kernel built across CS 476 operating systems labs.",
    summary:
      "Built a 64 bit x86-64 OS kernel with UEFI boot, virtual memory, copy on write fork, multiprocessor support, and interprocess communication.",
    role: "Systems programming project",
    timeframe: "CS 476",
    status: "Course project",
    technologies: ["C", "x86-64 Assembly", "UEFI", "QEMU", "GDB"],
    links: {
      github: "https://github.com/FlintSable/jos64",
    },
    highlights: [
      "Implemented core kernel subsystems across staged operating systems labs.",
      "Worked close to the hardware boundary with paging, traps, and process isolation.",
      "Used QEMU and GDB to debug low level behavior where normal application tooling is unavailable.",
    ],
    sections: [
      {
        heading: "What It Is",
        body:
          "JOS64 is a small x86-64 operating system kernel focused on the fundamentals that make modern systems work: boot, memory protection, user environments, traps, scheduling, fork, IPC, and multiprocessor coordination.",
      },
      {
        heading: "Technical Depth",
        body:
          "The project required reasoning about page tables, address spaces, kernel/user transitions, copy on write semantics, interrupt handling, and synchronization. The interesting part is not just writing C; it is proving the machine state is what the kernel thinks it is.",
      },
      {
        heading: "Why It Matters",
        body:
          "This project shows comfort below the web stack. It demonstrates debugging discipline, systems level mental models, and the ability to work in constrained environments where every pointer, register, and mapping matters.",
      },
    ],
  },
  {
    slug: "fauxvault",
    title: "FauxVault",
    subtitle: "A CS467 web security training platform with runtime OWASP vulnerability toggles.",
    summary:
      "Contributed backend architecture, security modules, API contracts, adversarial tests, and workflow docs for a team banking app that demonstrates vulnerable and hardened OWASP behavior.",
    role: "Backend and security architecture contributor",
    timeframe: "CS467, Spring 2026",
    status: "Team course project",
    technologies: ["React", "Vite", "MUI", "Express", "PostgreSQL", "Docker", "AWS EC2"],
    links: {
      github: "https://github.com/Darrin07/FauxVault",
    },
    highlights: [
      "Built core Express and PostgreSQL security architecture for auth, accounts, transfers, admin access, and vulnerability settings.",
      "Built the runtime toggle middleware, per user persistence, request header override transport, and three module active cap.",
      "Shipped BOLA and brute force security demos, OpenAPI contracts, Docker workflow docs, and adversarial security tests.",
    ],
    sections: [
      {
        heading: "What It Is",
        body:
          "FauxVault is a purposefully vulnerable web banking application built by a four person CS467 team at Oregon State. It gives students and instructors realistic login, account, transfer, history, and admin flows where implemented security modules can be switched between vulnerable and hardened behavior at runtime.",
      },
      {
        heading: "Architecture",
        body:
          "The app pairs a React, Vite, and MUI frontend with an Express API and PostgreSQL database. The database models users, accounts, transactions, global vulnerability defaults, and per user vulnerability settings, with row level security protecting account and transaction access through a request scoped database client. Docker Compose runs nginx, the API, and PostgreSQL for local demo and deployment workflows.",
      },
      {
        heading: "Security Modules",
        body:
          "The project includes ten vulnerability toggle entries and nine completed security demonstrations: broken object level authorization, privilege escalation, excessive data exposure, verbose errors, weak password storage, weak session tokens, brute force protection, reflected XSS, and stored XSS. Each completed module branches inside the same route, controller, or UI surface so the same user action can show both an exploit and its mitigation. SQL injection is tracked as planned work, so the profile does not present it as a completed demo.",
      },
      {
        heading: "My Contributions",
        body:
          "My work centered on backend and security teaching architecture: JWT auth and account APIs, PostgreSQL backed models, namespaced vulnerability flags, anonymous toggle header transport, per user toggle persistence with a three module cap, the BOLA and brute force modules, adversarial Jest and Supertest coverage, OpenAPI contract cleanup, and workflow docs for local, Docker, and EC2 demos. I also strengthened auth route guards, logout hydration, reflected XSS behavior, and toggle pending state as the team integrated the modules.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export default projects;
