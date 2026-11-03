import React, { useState, useEffect } from 'react';
import {
  Terminal, Code2, Server, Database, Cloud, ShieldCheck, Cpu, Layers,
  Award, CheckCircle2, ChevronRight, Download, Mail, Phone, MapPin,
  ExternalLink, Copy, Check, Menu, X, ArrowUp, Search, Activity,
  Sparkles, MessageSquare, User, Globe, Clock, Lock, Layers3, Monitor,
  HardDrive, FileCode, ArrowRight, Briefcase
} from 'lucide-react';

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedContact, setCopiedContact] = useState(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [skillSearch, setSkillSearch] = useState('');
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [activeAboutTab, setActiveAboutTab] = useState('bio');
  const [activeCodeTab, setActiveCodeTab] = useState('dotnet');
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Senior .NET Core & MERN Developer',
    'Full-Stack Cloud Architect',
    'Microservices & API Specialist'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  const skillsData = [
    { name: 'C# & .NET Core', category: 'backend', level: 'Expert', desc: 'Enterprise Web APIs, LINQ, EF Core, Microservices' },
    { name: 'ASP.NET Web API', category: 'backend', level: 'Expert', desc: 'RESTful API design, JWT Auth, Swagger/OpenAPI' },
    { name: 'Node.js & Express.js', category: 'backend', level: 'Expert', desc: 'Asynchronous event-driven architecture, middleware' },
    { name: 'React.js & Next.js', category: 'frontend', level: 'Expert', desc: 'SSR, SSG, Custom Hooks, Redux Toolkit, Tailwind CSS' },
    { name: 'TypeScript & ES6+', category: 'frontend', level: 'Expert', desc: 'Strict typing, interfaces, generics, modern JavaScript' },
    { name: 'MongoDB & Mongoose', category: 'database', level: 'Advanced', desc: 'Aggregation pipelines, schema design, indexing' },
    { name: 'SQL Server & EF Core', category: 'database', level: 'Expert', desc: 'Relational modeling, stored procedures, query tuning' },
    { name: 'AWS Cloud (EC2, S3, RDS)', category: 'cloud', level: 'Advanced', desc: 'Cloud deployments, IAM policies, RDS scaling, S3 buckets' },
    { name: 'Docker & Kubernetes', category: 'devops', level: 'Intermediate', desc: 'Containerization, orchestration, environment parity' },
    { name: 'CI/CD Pipelines & Git', category: 'devops', level: 'Advanced', desc: 'GitHub Actions, GitLab CI, automated testing workflows' },
    { name: 'Security & OAuth 2.0', category: 'security', level: 'Expert', desc: 'JWT token rotation, RBAC, HTTPS encryption, input validation' },
    { name: 'SignalR & WebSockets', category: 'backend', level: 'Advanced', desc: 'Real-time duplex communication, live notifications' }
  ];

  const filteredSkills = skillsData.filter(skill => {
    const matchesCat = activeSkillCategory === 'all' || skill.category === activeSkillCategory;
    const matchesSearch = skill.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                          skill.desc.toLowerCase().includes(skillSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const projectsData = [
    {
      id: 'enterprise-platform',
      title: 'Enterprise Business Management Platform',
      category: 'dotnet',
      summary: 'High-throughput enterprise management platform built with ASP.NET Core microservices and Next.js frontend.',
      tech: ['.NET Core 8', 'C#', 'Next.js', 'SQL Server', 'AWS RDS', 'Docker'],
      impact: 'Reduced query latency by 45% and scaled concurrent enterprise transaction throughput.',
      description: 'An enterprise-grade platform engineered to handle complex business workflows, multi-tenant approvals, real-time dashboard analytics, and automated reporting. Built on clean architecture principles with separate domain, service, and data access layers.',
      architecture: [
        'Implemented CQRS pattern in ASP.NET Core for optimized read/write separation.',
        'Configured Entity Framework Core with optimized LINQ query execution plans and database indexing.',
        'Developed server-rendered dynamic dashboards using Next.js and Tailwind CSS for lightning-fast First Contentful Paint (FCP).',
        'Deployed containerized microservices via Docker onto AWS EC2 clusters with automated RDS database backups.'
      ]
    },
    {
      id: 'healthcare-platform',
      title: 'Cloud-Based Healthcare Management Platform',
      category: 'fullstack',
      summary: 'Secure HIPAA-compliant healthcare portal connecting patients, physicians, and administrative staff.',
      tech: ['Node.js', 'Express', 'React.js', 'MongoDB', 'AWS S3', 'JWT Auth'],
      impact: 'Processed 50k+ monthly patient appointments with zero data leakage incidents.',
      description: 'A modular healthcare platform providing electronic health records (EHR), appointment scheduling, automated billing, and secure role-based access control for multi-hospital networks.',
      architecture: [
        'Built robust RESTful backend services using Node.js and Express with strict input sanitization and validation middleware.',
        'Designed flexible MongoDB schemas and aggregation pipelines for complex patient record tracking.',
        'Integrated AWS S3 secure object storage for encrypted medical documents and profile imagery.',
        'Enforced granular Role-Based Access Control (RBAC) ensuring patient data privacy.'
      ]
    },
    {
      id: 'hospital-system',
      title: 'Integrated Hospital Management System (HMS)',
      category: 'dotnet',
      summary: 'Comprehensive hospital operations platform with real-time room tracking and prescription management.',
      tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'SignalR', 'Bootstrap', 'Azure'],
      impact: 'Improved emergency ward response times by 35% through real-time push updates.',
      description: 'An all-in-one hospital management suite designed for rapid administrative workflows, emergency triage tracking, pharmacy inventory management, and doctor scheduling.',
      architecture: [
        'Utilized ASP.NET MVC architecture with a clean separation of concerns across controllers, services, and repositories.',
        'Integrated ASP.NET SignalR for real-time WebSocket communication, instantly notifying doctors of lab results and bed availability.',
        'Engineered high-performance SQL Server stored procedures and triggers for audit logging and secure transaction handling.'
      ]
    },
    {
      id: 'vaccination-platform',
      title: 'National Vaccination Tracking & Inventory System',
      category: 'fullstack',
      summary: 'Large-scale immunisation scheduling and cold-chain inventory monitoring portal.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redis Caching'],
      impact: 'Successfully coordinated vaccine distribution logistics across 120+ regional health centers.',
      description: 'A dedicated tracking system designed to manage vaccine stock levels, cold-chain temperature alerts, citizen appointment slots, and automated SMS/email reminders.',
      architecture: [
        'Implemented Redis caching layer to handle high-conquerency appointment slot bookings during peak hours without database locks.',
        'Built responsive, accessible React.js components optimized for mobile and desktop devices used by field nurses.',
        'Engineered automated daily reporting scripts exporting compliance analytics to regional health directors.'
      ]
    }
  ];

  const filteredProjects = projectsData.filter(proj => {
    if (activeProjectFilter === 'all') return true;
    return proj.category === activeProjectFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white relative overflow-hidden">
      {/* Ambient Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Floating Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
        <nav className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl shadow-slate-950/40">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              SB
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-teal-300 bg-clip-text text-transparent">
                Shahzadee Bano
              </span>
              <span className="block text-xs font-mono text-teal-400">Senior .NET & MERN Dev</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
            {['home', 'about', 'skills', 'experience', 'projects', 'architecture', 'code', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all capitalize ${
                  activeNav === item
                    ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md shadow-teal-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 font-semibold text-xs tracking-wide hover:bg-teal-500/20 hover:border-teal-500/50 transition-all flex items-center gap-2 shadow-lg shadow-teal-500/10"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="max-w-7xl mx-auto mt-2 glass-panel rounded-2xl p-6 lg:hidden flex flex-col gap-3 shadow-2xl bg-slate-900/95 border border-slate-800">
            {['home', 'about', 'skills', 'experience', 'projects', 'architecture', 'code', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => { setActiveNav(item); setMobileMenuOpen(false); }}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors capitalize flex items-center justify-between"
              >
                <span>{item}</span>
                <ChevronRight className="w-4 h-4 text-teal-400" />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-20">

        {/* 1. HERO SECTION */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center items-center text-center relative py-12">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
            <div className="w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/30 to-indigo-600/30 rounded-full blur-[100px]"></div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-teal-500/30 text-teal-300 text-xs font-mono mb-6 shadow-lg shadow-teal-500/5 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>4+ Years Professional Engineering Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6">
            Architecting <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Resilient Enterprise</span> & Cloud Systems
          </h1>

          <p className="text-lg sm:text-xl font-mono text-teal-300/90 h-12 mb-6 flex items-center justify-center">
            &gt; {typedText}<span className="animate-pulse">_</span>
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
            Senior Full-Stack Software Engineer specializing in <strong className="text-white font-semibold">C#, .NET Core, ASP.NET Web API, React.js, Next.js, and AWS Cloud architecture</strong>. Delivering high-concurrency, secure, and production-grade applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-teal-500/25 hover:scale-105 transition-all flex items-center gap-3"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl glass-card text-slate-200 font-bold text-sm tracking-wide hover:bg-slate-800/80 hover:text-white transition-all border border-slate-700/80 flex items-center gap-3"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { label: 'Years Experience', value: '4+ Years' },
              { label: 'Primary Company', value: 'SoftVolta' },
              { label: 'Tech Stack', value: '.NET Core & MERN' },
              { label: 'Cloud Provider', value: 'AWS & Docker' }
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl text-center border border-slate-800/80 shadow-lg">
                <div className="text-xl sm:text-2xl font-extrabold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section id="about" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Professional Background</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Engineering Philosophy & Story</h3>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-8 justify-center sm:justify-start">
              {[
                { id: 'bio', label: 'Biography', icon: User },
                { id: 'stack', label: 'Core Expertise', icon: Code2 },
                { id: 'education', label: 'Education', icon: Award }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAboutTab(tab.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                      activeAboutTab === tab.id
                        ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {activeAboutTab === 'bio' && (
              <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Shahzadee Bano</strong>, a dedicated <strong className="text-teal-400 font-semibold">Senior Full-Stack Software Engineer</strong> with over <strong className="text-white font-semibold">4+ years of professional experience</strong> architecting, developing, and deploying scalable enterprise web applications.
                </p>
                <p>
                  Currently driving technical excellence at <strong className="text-white font-semibold">SoftVolta (Islamabad, Pakistan)</strong>, I specialize in bridging robust backend architectures built with <strong className="text-teal-400">C#, .NET Core, ASP.NET Web API, and Node.js</strong> with modern, high-performance frontend interfaces in <strong className="text-indigo-400">React.js, Next.js, TypeScript, and Tailwind CSS</strong>.
                </p>
                <p>
                  My engineering ethos revolves around clean code principles, SOLID architectural patterns, database performance tuning (SQL Server & MongoDB), and seamless cloud deployments using AWS and Docker.
                </p>
              </div>
            )}

            {activeAboutTab === 'stack' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Backend Mastery', desc: 'C#, .NET Core 8, ASP.NET Web API, Entity Framework Core, LINQ, Node.js, Express.js' },
                  { title: 'Frontend Engineering', desc: 'React.js, Next.js (SSR/SSG), TypeScript, JavaScript ES6+, Tailwind CSS, Redux Toolkit' },
                  { title: 'Database & Cloud', desc: 'Microsoft SQL Server, MongoDB, AWS (EC2, S3, RDS, IAM), Docker, Redis Caching' },
                  { title: 'Security & APIs', desc: 'JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), RESTful API design' },
                  { title: 'Real-Time Systems', desc: 'ASP.NET SignalR, WebSockets, Event-Driven Architectures, Asynchronous Processing' },
                  { title: 'DevOps & Quality', desc: 'Git, GitHub Actions, CI/CD Pipelines, Unit Testing (xUnit), Agile/Scrum' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                    <h4 className="text-teal-300 font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeAboutTab === 'education' && (
              <div className="space-y-6">
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Bachelor of Software Engineering (BSSE)</h4>
                    <p className="text-teal-400 text-sm font-medium">Gomal University, Dera Ismail Khan, Pakistan</p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs">
                    Graduated: 2020
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3. TECHNICAL SKILLS SECTION */}
        <section id="skills" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Technical Competencies</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Enterprise Technology Stack</h3>
            <p className="text-slate-400 text-sm">Explore my proficiency across backend engineering, frontend frameworks, databases, and cloud infrastructure.</p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: 'all', label: 'All Skills' },
                { id: 'backend', label: '.NET & Backend' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'database', label: 'Databases' },
                { id: 'cloud', label: 'Cloud & DevOps' },
                { id: 'security', label: 'Security' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkillCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    activeSkillCategory === cat.id
                      ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search skill..."
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredSkills.map((skill, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800/80 shadow-lg glass-card-hover group">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-white group-hover:text-teal-300 transition-colors text-base">{skill.name}</h4>
                  <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-[10px] font-semibold uppercase tracking-wider border border-teal-500/20">
                    {skill.level}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROFESSIONAL EXPERIENCE SECTION */}
        <section id="experience" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Career Journey</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Professional Experience</h3>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 space-y-12">
            
            {/* Experience Item 1: SoftVolta */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-950 shadow-md shadow-teal-500/50"></div>
              
              <div className="glass-card p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">Senior MERN Stack & .NET Developer</h4>
                    <p className="text-teal-400 font-semibold text-sm">SoftVolta | Islamabad, Pakistan</p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs">
                    October 2024 – Present (4+ Years Total exp)
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Leading full-stack enterprise web development, architecting high-performance .NET Core microservices, and building scalable cloud-native applications with React.js, Next.js, and AWS.
                </p>

                <div className="space-y-3">
                  {[
                    'Develop and maintain full-stack enterprise web applications using C#, .NET Core, MongoDB, Express.js, React.js, and Next.js.',
                    'Architect and maintain high-throughput RESTful APIs and backend services using ASP.NET Web API and Node.js.',
                    'Implement modern Next.js features for server-side rendering (SSR), static site generation (SSG), and superior frontend SEO performance.',
                    'Design and optimize SQL Server databases and MongoDB schemas with advanced indexing and query tuning.',
                    'Implement enterprise security standards including JWT authentication, OAuth 2.0, role-based access control (RBAC), and secure API endpoints.',
                    'Deploy, monitor, and scale cloud infrastructure using AWS services (EC2, S3, RDS, IAM) and Docker containerization.'
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. FEATURED PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Portfolio Showcase</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Featured Enterprise Projects</h3>
            <p className="text-slate-400 text-sm">Production-grade applications built with .NET Core, React.js, Next.js, and AWS.</p>
          </div>

          {/* Project Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'dotnet', label: '.NET Core & Enterprise' },
              { id: 'fullstack', label: 'MERN & Full-Stack' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveProjectFilter(filter.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeProjectFilter === filter.id
                    ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-card rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col justify-between group glass-card-hover">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">{project.title}</h4>
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 font-mono text-[10px] uppercase font-bold border border-teal-500/20 shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-teal-300 font-mono text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <span>{project.impact}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProjectModal(project)}
                    className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20 text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT DETAILS MODAL */}
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="glass-card rounded-3xl max-w-2xl w-full p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProjectModal.title}</h3>
              <p className="text-teal-400 text-xs font-mono mb-6">{selectedProjectModal.impact}</p>

              <div className="space-y-6 text-slate-300 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-2">Project Overview</h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProjectModal.description}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">System Architecture & Engineering Highlights</h4>
                  <div className="space-y-2">
                    {selectedProjectModal.architecture.map((arch, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectModal.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. SYSTEM ARCHITECTURE & ENGINEERING SECTION */}
        <section id="architecture" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Engineering Principles</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">System Architecture & Standards</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Clean Architecture',
                desc: 'Strict separation of concerns across Domain, Application, Infrastructure, and Presentation layers ensuring testability and maintainability.',
                icon: Layers
              },
              {
                title: 'High Concurrency & REST APIs',
                desc: 'Designing stateless RESTful Web APIs with asynchronous programming, rate limiting, and robust JWT security protocols.',
                icon: Server
              },
              {
                title: 'Cloud Scalability & DevOps',
                desc: 'Automating continuous integration and deployment with Docker containerization and AWS cloud infrastructure management.',
                icon: Cloud
              }
            ].map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div key={idx} className="glass-card p-8 rounded-3xl border border-slate-800 shadow-xl group glass-card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{principle.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. LIVE CODE PLAYGROUND SECTION */}
        <section id="code" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Code Showcase</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Sample Engineering Snippets</h3>
            <p className="text-slate-400 text-sm">Clean C# ASP.NET Core repository pattern & TypeScript React custom hook.</p>
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCodeTab('dotnet')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                    activeCodeTab === 'dotnet' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  UserRepository.cs (.NET Core)
                </button>
                <button
                  onClick={() => setActiveCodeTab('react')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                    activeCodeTab === 'react' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  useApiFetch.ts (React Hook)
                </button>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
            </div>

            <div className="p-6 bg-slate-950/90 font-mono text-xs sm:text-sm overflow-x-auto text-slate-300">
              {activeCodeTab === 'dotnet' ? (
                <pre className="text-teal-300 leading-relaxed">
                  {`using Microsoft.EntityFrameworkCore;
using Enterprise.Core.Entities;
using Enterprise.Core.Interfaces;

namespace Enterprise.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        IConfiguration _configuration;
        private readonly EnterpriseDbContext _context;

        public UserRepository(EnterpriseDbContext context)
        {
            _context = context;
        }

        public async Task<UserResponseDto> GetByIdAsync(Guid id)
        {
            var user = await _context.Users
                .AsNoTracking()
                .Include(u => u.Role)
                .FirstOrDefaultAsync(u => u.Id == id);

            if (user == null) throw new KeyNotFoundException($"User {id} not found.");
            
            return user.MapToDto();
        }
    }
}`}
                </pre>
              ) : (
                <pre className="text-indigo-300 leading-relaxed">
                  {`import { useState, useEffect } from 'react';

export function useApiFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(\`/api/v1/\${endpoint}\`);
        if (!response.ok) throw new Error('API Request Failed');
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}`}
                </pre>
              )}
            </div>
          </div>
        </section>

        {/* 8. CONTACT & FOOTER SECTION */}
        <section id="contact" className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Let's Build Something Exceptional</h3>
            <p className="text-slate-400 text-sm">Open for senior engineering roles, architectural consulting, and high-impact software contracts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Details Cards */}
            <div className="space-y-6">
              {[
                { title: 'Email Address', val: 'kshahzadi371@gmail.com', type: 'email', icon: Mail },
                { title: 'Phone / WhatsApp', val: '+92 332 8339093', type: 'phone', icon: Phone },
                { title: 'Location', val: 'Islamabad, Pakistan', type: 'location', icon: MapPin }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono mb-1">{item.title}</div>
                        <div className="text-white font-bold text-sm sm:text-base">{item.val}</div>
                      </div>
                    </div>
                    {item.type !== 'location' && (
                      <button
                        onClick={() => copyToClipboard(item.val, item.type)}
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
                      >
                        {copiedContact === item.type ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        <span className="hidden sm:inline">{copiedContact === item.type ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent successfully.'); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex.morgan@techcorp.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Message or Project Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your enterprise software or .NET / MERN contract requirements..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-teal-500/25 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              SB
            </div>
            <span className="font-bold text-white text-sm">Shahzadee Bano</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Shahzadee Bano. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
