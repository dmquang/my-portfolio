import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Giả lập tải dữ liệu
    }, 0); // Chờ 3 giây để giả lập trang load
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {isLoading ? <Skeleton height={200} /> : <Banner />}
      {isLoading ? <Skeleton height={60} /> : <NavBar />}
      <div className="flex-grow">
        {isLoading ? <Skeleton height={400} /> : <AboutMe />}
      </div>
    </div>
  );
}

export default App;
