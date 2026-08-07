import { useEffect, useState } from 'react'

const HERO_IMAGE =
  'https://images.pexels.com/photos/10178910/pexels-photo-10178910.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = HERO_IMAGE
    img.onload = () => setLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        <section className="overflow-hidden relative min-h-screen w-full">
          {/* Background image */}
          <img
            src={HERO_IMAGE}
            alt="Cloud-covered mountains at sunrise"
            className={`inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ position: 'absolute' }}
          />

          {/* Vignette overlay */}
          <div
            className="vignette-overlay inset-0"
            style={{
              position: 'absolute',
              background:
                'radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)',
            }}
          />

          {/* Content layer */}
          <div className="z-10 relative flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              Above the Clouds
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg font-light leading-relaxed sm:text-xl"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
            >
              Experience the quiet grandeur of a sunrise over the peaks — where
              the world below fades and the sky opens wide.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 transition-transform duration-200 hover:scale-105 hover:bg-neutral-100">
                Explore
              </button>
              <button className="rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
