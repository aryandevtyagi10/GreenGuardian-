import React from 'react';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import OfficeFinder from './components/OfficeFinder';
import QuoteDisplay from './components/QuoteDisplay';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <QuoteDisplay />
        <UploadForm />
        <OfficeFinder />
      </div>
    </div>
  );
}

export default App;
