import React from "react"

function Portfolio() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Who wants a JAMstack site?
            </h1>
            <div className="h-1 w-20 bg-purple-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Everyone who finds out about them. DIY page builders are great - but
            they're clunky, bloated, and slow. Once you notice the difference,
            you won't be able to un-see it.
            <br />
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/WfV4KscvvBQ"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                For
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Restaurateurs
              </h2>
              <p className="leading-relaxed text-base">
                90% of diners search for a restaurant's website before eating there. And they won't wait around for a slow-loading menu.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className=" p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/MQ2xYBHImKM"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                For
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Private Practitioners
              </h2>
              <p className="leading-relaxed text-base">
                More people are seeking help than ever before. And a therapist's website is their chance to make that good first impression.  
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className=" p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://source.unsplash.com/ToUPBCO62Lw"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                For
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Artists
              </h2>
              <p className="leading-relaxed text-base">
                A lot of us won't ever need anything more than instagram. But a professional website for your portfolio creates new possibilities.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-top mb-6"
                src="https://source.unsplash.com/L2Nw-onZOX4"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                For
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Trainers and Coaches
              </h2>
              <p className="leading-relaxed text-base">
                Did you come out of lock-down in the best shape of your life? Have you since decided to monetize your new passion for fitness? A clean, fast website will let clients know you mean business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
