import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react"
import Index from "../pages/Index";


describe("<Index />", () => {
    const renderIndex = () => (
        render (
        <BrowserRouter>
            <Index />
        </BrowserRouter>
        )
    )
    it("renders without crashing", () => {
        renderIndex()
    })
 
})