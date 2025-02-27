import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <Banner />
      <NavBar />
      <div className="flex-grow">
        <AboutMe />
      </div>
    </div>
  );
}


export default App;