export interface Translations {
  nav: {
    about: string;
    services: string;
    products: string;
    projects: string;
    news: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    welding: {
      title: string;
      description: string;
    };
    machining: {
      title: string;
      description: string;
    };
    thermal: {
      title: string;
      description: string;
    };
    vulcanization: {
      title: string;
      description: string;
    };
    sandblasting: {
      title: string;
      description: string;
    };
    research: {
      title: string;
      description: string;
    };
    electrical: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    mission: {
      title: string;
      description1: string;
      description2: string;
    };
  };
  products: {
    title: string;
    reducers: {
      title: string;
      description: string;
    };
    crushers: {
      title: string;
      description: string;
    };
    conveyors: {
      title: string;
      description: string;
    };
    combined: {
      title: string;
      description: string;
    };
    steel: {
      title: string;
      description: string;
    };
    specialized: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    industrial: {
      title: string;
      description: string;
    };
    technological: {
      title: string;
      description: string;
    };
    construction: {
      title: string;
      description: string;
    };
  };
  quality: {
    title: string;
    subtitle: string;
    experience: {
      title: string;
      description: string;
    };
    quality: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
  };
  news: {
    title: string;
    readMore: string;
    openDay: {
      title: string;
      description: string;
      category: string;
      date: string;
    };
    audit: {
      title: string;
      description: string;
      category: string;
      date: string;
    };
    business: {
      title: string;
      description: string;
      category: string;
      date: string;
    };
  };
  partners: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    addressLine1: string;
    addressLine2: string;
    fax: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    followUs: string;
    copyright: string;
  };
  common: {
    learnMore: string;
    years: string;
  };
}

export const translations: Record<string, Translations> = {
  bs: {
    nav: {
      about: "O nama",
      services: "Usluge",
      products: "Proizvodi",
      projects: "Projekti",
      news: "Novosti",
      contact: "Kontakt"
    },
    hero: {
      title: "Proizvodimo za vas od 1936 godine",
      subtitle: "Sa ponosom možemo reći da smo prisutni u industriji metala već od 1936. godine, stičući bogato iskustvo i neprikosnoveno znanje.",
      cta: "Saznajte više"
    },
    services: {
      title: "Naše usluge",
      welding: {
        title: "Zavarivačke usluge",
        description: "Profesionalne zavarivačke usluge za sve vrste metala i legura"
      },
      machining: {
        title: "Mašinska obrada",
        description: "Precizna mašinska obrada metala sa najnovijom tehnologijom"
      },
      thermal: {
        title: "Termička obrada",
        description: "Specijalizovana termička obrada za poboljšanje svojstava metala"
      },
      vulcanization: {
        title: "Vulkanizacija",
        description: "Profesionalne vulkanizacijske usluge za industrijske potrebe"
      },
      sandblasting: {
        title: "Pjeskarenje",
        description: "Kvalitetno pjeskarenje za pripremu površina za obradu"
      },
      research: {
        title: "Istraživanje i razvoj",
        description: "Kontinuirano istraživanje i razvoj novih tehnologija"
      },
      electrical: {
        title: "Elektro istraživanje i projektovanje",
        description: "Specijalizovane elektro usluge i projektovanje"
      }
    },
    about: {
      title: "O nama",
      description1: "Sa više od osam desetljeća poslovanja, naša kompanija je postala sinonim za kvalitetu i pouzdanost u metalnoj industriji. Od svog osivanja 1936. godine, neprestano smo se razvijali i prilagođavali kako bismo ostali relevantni i konkurentni na tržištu metala.",
      description2: "Naša dugogodišnja prisutnost u metalnoj industriji svjedoči o našoj sposobnosti prilagodbe, inovaciji i kontinuiranom poboljšanju naših proizvoda i usluga.",
      description3: "Sa stabilnim temeljima iz 1936. godine, gradimo most između tradicije i suvremenosti, pružajući visokokvalitetne metalne proizvode koji zadovoljavaju i premašuju potrebe naših klijenata.",
      mission: {
        title: "Naša misija",
        description1: "Naša misija je pružiti vrhunsku vrijednost i zadovoljstvo našim kupcima kroz inovativne proizvode i usluge. Cilj nam je postati globalni lider u našoj industriji, nudeći najkvalitetnije proizvode i ispunjavajući potrebe naših kupaca diljem svijeta.",
        description2: "Inovacija, održivost i visoka kvalitetu naših proizvoda i usluga je naš moto."
      }
    },
    products: {
      title: "Naši proizvodi",
      reducers: {
        title: "Reduktori",
        description: "Standardni i specijalni reduktori za industrijske potrebe"
      },
      crushers: {
        title: "Drobilice",
        description: "Kvalitetne drobilice za različite industrijske aplikacije"
      },
      conveyors: {
        title: "Transporteri",
        description: "Pouzdani transporteri za transport materijala"
      },
      combined: {
        title: "Kombinovani uređaji",
        description: "Inovativni kombinovani uređaji za kompleksne procese"
      },
      steel: {
        title: "Čelična konstrukcija",
        description: "Robusne čelične konstrukcije za industrijske objekte"
      },
      specialized: {
        title: "Specijalizirana oprema",
        description: "Specijalizirana oprema prilagođena vašim potrebama"
      }
    },
    projects: {
      title: "Naši projekti",
      subtitle: "Uspješno završeni projekti koji svjedoče o našoj stručnosti",
      industrial: {
        title: "Industrijski projekti",
        description: "Kompleksni industrijski projekti u metalnoj industriji"
      },
      technological: {
        title: "Tehnološki projekti",
        description: "Inovativni tehnološki projekti i modernizacija"
      },
      construction: {
        title: "Konstrukcijski projekti",
        description: "Robusne čelične konstrukcije i objekti"
      }
    },
    quality: {
      title: "Poznati smo po kvaliteti naših proizvoda",
      subtitle: "Gradimo budućnost sa našim klijentima...",
      experience: {
        title: "Godina iskustva",
        description: "Neprekidno poslovanje od 1936. godine u metalnoj industriji"
      },
      quality: {
        title: "Vrhunska kvaliteta",
        description: "Poznati po visokoj kvaliteti proizvoda i pružanja izvrsnosti"
      },
      innovation: {
        title: "Inovacije",
        description: "Kontinuirano ulaganje u razvoj i poboljšanje proizvoda"
      }
    },
    news: {
      title: "Novosti",
      readMore: "Pročitajte više",
      openDay: {
        title: "TTU energetik organizovao Dan otvorenih vrata",
        description: "Uspješno smo organizovali Dan otvorenih vrata za sve zainteresirane...",
        category: "Dan otvorenih vrata",
        date: "19.11.2022"
      },
      audit: {
        title: "Program aktivnosti i mjera na provođenju preporuka finansijske revizije",
        description: "TTU energetik d.o.o. Tuzla za 2020. godinu koju je izvršio Ured za reviziju institucija FBiH",
        category: "Finansijska revizija",
        date: "19.05.2022"
      },
      business: {
        title: "Bivšem tuzlanskom gigantu vraća se stari sjaj",
        description: "TTU Energetik nastavlja poslovanje – 17.09.2018.",
        category: "Poslovanje",
        date: "18.09.2018"
      }
    },
    partners: {
      title: "Partneri",
      subtitle: "Partneri koji su nam dali povjerenje..."
    },
    contact: {
      title: "Kontaktirajte nas",
      subtitle: "Uvijek spremni da odgovorimo na vaše zahtjeve...",
      phone: "Telefon",
      email: "Email",
      address: "Adresa",
      addressLine1: "XVIII hrvatske brigade 25",
      addressLine2: "75000 Tuzla",
      fax: "+387 35 366 276 (Fax)"
    },
    footer: {
      description: "Lider u metalnoj industriji sa tradicijom od 1936 godine. Pružamo vrhunske proizvode i usluge našim klijentima.",
      quickLinks: "Brzi linkovi",
      followUs: "Pratite nas na društvenim mrežama",
      copyright: "© 2025 TTU Energetik. Sva prava zadržana. | Dizajn i izrada Floppy"
    },
    common: {
      learnMore: "Saznajte više",
      years: "87"
    }
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      products: "Products",
      projects: "Projects",
      news: "News",
      contact: "Contact"
    },
    hero: {
      title: "We produce for you since 1936",
      subtitle: "We can proudly say that we have been present in the metal industry since 1936, gaining rich experience and unsurpassed knowledge.",
      cta: "Learn More"
    },
    services: {
      title: "Our Services",
      welding: {
        title: "Welding Services",
        description: "Professional welding services for all types of metals and alloys"
      },
      machining: {
        title: "Mechanical Processing",
        description: "Precise mechanical processing of metals with the latest technology"
      },
      thermal: {
        title: "Thermal Treatment",
        description: "Specialized thermal treatment for improving metal properties"
      },
      vulcanization: {
        title: "Vulcanization",
        description: "Professional vulcanization services for industrial needs"
      },
      sandblasting: {
        title: "Sandblasting",
        description: "Quality sandblasting for surface preparation"
      },
      research: {
        title: "Research & Development",
        description: "Continuous research and development of new technologies"
      },
      electrical: {
        title: "Electrical Research & Design",
        description: "Specialized electrical services and design"
      }
    },
    about: {
      title: "About Us",
      description1: "With more than eight decades of business, our company has become synonymous with quality and reliability in the metal industry. Since our founding in 1936, we have continuously developed and adapted to remain relevant and competitive in the metal market.",
      description2: "Our long-term presence in the metal industry testifies to our ability to adapt, innovate and continuously improve our products and services.",
      description3: "With stable foundations from 1936, we build a bridge between tradition and modernity, providing high-quality metal products that meet and exceed our clients' needs.",
      mission: {
        title: "Our Mission",
        description1: "Our mission is to provide superior value and satisfaction to our customers through innovative products and services. Our goal is to become a global leader in our industry, offering the highest quality products and meeting the needs of our customers worldwide.",
        description2: "Innovation, sustainability and high quality of our products and services is our motto."
      }
    },
    products: {
      title: "Our Products",
      reducers: {
        title: "Reducers",
        description: "Standard and special reducers for industrial needs"
      },
      crushers: {
        title: "Crushers",
        description: "Quality crushers for various industrial applications"
      },
      conveyors: {
        title: "Conveyors",
        description: "Reliable conveyors for material transport"
      },
      combined: {
        title: "Combined Devices",
        description: "Innovative combined devices for complex processes"
      },
      steel: {
        title: "Steel Structures",
        description: "Robust steel structures for industrial facilities"
      },
      specialized: {
        title: "Specialized Equipment",
        description: "Specialized equipment adapted to your needs"
      }
    },
    projects: {
      title: "Our Projects",
      subtitle: "Successfully completed projects that testify to our expertise",
      industrial: {
        title: "Industrial Projects",
        description: "Complex industrial projects in the metal industry"
      },
      technological: {
        title: "Technological Projects",
        description: "Innovative technological projects and modernization"
      },
      construction: {
        title: "Construction Projects",
        description: "Robust steel structures and facilities"
      }
    },
    quality: {
      title: "We are known for the quality of our products",
      subtitle: "Building the future with our clients...",
      experience: {
        title: "Years of Experience",
        description: "Continuous operation since 1936 in the metal industry"
      },
      quality: {
        title: "Premium Quality",
        description: "Known for high quality products and excellence"
      },
      innovation: {
        title: "Innovation",
        description: "Continuous investment in development and product improvement"
      }
    },
    news: {
      title: "News",
      readMore: "Read More",
      openDay: {
        title: "TTU energetik organized Open Day",
        description: "We successfully organized Open Day for all interested parties...",
        category: "Open Day",
        date: "19.11.2022"
      },
      audit: {
        title: "Program of activities and measures for implementing audit recommendations",
        description: "TTU energetik d.o.o. Tuzla for 2020 conducted by the FBiH Audit Office",
        category: "Financial Audit",
        date: "19.05.2022"
      },
      business: {
        title: "Former Tuzla giant regains its old glory",
        description: "TTU Energetik continues operations – 17.09.2018.",
        category: "Business",
        date: "18.09.2018"
      }
    },
    partners: {
      title: "Partners",
      subtitle: "Partners who have given us their trust..."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Always ready to respond to your requests...",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressLine1: "XVIII hrvatske brigade 25",
      addressLine2: "75000 Tuzla",
      fax: "+387 35 366 276 (Fax)"
    },
    footer: {
      description: "Leader in the metal industry with tradition since 1936. We provide premium products and services to our clients.",
      quickLinks: "Quick Links",
      followUs: "Follow us on social media",
      copyright: "© 2025 TTU Energetik. All rights reserved. | Design and development by Floppy"
    },
    common: {
      learnMore: "Learn More",
      years: "87"
    }
  },
  de: {
    nav: {
      about: "Über uns",
      services: "Dienstleistungen",
      products: "Produkte",
      projects: "Projekte",
      news: "Nachrichten",
      contact: "Kontakt"
    },
    hero: {
      title: "Wir produzieren für Sie seit 1936",
      subtitle: "Wir können stolz sagen, dass wir seit 1936 in der Metallindustrie tätig sind und dabei reiche Erfahrung und unübertroffenes Wissen erworben haben.",
      cta: "Mehr erfahren"
    },
    services: {
      title: "Unsere Dienstleistungen",
      welding: {
        title: "Schweißdienstleistungen",
        description: "Professionelle Schweißdienstleistungen für alle Arten von Metallen und Legierungen"
      },
      machining: {
        title: "Mechanische Bearbeitung",
        description: "Präzise mechanische Bearbeitung von Metallen mit neuester Technologie"
      },
      thermal: {
        title: "Wärmebehandlung",
        description: "Spezialisierte Wärmebehandlung zur Verbesserung der Metalleigenschaften"
      },
      vulcanization: {
        title: "Vulkanisation",
        description: "Professionelle Vulkanisationsdienstleistungen für industrielle Bedürfnisse"
      },
      sandblasting: {
        title: "Sandstrahlen",
        description: "Qualitatives Sandstrahlen zur Oberflächenvorbereitung"
      },
      research: {
        title: "Forschung & Entwicklung",
        description: "Kontinuierliche Forschung und Entwicklung neuer Technologien"
      },
      electrical: {
        title: "Elektrische Forschung & Design",
        description: "Spezialisierte elektrische Dienstleistungen und Design"
      }
    },
    about: {
      title: "Über uns",
      description1: "Mit mehr als acht Jahrzehnten Geschäftstätigkeit ist unser Unternehmen zum Synonym für Qualität und Zuverlässigkeit in der Metallindustrie geworden. Seit unserer Gründung im Jahr 1936 haben wir uns kontinuierlich weiterentwickelt und angepasst, um relevant und wettbewerbsfähig im Metallmarkt zu bleiben.",
      description2: "Unsere langjährige Präsenz in der Metallindustrie zeugt von unserer Fähigkeit zur Anpassung, Innovation und kontinuierlichen Verbesserung unserer Produkte und Dienstleistungen.",
      description3: "Mit stabilen Grundlagen aus dem Jahr 1936 bauen wir eine Brücke zwischen Tradition und Moderne und bieten hochwertige Metallprodukte, die die Bedürfnisse unserer Kunden erfüllen und übertreffen.",
      mission: {
        title: "Unsere Mission",
        description1: "Unsere Mission ist es, unseren Kunden durch innovative Produkte und Dienstleistungen überlegenen Wert und Zufriedenheit zu bieten. Unser Ziel ist es, ein globaler Führer in unserer Branche zu werden und die hochwertigsten Produkte anzubieten und die Bedürfnisse unserer Kunden weltweit zu erfüllen.",
        description2: "Innovation, Nachhaltigkeit und hohe Qualität unserer Produkte und Dienstleistungen ist unser Motto."
      }
    },
    products: {
      title: "Unsere Produkte",
      reducers: {
        title: "Getriebe",
        description: "Standard- und Spezialgetriebe für industrielle Bedürfnisse"
      },
      crushers: {
        title: "Brecher",
        description: "Qualitätsbrecher für verschiedene industrielle Anwendungen"
      },
      conveyors: {
        title: "Förderer",
        description: "Zuverlässige Förderer für Materialtransport"
      },
      combined: {
        title: "Kombinierte Geräte",
        description: "Innovative kombinierte Geräte für komplexe Prozesse"
      },
      steel: {
        title: "Stahlkonstruktionen",
        description: "Robuste Stahlkonstruktionen für Industrieanlagen"
      },
      specialized: {
        title: "Spezialausrüstung",
        description: "Spezialausrüstung an Ihre Bedürfnisse angepasst"
      }
    },
    projects: {
      title: "Unsere Projekte",
      subtitle: "Erfolgreich abgeschlossene Projekte, die von unserer Expertise zeugen",
      industrial: {
        title: "Industrieprojekte",
        description: "Komplexe Industrieprojekte in der Metallindustrie"
      },
      technological: {
        title: "Technologieprojekte",
        description: "Innovative Technologieprojekte und Modernisierung"
      },
      construction: {
        title: "Bauprojekte",
        description: "Robuste Stahlkonstruktionen und Anlagen"
      }
    },
    quality: {
      title: "Wir sind bekannt für die Qualität unserer Produkte",
      subtitle: "Wir bauen die Zukunft mit unseren Kunden...",
      experience: {
        title: "Jahre Erfahrung",
        description: "Kontinuierlicher Betrieb seit 1936 in der Metallindustrie"
      },
      quality: {
        title: "Premium-Qualität",
        description: "Bekannt für hochwertige Produkte und Exzellenz"
      },
      innovation: {
        title: "Innovation",
        description: "Kontinuierliche Investitionen in Entwicklung und Produktverbesserung"
      }
    },
    news: {
      title: "Nachrichten",
      readMore: "Weiterlesen",
      openDay: {
        title: "TTU energetik organisierte Tag der offenen Tür",
        description: "Wir haben erfolgreich einen Tag der offenen Tür für alle Interessierten organisiert...",
        category: "Tag der offenen Tür",
        date: "19.11.2022"
      },
      audit: {
        title: "Programm für Aktivitäten und Maßnahmen zur Umsetzung von Prüfungsempfehlungen",
        description: "TTU energetik d.o.o. Tuzla für 2020 durchgeführt vom FBiH Prüfungsamt",
        category: "Finanzprüfung",
        date: "19.05.2022"
      },
      business: {
        title: "Ehemaliger Tuzla-Gigant erlangt seinen alten Glanz zurück",
        description: "TTU Energetik setzt Geschäftstätigkeit fort – 17.09.2018.",
        category: "Geschäft",
        date: "18.09.2018"
      }
    },
    partners: {
      title: "Partner",
      subtitle: "Partner, die uns ihr Vertrauen geschenkt haben..."
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Immer bereit, auf Ihre Anfragen zu reagieren...",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      addressLine1: "XVIII hrvatske brigade 25",
      addressLine2: "75000 Tuzla",
      fax: "+387 35 366 276 (Fax)"
    },
    footer: {
      description: "Führer in der Metallindustrie mit Tradition seit 1936. Wir bieten Premium-Produkte und Dienstleistungen für unsere Kunden.",
      quickLinks: "Schnelllinks",
      followUs: "Folgen Sie uns in sozialen Medien",
      copyright: "© 2025 TTU Energetik. Alle Rechte vorbehalten. | Design und Entwicklung von Floppy"
    },
    common: {
      learnMore: "Mehr erfahren",
      years: "87"
    }
  }
};
