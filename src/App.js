import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAllStudent from './components/ViewAllStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <LoginPage/> }/>
      <Route path="/add" element={ <AddStudent/> }/>
      <Route path="/search" element={ <SearchStudent/> }/>
      <Route path="/delete" element={ <DeleteStudent/> }/>
      <Route path="/view" element={ <ViewAllStudent/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
