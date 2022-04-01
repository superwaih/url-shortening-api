import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import ShortenBox from './components/ShortenBox';
function App() {
  return (
<BrowserRouter>
<div className="App"> 
<Routes>
    <Route path='/' exact element={<Nav /> } />
    {/* <Route path='/hero' exact element={ <Hero /> }/> */}
    {/* <Route path='/shortenbox' exact element={ <ShortenBox /> } /> */}

</Routes>
<Hero />
<ShortenBox />
<Footer />
  </div>


</BrowserRouter>
  );
}

export default App;
