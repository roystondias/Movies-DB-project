import './App.css';
import Content from './Content/Content';
import GenreFilter from './Filters/GenreFilter';
//importing the Navbar component
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br />
      <GenreFilter></GenreFilter>
      <Content></Content>
    </div>
  );
}

export default App;
