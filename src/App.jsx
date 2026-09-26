import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Homepage from "./pages/homepage/homepage"
import SolicitarServico from "./pages/solicitar-service/solicitar"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import WhatsappButton from "./components/whatsapp-button/whatsapp"

function App() {

  const Layout = () => {
    return (
      <div>
        <Header />
        < Outlet />
        <Footer />
        <WhatsappButton />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/solicitar-servico",
          element: <SolicitarServico />,
        }
      ]
    }
  ])

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>

    </div>
  )
}

export default App
