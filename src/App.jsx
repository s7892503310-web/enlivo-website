import React, { useState, useEffect } from 'react';
import CEO_image from './assets/Images/CEO_Image.jpeg';
import CTO_image from './assets/Images/CTO_Image.jpeg';
import Founder_image from './assets/Images/Founder_Image.jpeg';
import Lead_image from './assets/Images/Lead_Image.jpeg';
import VC_image from './assets/Images/VC_Image.jpeg';
import Enlivo_logo from './assets/Images/Enlivo_logo.png';
import Enlivologo from './assets/Images/EnlivoLogo.png';
import Akshay_image from './assets/Images/Akshay_image.jpeg';
import Diksha_image from './assets/Images/Diksha_image.jpeg';
import Digital_image from './assets/Images/Digital.avif';
import Internship_image from './assets/Images/Internship.avif';
import Digital_image1 from './assets/Images/Digital-image1.jpg';
import Digital_image2 from './assets/Images/digital-image2.jpg';
import { 
  Code, 
  Cpu, 
  Globe, 
  Rocket, 
  GraduationCap, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Briefcase, 
  Zap,
  Server,
  Play,
  Quote,
  Search,
  Settings,
  BarChart,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  MapPin,
  Bot,
  BrainCircuit,
  Database,
  CheckCircle,
  Clock,
  DollarSign,
  BookOpen,
  Award,
  MessageSquare // Added missing import
} from 'lucide-react';

// --- Styles ---
const customStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  /* Use a unique name just for testimonials */
  @keyframes testimonials-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-350px * 5 - 2rem * 5)); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .testimonials-scroll {
    animation: testimonials-scroll 30s linear infinite;
  }

  .testimonials-scroll:hover {
    animation-play-state: paused;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .glass-nav {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0f172a; 
  }
  ::-webkit-scrollbar-thumb {
    background: #334155; 
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #475569; 
  }
`;

// --- Data ---
const TESTIMONIALS = [
  {
    name: "Sunil B K",
    role: "CTO, FinTech Global",
    image: CTO_image,
    text: "Enlivo Technologies transformed our legacy systems into a sleek, AI-driven powerhouse. The efficiency gains were immediate."
  },
  {
    name: "Nagarjun",
    role: "Founder, EcoStart",
    image: Founder_image,
    text: "The IT Launchpad grads we hired are better prepared than most seniors I've interviewed. A top-tier talent pipeline."
  },
  {
    name: "Vinay S",
    role: "VP Operations, LogiChain",
    image: VC_image,
    text: "Their AI automation tools cut our manual data entry by 90%. I can't imagine going back to the old way. They are Awesome"
  },
  {
    name: "Shashi Gupta",
    role: "Lead Developer (Former Intern)",
    image: Lead_image,
    text: "The internship program changed my life. Real projects, real mentorship, and a direct path to a career."
  }
];

const FOUNDERS = [
    {
      name: "Akshay K",
      title: "Founder & CEO",
      bio: "Akshay leads Enlivo’s strategic direction, focusing on market growth and investor relations. His expertise lies in scaling technology companies from seed to Series A. He believes technology must serve a clear purpose to drive measurable business outcomes",
      image: Akshay_image,
    },
    {
      name: "Dr. Diksha Agrawal",
      title: "Founder & COO",
      bio: "Diksha drives the operational backbone of Enlivo, ensuring every project, partnership, and process runs with precision. With deep expertise in business operations and delivery management, she transforms strategy into execution and keeps our teams aligned, efficient, and unstoppable",
      image: Diksha_image,
    },
  ];

// --- Components ---
// useEffect(() => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }, [currentPage]);


const Navbar = ({ isScrolled, setIsMobileMenuOpen, isMobileMenuOpen, currentPage, setPage }) => (
  <>
    <style>{customStyles}</style>
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 transition-all duration-500">
      <nav className={`transition-all duration-300 w-full max-w-6xl rounded-full px-6 py-3 flex justify-between items-center ${isScrolled ? 'glass-nav shadow-2xl shadow-indigo-500/10' : 'bg-transparent border border-transparent'}`}>
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            {/* Using Zap icon as a temporary placeholder for the logo image */}
            {/* <Zap className="text-white w-5 h-5" fill="currentColor" /> */}
          <img src={Enlivologo} className="Enlivologo" alt="Enlivologo" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Enlivo <span className="text-indigo-400">Technologies</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'aboutus', label: 'About Us' },
            { id: 'digital', label: 'Digital' },
            { id: 'enterprise', label: 'Enterprise' },
            { id: 'ai', label: 'AI & Automation' },
            { id: 'internship', label: 'Internships' },
            { id: 'launchpad', label: 'IT Launchpad' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`px-3 py-2 text-xs font-medium rounded-full transition-all ${currentPage === item.id ? 'bg-white/10 text-white shadow-inner' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setPage('contact')}
            className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg shadow-white/5"
          >
            Contac Us
          </button>
        </div>

        <button 
          className="lg:hidden text-slate-300 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </div>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-32 px-8 overflow-y-auto">
        <div className="flex flex-col space-y-6 text-xl font-bold text-white">
          <button onClick={() => { setPage('home'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">Home</button>
          <button onClick={() => { setPage('aboutus'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">About Us</button>
          <button onClick={() => { setPage('digital'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">Digital Experiences</button>
          <button onClick={() => { setPage('enterprise'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">Enterprise Systems</button>
          <button onClick={() => { setPage('ai'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">AI & Automation</button>
          <button onClick={() => { setPage('internship'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">Internship Program</button>
          <button onClick={() => { setPage('launchpad'); setIsMobileMenuOpen(false); }} className="text-left hover:text-indigo-400">IT Launchpad</button>
          <button onClick={() => { setPage('contact'); setIsMobileMenuOpen(false); }} className="text-left text-indigo-400">Contact Us</button>
        </div>
      </div>
    )}
  </>
);

const ParallaxHero = ({ setPage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 + scrollY * 0.0005;
  const opacity = Math.max(0, 1 - scrollY * 0.002);

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="w-full h-full absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=2000')",
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="absolute top-1/4 right-[10%] w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float lg:block hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" style={{ opacity }}>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
          Architecting The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-violet-300">
            Future Intelligence
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light drop-shadow-lg">
          We don't just write code. We build the digital backbone for the world's most ambitious enterprises through AI, Innovation, and Elite Talent.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => setPage('enterprise')}
            className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40 flex items-center gap-2"
          >
            Explore Solutions
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setPage('contact')}
            className="px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-medium text-lg transition-all border-slate-700 flex items-center gap-2 group"
          >
            <Play className="w-5 h-5 fill-current text-indigo-400 group-hover:text-white transition-colors" />
            Invest in Vision
          </button>
        </div>
        
      </div>
    </section>
  );
};

// --- UPDATED: AI Automation Capabilities (Instead of Logos) ---
const AICapabilities = () => (
  <section className="py-10 border-y border-white/5 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Powering Next-Gen Enterprises with AI</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {[
          { name: 'Predictive Analytics', icon: BarChart },
          { name: 'Natural Language Processing', icon: MessageSquare },
          { name: 'Computer Vision', icon: Users },
          { name: 'Robotic Process Automation', icon: Settings },
          { name: 'Generative AI Agents', icon: Bot },
        ].map((cap, i) => (
          <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              <cap.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-wide">{cap.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceAbstract = ({ setPage }) => (
  <section className="py-24 bg-slate-950 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-indigo-400 font-semibold tracking-wide uppercase mb-3">Core Verticals</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Pillars of Innovation</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: "Digital Experiences", desc: "High-performance web platforms and digital interfaces.", page: 'digital' },
          { icon: Server, title: "Enterprise Systems", desc: "Scalable backend architectures for mission-critical operations.", page: 'enterprise' },
          { icon: Cpu, title: "AI & Automation", desc: "Operational efficiency powered by custom LLMs and autonomous agents.", page: 'ai' },
          { icon: GraduationCap, title: "Internship Program", desc: "Real-world tech exposure for students from 2nd year onwards.", page: 'internship' },
          { icon: Rocket, title: "IT Launchpad", desc: "Comprehensive 'Earn While You Learn' career accelerator.", page: 'launchpad' },
          { icon: Briefcase, title: "Talent Solutions", desc: "Connecting vetted engineers with top enterprises.", page: 'contact' }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer" onClick={() => setPage(item.page)}>
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-slate-400 mb-6">{item.desc}</p>
            <div className="flex items-center text-indigo-400 text-sm font-semibold group-hover:text-white transition-colors">
              Explore <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- NEW DETAILED PAGES ---

const DigitalExperiencePage = () => (
  <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

      {/* 1️⃣ HERO – IMMERSIVE DIGITAL EXPERIENCES */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Immersive Digital <span className="text-indigo-500">Experiences</span>
          </h1>

          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            We design and build digital experiences that feel effortless, perform
            brilliantly, and tell your brand story with clarity. From first scroll
            to final conversion, every interaction is intentional.
          </p>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Whether it’s a marketing website, a growth-focused mobile app, or a
            mission-critical digital product, our team blends design, engineering,
            and strategy to create ecosystems that scale with your business.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'High-conversion marketing and product websites',
              'Cross-platform mobile & web applications',
              'Brand-consistent UX/UI systems and design language',
              'SEO, performance, and accessibility-first builds',
            ].map(item => (
              <li key={item} className="flex items-center text-slate-200">
                <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* HERO IMAGES (MOSAIC) */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=900"
              alt="Product Website"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl mt-8">
            <img
              src={Digital_image1}
              alt="Mobile Experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-2 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400"
              alt="Team Collaborating on Digital Experience"
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2️⃣ WHAT WE BUILD – WEBSITE / MOBILE / MARKETING / DIGITAL SOLUTIONS */}
      <section>
        <div className="flex items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">
              What We Build
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              End-to-end digital products, not just pages
            </h3>
          </div>
          <p className="hidden md:block text-sm text-slate-400 max-w-md text-right">
            Every touchpoint is crafted to support your business goals —
            from acquisition and engagement to retention and advocacy.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Websites */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-indigo-400" />
              </div>
              <h4 className="text-white font-semibold text-lg">Web Experiences</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Responsive, fast, and search-optimized websites that position your brand
              as premium while driving measurable business outcomes.
            </p>
            <span className="text-xs uppercase tracking-wide text-slate-500">
              Corporate · SaaS · Product · Landing Pages
            </span>
          </div>

          {/* Mobile Apps */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-indigo-400" />
              </div>
              <h4 className="text-white font-semibold text-lg">Mobile & Web Apps</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Native-feeling mobile and web apps with thoughtful flows, offline
              support, and integration into your existing stack.
            </p>
            <span className="text-xs uppercase tracking-wide text-slate-500">
              B2B · B2C · Internal Tools
            </span>
          </div>

          {/* Marketing */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <h4 className="text-white font-semibold text-lg">Marketing Funnels</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Campaign-ready pages, lead magnets, and analytics wiring — built to
              test, learn, and scale your acquisition efforts.
            </p>
            <span className="text-xs uppercase tracking-wide text-slate-500">
              Funnels · Landing Tests · Tracking
            </span>
          </div>

          {/* Digital Solutions */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-indigo-400" />
              </div>
              <h4 className="text-white font-semibold text-lg">Digital Solutions</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Custom platforms, portals, and internal tools that unify workflows,
              automate manual steps, and unlock new business models.
            </p>
            <span className="text-xs uppercase tracking-wide text-slate-500">
              Portals · Dashboards · Internal Platforms
            </span>
          </div>
        </div>
      </section>

      {/* 3️⃣ OUR PROCESS – DISCOVER → DESIGN → BUILD → LAUNCH */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* Process Text */}
        <div>
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Our Approach
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            A product mindset from day one
          </h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            We combine discovery, design, engineering, and growth in a single
            integrated workflow — giving you a partner that thinks beyond launch.
          </p>

          <div className="space-y-5">
            {[
              {
                step: '01 · Discover',
                title: 'Understand the brand, user, and business',
                text: 'Workshops, stakeholder interviews, and user research to clarify what success looks like.'
              },
              {
                step: '02 · Design',
                title: 'Craft the experience and visual language',
                text: 'UX flows, high-fidelity UI, and component systems that can scale across products.'
              },
              {
                step: '03 · Build',
                title: 'Engineer for performance and reliability',
                text: 'Modern frontends, clean APIs, and secure integrations built with best practices.'
              },
              {
                step: '04 · Launch & Grow',
                title: 'Ship, measure, and iterate',
                text: 'Analytics, A/B testing, and continuous optimization to keep you ahead of your market.'
              }
            ].map(({ step, title, text }) => (
              <div key={step} className="flex gap-4">
                <div className="w-16 text-xs font-semibold text-indigo-400 tracking-wide pt-1">
                  {step}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{title}</h4>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process image */}
        <div className="relative">
          <div className="absolute -inset-6 bg-indigo-500/10 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={Digital_image2}
              alt="Design and Development Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-1">
                  Enlivo Studio
                </p>
                <p className="text-sm text-slate-200">
                  Product, design, and engineering collaborating in real-time.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-[11px] text-slate-300">
                From Figma to production in weeks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ OUTCOMES / METRICS SECTION */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-800 glass-card">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1600"
            alt="Analytics and Performance"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>

        <div className="relative px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-indigo-300 font-semibold tracking-wide uppercase text-sm mb-2">
              Outcomes
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built to convert, scale, and last
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We don’t ship and disappear. Our experiences are optimized for speed,
              discoverability, and real-world usage — with analytics wired in so you
              can see what’s working and what needs to evolve.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 min-w-[260px]">
            <div className="glass-card rounded-2xl px-4 py-3 text-center border border-indigo-500/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">2x</div>
              <p className="text-[11px] uppercase tracking-wide text-indigo-300">
                Faster load times
              </p>
            </div>
            <div className="glass-card rounded-2xl px-4 py-3 text-center border border-emerald-500/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">+40%</div>
              <p className="text-[11px] uppercase tracking-wide text-emerald-300">
                Lift in conversions
              </p>
            </div>
            <div className="glass-card rounded-2xl px-4 py-3 text-center border border-sky-500/30">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
              <p className="text-[11px] uppercase tracking-wide text-sky-300">
                Uptime and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ CTA SECTION */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to create your next digital flagship?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Share your idea, your product, or your brand vision — we’ll help you turn
          it into a digital experience that feels premium, performs under pressure,
          and grows with your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/40 transition-all">
            Book a discovery call
          </button>
          <button className="px-8 py-3 rounded-full border border-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white font-semibold text-sm bg-slate-900/60 transition-all">
            View sample case studies
          </button>
        </div>
      </section>
    </div>
  </div>
);



const AboutUsPage = () => (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Company Description */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-5xl font-bold text-white mb-6">Our Mission & <span className="text-indigo-500">Vision</span></h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Enlivo Technologies was founded on the principle that the most challenging business problems require novel and intelligent engineering solutions. We specialize in building custom, scalable enterprise software powered by proprietary AI/ML models. Our commitment extends beyond code; we are dedicated to cultivating the next generation of elite technology talent through rigorous internship and training programs. We aim to be the digital backbone for ambitious companies worldwide.
              </p>
              <div className="flex justify-center gap-6 text-slate-400">
                <span className="flex items-center"><Zap className="w-5 h-5 text-indigo-400 mr-2" /> Innovation</span>
                <span className="flex items-center"><Award className="w-5 h-5 text-indigo-400 mr-2" /> Excellence</span>
                <span className="flex items-center"><Database className="w-5 h-5 text-indigo-400 mr-2" /> Scale</span>
              </div>
            </div>
    
            {/* Founder Profiles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Founders</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {FOUNDERS.map((founder, index) => (
                  <div key={index} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 bg-indigo-500/30 rounded-full blur-md"></div>
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-32 h-32 rounded-full object-cover relative border-4 border-slate-800/50"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-indigo-400 font-semibold mb-4">{founder.title}</p>
                    <p className="text-slate-400 text-base leading-relaxed">{founder.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    );

const EnterpriseSystemPage = () => (
  <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">Scalable Enterprise <span className="text-indigo-500">Systems</span></h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Robust, secure, and built for scale. We engineer the backend systems that power global operations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { title: "Agile Development", desc: "Iterative sprints ensuring transparency and rapid delivery." },
          { title: "Microservices Architecture", desc: "Decoupled systems for maximum scalability and fault tolerance." },
          { title: "DevSecOps", desc: "Security integrated into the CI/CD pipeline from day one." }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-xl">
             <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
             <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-800 relative h-[400px]">
{/*         <img src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200" alt="Server Room" className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
           <div className="text-center">
             <Server className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
             <h3 className="text-2xl font-bold text-white">Built for 99.99% Uptime</h3>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const AIAutomationPage = () => (
  <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">Intelligent <span className="text-indigo-500">Automation</span></h1>
          <p className="text-xl text-slate-400 mb-8">
            Integrate cutting-edge Large Language Models (LLMs) to automate complex workflows, analyze vast datasets, and provide 24/7 intelligent customer support.
          </p>
          
          <h3 className="text-white font-bold mb-4">Supported Models & Tech:</h3>
          <div className="flex flex-wrap gap-3 mb-8">
             {['GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3', 'Mistral', 'LangChain', 'Pinecone'].map(tech => (
               <span key={tech} className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm">{tech}</span>
             ))}
          </div>
          
          <div className="glass-card p-6 rounded-xl border-l-4 border-indigo-500">
             <h4 className="text-white font-bold mb-2">Business Impact</h4>
             <p className="text-slate-400 text-sm">Reduce operational costs by automating repetitive cognitive tasks, allowing your human talent to focus on strategy.</p>
          </div>
        </div>
        
        <div className="grid gap-6">
           <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
             <Bot className="w-12 h-12 text-indigo-400" />
             <div>
               <h4 className="text-white font-bold">Custom Chat Agents</h4>
               <p className="text-slate-400 text-sm">Trained on your proprietary data.</p>
             </div>
           </div>
           <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
             <BrainCircuit className="w-12 h-12 text-indigo-400" />
             <div>
               <h4 className="text-white font-bold">Predictive Workflows</h4>
               <p className="text-slate-400 text-sm">AI that anticipates user needs.</p>
             </div>
           </div>
           <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
             <Database className="w-12 h-12 text-indigo-400" />
             <div>
               <h4 className="text-white font-bold">Data Extraction</h4>
               <p className="text-slate-400 text-sm">Turn unstructured docs into SQL data.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// Modified InternshipPage to accept setPage prop
const InternshipPage = ({ setPage }) => (
  <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">Future-Ready <span className="text-indigo-500">Internship Program</span></h1>
        <p className="text-xl text-slate-400">
          Open to college students for <span className="text-white">all Streams</span>. Bridge the gap between academic theory and industry reality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="rounded-2xl overflow-hidden border border-slate-800">
           <img src={Internship_image} alt="Students Collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-8">
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center flex-shrink-0 text-indigo-400 font-bold">01</div>
             <div>
               <h3 className="text-xl font-bold text-white mb-2">Real-Time Projects</h3>
               <p className="text-slate-400">No dummy apps. You will contribute code to live internal tools and client modules under senior supervision.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center flex-shrink-0 text-indigo-400 font-bold">02</div>
             <div>
               <h3 className="text-xl font-bold text-white mb-2">Industry Standards</h3>
               <p className="text-slate-400">Learn Git workflows, Agile methodology, clean coding practices, and system design principles.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center flex-shrink-0 text-indigo-400 font-bold">03</div>
             <div>
               <h3 className="text-xl font-bold text-white mb-2">Certification & Placement</h3>
               <p className="text-slate-400">Receive a verified internship certificate and a chance for a Pre-Placement Offer (PPO) upon graduation.</p>
             </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-900/20 to-slate-900 border border-indigo-500/30 rounded-2xl p-8 text-center">
         <h3 className="text-2xl font-bold text-white mb-4">Start Your Career Early</h3>
         {/* UPDATED: Added onClick handler to redirect to contact page */}
         <button 
           onClick={() => setPage('contact')} 
           className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all"
         >
           Apply for Internship
         </button>
      </div>
    </div>
  </div>
);

const LaunchpadPage = () => (
  <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">IT Launchpad</h1>
        <h2 className="text-2xl text-indigo-400 font-bold mb-6">"Earn While You Learn"</h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          A revolutionary career accelerator for graduates and career changers. We secure your financial stability first, then build your tech career.
        </p>
      </div>

      {/* Program Snapshot */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="glass-card p-6 rounded-xl text-center">
          <Clock className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
          <div className="font-bold text-white">Duration</div>
          <div className="text-sm text-slate-400">6 Months Training + 1 Yr Support</div>
        </div>
{/*         <div className="glass-card p-6 rounded-xl text-center">
          <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <div className="font-bold text-white">Total Fee</div>
          <div className="text-sm text-slate-400">₹1,00,000 INR</div>
        </div> */}
        <div className="glass-card p-6 rounded-xl text-center">
          <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-3" />
          <div className="font-bold text-white">Target</div>
          <div className="text-sm text-slate-400">Graduates & Career Changers</div>
        </div>
        <div className="glass-card p-6 rounded-xl text-center">
          <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <div className="font-bold text-white">Promise</div>
          <div className="text-sm text-slate-400">5 Guaranteed Interviews</div>
        </div>
      </div>

      {/* Phase Timeline */}
      <div className="space-y-12 relative">
         <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>

         {/* Phase 1 */}
         <div className="relative pl-0 md:pl-24">
            <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-2 border-indigo-500 rounded-full items-center justify-center font-bold text-indigo-500 z-10">01</div>
            <h3 className="text-2xl font-bold text-white mb-4">Enrollment & Financials (Weeks 1-2)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl">
                 <h4 className="text-indigo-400 font-bold mb-2">Registration & Counseling</h4>
                 <p className="text-slate-400 text-sm">Consultation to assess aptitude. Clear explanation of the training and "Earn While You Learn" model.</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                 <h4 className="text-indigo-400 font-bold mb-2">Fee & Loan Processing</h4>
                 <p className="text-slate-400 text-sm">Seamless loan processing assistance. Loan can cover fee + stipend for living expenses.</p>
              </div>
            </div>
         </div>

         {/* Phase 2 */}
         <div className="relative pl-0 md:pl-24">
            <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-2 border-indigo-500 rounded-full items-center justify-center font-bold text-indigo-500 z-10">02</div>
            <h3 className="text-2xl font-bold text-white mb-4">Immediate Placement & Training (Month 1-6)</h3>
            <div className="glass-card p-8 rounded-xl border border-indigo-500/30 mb-6 bg-indigo-900/10">
               <h4 className="text-white font-bold text-lg mb-2 flex items-center"><Zap className="w-5 h-5 text-yellow-400 mr-2" /> Rapid Placement Cell</h4>
               <p className="text-slate-300">Within weeks, we place you in entry-level non-IT roles (BPO, Retail, Admin) to ensure immediate income/stipend to service your loan.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="glass-card p-6 rounded-xl">
                 <h4 className="text-indigo-400 font-bold mb-2">Parallel IT Training</h4>
                 <p className="text-slate-400 text-sm">Hybrid/Online training in DevOps, Cyber Security, or Full Stack Dev during non-work hours.</p>
               </div>
               <div className="glass-card p-6 rounded-xl">
                 <h4 className="text-indigo-400 font-bold mb-2">Project Portfolio</h4>
                 <p className="text-slate-400 text-sm">Mandatory completion of 3-4 real-world projects and GitHub portfolio building.</p>
               </div>
            </div>
         </div>

         {/* Phase 3 */}
         <div className="relative pl-0 md:pl-24">
            <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-slate-900 border-2 border-indigo-500 rounded-full items-center justify-center font-bold text-indigo-500 z-10">03</div>
            <h3 className="text-2xl font-bold text-white mb-4">IT Placement & Career Launch (Month 6+)</h3>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="glass-card p-6 rounded-xl">
                 <BookOpen className="w-8 h-8 text-indigo-400 mb-3" />
                 <h4 className="text-white font-bold mb-2">Interview Readiness</h4>
                 <p className="text-slate-400 text-sm">Resume polish, mock technical/HR interviews, and personal branding.</p>
               </div>
               <div className="glass-card p-6 rounded-xl border border-indigo-500/50">
                 <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                 <h4 className="text-white font-bold mb-2">5 Interview Guarantee</h4>
                 <p className="text-slate-400 text-sm">We connect you with a minimum of 10 confirmed job interviews with partner companies.</p>
               </div>
               <div className="glass-card p-6 rounded-xl">
                 <Users className="w-8 h-8 text-blue-400 mb-3" />
                 <h4 className="text-white font-bold mb-2">Final Placement</h4>
                 <p className="text-slate-400 text-sm">Transition to full-time IT role with 3-6 months post-placement mentorship.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-950/50 border-t border-slate-900 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
       <h2 className="text-indigo-400 font-semibold tracking-wide uppercase mb-3">Community Feedback</h2>
       <h3 className="text-3xl md:text-5xl font-bold text-white">Loved by Founders & Devs</h3>
    </div>

    <div className="relative w-full overflow-hidden mask-linear-fade">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max testimonials-scroll gap-8 py-4 cursor-default">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((user, idx) => (
          <div 
            key={idx} 
            className="w-[350px] glass-card p-8 rounded-2xl flex-shrink-0 hover:bg-white/5 transition-colors group cursor-default"
          >
             <div className="mb-6">
                <Quote className="w-8 h-8 text-indigo-500 opacity-50 mb-4" />
                <p className="text-slate-300 text-lg leading-relaxed italic">"{user.text}"</p>
             </div>
             
             <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="relative">
                   <div className="absolute -inset-1 bg-indigo-500/20 rounded-full blur-sm group-hover:bg-indigo-500/40 transition-all"></div>
                   <img 
                     src={user.image} 
                     alt={user.name} 
                     className="w-12 h-12 rounded-full object-cover relative z-10 border border-indigo-500/30"
                   />
                </div>
                <div>
                   <h4 className="text-white font-bold">{user.name}</h4>
                   <p className="text-indigo-400 text-xs uppercase tracking-wider">{user.role}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Modified ContactPage to include WhatsApp and Phone links
const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');
  const [errors, setErrors] = useState({});

  const INTEREST_OPTIONS = ['Enterprise App', 'AI Solution', 'Internship', 'IT Launchpad'];

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Interest validation
    if (!selectedInterest) {
      newErrors.interest = 'Please select what you are interested in.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    // Clear success after a few seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Start the Conversation</h1>
            <p className="text-slate-400">
              Tell us about your project, your investment goals, or your career ambitions.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSend}>
            {/* Names */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Email</label>
              <input
                type="email"
                className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg focus:ring-1 text-white outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500'
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Interest */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">I am interested in...</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {INTEREST_OPTIONS.map((opt) => (
                  <label key={opt} className="cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value={opt}
                      checked={selectedInterest === opt}
                      onChange={() => setSelectedInterest(opt)}
                      className="peer sr-only"
                    />
                    <div className={`px-4 py-3 rounded-lg border bg-slate-900/30 text-center text-sm transition-all
                      ${
                        selectedInterest === opt
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : 'border-slate-700 text-slate-400 hover:bg-slate-800'
                      }
                    `}>
                      {opt}
                    </div>
                  </label>
                ))}
              </div>
              {errors.interest && (
                <p className="text-xs text-red-400 mt-1">{errors.interest}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-lg transition-all shadow-lg shadow-indigo-500/10"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-center text-lg font-bold text-emerald-400">
                ✅ Message sent! We’ll get back to you shortly.
              </p>
            )}
          </form>

        {/* UPDATED: Added dedicated Phone and WhatsApp contact options */}
        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-bold text-white text-center">Or Connect Directly</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Call Link */}
            <a 
              href="tel:+918971363921" 
              className="glass-card p-6 rounded-xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all border border-slate-700 group cursor-pointer"
            >
              <Users className="w-8 h-8 text-indigo-400 group-hover:text-white" />
              <div>
                <h4 className="text-white font-bold text-lg">Call Us (India)</h4>
                <p className="text-indigo-300 font-mono text-sm">+91 89713 63921</p>
                <p className="text-indigo-300 font-mono text-sm">+91 77278 67878</p>
              </div>
            </a>
            
            {/* WhatsApp Chat Link */}
            <a 
              href="https://wa.me/918971363921?text=I%20am%20interested%20in%20the%20Internship%20Program%20at%20Enlivo." 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl flex items-center justify-center gap-4 bg-green-900/30 hover:bg-green-700/50 transition-all border border-green-500/30 group cursor-pointer"
            >
              <MessageSquare className="w-8 h-8 text-green-400 group-hover:text-white" />
              <div>
                <h4 className="text-white font-bold text-lg">WhatsApp Chat</h4>
                <p className="text-green-300 text-sm">Start a conversation immediately</p>
              </div>
            </a>
          </div>

          {/* General Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-800/50 pt-8 text-center">
            <div className="flex items-center gap-3 justify-center text-slate-400">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span>info.enlivo@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-slate-400">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
    <Icon className="w-4 h-4" />
  </a>
);

const Footer = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [subscribeMsg, setSubscribeMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setSubscribeMsg('Please enter a valid email address.');
      return;
    }
    setSubscribeMsg('✅ Subscribed! You’ll hear from us soon.');
    setEmail('');
    setTimeout(() => setSubscribeMsg(''), 4000);
  };

  return (
  <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <img src={Enlivologo} className="Enlivologo" alt="Enlivologo" />
            </div>
            <span className="text-2xl font-bold text-white">Enlivo</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering the next generation of enterprises with scalable software, AI automation, and elite engineering talent.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Linkedin} />
            <SocialIcon icon={Github} />
            <SocialIcon icon={Instagram} />
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setPage('enterprise')} className="hover:text-indigo-400 transition-colors">Enterprise Systems</button></li>
            <li><button onClick={() => setPage('ai')} className="hover:text-indigo-400 transition-colors">AI Automation</button></li>
            <li><button onClick={() => setPage('digital')} className="hover:text-indigo-400 transition-colors">Web Experiences</button></li>
            <li><button onClick={() => setPage('launchpad')} className="hover:text-indigo-400 transition-colors">IT Launchpad</button></li>
          </ul>
        </div>

        {/* Contact/Company Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
              <li><button onClick={() => setPage('aboutus')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
             <li><button onClick={() => setPage('contact')} className="hover:text-indigo-400 transition-colors">Contact Us</button></li>
{/*              <li><button className="hover:text-indigo-400 transition-colors">Careers</button></li> */}
             <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info.enlivo@gmail.com</li>
             <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bengaluru, India</li>
          </ul>
        </div>

{/* Newsletter Column */}
<div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm mb-4">Get the latest on AI trends and tech scalability.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
              {subscribeMsg && (
                <p className="text-xs text-emerald-400 mt-1">
                  {subscribeMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2025 Enlivo Technologies. All rights reserved.</p>
        <div className="flex gap-8">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
        </div>
        
      </div>
    </div>
  </footer>
);
};

// --- Main App Controller ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const setPage = (page) => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setCurrentPage(page);
//     setIsMobileMenuOpen(false);
//   };

const setPage = (page) => {
  setCurrentPage(page);
  setIsMobileMenuOpen(false);

  // scroll after state updates
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
};


  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-indigo-500/30">
      <Navbar 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentPage={currentPage}
        setPage={setPage}
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <ParallaxHero setPage={setPage} />
            <AICapabilities />
            <ServiceAbstract setPage={setPage} />
            <Testimonials />
          </>
        )}
        
        {currentPage === 'digital' && <DigitalExperiencePage />}
        {currentPage === 'aboutus' && <AboutUsPage />}
        {currentPage === 'enterprise' && <EnterpriseSystemPage />}
        {currentPage === 'ai' && <AIAutomationPage />}
        {/* UPDATED: Pass setPage to InternshipPage */}
        {currentPage === 'internship' && <InternshipPage setPage={setPage} />}
        {currentPage === 'launchpad' && <LaunchpadPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}