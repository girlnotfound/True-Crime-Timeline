import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import TimelinePage from "./pages/TimelinePage.jsx";
import CaseOverviewPage from "./pages/CaseOverviewPage.jsx";
import EvidenceboardPage from "./pages/EvidenceboardPage.jsx";
import Navigation from "./components/shared/Navigation.jsx";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/case/:id" element={<CaseOverviewPage />} />
          <Route path="/evidence/:caseId" element={<EvidenceboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
