import React from "react"
import moth from "../images/mothmaps.png"
import material from "../images/materialalbum.png"
import kanji from "../images/kanjicards.png"

function Cards() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="container px-5 py-24 mx-auto"></div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={moth}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  React, MongoDB
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Moth Maps
                </h1>
                <p className="leading-relaxed mb-3">
                  Uses the Google Maps API to track alleged sightings of the
                  MothMan
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    href="https://mothmaps.com"
                    className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Live Site &nbsp; | &nbsp;
                  </a>
                  <a
                    href="https://github.com/JoeTrubenstein/mothmaps-2020"
                    className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Code Repo
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={material}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  GatsbyJS
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Material Album
                </h1>
                <p className="leading-relaxed mb-3">
                  My contribution to my favorite open source project, GatsbyJS
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    href="https://gatsby-starter-material-album.netlify.app/"
                    className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Live Site &nbsp; | &nbsp;
                  </a>
                  <a
                    href="https://github.com/JoeTrubenstein/gatsby-starter-material-album"
                    className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Code Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={kanji}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  GatsbyJS, MongoDB
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Kanji Cards
                </h1>
                <p className="leading-relaxed mb-3">
                  Flashcards using Material UI to review Japanese characters
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    href="https://kanjicards.netlify.app/"
                    className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Live Site &nbsp; | &nbsp;
                  </a>
                  <a
                    href="https://github.com/JoeTrubenstein/material-kanji"
                    className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Code Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
