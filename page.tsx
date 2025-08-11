"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      <div className="absolute top-4 right-4">
        <a
          href="https://example.com"
          className="text-white font-medium hover:text-gray-300 underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://docs.google.com/document/d/1dwGMFOO1gLSLEvVM9iQPVnKsMui432dhXMEj2B9nbpw/edit?usp=sharing
        </a>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">fuck</h1>
        <p className="text-xl">you</p>
      </div>
    </div>
  )
}
