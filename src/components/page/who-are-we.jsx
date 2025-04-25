"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { EmployeeCard } from "@/components/ui/employee-card";
import { Marquee } from "@/components/ui/marquee";

const teamProfiles = [
  {
    quote:
      "Leading innovation in cryptocurrency trading with a focus on security and user experience.",
    name: "Alex Chen",
    designation: "CEO & Founder | Ex-Binance",
    src: "/team/team1.jpg",
  },
  {
    quote:
      "Building robust infrastructure to ensure seamless and secure trading experiences.",
    name: "Sarah Wilson",
    designation: "CTO | Ex-Google",
    src: "/team/team2.jpg",
  },
  {
    quote:
      "Analyzing market trends to provide our users with the best trading opportunities.",
    name: "Michael Zhang",
    designation: "Head of Research | Ex-Goldman Sachs",
    src: "/team/team3.jpg",
  },
  {
    quote:
      "Ensuring compliance and security in all aspects of our platform operations.",
    name: "Emma Rodriguez",
    designation: "Head of Security | Ex-Coinbase",
    src: "/team/team4.jpg",
  },
];

const employees = [
  // Row 1 - Engineering
  [
    {
      name: "David Kim",
      position: "Senior Developer",
      department: "Engineering",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Lisa Chen",
      position: "Backend Engineer",
      department: "Engineering",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 2 - Product
  [
    {
      name: "Mark Johnson",
      position: "Product Manager",
      department: "Product",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Anna Lee",
      position: "UX Designer",
      department: "Product",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 3 - Marketing
  [
    {
      name: "Sophie Wang",
      position: "Marketing Lead",
      department: "Marketing",
      img: "/team/employee-example.jpg",
    },
    {
      name: "James Wilson",
      position: "Content Writer",
      department: "Marketing",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 4 - Sales
  [
    {
      name: "Emily Davis",
      position: "Sales Manager",
      department: "Sales",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Michael Brown",
      position: "Account Executive",
      department: "Sales",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 5 - Customer Support
  [
    {
      name: "Rachel Green",
      position: "Support Specialist",
      department: "Customer Support",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Tom Hanks",
      position: "CS Manager",
      department: "Customer Support",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 6 - Human Resources
  [
    {
      name: "Karen Smith",
      position: "HR Manager",
      department: "Human Resources",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Ben Miller",
      position: "Recruiter",
      department: "Human Resources",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 7 - Finance
  [
    {
      name: "Olivia Martinez",
      position: "Finance Analyst",
      department: "Finance",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Daniel Lee",
      position: "Accountant",
      department: "Finance",
      img: "/team/employee-example.jpg",
    },
  ],
  // Row 8 - Legal
  [
    {
      name: "Nina Patel",
      position: "Legal Advisor",
      department: "Legal",
      img: "/team/employee-example.jpg",
    },
    {
      name: "Chris Evans",
      position: "Compliance Officer",
      department: "Legal",
      img: "/team/employee-example.jpg",
    },
  ],
];

export function WhoAreWe() {
  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Who We Are
          </h2>
          <p className="text-white/70 font-light text-base xs:text-lg max-w-2xl mx-auto">
            Behind every successful trade is a team of dedicated professionals
            committed to revolutionizing the future of cryptocurrency trading.
          </p>
        </div>

        <div className="mt-8">
          <AnimatedTestimonials testimonials={teamProfiles} autoplay={true} />
        </div>

        {/* Employee Listings */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
              Meet Our Family
            </h2>
            <p className="text-white/70 font-light text-base xs:text-lg mb-3">
              Every day, these brilliant minds work tirelessly behind the scenes
              to make cryptocurrency trading accessible, secure, and efficient
              for you. From engineering wizards to customer champions,
              compliance experts to market strategists — we're united by our
              passion for blockchain technology and commitment to your success.
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            {employees.map((row, idx) => (
              <Marquee
                key={idx}
                pauseOnHover
                reverse={idx % 2 === 0}
                className="[--duration:30s]"
              >
                {row.map((employee, empIdx) => (
                  <EmployeeCard key={empIdx} {...employee} />
                ))}
              </Marquee>
            ))}

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
