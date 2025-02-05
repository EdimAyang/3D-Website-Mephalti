import React from "react"
import { AppStyle } from "./Global"
import { GlobalStyles } from "./Global"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


//pages
import Home from "./pages/homepage/Home"
import Create from "./pages/create/Create"
import Contact from "./pages/contact/Contact"
function App() {

  const Router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/create",
      element:<Create />
    },
    {
      path:"/contact",
      element:<Contact />
    }
  ])
  return (
    <>
    <GlobalStyles />
    <AppStyle>
      <RouterProvider router={Router} />
    </AppStyle>
    </>
  )
}

export default App
