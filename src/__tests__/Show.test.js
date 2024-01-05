import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react"
import Show from "../pages/Show";


describe("<Show />", () => {
    const renderShow = () => (
        render (
        <BrowserRouter>
            <Show />
        </BrowserRouter>
        )
    )
    it("renders without crashing", () => {
        renderShow()
    })
    screen.logTestingPlaygroundURL();
})