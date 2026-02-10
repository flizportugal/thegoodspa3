import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, Phone, Calendar, Gift, Users, Star, 
  ChevronRight, Instagram, Facebook, Mail, MapPin,
  Clock, Check, ArrowRight, Sparkles, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const giftCardsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animation
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

    // Scroll animations for sections
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
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderNavigation = () => (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center bg-gradient-to-b from-[#F6F6F2]/80 to-transparent">
        <button 
          onClick={() => navigateToPage('home')} 
          className="text-micro text-[#111111] hover:text-[#D4A24F] transition-colors"
        >
          The Good Spa
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navigateToPage('services')} className="text-sm text-[#111111] gold-underline hover:text-[#D4A24F] transition-colors">Services</button>
          <button onClick={() => navigateToPage('portfolio')} className="text-sm text-[#111111] gold-underline hover:text-[#D4A24F] transition-colors">Portfolio</button>
          <button onClick={() => navigateToPage('about')} className="text-sm text-[#111111] gold-underline hover:text-[#D4A24F] transition-colors">About</button>
          <button onClick={() => navigateToPage('membership')} className="text-sm text-[#111111] gold-underline hover:text-[#D4A24F] transition-colors">Membership</button>
          <button onClick={() => navigateToPage('blog')} className="text-sm text-[#111111] gold-underline hover:text-[#D4A24F] transition-colors">Blog</button>
          <button onClick={() => navigateToPage('contact')} className="text-sm text-[#111111] gold-underline hover:text-[#D4A24F] transition-colors">Contact</button>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowBookingDialog(true)}
            className="text-sm text-[#111111] gold-underline hidden sm:block"
          >
            Book
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#111111]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F6F6F2] flex flex-col items-center justify-center gap-8">
          <button onClick={() => navigateToPage('home')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Home</button>
          <button onClick={() => navigateToPage('services')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Services</button>
          <button onClick={() => navigateToPage('portfolio')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Portfolio</button>
          <button onClick={() => navigateToPage('about')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">About</button>
          <button onClick={() => navigateToPage('membership')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Membership</button>
          <button onClick={() => navigateToPage('gift-cards')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Gift Cards</button>
          <button onClick={() => navigateToPage('blog')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Blog</button>
          <button onClick={() => navigateToPage('contact')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">Contact</button>
          <button onClick={() => navigateToPage('faq')} className="text-2xl font-semibold text-[#111111] hover:text-[#D4A24F]">FAQ</button>
        </div>
      )}
    </>
  );

  const renderFooter = () => (
    <footer className="bg-[#111111] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-micro text-white/60 mb-4">The Good Spa</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Luxury spa experiences delivered to your door. Professional facials, massage, makeup, nails, and hair—at home.
            </p>
          </div>
          <div>
            <h4 className="text-micro text-white/60 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-white/80 hover:text-[#D4A24F]">Facials</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-white/80 hover:text-[#D4A24F]">Massage</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-white/80 hover:text-[#D4A24F]">Makeup</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-white/80 hover:text-[#D4A24F]">Nails</button></li>
              <li><button onClick={() => navigateToPage('services')} className="text-sm text-white/80 hover:text-[#D4A24F]">Hair</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-micro text-white/60 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateToPage('about')} className="text-sm text-white/80 hover:text-[#D4A24F]">About Us</button></li>
              <li><button onClick={() => navigateToPage('membership')} className="text-sm text-white/80 hover:text-[#D4A24F]">Membership</button></li>
              <li><button onClick={() => navigateToPage('gift-cards')} className="text-sm text-white/80 hover:text-[#D4A24F]">Gift Cards</button></li>
              <li><button onClick={() => navigateToPage('corporate')} className="text-sm text-white/80 hover:text-[#D4A24F]">Corporate</button></li>
              <li><button onClick={() => navigateToPage('blog')} className="text-sm text-white/80 hover:text-[#D4A24F]">Blog</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-micro text-white/60 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone size={14} />
                <a href="tel:+14165551234" className="hover:text-[#D4A24F]">(416) 555-1234</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={14} />
                <a href="mailto:hello@thegoodspa.ca" className="hover:text-[#D4A24F]">hello@thegoodspa.ca</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <MapPin size={14} />
                Toronto, ON
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/60 hover:text-[#D4A24F]"><Instagram size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[#D4A24F]"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">© 2026 The Good Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => navigateToPage('privacy')} className="text-xs text-white/40 hover:text-white/80">Privacy Policy</button>
            <button onClick={() => navigateToPage('terms')} className="text-xs text-white/40 hover:text-white/80">Terms of Service</button>
            <button onClick={() => navigateToPage('accessibility')} className="text-xs text-white/40 hover:text-white/80">Accessibility</button>
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
            src="/images/hero_robe.jpg" 
            alt="Luxury spa experience" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <h1 className="hero-headline heading-display text-white text-[clamp(36px,5vw,72px)] mb-6 drop-shadow-lg">
              <span className="block">Luxury Spa</span>
              <span className="block">Experiences</span>
              <span className="block">Delivered</span>
            </h1>
            <p className="hero-subtext text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Professional facials, massage, makeup, nails, and hair—at home.
            </p>
            <button 
              onClick={() => setShowBookingDialog(true)}
              className="hero-cta inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
            >
              Book Your Appointment
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-6 text-micro text-white/70">Luxury mobile spa & beauty</div>
        <div className="absolute bottom-6 right-6 text-micro text-white/70 hidden md:block">Scroll</div>
      </section>

      {/* Section 2: Services Overview */}
      <section ref={servicesRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/services_towel.jpg" 
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
              <span className="block">Hair</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              One team. One booking. Real results.
            </p>
            <button 
              onClick={() => navigateToPage('services')}
              className="inline-flex items-center gap-2 text-white border-b border-[#D4A24F] pb-1 text-sm font-semibold uppercase tracking-wider hover:text-[#D4A24F] transition-colors"
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
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">60 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">The Signature</span>
              <span className="block">Facial</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Deep cleansing, gentle exfoliation, and hydration—customized to your skin.
            </p>
            <button 
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
            >
              Book a Facial
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Deep-Tissue Massage */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/massage_shoulders.jpg" 
            alt="Deep tissue massage" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">60-90 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Deep-Tissue</span>
              <span className="block">Massage</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Targeted pressure where you need it—neck, back, shoulders, legs.
            </p>
            <button 
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
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
            src="/images/makeup_bold.jpg" 
            alt="Makeup artistry" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">45-75 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Makeup</span>
              <span className="block">Artistry</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Bridal, editorial, or a night out—flawless skin, defined eyes, long wear.
            </p>
            <button 
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
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
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">45-60 MIN</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Nail</span>
              <span className="block">Services</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Manicures & pedicures with cuticle care, shaping, and long-lasting polish.
            </p>
            <button 
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
            >
              Book Nails
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 7: Hair Extensions */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hair_flowing.jpg" 
            alt="Hair extensions" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">Consult Required</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Hair</span>
              <span className="block">Extensions</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Add length and volume with a seamless, comfortable fit.
            </p>
            <button 
              onClick={() => setShowBookingDialog(true)}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
            >
              Book Hair
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 8: How It Works */}
      <section ref={howItWorksRef} className="py-24 px-6 bg-[#F6F6F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-section">
              <img 
                src="/images/howitworks_robe.jpg" 
                alt="How it works" 
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
            <div className="animate-section">
              <h2 className="heading-display text-[#111111] text-[clamp(32px,4vw,48px)] mb-6">
                How It Works
              </h2>
              <p className="text-[#6F6F6F] text-lg mb-12">
                We bring the spa to you—clean setup, professional products, and a calm experience from start to finish.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F] text-white flex items-center justify-center text-lg font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-lg mb-2">Book Online</h3>
                    <p className="text-[#6F6F6F]">Choose your services, date, and location.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F] text-white flex items-center justify-center text-lg font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-lg mb-2">We Confirm</h3>
                    <p className="text-[#6F6F6F]">You'll get a text or email with your appointment details.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A24F] text-white flex items-center justify-center text-lg font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-lg mb-2">Enjoy at Home</h3>
                    <p className="text-[#6F6F6F]">We arrive, set up, and deliver real results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Membership */}
      <section ref={membershipRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/membership_smile.jpg" 
            alt="Glow Club Membership" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[4vw]">
          <div className="md:ml-auto md:w-[40vw] md:mr-[4vw]">
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">From $89/Mo</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Glow Club</span>
              <span className="block">Membership</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Monthly treatments, priority booking, and members-only pricing.
            </p>
            <button 
              onClick={() => navigateToPage('membership')}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
            >
              Join the Club
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 10: Testimonials */}
      <section ref={testimonialsRef} className="py-24 px-6 bg-[#F6F6F2]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section mb-12">
            <h2 className="heading-display text-[#111111] text-[clamp(32px,4vw,48px)] mb-4">
              Loved by Clients
            </h2>
            <p className="text-[#6F6F6F] text-lg">Real experiences from real clients.</p>
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
                service: 'Deep-Tissue Massage',
                quote: 'I have chronic back pain and this massage provided so much relief. The therapist was professional and skilled.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="animate-section bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#D4A24F] text-[#D4A24F]" />
                    ))}
                  </div>
                  <p className="text-[#111111] mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#111111]">{testimonial.name}</span>
                    <Badge variant="outline" className="text-[#6F6F6F]">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Portfolio */}
      <section ref={portfolioRef} className="py-24 px-6 bg-[#F6F6F2]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section mb-12">
            <h2 className="heading-display text-[#111111] text-[clamp(32px,4vw,48px)] mb-4">
              Transformations
            </h2>
            <p className="text-[#6F6F6F] text-lg">Real clients. Real results.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-section">
              <img 
                src="/images/beforeafter_facial.jpg" 
                alt="Facial transformation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-sm text-[#6F6F6F]">Signature Facial Results</p>
            </div>
            <div className="animate-section">
              <img 
                src="/images/beforeafter_makeup.jpg" 
                alt="Makeup transformation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-sm text-[#6F6F6F]">Makeup Artistry</p>
            </div>
            <div className="animate-section">
              <img 
                src="/images/beforeafter_hair.jpg" 
                alt="Hair transformation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-sm text-[#6F6F6F]">Hair Extensions</p>
            </div>
            <div className="animate-section flex items-center justify-center bg-white rounded-lg shadow-lg p-12">
              <button 
                onClick={() => navigateToPage('portfolio')}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#D4A24F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <p className="font-semibold text-[#111111]">View Full Portfolio</p>
                <p className="text-sm text-[#6F6F6F]">See more transformations</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Gift Cards */}
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
            <Badge className="mb-4 bg-[#D4A24F] text-white hover:bg-[#D4A24F]">$50 - $500</Badge>
            <h2 className="heading-display text-white text-[clamp(32px,4vw,56px)] mb-6 drop-shadow-lg">
              <span className="block">Give The</span>
              <span className="block">Gift of Glow</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md drop-shadow">
              Digital gift cards delivered instantly. Valid on all services.
            </p>
            <button 
              onClick={() => navigateToPage('gift-cards')}
              className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#D4A24F] hover:text-white transition-all duration-300"
            >
              Buy a Gift Card
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 13: Contact */}
      <section ref={contactRef} className="bg-[#111111] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-section">
              <h2 className="heading-display text-white text-[clamp(32px,4vw,48px)] mb-6">
                Ready When You Are.
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Book online or send a note. We'll confirm within 2 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-micro text-white/60 mb-2 block">Name</Label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-micro text-white/60 mb-2 block">Email</Label>
                    <Input 
                      placeholder="your@email.com" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-micro text-white/60 mb-2 block">Phone</Label>
                  <Input 
                    placeholder="(416) 555-1234" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <Label className="text-micro text-white/60 mb-2 block">Message</Label>
                  <Textarea 
                    placeholder="Tell us about your desired services..." 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                  />
                </div>
                <Button 
                  onClick={() => setShowBookingDialog(true)}
                  className="bg-[#D4A24F] hover:bg-[#c49345] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider w-full md:w-auto"
                >
                  Request a Booking
                </Button>
              </form>
            </div>
            
            <div className="animate-section hidden md:block">
              <img 
                src="/images/contact_close.jpg" 
                alt="Contact" 
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Additional page components will be rendered here
  const renderServicesPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            Our Services
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Luxury spa treatments delivered to your door. All services include professional products and a calm, relaxing experience.
          </p>
        </div>

        <Tabs defaultValue="facials" className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-white p-2 rounded-lg overflow-x-auto">
            <TabsTrigger value="facials" className="data-[state=active]:bg-[#D4A24F] data-[state=active]:text-white">Facials</TabsTrigger>
            <TabsTrigger value="massage" className="data-[state=active]:bg-[#D4A24F] data-[state=active]:text-white">Massage</TabsTrigger>
            <TabsTrigger value="makeup" className="data-[state=active]:bg-[#D4A24F] data-[state=active]:text-white">Makeup</TabsTrigger>
            <TabsTrigger value="nails" className="data-[state=active]:bg-[#D4A24F] data-[state=active]:text-white">Nails</TabsTrigger>
            <TabsTrigger value="hair" className="data-[state=active]:bg-[#D4A24F] data-[state=active]:text-white">Hair</TabsTrigger>
          </TabsList>

          <TabsContent value="facials" className="animate-section">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">The Signature Facial</CardTitle>
                      <CardDescription>Our most popular treatment</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">60 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Deep cleansing, gentle exfoliation, and hydration customized to your skin type. Includes steam, extractions, and a relaxing face massage.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$149</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Anti-Aging Facial</CardTitle>
                      <CardDescription>Turn back time</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">75 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Advanced treatment with peptide serums, LED therapy, and collagen-boosting massage to reduce fine lines and restore youthful glow.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$199</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Acne Treatment Facial</CardTitle>
                      <CardDescription>Clear, calm skin</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">60 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Deep pore cleansing with salicylic acid treatment, high-frequency therapy, and calming mask to reduce inflammation and prevent breakouts.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$159</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">HydraGlow Facial</CardTitle>
                      <CardDescription>Ultimate hydration</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">75 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Oxygen infusion with hyaluronic acid serums for plump, dewy skin. Perfect before special events or for severely dehydrated skin.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$229</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="massage" className="animate-section">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Deep-Tissue Massage</CardTitle>
                      <CardDescription>Targeted relief</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">60-90 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Firm pressure to release chronic muscle tension. Focus on neck, back, shoulders, and any problem areas.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$139 - $189</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Swedish Relaxation</CardTitle>
                      <CardDescription>Total relaxation</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">60-90 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Long, flowing strokes to promote relaxation, improve circulation, and reduce stress. Aromatherapy included.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$119 - $169</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="makeup" className="animate-section">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Bridal Makeup</CardTitle>
                      <CardDescription>Your perfect day</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">90 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Flawless, long-lasting makeup for your wedding day. Includes trial session and day-of touch-up kit.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$299</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Event Makeup</CardTitle>
                      <CardDescription>Glam for any occasion</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">60 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Full-face makeup for galas, parties, photoshoots, or any special event. Customized to your style.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$149</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="nails" className="animate-section">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Luxury Manicure</CardTitle>
                      <CardDescription>Perfect hands</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">45 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Cuticle care, shaping, hand massage, and long-lasting polish or gel. Includes nourishing hand mask.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$59</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Spa Pedicure</CardTitle>
                      <CardDescription>Pampered feet</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">60 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Exfoliating scrub, callus treatment, foot massage, and polish. Includes hot towel wrap and moisturizing mask.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$79</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hair" className="animate-section">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Hair Extensions</CardTitle>
                      <CardDescription>Length & volume</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">Consult Required</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Premium tape-in or keratin bond extensions for seamless, natural-looking length and volume. Consultation required.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">From $399</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Consult</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">Blowout & Styling</CardTitle>
                      <CardDescription>Salon-perfect hair</CardDescription>
                    </div>
                    <Badge className="bg-[#D4A24F]">45 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4">Professional wash, blow-dry, and styling. Choose from sleek and smooth, voluminous waves, or bouncy curls.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#111111]">$69</span>
                    <Button onClick={() => setShowBookingDialog(true)} className="bg-[#111111] hover:bg-[#D4A24F] text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  const renderPortfolioPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            Transformations
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Real clients, real results. See the difference our luxury mobile spa services can make.
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
              <h3 className="font-semibold text-[#111111]">Signature Facial</h3>
              <p className="text-[#6F6F6F] text-sm">Client: Emily R. | After 1 session</p>
            </div>
          </div>
          <div className="animate-section">
            <img 
              src="/images/beforeafter_makeup.jpg" 
              alt="Makeup transformation" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#111111]">Bridal Makeup</h3>
              <p className="text-[#6F6F6F] text-sm">Client: Jessica M. | Wedding day glam</p>
            </div>
          </div>
          <div className="animate-section">
            <img 
              src="/images/beforeafter_hair.jpg" 
              alt="Hair transformation" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#111111]">Hair Extensions</h3>
              <p className="text-[#6F6F6F] text-sm">Client: Amanda K. | Tape-in extensions</p>
            </div>
          </div>
          <div className="animate-section">
            <img 
              src="/images/facial_closeup.jpg" 
              alt="Skin transformation" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-[#111111]">Anti-Aging Treatment</h3>
              <p className="text-[#6F6F6F] text-sm">Client: Sarah L. | After 3 sessions</p>
            </div>
          </div>
        </div>

        <div className="text-center animate-section">
          <p className="text-[#6F6F6F] mb-6">Ready for your own transformation?</p>
          <Button 
            onClick={() => setShowBookingDialog(true)}
            className="bg-[#D4A24F] hover:bg-[#c49345] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            About Us
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Two friends, one vision: bringing luxury spa experiences to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="animate-section">
            <img 
              src="/images/partner1.jpg" 
              alt="Sarah Chen" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-[#111111] mb-2">Sarah Chen</h3>
            <p className="text-[#D4A24F] font-medium mb-4">Co-Founder & Lead Esthetician</p>
            <p className="text-[#6F6F6F] leading-relaxed mb-4">
              With over 12 years of experience in luxury spa treatments, Sarah brings her expertise in advanced skincare and facial techniques to every appointment. Certified in medical esthetics and trained in Paris.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Licensed Esthetician</Badge>
              <Badge variant="outline">Certified Medical Aesthetician</Badge>
              <Badge variant="outline">LED Therapy Certified</Badge>
            </div>
          </div>

          <div className="animate-section">
            <img 
              src="/images/partner2.jpg" 
              alt="Maya Rodriguez" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-[#111111] mb-2">Maya Rodriguez</h3>
            <p className="text-[#D4A24F] font-medium mb-4">Co-Founder & Creative Director</p>
            <p className="text-[#6F6F6F] leading-relaxed mb-4">
              Maya's passion for beauty artistry shines through in every makeup application and hair styling session. Former lead artist at a top Toronto salon, she specializes in bridal and editorial looks.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Licensed Cosmetologist</Badge>
              <Badge variant="outline">Bridal Specialist</Badge>
              <Badge variant="outline">Hair Extension Certified</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-12 animate-section">
          <h2 className="heading-display text-[#111111] text-2xl mb-6 text-center">Our Story</h2>
          <p className="text-[#6F6F6F] leading-relaxed max-w-3xl mx-auto text-center">
            The Good Spa was born from a simple idea: everyone deserves access to luxury spa treatments without the hassle of leaving home. After years working in high-end spas, we saw how many clients struggled to find time for self-care. In 2019, we decided to change that. Today, we're proud to bring the spa experience to hundreds of homes across Toronto, helping our clients look and feel their best.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#D4A24F] mb-2">5+</div>
            <p className="text-[#6F6F6F]">Years of Service</p>
          </div>
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#D4A24F] mb-2">5000+</div>
            <p className="text-[#6F6F6F]">Happy Clients</p>
          </div>
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#D4A24F] mb-2">15+</div>
            <p className="text-[#6F6F6F]">Services Offered</p>
          </div>
          <div className="text-center animate-section">
            <div className="text-4xl font-bold text-[#D4A24F] mb-2">4.9</div>
            <p className="text-[#6F6F6F]">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMembershipPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <Badge className="bg-[#D4A24F] text-white mb-4">Join the Club</Badge>
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            Glow Club Membership
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Monthly treatments, priority booking, and exclusive members-only benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-sm animate-section">
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2">Glow Starter</CardTitle>
              <div className="text-4xl font-bold text-[#D4A24F]">$89<span className="text-lg text-[#6F6F6F]">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> 1 Signature Facial monthly</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> 10% off additional services</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> Priority booking</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> Birthday bonus treatment</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#111111] hover:bg-[#D4A24F] text-white">Join Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] text-white border-0 shadow-lg animate-section relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#D4A24F]">Most Popular</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2">Glow Pro</CardTitle>
              <div className="text-4xl font-bold text-[#D4A24F]">$159<span className="text-lg text-white/60">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> 2 Treatments monthly</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> 15% off additional services</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> VIP priority booking</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> Free add-ons</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> Guest passes (2/year)</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#D4A24F] hover:bg-[#c49345] text-white">Join Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm animate-section">
            <CardHeader className="text-center">
              <CardTitle className="text-xl mb-2">Glow Elite</CardTitle>
              <div className="text-4xl font-bold text-[#D4A24F]">$299<span className="text-lg text-[#6F6F6F]">/mo</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> 4 Treatments monthly</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> 20% off additional services</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> On-demand booking</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> All add-ons included</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> Unlimited guest passes</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[#D4A24F]" /> Quarterly gift box</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#111111] hover:bg-[#D4A24F] text-white">Join Now</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-12 animate-section">
          <h2 className="heading-display text-[#111111] text-2xl mb-8 text-center">Membership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A24F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-[#D4A24F]" size={24} />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">Priority Booking</h3>
              <p className="text-[#6F6F6F] text-sm">Get first access to popular time slots and weekend appointments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A24F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#D4A24F]" size={24} />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">Exclusive Discounts</h3>
              <p className="text-[#6F6F6F] text-sm">Save on all additional services and retail products.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A24F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-[#D4A24F]" size={24} />
              </div>
              <h3 className="font-semibold text-[#111111] mb-2">Special Perks</h3>
              <p className="text-[#6F6F6F] text-sm">Birthday bonuses, guest passes, and seasonal surprises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGiftCardsPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <Badge className="bg-[#D4A24F] text-white mb-4">The Perfect Gift</Badge>
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            Give the Gift of Glow
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Digital gift cards delivered instantly. Valid on all services, never expires.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[50, 100, 200, 500].map((amount) => (
            <Card key={amount} className="bg-white border-0 shadow-sm animate-section hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#D4A24F] mb-4">${amount}</div>
                <p className="text-[#6F6F6F] text-sm mb-6">
                  {amount === 50 && 'Perfect for a manicure or brow service'}
                  {amount === 100 && 'Great for a facial or massage'}
                  {amount === 200 && 'Ideal for a full spa day'}
                  {amount === 500 && 'The ultimate luxury experience'}
                </p>
                <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#111111] hover:bg-[#D4A24F] text-white">
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-12 animate-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-display text-[#111111] text-2xl mb-6">How Gift Cards Work</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#D4A24F] text-white flex items-center justify-center font-bold rounded-full">1</div>
                  <div>
                    <h3 className="font-semibold text-[#111111]">Choose Amount</h3>
                    <p className="text-[#6F6F6F] text-sm">Select from $50, $100, $200, or $500.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#D4A24F] text-white flex items-center justify-center font-bold rounded-full">2</div>
                  <div>
                    <h3 className="font-semibold text-[#111111]">Personalize</h3>
                    <p className="text-[#6F6F6F] text-sm">Add a custom message for the recipient.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#D4A24F] text-white flex items-center justify-center font-bold rounded-full">3</div>
                  <div>
                    <h3 className="font-semibold text-[#111111]">Instant Delivery</h3>
                    <p className="text-[#6F6F6F] text-sm">Gift card arrives via email immediately.</p>
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
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            The Good Blog
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Beauty tips, skincare advice, and wellness inspiration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '5 Skincare Tips for Glowing Skin',
              excerpt: 'Discover the secrets to radiant, healthy skin with these expert-backed tips.',
              image: '/images/facial_closeup.jpg',
              category: 'Skincare',
              date: 'Jan 15, 2026'
            },
            {
              title: 'Bridal Beauty Timeline: When to Book',
              excerpt: 'Plan your perfect wedding beauty routine with our comprehensive timeline.',
              image: '/images/makeup_bold.jpg',
              category: 'Bridal',
              date: 'Jan 10, 2026'
            },
            {
              title: 'The Benefits of Regular Massage',
              excerpt: 'Learn how monthly massages can improve your physical and mental wellbeing.',
              image: '/images/massage_shoulders.jpg',
              category: 'Wellness',
              date: 'Jan 5, 2026'
            },
            {
              title: 'Hair Extension Care Guide',
              excerpt: 'Everything you need to know about maintaining your beautiful extensions.',
              image: '/images/hair_flowing.jpg',
              category: 'Hair',
              date: 'Dec 28, 2025'
            },
            {
              title: 'Nail Health: Beyond the Polish',
              excerpt: 'Tips for strong, healthy nails that look beautiful naturally.',
              image: '/images/nails_hands.jpg',
              category: 'Nails',
              date: 'Dec 20, 2025'
            },
            {
              title: 'Self-Care Rituals for Busy Professionals',
              excerpt: 'Simple ways to incorporate wellness into your hectic schedule.',
              image: '/images/howitworks_robe.jpg',
              category: 'Wellness',
              date: 'Dec 15, 2025'
            }
          ].map((post, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm animate-section overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-[#D4A24F] border-[#D4A24F]">{post.category}</Badge>
                  <span className="text-xs text-[#6F6F6F]">{post.date}</span>
                </div>
                <h3 className="font-semibold text-[#111111] text-lg mb-2">{post.title}</h3>
                <p className="text-[#6F6F6F] text-sm mb-4">{post.excerpt}</p>
                <button className="text-[#D4A24F] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
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
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#6F6F6F] text-lg">
            Everything you need to know about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="animate-section">
          <AccordionItem value="item-1" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">What areas do you service?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              We currently serve Toronto and the Greater Toronto Area, including Mississauga, Vaughan, Markham, and Scarborough. Travel fees may apply for locations outside downtown Toronto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">How do I prepare for my appointment?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              For facials, arrive with clean skin if possible. For massages, wear comfortable clothing. For makeup, bring reference photos if you have a specific look in mind. We'll bring everything else!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">What is your cancellation policy?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              We require 24 hours notice for cancellations. Cancellations within 24 hours may be subject to a 50% fee. No-shows will be charged the full service amount.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">Do you offer group bookings?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              Yes! We specialize in bridal parties, bachelorette spa days, and corporate events. Contact us for custom group packages and pricing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              We accept all major credit cards, debit, e-transfer, and cash. A deposit may be required for bookings over $200.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">Are your products cruelty-free?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              Absolutely. We exclusively use professional-grade, cruelty-free products that are gentle on your skin and the environment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-white mb-4 rounded-lg px-6">
            <AccordionTrigger className="text-[#111111] font-semibold">How do I book an appointment?</AccordionTrigger>
            <AccordionContent className="text-[#6F6F6F]">
              You can book online through our website, call us at (416) 555-1234, or email hello@thegoodspa.ca. We typically confirm bookings within 2 hours during business hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-section">
            <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-6">
              Get in Touch
            </h1>
            <p className="text-[#6F6F6F] text-lg mb-8">
              We'd love to hear from you. Book an appointment or send us a message.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                  <Phone className="text-[#D4A24F]" size={20} />
                </div>
                <div>
                  <p className="text-micro text-[#6F6F6F]">Phone</p>
                  <a href="tel:+14165551234" className="text-[#111111] font-medium hover:text-[#D4A24F]">(416) 555-1234</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                  <Mail className="text-[#D4A24F]" size={20} />
                </div>
                <div>
                  <p className="text-micro text-[#6F6F6F]">Email</p>
                  <a href="mailto:hello@thegoodspa.ca" className="text-[#111111] font-medium hover:text-[#D4A24F]">hello@thegoodspa.ca</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4A24F]/10 rounded-full flex items-center justify-center">
                  <Clock className="text-[#D4A24F]" size={20} />
                </div>
                <div>
                  <p className="text-micro text-[#6F6F6F]">Hours</p>
                  <p className="text-[#111111] font-medium">Mon-Sat: 9am - 8pm | Sun: 10am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center hover:bg-[#D4A24F] transition-colors">
                <Instagram className="text-white" size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center hover:bg-[#D4A24F] transition-colors">
                <Facebook className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div className="animate-section">
            <form className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-micro text-[#6F6F6F] mb-2 block">Name</Label>
                  <Input placeholder="Your name" className="border-[#E5E5E5]" />
                </div>
                <div>
                  <Label className="text-micro text-[#6F6F6F] mb-2 block">Email</Label>
                  <Input placeholder="your@email.com" className="border-[#E5E5E5]" />
                </div>
              </div>
              <div>
                <Label className="text-micro text-[#6F6F6F] mb-2 block">Phone</Label>
                <Input placeholder="(416) 555-1234" className="border-[#E5E5E5]" />
              </div>
              <div>
                <Label className="text-micro text-[#6F6F6F] mb-2 block">Message</Label>
                <Textarea placeholder="How can we help you?" className="border-[#E5E5E5] min-h-[150px]" />
              </div>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#D4A24F] hover:bg-[#c49345] text-white py-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCorporatePage = () => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section">
          <Badge className="bg-[#D4A24F] text-white mb-4">For Business</Badge>
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-4">
            Corporate & Events
          </h1>
          <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
            Bring wellness to your workplace or event. Custom packages for teams of any size.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-sm animate-section">
            <CardHeader>
              <Users className="text-[#D4A24F] mb-4" size={32} />
              <CardTitle>Corporate Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#6F6F6F] mb-6">On-site chair massages, express facials, and mindfulness sessions for your team.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Flexible scheduling</li>
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Volume discounts</li>
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Monthly packages</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#111111] hover:bg-[#D4A24F] text-white">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm animate-section">
            <CardHeader>
              <Heart className="text-[#D4A24F] mb-4" size={32} />
              <CardTitle>Bridal Parties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#6F6F6F] mb-6">Complete bridal beauty services for your special day. Hair, makeup, nails, and more.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Bridal trial included</li>
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> On-location service</li>
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Group packages</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#111111] hover:bg-[#D4A24F] text-white">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm animate-section">
            <CardHeader>
              <Sparkles className="text-[#D4A24F] mb-4" size={32} />
              <CardTitle>Special Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#6F6F6F] mb-6">Pop-up spa experiences for product launches, conferences, and private parties.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Custom branding</li>
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Multiple stations</li>
                <li className="flex items-center gap-2 text-sm text-[#6F6F6F]"><Check size={14} className="text-[#D4A24F]" /> Full setup included</li>
              </ul>
              <Button onClick={() => setShowBookingDialog(true)} className="w-full bg-[#111111] hover:bg-[#D4A24F] text-white">Learn More</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#111111] rounded-lg p-12 text-white text-center animate-section">
          <h2 className="heading-display text-2xl mb-4">Ready to Plan Your Event?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact us for a custom quote tailored to your specific needs and group size.
          </p>
          <Button onClick={() => setShowBookingDialog(true)} className="bg-[#D4A24F] hover:bg-[#c49345] text-white px-8 py-4">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );

  const renderLegalPage = (title: string, content: string) => (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#F6F6F2]">
      <div className="max-w-3xl mx-auto">
        <div className="animate-section">
          <h1 className="heading-display text-[#111111] text-[clamp(36px,5vw,64px)] mb-8">
            {title}
          </h1>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="prose prose-slate max-w-none">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-[#6F6F6F] mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Booking Dialog
  const renderBookingDialog = () => (
    <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="heading-display text-2xl">Book Your Appointment</DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-4">
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Select Service</Label>
            <select className="w-full border border-[#E5E5E5] rounded-md p-2">
              <option>Signature Facial - $149</option>
              <option>Anti-Aging Facial - $199</option>
              <option>Deep-Tissue Massage - $139</option>
              <option>Swedish Massage - $119</option>
              <option>Bridal Makeup - $299</option>
              <option>Event Makeup - $149</option>
              <option>Luxury Manicure - $59</option>
              <option>Spa Pedicure - $79</option>
              <option>Hair Extensions - Consult</option>
            </select>
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Preferred Date</Label>
            <Input type="date" className="border-[#E5E5E5]" />
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Preferred Time</Label>
            <select className="w-full border border-[#E5E5E5] rounded-md p-2">
              <option>Morning (9am - 12pm)</option>
              <option>Afternoon (12pm - 5pm)</option>
              <option>Evening (5pm - 8pm)</option>
            </select>
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Name</Label>
            <Input placeholder="Your full name" className="border-[#E5E5E5]" />
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Email</Label>
            <Input placeholder="your@email.com" className="border-[#E5E5E5]" />
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Phone</Label>
            <Input placeholder="(416) 555-1234" className="border-[#E5E5E5]" />
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Address</Label>
            <Textarea placeholder="Your address for the appointment" className="border-[#E5E5E5]" />
          </div>
          <div>
            <Label className="text-micro text-[#6F6F6F] mb-2 block">Special Requests</Label>
            <Textarea placeholder="Any allergies or special requests" className="border-[#E5E5E5]" />
          </div>
          <Button 
            type="button"
            onClick={() => {
              setShowBookingDialog(false);
              alert('Thank you! Your booking request has been submitted. We will confirm within 2 hours.');
            }}
            className="w-full bg-[#D4A24F] hover:bg-[#c49345] text-white py-4"
          >
            Request Booking
          </Button>
          <p className="text-xs text-[#6F6F6F] text-center">
            We will confirm your appointment within 2 hours. A deposit may be required.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );

  // Main render
  return (
    <div className="min-h-screen bg-[#F6F6F2]">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      {renderNavigation()}
      
      {/* Page Content */}
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
      </main>
      
      {/* Footer */}
      {renderFooter()}
      
      {/* Booking Dialog */}
      {renderBookingDialog()}
      
      {/* Floating CTA Button (Mobile) */}
      <button 
        onClick={() => setShowBookingDialog(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#D4A24F] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#c49345] transition-colors z-40 md:hidden"
      >
        <Calendar size={24} />
      </button>
    </div>
  );
}

export default App;
