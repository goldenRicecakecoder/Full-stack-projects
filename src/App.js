import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles.css';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
     <h1>Hello, Welcome to App </h1>
     <Header />
     <Hero />
     <Card />
     <Footer />
    </div>
  );
}

export default App;
