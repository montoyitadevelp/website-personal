import { Route } from "wouter";
import { Footer, Head } from "./components";
import { Work } from "./pages/TravelWork/Work";
import ContactUs  from "./pages/Contact/Contact";
import Navbar from "./components/HomePage/Navbar/NavBar";
import styledHome from "./Home-layout.module.scss";



function App() {
  return (
    <>
      <span className={styledHome.homeLayout}>
        <Navbar />
        <Route path="/" component={Head} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={ContactUs} />
        <Footer />
      </span>
    </>
  );
}

export default App;
