import { useMemo, useState } from 'react'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import ProjectCard from '../components/shared/ProjectCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import Modal from '../components/ui/Modal.jsx'
import { projects as initialProjects } from '../data/projects.js'
import { cn } from '../lib/cn.js'

const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export default function Projects() {
  const [items, setItems] = useState(initialProjects)
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(false)

  const techs = useMemo(() => {
    const set = new Set()
    items.forEach((p) => p.tech.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set)]
  }, [items])

  const visible = filter === 'All' ? items : items.filter((p) => p.tech.includes(filter))

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <SectionHeader eyebrow="Projects" title="Showcase" subtitle="Real-world ML, AI, and analytics builds." />
        <GlowButton onClick={() => setOpen(true)}>+ Add New Project</GlowButton>
      </div>

      <div className="flex flex-wrap gap-2">
        {techs.slice(0, 14).map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={cn(
              'text-xs px-3 py-1.5 rounded-full border transition-colors',
              filter === t ? 'bg-gold text-navy border-gold' : 'border-white/15 text-white/70 hover:text-white hover:border-white/30'
            )}
          >{t}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {visible.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>

      <AddProjectModal open={open} onClose={() => setOpen(false)} onAdd={(p) => setItems([p, ...items])} />
    </div>
  )
}

function AddProjectModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({ title: '', short: '', description: '', tech: '', github: '', demo: '', features: '', category: 'ML' })
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const p = {
      slug: slugify(form.title) || `project-${Date.now()}`,
      title: form.title,
      short: form.short,
      description: form.description,
      category: form.category,
      tech: form.tech.split(',').map((s) => s.trim()).filter(Boolean),
      features: form.features.split(',').map((s) => s.trim()).filter(Boolean),
      metrics: {},
      github: form.github || '#',
      demo: form.demo || '',
      problem: '', architecture: '', dataset: '', workflow: '', results: '', future: '',
    }
    onAdd(p)
    onClose()
  }
  const Field = ({ label, children }) => (
    <label className="block text-sm">
      <span className="text-white/70">{label}</span>
      {children}
    </label>
  )
  const input = 'mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-gold/60'
  return (
    <Modal open={open} onClose={onClose} title="Add New Project">
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
        <Field label="Title"><input className={input} value={form.title} onChange={upd('title')} required /></Field>
        <Field label="Category"><input className={input} value={form.category} onChange={upd('category')} /></Field>
        <Field label="Short Description"><input className={input} value={form.short} onChange={upd('short')} /></Field>
        <Field label="Full Description"><input className={input} value={form.description} onChange={upd('description')} /></Field>
        <Field label="Tech Stack (comma-separated)"><input className={input} value={form.tech} onChange={upd('tech')} placeholder="Python, Flask, XGBoost" /></Field>
        <Field label="Key Features (comma-separated)"><input className={input} value={form.features} onChange={upd('features')} /></Field>
        <Field label="GitHub URL"><input className={input} value={form.github} onChange={upd('github')} /></Field>
        <Field label="Live Demo URL"><input className={input} value={form.demo} onChange={upd('demo')} /></Field>
        <div className="md:col-span-2 flex justify-end gap-2 pt-2">
          <GlowButton type="button" variant="outline" onClick={onClose}>Cancel</GlowButton>
          <GlowButton type="submit">Add Project</GlowButton>
        </div>
      </form>
    </Modal>
  )
}
