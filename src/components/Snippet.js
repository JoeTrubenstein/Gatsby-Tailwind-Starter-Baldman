import React from "react"
import Highlight from "react-highlight"
import "../../node_modules/highlight.js/styles/nord.css"

function Snippet() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              Coded entirely by hand. My hand.
            </h1>
            <div className="leading-relaxed">
              Direct control over every moving part for the best performance
              possible.
              <br />A minimalist approach that favors speed, and simplicity.
            </div>
          </div>
        </div>
        <div style={{ whiteSpace: 'pre-wrap' }} className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Highlight style={{ whiteSpace: 'pre-wrap' }} language="javascript">
            <pre className="align-middle" style={{ whiteSpace: 'pre-wrap', marginTop: '24px' }}>
            {`
      import React from "react"
      import { Helmet } from "react-helmet"
      import useSiteMetadata from "../hooks/useSiteMetadata"
      
      const SEO = () => {
        const { title, description } = useSiteMetadata()
      
        return (
           "My Amazing Website"
        )
      }      
      `}
      </pre>
          </Highlight>
        </div>
      </div>
    </section>
  )
}

export default Snippet
