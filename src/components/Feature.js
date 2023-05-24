import React from "react"
import speed from "../images/speed.svg"
import security from "../images/security.svg"
import simplicity from "../images/simplicity.svg"

function Feature() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            What are JAMstack sites and why should I care?
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Great question. I think these are the 3 most important takeaways.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-48 h-48 inline-flex items-center justify-center rounded-full text-purple-500 mb-5 flex-shrink-0">
              <img src={speed} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Speed
              </h2>
              <p className="leading-relaxed text-base">
                If a website doesn't load immediately, I leave that website.
                Don't you? JAMstack sites often use static pages that can
                deliver content significantly faster.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-48 h-48 inline-flex items-center justify-center rounded-full text-purple-500 mb-5 flex-shrink-0">
              <img src={security} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Security
              </h2>
              <p className="leading-relaxed text-base">
                Traditional website architecture is prone to an awful lot of
                attacks. JAMstack development forgoes these practices in favor
                of much safer ones.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-48 h-48 inline-flex items-center justify-center rounded-full  text-purple-500 mb-5 flex-shrink-0">
              <img src={simplicity} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Simplicity
              </h2>
              <p className="leading-relaxed text-base">
                JAMstack sites are low maintenance. A single ambitious developer (like myself) can manage everything from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
