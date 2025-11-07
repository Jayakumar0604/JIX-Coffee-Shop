import React from 'react'

const SBackground = ({ title, text, image }) => {
  return (
    <section
      className="relative min-h-[500px] bg-cover bg-center bg-fixed flex items-center justify-center px-6 py-12 text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Full black overlay */}
      <div className="absolute inset-0 bg-black/60  z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl w-full">
        <h2 className="text-2xl md:text-3xl lg:text-5xl oswald-Bold uppercase mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-base">
          {text}
        </p>
      </div>
    </section>
  )
}

export default SBackground