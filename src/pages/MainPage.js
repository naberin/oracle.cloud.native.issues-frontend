import AppHeader from "../components/Header";
import "../main.css";
import {Route, Routes} from "react-router-dom";
import ProjectIssues from "./Issues/ProjectIssues";

const Page = function () {
    return (
        <main id="main" data-testid="main">
            <AppHeader />

            <Routes>
                <Route path="/" element={<ProjectIssues />}/>
            </Routes>
        </main>
    )
}
export default Page;

