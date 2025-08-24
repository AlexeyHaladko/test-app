import App from "./App";
import { BrowserRouter } from "react-router-dom";

export function Layout() {
    return (
        <BrowserRouter basename="/test-app/">
            <App/>
        </BrowserRouter>
    )
}