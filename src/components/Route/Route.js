



import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Service from '../Services/Service';
import Tutor from '../Tutors/Tutor';
import Contact from '../Contact/Contact';
const Route = () => {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Service></Service>
          </Route>
          <Route exact path="/tutors">
            <Tutor></Tutor>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}







export default Route;