import React, { useState, useEffect } from 'react';
import { FaBrain, FaRocket, FaLock, FaChartBar, FaStar, FaUsers, FaArrowRight, FaPlay, FaQuoteLeft, FaGlobe, FaDesktop, FaCamera, FaLightbulb, FaBolt, FaShieldAlt, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n configuration
const resources = {
  en: {
    translation: {
      nav: {
        about: "About Us",
        modules: "Modules",
        technology: "Technology", 
        usageAreas: "Usage Areas",
        contact: "Contact",
        accessPlatform: "GET STARTED"
      },
      loading: {
        title: "ASTROFACEMIX"
      },
      hero: {
        title: "ASTROFACEMIX",
        subtitle: "AI-Powered Personalized Experience Design",
        description: "Blending technology and creativity to craft extraordinary personal experiences.",
        requestConsultation: "EXPLORE EXPERIENCE",
        platformDemo: "REQUEST DEMO",
        stats: {
          accuracy: "Accuracy",
          performance: "Performance", 
          support: "Support"
        }
      },
      about: {
        title: "WHO WE ARE",
        description: "AstroFaceMix is a hybrid company that combines AI-powered software and event organization. We help brands build deep connections with their target audiences through data-driven, interactive and unforgettable experiences."
      },
      modules: {
        title: "CORE MODULES",
        astromix: {
          title: "ASTROMIX",
          description: "Provides 95% accurate personalized product and service recommendations by analyzing personality, energy and preferences through birth chart analysis."
        },
        facemix: {
          title: "FACEMIX",
          description: "Creates real-time personal recommendations by analyzing data such as age, mood, and style from your photo."
        }
      },
      corporateModules: {
        title: "CORPORATE MODULES",
        dnatest: {
          title: "DNA TEST",
          description: "Advanced genetic analysis platform for personalized health insights and research applications."
        },
        worklife: {
          title: "WORKLIFE",
          description: "AI-driven workforce optimization and productivity enhancement for maximum operational efficiency."
        },
        workstill: {
          title: "WORKSTILL",
          description: "Advanced automation platform for streamlined business processes and operational excellence."
        },
        companystars: {
          title: "COMPANY STARS",
          description: "Comprehensive employee performance analysis and talent optimization platform."
        },
        astrowork: {
          title: "ASTROWORK",
          description: "Astrological insights integrated with workplace dynamics for enhanced team collaboration and productivity."
        }
      },
      howItWorks: {
        title: "HOW IT WORKS",
        steps: [
          {
            number: "01",
            title: "User Login",
            description: "User enters the system with secure authentication."
          },
          {
            number: "02", 
            title: "Data Input",
            description: "Information or photos are entered into the system."
          },
          {
            number: "03",
            title: "AI Analysis",
            description: "Artificial intelligence analyzes the provided data."
          },
          {
            number: "04",
            title: "Personal Recommendation",
            description: "Personalized suggestions are generated based on analysis."
          },
          {
            number: "05",
            title: "Shareable Output",
            description: "Results are displayed on screen as shareable content."
          }
        ]
      },
      personalizedResults: {
        title: "PERSONALIZED RESULTS",
        subtitle: "See what we recommend and why",
        examples: [
          {
            type: "FaceMix Analysis",
            title: "Your Personalized Cocktail",
            recommendation: "Old Fashioned",
            category: "ALCOHOLIC - CLASSIC",
            description: "Classic and modern style, sophisticated and thoughtful personality match.",
            analysis: {
              ageRange: "30-35",
              gender: "Male",
              ethnicity: "Mediterranean", 
              style: "Classic and modern",
              colorPreference: "Yellow, White",
              accessories: "Calm, Clock",
              personality: "Thoughtful, Sophisticated, Calm",
              character: "Confident and calm",
              mood: "Calm and thoughtful"
            },
            whyTitle: "Why Old Fashioned for You?",
            whyDescription: "Classic and modern style, sophisticated and thoughtful personality match perfectly with Old Fashioned cocktail. This cocktail, with its simple yet elegant presentation, reflects your calm and confident character in both style and flavor.",
            ingredients: ["50ml White Rum", "100ml Fresh Grapefruit Juice", "20ml Pomegranate Syrup", "10ml Blue Curacao", "50ml Soda", "Ice Cubes", "Fresh Mint Leaves", "Grapefruit Slice"],
            shareText: "Share Your Result"
          },
          {
            type: "AstroMix Cosmic",
            title: "Your Cosmic Cocktail Prediction", 
            recommendation: "Aquarius Lightness",
            category: "NON-ALCOHOLIC - INNOVATIVE",
            description: "Being an Aquarius indicates an innovative and unique personality.",
            analysis: {
              sunSign: "Aquarius",
              element: "Air",
              planet: "Uranus",
              traits: "Innovative, Independent, Unique"
            },
            whyTitle: "Astrological Compatibility",
            whyDescription: "Being an Aquarius, this cocktail reflects your characteristic features by bringing extraordinary tastes and colors together. The cocktail's bright colors and unusual taste outside the ordinary symbolize Aquarius' desire to be different.",
            ingredients: ["50ml White Rum", "100ml Fresh Grapefruit Juice", "20ml Pomegranate Syrup", "10ml Blue Curacao", "50ml Soda", "Ice Cubes"],
            shareText: "Share Your Cosmic Result"
          },
          {
            type: "Lifestyle Recommendation",
            title: "Your Perfect Vacation",
            recommendation: "Santorini Wellness Retreat",
            category: "TRAVEL - LUXURY",
            description: "Mediterranean luxury combined with wellness and relaxation.",
            analysis: {
              lifestyle: "Sophisticated",
              interests: "Wellness, Culture, Luxury",
              budget: "Premium",
              travelStyle: "Relaxation focused"
            },
            whyTitle: "Perfect Match for You",
            whyDescription: "Based on your sophisticated taste and preference for quality experiences, Santorini offers the perfect blend of luxury, culture, and wellness that aligns with your personality.",
            features: ["5-Star Resort", "Spa Treatments", "Cultural Tours", "Fine Dining", "Sunset Views"],
            shareText: "Share Your Travel Recommendation"
          }
        ]
      },
      kioskTechnology: {
        title: "KIOSK TECHNOLOGY",
        subtitle: "Advanced interactive kiosks for seamless user experience",
        description: "Modern kiosks with LED lighting, integrated 43\" touchscreen, full-body or group photo support with integrated camera, durable design and real-time data processing for user-friendly interaction.",
        features: [
          {
            title: "LED Lighting System",
            description: "Professional LED lighting for optimal photo quality"
          },
          {
            title: "43\" Touchscreen",
            description: "Large interactive display for easy navigation"
          },
          {
            title: "Integrated Camera",
            description: "High-quality camera for individual and group photos"
          },
          {
            title: "Real-time Processing",
            description: "Instant AI analysis and personalized recommendations"
          },
          {
            title: "Durable Design",
            description: "Built to withstand high-traffic environments"
          },
          {
            title: "User-friendly Interface",
            description: "Intuitive design for all age groups"
          }
        ]
      },
      whyUs: {
        title: "WHY US",
        subtitle: "Revolutionizing brand experiences by combining technology, creativity and personalization",
        description: "We create extraordinary brand experiences that connect with your target audience through innovative technology and creative solutions.",
        features: [
          {
            title: "Brand-Specific Integration",
            description: "Custom solutions tailored to your brand identity and business objectives"
          },
          {
            title: "Visual & Emotional Impact",
            description: "Creating memorable experiences that resonate emotionally with your audience"
          },
          {
            title: "Customizable Results",
            description: "Flexible outputs that can be adapted to different campaigns and objectives"
          },
          {
            title: "Social Media Compatible",
            description: "Shareable content optimized for all social media platforms"
          }
        ]
      },
      capabilities: {
        title: "CORE CAPABILITIES",
        description: "Advanced artificial intelligence solutions designed for maximum enterprise impact",
        features: {
          analytics: {
            title: "Advanced Analytics",
            description: "Deep learning algorithms for complex data analysis and predictive insights."
          },
          performance: {
            title: "Performance Engine", 
            description: "Ultra-high-speed processing with enterprise-grade scalability."
          },
          security: {
            title: "Security Framework",
            description: "Military-grade security protocols and data protection standards."
          },
          intelligence: {
            title: "Business Intelligence",
            description: "Real-time analytics and strategic business decision support."
          }
        }
      },
      usageAreas: {
        title: "USAGE AREAS",
        subtitle: "Versatile solutions for every industry and experience",
        description: "Our AI-powered personalization technology adapts to various environments and creates unique experiences for different sectors.",
        areas: [
          {
            title: "Festivals & Concerts",
            description: "Interactive experiences that connect artists with audiences through personalized content and memorable moments"
          },
          {
            title: "Lounges & Bars",
            description: "Personalized drink recommendations and social experiences that enhance customer engagement"
          },
          {
            title: "Office & Corporate Spaces",
            description: "Employee engagement solutions and corporate event experiences that boost team morale"
          },
          {
            title: "Retail Experiences",
            description: "Personalized shopping experiences and product recommendations that drive customer satisfaction"
          },
          {
            title: "Private Events",
            description: "Customized experiences for weddings, parties, and special celebrations that create lasting memories"
          },
          {
            title: "QR Menu Integration",
            description: "Smart menu systems with personalized recommendations based on preferences and dietary needs"
          }
        ]
      },
      enterprise: {
        title: "ENTERPRISE SOLUTIONS",
        description: "Comprehensive AI-powered solutions tailored for enterprise excellence",
        learnMore: "Learn More",
        solutions: {
          astromix: {
            title: "ASTROMIX",
            subtitle: "Advanced Pattern Recognition",
            description: "Sophisticated algorithmic analysis for complex data pattern identification and business intelligence.",
            features: ["Deep Learning Models", "Predictive Analytics", "Real-time Processing"]
          },
          facemix: {
            title: "FACEMIX", 
            subtitle: "Visual Intelligence System",
            description: "Enterprise-grade visual recognition and analysis platform for advanced security and identification.",
            features: ["Biometric Authentication", "Security Integration", "Access Control"]
          },
          worklife: {
            title: "WORKLIFE",
            subtitle: "Productivity Intelligence", 
            description: "AI-driven workforce optimization and productivity enhancement for maximum operational efficiency.",
            features: ["Performance Analytics", "Resource Optimization", "Workflow Intelligence"]
          },
          workstill: {
            title: "WORKSTILL",
            subtitle: "Process Automation",
            description: "Advanced automation platform for streamlined business processes and operational excellence.",
            features: ["Automated Workflows", "Process Intelligence", "Efficiency Optimization"]
          },
          dnatest: {
            title: "DNA TEST",
            subtitle: "Genetic Analytics Platform",
            description: "Sophisticated genetic analysis and personalized insights for healthcare and research applications.",
            features: ["Genetic Sequencing", "Health Analytics", "Research Integration"]
          },
          companystars: {
            title: "COMPANY STARS",
            subtitle: "Performance Evaluation", 
            description: "Comprehensive employee performance analysis and talent optimization platform.",
            features: ["Performance Metrics", "Talent Analytics", "Growth Tracking"]
          }
        }
      },
      testimonials: {
        title: "CLIENT TESTIMONIALS",
        description: "Trusted by leading enterprises worldwide",
        items: [
          {
            text: "This AI platform transformed our enterprise operations completely. Exceptional results.",
            author: "Michael Chen",
            position: "CEO, Fortune 500 Company",
            company: "TechCorp Industries"
          },
          {
            text: "The most sophisticated AI solution we've ever implemented. Incredible ROI.",
            author: "Sarah Johnson", 
            position: "CTO, Global Enterprises",
            company: "DataTech Solutions"
          },
          {
            text: "Revolutionary technology that exceeds all expectations. Outstanding performance.",
            author: "David Rodriguez",
            position: "Director of Innovation", 
            company: "FutureVision Corp"
          }
        ]
      },
      contact: {
        title: "GET IN TOUCH WITH US",
        subtitle: "A curious idea? A custom event? Let's bring intelligent experiences to life together.",
        form: {
          name: "Your Name",
          email: "Email Address",
          phone: "Phone Number",
          message: "Tell us about your project",
          submit: "Send Message"
        },
        directContact: {
          title: "Direct Contact",
          phone: "Call Us",
          whatsapp: "WhatsApp",
          email: "Email Us"
        }
      },
      footer: {
        title: "ASTROFACEMIX",
        description: "AI-powered personalized experience design platform that helps brands create unforgettable connections with their audiences.",
        modules: {
          title: "MODULES",
          items: ["AstroMix", "FaceMix", "DNA Test", "WorkLife", "Company Stars"]
        },
        services: {
          title: "SERVICES", 
          items: ["Event Organization", "Kiosk Technology", "Brand Integration", "Custom Solutions"]
        },
        contact: {
          title: "CONTACT",
          phone: "+90 539 226 05 05",
          email: "info@astrofacemix.com",
          whatsapp: "WhatsApp"
        },
        copyright: "© 2024 AstroFaceMix. All rights reserved. AI-Powered Experience Design.",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
      }
    }
  },
  tr: {
    translation: {
      nav: {
        about: "Hakkımızda",
        modules: "Modüller",
        technology: "Teknoloji", 
        usageAreas: "Kullanım Alanları",
        contact: "İletişim",
        accessPlatform: "BAŞLAYALIM"
      },
      loading: {
        title: "ASTROFACEMIX"
      },
      hero: {
        title: "ASTROFACEMIX",
        subtitle: "Yapay Zeka ile Kişiselleştirilmiş Deneyim Tasarımı",
        description: "Blending technology and creativity to craft extraordinary personal experiences.",
        requestConsultation: "DENEYİMİ KEŞFET",
        platformDemo: "DEMO TALEP ET",
        stats: {
          accuracy: "Doğruluk",
          performance: "Performans",
          support: "Destek"
        }
      },
      about: {
        title: "BİZ KİMİZ",
        description: "AstroFaceMix, yapay zeka destekli yazılım ve etkinlik organizasyonunu birleştiren hibrit bir şirkettir. Markaların veri destekli, interaktif ve unutulmaz deneyimler aracılığıyla hedef kitleleriyle derin bağlar kurmasına yardımcı oluyoruz."
      },
      modules: {
        title: "TEMEL MODÜLLER",
        astromix: {
          title: "ASTROMIX",
          description: "Doğum haritası analiziyle kişilik, enerji ve tercihleri anlamlandırarak %95 doğrulukla kişiselleştirilmiş ürün ve hizmet önerisi sunar."
        },
        facemix: {
          title: "FACEMIX",
          description: "Fotoğrafınızdan yaş, ruh hali, stil gibi veriler analiz edilerek gerçek zamanlı kişisel öneriler oluşturur."
        }
      },
      corporateModules: {
        title: "KURUMSAL MODÜLLER",
        dnatest: {
          title: "DNA TEST",
          description: "Kişiselleştirilmiş sağlık içgörüleri ve araştırma uygulamaları için gelişmiş genetik analiz platformu."
        },
        worklife: {
          title: "WORKLIFE",
          description: "Maksimum operasyonel verimlilik için yapay zeka destekli işgücü optimizasyonu ve verimlilik artırımı."
        },
        workstill: {
          title: "WORKSTILL",
          description: "Akıcı iş süreçleri ve operasyonel mükemmellik için gelişmiş otomasyon platformu."
        },
        companystars: {
          title: "COMPANY STARS",
          description: "Kapsamlı çalışan performans analizi ve yetenek optimizasyon platformu."
        },
        astrowork: {
          title: "ASTROWORK",
          description: "Gelişmiş takım işbirliği ve verimlilik için astrolojik içgörülerin işyeri dinamikleriyle entegrasyonu."
        }
      },
      howItWorks: {
        title: "NASIL ÇALIŞIR",
        steps: [
          {
            number: "01",
            title: "Kullanıcı Girişi",
            description: "Kullanıcı güvenli kimlik doğrulama ile sisteme girer."
          },
          {
            number: "02", 
            title: "Bilgi Girişi",
            description: "Bilgi veya fotoğraf gibi veriler sisteme girilir."
          },
          {
            number: "03",
            title: "AI Analizi",
            description: "Yapay zeka sağlanan verileri analiz eder."
          },
          {
            number: "04",
            title: "Kişisel Öneri",
            description: "Analiz sonucunda kişiselleştirilmiş öneriler oluşturulur."
          },
          {
            number: "05",
            title: "Paylaşılabilir Çıktı",
            description: "Sonuçlar ekranda paylaşılabilir içerik olarak görüntülenir."
          }
        ]
      },
      personalizedResults: {
        title: "KİŞİSELLEŞTİRİLMİŞ SONUÇLAR",
        subtitle: "Ne önerdiğimizi ve neden önerdiğimizi görün",
        examples: [
          {
            type: "FaceMix Analizi",
            title: "Kişiselleştirilmiş Kokteyliniz",
            recommendation: "Old Fashioned",
            category: "ALKOLİK - KLASİK",
            description: "Klasik ve modern tarz, sofistike ve düşünceli kişilik uyumu.",
            analysis: {
              ageRange: "30-35",
              gender: "Erkek",
              ethnicity: "Akdeniz",
              style: "Klasik ve modern",
              colorPreference: "Sarı, Beyaz",
              accessories: "Sakin, Saat",
              personality: "Düşünceli, Sofistike, Sakin",
              character: "Kendinden emin ve sakin",
              mood: "Sakin ve düşünceli"
            },
            whyTitle: "Neden Muhammed için Bu Kokteyl?",
            whyDescription: "Klasik ve modern tarzınız, sofistike ve düşünceli kişiliğinizle Old Fashioned kokteyliyle mükemmel bir uyum sağlar. Bu kokteyl, sade ve zarif sunumuyla, hem stil hem de lezzet açısından sakin ve kendinden emin karakterinizi yansıtır.",
            ingredients: ["50ml Beyaz Rom", "100ml Taze Greyfurt Suyu", "20ml Nar Şurubu", "10ml Mavi Curacao", "50ml Soda", "Buz Küpleri", "Taze Nane Yaprakları", "Greyfurt Dilimi"],
            shareText: "Sonucunuzu Paylaşın"
          },
          {
            type: "AstroMix Kozmik",
            title: "Kozmik Kokteyl Tahmininiz",
            recommendation: "Kova Işıltısı", 
            category: "ALKOLSİZ - YENİLİKÇİ",
            description: "Kova burcunda olması, yenilikçi ve özgün bir kişiliğe işaret eder.",
            analysis: {
              sunSign: "Kova",
              element: "Hava",
              planet: "Uranüs",
              traits: "Yenilikçi, Bağımsız, Özgün"
            },
            whyTitle: "Astrolojik Uyum",
            whyDescription: "Kova burcu olmanız, bu kokteylin sıra dışı tatları ve renkleri bir araya getirerek karakteristik özelliklerinizi yansıtır. Kokteylin parlak renkleri ve sıradanın dışındaki alışılmışın dışındaki tadı, Kova'nın farklı olma arzusunu simgeler.",
            ingredients: ["50ml Beyaz Rom", "100ml Taze Greyfurt Suyu", "20ml Nar Şurubu", "10ml Mavi Curacao", "50ml Soda", "Buz Küpleri"],
            shareText: "Kozmik Sonucunuzu Paylaşın"
          },
          {
            type: "Yaşam Tarzı Önerisi",
            title: "Mükemmel Tatiliniz",
            recommendation: "Santorini Wellness Retreat",
            category: "SEYAHAT - LÜKS",
            description: "Akdeniz lüksü wellness ve rahatlama ile birleşiyor.",
            analysis: {
              lifestyle: "Sofistike",
              interests: "Wellness, Kültür, Lüks",
              budget: "Premium",
              travelStyle: "Rahatlama odaklı"
            },
            whyTitle: "Size Mükemmel Uyum",
            whyDescription: "Sofistike zevkiniz ve kaliteli deneyim tercihinize dayanarak, Santorini kişiliğinizle uyumlu mükemmel lüks, kültür ve wellness karışımı sunuyor.",
            features: ["5 Yıldızlı Resort", "Spa Tedavileri", "Kültür Turları", "Fine Dining", "Gün Batımı Manzaraları"],
            shareText: "Seyahat Önerinizi Paylaşın"
          }
        ]
      },
      kioskTechnology: {
        title: "KIOSK TEKNOLOJİSİ",
        subtitle: "Sorunsuz kullanıcı deneyimi için gelişmiş interaktif kiosklar",
        description: "LED ışıklı, entegre 43\" dokunmatik ekran, tam boy veya grupça fotoğraf çekim desteği veren entegre kamera, dayanıklı tasarım ve gerçek zamanlı veri işleme ile kullanıcı dostu etkileşim sunan modern kiosklar.",
        features: [
          {
            title: "LED Işık Sistemi",
            description: "Optimal fotoğraf kalitesi için profesyonel LED aydınlatma"
          },
          {
            title: "43\" Dokunmatik Ekran",
            description: "Kolay navigasyon için büyük interaktif ekran"
          },
          {
            title: "Entegre Kamera",
            description: "Bireysel ve grup fotoğrafları için yüksek kaliteli kamera"
          },
          {
            title: "Gerçek Zamanlı İşleme",
            description: "Anında AI analizi ve kişiselleştirilmiş öneriler"
          },
          {
            title: "Dayanıklı Tasarım",
            description: "Yoğun trafikli ortamlara dayanacak şekilde inşa edilmiş"
          },
          {
            title: "Kullanıcı Dostu Arayüz",
            description: "Tüm yaş grupları için sezgisel tasarım"
          }
        ]
      },
      whyUs: {
        title: "NEDEN BİZ",
        subtitle: "Teknoloji, yaratıcılık ve kişiselleştirmeyi birleştirerek marka deneyimlerinde devrim yaratıyoruz",
        description: "İnovatif teknoloji ve yaratıcı çözümlerle hedef kitlenizle bağlantı kuran olağanüstü marka deneyimleri yaratıyoruz.",
        features: [
          {
            title: "Markanıza Özel Entegrasyon",
            description: "Marka kimliğiniz ve iş hedeflerinize özel olarak tasarlanmış çözümler"
          },
          {
            title: "Görsel ve Duygusal Etki",
            description: "Hedef kitlenizle duygusal bağ kuran unutulmaz deneyimler yaratma"
          },
          {
            title: "Özelleştirilebilir Sonuçlar",
            description: "Farklı kampanya ve hedeflere uyarlanabilen esnek çıktılar"
          },
          {
            title: "Sosyal Medya Uyumlu",
            description: "Tüm sosyal medya platformları için optimize edilmiş paylaşılabilir içerik"
          }
        ]
      },
      capabilities: {
        title: "TEMEL YETENEKLER",
        description: "Maksimum kurumsal etki için tasarlanmış gelişmiş yapay zeka çözümleri",
        features: {
          analytics: {
            title: "Gelişmiş Analitik",
            description: "Karmaşık veri analizi ve tahmine dayalı içgörüler için derin öğrenme algoritmaları."
          },
          performance: {
            title: "Performans Motoru",
            description: "Kurumsal düzeyde ölçeklenebilirlik ile ultra-yüksek hızlı işleme."
          },
          security: {
            title: "Güvenlik Çerçevesi", 
            description: "Askeri düzeyde güvenlik protokolleri ve veri koruma standartları."
          },
          intelligence: {
            title: "İş Zekası",
            description: "Gerçek zamanlı analitik ve stratejik iş kararı desteği."
          }
        }
      },
      usageAreas: {
        title: "KULLANIM ALANLARI",
        subtitle: "Her sektör ve deneyim için çok yönlü çözümler",
        description: "Yapay zeka destekli kişiselleştirme teknolojimiz çeşitli ortamlara uyum sağlar ve farklı sektörler için benzersiz deneyimler yaratır.",
        areas: [
          {
            title: "Festival ve Konserler",
            description: "Sanatçıları izleyicilerle kişiselleştirilmiş içerik ve unutulmaz anlar aracılığıyla buluşturan interaktif deneyimler"
          },
          {
            title: "Lounge ve Barlar",
            description: "Müşteri etkileşimini artıran kişiselleştirilmiş içecek önerileri ve sosyal deneyimler"
          },
          {
            title: "Ofis ve Kurumsal Alanlar",
            description: "Takım moralini artıran çalışan katılım çözümleri ve kurumsal etkinlik deneyimleri"
          },
          {
            title: "Perakende Deneyimleri",
            description: "Müşteri memnuniyetini artıran kişiselleştirilmiş alışveriş deneyimleri ve ürün önerileri"
          },
          {
            title: "Özel Etkinlikler",
            description: "Düğünler, partiler ve özel kutlamalar için kalıcı anılar yaratan özelleştirilmiş deneyimler"
          },
          {
            title: "QR Menü Entegrasyonu",
            description: "Tercihler ve diyet ihtiyaçlarına dayalı kişiselleştirilmiş önerilerle akıllı menü sistemleri"
          }
        ]
      },
      enterprise: {
        title: "KURUMSAL ÇÖZÜMLER",
        description: "Kurumsal mükemmellik için özel olarak tasarlanmış kapsamlı yapay zeka destekli çözümler",
        learnMore: "Daha Fazla Bilgi",
        solutions: {
          astromix: {
            title: "ASTROMIX",
            subtitle: "Gelişmiş Desen Tanıma",
            description: "Karmaşık veri deseni tanımlama ve iş zekası için sofistike algoritmik analiz.",
            features: ["Derin Öğrenme Modelleri", "Tahmine Dayalı Analitik", "Gerçek Zamanlı İşleme"]
          },
          facemix: {
            title: "FACEMIX",
            subtitle: "Görsel Zeka Sistemi", 
            description: "Gelişmiş güvenlik ve kimlik tespiti için kurumsal düzeyde görsel tanıma ve analiz platformu.",
            features: ["Biyometrik Kimlik Doğrulama", "Güvenlik Entegrasyonu", "Erişim Kontrolü"]
          },
          worklife: {
            title: "WORKLIFE",
            subtitle: "Verimlilik Zekası",
            description: "Maksimum operasyonel verimlilik için yapay zeka destekli işgücü optimizasyonu ve verimlilik artırımı.",
            features: ["Performans Analitiği", "Kaynak Optimizasyonu", "İş Akışı Zekası"]
          },
          workstill: {
            title: "WORKSTILL", 
            subtitle: "Süreç Otomasyonu",
            description: "Akıcı iş süreçleri ve operasyonel mükemmellik için gelişmiş otomasyon platformu.",
            features: ["Otomatik İş Akışları", "Süreç Zekası", "Verimlilik Optimizasyonu"]
          },
          dnatest: {
            title: "DNA TEST",
            subtitle: "Genetik Analitik Platformu",
            description: "Sağlık ve araştırma uygulamaları için sofistike genetik analiz ve kişiselleştirilmiş içgörüler.",
            features: ["Genetik Dizileme", "Sağlık Analitiği", "Araştırma Entegrasyonu"]
          },
          companystars: {
            title: "ŞİRKET YILDIZLARI",
            subtitle: "Performans Değerlendirme",
            description: "Kapsamlı çalışan performans analizi ve yetenek optimizasyon platformu.",
            features: ["Performans Metrikleri", "Yetenek Analitiği", "Büyüme Takibi"]
          }
        }
      },
      testimonials: {
        title: "MÜŞTERİ GÖRÜŞLERİ",
        description: "Dünya çapında önde gelen kurumlar tarafından güvenilir",
        items: [
          {
            text: "Bu yapay zeka platformu kurumsal operasyonlarımızı tamamen dönüştürdü. Olağanüstü sonuçlar.",
            author: "Mehmet Çelik",
            position: "Genel Müdür, Fortune 500 Şirketi",
            company: "TeknoKorp Endüstrileri"
          },
          {
            text: "Şimdiye kadar uyguladığımız en gelişmiş yapay zeka çözümü. İnanılmaz yatırım getirisi.",
            author: "Ayşe Yılmaz",
            position: "CTO, Global Kurumsal",
            company: "VeriTek Çözümleri"
          },
          {
            text: "Tüm beklentileri aşan devrimci teknoloji. Üstün performans.",
            author: "Ali Demir",
            position: "İnovasyon Direktörü",
            company: "GelecekVizyon Corp"
          }
        ]
      },
      contact: {
        title: "BİZİMLE İLETİŞİME GEÇİN",
        subtitle: "Merak ettiğiniz bir fikir? Özel bir etkinlik? Akıllı deneyimleri birlikte hayata geçirelim.",
        form: {
          name: "Adınız Soyadınız",
          email: "E-posta Adresiniz",
          phone: "Telefon Numaranız",
          message: "Projeniz hakkında bize anlatın",
          submit: "Mesaj Gönder"
        },
        directContact: {
          title: "Direkt İletişim",
          phone: "Bizi Arayın",
          whatsapp: "WhatsApp",
          email: "E-posta Gönderin"
        }
      },
      footer: {
        title: "ASTROFACEMIX",
        description: "Markaların hedef kitleleriyle unutulmaz bağlar kurmasına yardımcı olan yapay zeka destekli kişiselleştirilmiş deneyim tasarım platformu.",
        modules: {
          title: "MODÜLLER",
          items: ["AstroMix", "FaceMix", "DNA Test", "WorkLife", "Company Stars"]
        },
        services: {
          title: "HİZMETLER",
          items: ["Etkinlik Organizasyonu", "Kiosk Teknolojisi", "Marka Entegrasyonu", "Özel Çözümler"]
        },
        contact: {
          title: "İLETİŞİM",
          phone: "+90 539 226 05 05",
          email: "info@astrofacemix.com",
          whatsapp: "WhatsApp"
        },
        copyright: "© 2024 AstroFaceMix. Tüm hakları saklıdır. Yapay Zeka Destekli Deneyim Tasarımı.",
        links: ["Gizlilik Politikası", "Hizmet Şartları", "Çerez Politikası"]
      }
    }
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

function App() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const currentLanguage = i18n.language;
  
  // Language switcher function
  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Ultra-Pure Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // Minimalist Floating Particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1 + 0.5,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  // Get testimonials from translation
  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    text: string;
    author: string;
    position: string;
    company: string;
  }>;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [testimonials.length]);



  if (loading) {
  return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Ultra-Minimal Loading Animation */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8"
          >
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-white rounded-full relative">
                  <motion.div
                className="absolute inset-2 border-2 border-t-transparent border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
                </div>
          </motion.div>
          
                    <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-light text-white mb-4 tracking-widest"
          >
            {t('loading.title')}
                    </motion.h1>
          
                    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-1"
          >
            {[0, 1, 2].map((i) => (
                  <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
                  </motion.div>
                </div>
              </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Minimal Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
              </div>

      {/* Pure Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
                  <motion.div
              className="text-xl font-bold tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              {t('loading.title')}
                  </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: 'about', href: '#about' },
                { key: 'modules', href: '#modules' },
                { key: 'technology', href: '#kiosk' },
                { key: 'usageAreas', href: '#usage-areas' },
                { key: 'contact', href: '#contact' }
              ].map((item) => (
                      <motion.a
                  key={item.key}
                        href={item.href}
                  className="text-sm font-medium tracking-wide hover:text-white/70 transition-colors"
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                      >
                  {t(`nav.${item.key}`)}
                      </motion.a>
                  ))}
                </div>
            
                      <div className="flex items-center space-x-4">
              {/* Language Switcher */}
                      <motion.button
                onClick={toggleLanguage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                className="flex items-center px-3 py-2 border border-white/30 text-white hover:border-white transition-all duration-300 text-sm font-medium tracking-wide"
                      >
                <FaGlobe className="mr-2" />
                {currentLanguage.toUpperCase()}
                      </motion.button>
                    </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Ultimate Minimalism */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-extralight mb-6 tracking-wider leading-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {t('hero.title')}
              <br />
              <span className="text-2xl md:text-3xl font-light">{t('hero.subtitle')}</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
                      <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                        whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black border-2 border-white text-white font-medium tracking-wider transition-all duration-300 group"
              onClick={() => {
                // Smooth scroll to contact section or show contact modal
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  alert(t('hero.requestConsultation') + ' - Contact: info@astrofacemix.com');
                }
              }}
            >
              <span className="flex items-center">
                {t('hero.requestConsultation')}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
                      </motion.button>
            
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-white border border-white/30 hover:border-white transition-all duration-300 group"
              onClick={() => {
                // Send demo request via WhatsApp
                const demoMessage = encodeURIComponent('Merhaba! AstroFaceMix platformu için demo talep etmek istiyorum. Detaylı bilgi alabilir miyim?');
                window.open(`https://wa.me/905392260505?text=${demoMessage}`, '_blank');
              }}
            >
              <span className="flex items-center">
                <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                {t('hero.platformDemo')}
              </span>
                      </motion.button>
                  </motion.div>

          {/* Minimal Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { value: '99.9%', key: 'accuracy' },
              { value: '10x', key: 'performance' },
              { value: '24/7', key: 'support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 tracking-wide">{t(`hero.stats.${stat.key}`)}</div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section - Who We Are */}
      <section className="py-24 bg-white text-black relative" id="about">
        <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-8 tracking-wider text-black">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl text-black/80 leading-relaxed font-light max-w-3xl mx-auto">
              {t('about.description')}
            </p>
                    </motion.div>
                </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 relative" id="modules">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('modules.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* AstroMix Module */}
            <motion.div
              className="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaStar className="w-12 h-12 mx-auto text-white group-hover:text-white/80 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-medium mb-4 tracking-wider">{t('modules.astromix.title')}</h3>
              <p className="text-white/80 leading-relaxed font-light">{t('modules.astromix.description')}</p>
            </motion.div>

            {/* FaceMix Module */}
            <motion.div
              className="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaUsers className="w-12 h-12 mx-auto text-white group-hover:text-white/80 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-medium mb-4 tracking-wider">{t('modules.facemix.title')}</h3>
              <p className="text-white/80 leading-relaxed font-light">{t('modules.facemix.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Modules Section */}
      <section className="py-24 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider text-black">
              {t('corporateModules.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DNA Test */}
            <motion.div
              className="text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaBrain className="w-10 h-10 mx-auto text-black group-hover:text-black/70 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-medium mb-4 tracking-wider">{t('corporateModules.dnatest.title')}</h3>
              <p className="text-black/80 text-sm leading-relaxed font-light">{t('corporateModules.dnatest.description')}</p>
            </motion.div>

            {/* WorkLife */}
            <motion.div
              className="text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaRocket className="w-10 h-10 mx-auto text-black group-hover:text-black/70 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-medium mb-4 tracking-wider">{t('corporateModules.worklife.title')}</h3>
              <p className="text-black/80 text-sm leading-relaxed font-light">{t('corporateModules.worklife.description')}</p>
            </motion.div>

            {/* WorkStill */}
            <motion.div
              className="text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLock className="w-10 h-10 mx-auto text-black group-hover:text-black/70 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-medium mb-4 tracking-wider">{t('corporateModules.workstill.title')}</h3>
              <p className="text-black/80 text-sm leading-relaxed font-light">{t('corporateModules.workstill.description')}</p>
            </motion.div>

            {/* Company Stars */}
            <motion.div
              className="text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaChartBar className="w-10 h-10 mx-auto text-black group-hover:text-black/70 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-medium mb-4 tracking-wider">{t('corporateModules.companystars.title')}</h3>
              <p className="text-black/80 text-sm leading-relaxed font-light">{t('corporateModules.companystars.description')}</p>
            </motion.div>

            {/* AstroWork */}
            <motion.div
              className="text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-500 group md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaStar className="w-10 h-10 mx-auto text-black group-hover:text-black/70 transition-colors" />
              </motion.div>
              <h3 className="text-xl font-medium mb-4 tracking-wider">{t('corporateModules.astrowork.title')}</h3>
              <p className="text-black/80 text-sm leading-relaxed font-light">{t('corporateModules.astrowork.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('howItWorks.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {(t('howItWorks.steps', { returnObjects: true }) as Array<{
              number: string;
              title: string;
              description: string;
            }>).map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 border-2 border-white/30 rounded-full flex items-center justify-center text-xl font-light tracking-wider"
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.6)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                
                {/* Connecting Line (except for last item) */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20 -z-10">
                    <motion.div
                      className="h-full bg-white/40"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                )}
                
                {/* Step Content */}
                <h3 className="text-lg font-medium mb-3 tracking-wide">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Personalized Results Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('personalizedResults.title')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
              {t('personalizedResults.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-16">
            {(t('personalizedResults.examples', { returnObjects: true }) as Array<{
              type: string;
              title: string;
              recommendation: string;
              category: string;
              description: string;
              analysis?: any;
              whyTitle: string;
              whyDescription: string;
              ingredients?: string[];
              features?: string[];
              shareText: string;
            }>).map((example, index) => (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Product Visual */}
                <motion.div
                  className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-full h-80 rounded-2xl border border-white/20 relative overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        {index === 0 && (
                          <img 
                            src="/images/negroni.jpg" 
                            alt="Old Fashioned Cocktail"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 1 && (
                          <img 
                            src="/images/kova_isiltisi.jpg" 
                            alt="Kova Işıltısı - Aquarius Lightness Cocktail"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 2 && (
                          <img 
                            src="/images/santorini_wellness.jpg" 
                            alt="Santorini Wellness Retreat - Mükemmel Tatiliniz"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 mx-auto flex items-center justify-center border border-white/30">
                            {index === 0 && <FaStar className="w-12 h-12 text-white" />}
                            {index === 1 && <FaGlobe className="w-12 h-12 text-white" />}
                            {index === 2 && <FaRocket className="w-12 h-12 text-white" />}
                          </div>
                          <div className="text-2xl font-light mb-2 text-white drop-shadow-lg">{example.recommendation}</div>
                          <div className="text-sm text-white/80 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">{example.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="mb-6">
                    <div className="text-sm text-white/60 mb-2 tracking-wide">{example.type}</div>
                    <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">{example.title}</h3>
                    <p className="text-white/80 leading-relaxed">{example.description}</p>
                  </div>

                  {/* Key Analysis Points */}
                  {example.analysis && (
                    <div className="mb-6 p-6 border border-white/20 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Analiz Sonuçları</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(example.analysis).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                            <span className="text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-white font-medium">{Array.isArray(value) ? value.join(', ') : String(value)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Why This Matches */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-3">{example.whyTitle}</h4>
                    <p className="text-white/80 leading-relaxed">{example.whyDescription}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-black border-2 border-white text-white font-medium tracking-wider transition-all duration-300 group"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: example.title,
                            text: `${example.recommendation} - ${example.description}`,
                            url: window.location.href
                          });
                        } else {
                          navigator.clipboard.writeText(`${example.title}: ${example.recommendation} - ${example.description}`);
                          alert('Sonuç panoya kopyalandı!');
                        }
                      }}
                    >
                      <span className="flex items-center">
                        <FaGlobe className="mr-2" />
                        {example.shareText}
                      </span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 text-white border border-white/30 hover:border-white transition-all duration-300"
                      onClick={() => window.print()}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-black border-2 border-white text-white font-medium tracking-wider transition-all duration-300 group"
              onClick={() => {
                alert('Kişiselleştirilmiş sonuçlarınızı görmek için sisteme giriş yapın!');
              }}
            >
              <span className="flex items-center">
                Kendi Sonuçlarınızı Keşfedin
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Kiosk Technology Section */}
      <section className="py-24 bg-white text-black relative" id="kiosk">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider text-black">
              {t('kioskTechnology.title')}
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto font-light mb-4">
              {t('kioskTechnology.subtitle')}
            </p>
            <p className="text-base text-black/60 max-w-3xl mx-auto font-light">
              {t('kioskTechnology.description')}
            </p>
          </motion.div>

          {/* Kiosk Images */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Kiosk 1 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-96 rounded-2xl overflow-hidden relative group">
                <img 
                  src="/images/kioks_1.png" 
                  alt="LED Işıklı Kiosk - 43 inch Dokunmatik Ekran"
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-medium text-white mb-1">LED Işıklı Kiosk</div>
                  <div className="text-sm text-white/80">43" Dokunmatik Ekran</div>
                </div>
              </div>
            </motion.div>

            {/* Kiosk 2 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-96 rounded-2xl overflow-hidden relative group">
                <img 
                  src="/images/kioks_2.png" 
                  alt="Entegre Kameralı Kiosk - Grup Fotoğraf Desteği"
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-medium text-white mb-1">Entegre Kameralı Kiosk</div>
                  <div className="text-sm text-white/80">Grup Fotoğraf Desteği</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('kioskTechnology.features', { returnObjects: true }) as Array<{
              title: string;
              description: string;
            }>).map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border border-black/10 hover:border-black/30 transition-all duration-500 group bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index === 0 && <FaLightbulb className="w-8 h-8 mx-auto text-black group-hover:text-black/80 transition-colors" />}
                  {index === 1 && <FaDesktop className="w-8 h-8 mx-auto text-black group-hover:text-black/80 transition-colors" />}
                  {index === 2 && <FaCamera className="w-8 h-8 mx-auto text-black group-hover:text-black/80 transition-colors" />}
                  {index === 3 && <FaBolt className="w-8 h-8 mx-auto text-black group-hover:text-black/80 transition-colors" />}
                  {index === 4 && <FaShieldAlt className="w-8 h-8 mx-auto text-black group-hover:text-black/80 transition-colors" />}
                  {index === 5 && <FaUsers className="w-8 h-8 mx-auto text-black group-hover:text-black/80 transition-colors" />}
                </motion.div>
                <h3 className="text-lg font-medium mb-3 tracking-wide text-black">{feature.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('whyUs.title')}
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-light mb-4">
              {t('whyUs.subtitle')}
            </p>
            <p className="text-base text-white/60 max-w-2xl mx-auto font-light">
              {t('whyUs.description')}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {(t('whyUs.features', { returnObjects: true }) as Array<{
              title: string;
              description: string;
            }>).map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index === 0 && <FaBrain className="w-8 h-8 text-white group-hover:text-white/80 transition-colors" />}
                  {index === 1 && <FaStar className="w-8 h-8 text-white group-hover:text-white/80 transition-colors" />}
                  {index === 2 && <FaRocket className="w-8 h-8 text-white group-hover:text-white/80 transition-colors" />}
                  {index === 3 && <FaGlobe className="w-8 h-8 text-white group-hover:text-white/80 transition-colors" />}
                </motion.div>
                
                <h3 className="text-xl font-medium mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed font-light">{feature.description}</p>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-black border-2 border-white text-white font-medium tracking-wider transition-all duration-300 group"
              onClick={() => {
                // Scroll to contact section with custom solution focus
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  // Optional: Focus on the message textarea after scrolling
                  setTimeout(() => {
                    const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                    if (messageField) {
                      messageField.focus();
                      messageField.placeholder = "Markanız için özel çözüm talebi: Hangi sektörde faaliyet gösteriyorsunuz? Hangi tür deneyim yaratmak istiyorsunuz?";
                    }
                  }, 1000);
                } else {
                  // Fallback: Direct WhatsApp contact for custom solutions
                  const customSolutionMessage = encodeURIComponent('Merhaba! Markanız için özel çözüm talep etmek istiyorum. Sektörümüze uygun kişiselleştirilmiş deneyim tasarımı hakkında detaylı bilgi alabilir miyim?');
                  window.open(`https://wa.me/905392260505?text=${customSolutionMessage}`, '_blank');
                }
              }}
            >
              <span className="flex items-center">
                Markanız İçin Özel Çözüm Alın
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities - Pure Minimalism */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('capabilities.title')}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
              {t('capabilities.description')}
            </p>
                </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaBrain, key: 'analytics' },
              { icon: FaRocket, key: 'performance' },
              { icon: FaLock, key: 'security' },
              { icon: FaChartBar, key: 'intelligence' }
            ].map((feature, index) => (
                    <motion.div
                      key={index}
                className="text-center p-6 border border-white/10 hover:border-white/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 mx-auto text-white group-hover:text-white/80 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-medium mb-4 tracking-wide">{t(`capabilities.features.${feature.key}.title`)}</h3>
                <p className="text-white/70 text-sm leading-relaxed font-light">{t(`capabilities.features.${feature.key}.description`)}</p>
                    </motion.div>
                  ))}
                </div>
        </div>
      </section>

      {/* Usage Areas Section */}
      <section className="py-24 bg-white text-black relative" id="usage-areas">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider text-black">
              {t('usageAreas.title')}
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto font-light mb-4">
              {t('usageAreas.subtitle')}
            </p>
            <p className="text-base text-black/60 max-w-2xl mx-auto font-light">
              {t('usageAreas.description')}
            </p>
          </motion.div>

          {/* Usage Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('usageAreas.areas', { returnObjects: true }) as Array<{
              title: string;
              description: string;
            }>).map((area, index) => {
              const images = [
                '/images/festivals_concerts.jpg',
                '/images/hotel_restaurant.jpg', 
                '/images/corporate_events.jpg',
                '/images/shopping_malls.jpg',
                '/images/private_celebrations.jpg',
                '/images/brand_integration.jpg'
              ];
              
              return (
                <motion.div
                  key={index}
                  className="relative overflow-hidden border border-black/10 hover:border-black/30 transition-all duration-500 group bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={images[index]} 
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon Overlay */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {index === 0 && <FaPlay className="w-6 h-6 text-black" />}
                      {index === 1 && <FaGlobe className="w-6 h-6 text-black" />}
                      {index === 2 && <FaUsers className="w-6 h-6 text-black" />}
                      {index === 3 && <FaStar className="w-6 h-6 text-black" />}
                      {index === 4 && <FaRocket className="w-6 h-6 text-black" />}
                      {index === 5 && <FaBrain className="w-6 h-6 text-black" />}
                    </motion.div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 tracking-wide text-black">{area.title}</h3>
                    <p className="text-black/70 leading-relaxed font-light text-sm">{area.description}</p>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white border-2 border-black text-black font-medium tracking-wider transition-all duration-300 group"
              onClick={() => {
                // Scroll to contact section with sector-specific focus
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  // Focus on the message textarea with sector-specific placeholder
                  setTimeout(() => {
                    const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                    if (messageField) {
                      messageField.focus();
                      messageField.placeholder = "Sektörünüz için özel çözüm talebi: Hangi sektörde (festival, otel, mağaza, kurumsal vb.) faaliyet gösteriyorsunuz? Nasıl bir deneyim hedefliyorsunuz?";
                    }
                  }, 1000);
                } else {
                  // Fallback: Direct WhatsApp contact for sector solutions
                  const sectorSolutionMessage = encodeURIComponent('Merhaba! Sektörümüz için özel çözüm talep etmek istiyorum. Hangi kullanım alanlarında hizmet veriyorsunuz ve nasıl bir deneyim tasarlayabiliriz?');
                  window.open(`https://wa.me/905392260505?text=${sectorSolutionMessage}`, '_blank');
                }
              }}
            >
              <span className="flex items-center">
                Sektörünüz İçin Çözüm Keşfedin
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-white/70 font-light">
              {t('testimonials.description')}
            </p>
                </motion.div>

          <AnimatePresence mode="wait">
                <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <FaQuoteLeft className="w-8 h-8 mx-auto mb-8 text-white/40" />
              <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                "{testimonials[currentTestimonial]?.text}"
              </blockquote>
              <div className="text-center">
                <div className="font-medium text-lg mb-1">{testimonials[currentTestimonial]?.author}</div>
                <div className="text-white/70 text-sm mb-1 font-light">{testimonials[currentTestimonial]?.position}</div>
                <div className="text-white/60 text-sm font-light">{testimonials[currentTestimonial]?.company}</div>
                    </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
                    </div>
                    </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white text-black" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-wider">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto font-light leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const message = formData.get('message');
                
                // Check if it's a custom solution request
                const isCustomSolution = message?.toString().toLowerCase().includes('özel çözüm') || 
                                        message?.toString().toLowerCase().includes('markanız için') ||
                                        message?.toString().toLowerCase().includes('sektörünüz için');
                
                const subject = isCustomSolution ? `Özel Çözüm Talebi - ${name}` : `İletişim Formu - ${name}`;
                
                const mailtoLink = `mailto:info@astrofacemix.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\n\nMesaj:\n${message}`)}`;
                window.location.href = mailtoLink;
              }}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    required
                    className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors bg-white text-black placeholder-black/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    required
                    className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors bg-white text-black placeholder-black/60"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors bg-white text-black placeholder-black/60"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t('contact.form.message')}
                    required
                    className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none transition-colors bg-white text-black placeholder-black/60 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-white border-2 border-black text-black font-medium tracking-wider transition-all duration-300"
                >
                  {t('contact.form.submit')}
                </motion.button>
              </form>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-medium mb-6 tracking-wide">{t('contact.directContact.title')}</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.a
                  href="tel:+905392260505"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 border border-black/20 hover:border-black transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <FaUsers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t('contact.directContact.phone')}</div>
                    <div className="text-black/70">+90 539 226 05 05</div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/905392260505"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 border border-black/20 hover:border-black transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <FaGlobe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t('contact.directContact.whatsapp')}</div>
                    <div className="text-black/70">+90 539 226 05 05</div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:info@astrofacemix.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 border border-black/20 hover:border-black transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <FaArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t('contact.directContact.email')}</div>
                    <div className="text-black/70">info@astrofacemix.com</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Brand */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold tracking-wider mb-2">{t('footer.title')}</h3>
              <p className="text-white/60 text-sm font-light max-w-md">
                {t('footer.description')}
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-xs font-light mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer"
                  onClick={() => {
                    const socialLinks = [
                      'https://linkedin.com/company/astrofacemix',
                      'https://twitter.com/astrofacemix', 
                      'https://instagram.com/astrofacemix'
                    ];
                    window.open(socialLinks[index], '_blank');
                  }}
                >
                  <Icon className="w-3 h-3" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 