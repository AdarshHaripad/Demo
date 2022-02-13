import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import searchIcon from './css/images/search-icon.png';
import './css/Home.css'
import './css/commonStyles.css'
import ReactLoading from 'react-loading';

export default function NewList() {

const [employees, setEmployees] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [filteredResults, setFilteredResults] = useState([]);
const [done, setDone] = useState(undefined);

useEffect(() => {
    setTimeout(() => {
      fetch("/Employee" )
    .then((response) => response.json())
    .then((data) => setEmployees(data));
    setDone(true);
    }, 500);
}, [])

const searchData = (value) => {
    setSearchTerm(value)
    if(searchTerm !== '')
    {
        const filteredData = employees.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase());
         })
         setFilteredResults(filteredData)
    }
    else
    {
        setFilteredResults(employees)
    }
   
}

return (
    <div>
      {
        !done? (
          <div id="loading">
            <div>
            <ReactLoading type={"balls"} color={"#ffc14f"} height={200} width={200}></ReactLoading>) 
            </div>
         </div> )
        :
      (
      <div>
        <Navbar />
      <div className="container-md bg-white">
        <h1 className="text-center p-5">Employee List</h1>
        <div className="search">
          <input type="text" className="form-control mb-2" placeholder="Type to search" name="searchTerm"
          onChange={(e) => searchData(e.target.value)}></input>
          <img src={searchIcon} alt="search" id="search_icon" width="20" height="20"></img>
        </div>
        <table className="table table-striped table-bordered border-dark">
            <thead className="table-dark ">
              <tr>
                <th>Employee Name</th>
                <th>Employee Id</th>
                <th>Date of Joining</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Department Name</th>
                <th>Role</th>
                <th>Reporting Manager</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
        {
            
            searchTerm.length >1 ? (
                filteredResults.map((employees) => {

                    let newEmpId = '';
                if(employees.empId < 10)
                {
                  newEmpId = 'XLC000' + employees.empId;
                }
                else if(employees.empId >=10 && employees.empId < 100)
                {
                  newEmpId = 'XLC00' + employees.empId;
                }
                else if(employees.empId >=100 && employees.empId < 1000)
                {
                  newEmpId = 'XLC0' + employees.empId;
                }
                else if(employees.empId >=1000 && employees.empId<= 9999){
                  newEmpId = 'XLC' + employees.empId;
                }

                    return(
                        <tr key={employees.empId}>
                  <td> {employees.empName} </td>
                  <td> {newEmpId}</td>
                  <td> {employees.doj} </td>
                  <td> {employees.dob} </td>
                  <td> {employees.email} </td>
                  <td> {employees.deptName} </td>
                  <td> {employees.roles} </td>
                  <td> {employees.reportingManager}</td>
                  <td>
                    <div
                      className="btn-group" role="group">
                        <Link to={"/addEmployee/"+ employees.empId}>
                      <button type="button" className="btn btn-primary">EDIT</button>
                      </Link>
                      <Link to={"/deleteEmployee/" + employees.empId}>
                        <button type="button" className="btn btn-danger">DELETE</button>
                      </Link>
                    </div>
                  </td>
                  </tr>
                  )
                })
            ) : (
                employees.map((employees) => {

                    let newEmpId = '';
                if(employees.empId < 10)
                {
                  newEmpId = 'XLC000' + employees.empId;
                }
                else if(employees.empId >=10 && employees.empId < 100)
                {
                  newEmpId = 'XLC00' + employees.empId;
                }
                else if(employees.empId >=100 && employees.empId < 1000)
                {
                  newEmpId = 'XLC0' + employees.empId;
                }
                else if(employees.empId >=1000 && employees.empId<= 9999){
                  newEmpId = 'XLC' + employees.empId;
                }

                    return(
                        <tr key={employees.empId}>
                  <td> {employees.empName} </td>
                  <td> {newEmpId}</td>
                  <td> {employees.doj} </td>
                  <td> {employees.dob} </td>
                  <td> {employees.email} </td>
                  <td> {employees.deptName} </td>
                  <td> {employees.roles} </td>
                  <td> {employees.reportingManager}</td>
                  <td>
                    <div
                      className="btn-group" role="group">
                        <Link to={"/addEmployee/"+ employees.empId}>
                      <button type="button" className="btn btn-primary">EDIT</button>
                      </Link>
                      <Link to={"/deleteEmployee/" + employees.empId}>
                        <button type="button" className="btn btn-danger">DELETE</button>
                      </Link>
                    </div>
                  </td>
                  </tr>
                  )
                })
            )
        }
        </tbody>
        </table>
        <div>
             <Link to="/addEmployee/new">
              <button type="button" className="button">ADD</button>
             </Link>
            </div>
      </div>
      </div>
      )}
    </div>
  );







}