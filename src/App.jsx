import Menu from './Components/Menu';
import MenuBoard from './Components/MenuBoard';
import './App.css';
import {Route,Routes, useLocation } from "react-router-dom";
import Sell from './Components/Sell';
import ErrorPage from './Components/ErrorPage';
import WhoAreYou from './Components/WhoAreYou';
import Employee from './Components/Employee';
import { OrderedItemsProvider } from './Components/OrderedItemsContext';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <OrderedItemsProvider>
        <Routes >
          <Route path='/' element={ <Menu/>}/>
          <Route path='/whoAreYou' element={ <WhoAreYou/>}/>
          <Route path='/employee' element={ <Employee/>}/>
          <Route path='/menu' element={ <MenuBoard/>}/>
          <Route path='/errorPage' element={ <ErrorPage errorType={"itemError"}/>}/>
          <Route path='*' element={ <ErrorPage errorType={"pageError"}/>}/>
        </Routes>
      </OrderedItemsProvider> 
    </div>
  );
}

export default App;
