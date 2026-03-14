import Navbar from './components/Navbar';
import About from './sections/About';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        {/* Experience, Projects, Skills, Contact sections will be added here */}
      </main>
    </div>
  );
}

export default App;
