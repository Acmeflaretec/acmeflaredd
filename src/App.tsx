import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Rocket, Smartphone, BrainCircuit, Star, ShieldCheck, Users, LayoutTemplate, MessageSquare, Camera, Server, Cloud, ArrowRight, Building, Paintbrush, Briefcase, Shield, Globe, Clock, Zap, Award, TrendingUp, Puzzle } from 'lucide-react';
import { useWindowSize } from "./hooks/useWindowSize";
import logo from "../public/images/1e293b11.png"
import { useRef } from 'react';
import { useEffect } from 'react';
import FocusLight from './components/FocusLight';

function App() {
  const [width, height] = useWindowSize();
  const isMobile = width < 768;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced scroll animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const services = [
    { icon: <Code className="w-6 h-6"/>, title: 'Custom Web Design', description: 'Tailored digital experiences that convert', features: ['Responsive Design', 'SEO Optimized', 'CMS Integration'] },
    { icon: <BrainCircuit className="w-6 h-6"/>, title: 'AI Solutions', description: 'Smart automation & machine learning', features: ['Predictive Analytics', 'NLP Systems', 'Computer Vision'] },
    { icon: <Smartphone className="w-6 h-6"/>, title: 'Mobile Apps', description: 'Cross-platform native experiences', features: ['iOS & Android', 'React Native', 'Performance Optimization'] },
    { icon: <Paintbrush className="w-6 h-6"/>, title: 'UI/UX Design', description: 'User-centered interface design', features: ['Wireframing', 'Prototyping', 'User Testing'] },
    { icon: <Server className="w-6 h-6"/>, title: 'ERP/CRM Systems', description: 'Business process automation', features: ['Custom Workflows', 'Data Analytics', 'Cloud Integration'] },
    { icon: <Briefcase className="w-6 h-6"/>, title: 'Custom Software', description: 'Tailored business solutions', features: ['Scalable Architecture', 'API Integration', 'Maintenance'] }
  ];

  const features = [
    { icon: <ShieldCheck className="w-8 h-8"/>, title: 'Secure Architecture', description: 'Enterprise-grade security protocols' },
    { icon: <Rocket className="w-8 h-8"/>, title: 'Rapid Deployment', description: 'CI/CD pipelines for fast delivery' },
    { icon: <Users className="w-8 h-8"/>, title: 'Team Enablement', description: 'Collaborative development workflows' },
    { icon: <LayoutTemplate className="w-8 h-8"/>, title: 'Modular Design', description: 'Reusable component library' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/90 text-gray-100 font-poppins">
      {/* Animated Header */}
      <motion.header 
        className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-xl z-50 border-b border-purple-900/50 shadow-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3 hover:scale-105 transition-transform"
            whileHover={{ rotate: -5 }}
          >
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border-2 border-purple-500/30" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-poppins">
              Acmeflare Technologies
            </span>
          </motion.div>
          <nav className="hidden md:flex gap-6 items-center">
            {['Services', 'Case Studies', 'Contact'].map((item) => (
              <motion.button 
                key={item}
                className="relative px-4 py-2 text-sm font-medium group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-purple-100 group-hover:text-purple-400 transition-colors">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>
            ))}
            <motion.button 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-sm font-medium rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 hover:opacity-30 transition-opacity" />
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 md:py-0">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            rotate,
            scale: scaleBg,
            background: `
              linear-gradient(
                45deg,          
                rgba(168, 85, 247, 0.15) 0%,
                rgba(233, 74, 203, 0.3) 50%,
                rgba(79, 70, 229, 0.15) 100%
              )
            `
          }}
        />

        <motion.div
          style={{ opacity: opacityOverlay }}
          className="absolute inset-0 bg-gradient-to-b from-purple-500/15 via-transparent to-pink-500/10"
        />

        {/* Animated Particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 mb-6 md:gap-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
              whileHover={{ rotate: 15 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur-2xl rounded-full opacity-30 animate-pulse" />
              <div className="relative z-10 w-full h-full bg-gray-900/80 backdrop-blur-lg rounded-full flex items-center justify-center border-2 border-purple-400/30">
                <Building className="w-16 h-16 text-purple-400" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y: textY }}
          >
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Code-Driven
            </span>
            <span className="block mt-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mt-6 md:mt-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting immersive digital experiences that redefine industry standards
          </motion.p>

          <motion.div
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button 
              className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5" />
              <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
            </motion.button>
            
            <motion.button 
              className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-transparent border-2 border-purple-400/30 rounded-xl font-semibold hover:bg-purple-400/10 transition-all flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Case Studies</span>
              <Briefcase className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-purple-400/30 flex items-center justify-center"
          >
            <div className="w-2 h-3 bg-purple-400/50 rounded-full" />
          </motion.div>
          <span className="text-sm text-purple-300/80 tracking-wider font-poppins">
            Scroll to Discover
          </span>
        </motion.div>
      </section>

      {/* Interactive Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-20 font-poppins bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Digital Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="p-8 bg-gray-800/50 rounded-2xl border border-purple-900/50 backdrop-blur-xl hover:border-purple-400/50 transition-all group relative overflow-hidden"
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 mb-6 p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-poppins">{service.title}</h3>
                <p className="text-purple-200 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="text-purple-400">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20 bg-gray-900/80">
        <div className="overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 opacity-50">
                <div className="w-32 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl" />
                <div className="w-32 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl" />
                <div className="w-32 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-poppins">About Us</h2>
              <p className="text-purple-200 leading-relaxed">
                We are a team of passionate technologists dedicated to delivering cutting-edge solutions that transform businesses. With years of experience across various industries, we combine technical expertise with strategic thinking to help our clients achieve their goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Expert Team</h4>
                    <p className="text-gray-300">Certified professionals with diverse expertise</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Proven Track Record</h4>
                    <p className="text-gray-300">Successful projects across multiple industries</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gray-700/30 rounded-xl p-4 md:p-8 backdrop-blur-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '200+', label: 'Projects Completed' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="p-4 md:p-6 bg-gray-600/20 rounded-lg hover:bg-gray-600/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-purple-400">{stat.value}</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-poppins">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                className="p-8 bg-gray-800/50 rounded-2xl border border-purple-900/50 backdrop-blur-xl hover:border-purple-400/50 transition-all"
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 mb-6 p-4 bg-purple-500/10 rounded-lg text-purple-400 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center font-poppins">{feature.title}</h3>
                <p className="text-purple-200 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {[
            { title: 'Our Mission', content: 'Empower businesses through innovative technology solutions that drive growth and operational efficiency.' },
            { title: 'Our Vision', content: 'To be the preferred technology partner for enterprises seeking digital transformation and sustainable innovation.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="p-8 bg-gray-800/50 rounded-2xl border border-purple-900/50 backdrop-blur-xl"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-3xl font-bold mb-6 font-poppins">{item.title}</h3>
              <p className="text-purple-200 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-900/80">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-poppins">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <motion.div 
                key={i}
                className="p-8 bg-gray-800/50 rounded-2xl border border-purple-900/50 backdrop-blur-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
                  <div>
                    <h4 className="font-semibold">Client Name</h4>
                    <p className="text-sm text-purple-300">CEO, Company</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-purple-100">
                  "Acmeflare transformed our digital presence with their innovative solutions.
                  Their team delivered beyond our expectations."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-gray-900/80">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-poppins">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1,2,3].map((i) => (
              <motion.div 
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-purple-900/50 bg-gray-800/50 backdrop-blur-xl"
                whileHover={{ y: -5 }}
              >
                <div className="h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/30 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Zap className="w-8 h-8 text-purple-400" />
                    <h3 className="text-2xl font-semibold font-poppins">AI-Powered Retail Platform</h3>
                  </div>
                  <p className="text-purple-200 mb-6">
                    Developed custom machine learning models for inventory prediction
                    with 98% accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">AI/ML</span>
                    <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gray-900/80">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Clock className="w-12 h-12"/>, value: '1500+', label: 'Development Hours' },
            { icon: <Globe className="w-12 h-12"/>, value: '12+', label: 'Countries Served' },
            { icon: <Shield className="w-12 h-12"/>, value: '100%', label: 'Security Compliance' },
            { icon: <Award className="w-12 h-12"/>, value: '25+', label: 'Industry Awards' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="p-6 bg-gray-800/50 rounded-2xl backdrop-blur-xl border border-purple-900/50"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 mb-4 mx-auto text-purple-400">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-900/80">
        <div className="container mx-auto max-w-2xl">
          <div className="p-8 bg-gray-800/50 rounded-2xl backdrop-blur-xl border border-purple-900/50">
            <h2 className="text-4xl font-bold mb-8 text-center font-poppins">Start Your Project</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full p-3 bg-gray-700/30 rounded-lg border border-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 bg-gray-700/30 rounded-lg border border-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Project Details"
                className="w-full p-3 bg-gray-700/30 rounded-lg border border-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <motion.button 
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 hover:opacity-30 transition-opacity" />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 py-12 backdrop-blur-xl">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 opacity-70">
            © {new Date().getFullYear()} Acmeflare Technologies Pvt Ltd
          </div>
        </div>
      </footer>

      <FocusLight />
    </div>
  );
}

export default App;