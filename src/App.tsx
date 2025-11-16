import { CV } from './components/CV'
import { PrintBar } from './components/PrintBar'
import { cvData } from './data/cv'

function App() {
  return (
    <>
      <PrintBar />
      <CV data={cvData} />
    </>
  )
}

export default App
