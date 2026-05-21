import { useRef, useState, useEffect } from 'react'

const STORAGE_KEY = 'siri_profile_image'

export default function ProfileImage() {
  const inputRef = useRef(null)
  const [src, setSrc] = useState(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setSrc(saved)
    } catch {}
  }, [])

  const handleFile = (f) => {
    if (!f || !f.type?.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result
      setSrc(dataUrl)
      try { localStorage.setItem(STORAGE_KEY, dataUrl) } catch {}
    }
    reader.readAsDataURL(f)
  }

  const onDrop = (e) => {
    e.preventDefault()
    handleFile(e.dataTransfer.files?.[0])
  }

  const remove = (e) => {
    e.stopPropagation()
    setSrc(null)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className="group relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-gold via-violet to-cyanx shadow-[0_0_60px_-10px_rgba(124,58,237,0.6)] cursor-pointer overflow-hidden"
        title="Click or drop an image to upload your profile photo"
      >
        <div className="w-full h-full rounded-full bg-navy overflow-hidden flex items-center justify-center">
          {src ? (
            <img src={src} alt="Profile" className="w-full h-full object-cover rounded-full" />
          ) : (
            <div className="flex flex-col items-center justify-center text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 opacity-80">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z"/>
              </svg>
              <span className="mt-2 text-xs uppercase tracking-[0.2em]">Upload Photo</span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
          <span className="text-xs uppercase tracking-[0.2em] text-white">Change Photo</span>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
      {src && (
        <button
          onClick={remove}
          className="text-xs text-white/60 hover:text-white underline underline-offset-4"
        >
          Remove photo
        </button>
      )}
    </div>
  )
}
