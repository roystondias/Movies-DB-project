import './App.css';
import React, { useState } from 'react';
import Content from './content/Content';
import GenreFilter from './filters/GenreFilter';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

function App() {
  const [genreData, setGenreData] = useState("")
  const genreDataFunction = (data) => {
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
