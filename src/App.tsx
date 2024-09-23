import './App.css';
import React, { useState } from 'react';
//importing all the components that will be used in App.js
import Content from './Content/Content';
import GenreFilter from './Filters/GenreFilter';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  //using the useState hook
  const [genreData, setGenreData] = useState("")
  const genreDataFunction = (data) => {
    setGenreData(data);
  }
  return (
    <div>
      {/* using the components */}
      <Navbar></Navbar><br />
      <GenreFilter data={genreDataFunction}></GenreFilter>
      <Content genreData={genreData}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
