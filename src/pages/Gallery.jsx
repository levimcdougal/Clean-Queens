import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, MapPin, Sparkles, X } from 'lucide-react'
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
import before9 from '../assets/b9.jpg'
import before10 from '../assets/b10.jpg'
import before11 from '../assets/b11.jpg'
import before12 from '../assets/b12.jpg'
import before13 from '../assets/b13.jpg'
import before14 from '../assets/b14.jpg'
import after9 from '../assets/a9.jpg'
import after10 from '../assets/a10.jpg'
import after11 from '../assets/a11.jpg'
import after12 from '../assets/a12.jpg'
import after13 from '../assets/a13.jpg'
import after14 from '../assets/a14.jpg'
import grapeland1 from '../assets/pic1.jpg'
import grapeland2 from '../assets/pic2.jpg'
import grapeland3 from '../assets/pic3.jpg'
import grapeland4 from '../assets/pic4.jpg'
import grapeland5 from '../assets/pic5.jpg'
import grapeland6 from '../assets/pic6.jpg'
import grapeland7 from '../assets/pic7.jpg'
import grapeland8 from '../assets/pic8.jpg'
import grapeland9 from '../assets/pic9.jpg'
import grapeland10 from '../assets/pic10.jpg'
import huntsville11 from '../assets/pic11.jpg'
import huntsville12 from '../assets/pic12.jpg'
import huntsville13 from '../assets/pic13.jpg'
import huntsville14 from '../assets/pic14.jpg'
import huntsville19 from '../assets/pic19.jpg'
import huntsville20 from '../assets/pic20.jpg'
import huntsville21 from '../assets/pic21.jpg'
import huntsville22 from '../assets/pic22.jpg'
import moveOut23 from '../assets/pic23.jpg'
import moveOut24 from '../assets/pic24.jpg'
import moveOut25 from '../assets/pic25.jpg'
import moveOut26 from '../assets/pic26.jpg'
import moveOut27 from '../assets/pic27.jpg'
import moveOut28 from '../assets/pic28.jpg'
import moveOut29 from '../assets/pic29.jpg'
import moveOut30 from '../assets/pic30.jpg'
import moveOut31 from '../assets/pic31.jpg'
import moveOut32 from '../assets/pic32.jpg'
import moveOut33 from '../assets/pic33.jpg'
import moveOut34 from '../assets/pic34.jpg'
import moveOut35 from '../assets/pic35.jpg'
import moveOut36 from '../assets/pic36.jpg'

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

const bryanCollegeStationProjects = [
  { before: before9, after: after9 },
  { before: before10, after: after10 },
  { before: before11, after: after11 },
  { before: before12, after: after12 },
  { before: before13, after: after13 },
  { before: before14, after: after14 },
]

const grapelandProjects = [
  { before: grapeland2, after: grapeland1 },
  { before: grapeland4, after: grapeland3 },
  { before: grapeland6, after: grapeland5 },
  { before: grapeland8, after: grapeland7 },
  { before: grapeland10, after: grapeland9 },
]

const huntsvilleProjects = [
  { before: huntsville12, after: huntsville11 },
  { before: huntsville14, after: huntsville13 },
  { before: huntsville20, after: huntsville19 },
  { before: huntsville22, after: huntsville21 },
]

const huntsvilleMoveOutProjects = [
  { before: moveOut23, after: moveOut24 },
  { before: moveOut25, after: moveOut26 },
  { before: moveOut27, after: moveOut28 },
  { before: moveOut29, after: moveOut30 },
  { before: moveOut32, after: moveOut31 },
  { before: moveOut33, after: moveOut34 },
  { before: moveOut35, after: moveOut36 },
]

const addedPhotos = import.meta.glob('../assets/gallery/*.jpg', { eager: true, import: 'default' })
const photo = (name) => addedPhotos[`../assets/gallery/${name}.jpg`]

const conroeProjects = ['Carpet', 'Closet', 'Vanity', 'Shower', 'Tub', 'Toilet'].map((title) => ({
  title,
  before: photo(`conroe-${title.toLowerCase()}-before`),
  after: photo(`conroe-${title.toLowerCase()}-after`),
}))

const conroeExtraPhotos = [
  { caption: 'Bedroom', src: photo('conroe-bedroom-before') },
  { caption: 'Bathroom', src: photo('conroe-bathroom-before') },
  { caption: 'Bathroom vanity overview', src: photo('conroe-bathroom-vanity-angle-before') },
]

const loveladyProjects = [
  'Toilet', 'Sitting room', 'Living room', 'Primary bedroom', 'Bedroom', 'Dining room',
  'Entryway', 'Kitchen', 'Shower', 'Bathtub', 'Vanity',
].map((title, index) => ({
  title,
  before: photo(`lovelady-${index + 1}-before`),
  after: photo(`lovelady-${index + 1}-after`),
}))

const albums = [
  { id: 'tomball-tx', location: 'Tomball, TX', title: 'Tomball Home Transformations', projects: tomballProjects },
  { id: 'groveton-tx', location: 'Groveton, TX', title: 'Groveton Home Transformations', projects: grovetonProjects },
  { id: 'bryan-college-station-tx', location: 'Bryan/College Station, TX', title: 'Bryan/College Station Home Transformations', buttonLabel: 'View all photos from this area', projects: bryanCollegeStationProjects },
  { id: 'grapeland-tx', location: 'Grapeland, TX', title: 'Grapeland Deep Clean', projects: grapelandProjects },
  { id: 'huntsville-tx', location: 'Huntsville, TX', title: 'Huntsville Deep Clean', projects: huntsvilleProjects },
  { id: 'huntsville-move-out-clean', location: 'Huntsville, TX', title: 'Huntsville Move-Out Clean', projects: huntsvilleMoveOutProjects },
  { id: 'conroe-tx', location: 'Conroe, TX', title: 'Conroe Home Transformations', projects: conroeProjects, extraPhotos: conroeExtraPhotos },
  { id: 'lovelady-tx', location: 'Lovelady, TX', title: 'Lovelady Home Transformations', projects: loveladyProjects },
]

const photoLabels = [
  { side: 'before', label: 'Before', color: 'bg-[#1E5DB8]' },
  { side: 'after', label: 'After', color: 'bg-[#287a31]' },
]

function Photos({ project, title, onSelect }) {
  return (
    <div className="grid grid-cols-2">
      {photoLabels.filter(({ side }) => project[side]).map(({ side, label, color }) => (
        <button
          aria-label={`Enlarge ${label.toLowerCase()} photo of ${title}`}
          className="group relative aspect-[4/5] overflow-hidden bg-gray-100 sm:aspect-[4/3]"
          key={side}
          onClick={() => onSelect(side)}
          type="button"
        >
          <img alt={`${label} cleaning photo of ${title}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" decoding="async" loading="lazy" src={project[side]} />
          <span className={`absolute left-2 top-2 rounded-full ${color} px-3 py-1 text-xs font-bold uppercase text-white shadow-md`}>{label}</span>
        </button>
      ))}
    </div>
  )
}

function AlbumDialog({ album, initialSide, onClose }) {
  const dialog = useRef(null)
  const swipeStart = useRef(null)
  const [photoIndex, setPhotoIndex] = useState(initialSide === 'after' ? 1 : initialSide === 'before' ? 0 : null)
  const pairedPhotos = album.projects.flatMap((project, index) =>
    photoLabels.filter(({ side }) => project[side]).map(({ side, label }) => ({
      src: project[side],
      caption: `${label} · ${project.title ?? `Transformation ${index + 1}`}`,
    })),
  )
  const photos = [...pairedPhotos, ...(album.extraPhotos ?? [])]
  const selected = photos[photoIndex]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const element = dialog.current
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function movePhoto(step) {
    setPhotoIndex((index) => (index + step + photos.length) % photos.length)
  }

  function handleKey(event) {
    if (!selected) return
    if (event.key === 'ArrowLeft') movePhoto(-1)
    if (event.key === 'ArrowRight') movePhoto(1)
  }

  return (
    <dialog
      aria-labelledby="gallery-album-title"
      className="m-auto max-h-[92dvh] w-[min(96vw,64rem)] max-w-none overflow-y-auto rounded-2xl bg-white text-gray-900 shadow-xl backdrop:bg-black/80"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={handleKey}
      ref={dialog}
    >
      <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-[#1E5DB8]" id="gallery-album-title">{album.title}</h2>
          <button aria-label="Close album" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200" onClick={onClose} type="button"><X size={24} /></button>
        </div>
        {selected ? (
          <div>
            <button className="mb-3 font-semibold text-[#1E5DB8] underline" onClick={() => setPhotoIndex(null)} type="button">Back to album</button>
            <img
              alt={selected.caption}
              className="mx-auto max-h-[62dvh] w-full touch-pan-y rounded-xl object-contain"
              draggable={false}
              onTouchStart={(event) => { swipeStart.current = event.touches[0] }}
              onTouchCancel={() => { swipeStart.current = null }}
              onTouchEnd={(event) => {
                const start = swipeStart.current
                swipeStart.current = null
                if (start === null) return
                const end = event.changedTouches[0]
                const horizontal = end.clientX - start.clientX
                const vertical = end.clientY - start.clientY
                if (Math.abs(horizontal) > Math.max(45, Math.abs(vertical))) movePhoto(horizontal < 0 ? 1 : -1)
              }}
              src={selected.src}
            />
            <div className="mt-3 flex items-center justify-between gap-2 text-center">
              <button aria-label="Previous photo" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200" onClick={() => movePhoto(-1)} type="button"><ChevronLeft /></button>
              <p aria-live="polite">{selected.caption} · {photoIndex + 1} of {photos.length}</p>
              <button aria-label="Next photo" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200" onClick={() => movePhoto(1)} type="button"><ChevronRight /></button>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {album.projects.map((project, index) => {
              const title = project.title ?? `Transformation ${index + 1}`
              const firstPhoto = photos.findIndex(({ src }) => src === project.before)
              return (
                <article className="overflow-hidden rounded-xl border border-gray-200" key={project.before}>
                  <Photos project={project} title={title} onSelect={(side) => setPhotoIndex(firstPhoto + (side === 'after' ? 1 : 0))} />
                  <h3 className="px-4 py-3 font-semibold">{title}</h3>
                </article>
              )
            })}
            {album.extraPhotos && (
              <article className="mx-auto w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-2 sm:col-span-2 sm:p-3" aria-label="Additional Conroe photos">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {album.extraPhotos.map(({ src, caption }, index) => (
                    <button
                      aria-label={`Enlarge photo of ${caption}`}
                      className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2"
                      key={src}
                      onClick={() => setPhotoIndex(pairedPhotos.length + index)}
                      type="button"
                    >
                      <img alt={caption} className="h-full w-full object-cover object-bottom" decoding="async" loading="lazy" src={src} />
                    </button>
                  ))}
                </div>
              </article>
            )}
          </div>
        )}
      </div>
    </dialog>
  )
}

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState(null)

  return (
    <div className="site-page gallery-page w-full bg-[#f8fbff]">
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

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {albums.map((album) => (
            <FadeIn key={album.id}>
              <article className="scroll-mt-28 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/70" id={album.id}>
                <Photos project={album.projects[0]} title={album.title} onSelect={(side) => setActiveAlbum({ album, side })} />
                <div className="px-5 py-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-[#287a31]"><MapPin size={16} /> {album.location}</p>
                  <h2 className="my-2 text-2xl font-bold text-[#1E5DB8]">{album.title}</h2>
                  <button
                    aria-label={`${album.buttonLabel ?? 'View all photos from this home'}: ${album.title}`}
                    className="rounded-full bg-[#1E5DB8] px-5 py-2.5 font-semibold text-white hover:bg-[#17498f]"
                    onClick={() => setActiveAlbum({ album })}
                    type="button"
                  >
                    {album.buttonLabel ?? 'View all photos from this home'}
                  </button>
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

      {activeAlbum && <AlbumDialog album={activeAlbum.album} initialSide={activeAlbum.side} onClose={() => setActiveAlbum(null)} />}
    </div>
  )
}
