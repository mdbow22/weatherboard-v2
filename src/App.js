import Menu from './components/Menu';
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
    <Menu />
    <div className="container">
      
      <Header />
    </div>
    </>
  );
}

export default App;
