import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react"
import Edit from "../pages/Edit";


describe("<Edit />", () => {
    const renderEdit = () => (
        render (
        <BrowserRouter>
            <Edit />
        </BrowserRouter>
        )
    )
    it("renders without crashing", () => {
        renderEdit()
    })
    screen.logTestingPlaygroundURL();
})