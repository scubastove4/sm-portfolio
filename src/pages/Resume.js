import { Document } from 'react-pdf/dist/esm/entry.webpack5'
import resume from '../Resume/SMorelloResume.pdf'

const Resume = () => {
  return (
    <div>
      {resume && (
        <Document
          file={
            'https://drive.google.com/file/d/1ol0aSZFwPCpkeuk9pOnZuQViKbcqIH4O/view?usp=sharing'
          }
          onLoadError={console.error}
          style={{ width: '50vw', height: '100%' }}
        ></Document>
      )}
      {/* <object
      data={resume}
      type="application/pdf"
      width="100%"
      height="100%"
    ></object> */}
    </div>
  )
}

export default Resume
