import { useState } from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full pt-24 pb-6">
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default App;
