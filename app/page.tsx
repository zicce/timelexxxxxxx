import Image from "next/image"
import Link from "next/link"
import { Shield, FileSearch, Users, Database, Brain, Globe, Clock, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Who We Are",
    href: "#",
    children: [
      { title: "Team Timelex", href: "/team-timelex" },
      { title: "Timelex USPs", href: "/timelex-usps" },
      { title: "Timelex", href: "/timelex" },
    ],
  },
  {
    title: "What We Do",
    href: "#",
    children: [
      {
        title: "Genres",
        children: [
          { title: "OTT", href: "/ott-piracy-solutions" },
          { title: "Films", href: "/films-infringement-solutions" },
          { title: "Music", href: "/music-protection" },
          { title: "TV", href: "/tv-infringements" },
          { title: "Books & Software", href: "/books-software" },
          { title: "E-Commerce", href: "/e-commerce" },
        ],
      },
      {
        title: "Platform",
        children: [
          { title: "Internet & Mobile", href: "/internet-mobile" },
          { title: "Marketplaces Protection", href: "/marketplaces-protection" },
          { title: "IPTV & Others", href: "/iptv-others" },
        ],
      },
      { title: "Research", href: "/research" },
      { title: "Policy", href: "/anti-piracy-policy" },
    ],
  },
  {
    title: "What We Think",
    href: "#",
    children: [{ title: "Case Studies", href: "/case-studies" }],
  },
  {
    title: "Contact Us",
    href: "#",
    children: [{ title: "New Clients", href: "/new-clients" }],
  },
]

const stats = [
  { value: "50", label: "Clients Across Continents" },
  { value: "98.5%", label: "Piracy Removal Success Rate" },
  { value: "50+", label: "Countries Covered" },
  { value: "80+", label: "Languages Covered" },
]

const advantages = [
  { icon: Shield, title: "Advanced Enforcement" },
  { icon: FileSearch, title: "Forensic Investigation" },
  { icon: Users, title: "Dedicated Team" },
  { icon: Wrench, title: "Customized Solutions" },
  { icon: Database, title: "Exhaustive Data Collection" },
  { icon: Brain, title: "Piracy Intelligence" },
  { icon: Globe, title: "Language Experts" },
  { icon: Clock, title: "24/7 Availability & Coverage" },
]

const services = [
  {
    title: "Protection",
    description:
      "With years of research and experience in providing Digital Intellectual Property services, Timelex has crafted specialized solutions to identify and remove online piracy across genres.",
    image: "https://mediashield.law/wp-content/uploads/2025/07/protection.jpg",
  },
  {
    title: "Research",
    description:
      "We, at Timelex, understand the importance of data and research for making informed decisions. Our customized reports are designed to ensure better understanding of landscape, competition, markets, etc.",
    image: "https://mediashield.law/wp-content/uploads/2025/07/research.jpg",
  },
  {
    title: "Policy",
    description:
      "With our expertise and deep knowledge in the Digital Intellectual Property sector, we contribute to the policy making process by providing data driven insights to policymakers and stakeholders.",
    image: "https://mediashield.law/wp-content/uploads/2025/07/policy.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://i.imgur.com/ebcAxer.png"
              alt="Timelex Logo"
              width={180}
              height={43}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                  {item.title}
                </button>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border rounded-lg shadow-lg py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <div key={child.title}>
                          {"href" in child ? (
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                              {child.title}
                            </Link>
                          ) : (
                            <div className="px-4 py-2">
                              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {child.title}
                              </span>
                              <div className="mt-1">
                                {child.children?.map((subChild) => (
                                  <Link
                                    key={subChild.title}
                                    href={subChild.href}
                                    className="block py-1.5 text-sm text-foreground/80 hover:text-primary transition-colors"
                                  >
                                    {subChild.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Button asChild className="hidden lg:flex bg-[#147dbe] hover:bg-[#0f6aa3]">
            <Link href="/new-clients">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <Image
            src="https://mediashield.law/wp-content/uploads/2025/07/WhatsApp-Image-2024-07-18-at-20.07.08_1dbe54ff.jpg"
            alt="Timelex Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl text-balance">
                Digital Asset Protection & Anti-Counterfeiting Solutions
              </h1>
              <p className="mt-4 text-lg text-white/90 max-w-2xl">
                Timelex is a leading Digital Asset Protection, Research & Policy Advisory firm working across genres of
                digital IP.
              </p>
              <Button asChild size="lg" className="mt-6 bg-[#147dbe] hover:bg-[#0f6aa3]">
                <Link href="/new-clients">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">
              Timelex is a leading Digital Asset Protection, Research & Policy Advisory firm working across genres of
              digital IP. We are focused on helping clients across 3 key areas:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-24 mb-4 overflow-hidden rounded-lg">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[#147dbe] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            PERFECT BLEND OF HUMAN INTELLIGENCE AND AI
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#9edbff] mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">TIMELEX ADVANTAGES</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://mediashield.law/wp-content/uploads/2025/07/markscan-1.jpg"
                alt="Timelex Advantages"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#147dbe] rounded-xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <advantage.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{advantage.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Protect Your Digital Assets?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the leading companies that trust Timelex for their digital asset protection needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#147dbe] hover:bg-[#0f6aa3]">
              <Link href="/new-clients">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://i.imgur.com/ebcAxer.png"
                alt="Timelex Logo"
                width={150}
                height={35}
                className="h-8 w-auto mb-4 invert"
              />
              <p className="text-background/70 text-sm">
                Leading Digital Asset Protection, Research & Policy Advisory firm.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Who We Are</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/team-timelex" className="hover:text-background transition-colors">
                    Team Timelex
                  </Link>
                </li>
                <li>
                  <Link href="/timelex-usps" className="hover:text-background transition-colors">
                    Timelex USPs
                  </Link>
                </li>
                <li>
                  <Link href="/timelex" className="hover:text-background transition-colors">
                    About Timelex
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">What We Do</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/protection" className="hover:text-background transition-colors">
                    Protection
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-background transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/anti-piracy-policy" className="hover:text-background transition-colors">
                    Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/new-clients" className="hover:text-background transition-colors">
                    New Clients
                  </Link>
                </li>
                <li>
                  <Link href="/join-us" className="hover:text-background transition-colors">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; {new Date().getFullYear()} Timelex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
