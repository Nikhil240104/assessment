import './App.css';
import Nav from './container/Nav';
import Photo from './container/Photo';
import Search from './container/Search';
import Third from './container/Third';
import Fourt from './container/Fourt';
import Fifth from "./container/Fifth";

function App() {
  return (
    // eslint-disable-next-line
   <div className='App'>
    <Nav />
     <Search />
     <Third /> 
     <Photo/>
     <Fourt />
     <Fifth />
    </div>
  );
}

export default App;
