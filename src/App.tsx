import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  User, 
  Github, 
  Linkedin,
  Music,
  Heart,
  Trophy,
  ChevronRight
} from 'lucide-react';

const Section = ({ title, icon: Icon, children, delay = 0 }: { title: string, icon: any, children: React.ReactNode, delay?: number }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-6 border-b border-zinc-200 pb-2">
      <Icon className="w-5 h-5 text-zinc-500" />
      <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-zinc-800">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const ExperienceItem = ({ title, company, period, description, location }: any) => (
  <div className="mb-8 group">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{title}</h3>
        <p className="text-zinc-600 font-serif italic">{company} | {location}</p>
      </div>
      <span className="text-xs font-mono text-zinc-400 mt-1 md:mt-0">{period}</span>
    </div>
    <ul className="space-y-2">
      {description.map((item: string, i: number) => (
        <li key={i} className="flex gap-3 text-zinc-600 text-sm leading-relaxed">
          <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-zinc-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Header / Hero */}
      <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://picsum.photos/seed/tech/1920/1080?grayscale" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-light tracking-tighter text-white mb-4"
          >
            LUIS EDUARDO <br className="md:hidden" />
            <span className="font-semibold">MÁRQUEZ BRAZÓN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.3em]"
          >
            Data Scientist & Information Systems Engineer
          </motion.p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Sidebar */}
        <div className="md:col-span-4 space-y-12">
          <Section title="Contacto" icon={User}>
            <div className="space-y-4 text-sm text-zinc-600">
              <a href="mailto:luise.marquezb@gmail.com" className="flex items-center gap-3 hover:text-zinc-900 transition-colors">
                <Mail className="w-4 h-4" /> luise.marquezb@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> +51 974191631
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4" /> Trujillo, Perú
              </p>
              <div className="flex gap-4 pt-4 border-t border-zinc-100">
                <a href="https://www.linkedin.com/in/luis-eduardo-m%C3%A1rquez-braz%C3%B3n-9a469b19/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Section>

          <Section title="Aptitudes" icon={Award}>
            <div className="flex flex-wrap gap-2">
              {["Innovador", "Resiliente", "Valiente", "Empático"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-full border border-zinc-200 hover:bg-zinc-200 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Tecnologías" icon={Code2}>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "Power BI", "SQL", "Big Data", "Hadoop", "AWS", 
                "Google Cloud", "PostgreSQL", "Apache Spark", "Cassandra", 
                "NoSQL", "DAX", "Power Query", "Machine Learning", "Deep Learning", "APIs"
              ].map(tech => (
                <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-full border border-zinc-200 hover:bg-zinc-200 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Personal" icon={Heart}>
            <div className="space-y-4 text-sm text-zinc-600">
              <div className="flex items-start gap-3">
                <Music className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Música: Guitarra, Ukulele, Cantante Amateur, Composición.</p>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Deportes: Fútbol, Running (competencias nacionales).</p>
              </div>
              <p className="italic text-zinc-400 font-serif">"Valoro el tiempo con la familia y amigos, es vital para tener una vida con propósito."</p>
            </div>
          </Section>
        </div>

        {/* Main Content */}
        <div className="md:col-span-8">
          <Section title="Resumen Profesional" icon={User}>
            <p className="text-zinc-600 leading-relaxed font-serif text-lg italic">
              Profesional con más de 10 años de experiencia en el área de la tecnología, sistemas, análisis y desarrollo de sistemas de información y ciencias de datos. Persona empática, innovadora y con la mirada siempre puesta en cumplir los objetivos pautados como equipo y empresa. Docente con amplia motivación y probada experiencia.
            </p>
          </Section>

          <Section title="Historial Laboral" icon={Briefcase}>
            <ExperienceItem 
              title="Docente: Matemáticas / Secundaria"
              company="Colegio Bilingue Los Andes"
              period="Mar 2024 - Actual"
              location="Presencial"
              description={[
                "Docente de Matemáticas para Secundaria: 1° año hasta 5° año."
              ]}
            />
            <ExperienceItem 
              title="Docente Power BI / Python"
              company="CIBERTEC"
              period="Ago 2023 - Actual"
              location="Remoto"
              description={[
                "Docente en Análisis de datos con Power BI y Python.",
                "Fundamentos de Power Query, Power BI Desktop, Power BI Service.",
                "Filtros, extracción y transformación de datos, modelado, lenguaje DAX y visualización.",
                "Python para ciencia de datos, análisis de datos, machine learning, deep learning, visualizaciones y dashboard."
              ]}
            />
            <ExperienceItem 
              title="Docente en Ciencia de Datos"
              company="CRACK THE CODE"
              period="May 2023 - Actual"
              location="Remoto"
              description={[
                "Experto en Ciencias de datos.",
                "Docente en Bootcamp de Big Data (Convenio con Samsung y la UTP).",
                "Análisis, almacenamiento y desarrollo de infraestructuras en big data (Hadoop, SQL, AWS, GCP, PostgreSQL, Spark, Cassandra).",
                "Extracción de Información y manejo de estructuras de datos, carga y manipulación de diversas fuentes (Excel, Access, SQL, CSV, etc.).",
                "Creación de Dashboards."
              ]}
            />
            <ExperienceItem 
              title="Administrador"
              company="HEALTHY, SALUD, BELLEZA Y BIENESTAR"
              period="Nov 2018 - Dic 2022"
              location="Trujillo"
              description={[
                "Planeación, organización, dirección y control de los recursos de la compañía.",
                "Control de gastos, pago de facturas, responsabilidades tributarias.",
                "Control de inventarios de productos médico estéticos, requisiciones, manejo de proveedores.",
                "Análisis de datos para toma de decisiones administrativas."
              ]}
            />
          </Section>

          <Section title="Formación" icon={GraduationCap}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-zinc-900">Magister Scienciarum en Administración de Negocios</h3>
                <p className="text-zinc-600 font-serif italic">Universidad Nacional Abierta | Venezuela</p>
                <span className="text-xs font-mono text-zinc-400">Graduado en 01/2018</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-zinc-900">Licenciado en Informática</h3>
                <p className="text-zinc-600 font-serif italic">Universidad de Oriente | Venezuela</p>
                <span className="text-xs font-mono text-zinc-400">Graduado en 01/2013</span>
              </div>
            </div>
          </Section>

          <Section title="Diplomas & Certificaciones" icon={Award}>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "SQL para Todos", date: "12/11/23", issuer: "Datapath" },
                { name: "Big Data Fundamentals", date: "06/10/23", issuer: "Netzun" },
                { name: "Introducción al Análisis de datos con Python", date: "12/04/23", issuer: "Academia Desafío Latam" },
                { name: "Introducción a Python para ciencia de datos", date: "11/27/23", issuer: "Netzun" },
                { name: "Fundamentos de consumo y construcción de APIs", date: "12/14/23", issuer: "Datapath" },
                { name: "Análisis de Datos con Python", date: "12/13/23", issuer: "Datapath" },
                { name: "NoSQL desde cero", date: "12/12/23", issuer: "Datapath" },
                { name: "Curso de Databricks: Arquitectura Delta Lake", date: "08/2024", issuer: "Platzi" },
                { name: "Fundamentos de Javascript", date: "08/2024", issuer: "Platzi" },
                { name: "SQL y MySQL", date: "08/2024", issuer: "Platzi" }
              ].map((cert, i) => (
                <div key={i} className="flex justify-between items-center p-3 border border-zinc-100 rounded-lg hover:bg-zinc-50 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-zinc-800">{cert.name}</p>
                    <p className="text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">{cert.date}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="bg-zinc-900 py-12 text-center">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          Luis Eduardo Márquez Brazón &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
