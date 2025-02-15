import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Rocket, Smartphone, BrainCircuit, Star, ShieldCheck, Users, LayoutTemplate, MessageSquare, Camera, Server, Cloud, ArrowRight, Building, Paintbrush, Briefcase, Shield, Globe, Clock, Zap, Award, TrendingUp, Puzzle } from 'lucide-react';
import { useWindowSize } from "./hooks/useWindowSize";
import logo from "./public/images/1e293b11.png"

function App() {
  const [width, height] = useWindowSize();
  const isMobile = width < 768;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"]
  });

  // Scroll-based animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Updated services array without 3D models
  const services = [
    { icon: <Code />, title: 'Custom Web Design', description: 'Tailored digital experiences that convert', features: ['Responsive Design', 'SEO Optimized', 'CMS Integration'] },
    { icon: <BrainCircuit />, title: 'AI Solutions', description: 'Smart automation & machine learning', features: ['Predictive Analytics', 'NLP Systems', 'Computer Vision'] },
    { icon: <Smartphone />, title: 'Mobile Apps', description: 'Cross-platform native experiences', features: ['iOS & Android', 'React Native', 'Performance Optimization'] },
    { icon: <Paintbrush />, title: 'UI/UX Design', description: 'User-centered interface design', features: ['Wireframing', 'Prototyping', 'User Testing'] },
    { icon: <Server />, title: 'ERP/CRM Systems', description: 'Business process automation', features: ['Custom Workflows', 'Data Analytics', 'Cloud Integration'] },
    { icon: <Briefcase />, title: 'Custom Software', description: 'Tailored business solutions', features: ['Scalable Architecture', 'API Integration', 'Maintenance'] }
  ];

  const features = [
    { icon: <ShieldCheck />, title: 'Secure Architecture', description: 'Enterprise-grade security protocols' },
    { icon: <Rocket />, title: 'Rapid Deployment', description: 'CI/CD pipelines for fast delivery' },
    { icon: <Users />, title: 'Team Enablement', description: 'Collaborative development workflows' },
    { icon: <LayoutTemplate />, title: 'Modular Design', description: 'Reusable component library' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100">
      {/* Fixed Header */}
      <motion.header 
        className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg z-50 border-b border-slate-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Acmeflare Technologies
            </span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <button className="relative px-3 py-2 text-sm font-medium hover:text-cyan-400 transition-colors group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
            </button>
            <button className="relative px-3 py-2 text-sm font-medium hover:text-cyan-400 transition-colors group">
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
            </button>
            <button className="relative px-3 py-2 text-sm font-medium hover:text-cyan-400 transition-colors group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
            </button>
            <button className="ml-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
              Get Started
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Dynamic Background */}
        <motion.div 
          className="absolute inset-0 z-0 "          
          style={{
            rotate,
            scale: scaleBg,
            background: `
              linear-gradient(
                45deg,          
                rgba(6, 182, 212, 0.1) 0%,
                rgba(59, 130, 246, 0.2) 50%,
                rgba(168, 85, 247, 0.1) 100%
              )
            `
          }}
        />

        {/* Scroll-triggered Light Overlay */}
        <motion.div
          style={{ opacity: opacityOverlay }}
          className=" absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-blue-500/10"
        />

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Original Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Logo & Title */}
          <motion.div
            className="flex flex-col items-center gap-4 mb-6 md:gap-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl rounded-full opacity-30 animate-pulse" />
              <div className="relative z-10 w-full h-full bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-cyan-400/30">
                <Building className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-cyan-400" />
              </div>
            </div>
            <motion.span
              className="text-sm sm:text-base md:text-lg text-cyan-300 font-medium tracking-wider"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Monetizing
            </span>
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Innovations
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-cyan-200 max-w-2xl mx-auto mt-4 md:mt-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transforming visionary ideas into market-leading digital solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2">
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-transparent border-2 border-cyan-400/30 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2">
              <span>View Case Studies</span>
              <Briefcase className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator - Moved to bottom */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-cyan-400/30 flex items-center justify-center"
          >
            <div className="w-1.5 h-2.5 sm:w-2 sm:h-3 bg-cyan-400/50 rounded-full" />
          </motion.div>
          <span className="text-xs text-cyan-300/80 tracking-wider">
            Scroll to Explore
          </span>
        </motion.div>
      </section>
 {/* Partners Marquee */}
 <section className="py-16 bg-slate-800/50">
        <div className="overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 opacity-50">
                <div className="w-32 h-16 bg-slate-600/30 rounded-lg" />
                <div className="w-32 h-16 bg-slate-600/30 rounded-lg" />
                <div className="w-32 h-16 bg-slate-600/30 rounded-lg" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">About Us</h2>
              <p className="text-cyan-200 leading-relaxed">
                We are a team of passionate technologists dedicated to delivering cutting-edge solutions that transform businesses. With years of experience across various industries, we combine technical expertise with strategic thinking to help our clients achieve their goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Expert Team</h4>
                    <p className="text-slate-300">Certified professionals with diverse expertise</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Proven Track Record</h4>
                    <p className="text-slate-300">Successful projects across multiple industries</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700/30 rounded-xl p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-600/20 rounded-lg">
                  <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
                  <p className="text-slate-300">Years Experience</p>
                </div>
                <div className="p-6 bg-slate-600/20 rounded-lg">
                  <h3 className="text-5xl font-bold text-cyan-400">200+</h3>
                  <p className="text-slate-300">Projects Completed</p>
                </div>
                <div className="p-6 bg-slate-600/20 rounded-lg">
                  <h3 className="text-5xl font-bold text-cyan-400">98%</h3>
                  <p className="text-slate-300">Client Satisfaction</p>
                </div>
                <div className="p-6 bg-slate-600/20 rounded-lg">
                  <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
                  <p className="text-slate-300">Support Available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Interactive Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-700/30 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <div className="w-16 h-16 mb-6 p-4 bg-cyan-500/10 rounded-lg text-cyan-400 mx-auto">
                <Rocket className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Rapid Deployment</h3>
              <p className="text-cyan-200 text-center">Accelerated project timelines without compromising quality</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-700/30 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <div className="w-16 h-16 mb-6 p-4 bg-cyan-500/10 rounded-lg text-cyan-400 mx-auto">
                <ShieldCheck className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Enterprise Security</h3>
              <p className="text-cyan-200 text-center">Military-grade encryption and compliance standards</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-700/30 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <div className="w-16 h-16 mb-6 p-4 bg-cyan-500/10 rounded-lg text-cyan-400 mx-auto">
                <Puzzle className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Custom Solutions</h3>
              <p className="text-cyan-200 text-center">Tailored systems to fit your unique business needs</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-700/30 rounded-xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <div className="w-16 h-16 mb-6 p-4 bg-cyan-500/10 rounded-lg text-cyan-400 mx-auto">
                <TrendingUp className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Proven ROI</h3>
              <p className="text-cyan-200 text-center">Measurable results that impact your bottom line</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-700/30 rounded-xl border border-slate-600/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 mb-6 p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-cyan-200 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <span className="text-cyan-400">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <motion.div className="p-8 bg-slate-700/30 rounded-xl">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-cyan-200 leading-relaxed">
              Empower businesses through innovative technology solutions that drive growth 
              and operational efficiency.
            </p>
          </motion.div>
          <motion.div className="p-8 bg-slate-700/30 rounded-xl">
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-cyan-200 leading-relaxed">
              To be the preferred technology partner for enterprises seeking digital 
              transformation and sustainable innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-slate-700/30 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                  <div>
                    <h4 className="font-semibold">Client Name</h4>
                    <p className="text-sm text-cyan-300">CEO, Company</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-cyan-100">
                  "Acmeflare transformed our digital presence with their innovative solutions.
                  Their team delivered beyond our expectations."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1,2,3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-600/50"
              >
                <div className="h-64 bg-slate-700/30 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl font-semibold">AI-Powered Retail Platform</h3>
                  </div>
                  <p className="text-cyan-200 mb-6">
                    Developed custom machine learning models for inventory prediction
                    with 98% accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">AI/ML</span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="p-6 bg-slate-700/30 rounded-xl">
              <Clock className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
              <div className="text-4xl font-bold mb-2">1500+</div>
              <div className="text-cyan-200">Development Hours</div>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="p-6 bg-slate-700/30 rounded-xl">
              <Globe className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-cyan-200">Countries Served</div>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="p-6 bg-slate-700/30 rounded-xl">
              <Shield className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-cyan-200">Security Compliance</div>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="p-6 bg-slate-700/30 rounded-xl">
              <Award className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-cyan-200">Industry Awards</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <h3 className="text-2xl text-center text-slate-400 mb-12">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            {['TechCorp', 'Finova', 'HealthPlus', 'EduNet', 'RetailAI'].map((name,i) => (
              <motion.div 
                key={name}
                whileHover={{ scale: 1.1 }}
                className="w-40 h-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center text-xl font-bold"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="p-8 bg-slate-700/30 rounded-xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Start Your Project</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full p-3 bg-slate-800/50 rounded-lg border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 bg-slate-800/50 rounded-lg border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Project Details"
                className="w-full p-3 bg-slate-800/50 rounded-lg border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/80 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 opacity-70">
            © {new Date().getFullYear()} Acmeflare Technologies Pvt Ltd
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;