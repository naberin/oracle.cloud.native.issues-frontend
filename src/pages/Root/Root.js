import './Root.css';
import AppHeader from "../../components/AppHeader/Header";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Dashboard";

function Root() {
  return (
    <main id="app-root" data-testid="app-root">
            <AppHeader title="Issue Tracker"/>

            <Routes>
                <Route path="/" element={<Dashboard/>} />
            </Routes>
    </main>
  );
}

export default Root;
