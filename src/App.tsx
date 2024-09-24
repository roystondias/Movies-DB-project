import './App.css';
import React, { useState } from 'react';
//importing all the components that will be used in App.js
import Content from './content/Content';
import GenreFilter from './filters/GenreFilter';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

function App() {
  //using the useState hook
  const [genreData, setGenreData] = useState("")
  const genreDataFunction = (data) => {
    setGenreData(data);
  }
  return (
    <div>
      <Navbar></Navbar><br />
      <GenreFilter data={genreDataFunction}></GenreFilter>
      <Content genreData={genreData}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
