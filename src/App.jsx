import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicesPage from "./Components/Service/Service";
import ContactPage from "./Components/Contact/Contact";
import ClientContactForm from "./Components/Template/Template";
import FormDataReceiver from "./Components/form data/Formdata";
import AboutUs from "./Components/About/AboutUS";
import Privacy from "./Components/Policy/Privacy";
import HomePreview from './Components/HomePreview/HomePreview';

function App() {
  return (
    <Router basename={process.env.GITHUB_PAGES ? "/CodeSphere" : "/"}>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Service" element={<ServicesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Template" element={<ClientContactForm />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Formdata" element={<FormDataReceiver />} />
        <Route path="/HomePreview" element={<HomePreview />} />
      </Routes>
    </Router>
  );
}

export default App;
