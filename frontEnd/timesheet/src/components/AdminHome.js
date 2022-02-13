import React, { Component } from 'react'
import Navbar from './Navbar';
import './css/commonStyles.css'
import './css/AdminHome.css'
import { Link } from 'react-router-dom';

class AdminHome extends Component{

    constructor(props, history, sessionStorage) {
        super(props)
    }

    componentDidMount() {
        if(sessionStorage.getItem('Status') === 'false')
        {
            this.props.history.push("/")
        }

        console.log(sessionStorage.getItem('User-id'));
    }


    render() {
        return(
            <React.Fragment>
            <Navbar />
            <div className="page-contain">
                <Link to="/Department" style={{textDecoration: "none"}}>
                <div className="data-card">
                    <h3>DEPARTMENTS</h3>
                    <span className="link-text">View all Departments</span>
                </div>
                </Link>

                <Link to="/Employee" style={{textDecoration: "none"}}>
                <div className="data-card">
                    <h3>EMPLOYEES</h3>
                    <span className="link-text">View all Employees</span>
                </div>
                </Link>

                <Link to="" style={{textDecoration: "none"}}>
                <div className="data-card">
                    <h3>PROJECTS</h3>
                    <span className="link-text">View all Projects</span>
                </div>
                </Link>

                <Link to="/TimeSheet" style={{textDecoration: "none"}}>
                <div className="data-card">
                    <h3>TIMESHEETS</h3>
                    <span className="link-text">View all Timesheets</span>
                </div>
                </Link>
            </div>
            </React.Fragment>
        )
    }
}
export default AdminHome;