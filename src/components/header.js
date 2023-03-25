import * as React from "react"
import HeroIcon from "../images/bald-hero.png"

const Header = ({ siteTitle }) => (
  <header>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex items-center justify-center max-h-sm lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="h-48 center" src={HeroIcon} alt=""/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{siteTitle}</h1>
          <p className="mb-8 leading-relaxed">I really like Gatsby and Tailwind. This starter template and its components lets me, or anyone, spin up a new project quickly.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>
  </header>
)

export default Header
