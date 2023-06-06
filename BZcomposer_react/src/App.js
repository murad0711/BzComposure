import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Cart from "./pages/cart";
import POS from "./pages/p-o-s";
import POS1 from "./pages/p-o-s1";
import Pose from "./pages/pose";
import Invoice from "./pages/invoice";
import Invoice1 from "./pages/invoice1";
import Invoice2 from "./pages/invoice2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pos1":
        title = "";
        metaDescription = "";
        break;
      case "/pos":
        title = "";
        metaDescription = "";
        break;
      case "/pose":
        title = "";
        metaDescription = "";
        break;
      case "/invoice2":
        title = "";
        metaDescription = "";
        break;
      case "/invoice":
        title = "";
        metaDescription = "";
        break;
      case "/invoice1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/pos1" element={<POS />} />
      <Route path="/pos" element={<POS1 />} />
      <Route path="/pose" element={<Pose />} />
      <Route path="/invoice2" element={<Invoice />} />
      <Route path="/invoice" element={<Invoice1 />} />
      <Route path="/invoice1" element={<Invoice2 />} />
    </Routes>
  );
}
export default App;
