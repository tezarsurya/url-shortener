import { useState } from "react";
import Boost from "./components/Boost";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full pt-12">
        <Hero />
        <Features />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
