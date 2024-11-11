import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import TabsContainer from "../components/TabsContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TabsContainer />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;