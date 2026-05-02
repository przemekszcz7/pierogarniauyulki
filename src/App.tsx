/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Star, ChevronRight, MessageSquare, Instagram } from "lucide-react";
import { useState } from "react";

const IMAGES = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/470141151_122114180858602694_6059261851807807639_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dQfVdS-5uvEQ7kNvwEvKcWe&_nc_oc=Ado7auRQJvSnydk4myxhVO86zLzZZbxNFwTZvlYMT-fXbeSxjRky_cbXYpb2W5SBEoY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=eyK20f2-U3j25fB41IbU7g&_nc_ss=7b2a8&oh=00_Af7prJsjXtdQQvZeFilT3RLRr6Bp_JNvTV0mm1QqeZkojw&oe=69FB7C8A",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/468948882_122112496850602694_2486755411925521038_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DqBakCcRDdQQ7kNvwE9_FM7&_nc_oc=AdrgQeQ6zU2Tb8OM55ChAkTCnoYgrk9ZS-S2cnYNiCHaiG1LI2KISB_lr0TUbcq_UtY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Iwzg8EDqmng-pNG9J7bXzQ&_nc_ss=7b2a8&oh=00_Af7k8JTjgHIMBNLyRUsmvHQe3Ds6GLoiSRSVG4CqZgMcYA&oe=69FB8092",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/469490794_122113247312602694_8317768961084266938_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DCeABx776l0Q7kNvwEk_Cq_&_nc_oc=AdrULaukw-G0sXPu1BLeX2p98XwAOA9EfLw17-qaGFW6Wh1l41ahZRY9icZQ0YcecpI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=btDWg_T7g1gIEKpX0VSR-Q&_nc_ss=7b2a8&oh=00_Af5JSSQ8PGAEdOy3B1EK62N5PaGzTw-Ks9CoJiN0aS17GQ&oe=69FB99EC",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/469978756_122114181020602694_8400550604397622910_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=LZp5V74P5oYQ7kNvwEnDX-c&_nc_oc=AdqeWQT6G6fq0rMIaytKxkNEw2petJaIX9F1z62XIHF4WfHGxUaTCqUIeivG8Px2p8U&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Sz5muSutWTn6EOn4xk0p4Q&_nc_ss=7b2a8&oh=00_Af6sXFupFhzpNZLhqJ73TKY3uvEUDsQubBJ3to0ZsXRvig&oe=69FB985D",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/472336934_122117860724602694_2453655297075998366_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=GDCs5bttY6EQ7kNvwFZ1LuD&_nc_oc=Adp1h6NtYFY1XzMsBYEbdwX0lNXzoDUWL6W4q4eLfJxmCVipRmpJG3hiKJrkZJZLI9w&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ZeJJxF9qrZWsr4NnID1GXA&_nc_ss=7b2a8&oh=00_Af6SjtFcKop5Etojle-ner8u96shfED58_dbNy0bRsRXww&oe=69FB98C7",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/472571337_122119086320602694_375527486630348723_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DGo2N8KYRAEQ7kNvwG0yaTM&_nc_oc=Adok28PGXsSrAokf6LopTomDFTsxE0BVgqL_6_9VbLLUO4Anoky3gyY09y31Q5yK-sE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=NQQA57hddtDsLfYzRFG3eA&_nc_ss=7b2a8&oh=00_Af4urN9IKkswNtf2UipVztLraiugkJ8xVqhj7LdY2IbHPA&oe=69FB96AD",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/577770763_122162349236602694_7288091879868185679_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4WrN3HSEKo8Q7kNvwGK_uV_&_nc_oc=Ado0Tj0gGmryirzraNnvtPHF4iggHZAkJpOgbpzoJtcGbvqYLFwhQC_frYTMFzmmdvo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Vi5LCAa4Ogea_QNRCwkPNg&_nc_ss=7b2a8&oh=00_Af65U0duJ3eBOhdbaL62ntaQDziBFf6x2Ed36Om9f_ySQA&oe=69FB85DD",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/572087462_122161048868602694_831476167392452720_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=aEQ-KYSlqg4Q7kNvwH6eeRm&_nc_oc=AdrLGUlArTi8Uoyx03T9BzE_roga5L7s3uK_7StgCRM2EyuJecDZK-Cj15u342_mtbs&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=XjkTxt6lBXjJm3rTBxokeg&_nc_ss=7b2a8&oh=00_Af4H005RALWMoCy5jsOyiFmO9_F_Brpg5DvQ8zJ2xEpLQQ&oe=69FB8066"
];

const FAVICON_URL = "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/464952893_122095024184602694_4786108366245970475_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=1NJtRz9G8pIQ7kNvwHClpO3&_nc_oc=Adq5ycABGJNNiO8Y8w8cyQ-TW5NCS2yvLpWJ1XjWpj5kyDMl7LGV7WATVMx-hbcBeKA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=dFjB3-KGNdl__7YyxR3dFQ&_nc_ss=7b2a8&oh=00_Af58bdqf6GEMgFV-Yv-0QJ3KcsUMGlSYgeWUyBbhHw5Zsg&oe=69FB8262";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Decorative background grid */}
      <div className="fixed inset-0 oriental-grid pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-xl border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 blur-sm opacity-20" />
              <img src={FAVICON_URL} alt="Logo" className="w-14 h-14 rounded-full border-2 border-primary relative z-10 shadow-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-black text-primary tracking-tighter italic">Pierogarnia</span>
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.3em] uppercase -mt-1 ml-1">u Yulki</span>
            </div>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-ink/70">
            {['Start', 'Aktualności', 'Galeria', 'Kontakt'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase().replace('ś', 's')}`} 
                whileHover={{ y: -2, color: "var(--color-primary)" }}
                className="hover:text-primary transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://www.facebook.com/profile.php?id=61568080825005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 md:gap-3 bg-primary text-white px-4 py-2 md:px-7 md:py-3 rounded-none asian-border hover:bg-red-900 transition-all shadow-[6px_6px_0px_0px_rgba(212,175,55,0.3)] md:shadow-[8px_8px_0px_0px_rgba(212,175,55,0.3)]"
          >
            <Facebook size={18} className="md:w-5 md:h-5" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">Social</span>
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="start" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={IMAGES[0]}
            alt="Pierogi Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 inline-block"
          >
            <div className="w-16 h-16 border-4 border-accent rotate-45 mx-auto mb-6 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-accent -rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl mb-4 text-accent font-black uppercase tracking-[0.4em] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Pysznie jak u mamy
          </motion.p>

          <motion.h1
            className="text-5xl md:text-9xl font-serif font-black mb-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] italic"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Sztuka <span className="text-accent">Dumplingów</span>
          </motion.h1>
          
          <motion.div
            className="h-1 bg-accent w-24 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1 }}
          />

          <motion.p
            className="text-xl md:text-3xl mb-12 text-white/80 font-light tracking-wide max-w-3xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Prawdziwe domowe pierogi u Yulki. Tradycja spotyka pasję w każdym kęsie.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.05, backgroundColor: "#f1c40f" }}
              className="bg-accent text-ink px-10 py-5 font-black uppercase tracking-[0.3em] text-sm shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)]"
            >
              Zamów Teraz
            </motion.a>
            <motion.a
              href="#galeria"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 font-black uppercase tracking-[0.3em] text-sm hover:text-ink transition-colors"
            >
              Galeria
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-accent"
          animate={floatAnimation}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 mb-8 whitespace-nowrap">Scroll Down</span>
            <div className="h-20 w-0.5 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Aktualności Section with Oriental Accents */}
      <section id="aktualnosci" className="py-32 relative bg-cream">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-accent font-serif italic text-2xl block mb-2">Nasza Specjalność</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">Wydarzenia & Nowości</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              <div className="w-3 h-3 bg-primary rotate-45" />
              <div className="h-[2px] w-12 bg-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-none p-1 md:p-2 asian-border shadow-2xl group"
            >
              <div className="bg-cream border border-primary/10 p-6 md:p-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="lg:w-1/2 relative overflow-hidden rounded-none h-[400px] w-full">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={IMAGES[1]} 
                    alt="Pierogi Ruskie" 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white p-4 font-serif text-2xl font-bold border-2 border-accent">
                    🥟
                  </div>
                </div>
                <div className="lg:w-1/2 text-left">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-accent" />
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-stone-400">Polecane Dziś</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-black mb-8 text-ink italic leading-tight">
                    Pierogi ruskie <span className="text-primary">—</span> Klasyka gatunku
                  </h3>
                  <div className="space-y-6 text-xl text-stone-600 font-light leading-relaxed mb-10">
                    <p className="border-l-4 border-primary pl-6 italic bg-primary/5 py-4">
                      "Klasyka, która nigdy nie zawodzi. Miękkie ciasto, kremowy farsz i ten znajomy smak, który zawsze poprawia humor 💛"
                    </p>
                    <p className="text-accent font-medium uppercase tracking-widest text-sm text-center bg-stone-100 py-3 mt-4">
                      Najlepsze z cebulką albo odrobiną śmietany 😋
                    </p>
                  </div>
                  <div className="flex items-center gap-6 pt-8 border-t border-stone-200">
                    <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center text-primary">
                      <Facebook size={24} />
                    </div>
                    <p className="text-sm font-bold text-stone-400 max-w-[200px] uppercase tracking-tighter">
                      Obserwuj u Yulki na Facebooku!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Staggered Grid and Oriental Frames */}
      <section id="galeria" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-[0.5em] text-xs block mb-4">Galeria Smaków</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-ink italic leading-[1.1]">Nasze Kulinarne <span className="text-primary underline decoration-accent underline-offset-8">Dzieła</span></h2>
            </div>
            <p className="text-stone-400 text-lg md:text-right max-w-sm italic">
              Każdy pieróg to inna historia, zamknięta w idealnym cieście.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {IMAGES.map((src, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative aspect-[3/4] cursor-crosshair overflow-hidden group asian-border"
                onClick={() => setSelectedImage(src)}
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <motion.img
                  src={src}
                  alt={`Pierogarnia Image ${idx}`}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white p-4">
                   <div className="w-12 h-[1px] bg-white mb-4" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">Quick View</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="mt-32 p-16 bg-cream asian-border text-center overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent -translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent translate-x-4 translate-y-4" />
            
            <Star className="w-12 h-12 text-accent mx-auto mb-8 animate-pulse fill-accent" />
            <h3 className="text-3xl md:text-4xl font-serif font-black text-ink mb-8 italic">Co mówią nasi goście?</h3>
            <a
              href="https://www.facebook.com/profile.php?id=61568080825005&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-2xl font-serif font-bold text-primary hover:text-accent transition-all"
            >
              <span>Odkryj szczere opinie</span>
              <motion.div whileHover={{ x: 10 }}>
                <ChevronRight size={32} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Section with Red Cards */}
      <section id="kontakt" className="py-32 bg-ink text-white relative">
        <div className="absolute inset-0 oriental-grid opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.div {...fadeIn}>
                <span className="text-accent font-black uppercase tracking-[0.4em] text-xs block mb-6">Kontakt</span>
                <h2 className="text-4xl md:text-8xl font-serif font-black mb-12 leading-[0.9] italic">
                  Czekamy <br /> na <span className="text-accent underline decoration-red underline-offset-8">Ciebie</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Lokalizacja", content: "Międzychód gmina 64-400", sub: "Zobacz Trasę", link: "https://maps.app.goo.gl/61GkWXU6bend6BZT8" },
                    { icon: Phone, title: "Zadzwoń", content: "536 941 728", sub: "Zamówienia Telefoniczne", link: "tel:536941728" },
                    { icon: Mail, title: "Napisz", content: "gerasumovajulia@gmail.com", sub: "Biznes & Catering", link: "mailto:gerasumovajulia@gmail.com" }
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.link}
                      whileHover={{ x: 20 }}
                      className="flex items-center gap-6 md:gap-8 p-6 md:p-8 border-b border-white/10 hover:border-accent transition-all group"
                    >
                      <div className="text-accent group-hover:scale-125 transition-transform">
                        <item.icon size={32} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40 mb-1">{item.title}</div>
                        <div className="text-xl md:text-2xl font-serif font-bold italic break-all leading-tight">{item.content}</div>
                        <div className="text-xs font-black text-accent mt-2 uppercase tracking-widest">{item.sub}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              {...fadeIn}
              className="bg-primary/90 backdrop-blur-md p-8 md:p-16 rounded-none asian-border shadow-[15px_15px_0px_0px_rgba(212,175,55,0.2)] md:shadow-[30px_30px_0px_0px_rgba(212,175,55,0.2)] md:ml-12"
            >
              <div className="mb-12">
                <div className="w-12 h-12 border-2 border-accent rotate-45 mb-10 flex items-center justify-center">
                   <div className="w-8 h-8 border border-white -rotate-45" />
                </div>
                <h3 className="text-3xl md:text-5xl font-serif font-black italic mb-8">Social Media</h3>
                <p className="text-white/70 text-lg font-light leading-relaxed mb-12">
                  Codzienne menu, zdjęcia kuchni "od zaplecza" i najświeższe promocje publikujemy zawsze w pierwszej kolejności na Facebooku.
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=61568080825005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-white text-ink px-10 py-5 font-black uppercase tracking-[0.3em] text-sm hover:bg-accent hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] transition-all"
                >
                  <Facebook size={20} />
                  <span>Obserwuj Nas</span>
                </a>
              </div>

              <div className="flex items-center gap-10 pt-12 border-t border-white/10">
                <div>
                   <div className="text-4xl font-serif font-black italic text-accent leading-none">100%</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-1">Facebook Rating</div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer in Deep Black */}
      <footer className="bg-ink py-24 text-stone-500 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 border-b border-white/5 pb-16">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={FAVICON_URL} alt="Logo" className="w-16 h-16 rounded-full border-2 border-accent/30" />
              <div className="text-center md:text-left">
                <span className="text-white font-serif text-3xl md:text-4xl font-black italic block">Pierogarnia u Yulki</span>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] block mt-2">Tradycja w sercu Międzychodu</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
              {['Start', 'Aktualności', 'Galeria', 'Kontakt'].map(i => (
                <a key={i} href={`#${i.toLowerCase().replace('ś', 's')}`} className="hover:text-white transition-colors">{i}</a>
              ))}
            </div>

            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61568080825005" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-none border border-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Facebook size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.5em] opacity-30">
            <p>© {new Date().getFullYear()} Pierogarnia u Yulki. Realizacja: AI Design Studio</p>
            <div className="flex items-center gap-4">
              <span>Made with heart</span>
              <div className="w-2 h-2 bg-red rotate-45" />
              <span>Served with passion</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/98 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ type: "spring", damping: 12 }}
            className="relative max-w-5xl w-full asian-border p-1 bg-white"
          >
            <img
              src={selectedImage}
              className="w-full h-auto rounded-none shadow-2xl"
              alt="Preview"
            />
            <button
              className="absolute -top-12 -right-12 text-white/50 hover:text-white transition-colors p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="text-5xl font-light">×</div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
