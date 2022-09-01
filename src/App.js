// import logo from './logo.svg';
import './App.css';

import TourList from './components/TourList'
import TourDisc from './components/TourDisc'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

const Tour = () =>{
  return (
      <Outlet />
  )
}

const Home = ()=> {
  return <h1>Home</h1>
}

const FAQ = ()=> {
  return <h1>FAQ</h1>
}
const Layout = ()=> {
  return (
    < >
      <nav className='App-header' >
        <ul>
          <li className='App-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='App-link'>
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li className='App-link'>
            <Link to="/tour">Tour</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet  />
      </div>
      <footer>HexSchool React 線上讀書會作業</footer>
    </>
  )
}

const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":Id" element={<TourDisc />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
