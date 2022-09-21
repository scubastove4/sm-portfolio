import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import resume from '../Resume/Stephen_Morello_Resume.pdf'

const Resume = () => {
  return (
    <div id="resume">
      <a href={resume} download={resume}>
        <button>Download</button>
      </a>
      {/* {resumeImage ? ( */}
      <Document
        file={resume}
        onLoadError={console.error}
        style={{ width: '50%', height: '100%' }}
      >
        <Page pageIndex={0} />
      </Document>
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
