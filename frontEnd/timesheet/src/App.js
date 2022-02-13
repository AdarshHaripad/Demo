
import './components/css/Home.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Departments from './components/Departments';
import AddDepartment from './components/AddDepartment';
import DeleteDepartment from './components/DeleteDepartment';
import HOME from './components/HOME';
import AdminHome from './components/AdminHome';
import EmployeeForm from './components/EmployeeForm';



class App extends Component
 {
    render()
    {
      return(<Router>
        <Switch>   
          <Route exact path='/' component={HOME}/>
          <Route path='/Department'  component={Departments}></Route>
          <Route path='/SaveDepartment/:deptId'  component={AddDepartment}></Route>
          <Route path='/DeleteDepartment/:deptId' component={DeleteDepartment}></Route>
          <Route path='/Employee' component={EmployeeForm}/>
          <Route path="/Admin/Home" component={AdminHome} />
          
          
            
          
          
          
        </Switch>
      </Router>
      
      );

    }
    /* state = {
    department : []
  };

  async componentDidMount(){
    const response = await fetch('/Department');
    const body = await response.json();
    this.setState({Department:body});
  }
  render () 
  {
    const {Department} = this.state;
    return (
     <div className = "App">
       <header className = "App-header">
        <div className = "App-intro">
          <h2>Department</h2>
          {Department.map(Dept => 
            <div key={Dept.deptId}>
              {Dept.deptName} ({Dept.task})
            </div>
            
            
            )}
        </div>

       </header>
     </div>

  );
} */
}
export default App;