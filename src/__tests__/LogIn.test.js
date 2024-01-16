import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import LogIn from "../pages/LogIn"

describe("<LogIn />", () => {
    const renderHome = () =>
      render(
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      )
    it("renders without crashing", () => {
      renderHome()
    //   screen.logTestingPlaygroundURL()
    })
})