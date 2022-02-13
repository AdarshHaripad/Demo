import React from 'react';
import './css/Home.css';
import Navbar from './Navbar';

class Portfolio extends React.Component
{
     constructor(props,history,sessionstorage)
     {
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
            
                 </tr>
    });
    
    return (
    <div>

        
        
           <Navbar />
               
            
            <div className="container-md bg-white">
            <h1 className="text-center p-5">Portfolio</h1>
           
            <table className="table table-striped table-bordered border-dark">
            <thead className="table-dark ">
                    <tr>
                        
                        <th width="30%">Department Name</th>
                      
                    </tr>
                </thead>
                <tbody>{departmentList}</tbody>
            </table>
           
           
          
        
    </div>
    </div>)
     }

}
export default Portfolio;