import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPageDarkMode from "./pages/LandingPageDarkMode";
import PricingPage from "./pages/PricingPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import FriendAvtarChatPage from "./pages/FriendAvtarChatPage";
import LandingPageLightMode from "./pages/LandingPageLightMode";
import ABOUTPAGE from "./pages/ABOUTPAGE";
import EducatorAvtarChatPage from "./pages/EducatorAvtarChatPage";
import AvtarSectionPage from "./pages/AvtarSectionPage";

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
      case "/pricing-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page":
        title = "";
        metaDescription = "";
        break;
      case "/friend-avtar-chat-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-light-mode-1":
        title = "";
        metaDescription = "";
        break;
      case "/about-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/educator-avtar-chat-page":
        title = "";
        metaDescription = "";
        break;
      case "/avtar-section-page":
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
      <Route path="/" element={<LandingPageDarkMode />} />
      <Route path="/pricing-page-3" element={<PricingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/contact-page" element={<ContactPage />} />
      <Route path="/friend-avtar-chat-page" element={<FriendAvtarChatPage />} />
      <Route
        path="/landing-page-light-mode-1"
        element={<LandingPageLightMode />}
      />
      <Route path="/about-page-2" element={<ABOUTPAGE />} />
      <Route
        path="/educator-avtar-chat-page"
        element={<EducatorAvtarChatPage />}
      />
      <Route path="/avtar-section-page" element={<AvtarSectionPage />} />
    </Routes>
  );
}
export default App;
