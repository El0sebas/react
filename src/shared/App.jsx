import { Routes, Route } from "react-router-dom"
import { Header } from "../features/layout/components/Header"
import { Footer } from "../features/layout/components/Footer"
import { Content } from "../features/layout/components/Content"
import Props from "../features/layout/components/Props"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App