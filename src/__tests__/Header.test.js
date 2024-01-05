import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react"
import Header from "../components/Header";


describe("<Header />", () => {
    const renderHeader = () => (
        render (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
    )
    it("renders without crashing", () => {
        renderHeader()
    })
    screen.logTestingPlaygroundURL();
})