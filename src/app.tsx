import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import SquareGame from './pages/squareGame/index'
import Calendar from './pages/calendar/index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/squareGame" element={<SquareGame />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
      </header>
    </div>
  );
}
function Home() {
  return (
    <div>
        <main>
            <h2>Welcome to the homepage</h2>
        </main>
        <nav>
            {/* <Link to="/about">about</Link>
            <br/> */}
            <Link to="/squareGame">squareGame</Link>
            <br/>
            <Link to="/calendar">calendar</Link>
        </nav>
    </div>
  );
}
function About() {
  return (
    <div>
        <main>
        <h2>Welcome to the about page</h2>
        </main>
        <nav>
        <ol>
            <Link to="/">home</Link> <br/>
            <Link to="/about">about</Link>
        </ol>

        </nav>
    </div>
  )
}
export default App;

