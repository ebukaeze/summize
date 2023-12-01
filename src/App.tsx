import Hero from "./components/Hero";
import Demo from "./components/Demo";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app xs:gap-y-8">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
