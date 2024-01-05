import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer";


describe("<Footer />", () => {
    const renderFooter = () => (
        render (
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
        )
    )
    it("renders without crashing", () => {
        renderFooter()
    })
    screen.logTestingPlaygroundURL();
})