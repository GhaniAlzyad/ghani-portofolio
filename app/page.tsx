'use client';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function Home() {
  const animation = { initial: { x: -30, opacity: 0 }, animate: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 }}};
  
  const skills = [
    {"level":"Intermediate","icon":"https://cdn.svgporn.com/logos/figma.svg","name":"Figma"},
    {"name":"Python","level":"Expert","icon":"https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"},
    {"name":"Google Colab","level":"Intermediate","icon":"https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000"},
    {"name":"Penpot","level":"Intermediate","icon":"https://www.svgrepo.com/show/432263/penpot.svg"}
  ];
  
  const projects = [
    {"title":"GIFTIME","image":"https://asperbrothers.com/wp-content/uploads/2024/01/startupteamstructure_featured.jpg","githubLink":"","liveDemoLink":""},
    {"title":"GAFYSTORE","image":"https://gamestoresoftware.com/og/features/loyalty-and-store-credit.png","githubLink":"","liveDemoLink":""}
  ];
  
  const experiences = [
    {
      "title":"Guru Matematika",
      "company":"Yayasan Pendidikan Islam AR ROJA",
      "duration":"2025 - Sekarang",
      "description":"Mengembangkan kurikulum pengajaran matematika yang interaktif untuk meningkatkan kemampuan berpikir logis dan analitis siswa. Menerapkan metode pembelajaran adaptif yang mempermudah pemahaman konsep abstrak serta membantu siswa dalam pemecahan masalah numerik."
    },
    {
      "title":"Guru Koding & Kecerdasan Artifisial (KKA)",
      "company":"Yayasan Pendidikan Islam AR ROJA",
      "duration":"2025 - Sekarang",
      "description":"Merancang dan menyampaikan materi dasar-dasar pemrograman komputer serta pengenalan konsep Artificial Intelligence (AI). Membimbing siswa dalam proyek praktik pembuatan program sederhana guna membangun keterampilan komputasi sejak dini."
    },
    {
      "title":"Asisten Praktikum Dasar Pemrograman",
      "company":"Institut Teknologi Garut",
      "duration":"2023 - 2025",
      "description":"Membimbing mahasiswa dalam memahami logika pemrograman dasar, algoritma, serta struktur kendali menggunakan bahasa pemrograman standar. Mengoreksi tugas praktikum serta memberikan evaluasi berkala terhadap pemahaman teknis mahasiswa di laboratorium."
    },
    {
      "title":"Asisten Praktikum Pemrograman Berorientasi Objek",
      "company":"Institut Teknologi Garut",
      "duration":"2024 - 2025",
      "description":"Mengondisikan kelas praktikum untuk mendalami konsep Object-Oriented Programming (OOP) seperti inheritance, polymorphism, encapsulation, dan abstraction. Membantu mahasiswa memecahkan eror (debugging) pada proyek perangkat lunak mereka."
    },
    {
      "title":"Asisten Praktikum Pengantar Teknologi Informasi",
      "company":"Institut Teknologi Garut",
      "duration":"2023 - 2025",
      "description":"Memberikan asistensi mengenai fondasi dasar infrastruktur IT, sistem operasi, jaringan komputer, serta pemanfaatan perangkat lunak produktivitas. Memastikan seluruh mahasiswa menguasai literasi digital dasar yang diperlukan dalam dunia kerja teknologi."
    }
  ];

  return (
    <main className="bg-slate-900 text-slate-300 font-lexend selection:bg-amber-500/20">
      <section id="profile" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-800 [clip-path:polygon(0_0,_100%_0,_60%_100%,_0%_100%)] z-10"></div>
        <Image src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2940&auto=format&fit=crop" alt="Profile Background" fill className="object-cover opacity-20"/>
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-xl">
            <motion.div {...animation} transition={{...animation.animate.transition, delay: 0.2}}>
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">Ghani Al-Zyad</h1>
            </motion.div>
            <motion.div {...animation} transition={{...animation.animate.transition, delay: 0.4}}>
              <p className="text-xl md:text-2xl text-amber-400 mt-2" dangerouslySetInnerHTML={{ __html: `Creative <span class="text-sky-500">Teacher of Mathematics, Coding</span> &amp; Data Analyst Enthusiast` }}/>
            </motion.div>
            <motion.div {...animation} transition={{...animation.animate.transition, delay: 0.6}} className="mt-8 flex items-center gap-4">
              <a href="https://drive.google.com/file/d/14piM2ryNaxzBdlrfKHKwxbaW0y_iRZyl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors cursor-pointer">Download CV</a>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/GhaniAlzyad" target="_blank" rel="noopener noreferrer"><motion.div whileHover={{scale: 1.2, color: '#f59e0b'}} className="text-slate-400"><FiGithub size={20}/></motion.div></a>
                <a href="https://linkedin.com/in/ghanial-zyad" target="_blank" rel="noopener noreferrer"><motion.div whileHover={{scale: 1.2, color: '#f59e0b'}} className="text-slate-400"><FiLinkedin size={20}/></motion.div></a>
                <a href="mailto:ghanialzyad@gmail.com"><motion.div whileHover={{scale: 1.2, color: '#f59e0b'}} className="text-slate-400"><FiMail size={20}/></motion.div></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-800 flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Halo! Saya <span className="font-bold text-amber-400">Ghani Al-Zyad</span>, seorang <em>Data Analyst Enthusiast</em> yang berdedikasi tinggi dalam mengeksplorasi serta mengubah data mentah menjadi wawasan strategis yang bermakna. Kombinasi pengalaman praktis saya sebagai <span className="font-bold text-amber-400">Asisten Laboratorium</span> yang terbiasa bekerja dengan ketelitian tinggi, serta peran saya sebagai <span className="font-bold text-amber-400">Pengajar Matematika, Koding dan Kecerdasan Artifisial (KKA)</span>, telah membentuk saya menjadi pribadi yang analitis sekaligus komunikatif dalam menyederhanakan konsep-konsep teknologi yang kompleks. Saya selalu bersemangat untuk terus berkembang, menguasai teknologi baru, dan siap berkontribusi nyata dalam menghadirkan solusi pemecahan masalah yang berbasis pada kekuatan data dan inovasi digital.
          </p>
        </div>
      </section>

      <section id="experience" className="py-24">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-center mb-16">Career Timeline</h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-700"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-center w-full my-6">
              <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8 order-3'}`}>
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="p-6 bg-slate-800 border border-slate-700 rounded-xl w-full max-w-sm">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-amber-400 font-semibold">{exp.company}</p>
                  <p className="mt-2 text-slate-400 text-sm">{exp.description}</p>
                </motion.div>
              </div>
              <div className="w-12 h-12 absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-amber-500 text-slate-900 rounded-full font-bold shadow-lg z-10">
                <p className="text-xs text-center">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="skills" className="py-24 overflow-hidden bg-slate-800">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-center mb-12">My Skills</h2>
        <div className="relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex animate-marquee motion-reduce:animate-none">{skills.concat(skills).map((skill, index) => <div key={index} className="mx-6 flex items-center gap-3 whitespace-nowrap"><Image src={skill.icon || ''} alt={skill.name} width={24} height={24}/><span className="text-lg font-medium text-slate-300">{skill.name}</span></div>)}</div>
          <div className="absolute top-0 flex animate-marquee2 motion-reduce:animate-none">{skills.concat(skills).map((skill, index) => <div key={index} className="mx-6 flex items-center gap-3 whitespace-nowrap"><Image src={skill.icon || ''} alt={skill.name} width={24} height={24}/><span className="text-lg font-medium text-slate-300">{skill.name}</span></div>)}</div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-center mb-16">Featured Projects</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: index * 0.1}} className="group bg-slate-800 border border-slate-700/50 rounded-xl overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src={project.image || '/placeholder-creative.jpg'} alt={project.title} width={400} height={300} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex gap-4">
                  {project.githubLink && <a href={project.githubLink} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"><FiGithub/> GitHub</a>}
                  {project.liveDemoLink && <a href={project.liveDemoLink} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"><FiExternalLink/> Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-800">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-400">Have a project in mind or just want to say hello? My inbox is always open.</p>
          <a href="mailto:ghanialzyad@gmail.com" className="mt-8 inline-block text-2xl px-6 py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 hover:scale-[1.05] transition font-bold text-neutral-800 hover:text-black cursor-pointer">ghanialzyad@gmail.com</a>
        </div>
      </section>
      
      <footer className="py-8 text-center border-t border-slate-800"><p className="text-sm text-slate-500">Copyright © 2026 Ghani Al-Zyad. All Rights Reserved.</p></footer>
    </main>
  );
}