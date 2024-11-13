import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Play } from "./pages/play";
import { Settings } from "./pages/settings";


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/play" element={<Play />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
  )
}

