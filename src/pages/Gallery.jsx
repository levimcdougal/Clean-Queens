import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Sparkles, X } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import before1 from '../assets/b1.jpg'
import before2 from '../assets/b2.jpg'
import before3 from '../assets/b3.jpg'
import before4 from '../assets/b4.jpg'
import before5 from '../assets/b5.jpg'
import after1 from '../assets/a1.jpg'
import after2 from '../assets/a2.jpg'
import after3 from '../assets/a3.jpg'
import after4 from '../assets/a4.jpg'
import after5 from '../assets/a5.jpg'
import before6 from '../assets/b6.jpg'
import before7 from '../assets/b7.jpg'
import before8 from '../assets/b8.jpg'
import after6 from '../assets/a6.jpg'
import after7 from '../assets/a7.jpg'
import after8 from '../assets/a8.jpg'

const tomballProjects = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
  { before: before4, after: after4 },
  { before: before5, after: after5 },
]

const grovetonProjects = [
  { before: before6, after: after6 },
  { before: before7, after: after7 },
  { before: before8, after: after8 },
]

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    if (!selectedPhoto) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedPhoto])

  return (
    <div className="w-full bg-[#f8fbff]">
      <section className="royal-hero relative overflow-hidden bg-gradient-to-br from-[#1E5DB8] to-[#17498f] px-4 py-16 text-center text-white sm:py-20">
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#5BC85A]/20 blur-2xl" />
        <div className="absolute -bottom-24 -right-12 h-64 w-64 rounded-full bg-[#D946A6]/20 blur-2xl" />
        <FadeIn>
          <div className="relative mx-auto max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/25">
              <Sparkles size={16} /> Real homes. Royal results.
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Before &amp; After Gallery</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
              See the difference a Clean Queens visit can make in homes across the communities we serve.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="py-14 sm:py-16" id="tomball-tx">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#5BC85A]/15 px-4 py-2 font-semibold text-[#287a31]">
                <MapPin size={18} /> Tomball, TX
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[#1E5DB8] sm:text-4xl">Tomball Home Transformations</h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Browse five real before-and-after transformations from a home we cleaned in Tomball, Texas. Select any photo to see it larger.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {tomballProjects.map((project, index) => (
              <FadeIn key={project.before} delay={(index % 2) * 100}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/70">
                  <div className="grid grid-cols-2">
                    {[
                      { src: project.before, label: 'Before', color: 'bg-[#1E5DB8]' },
                      { src: project.after, label: 'After', color: 'bg-[#5BC85A]' },
                    ].map(({ src, label, color }) => (
                      <button
                        key={label}
                        aria-label={`Enlarge ${label.toLowerCase()} photo ${index + 1}`}
                        className="group relative aspect-[4/5] overflow-hidden bg-gray-100 sm:aspect-[4/3]"
                        onClick={() => setSelectedPhoto({ src, label, number: index + 1, location: 'Tomball, TX' })}
                        type="button"
                      >
                        <img
                          alt={`${label} cleaning photo ${index + 1} from a Tomball, Texas home`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          decoding="async"
                          loading="lazy"
                          src={src}
                        />
                        <span className={`absolute left-3 top-3 rounded-full ${color} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md sm:text-sm`}>
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="font-bold text-gray-900">Transformation {index + 1}</p>
                      <p className="text-sm text-gray-500">Tomball, Texas</p>
                    </div>
                    <Sparkles className="text-[#D946A6]" size={22} />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="groveton-tx">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D946A6]/10 px-4 py-2 font-semibold text-[#b42f87]">
                <MapPin size={18} /> Groveton, TX
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[#1E5DB8] sm:text-4xl">Groveton Home Transformations</h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Browse three real before-and-after transformations from a home we cleaned in Groveton, Texas. Select any photo to see it larger.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {grovetonProjects.map((project, index) => (
              <FadeIn key={project.before} delay={(index % 2) * 100}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/70">
                  <div className="grid grid-cols-2">
                    {[
                      { src: project.before, label: 'Before', color: 'bg-[#1E5DB8]' },
                      { src: project.after, label: 'After', color: 'bg-[#5BC85A]' },
                    ].map(({ src, label, color }) => (
                      <button
                        key={label}
                        aria-label={`Enlarge ${label.toLowerCase()} Groveton photo ${index + 1}`}
                        className="group relative aspect-[4/5] overflow-hidden bg-gray-100 sm:aspect-[4/3]"
                        onClick={() => setSelectedPhoto({ src, label, number: index + 1, location: 'Groveton, TX' })}
                        type="button"
                      >
                        <img
                          alt={`${label} cleaning photo ${index + 1} from a Groveton, Texas home`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          decoding="async"
                          loading="lazy"
                          src={src}
                        />
                        <span className={`absolute left-3 top-3 rounded-full ${color} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md sm:text-sm`}>
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="font-bold text-gray-900">Transformation {index + 1}</p>
                      <p className="text-sm text-gray-500">Groveton, Texas</p>
                    </div>
                    <Sparkles className="text-[#D946A6]" size={22} />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#D946A6] to-[#bd358d] px-6 py-10 text-center text-white shadow-xl sm:px-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Ready for your own transformation?</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/90">Let our team give your home the royal treatment.</p>
              <Link className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-bold text-[#1E5DB8] transition-transform hover:scale-105" to="/booking">
                Book Your Cleaning
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {selectedPhoto && (
        <div
          aria-label="Enlarged gallery photo"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
        >
          <button
            aria-label="Close enlarged photo"
            className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white transition-colors hover:bg-white/25 sm:right-8 sm:top-8"
            onClick={() => setSelectedPhoto(null)}
            type="button"
          >
            <X size={28} />
          </button>
          <div className="flex max-h-[90vh] max-w-5xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img
              alt={`${selectedPhoto.label} cleaning photo ${selectedPhoto.number} from ${selectedPhoto.location}`}
              className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
              src={selectedPhoto.src}
            />
            <p className="mt-3 font-semibold text-white">{selectedPhoto.label} · {selectedPhoto.location}</p>
          </div>
        </div>
      )}
    </div>
  )
}
