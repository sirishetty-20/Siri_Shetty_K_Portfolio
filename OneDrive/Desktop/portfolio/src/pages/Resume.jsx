import { useState } from 'react'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import FileUploader from '../components/shared/FileUploader.jsx'
import Modal from '../components/ui/Modal.jsx'

export default function Resume() {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="CV" title="Resume" subtitle="Preview, download, or replace the latest version." />
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <GlassCard glow="violet" className="h-[70vh] p-0 overflow-hidden">
          <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/50">
            Resume PDF preview placeholder
          </div>
        </GlassCard>
        <div className="space-y-4">
          <GlassCard glow="gold">
            <h3 className="font-bold text-white">Actions</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <GlowButton onClick={() => setOpen(true)}>View Full Resume</GlowButton>
              <GlowButton variant="outline" as="a" href="#" download>Download Resume</GlowButton>
            </div>
          </GlassCard>
          <GlassCard glow="cyan">
            <h3 className="font-bold text-white mb-3">Upload / Replace Resume</h3>
            <FileUploader label="Resume PDF" accept="application/pdf" />
          </GlassCard>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Resume — Full View">
        <div className="h-[75vh] bg-white/5 rounded-lg flex items-center justify-center text-white/50">
          Resume preview goes here
        </div>
      </Modal>
    </div>
  )
}
