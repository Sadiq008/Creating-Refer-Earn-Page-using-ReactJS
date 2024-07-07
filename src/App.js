import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";
import LinkTab from "./components/LinkTab";
import Content from "./components/Content";
import Refer from "./components/Refer";
import ReferralBenefits from "./components/ReferralBenefits";
import FreqAsked from "./components/FreqAsked";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <LinkTab />
      <Content />
      <Refer />
      <ReferralBenefits />
      <FreqAsked />
      <Support />
      <Footer />
    </>
  );
}

export default App;
