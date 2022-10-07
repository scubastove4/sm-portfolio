import { useState } from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import resume from '../Resume/Stephen_Morello_Resume.pdf'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/'
}

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div id="resume">
      <a href={resume} download={resume}>
        <button>Download</button>
      </a>
      {/* //////  help with showing multiple pages and CSS
       https://github.com/wojtekmaj/react-pdf/tree/main/sample/create-react-app-5/src */}
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        style={{ width: '50%', height: '100%' }}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
      {/* ) : (
        <object
          data={resume}
          type="application/pdf"
          width="100%"
          height="100%"
          name="SMorello-Resume"
        >
          <p>
            Google OneDrive copy of
            <a href="https://drive.google.com/file/d/1ol0aSZFwPCpkeuk9pOnZuQViKbcqIH4O/view?usp=sharing">
              Resume
            </a>
          </p>
        </object>
      )} */}
    </div>
  )
}

export default Resume
