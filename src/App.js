import Menu from './components/Menu';
import Hero from './components/Hero';
import WeatherProvider from './utils/WeatherContext';
import './App.css';

function Header() {
  return (
    <header className="mt-4">
      <h1 className="text-center title fw-bold">WeatherBoard</h1>
    </header>
  )
}

function App() {
  return (
    <>
    <WeatherProvider>
      <Menu />
      <div className="container">
        <Hero />
      </div>
    </WeatherProvider>
    </>
  );
}

export default App;
