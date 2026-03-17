import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="bg-gradient" />
      <div className="grain" />

      {/* Corner accents */}
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />

      <main className="container">
        <p className="eyebrow">FFL Licensed Dealer</p>

        <h1 className="company-name">
          <span className="name-mjg">MJG</span>
          <span className="name-firearms">Firearms</span>
        </h1>

        <div className="divider">
          <span className="divider-line" />
          <svg className="divider-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="#c4922a" />
          </svg>
          <span className="divider-line" />
        </div>

        <p className="tagline">Licensed &bull; Trusted &bull; Ready to Serve</p>

        <div className="coming-soon-block">
          <h2 className="coming-soon">Coming Soon</h2>
        </div>

        <p className="description">
          Your local destination for FFL transfers and quality firearms.
        </p>
      </main>
    </div>
  )
}

export default App
