import React, {Component} from 'react';
import './css/Home.css'
import logo from './css/images/enxcl-new-logo.png'

class HOME extends Component{ 

   emptyEmployee = {empName:'',empId:'',email:'',doj:'',dob:'',deptName:'',reportingManager:'',roles:''};
     emptyDepartment={deptname:'',deptid:'',task:'',manager:''};
    constructor(props, history) {
        super(props)

        this.state={
            userId:'',
            password:'', 
            error: '',
        }

        this.PostForm = this.PostForm.bind(this);
       
    }

    componentDidMount() {
        sessionStorage.setItem('Status', false)
        this.setState({error: false})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

     PostForm = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(response => response.text()).then(data => {
            sessionStorage.setItem('Status' , true) 
            sessionStorage.setItem('User-id' , this.state.userId)
           // alert(data);
            if( data === 'Employee')
            {
               console.log("Redirecting to Employee page");

            }
            else if(data === 'Manager')
            {
                console.log("Redirecting to Manager page");
            }
            
            else if(data === 'Super Admin')
            {
                console.log("Redirecting to SuperAdmin page");
                this.props.history.push("/Admin/Home");
            }/*
           
            else{ this.handleChange(e) 
                e.preventDefault();
                fetch('/Department/portfolioLogin',{
                    method: "POST",
                    headers: {
                        'Accept' :'application/json',
                        'Content-Type' : 'application/json'
                    },
                    body :JSON.stringify(this.state)
                }).then(Response => Response.text()).then(data => {
                    sessionStorage.setItem('Status',true)
                    sessionStorage.setItem('User-id',this.state.userId)
                    alert(data);
                    if(data === 'Academy')
                    {
                        console.log("Redirecting to Portfolio page");
                        this.props.history.push("/Portfolio");
                    } else{
                       console.log("ERRORS")
                       
                       this.setState({error: true});
                       
                   }
                });}*/
                else{
                console.log("ERROR")
                this.setState({error: true});
                }
                
            }
        ); 
    } 

    invalidCredentials() {
        return(
            <div>
                <p>Invalid Credentials</p>
            </div>
        )
    }

    removeError = (e) => {
        this.setState({error: false});
    }


    render() {

        const {userId, password} = this.state;
        const error1 = this.state.error;
    return(
        <React.Fragment>
            <div className="main">
                    <div className="split left"><img src={logo} alt="sample-logo" width="130" height="40"></img>
                        <div className="container1">
                            <h1 id="login">LOGIN</h1>
                            <div className="Form mt-2">
                                <form onSubmit={this.PostForm}>
                                    <input type="text" placeholder="Enter user id" className="form-control mt-2"
                                     onChange={this.handleChange} name="userId" value={userId} autoFocus onClick={this.removeError} autoComplete="off" ></input>
                                     

                                    <input type="password" placeholder="Password" className="form-control mt-2" 
                                     onChange={this.handleChange} name="password" value={password} onClick={this.removeError}></input>

                                    <button type="submit" className="button mt-3">SIGN IN</button>
                                </form>
                            </div>
                            {
                                    error1?
                                    ( 
                                            
                                                <div id="invalid">
                                                    <p>Invalid Credentails</p>
                                                </div>
                                    )
                                    :
                                    (
                                        <div></div>
                                    )
                                   
                                }
                        </div>
                    </div>
                    <div className="split right">
                        <div className="innerdiv"><img src={logo} alt="sample-logo" width="130" height="40"></img>
                        <h2>Welcome to</h2>
                        <h1 id="CompanyName"> enxcl Business Solutions</h1>
                        <p>'enhance excellence'</p>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )}
}

export default HOME;