import React from "react"

function Tube() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">


        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/cbyywwEhW1U"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Making my own crypto
            </h2>
            <p className="leading-relaxed text-base">
              Demonstrating how to build one's own blockchain using Python
            </p>

          </div>

          <div className="sm:w-1/2 mb-10 px-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/yZur8IGgY1Q"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Hacking (my own) Wi-Fi
            </h2>
            <p className="leading-relaxed text-base">
              Password cracking with Kali Linux and an antenna I found in Akihabara
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Tube
