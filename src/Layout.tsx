import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

export function Layout() {
    return (
        <BrowserRouter basename="/test-app/">
            <App/>
        </BrowserRouter>
    )
}