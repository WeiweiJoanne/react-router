// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom'

function Home() {
  return <h1>Home</h1>
}

function FAQ() {
  return <h1>FAQ</h1>
}
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path="Id" element={<TourDisc />} />
          </Route>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
