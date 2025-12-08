import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'problem', label: 'Problem' },
  { id: 'context', label: 'Context' },
  { id: 'solution', label: 'Solution' },
  { id: 'impact', label: 'Impact' },
  { id: 'pilot', label: 'Pilot & Next Steps' },
  { id: 'about', label: 'About' },
]

function Navigation({ activeSection, isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-navy-900/5'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center shadow-lg shadow-navy-900/25 group-hover:shadow-navy-900/40 group-hover:scale-105 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-navy-900 tracking-tight">
                VoiceBridge
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-navy-900 shadow-md'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-navy-600 hover:text-navy-900 hover:bg-navy-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-3 mt-2 border border-navy-100">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-navy-900'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/50" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-amber-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-navy-200/30 via-blue-100/20 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '1s' }} 
        />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-sage-200/20 to-emerald-100/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" 
          style={{ animationDuration: '12s', animationDelay: '2s' }} 
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-navy-900" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-32 lg:py-40">

        {/* Main Title */}
        <h1 className="font-display font-bold text-navy-900 leading-[1.1] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent pb-2">
            VoiceBridge
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-navy-800 leading-snug mb-8 max-w-4xl mx-auto">
          Empowering Chinese International School Students' English Communication for College Readiness
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Helping Grade 11–12 students move beyond test scores to authentic, confident English communication for college applications and university life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('problem')}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-navy-900/25 hover:shadow-navy-900/40 hover:bg-navy-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('pilot')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 rounded-2xl font-semibold text-lg border-2 border-navy-200 hover:border-navy-300 hover:bg-navy-50 hover:-translate-y-0.5 shadow-lg shadow-navy-900/5 transition-all duration-300"
          >
            View Pilot Plan
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('problem')}
          className="flex flex-col items-center gap-2 text-navy-400 hover:text-navy-600 transition-colors group"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}

function SectionCard({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-3xl shadow-xl shadow-navy-900/5 border border-navy-100/50 p-6 sm:p-8 lg:p-10 ${className}`}>
      {children}
    </div>
  )
}

function ProblemSection() {
  const challenges = [
    {
      icon: '🗣️',
      title: 'Speaking Anxiety',
      description:
        'Many students experience significant anxiety when speaking English in academic settings, limiting their participation and learning opportunities.',
    },
    {
      icon: '🎓',
      title: 'College Readiness Gap',
      description:
        'Despite strong written English skills, many students struggle with the verbal communication demands of Western university environments.',
    },
    {
      icon: '🌍',
      title: 'Cultural Transition',
      description:
        'Adapting to different communication styles and expectations in English-speaking academic contexts presents unique challenges.',
    },
    {
      icon: '💬',
      title: 'Limited Practice Opportunities',
      description:
        'Traditional classroom settings often provide insufficient opportunities for authentic, low-stakes speaking practice.',
    },
  ]

  return (
    <section id="problem" className="py-20 lg:py-28 bg-gradient-to-b from-white via-navy-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            The Challenge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            Understanding the Problem
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed">
            Chinese international students face significant barriers to confident English communication that impact their academic success and college readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {challenges.map((challenge, index) => (
            <SectionCard key={index}>
              <article className="group">
                <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {challenge.icon}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
                  {challenge.description}
                </p>
              </article>
            </SectionCard>
          ))}
        </div>

        <SectionCard className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 border-0">
          <div className="max-w-3xl mx-auto text-center py-4">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">Key Statistic</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium leading-relaxed text-white">
              "Over 70% of Chinese international students report feeling underprepared for verbal communication demands in U.S. college classrooms."
            </p>
            <p className="mt-6 text-navy-400 text-sm font-medium">
              — Placeholder for research citation
            </p>
          </div>
        </SectionCard>
      </div>
    </section>
  )
}

function ContextSection() {
  return (
    <section id="context" className="py-20 lg:py-28 bg-gradient-to-b from-white via-sage-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-sage-100 to-emerald-100 text-sage-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            Research Context
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed">
            Understanding the landscape of English language education in Chinese international schools and the transition to Western higher education.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <SectionCard>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5">
                The Growing Demand
              </h3>
              <p className="text-navy-600 leading-relaxed text-base sm:text-lg mb-4">
                China has become the largest source of international students in English-speaking countries. With thousands of students enrolled in international schools preparing for overseas education, there is a critical need for effective English communication preparation.
              </p>
              <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
                Placeholder text: Add more context about international school enrollment trends, curriculum characteristics, and the specific challenges students face when transitioning to English-medium universities.
              </p>
            </SectionCard>

            <SectionCard>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5">
                Current Educational Landscape
              </h3>
              <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
                Placeholder text: Describe the current state of English language education in Chinese international schools, including common curriculum approaches, teaching methodologies, and areas where improvements are needed for better college readiness.
              </p>
            </SectionCard>
          </div>

          <aside className="space-y-6">
            <SectionCard className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">
                  1M+
                </div>
                <p className="text-navy-800 font-semibold text-lg mb-2">
                  Chinese students studying abroad annually
                </p>
                <p className="text-sm text-navy-500">
                  Placeholder for actual statistic
                </p>
              </div>
            </SectionCard>

            <SectionCard className="bg-gradient-to-br from-sage-50 to-emerald-50 border-sage-200/50">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-sage-500 to-emerald-500 bg-clip-text text-transparent mb-3">
                  500+
                </div>
                <p className="text-navy-800 font-semibold text-lg mb-2">
                  International schools in China
                </p>
                <p className="text-sm text-navy-500">
                  Placeholder for actual statistic
                </p>
              </div>
            </SectionCard>

            <SectionCard className="bg-gradient-to-br from-navy-50 to-blue-50 border-navy-200/50">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-navy-600 to-blue-600 bg-clip-text text-transparent mb-3">
                  4-6 yrs
                </div>
                <p className="text-navy-800 font-semibold text-lg mb-2">
                  Typical international school journey
                </p>
                <p className="text-sm text-navy-500">
                  Placeholder for actual statistic
                </p>
              </div>
            </SectionCard>
          </aside>
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const features = [
    {
      title: 'AI-Powered Practice',
      description:
        'Safe, judgment-free environment for students to practice speaking with intelligent feedback and guidance.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Culturally Responsive',
      description:
        'Designed with understanding of Chinese educational contexts and the specific needs of international students.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Progressive Challenges',
      description:
        'Scaffolded activities that build confidence gradually from simple conversations to academic discussions.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Real-World Scenarios',
      description:
        'Practice situations students will encounter in college: office hours, class discussions, presentations, and social interactions.',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="solution" className="py-20 lg:py-28 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-navy-100 to-blue-100 text-navy-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Our Approach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            The VoiceBridge Solution
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed">
            A technology-enhanced approach to building confident English communication skills through safe, supportive, and engaging practice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((feature, index) => (
            <SectionCard key={index} className="group hover:shadow-2xl hover:shadow-navy-900/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </SectionCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-8">
              How It Works
            </h3>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Assessment', desc: 'Students complete an initial speaking assessment to identify strengths and areas for growth.' },
                { step: '02', title: 'Personalized Path', desc: 'AI generates a customized learning journey based on individual needs and college goals.' },
                { step: '03', title: 'Practice & Feedback', desc: 'Engaging speaking activities with real-time, constructive feedback in a safe environment.' },
                { step: '04', title: 'Progress Tracking', desc: 'Monitor growth over time with detailed analytics and milestone celebrations.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 text-amber-400 rounded-2xl flex items-center justify-center font-display font-bold text-lg shadow-lg shadow-navy-900/20 group-hover:scale-105 transition-transform">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-navy-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionCard className="bg-gradient-to-br from-navy-100 via-blue-50 to-amber-50 border-navy-200/30">
              <div className="aspect-video bg-white rounded-2xl shadow-inner flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <svg className="w-10 h-10 text-navy-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-navy-700 font-semibold text-lg">Demo Video</p>
                  <p className="text-navy-500 text-sm mt-1">Coming Soon</p>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const outcomes = [
    { metric: '40%', label: 'Increase in speaking confidence', note: 'Projected' },
    { metric: '3x', label: 'More speaking practice time', note: 'Projected' },
    { metric: '85%', label: 'Student satisfaction rate', note: 'Target' },
    { metric: '25%', label: 'Improvement in fluency scores', note: 'Projected' },
  ]

  return (
    <section id="impact" className="py-20 lg:py-28 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-amber-500/30">
            Expected Outcomes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Measuring Impact
          </h2>
          <p className="text-lg sm:text-xl text-navy-200 leading-relaxed">
            Our research-backed approach is designed to create measurable improvements in students' English communication skills and college readiness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform">
                {outcome.metric}
              </div>
              <p className="text-white font-semibold text-lg mb-2">{outcome.label}</p>
              <p className="text-navy-400 text-sm font-medium">{outcome.note}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-amber-300">
              Academic Outcomes
            </h3>
            <ul className="space-y-4 text-navy-100">
              {[
                'Improved class participation and engagement in discussions',
                'Better performance in oral presentations and interviews',
                'Placeholder: Add more expected academic outcomes',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-amber-300">
              Social-Emotional Outcomes
            </h3>
            <ul className="space-y-4 text-navy-100">
              {[
                'Reduced speaking anxiety in English-language settings',
                'Increased self-efficacy and communication confidence',
                'Placeholder: Add more expected social-emotional outcomes',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function PilotSection() {
  const timeline = [
    { phase: 'Phase 1', title: 'Research & Design', period: 'Q1 2025', description: 'User research, needs assessment, and initial prototype development.', status: 'current' },
    { phase: 'Phase 2', title: 'Pilot Program', period: 'Q2 2025', description: 'Small-scale pilot with partner international schools in China.', status: 'upcoming' },
    { phase: 'Phase 3', title: 'Iteration', period: 'Q3 2025', description: 'Refine based on pilot feedback and expand testing scope.', status: 'upcoming' },
    { phase: 'Phase 4', title: 'Scale', period: 'Q4 2025', description: 'Broader implementation and impact measurement.', status: 'upcoming' },
  ]

  return (
    <section id="pilot" className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 bg-gradient-to-r from-sage-100 to-emerald-100 text-sage-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Roadmap
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            Pilot & Next Steps
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed">
            Our phased approach ensures thoughtful development and meaningful impact through iterative testing and refinement.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-navy-300 to-navy-200 rounded-full" />

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative md:pl-24">
                {/* Timeline dot */}
                <div
                  className={`hidden md:flex absolute left-5 w-7 h-7 rounded-full border-4 items-center justify-center ${
                    item.status === 'current'
                      ? 'bg-amber-400 border-amber-200 shadow-lg shadow-amber-400/50'
                      : 'bg-navy-300 border-navy-100'
                  }`}
                >
                  {item.status === 'current' && (
                    <span className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>

                <SectionCard
                  className={`${
                    item.status === 'current'
                      ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-xl shadow-amber-200/30'
                      : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-sm font-bold uppercase tracking-wider ${item.status === 'current' ? 'text-amber-600' : 'text-navy-500'}`}>
                      {item.phase}
                    </span>
                    <span className="text-navy-300">•</span>
                    <span className="text-sm text-navy-500 font-medium">{item.period}</span>
                    {item.status === 'current' && (
                      <span className="ml-auto px-3 py-1 bg-amber-200 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{item.description}</p>
                </SectionCard>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionCard className="bg-gradient-to-br from-sage-50 via-emerald-50 to-amber-50 border-sage-200/50">
            <div className="max-w-3xl mx-auto text-center py-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                Partner With Us
              </h3>
              <p className="text-navy-600 text-lg mb-8 leading-relaxed">
                We're seeking international schools in China to participate in our pilot program. If you're interested in bringing VoiceBridge to your students, we'd love to hear from you.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-navy-900 text-white rounded-2xl font-semibold text-lg hover:bg-navy-800 hover:-translate-y-0.5 shadow-xl shadow-navy-900/20 transition-all duration-300">
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const team = [
    { name: 'Team Member Name', role: 'Project Lead', bio: 'Placeholder bio: Add background, expertise, and motivation for this project.' },
    { name: 'Team Member Name', role: 'Research Lead', bio: 'Placeholder bio: Add background, expertise, and motivation for this project.' },
    { name: 'Team Member Name', role: 'Design Lead', bio: 'Placeholder bio: Add background, expertise, and motivation for this project.' },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-navy-50 via-slate-50 to-navy-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-5 py-2 bg-white text-navy-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-md border border-navy-100">
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            About VoiceBridge
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed">
            VoiceBridge is a research project developed at Stanford Graduate School of Education, combining expertise in language learning, educational technology, and cross-cultural education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {team.map((member, index) => (
            <SectionCard key={index} className="text-center group hover:shadow-2xl hover:shadow-navy-900/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-28 h-28 bg-gradient-to-br from-navy-200 via-blue-100 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <svg className="w-14 h-14 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
                {member.name}
              </h3>
              <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
              <p className="text-navy-600 text-sm sm:text-base leading-relaxed">{member.bio}</p>
            </SectionCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <SectionCard>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5">
              Our Mission
            </h3>
            <p className="text-navy-600 leading-relaxed text-base sm:text-lg mb-4">
              We believe every student deserves the opportunity to communicate confidently in English, regardless of their starting point. VoiceBridge aims to bridge the gap between traditional English education and the real-world communication demands of Western universities.
            </p>
            <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
              Placeholder: Add more about the project's vision, values, and long-term goals for impact.
            </p>
          </SectionCard>

          <SectionCard>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-5">
              Research Foundation
            </h3>
            <p className="text-navy-600 leading-relaxed text-base sm:text-lg mb-4">
              Our approach is grounded in research on second language acquisition, speaking anxiety, and culturally responsive pedagogy. We draw on evidence-based practices to create an effective and supportive learning experience.
            </p>
            <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
              Placeholder: Add references to key research frameworks and theoretical foundations.
            </p>
          </SectionCard>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-600 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-2xl block">VoiceBridge</span>
              <p className="text-navy-400 text-sm mt-1">
                Empowering confident English communication for college-bound students
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-navy-300 hover:text-white transition-colors font-medium">Contact</a>
            <a href="#" className="text-navy-300 hover:text-white transition-colors font-medium">Privacy</a>
            <a href="#" className="text-navy-300 hover:text-white transition-colors font-medium">Terms</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p className="text-navy-400 text-sm">
              © {new Date().getFullYear()} VoiceBridge. A research project from Stanford Graduate School of Education.
            </p>
            <p className="text-navy-500 text-xs">
              Made with care for international students everywhere 🌏
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map((item) => item.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navigation activeSection={activeSection} isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <ProblemSection />
        <ContextSection />
        <SolutionSection />
        <ImpactSection />
        <PilotSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
