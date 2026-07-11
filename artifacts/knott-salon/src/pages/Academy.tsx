import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, IndianRupee, ArrowRight } from "lucide-react";
import { academyStats, courses } from "@/data/academy";

export default function Academy() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-24 md:pt-28 pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative section-glow overflow-hidden">
        <div className="container mx-auto px-5 pb-12 md:pb-20 pt-4 md:pt-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-label text-xs uppercase tracking-[0.3em] mb-3 font-medium text-center"
          >
            KNOTT Academy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-7xl gradient-heading text-center mb-5 leading-[1.1]"
          >
            Master the Art<br className="hidden md:block" /> of Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground font-light text-sm md:text-lg text-center max-w-xl mx-auto mb-10"
          >
            Industry-led courses with real salon-floor practice. Learn from working professionals and graduate as a certified beauty expert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 md:gap-8 max-w-2xl mx-auto"
          >
            {academyStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-card-border rounded-sm px-3 py-6 md:py-8 text-center"
                data-testid={`stat-academy-${stat.label.toLowerCase()}`}
              >
                <p className="text-2xl md:text-4xl gradient-heading font-serif mb-1">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.18em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live courses */}
      <section className="container mx-auto px-5 py-4 md:py-10 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 justify-center mb-10 md:mb-14"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">Live Courses</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className="bg-card border border-card-border rounded-sm overflow-hidden group hover:border-primary/40 transition-colors flex flex-col"
              data-testid={`card-course-${i}`}
            >
              <div className="relative h-44 md:h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-wider text-primary border border-primary/30">
                  {course.level}
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{course.name}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5 flex-1">
                  {course.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Clock size={15} className="text-primary/70" />
                    <span className="text-[11px] text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-border">
                    <Users size={15} className="text-primary/70" />
                    <span className="text-[11px] text-muted-foreground">{course.seats}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <IndianRupee size={15} className="text-primary/70" />
                    <span className="text-[11px] text-muted-foreground">{course.fee}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919716002672?text=${encodeURIComponent(
                    `Hi! I'd like to enroll in the ${course.name} course at KNOTT Academy.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-primary text-primary-foreground uppercase text-xs tracking-[0.2em] font-medium rounded-sm hover:bg-primary/85 transition-colors text-center flex items-center justify-center gap-2 min-h-[48px]"
                  data-testid={`link-enroll-${i}`}
                >
                  Enroll Now <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why KNOTT Academy */}
      <section className="container mx-auto px-5 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <GraduationCap className="w-10 h-10 text-primary mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-serif text-foreground mb-4">
            Learn on a Working Salon Floor
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
            Every KNOTT Academy student trains inside our live salon — real clients, real tools, real pressure.
            Small batches, certified faculty and placement support mean you graduate ready to work, not just to practice.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
