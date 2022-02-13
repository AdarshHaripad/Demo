import React from 'react';
import './css/Home.css'

import { Button, ButtonGroup} from 'reactstrap';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Departments extends React.Component

{

        constructor(props,history,sessionStorage){
            super(props);
            this.state={department:[]};
          
        }

        componentDidMount()
        {
            if(sessionStorage.getItem('Status') === 'false')
        {
            this.props.history.push("/")
        }
        else{
            fetch("/Department").then(Response=> Response.json()).then(data=> this.setState({department:data}));
        }
           
        }
 

render()
{
    const {department,isLoading}=this.state;
    if(isLoading){
        return <p>Loading.....</p>
    }
    const departmentList=department.map(dept => {
            return <tr key={dept.deptId}>
                
                <td style={{whiteSpace:'nowrap'}}>{dept.deptName}</td>
                <td>{dept.task}</td>
                <td>{dept.manager}</td>

    
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/SaveDepartment/"+dept.deptId}>Edit</Button>
                        <Button size="sm" color="danger" tag={Link} to={"/DeleteDepartment/"+dept.deptId}>Delete</Button>
                    </ButtonGroup>
                </td>
               

        </tr>
    });
    
    return (
    <div>

        
        
           <Navbar />
               
            
            <div className="container-md bg-white">
            <h1 className="text-center p-5">Departments</h1>
           
            <table className="table table-striped table-bordered border-dark">
            <thead className="table-dark ">
                    <tr>
                        
                        <th width="30%">Department Name</th>
                        <th width="30%">Task</th>
                        <th width="30%">Manager</th>
                        <th width="10%">Actions</th>
                       
                    </tr>
                </thead>
                <tbody>{departmentList}</tbody>
            </table>
            <div>
                <Link  to="/SaveDepartment/new">
            <button className="button">Add Department</button></Link>
          
            </div>
            <div align="right">
                <Link to="/Admin/Home"><button className="button:hover">Home</button></Link>
            </div>
          
        
    </div>
    </div>)
    }

}

export default Departments;