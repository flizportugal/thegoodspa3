import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Menu, X, Phone, Calendar, Gift, Users, Star,
  ChevronRight, Instagram, Facebook, Mail, MapPin,
  Clock, Check, ArrowRight, Sparkles, Heart, ExternalLink,
  Award, Shield, Gem
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminBookings from '@/components/AdminBookings';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || 'home';
  });
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showFAQDialog, setShowFAQDialog] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const giftCardsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-bg',
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    );
    heroTl.fromTo('.hero-headline span',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
      '-=0.6'
    );
    heroTl.fromTo('.hero-subtext',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
    heroTl.fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [currentPage]);

  const navigateToPage = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const renderNavigation = () => (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center">
        <button
          onClick={() => navigateToPage('home')}
          className="text-micro text-[#DDD3C5] hover:text-[#D9B061] transition-colors"
        >
          The Good Spa
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navigateToPage('services')} className="text-sm text-[#DDD3C5] gold-underline hover:text-[#D9B061] transition-colors">Services</button>
          <button onClick={() => navigateToPage('portfolio')} className="text-sm text-[#DDD3C5] gold-underline hover:text-[#D9B061] transition-colors">Portfolio</button>
          <button onClick={() => navigateToPage('about')} className="text-sm text-[#DDD3C5] gold-underline hover:text-[#D9B061] transition-colors">About</button>
          <button onClick={() => navigateToPage('membership')} className="text-sm text-[#DDD3C5] gold-underline hover:text-[#D9B061] transition-colors">Membership</button>
          <button onClick={() => navigateToPage('blog')} className="text-sm text-[#DDD3C5] gold-underline hover:text-[#D9B061] transition-colors">Blog</button>
          <button onClick={() => navigateToPage('contact')} className="text-sm text-[#DDD3C5] gold-underline hover:text-[#D9B061] transition-colors">Contact</button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowBookingDialog(true)}
            className="text-sm text-[#DDD3C5] gold-underline hidden sm:block"
          >
            Book
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#DDD3C5]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF6F0] flex flex-col items-center justify-center gap-8">
          <button onClick={() => navigateToPage('home')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Home</button>
          <button onClick={() => navigateToPage('services')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Services</button>
          <button onClick={() => navigateToPage('portfolio')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Portfolio</button>
          <button onClick={() => navigateToPage('about')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">About</button>
          <button onClick={() => navigateToPage('membership')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Membership</button>
          <button onClick={() => navigateToPage('gift-cards')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Gift Cards</button>
          <button onClick={() => navigateToPage('blog')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Blog</button>
          <button onClick={() => navigateToPage('contact')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">Contact</button>
          <button onClick={() => navigateToPage('faq')} className="text-2xl font-semibold text-[#2C2C2C] hover:text-[#C9A96E]">FAQ</button>
        </div>
      )}
    </>
  );

  const renderFooter = () => (
    <footer className="bg-[#5C4B3C] text-[#DDD3C5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-micro text-[#DDD3C5]/60 mb-4">The Good Spa</h4>
            <p className="text-sm text-[#DDD3C5]/80 leading-relaxed">
              Luxury Wellness, Delivered to Your Door. Professional facials, massage, makeup, and nails—at home.
            </p>
          </div>
          <div>
            <h4 className="text-micro text-[#DDD3C5]/60 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Facials</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Massage</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Makeup</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Nails</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-micro text-[#DDD3C5]/60 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToPage('about')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">About Us</button></li>
              <li><button onClick={() => navigateToPage('membership')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Membership</button></li>
              <li><button onClick={() => navigateToPage('gift-cards')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Gift Cards</button></li>
              <li><button onClick={() => navigateToPage('corporate')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Corporate</button></li>
              <li><button onClick={() => navigateToPage('blog')} className="text-sm text-[#DDD3C5]/80 hover:text-[#D9B061] transition-colors">Blog</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-micro text-[#DDD3C5]/60 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#DDD3C5]/80">
                <Phone size={14} />
                <a href="tel:+16475474498" className="hover:text-[#D9B061] transition-colors">(647) 547-4498</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#DDD3C5]/80">
                <Mail size={14} />
                <a href="mailto:hello@thegoodspa.ca" className="hover:text-[#D9B061] transition-colors">hello@thegoodspa.ca</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#DDD3C5]/80">
                <MapPin size={14} />
                Toronto, ON
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-[#DDD3C5]/60 hover:text-[#D9B061] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[#DDD3C5]/60 hover:text-[#D9B061] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DDD3C5]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#DDD3C5]/40">© 2026 The Good Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => navigateToPage('privacy')} className="text-xs text-[#DDD3C5]/40 hover:text-[#DDD3C5]/80 transition-colors">Privacy Policy</button>
            <button onClick={() => navigateToPage('terms')} className="text-xs text-[#DDD3C5]/40 hover:text-[#DDD3C5]/80 transition-colors">Terms of Service</button>
            <button onClick={() => navigateToPage('accessibility')} className="text-xs text-[#DDD3C5]/40 hover:text-[#DDD3C5]/80 transition-colors">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderHomePage = () => (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img
            src="/images/hf_20260225_232954_402b0aaa-87f2-4c41-b54f-edda938cf74d.jpeg"
            alt="Luxury Wellness, Delivered to Your Door."
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <h1 className="hero-headline heading-display text-white text-[clamp(36px,5vw,72px)] mb-6 drop-shadow-lg">
              <span className="block">Luxury</span>
              <span className="block">Wellness,</span>
              <span className="block">Delivered</span>
              <span className="block">to Your Door</span>
            </h1>
            <p className="hero-subtext text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Professional facials, massage, makeup, and nails—at home.
            </p>
            <button
              onClick={() => setShowBookingDialog(true)}
              className="hero-cta inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Book Your Appointment
              <ArrowRight size={16} />
            </button>
            <div className="hero-cta flex items-center gap-4 mt-4">
              <button
                onClick={() => navigateToPage('contact')}
                className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => setShowFAQDialog(true)}
                className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 text-micro text-white/70">Luxury mobile spa & beauty</div>
        <div className="absolute bottom-6 right-6 text-micro text-white/70 hidden md:block">Scroll</div>
      </section>

      {/* Section 2: Services Overview */}
      <section ref={servicesRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hf_20260226_145058_b230822f-18aa-4a25-ac6c-dc0fe11bec1c.jpeg"
            alt="Spa services"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Facials</span>
              <span className="block">Massage</span>
              <span className="block">Makeup</span>
              <span className="block">Nails</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              One team. One booking. An exceptional experience.
            </p>
            <button
              onClick={() => navigateToPage('services')}
              className="inline-flex items-center gap-2 text-white border-b border-[#C9A96E] pb-1 text-sm font-semibold uppercase tracking-wider hover:text-[#C9A96E] transition-colors"
            >
              Explore Services
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Signature Facial */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/facial_closeup.jpg"
            alt="Signature facial"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#C9A96E] text-[#2C2C2C] hover:bg-[#C9A96E]">60 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">The Signature</span>
              <span className="block">Facial</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Deep cleansing, gentle exfoliation, and hydration—customized to your skin.
            </p>
            <button
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Book a Facial
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Wellness Massage */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hf_20260226_063043_9da9ef9d-4e15-4bd4-9a66-bf32a573e507.jpeg"
            alt="Wellness massage"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#C9A96E] text-[#2C2C2C] hover:bg-[#C9A96E]">60-90 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">WELLNESS MASSAGE</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Targeted pressure where you need it—neck, back, shoulders, legs.
            </p>
            <button
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Book Massage
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Makeup Artistry */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hf_20260226_135917_a3e1c77c-a8ca-44d1-b941-ef1b4dc1da64.jpeg"
            alt="Makeup artistry"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#C9A96E] text-[#2C2C2C] hover:bg-[#C9A96E]">45-75 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Makeup</span>
              <span className="block">Artistry</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Bridal, editorial, or a night out—flawless skin, defined eyes, long wear.
            </p>
            <button
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Book Makeup
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Nail Services */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/nails_hands.jpg"
            alt="Nail services"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#C9A96E] text-[#2C2C2C] hover:bg-[#C9A96E]">45-60 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Nail</span>
              <span className="block">Services</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Manicures & pedicures with cuticle care, shaping, and long-lasting polish.
            </p>
            <button
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Book Nails
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 7: How It Works */}
      <section ref={howItWorksRef} className="py-24 px-6 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-section">
              <img
                src="/images/hf_20260226_003011_5b96aaf1-f35e-4b5c-870f-1472c09deef6.png"
                alt="How it works"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
            <div className="animate-section">
              <h2 className="heading-display text-[#2C2C2C] text-[clamp(32px,4vw,48px)] mb-6">
                How It Works
              </h2>
              <p className="text-[#2C2C2C] text-lg mb-12">
                We bring the spa to you—clean setup, professional products, and a calm experience from start to finish.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A96E] text-white flex items-center justify-center text-lg font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] text-lg mb-2">Book Online</h3>
                    <p className="text-[#2C2C2C]">Choose your services, date, and location.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A96E] text-white flex items-center justify-center text-lg font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] text-lg mb-2">We Confirm</h3>
                    <p className="text-[#2C2C2C]">You'll get a text or email with your appointment details.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A96E] text-white flex items-center justify-center text-lg font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] text-lg mb-2">Enjoy at Home</h3>
                    <p className="text-[#2C2C2C]">We arrive, set up, and deliver an exceptional experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Membership */}
      <section ref={membershipRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hf_20260226_140724_96d76e2b-ce63-46cb-984d-73c3f6c4f68f.jpeg"
            alt="Glow Club Membership"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#C9A96E] text-[#2C2C2C] hover:bg-[#C9A96E]">From $149/Mo</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Glow Club</span>
              <span className="block">Membership</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Monthly experiences, priority booking, and members-only pricing.
            </p>
            <button
              onClick={() => navigateToPage('membership')}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Join the Club
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 px-6 bg-[#FAF6F1] border-y border-[#C4B49E]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {[
              { icon: <Award size={22} className="text-[#D9B061]" />, stat: '12+', label: 'Years of Experience' },
              { icon: <Users size={22} className="text-[#D9B061]" />, stat: '500+', label: 'Happy Clients' },
              { icon: <Shield size={22} className="text-[#D9B061]" />, stat: 'Certified', label: 'Medical Aesthetician' },
              { icon: <Gem size={22} className="text-[#D9B061]" />, stat: "Toronto's #1", label: 'Mobile Spa' },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-6 ${i < 3 ? 'md:border-r border-[#C4B49E]/40' : ''}`}>
                <div className="mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-[#2C2C2C] mb-1">{item.stat}</div>
                <div className="text-sm text-[#9E8C7A]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section ref={testimonialsRef} className="py-24 px-6 bg-[#F2EDE6]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section mb-12">
            <h2 className="heading-display text-[#2C2C2C] text-[clamp(32px,4vw,48px)] mb-4">
              Loved by Clients
            </h2>
            <p className="text-[#2C2C2C] text-lg">Real experiences from real clients.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                service: 'Signature Facial',
                quote: 'The best facial I have ever had. My skin has never looked better. The convenience of having it done at home is unbeatable.',
                rating: 5
              },
              {
                name: 'Jessica L.',
                service: 'Bridal Makeup',
                quote: 'They made me feel like a princess on my wedding day. The makeup lasted all day and looked flawless in photos.',
                rating: 5
              },
              {
                name: 'Amanda K.',
                service: 'Wellness Massage',
                quote: 'This massage was absolutely incredible. I felt so rejuvenated and calm afterward. The professionalism was outstanding.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="animate-section bg-[#FAF6F1] border border-[#C9A96E] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C9A96E] text-[#C9A96E]" />
                    ))}
                  </div>
                  <p className="text-[#2C2C2C] mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2C2C2C]">{testimonial.name}</span>
                    <Badge variant="outline" className="text-[#2C2C2C]">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Portfolio */}
      <section ref={portfolioRef} className="py-24 px-6 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section mb-12">
            <h2 className="heading-display text-[#2C2C2C] text-[clamp(32px,4vw,48px)] mb-4">
              Transformations
            </h2>
            <p className="text-[#2C2C2C] text-lg">Real clients. Real results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-section">
              <img
                src="/images/beforeafter_facial.jpg"
                alt="Facial transformation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-sm text-[#2C2C2C]">Signature Facial Results</p>
            </div>
            <div className="animate-section">
              <img
                src="/images/beforeafter_makeup.jpg"
                alt="Makeup transformation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-sm text-[#2C2C2C]">Makeup Artistry</p>
            </div>
            <div className="animate-section flex items-center justify-center bg-[#F2EDE6] rounded-lg shadow-lg p-12">
              <button
                onClick={() => navigateToPage('portfolio')}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#C9A96E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <p className="font-semibold text-[#2C2C2C]">View Full Portfolio</p>
                <p className="text-sm text-[#2C2C2C]">See more transformations</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Gift Cards */}
      <section ref={giftCardsRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/giftcard_gentle.jpg"
            alt="Gift cards"
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#C9A96E] text-[#2C2C2C] hover:bg-[#C9A96E]">$50 - $500</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Give The</span>
              <span className="block">Gift of Glow</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Digital gift cards delivered instantly. Valid on all services.
            </p>
            <button
              onClick={() => navigateToPage('gift-cards')}
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Buy a Gift Card
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 12: Contact */}
      <section ref={contactRef} className="text-[#2C2C2C] py-24 px-6 relative" style={{ backgroundImage: 'url(/images/0E566F28-36A4-4903-90F9-CD1579E4FB8A.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-section">
              <h2 className="heading-display text-[#2C2C2C] text-[clamp(32px,4vw,48px)] mb-6">
                Ready When You Are.
              </h2>
              <p className="text-[#2C2C2C]/70 text-lg mb-8">
                Book online or send a note. We'll confirm within 2 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-micro text-[#2C2C2C]/60 mb-2 block">Name</Label>
                    <Input
                      placeholder="Your name"
                      className="bg-white/60 border-[#2C2C2C]/20 text-[#2C2C2C] placeholder:text-[#2C2C2C]/40"
                    />
                  </div>
                  <div>
                    <Label className="text-micro text-[#2C2C2C]/60 mb-2 block">Email</Label>
                    <Input
                      placeholder="your@email.com"
                      className="bg-white/60 border-[#2C2C2C]/20 text-[#2C2C2C] placeholder:text-[#2C2C2C]/40"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-micro text-[#2C2C2C]/60 mb-2 block">Phone</Label>
                  <Input
                    placeholder="(647) 547-4498"
                    className="bg-white/60 border-[#2C2C2C]/20 text-[#2C2C2C] placeholder:text-[#2C2C2C]/40"
                  />
                </div>
                <div>
                  <Label className="text-micro text-[#2C2C2C]/60 mb-2 block">Message</Label>
                  <Textarea
                    placeholder="Tell us about your desired services..."
                    className="bg-white/60 border-[#2C2C2C]/20 text-[#2C2C2C] placeholder:text-[#2C2C2C]/40 min-h-[120px]"
                  />
                </div>
                <Button
                  onClick={() => setShowBookingDialog(true)}
                  className="bg-[#C9A96E] hover:bg-[#E8C4C4] text-[#2C2C2C] px-8 py-4 text-sm font-semibold uppercase tracking-wider w-full md:w-auto"
                >
                  Request a Booking
                </Button>
              </form>
            </div>

            <div className="animate-section hidden md:block">
              <img
                src="/images/hf_20260226_144827_870fa72e-3dc8-41d5-bfe9-b5b5f0cc874e.jpeg"
                alt="Contact"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServicesPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ backgroundImage: 'url(/images/hf_20260226_065802_50c19ea7-cc77-42dd-941d-bfc061d28fff.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            Our Services
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Luxury spa experiences delivered to your door. All services include professional products and a calm, relaxing atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[
            { title: "The Luminosity Facial", duration: "60 min", price: "$185", desc: "Deep cleansing, professional-grade exfoliation, targeted serums, and a sculpting facial massage. Customized to your skin. Includes complimentary skin analysis.", addon: false },
            { title: "The Opulent Glow Facial", duration: "90 min", price: "$265", desc: "Our most luxurious facial. Professional exfoliating service, collagen-boosting mask, LED light therapy, and an extended décolleté and scalp massage.", addon: false },
            { title: "The Gentleman's Refine Facial", duration: "60 min", price: "$185", desc: "Designed for the modern man. Deep-cleansing, mattifying serums, and a tension-release facial massage targeting the jaw, temples, and brow.", addon: false },
            { title: "The Deep Relaxation Massage", duration: "60 min", price: "$175", desc: "A full-body relaxation massage to help you unwind completely. Choose your preferred pressure. Warm aromatherapy oils, heated towels, and curated ambient sound.", addon: false },
            { title: "The Deep Relaxation Massage — Extended", duration: "90 min", price: "$245", desc: "Ninety minutes of pure relaxation. We focus on every area — neck, shoulders, back, glutes, and feet. Hot stone placement and scalp massage included.", addon: false },
            { title: "The Couples' Retreat Massage", duration: "90 min", price: "$475 (for two)", desc: "Two professionals arrive simultaneously for a synchronized relaxation experience. Warm oils, ambient lighting, and curated playlist included.", addon: false },
            { title: "Makeup Artistry", duration: "45–75 min", price: "$195", desc: "Bridal, editorial, or a night out — flawless skin, defined eyes, and long-wear color. Professional makeup artistry performed at your location.", addon: false },
            { title: "The Polished Classic Manicure", duration: "45 min", price: "$95", desc: "Detailed cuticle care, shaping, buffing, a hydrating hand massage with botanical cream, and your choice of premium polish.", addon: false },
            { title: "The Polished Classic Pedicure", duration: "60 min", price: "$110", desc: "Aromatic foot soak, expert callus care, precise nail shaping, an indulgent foot massage, and flawless polish application.", addon: false },
            { title: "The Complete Mani + Pedi Experience", duration: "90 min", price: "$185", desc: "Full manicure and pedicure performed back-to-back. Includes all cuticle work, exfoliation, dual hydrating massages, and premium polish.", addon: false },
          ].map((svc, i) => (
            <div
              key={svc.title}
              className="bg-[#DDD3C5] rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(201,169,110,0.15)]"
              style={{ borderLeft: `3px solid ${i % 2 === 0 ? '#C9A96E' : '#9E8C7A'}` }}
            >
              <h3 className="font-['Montserrat',sans-serif] font-semibold text-[#2C2C2C] text-lg mb-1">{svc.title}</h3>
              <p className="text-[#7A6858] text-sm font-semibold tracking-wide mb-3">{svc.duration} &nbsp;|&nbsp; {svc.price}</p>
              <p className="text-[#5C4B3C] text-sm leading-relaxed mb-5">{svc.desc}</p>
              <Button onClick={() => setShowBookingDialog(true)} className="bg-[#C9A96E] hover:bg-[#b8914f] text-white text-sm">Book Now</Button>
            </div>
          ))}
        </div>

        {/* Gel/Shellac add-on card */}
        <div className="bg-[#F2EDE6] rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-6 border border-[#C4B49E]/60 relative">
          <div className="absolute top-4 right-4">
            <span className="bg-[#D9B061] text-[#2C2C2C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">ADD-ON</span>
          </div>
          <h3 className="font-['Montserrat',sans-serif] font-semibold text-[#2C2C2C] text-lg mb-1">Gel/Shellac Upgrade</h3>
          <p className="text-[#7A6858] text-sm font-semibold tracking-wide mb-3">Add-on &nbsp;|&nbsp; +$20 per set</p>
          <p className="text-[#5C4B3C] text-sm leading-relaxed mb-5">Chip-resistant, high-shine gel polish with professional LED curing. Available as an upgrade to any manicure or pedicure.</p>
          <Button onClick={() => setShowBookingDialog(true)} className="bg-[#D9B061] hover:bg-[#c49945] text-[#2C2C2C] text-sm font-semibold">Add to Booking</Button>
        </div>

        {/* Packages Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12 animate-section">
            <h2 className="heading-display text-[#2C2C2C] text-[clamp(32px,4vw,48px)] mb-4">Curated Experiences</h2>
            <p className="text-[#7A6858] text-lg">Everything you need, perfectly packaged.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#DDD3C5] rounded-sm p-8 animate-section shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[#2C2C2C] text-xl mb-2">The Golden Hour</h3>
              <p className="text-[#7A6858] text-sm mb-1">2 hrs</p>
              <div className="text-3xl font-bold text-[#C9A96E] mb-4">$325</div>
              <p className="text-[#5C4B3C] text-sm leading-relaxed mb-6">A curated two-hour experience combining our signature facial with a relaxation massage. The perfect introduction to luxury wellness at home.</p>
              <button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#D9B061] hover:bg-[#c49945] text-[#2C2C2C] px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors">Book Now</button>
            </div>

            <div className="bg-[#5C4B3C] rounded-sm p-8 animate-section shadow-lg hover:-translate-y-2 transition-all duration-300 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-[#D9B061] text-[#2C2C2C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">MOST POPULAR</span>
              </div>
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[#FAF6F1] text-xl mb-2">The Full Indulgence</h3>
              <p className="text-[#DDD3C5]/70 text-sm mb-1">3 hrs</p>
              <div className="text-3xl font-bold text-[#D9B061] mb-4">$485</div>
              <p className="text-[#DDD3C5] text-sm leading-relaxed mb-6">Our most complete luxury experience. Opulent Glow Facial, Deep Relaxation Massage, and Classic Manicure — all performed in the comfort of your home.</p>
              <button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#FAF6F1] hover:bg-white text-[#5C4B3C] px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors">Book Now</button>
            </div>

            <div className="bg-[#DDD3C5] rounded-sm p-8 animate-section shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[#2C2C2C] text-xl mb-2">The Celebration Package</h3>
              <p className="text-[#7A6858] text-sm mb-1">3–4 hrs</p>
              <div className="text-3xl font-bold text-[#C9A96E] mb-4">From $275<span className="text-lg">/person</span></div>
              <p className="text-[#5C4B3C] text-sm leading-relaxed mb-6">Perfect for bachelorette parties, birthdays, and special occasions. Multiple professionals, customized service selections, and a truly unforgettable experience.</p>
              <button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#D9B061] hover:bg-[#c49945] text-[#2C2C2C] px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors">Book Now</button>
            </div>
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="mt-8 bg-[#F2EDE6] rounded-sm p-10 animate-section">
          <div className="text-center mb-10">
            <h2 className="heading-display text-[#2C2C2C] text-[clamp(28px,3vw,40px)] mb-3">Elevate Your Experience</h2>
            <p className="text-[#7A6858] text-base">Customize any service with these premium enhancements.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#C4B49E]/60">
                  <th className="text-left py-3 px-4 text-[#5C4B3C] font-semibold text-xs uppercase tracking-wider">Add-On</th>
                  <th className="text-left py-3 px-4 text-[#5C4B3C] font-semibold text-xs uppercase tracking-wider">Details</th>
                  <th className="text-right py-3 px-4 text-[#5C4B3C] font-semibold text-xs uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Scalp Revival Massage', details: '15 min', price: '$35' },
                  { name: 'Hot Stone Enhancement', details: 'Added to massage', price: '$40' },
                  { name: 'Professional Exfoliation Boost', details: 'Added to facial', price: '$55' },
                  { name: 'Aromatherapy Upgrade', details: 'Full service', price: '$25' },
                  { name: 'Brow Shaping & Tint', details: '20 min', price: '$45' },
                  { name: 'Lash Tint', details: '20 min', price: '$40' },
                  { name: 'Paraffin Wax Dip', details: '10 min', price: '$25' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[#C4B49E]/30 ${i % 2 === 0 ? 'bg-white/30' : ''}`}>
                    <td className="py-3 px-4 font-medium text-[#2C2C2C]">{row.name}</td>
                    <td className="py-3 px-4 text-[#7A6858]">{row.details}</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#C9A96E]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs italic text-[#9E8C7A] text-center">
            Add-ons can be requested at the time of booking or noted in your intake form. Subject to availability and service compatibility.
          </p>
        </div>
      </div>
    </div>
  );

  const renderPortfolioPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            Transformations
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Real clients, real results. See the difference our luxury mobile spa experiences can make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="animate-section">
            <img
              src="/images/beforeafter_facial.jpg"
              alt="Facial transformation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#2C2C2C]">Luminosity Facial</h3>
              <p className="text-[#2C2C2C] text-sm">Client: Emily R. | After 1 session</p>
            </div>
          </div>
          <div className="animate-section">
            <img
              src="/images/beforeafter_makeup.jpg"
              alt="Makeup transformation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#2C2C2C]">Bridal Makeup</h3>
              <p className="text-[#2C2C2C] text-sm">Client: Jessica M. | Wedding day glam</p>
            </div>
          </div>
          <div className="animate-section">
            <img
              src="/images/facial_closeup.jpg"
              alt="Skin transformation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#2C2C2C]">Opulent Glow Facial</h3>
              <p className="text-[#2C2C2C] text-sm">Client: Sarah L. | After 3 sessions</p>
            </div>
          </div>
          <div className="animate-section">
            <img
              src="/images/nails_hands.jpg"
              alt="Nail transformation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#2C2C2C]">Polished Classic Manicure</h3>
              <p className="text-[#2C2C2C] text-sm">Client: Amanda K. | Gel upgrade</p>
            </div>
          </div>
        </div>

        <div className="text-center animate-section">
          <p className="text-[#2C2C2C] mb-6">Ready for your own transformation?</p>
          <Button
            onClick={() => setShowBookingDialog(true)}
            className="bg-[#C9A96E] hover:bg-[#c49345] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            About Us
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Two friends, one vision: bringing luxury spa experiences to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="animate-section">
            <img
              src="/images/IMG_5698_2.JPG"
              alt="Liz Portugal"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">Liz Portugal</h3>
            <p className="text-[#C9A96E] font-medium mb-4">Founder</p>
            <p className="text-[#2C2C2C] leading-relaxed mb-4">
              With 12 years in the beauty industry, Liz has mastered both the art and science of beauty—from professional makeup artistry to advanced medical esthetics. Certified in medical esthetics and trained across multiple modalities, she brings comprehensive expertise to every service.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Certified Advanced Medical Aesthetician</Badge>
              <Badge variant="outline">Certified Professional Make-up Artist</Badge>
            </div>
          </div>

          <div className="animate-section">
            <img
              src="/images/8149644F-4122-4DAE-9069-C4B92B4B05AA.PNG"
              alt="Dawn Miller"
              className="w-full h-[500px] object-contain rounded-lg shadow-lg mb-6 bg-[#F8F5F0]"
            />
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">Dawn Miller</h3>
            <p className="text-[#C9A96E] font-medium mb-4">Co-Founder</p>
            <p className="text-[#2C2C2C] leading-relaxed mb-4">
              Dawn brings over 24 years of experience in the aesthetic industry, having refined her craft since 2001. As a certified advanced aesthetician, she delivers transformative skincare experiences with precision and care, helping clients achieve their most radiant, healthy skin through evidence-based techniques and personalized service.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Licensed Cosmetologist</Badge>
              <Badge variant="outline">Certified Advanced Medical Aesthetician</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#F2EDE6] rounded-lg p-12 animate-section">
          <h2 className="heading-display text-[#2C2C2C] text-2xl mb-6 text-center">Our Story</h2>
          <p className="text-[#2C2C2C] leading-relaxed max-w-3xl mx-auto text-center">
            The Good Spa was born from a simple idea: everyone deserves access to luxury spa experiences without the hassle of leaving home. After years working in high-end spas, we saw how many clients struggled to find time for self-care. In 2019, we decided to change that. Today, we're proud to bring the spa experience to hundreds of homes across Toronto, helping our clients look and feel their best.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#C9A96E] mb-2">12+</div>
            <p className="text-[#2C2C2C]">Years of Experience</p>
          </div>
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#C9A96E] mb-2">500+</div>
            <p className="text-[#2C2C2C]">Happy Clients</p>
          </div>
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#C9A96E] mb-2">11+</div>
            <p className="text-[#2C2C2C]">Services Offered</p>
          </div>
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#C9A96E] mb-2">4.9</div>
            <p className="text-[#2C2C2C]">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMembershipPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <Badge className="bg-[#C9A96E] text-white mb-4">Join the Club</Badge>
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            Glow Club Membership
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Monthly experiences, priority booking, and exclusive members-only benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
          <Card className="bg-[#FAF6F1] border border-[#C4B49E] shadow-sm animate-section">
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2">The Luminosity Club</CardTitle>
              <div className="text-4xl font-bold text-[#C9A96E]">$149<span className="text-lg text-[#2C2C2C]">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> 1 facial per month</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> 10% off all add-ons</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> Priority booking access</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> Member-exclusive offers</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#D9B061] hover:bg-[#c49945] text-[#2C2C2C]">Join Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#5C4B3C] text-[#FAF6F1] border-0 shadow-xl animate-section relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#D9B061] text-[#2C2C2C]">Most Popular</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2 text-[#FAF6F1]">The Opulent Glow Club</CardTitle>
              <div className="text-4xl font-bold text-[#D9B061]">$249<span className="text-lg text-[#FAF6F1]/60">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D9B061]" /> 1 facial + 1 massage per month</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D9B061]" /> 15% off all add-ons</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D9B061]" /> Priority booking access</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D9B061]" /> Complimentary birthday upgrade</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D9B061]" /> Member-exclusive offers</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#FAF6F1] hover:bg-white text-[#5C4B3C] font-semibold">Join Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#FAF6F1] border border-[#C4B49E] shadow-sm animate-section">
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2">The Celebration Retreat Club</CardTitle>
              <div className="text-4xl font-bold text-[#C9A96E]">$449<span className="text-lg text-[#2C2C2C]">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> 2 services per month (any combination)</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> 20% off all add-ons</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> First-priority booking</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> Complimentary monthly add-on</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> Dedicated client concierge</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#C9A96E]" /> Member-exclusive offers</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#D9B061] hover:bg-[#c49945] text-[#2C2C2C]">Join Now</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#F2EDE6] rounded-lg p-12 animate-section">
          <h2 className="heading-display text-[#2C2C2C] text-2xl mb-8 text-center">Membership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-[#C9A96E]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Priority Booking</h3>
              <p className="text-[#2C2C2C] text-sm">Get first access to popular time slots and weekend appointments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#C9A96E]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Exclusive Discounts</h3>
              <p className="text-[#2C2C2C] text-sm">Save on all additional services and retail products.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-[#C9A96E]" size={24} />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">Special Perks</h3>
              <p className="text-[#2C2C2C] text-sm">Birthday upgrades, add-on credits, and seasonal surprises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGiftCardsPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <Badge className="bg-[#C9A96E] text-white mb-4">The Perfect Gift</Badge>
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            Give the Gift of Glow
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Digital gift cards delivered instantly. Valid on all services, never expires.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[50, 100, 200, 500].map((amount) => (
            <Card key={amount} className="bg-[#DDD3C5] border border-[#C4B49E] shadow-sm animate-section hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#C9A96E] mb-4">${amount}</div>
                <p className="text-[#5C4B3C] text-sm mb-6">
                  {amount === 50 && 'Perfect for a manicure or brow service'}
                  {amount === 100 && 'Great for a facial or massage'}
                  {amount === 200 && 'Ideal for a full spa experience'}
                  {amount === 500 && 'The ultimate luxury experience'}
                </p>
                <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#C9A96E] hover:bg-[#b8914f] text-white">
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#F2EDE6] rounded-lg p-12 animate-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-display text-[#2C2C2C] text-2xl mb-6">How Gift Cards Work</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#C9A96E] text-white flex items-center justify-center font-bold rounded-full">1</div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Choose Amount</h3>
                    <p className="text-[#2C2C2C] text-sm">Select from $50, $100, $200, or $500.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#C9A96E] text-white flex items-center justify-center font-bold rounded-full">2</div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Personalize</h3>
                    <p className="text-[#2C2C2C] text-sm">Add a custom message for the recipient.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#C9A96E] text-white flex items-center justify-center font-bold rounded-full">3</div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Instant Delivery</h3>
                    <p className="text-[#2C2C2C] text-sm">Gift card arrives via email immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/giftcard_gentle.jpg"
                alt="Gift card"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlogPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            From The Good Spa Journal
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Beauty tips, skincare advice, and wellness inspiration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '5 Skincare Tips for Glowing Skin',
              excerpt: 'Discover the secrets to radiant, healthy skin with these expert-backed tips.',
              category: 'Skincare',
              date: 'Jan 15, 2026'
            },
            {
              title: 'Bridal Beauty Timeline: When to Book',
              excerpt: 'Plan your perfect wedding beauty routine with our comprehensive timeline.',
              category: 'Bridal',
              date: 'Jan 10, 2026'
            },
            {
              title: 'The Benefits of Regular Massage',
              excerpt: 'Learn how monthly massages can improve your physical and mental wellbeing.',
              category: 'Wellness',
              date: 'Jan 5, 2026'
            },
            {
              title: 'The Art of the At-Home Facial',
              excerpt: 'What to expect when you book a professional facial at your door.',
              category: 'Facials',
              date: 'Dec 28, 2025'
            },
            {
              title: 'Nail Health: Beyond the Polish',
              excerpt: 'Tips for strong, healthy nails that look beautiful naturally.',
              category: 'Nails',
              date: 'Dec 20, 2025'
            },
            {
              title: 'Self-Care Rituals for Busy Professionals',
              excerpt: 'Simple ways to incorporate wellness into your hectic schedule.',
              category: 'Wellness',
              date: 'Dec 15, 2025'
            }
          ].map((post, index) => (
            <Card key={index} className="bg-[#FAF6F1] border border-[#C4B49E]/60 shadow-sm animate-section overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-[#DDD3C5] to-[#C4B49E]" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge style={{ backgroundColor: '#D9B061', color: '#2C2C2C' }}>{post.category}</Badge>
                  <span className="text-xs text-[#9E8C7A]">{post.date}</span>
                </div>
                <h3 className="font-semibold text-[#2C2C2C] text-lg mb-2">{post.title}</h3>
                <p className="text-[#7A6858] text-sm mb-4">{post.excerpt}</p>
                <button className="text-[#C9A96E] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ChevronRight size={14} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFAQPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#2C2C2C] text-lg">
            Everything you need to know about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="animate-section">
          <AccordionItem value="item-1" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">What areas do you service?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              We currently serve Toronto and the Greater Toronto Area, including Mississauga, Vaughan, Markham, and Scarborough. Travel fees may apply for locations outside downtown Toronto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">How do I prepare for my appointment?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              For facials, arrive with clean skin if possible. For massages, wear comfortable clothing. For makeup, bring reference photos if you have a specific look in mind. We'll bring everything else!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">What is your cancellation policy?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              We require 24 hours notice for cancellations. Cancellations within 24 hours may be subject to a 50% fee. No-shows will be charged the full service amount.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">Do you offer group bookings?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              Yes! We specialize in bridal parties, bachelorette spa days, and corporate events. Contact us for custom group packages and pricing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              We accept all major credit cards, debit, e-transfer, and cash. A deposit may be required for bookings over $200.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">Are your products cruelty-free?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              Absolutely. We exclusively use professional-grade, cruelty-free products that are gentle on your skin and the environment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-[#FAF6F1] mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#2C2C2C] font-semibold">How do I book an appointment?</AccordionTrigger>
            <AccordionContent className="text-[#2C2C2C]">
              You can book online through our website, call us at (647) 547-4498, or email hello@thegoodspa.ca. We typically confirm bookings within 2 hours during business hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-section">
            <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-6">
              Get in Touch
            </h1>
            <p className="text-[#2C2C2C] text-lg mb-8">
              We'd love to hear from you. Book an appointment or send us a message.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A96E]/10 rounded-full flex items-center justify-center">
                  <Phone className="text-[#C9A96E]" size={20} />
                </div>
                <div>
                  <p className="text-micro text-[#2C2C2C]">Phone</p>
                  <a href="tel:+16475474498" className="text-[#2C2C2C] font-medium hover:text-[#C9A96E]">(647) 547-4498</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A96E]/10 rounded-full flex items-center justify-center">
                  <Mail className="text-[#C9A96E]" size={20} />
                </div>
                <div>
                  <p className="text-micro text-[#2C2C2C]">Email</p>
                  <a href="mailto:hello@thegoodspa.ca" className="text-[#2C2C2C] font-medium hover:text-[#C9A96E]">hello@thegoodspa.ca</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A96E]/10 rounded-full flex items-center justify-center">
                  <Clock className="text-[#C9A96E]" size={20} />
                </div>
                <div>
                  <p className="text-micro text-[#2C2C2C]">Hours</p>
                  <p className="text-[#2C2C2C] font-medium">Mon-Sat: 9am - 8pm | Sun: 10am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#C9A96E] transition-colors">
                <Instagram className="text-white" size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-[#2C2C2C] rounded-full flex items-center justify-center hover:bg-[#C9A96E] transition-colors">
                <Facebook className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div className="animate-section">
            <form className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-micro text-[#2C2C2C] mb-2 block">Name</Label>
                  <Input placeholder="Your name" className="border-[#E5E5E5]" />
                </div>
                <div>
                  <Label className="text-micro text-[#2C2C2C] mb-2 block">Email</Label>
                  <Input placeholder="your@email.com" className="border-[#E5E5E5]" />
                </div>
              </div>
              <div>
                <Label className="text-micro text-[#2C2C2C] mb-2 block">Phone</Label>
                <Input placeholder="(416) 555-1234" className="border-[#E5E5E5]" />
              </div>
              <div>
                <Label className="text-micro text-[#2C2C2C] mb-2 block">Message</Label>
                <Textarea placeholder="How can we help you?" className="border-[#E5E5E5] min-h-[150px]" />
              </div>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#C9A96E] hover:bg-[#c49345] text-white py-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCorporatePage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <Badge className="bg-[#C9A96E] text-white mb-4">For Business</Badge>
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-4">
            Corporate & Events
          </h1>
          <p className="text-[#2C2C2C] text-lg max-w-2xl mx-auto">
            Bring wellness to your workplace or event. Custom packages for teams of any size.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-[#FAF6F1] border border-[#C9A96E] shadow-sm animate-section">
            <CardHeader>
              <Users className="text-[#C9A96E] mb-4" size={32} />
              <CardTitle>Corporate Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#2C2C2C] mb-6">On-site chair massages, express facials, and mindfulness sessions for your team.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Flexible scheduling</li>
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Volume discounts</li>
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Monthly packages</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#C9A96E] hover:bg-[#E8C4C4] text-[#2C2C2C]">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#FAF6F1] border border-[#C9A96E] shadow-sm animate-section">
            <CardHeader>
              <Heart className="text-[#C9A96E] mb-4" size={32} />
              <CardTitle>Bridal Parties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#2C2C2C] mb-6">Complete bridal beauty services for your special day. Makeup, nails, and more.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Bridal trial included</li>
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> On-location service</li>
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Group packages</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#C9A96E] hover:bg-[#E8C4C4] text-[#2C2C2C]">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#FAF6F1] border border-[#C9A96E] shadow-sm animate-section">
            <CardHeader>
              <Sparkles className="text-[#C9A96E] mb-4" size={32} />
              <CardTitle>Special Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#2C2C2C] mb-6">Pop-up spa experiences for product launches, conferences, and private parties.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Custom branding</li>
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Multiple stations</li>
                <li className="flex items-center gap-2 text-sm text-[#2C2C2C]"><Check size={14} className="text-[#C9A96E]" /> Full setup included</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#C9A96E] hover:bg-[#E8C4C4] text-[#2C2C2C]">Learn More</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#2C2C2C] rounded-lg p-12 text-white text-center animate-section">
          <h2 className="heading-display text-2xl mb-4">Ready to Plan Your Event?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact us for a custom quote tailored to your specific needs and group size.
          </p>
          <Button onClick={() => setShowBookingDialog(true)} className="bg-[#C9A96E] hover:bg-[#c49345] text-white px-8 py-4">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );

  const renderServiceAreaSection = () => (
    <section className="py-20 px-6 bg-[#F2EDE6]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-section">
          <h2 className="heading-display text-[#2C2C2C] text-[clamp(28px,4vw,44px)] mb-3">We Come to You</h2>
          <p className="text-[#7A6858] text-lg">Serving Toronto and the Greater Toronto Area</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-section">
          {[
            'Downtown Toronto', 'Yorkville', 'Forest Hill', 'Rosedale', 'The Annex',
            'Leslieville', 'Corktown', 'Liberty Village', 'King West', 'Queen West',
            'Etobicoke', 'North York', 'Scarborough', 'Mississauga', 'Vaughan',
            'Richmond Hill', 'Markham', 'Oakville', 'Burlington'
          ].map((neighbourhood) => (
            <span
              key={neighbourhood}
              className="bg-[#DDD3C5] text-[#7A6858] px-4 py-2 rounded-sm text-sm font-medium border border-[#DDD3C5] hover:border-[#D9B061] transition-colors cursor-default"
            >
              {neighbourhood}
            </span>
          ))}
        </div>
        <p className="text-center text-sm text-[#9E8C7A] animate-section">
          Available for hotel stays, Airbnb bookings, and private residences across the GTA. Travel fees may apply outside the Toronto core.
        </p>
      </div>
    </section>
  );

  const renderLegalPage = (title: string, content: string) => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FAF6F1]">
      <div className="max-w-3xl mx-auto">
        <div className="animate-section">
          <h1 className="heading-display text-[#2C2C2C] text-[clamp(36px,5vw,64px)] mb-8">
            {title}
          </h1>
          <div className="bg-[#FAF6F1] rounded-lg p-8 shadow-sm">
            <div className="prose prose-slate max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-[#2C2C2C] mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookingDialog = () => (
    <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader className="pb-2">
          <DialogTitle className="heading-display text-2xl text-[#2C2C2C]">Book Your Appointment</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border border-[#C9A96E]/40 flex items-center justify-center">
            <Calendar size={28} className="text-[#C9A96E]" />
          </div>
          <div>
            <p className="text-[#2C2C2C] text-base mb-1">Ready to treat yourself?</p>
            <p className="text-[#2C2C2C]/60 text-sm">Our booking calendar will open in a new tab so you can choose your service, date, and time.</p>
          </div>
          <a
            href="https://tidycal.com/thegoodspa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8914f] text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors rounded-sm w-full justify-center"
            onClick={() => setShowBookingDialog(false)}
          >
            Open Booking Calendar
            <ExternalLink size={15} />
          </a>
          <button
            onClick={() => setShowBookingDialog(false)}
            className="text-[#2C2C2C]/40 text-sm hover:text-[#2C2C2C] transition-colors"
          >
            Maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderFAQDialog = () => (
    <Dialog open={showFAQDialog} onOpenChange={setShowFAQDialog}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FAF6F0]">
        <DialogHeader>
          <DialogTitle className="heading-display text-[#2C2C2C] text-2xl md:text-3xl">
            Frequently Asked Questions
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="prepare" className="border border-[#C9A96E]/30 rounded-lg px-5 bg-white/60">
              <AccordionTrigger className="text-[#2C2C2C] font-semibold text-left hover:text-[#C9A96E] hover:no-underline py-5">
                What do I need to prepare for my mobile spa appointment?
              </AccordionTrigger>
              <AccordionContent className="text-[#2C2C2C]/80 text-sm leading-relaxed pb-5">
                <p className="mb-3">To ensure a seamless, luxurious experience, please prepare:</p>
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-2"><span className="text-[#C9A96E] mt-0.5">•</span>A clear space of 8 ft x 6 ft (massage table, equipment setup)</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A96E] mt-0.5">•</span>Access to one electrical outlet and a sink with hot water</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A96E] mt-0.5">•</span>Quiet environment (pets secured, children supervised)</li>
                </ul>
                <p>Our team arrives fully equipped to transform your space into a premium spa sanctuary.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="intake" className="border border-[#C9A96E]/30 rounded-lg px-5 bg-white/60">
              <AccordionTrigger className="text-[#2C2C2C] font-semibold text-left hover:text-[#C9A96E] hover:no-underline py-5">
                Do I need to complete an intake form?
              </AccordionTrigger>
              <AccordionContent className="text-[#2C2C2C]/80 text-sm leading-relaxed pb-5">
                Yes, all clients must complete our digital intake form (sent via email/SMS upon booking). This 2-minute form helps us customize your experience, note preferences, and ensure your safety. We cannot begin service without it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking" className="border border-[#C9A96E]/30 rounded-lg px-5 bg-white/60">
              <AccordionTrigger className="text-[#2C2C2C] font-semibold text-left hover:text-[#C9A96E] hover:no-underline py-5">
                How far in advance should I book?
              </AccordionTrigger>
              <AccordionContent className="text-[#2C2C2C]/80 text-sm leading-relaxed pb-5">
                We recommend 48+ hours for optimal availability, though same-day bookings may be available for VIP clients. Book via TidyCal below.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-[#C9A96E]/30 rounded-lg px-5 bg-white/60">
              <AccordionTrigger className="text-[#2C2C2C] font-semibold text-left hover:text-[#C9A96E] hover:no-underline py-5">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-[#2C2C2C]/80 text-sm leading-relaxed pb-5">
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-2"><span className="text-[#C9A96E] mt-0.5">•</span>24-hour notice required</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A96E] mt-0.5">•</span>Less than 24 hours: full service fee charged</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A96E] mt-0.5">•</span>No-shows: full fee + travel surcharge</li>
                </ul>
                <p>We understand life happens—contact us early to reschedule.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="insurance" className="border border-[#C9A96E]/30 rounded-lg px-5 bg-white/60">
              <AccordionTrigger className="text-[#2C2C2C] font-semibold text-left hover:text-[#C9A96E] hover:no-underline py-5">
                Do you provide insurance receipts?
              </AccordionTrigger>
              <AccordionContent className="text-[#2C2C2C]/80 text-sm leading-relaxed pb-5">
                Our services are luxury relaxation experiences by a medical aesthetician, not therapeutic experiences by an RMT. Receipts for insurance reimbursement are not provided.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 pt-6 border-t border-[#C9A96E]/20 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { setShowFAQDialog(false); setShowBookingDialog(true); }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C9A96E] text-[#2C2C2C] px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#E8C4C4] transition-all duration-300"
            >
              Book Your Appointment
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => { setShowFAQDialog(false); navigateToPage('faq'); }}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-[#C9A96E] text-[#2C2C2C] px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#C9A96E]/10 transition-all duration-300"
            >
              View All FAQs
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <div className="grain-overlay" />

      {renderNavigation()}

      <main>
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'services' && renderServicesPage()}
        {currentPage === 'portfolio' && renderPortfolioPage()}
        {currentPage === 'about' && renderAboutPage()}
        {currentPage === 'membership' && renderMembershipPage()}
        {currentPage === 'gift-cards' && renderGiftCardsPage()}
        {currentPage === 'blog' && renderBlogPage()}
        {currentPage === 'faq' && renderFAQPage()}
        {currentPage === 'contact' && renderContactPage()}
        {currentPage === 'corporate' && renderCorporatePage()}
        {currentPage === 'privacy' && renderLegalPage('Privacy Policy',
          "At The Good Spa, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information. We collect information you provide directly to us, including your name, email address, phone number, and address when you book appointments or contact us. We use this information to provide our services, communicate with you about appointments, and send promotional materials if you have opted in. We do not sell or share your personal information with third parties except as necessary to provide our services. We implement appropriate security measures to protect your personal information. You have the right to access, correct, or delete your personal information.")}
        {currentPage === 'terms' && renderLegalPage('Terms of Service',
          "By using The Good Spa services, you agree to these Terms of Service. Our services are provided on an as-is basis. We strive to provide excellent service but make no guarantees about specific results. Cancellations must be made at least 24 hours in advance. Late cancellations may be subject to fees. We reserve the right to refuse service to anyone for any reason. Payment is due at the time of service unless otherwise arranged. Gift cards are non-refundable and do not expire. We are not liable for any allergic reactions. Please inform us of any allergies or sensitivities before your appointment.")}
        {currentPage === 'accessibility' && renderLegalPage('Accessibility Statement',
          "The Good Spa is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards. We welcome your feedback on the accessibility of our website. We aim to conform to WCAG 2.1 Level AA standards. Our website is designed to be compatible with assistive technologies and major browsers. If you need assistance booking or have specific accessibility needs for your appointment, please contact us directly.")}
        {currentPage === 'admin' && <AdminBookings />}
      </main>

      {renderServiceAreaSection()}

      {renderFooter()}

      {renderBookingDialog()}

      {renderFAQDialog()}

      <button
        onClick={() => setShowBookingDialog(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#C9A96E] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#c49345] transition-colors z-40 md:hidden"
      >
        <Calendar size={24} />
      </button>
    </div>
  );
}

export default App;
