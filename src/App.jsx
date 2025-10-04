import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicesPage from "./Components/Service/Service";
import ContactPage from "./Components/Contact/Contact";
import ClientContactForm from "./Components/Template/Template";
import AboutUs from "./Components/About/AboutUS";
// import Privacy from "./Components/Policy/Privacy";
import FAQPage from './Components/FAQ/FAQ';
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<ServicesPage />} />
        <Route path="/Template" element={<ClientContactForm />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        {/* <Route path="/Privacy" element={<Privacy />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
