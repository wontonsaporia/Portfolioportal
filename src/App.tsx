import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Placeholder from "./pages/Placeholder";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/notes"
            element={
              <Placeholder
                title="Notes"
                note="研究ノート・思考メモ。準備中（MVPでは後日追加）。"
              />
            }
          />
          <Route
            path="/teaching"
            element={
              <Placeholder
                title="Teaching"
                note="講座・ワークショップの実績。準備中（MVPでは後日追加）。"
              />
            }
          />
          <Route
            path="*"
            element={<Placeholder title="404" note="ページが見つかりません。" />}
          />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
