import React, { Component } from "react";
import { withRouter } from "react-router";
import Navbar from "./Navbar";

class EmployeeForm extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      employees: [],

      updateEmployee: {empName:'',empId:'',email:'',doj:'',dob:'',deptName:'',reportingManager:'',roles:''},

      empName:'',
      email:'',
      doj:'',
      dob:'',
      deptName:'',
      reportingManager:'',
      roles:'',
      
      department: []
    };

    this.handleChange=this.handleChange.bind(this);
    this.PostForm=this.PostForm.bind(this);
  }

  handleChange = (e) => {
    //this.setState({ [e.target.name]: e.target.value })

    const target = e.target;
    const value = target.value;
    const name = target.name;
    let updateEmployee = {...this.state.updateEmployee};
    updateEmployee[name] = value;
    this.setState({updateEmployee})

    console.log(updateEmployee);
  }

  async componentDidMount() {

    if(this.props.match.params.empId!== 'new')
    {
      const updateEmployee = await(await fetch(`/Employee/${this.props.match.params.empId}`)).json();
      this.setState({updateEmployee: updateEmployee});

      await fetch("/Employee")
      .then((response) => response.json())
      .then((data) => this.setState({ employees: data }));

      await fetch("/Department/getDepartmentNames")
      .then((response) => response.json())
      .then((data) => this.setState({department: data}));

    }
    else{
    fetch("/Employee")
      .then((response) => response.json())
      .then((data) => this.setState({ employees: data }));


      await fetch("/Department/getDepartmentNames")
      .then((response) => response.json())
      .then((data) => this.setState({department: data}, console.log(data)));

    
    }
  }


  PostForm = (e) => {
    e.preventDefault();
    const {updateEmployee} = this.state;
    fetch((this.state.updateEmployee.empId? ('/addEmployee/' + this.state.updateEmployee.empId) : '/addEmployee'), {
        method: (this.state.updateEmployee.empId)? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateEmployee)
    });
    this.props.history.push('/Employee');

  }


  render(){

    const {empName, email, doj, dob, reportingManager, deptName, roles} = this.state;
    const {updateEmployee} = this.state;

  return (
    <React.Fragment>
      <Navbar />
        <div className="container col-6 mt-5">
          <h1 className="text-left mb-5">{updateEmployee.empId? 'Edit Employee' : 'Add Employee'}</h1>
          <form className="row g-3" onSubmit={this.PostForm}>
              <div className="col-md-12 mb-2">
              <label  className="form-label">Name:</label>
              <input type="text" className="form-control" name="empName" placeholder="Enter name" onChange={this.handleChange} value={empName || updateEmployee.empName}></input>
              </div>

              <div className="col-md-12 mb-2">
              <label  className="form-label">Email:</label>
              <input type="text" className="form-control" name="email" placeholder="example@gmail.com" onChange={this.handleChange}  value={email || updateEmployee.email}></input>
              </div>

              <div className="col-md-12 mb-2">
              <label  className="form-label">Date of Joining:</label>
              <input type="date" className="form-control" name="doj" placeholder="mm/dd/yyyy" onChange={this.handleChange}  value={doj || updateEmployee.doj}></input>
              </div>

              <div className="col-md-12 mb-2">
              <label  className="form-label">Date of Birth:</label>
              <input type="date" className="form-control" name="dob" placeholder="mm/dd/yyyy" onChange={this.handleChange} value={dob || updateEmployee.dob}></input>
              </div>

              <div className="col-md-12 mb-2">
              <label  className="form-label">Department:</label>
                <select className="form-select" aria-label="Default select example" name="deptName" onChange={this.handleChange} value={deptName || updateEmployee.deptName}>
                  <option  defaultValue >Select Department</option>
                      {
                        this.state.department.map((deptName) => {
                          return <option key={deptName}>{deptName}</option>
                        })
                      }
                </select>
              </div>

              <div className="col-md-12 mb-2">
              <label className="form-label">Reporting Manager:</label>
                <select className="form-select" aria-label="Default select example" name="reportingManager" onChange={this.handleChange} value={reportingManager || updateEmployee.reportingManager}>
                  <option defaultValue>Select Manager</option>
                    {this.state.employees.map((employees) => {

                      if(employees.roles === 'Manager')
                      {
                        return <option  key={employees.empId} > {employees.empName} </option>
                      }
                      else{
                        return null;
                      }
                    })}
                </select>
              </div>

              <div className="col-md-12 mb-2">
              <label  className="form-label">Role:</label>
                <select className="form-select" aria-label="Default select example" name="roles" onChange={this.handleChange}  value={roles || updateEmployee.roles}>
                  <option defaultValue>Select Role</option>
                  <option >Super Admin</option>
                  <option >Manager</option>
                  <option >Employee</option>
                </select>
              </div>

              <div className="col md-12">
              <button type="submit" className="button mt-3">SUBMIT</button>
              </div>

          </form>
        </div>
      </React.Fragment>
  );
}
}

export default withRouter(EmployeeForm);