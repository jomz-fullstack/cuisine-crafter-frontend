import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react"
import New from "../pages/New";


describe("<New />", () => {
    const renderNew = () => (
        render (
        <BrowserRouter>
            <New />
        </BrowserRouter>
        )
    )
    it("renders without crashing", () => {
        renderNew()
    })
    screen.logTestingPlaygroundURL();
})