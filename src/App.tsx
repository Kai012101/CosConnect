import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Instagram, Facebook, Twitter, Microscope, Mic, Lightbulb } from 'lucide-react';
import BorderGlow from './components/BorderGlow';
import SoftAurora from './components/SoftAurora';
import AnimatedContent from './components/AnimatedContent';

const teamMembers = [
  { name: 'Kai Leung', role: 'President', img: '/images/kai-photo.png' },
  { name: 'Thomas Pirotta', role: 'Vice President', img: '/images/thomas-photo.png' },
  { name: 'Nikita Pillai', role: 'Secretary', img: '/images/nikita-photo.png' },
  { name: 'Sovannita Chhun', role: 'Secretary', img: '/images/sovannita-photo.png' },
  { name: 'Karamina Praga', role: 'Treasurer', img: '/images/karamina-photo.png' },
  { name: 'Aayushi Yadav', role: 'Events Director', img: '/images/aayushi-photo.png' },
  { name: 'David Goshevski', role: 'Education & Careers Director', img: '/images/david-photo.png' },
  { name: 'Grace Nguyen', role: 'Social Media and Marketing Director', img: '/images/grace-photo.png' },
  { name: 'Elvis', role: 'Social Media and Marketing Officer', img: '/images/elvis-photo.png' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutContent />;
      case 'events':
        return <EventsContent setActiveTab={setActiveTab} />;
      case 'team':
        return <div className="pt-24"><TeamContent /></div>;
      case 'contact':
        return <div className="py-32 text-center min-h-screen pt-48"><h2 className="text-4xl font-serif text-[#1a2b3c]">Contact</h2><p className="mt-4 text-gray-500">Get in touch with us.</p></div>;
      default:
        return <HomeContent setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#f4f7f9] selection:bg-[#98a8b0] selection:text-white">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-8 lg:px-16 py-6 flex items-center justify-between transition-all duration-300 ${activeTab === 'home' ? 'text-white bg-black/30 backdrop-blur-md border-b border-white/10' : 'text-[#1a2b3c] bg-white shadow-sm'}`}>
        <div className="w-32 font-serif text-xl tracking-widest cursor-pointer" onClick={() => setActiveTab('home')}>
          CosConnect+
        </div>
        
        <ul className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.15em] font-medium">
          <li><button onClick={() => setActiveTab('home')} className={`hover:opacity-70 transition-opacity capitalize ${activeTab === 'home' ? 'opacity-100' : 'opacity-60'}`}>Home</button></li>
          <li><button onClick={() => setActiveTab('about')} className={`hover:opacity-70 transition-opacity capitalize ${activeTab === 'about' ? 'opacity-100' : 'opacity-60'}`}>About</button></li>
          <li><button onClick={() => setActiveTab('events')} className={`hover:opacity-70 transition-opacity capitalize ${activeTab === 'events' ? 'opacity-100' : 'opacity-60'}`}>Events</button></li>
          <li><button onClick={() => setActiveTab('team')} className={`hover:opacity-70 transition-opacity capitalize ${activeTab === 'team' ? 'opacity-100' : 'opacity-60'}`}>Team</button></li>
          <li><button onClick={() => setActiveTab('contact')} className={`hover:opacity-70 transition-opacity capitalize ${activeTab === 'contact' ? 'opacity-100' : 'opacity-60'}`}>Contact</button></li>
        </ul>
        
        <div className="flex items-center gap-6 w-32 justify-end">
          <button className="hover:opacity-70 transition-opacity"><Search size={20} strokeWidth={1.5} /></button>
          <button className="hover:opacity-70 transition-opacity"><ShoppingBag size={20} strokeWidth={1.5} /></button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-white px-8 lg:px-16 py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-[2000px] mx-auto flex flex-col lg:flex-row justify-between gap-16">
          <div className="lg:max-w-sm">
            <h2 className="font-serif text-2xl tracking-wide text-[#1a2b3c] mb-6">CosConnect+</h2>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-8">
              A student community connecting passionate minds to explore cosmetic science, exchange ideas, and discover the chemistry behind beauty.
            </p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-gray-900 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24 text-sm">
            <div className="space-y-6">
              <h5 className="font-medium text-gray-900 uppercase tracking-widest text-xs">Explore</h5>
              <ul className="space-y-4 text-gray-500 font-light">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-gray-900 transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab('about')} className="hover:text-gray-900 transition-colors">About Us</button></li>
                <li><button onClick={() => setActiveTab('events')} className="hover:text-gray-900 transition-colors">Events</button></li>
                <li><button onClick={() => setActiveTab('team')} className="hover:text-gray-900 transition-colors">Team</button></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h5 className="font-medium text-gray-900 uppercase tracking-widest text-xs">Terms & Policy</h5>
              <ul className="space-y-4 text-gray-500 font-light">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-[2000px] mx-auto mt-24 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-light">© 2026 CosConnect+. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400 font-light">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl font-serif mb-3 bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#38bdf8] bg-clip-text text-transparent">
      {prefix}{count}{suffix}
    </div>
  );
}

function AboutContent() {
  return (
    <div className="py-24 px-8 lg:px-16 max-w-[1200px] mx-auto min-h-screen flex flex-col lg:flex-row gap-16 items-center pt-32">
      {/* Left side: Stats card */}
      <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 grid grid-cols-2 gap-y-16 gap-x-8 text-center">
        <div>
          <AnimatedCounter target={9} />
          <div className="text-[10px] tracking-widest text-gray-400 uppercase">Committee Members</div>
        </div>
        <div>
          <AnimatedCounter target={3} suffix="+" />
          <div className="text-[10px] tracking-widest text-gray-400 uppercase">Events Planned</div>
        </div>
        <div>
          <div className="text-5xl font-serif mb-3 bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#38bdf8] bg-clip-text text-transparent">S1</div>
          <div className="text-[10px] tracking-widest text-gray-400 uppercase">2026 Launch</div>
        </div>
        <div>
          <div className="text-5xl font-serif mb-3 bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#38bdf8] bg-clip-text text-transparent">∞</div>
          <div className="text-[10px] tracking-widest text-gray-400 uppercase">Possibilities</div>
        </div>
      </div>

      {/* Right side: Text content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div>
          <h4 className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase mb-4">About Us</h4>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#0f172a] leading-tight mb-6">
            Where curiosity meets cosmetic science
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            CosConnect is a student community at Monash University providing an inclusive and vibrant space where students can immerse themselves in cosmetic science, exchange ideas, learn the chemistry behind formulations and engage with the latest trends in skincare, fragrance, and personal care.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-4">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Microscope size={20} className="text-gray-700" />
            </div>
            <div>
              <h4 className="text-[#0f172a] font-medium mb-1">Science-Driven Learning</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Understand emulsions, INCI lists, active ingredients, and what makes your favourite products work.</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Mic size={20} className="text-gray-700" />
            </div>
            <div>
              <h4 className="text-[#0f172a] font-medium mb-1">Industry Connections</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Guest speakers, networking mixers, and career-focused sessions with professionals in the cosmetics field.</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Lightbulb size={20} className="text-gray-700" />
            </div>
            <div>
              <h4 className="text-[#0f172a] font-medium mb-1">Hands-On Workshops</h4>
              <p className="text-sm text-gray-500 leading-relaxed">From texture testing to formulation basics — get your hands on real products and real science.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[800px] bg-[#0a0a0a] overflow-hidden flex flex-col">
        {/* SOFT AURORA BACKGROUND */}
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />

        {/* GIANT BACKGROUND TEXT — behind the figure */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden z-[5] flex items-center justify-center">
          <h1 className="text-[13vw] leading-[0.85] font-serif text-white/[0.07] tracking-tight text-center">
            COSCONNECT+
          </h1>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 flex-1 w-full max-w-[2000px] mx-auto flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 px-6 lg:px-16 gap-12">
          
          {/* Left Content */}
          <div className="max-w-xl z-20 flex flex-col items-start text-left flex-1">
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4">MONASH UNIVERSITY • SEMESTER 1, 2026</p>
            <h2 className="text-white font-serif text-5xl lg:text-6xl leading-tight mb-6">
              Connect. Create. Cosmetics.
            </h2>
            <div className="text-white/60 text-sm lg:text-base leading-relaxed mb-8 font-light max-w-md">
              <p className="mb-3">A student community connecting passionate minds to explore cosmetic science, exchange ideas, and discover the chemistry behind beauty.</p>
              <WordLoop />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAbhSOka0I_Q4pioU-w29Op1qAh3HHtcPW99PvixqrJT1BGg/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnAh3v0_9NbbdN5qh55IAONTE3eseX0QwoR8T9LBvpnZL2pQQ1NxbS2TOadFI_aem_fGunEl2n4cNE4R3wsliqVQ" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white text-[#0a0a0a] rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-white/90 transition-all duration-300">
                Become a Member
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <button onClick={() => setActiveTab('events')} className="group flex items-center justify-center gap-3 border border-white/30 rounded-full px-8 py-3 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
                Explore Events
              </button>
            </div>
          </div>

          {/* Center Portrait — in FRONT of the text */}
          <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] max-w-[550px] z-[10] relative">
            <img 
              src="/images/hero-portrait.jpg" 
              alt="Ethereal beauty portrait" 
              className="w-full h-auto object-cover"
              style={{ maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 75%)' }}
            />
          </div>

          {/* Right Upcoming Event Card */}
          <div className="hidden lg:flex flex-1 justify-end z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-72 shadow-2xl cursor-pointer hover:bg-white/20 transition-colors" onClick={() => setActiveTab('events')}>
              <div className="aspect-[4/3] bg-gray-200 rounded-xl mb-4 overflow-hidden relative">
                <img src="/images/event-employability.png" alt="Employability Week" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white text-[#1a2b3c] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Upcoming
                </div>
              </div>
              <h4 className="text-white font-serif text-lg mb-1">Employability Week</h4>
              <div className="flex justify-between items-center mt-2">
                <p className="text-white/70 text-xs">Semester 1, 2026</p>
                <span className="text-white text-xs font-medium">RSVP →</span>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Mascot Logos */}
        <img src="/images/mascot-logo.png" alt="" className="absolute z-[2] w-16 h-16 object-contain opacity-20 animate-pulse pointer-events-none" style={{ top: '15%', right: '8%', animationDuration: '4s' }} />
        <img src="/images/mascot-logo.png" alt="" className="absolute z-[2] w-12 h-12 object-contain opacity-15 animate-pulse pointer-events-none" style={{ top: '70%', left: '5%', animationDuration: '5s', animationDelay: '1s' }} />
        <img src="/images/mascot-logo.png" alt="" className="absolute z-[2] w-10 h-10 object-contain opacity-10 animate-pulse pointer-events-none" style={{ top: '40%', left: '12%', animationDuration: '6s', animationDelay: '2s' }} />
      </section>

      {/* 2. EXPLORE COSMETIC SCIENCE */}
      <section className="w-full bg-white px-8 lg:px-16 py-24 lg:py-32 max-w-[2000px] mx-auto flex flex-col gap-16 items-center">
        <AnimatedContent distance={60} duration={0.9}>
          <div className="w-full max-w-3xl text-center flex flex-col items-center">
            <h2 className="text-[#1a2b3c] font-serif text-4xl lg:text-5xl leading-tight mb-6">
              EXPLORE COSMETIC SCIENCE
            </h2>
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-2xl">
              Dive into the chemistry of beauty. From formulation workshops to industry networking, discover the science behind your favorite products.
            </p>
          </div>
        </AnimatedContent>
        
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
          {[
            { name: 'Formulation Workshops', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop' },
            { name: 'Industry Networking', img: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop' },
            { name: 'Chemistry of Beauty', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop' }
          ].map((prod, i) => (
            <AnimatedContent key={i} distance={80} duration={0.8} delay={i * 0.15}>
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#ffffff"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full"
              >
                <div className="aspect-[3/4] bg-gray-50 rounded-[22px] overflow-hidden relative group cursor-pointer h-full">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white font-serif text-xl">{prod.name}</h3>
                  </div>
                </div>
              </BorderGlow>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* FOLLOW US ON INSTAGRAM */}
      <section className="w-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] py-12 px-8 lg:px-16">
        <div className="max-w-[2000px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <Instagram size={28} className="text-white" />
            <span className="text-white font-serif text-2xl lg:text-3xl">Follow us on Instagram</span>
          </div>
          <a href="https://www.instagram.com/cosconnect.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 rounded-full px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-2">
            @cosconnect.official
            <span>→</span>
          </a>
        </div>
      </section>

      {/* 3. COMMUNITY PROMO */}
      <section className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden group">
        <img 
          src="/images/community-bg.jpg" 
          alt="CosConnect+ Community" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <AnimatedContent distance={50} duration={1}>
            <div className="bg-black/50 backdrop-blur-sm rounded-3xl px-12 py-10 max-w-2xl">
              <h3 className="text-white font-serif text-5xl lg:text-7xl mb-6 tracking-wide drop-shadow-lg">OUR COMMUNITY</h3>
              <p className="text-white text-sm lg:text-base max-w-lg font-light leading-relaxed mx-auto drop-shadow-md">
                Join a vibrant group of students passionate about the intersection of science and beauty.
              </p>
              <button onClick={() => setActiveTab('team')} className="mt-10 bg-white text-gray-900 rounded-full px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-white/90 transition-all duration-300 shadow-lg">
                Join Us Today
              </button>
            </div>
          </AnimatedContent>
        </div>
      </section>

    </>
  );
}

function TeamContent({ preview = false, setActiveTab }: { preview?: boolean, setActiveTab?: (tab: string) => void }) {
  const displayMembers = preview ? teamMembers.slice(0, 4) : teamMembers;

  return (
    <section className={`w-full bg-white px-8 lg:px-16 ${preview ? 'py-24' : 'pt-12 pb-24'} max-w-[2000px] mx-auto min-h-screen`}>
      <AnimatedContent distance={50} duration={0.8}>
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1a2b3c]">Current Team Members</h2>
          {preview && setActiveTab && (
            <button onClick={() => setActiveTab('team')} className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest hidden sm:block">
              View All
            </button>
          )}
        </div>
      </AnimatedContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {displayMembers.map((member, i) => (
          <AnimatedContent key={i} distance={60} duration={0.7} delay={i * 0.1}>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#ffffff"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              className="h-full"
            >
              <div className="flex flex-col group cursor-pointer h-full bg-white rounded-[14px] p-2">
                <div className="aspect-[4/5] bg-gray-50 mb-6 overflow-hidden rounded-xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer"/>
                </div>
                <div className="flex flex-col items-start gap-1 mb-2 px-2">
                  <h4 className="text-lg font-serif text-gray-900">{member.name}</h4>
                  <span className="text-sm text-gray-500 font-light">{member.role}</span>
                </div>
              </div>
            </BorderGlow>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}

const loopWords = ['Skincare', 'Fragrance', 'Personal Care', 'Formulation', 'Cosmetics', 'Beauty Science'];

function WordLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % loopWords.length);
        setIsAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-white/40">Explore</span>
      <span
        className={`inline-block text-white font-medium transition-all duration-400 ${
          isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
        }`}
        style={{ minWidth: '140px' }}
      >
        {loopWords[currentIndex]}
      </span>
    </span>
  );
}

function EventsContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16 max-w-[1400px] mx-auto min-h-screen">
      <AnimatedContent distance={50} duration={0.8}>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#1a2b3c] mb-4">Events</h2>
        <p className="text-gray-500 mb-16 max-w-xl">Discover our upcoming events and get involved with the CosConnect+ community.</p>
      </AnimatedContent>

      <AnimatedContent distance={60} duration={0.8} delay={0.2}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Featured Event */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group cursor-pointer">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src="/images/event-employability.png" 
                alt="Employability Week" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 bg-[#38bdf8] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">Semester 1, 2026</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">Monash University</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1a2b3c] mb-3">Monash Pharmaceutical Science Employability Week</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                'Our Students, Your Future' — Join us for a week of career-focused sessions, industry networking, and professional development opportunities in pharmaceutical and cosmetic sciences.
              </p>
              <button className="group/btn flex items-center gap-2 bg-[#1a2b3c] text-white rounded-full px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#2a3b4c] transition-all duration-300">
                Learn More
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* More Events */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex gap-6 items-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center shrink-0">
                <span className="text-2xl font-serif text-[#1a2b3c]">15</span>
                <span className="text-[9px] tracking-widest text-gray-400 uppercase">Mar</span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#1a2b3c] mb-1">Launch Mixer Event</h4>
                <p className="text-sm text-gray-500">Meet the team and connect with fellow cosmetic science enthusiasts.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex gap-6 items-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex flex-col items-center justify-center shrink-0">
                <span className="text-2xl font-serif text-[#1a2b3c]">22</span>
                <span className="text-[9px] tracking-widest text-gray-400 uppercase">Apr</span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#1a2b3c] mb-1">Formulation Workshop</h4>
                <p className="text-sm text-gray-500">Hands-on workshop exploring emulsion science and active ingredients.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex gap-6 items-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex flex-col items-center justify-center shrink-0">
                <span className="text-2xl font-serif text-[#1a2b3c]">10</span>
                <span className="text-[9px] tracking-widest text-gray-400 uppercase">May</span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#1a2b3c] mb-1">Industry Guest Speaker</h4>
                <p className="text-sm text-gray-500">A special talk from professionals in the cosmetic and pharmaceutical industries.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* Past Events */}
      <AnimatedContent distance={60} duration={0.8} delay={0.3}>
        <h3 className="text-2xl lg:text-3xl font-serif text-[#1a2b3c] mt-20 mb-8">Past Events</h3>
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex gap-6 items-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex flex-col items-center justify-center shrink-0">
            <span className="text-2xl font-serif text-[#1a2b3c]">S1</span>
            <span className="text-[9px] tracking-widest text-gray-400 uppercase">2026</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="font-serif text-lg text-[#1a2b3c]">Semester 1 Orientation 2026</h4>
              <span className="text-[9px] tracking-widest text-gray-400 uppercase bg-gray-100 px-2 py-0.5 rounded-full">Past</span>
            </div>
            <p className="text-sm text-gray-500">Welcome event for new and returning students to kick off the semester with CosConnect+.</p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
