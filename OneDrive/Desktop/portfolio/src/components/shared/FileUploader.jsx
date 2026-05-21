import { useRef, useState } from 'react'
import GlowButton from '../ui/GlowButton.jsx'
import Modal from '../ui/Modal.jsx'

export default function FileUploader({ label = 'Upload File', accept = 'application/pdf,image/*' }) {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [url, setUrl] = useState(null)
  const [preview, setPreview] = useState(false)

  const handleFile = (f) => {
    if (!f) return
    setFile(f)
    const u = URL.createObjectURL(f)
    setUrl(u)
  }

  const onDrop = (e) => {
    e.preventDefault()
    handleFile(e.dataTransfer.files?.[0])
  }

  return (
    <div className="space-y-3">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="border border-dashed border-white/15 rounded-xl p-4 text-center text-sm text-white/60 hover:border-gold/40 transition-colors cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        {file ? <span className="text-white">{file.name}</span> : <>Drop or click to {label.toLowerCase()}</>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <GlowButton variant="outline" onClick={() => inputRef.current?.click()}>Upload</GlowButton>
        <GlowButton variant="outline" disabled={!url} onClick={() => setPreview(true)}>View</GlowButton>
        <GlowButton variant="outline" as="a" href={url || '#'} download={file?.name || ''} className={!url ? 'opacity-50 pointer-events-none' : ''}>Download</GlowButton>
      </div>
      <Modal open={preview} onClose={() => setPreview(false)} title={file?.name || 'Preview'}>
        {url && (file?.type?.startsWith('image/')
          ? <img src={url} alt={file?.name} className="w-full rounded-lg" />
          : <iframe src={url} title="preview" className="w-full h-[70vh] rounded-lg bg-white" />)}
      </Modal>
    </div>
  )
}
