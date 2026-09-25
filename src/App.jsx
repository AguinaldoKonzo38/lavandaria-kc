import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Homepage from "./pages/homepage/homepage"

function App() {

  const Layout = () => {
    return (
      <div>
        < Outlet />
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
