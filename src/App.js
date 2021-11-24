import './App.css';
import { Routes, Route } from "react-router-dom"
import Choice from './views/Choice/Choice';
import Groups from "./views/Groups/Groups"
import Students from "./views/Students/Students"
import Teachers from "./views/Teachers/Teachers"

function App() {
  return (
        <Routes>
          <Route path="/" element={<Choice/>}/>
          <Route path="/groups" element={<Groups/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/teachers" element={<Teachers/>}/>
        </Routes>
  );
}

export default App;
