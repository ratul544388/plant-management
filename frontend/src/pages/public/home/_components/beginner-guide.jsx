import React from 'react'

const BeginnerGuide = () => {
  return (
      <section className='mt-12 p-5 bg-background rounded-xl'>
        <h2 className="text-primary mb-6 text-2xl font-bold">
          Beginner-Friendly Plants
        </h2>
        <div className="text-muted-foreground grid gap-6 md:grid-cols-3">
          <div className="shadow-sm rounded-xl border bg-white p-4 dark:bg-black">
            <h4 className="text-primary text-lg font-semibold">Snake Plant</h4>
            <p className="mt-1 text-sm">
              Extremely low-maintenance and great for indoor air quality.
            </p>
          </div>
          <div className="shadow-sm rounded-xl border bg-white p-4 dark:bg-black">
            <h4 className="text-primary text-lg font-semibold">Pothos</h4>
            <p className="mt-1 text-sm">
              Thrives in various light conditions and easy to propagate.
            </p>
          </div>
          <div className="shadow-sm rounded-xl border bg-white p-4 dark:bg-black">
            <h4 className="text-primary text-lg font-semibold">Aloe Vera</h4>
            <p className="mt-1 text-sm">
              Great for beginners and doubles as a soothing plant for cuts.
            </p>
          </div>
        </div>
      </section>
  )
}

export default BeginnerGuide
