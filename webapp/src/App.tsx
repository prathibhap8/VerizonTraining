import { Fragment } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from './components/routes';
import Header from './components/headerComponent';
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes/>
        </main>
      </BrowserRouter>
    </Fragment>      
  );
}

export default App;
