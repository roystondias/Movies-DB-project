import './App.css';
import React, { useState } from 'react';
import Content from './content/Content';
import GenreFilter from './filters/GenreFilter';
import Navbar from './navbar/Navbar.tsx';
import Footer from './footer/Footer.tsx';

function App() {
  const [genreData, setGenreData] = useState("")
  const genreDataFunction = (data: any) => {
    setGenreData(data);
  }
  return (
    <div>
      <Navbar /><br />
      <GenreFilter data={genreDataFunction} />
      <Content genreData={genreData} />
      <Footer />
    </div>
  );
}

export default App;
