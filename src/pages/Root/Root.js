import {Route, Routes} from "react-router-dom";

import './Root.css';

import AppHeader from "../../components/AppHeader/Header";
import Dashboard from "../Dashboard";
import Projects from "../Projects/All";

function Root() {
  return (
    <main id="app-root" data-testid="app-root" className="flex flex-col">
            <AppHeader title="Issue Tracker"/>

            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
    </main>
  );
}

export default Root;
