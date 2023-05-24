import React from "react";

// import kanji from "../images/kanjicards.png";
// import gatsby from "../images/gatsby.png";
// import moth from "../images/moth.png";

function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <p className="font-display text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Recent Projects
      </p>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 p-2">
          <div className="max-w-sm min-h-full  rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-28"
              src="https://source.unsplash.com/random"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-display text-indigo-600 font-bold text-xl mb-2"><a className="hover:text-indigo-400 focus:outline-none" href="https://mothmaps.com">Moth Maps</a></div>
              <p className="font-body text-gray-500 text-base">
                React, MongoDB, TailwindCSS, and the Google Maps API.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 p-2">
          <div className="max-w-sm  min-h-full  rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-28"
              src="https://source.unsplash.com/random"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
            <div className="font-display text-indigo-600 font-bold text-xl mb-2"><a className="hover:text-indigo-400 focus:outline-none" href="https://gatsby-starter-material-album.netlify.app/">Material Album</a></div>
              <p className="font-body text-gray-500 text-base">
                A GatsbyJS static photography portfolio written in React, using
                Material UI.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 p-2">
          <div className="max-w-sm  min-h-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-28"
              src="https://source.unsplash.com/random"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
            <div className="font-display text-indigo-600 font-bold text-xl mb-2"><a className="hover:text-indigo-400 focus:outline-none" href="https://kanjicards.netlify.app/">Kanji Cards</a></div>
              <p className="font-body text-gray-500 text-base">
                A GatsbyJS site using MongoDB, and Material UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;