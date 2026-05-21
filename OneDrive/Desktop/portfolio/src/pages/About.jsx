import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import StatCard from '../components/shared/StatCard.jsx'

export default function About() {
  return (
    <div className="space-y-12">
      <SectionHeader eyebrow="About" title="Building intelligent, explainable systems" />
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
        <GlassCard glow="violet" className="space-y-4 text-white/80 leading-relaxed">
          <p>
            I'm <span className="text-white font-semibold">Siri Shetty K</span>, a final-year Computer Science
            Engineering student passionate about turning data into decisions. My work centers on Data Analytics,
            Machine Learning, Explainable AI, and Flask-based AI applications.
          </p>
          <p>
            I've shipped end-to-end ML systems — from EDA and feature engineering to model training, SHAP
            explainability, and production-ready Flask deployments. My IEEE publication on automated beehive
            state classification reflects my interest in applying AI to real-world, high-impact problems.
          </p>
          <p>
            Across three internships I've worked on dashboard analytics with Power BI, predictive analytics
            with scikit-learn and XGBoost, and reporting workflows that translate model output into
            business-ready insights.
          </p>
        </GlassCard>
        <div className="grid grid-cols-2 gap-3">
          <StatCard value="1" label="IEEE Published" glow="gold" />
          <StatCard value="3" label="Internships" glow="violet" />
          <StatCard value="4+" label="ML Projects" glow="cyan" />
          <StatCard value="8.73" label="CGPA" glow="gold" />
        </div>
      </div>
      <div>
        <SectionHeader eyebrow="Education" title="Academic Background" />
        <GlassCard glow="gold" className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-gold/80">2022 — 2026</div>
            <div className="mt-1 text-xl font-bold text-white">BE — Computer Science Engineering</div>
            <div className="text-white/70 text-sm">Adichunchanagiri Institute of Technology , Chikkmagaluru</div>
            <div className="text-white/60 text-xs mt-1">Currently in final year</div>

          </div>
          <div className="text-2xl font-extrabold gradient-text">CGPA 8.73</div>
        </GlassCard>
      </div>
    </div>
  )
}
