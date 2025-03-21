import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import NavBar from './components/nav-bar';
import Pagenotfound from './components/pagenotfound';
import Aboutus from './components/about-us';
import Contactus from './components/contact-us';
import Todo_list from './components/Todo_list'; 


  const App=()=> {
    return (
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/todo-list" element={<Todo_list />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    );
  }

export default App;