import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import AddStudent from './components/AddStudent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">


      <AppBar position="static" color="default">

        <Toolbar>
           <Typography variant="h6" color="inherit">
            Student Registration
           </Typography>

        </Toolbar>
      </AppBar>

            <BrowserRouter>
       <Switch>
        <Route exact path='/' component={AddStudent} />
       </Switch>
      </BrowserRouter>


        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>

        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route exact path='/students' component={AddStudent} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;