import React, {Component} from 'react';
import {Link,withRouter}  from 'react-router-dom';
import { ButtonGroup,Button } from 'reactstrap';
import Navbar from './Navbar';
import './css/Home.css'

class DeleteDepartment extends Component
{
    
        
        constructor(props)
        {
            super(props);
            this.state = {
                item:[]
    
            };
           
            this.remove=this.remove.bind(this);
        }
    async componentDidMount()
    {
              
            await fetch(`/Department/${this.props.match.params.deptId}`).then((response) => response.json())
            .then((data) => this.setState({ item: data }));
            
        
    }
   
     remove =(e)=>
   {
    
    
   // alert('DELETE');
      const url="/Department/DeleteDepartment/"+this.props.match.params.deptId;
      console.log(url);
     fetch( url ,
    {
        method : 'DELETE',
        headers : {'Accept' : 'application/json','Content-Type':'application/json'}
    }).then((response) => response.text()
                );
                this.props.history.push('/Department');
  }
  render()
  {
      const {item} = this.state;
     

      return( 
       <div>
           <Navbar/>
                  
        <div className="container-md bg-white">
        <h1 className="text-center p-5">Delete Departments</h1>
        <table className="table table-striped table-bordered border-dark">
        <thead className="table-dark ">
                <tr>
                    
                    <th width="30%">Department Name</th>
                    <th width="30%">Task</th>
                    <th width="30%">Manager</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr  key={item.deptId}>
                  <td>{item.deptName}</td>
                  <td>{item.task}</td>
                  <td>{item.manager}</td>
                </tr>
            </tbody>
        </table>
        <div>
         <ButtonGroup>   
        <Button className="btn btn-danger" onClick={this.remove}>Delete</Button>
        <Button className="btn btn-secondary" tag={Link} to="/Department">Cancel</Button>
        </ButtonGroup>
        </div>
      
    
</div>
</div>)

  }
}
export default withRouter(DeleteDepartment);
