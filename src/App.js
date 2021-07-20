import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
            <VendingMachine />
        </Route>
        <Route exact path='/soda'>
            <Soda />
        </Route>
        <Route exact path='/chips'>
            <Chips />
        </Route>
        <Route exact path='/sardines'>
            <Sardines />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
