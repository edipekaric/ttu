import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Wrench, Cog, Flame, Zap, Search, Truck, Settings, HardHat, FileText, Award } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';

interface Partner {
  name: string;
  logo: string;
}

interface NewsItem {
  title: string;
  description: string;
  category: string;
  bgColor: string;
  date: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const TTUEnergetikWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Trigger initial animation
    setIsVisible(true);
  }, []);

  const partners: Partner[] = [
    { name: 'Partner 1', logo: '/api/placeholder/120/60' },
    { name: 'RMUB', logo: '/api/placeholder/120/60' },
    { name: 'Termoelektro', logo: '/api/placeholder/120/60' },
    { name: 'Partner 4', logo: '/api/placeholder/120/60' },
    { name: 'Partner 5', logo: '/api/placeholder/120/60' },
    { name: 'Kostroj Strojegradnja', logo: '/api/placeholder/120/60' },
    { name: 'SMed Engineering', logo: '/api/placeholder/120/60' },
  ];

  const services: Service[] = [
    {
      title: t.services.welding.title,
      description: t.services.welding.description,
      icon: <Wrench size={32} />,
      bgColor: 'from-blue-500 to-blue-700'
    },
    {
      title: t.services.machining.title,
      description: t.services.machining.description,
      icon: <Cog size={32} />,
      bgColor: 'from-green-500 to-green-700'
    },
    {
      title: t.services.thermal.title,
      description: t.services.thermal.description,
      icon: <Flame size={32} />,
      bgColor: 'from-red-500 to-red-700'
    },
    {
      title: t.services.vulcanization.title,
      description: t.services.vulcanization.description,
      icon: <Zap size={32} />,
      bgColor: 'from-purple-500 to-purple-700'
    },
    {
      title: t.services.sandblasting.title,
      description: t.services.sandblasting.description,
      icon: <Search size={32} />,
      bgColor: 'from-yellow-500 to-yellow-700'
    },
    {
      title: t.services.research.title,
      description: t.services.research.description,
      icon: <FileText size={32} />,
      bgColor: 'from-indigo-500 to-indigo-700'
    },
    {
      title: t.services.electrical.title,
      description: t.services.electrical.description,
      icon: <Settings size={32} />,
      bgColor: 'from-pink-500 to-pink-700'
    }
  ];

  const products: Product[] = [
    {
      title: t.products.reducers.title,
      description: t.products.reducers.description,
      icon: <Cog size={32} />,
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      title: t.products.crushers.title,
      description: t.products.crushers.description,
      icon: <HardHat size={32} />,
      bgColor: 'from-green-600 to-green-800'
    },
    {
      title: t.products.conveyors.title,
      description: t.products.conveyors.description,
      icon: <Truck size={32} />,
      bgColor: 'from-red-600 to-red-800'
    },
    {
      title: t.products.combined.title,
      description: t.products.combined.description,
      icon: <Settings size={32} />,
      bgColor: 'from-purple-600 to-purple-800'
    },
    {
      title: t.products.steel.title,
      description: t.products.steel.description,
      icon: <Award size={32} />,
      bgColor: 'from-yellow-600 to-yellow-800'
    },
    {
      title: t.products.specialized.title,
      description: t.products.specialized.description,
      icon: <Wrench size={32} />,
      bgColor: 'from-indigo-600 to-indigo-800'
    }
  ];

  const newsItems: NewsItem[] = [
    {
      title: t.news.openDay.title,
      description: t.news.openDay.description,
      category: t.news.openDay.category,
      bgColor: 'from-blue-400 to-blue-600',
      date: t.news.openDay.date
    },
    {
      title: t.news.audit.title,
      description: t.news.audit.description,
      category: t.news.audit.category,
      bgColor: 'from-green-400 to-green-600',
      date: t.news.audit.date
    },
    {
      title: t.news.business.title,
      description: t.news.business.description,
      category: t.news.business.category,
      bgColor: 'from-purple-400 to-purple-600',
      date: t.news.business.date
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const nextSibling = target.nextElementSibling as HTMLElement;
    target.style.display = 'none';
    if (nextSibling) {
      nextSibling.style.display = 'flex';
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300">TTU Energetik</h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#about" 
                onClick={(e) => handleLinkClick(e, '#about')}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {t.nav.about}
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleLinkClick(e, '#services')}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {t.nav.services}
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleLinkClick(e, '#products')}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {t.nav.products}
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleLinkClick(e, '#projects')}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {t.nav.projects}
              </a>
              <a 
                href="#news" 
                onClick={(e) => handleLinkClick(e, '#news')}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {t.nav.news}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                {t.nav.contact}
              </a>
              <LanguageSelector />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSelector />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#about" 
                onClick={(e) => handleLinkClick(e, '#about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 hover:bg-blue-50 rounded"
              >
                {t.nav.about}
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleLinkClick(e, '#services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 hover:bg-blue-50 rounded"
              >
                {t.nav.services}
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleLinkClick(e, '#products')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 hover:bg-blue-50 rounded"
              >
                {t.nav.products}
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleLinkClick(e, '#projects')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 hover:bg-blue-50 rounded"
              >
                {t.nav.projects}
              </a>
              <a 
                href="#news" 
                onClick={(e) => handleLinkClick(e, '#news')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 hover:bg-blue-50 rounded"
              >
                {t.nav.news}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 hover:bg-blue-50 rounded"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
                {t.hero.title.split('1936').map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index === 0 && <span className="text-yellow-400 animate-pulse">1936</span>}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-xl mb-8 text-blue-100 animate-fadeInUp animation-delay-200">
                {t.hero.subtitle}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg animate-fadeInUp animation-delay-400 group">
                {t.hero.cta} <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <img 
                  src="http://www.ttuenergetik.ba/wp-content/uploads/2022/01/rafael-juarez-hTUdXgbhd3o-unsplash.jpg" 
                  alt="Industrial machinery" 
                  className="w-full h-full object-cover rounded-lg"
                  onError={handleImageError}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-2xl items-center justify-center hidden">
                  <span className="text-gray-600 text-lg">Industrijska oprema</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">{t.services.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto animate-expandWidth"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp group" style={{animationDelay: `${index * 100}ms`}}>
                <div className={`h-32 bg-gradient-to-br ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group transition-all duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.common.learnMore} <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">{t.about.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto animate-expandWidth"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.description2}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description3}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t.about.mission.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.mission.description1}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.about.mission.description2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">{t.products.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto animate-expandWidth"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp group" style={{animationDelay: `${index * 100}ms`}}>
                <div className={`h-32 bg-gradient-to-br ${product.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {product.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group transition-all duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.common.learnMore} <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto animate-expandWidth"></div>
            <p className="text-xl text-gray-600 mt-4 animate-fadeInUp animation-delay-200">
              {t.projects.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp animation-delay-300">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{t.projects.industrial.title}</h3>
              <p className="text-blue-100 text-center">
                {t.projects.industrial.description}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp animation-delay-400">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{t.projects.technological.title}</h3>
              <p className="text-green-100 text-center">
                {t.projects.technological.description}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp animation-delay-500">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <HardHat size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{t.projects.construction.title}</h3>
              <p className="text-purple-100 text-center">
                {t.projects.construction.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              {t.quality.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              {t.quality.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-500 hover:scale-105 animate-fadeInUp animation-delay-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">{t.common.years}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.quality.experience.title}</h3>
              <p className="text-gray-700">
                {t.quality.experience.description}
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-500 hover:scale-105 animate-fadeInUp animation-delay-400 group">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl animate-bounce">★</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.quality.quality.title}</h3>
              <p className="text-gray-700">
                {t.quality.quality.description}
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-500 hover:scale-105 animate-fadeInUp animation-delay-500 group">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.quality.innovation.title}</h3>
              <p className="text-gray-700">
                {t.quality.innovation.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">{t.news.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto animate-expandWidth"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fadeInUp" style={{animationDelay: `${(index + 1) * 200}ms`}}>
                <div className={`h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative`}>
                  <span className="text-white text-lg font-medium">{item.category}</span>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-20 rounded px-2 py-1">
                    <span className="text-white text-sm">{item.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group transition-all duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t.news.readMore} <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">{t.partners.title}</h2>
            <p className="text-xl text-gray-600 animate-fadeInUp animation-delay-200">{t.partners.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-300">
                  <span className="text-xs text-gray-600 text-center px-2">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">{t.contact.title}</h2>
            <p className="text-xl text-blue-100 animate-fadeInUp animation-delay-200">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fadeInUp animation-delay-300 group">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className="text-blue-900 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.contact.phone}</h3>
              <p className="text-blue-100">+387 35 366 260</p>
              <p className="text-blue-100 text-sm">{t.contact.fax}</p>
            </div>
            
            <div className="text-center animate-fadeInUp animation-delay-400 group">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-blue-900 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.contact.email}</h3>
              <p className="text-blue-100">info@ttuenergetik.ba</p>
            </div>
            
            <div className="text-center animate-fadeInUp animation-delay-500 group">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} className="text-blue-900 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.contact.address}</h3>
              <p className="text-blue-100">{t.contact.addressLine1}</p>
              <p className="text-blue-100">{t.contact.addressLine2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 animate-fadeInLeft">
              <h3 className="text-2xl font-bold mb-4">TTU Energetik</h3>
              <p className="text-gray-400 mb-4">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
              </div>
            </div>
            
            <div className="animate-fadeInUp animation-delay-200">
              <h4 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleLinkClick(e, '#about')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a 
                    href="#products" 
                    onClick={(e) => handleLinkClick(e, '#products')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.nav.products}
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={(e) => handleLinkClick(e, '#projects')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.nav.projects}
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleLinkClick(e, '#contact')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="animate-fadeInRight">
              <h4 className="text-lg font-bold mb-4">{t.nav.contact}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@ttuenergetik.ba</li>
                <li>+387 35 366 260</li>
                <li>{t.contact.addressLine1}</li>
                <li>{t.contact.addressLine2}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fadeInUp animation-delay-300">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TTUEnergetikWebsite;
