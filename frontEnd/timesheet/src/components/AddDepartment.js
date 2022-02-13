import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import Navbar from './Navbar';

class AddDepartment extends Component
{
    dptment={
        deptName:"",
        deptId:"",
        task:"",
        manager:""
    };
    constructor(props)
    {
        super(props);
        this.state = {
            item: this.dptment

        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    async componentDidMount()
    {
        if(this.props.match.params.deptId!== 'new'){
            const dept = await(await fetch(`/Department/${this.props.match.params.deptId}`)).json();
            this.setState({item:dept});
        }
    }
    handleChange(event)
    {
        const target=event.target;
        const value=target.value;
        const name=target.name;
        let item={...this.state.item};
        item[name] = value;
        
        this.setState({item});
    }
    async handleSubmit(event)
    {
        event.preventDefault();
        const {item} = this.state;
        
       //  alert((item.deptId) ? 'PUT':'POST');
      //  alert(JSON.stringify(item));
        await fetch('/Department'+ (item.deptId ? '/UpdateDepartment/'+item.deptId : '/SaveDepartment'),
                   { method : (item.deptId) ? 'PUT':'POST',
                    headers: {'Accept': 'application/json',
                                'Content-Type' : 'application/json'},
                    body : JSON.stringify(item),});
        this.props.history.push('/Department');
    }

    render()
    {
        const {item} = this.state;
        const title = <h1 className="text-center p-5">
            {item.deptId ? 'Update Department' : 'Add Department'}
        </h1>;

        return( <div>

            <Navbar/>
            
            <Container>
                {title}
                <Form onSubmit = {this.handleSubmit}>
                    <FormGroup>
                        <Label for="deptName"> Department Name</Label>
                        <Input type="text" name="deptName" id ="name" required="Required" value={item.deptName || ''} onChange={this.handleChange} autoComplete ="deptName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="task">Task</Label>
                        <Input type="text" name="task" id="task" required="Required" value={item.task || ''} onChange={this.handleChange} autoComplete="task"/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="manager">Manager</Label>
                        <Input type="text" name="manager" id="mgr" required="Required" value={item.manager || ''} onChange={this.handleChange} autoComplete="manager"/>
                    </FormGroup> 
                    <FormGroup>
                        <Button type="submit" color="primary">Save</Button>
                        <Button color="secondary" tag={Link} to="/Department">Cancel</Button>
                    </FormGroup>
                    
                </Form>

            </Container>

        </div>)

    }

}
export default withRouter(AddDepartment);