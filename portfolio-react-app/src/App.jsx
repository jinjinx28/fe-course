import Header from './components/Header.jsx';
import Content from './components/Component.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { fetchData } from './util/fetch.js';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const jsonData = await fetchData("http://localhost:5174/data/portfolio.json");
      setData(jsonData);
    }
    loadData();
  }, []);

  return (
    <>
      <Header data = {data?.header}/>
      <Content />
      <Footer />
    </>
  )
}

