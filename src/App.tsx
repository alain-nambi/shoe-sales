import './styles/globals.css'
import Container from './components/container'
import Footer from './components/footer'

import { RouterProvider } from "react-router-dom"

import router from './routes/router'

function App() {
  return (
    <>
      <Container>
        <RouterProvider router={router} />
      </Container>
      <Footer />
    </>
  )
}

export default App
