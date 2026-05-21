import { Link } from 'react-router-dom'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import StatCard from '../components/shared/StatCard.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import ScrollReveal from '../components/shared/ScrollReveal.jsx'
import ProjectCard from '../components/shared/ProjectCard.jsx'
import ProfileImage from '../components/shared/ProfileImage.jsx'
import { projects } from '../data/projects.js'
import { topSkills } from '../data/skills.js'
import { PROFILE, NAV } from '../data/nav.js'

export default function Home() {
  const featured = projects.slice(0, 2)
  return (
    <div className="space-y-20">
      <section className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <ScrollReveal>
          <div className="text-xs uppercase tracking-[0.25em] text-gold/90">Data Analytics | Data Science | Machine Learning | AI/ML</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[1.05] gradient-text">Siri Shetty K</h1>
          <p className="mt-4 text-lg text-white/80">Data Analytics | Data Science | Machine Learning | AI/ML</p>
          <p className="mt-6 text-white/70 max-w-2xl leading-relaxed">
            Final-year CSE student and IEEE-published researcher with hands-on experience in Data Analytics,
            Machine Learning, Predictive Analytics, Explainable AI, Flask-based AI systems, and Visualization
            using Python, XGBoost, SHAP, and Power BI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GlowButton as={Link} to="/resume">Download Resume</GlowButton>
            <GlowButton as="a" href={PROFILE.github} target="_blank" rel="noreferrer" variant="outline">GitHub</GlowButton>
            <GlowButton as="a" href={PROFILE.linkedin} target="_blank" rel="noreferrer" variant="outline">LinkedIn</GlowButton>
            <GlowButton as={Link} to="/contact" variant="violet">Contact Me</GlowButton>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <ProfileImage />
        </ScrollReveal>
      </section>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="3" label="Internships" glow="gold" />
          <StatCard value="4+" label="Projects" glow="violet" />
          <StatCard value="1" label="IEEE Publication" glow="cyan" />
          <StatCard value="5+" label="Certifications" glow="gold" />
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Featured" title="Core Skills" subtitle="A snapshot of the tools I use most often." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {topSkills.map((s) => (
            <GlassCard key={s} glow="cyan" className="p-4 text-center text-sm font-semibold text-white/90">{s}</GlassCard>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-6">
          <SectionHeader eyebrow="Selected work" title="Featured Projects" />
          <GlowButton as={Link} to="/projects" variant="outline">View All Projects →</GlowButton>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((p) => <ScrollReveal key={p.slug}><ProjectCard p={p} /></ScrollReveal>)}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Explore" title="Navigate the portfolio" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NAV.filter(n => n.to !== '/').map((n) => (
            <Link key={n.to} to={n.to}>
              <GlassCard glow="violet" className="flex items-center justify-between">
                <span className="font-semibold text-white">{n.label}</span>
                <span className="text-gold">→</span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
