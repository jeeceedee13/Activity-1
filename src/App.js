import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,
        FormGroup,ControlLabel,
        FormControl,HelpBlock,
        Checkbox,Radio,
        Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    address:"",
    pet:[],
    status:""
  };
  
  onChange = (fieldName)=>{
    return (event)=>{
    var state = this.state;
    state[fieldName]=event.target.value;
    this.setState(state);  
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value) >=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value),1
      
    );
    else
    targetArray.push(event.target.value);
    
    var state = this.state;
    state[fieldName]=targetArray;
    this.setState(state);
    }
  };
   
  targetArray
  render() {
    return (
      <div className="container">
        <div className="page-header">
        <h2>Student Survey</h2>
          
   
        </div>
        <div className="jumbotron">
        
        <Grid>
        <Row>
        
        <Col md={6}>
        <Form>
          
        <FormGroup>
        <ControlLabel>Name please</ControlLabel>
        <FormControl type="text" 
        placeholder="Name here..."
        value={this.state.name}
        onChange={this.onChange('name')}
        />
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite color</ControlLabel>
        <FormControl componentClass="select" 
        placeholder="Color here..."
        value={this.state.color}
        onChange={this.onChange('color')}
        >
        <option value="Red"> Red </option>
        <option value="Blue"> Blue </option>
        <option value="Green"> Green </option>
        </FormControl>
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movie</ControlLabel>
        <Checkbox value="crows zero I"
                  checked={this.state.movies.indexOf('crows zero I') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  Crows Zero I
                  </Checkbox>
        <Checkbox value="crows zero II"
                  checked={this.state.movies.indexOf('crows zero II') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  Crows Zero II </Checkbox>
        <Checkbox value="crows zero III"
                  checked={this.state.movies.indexOf('crows zero III') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  Crows Zero III </Checkbox>
        </FormGroup>
        
         <FormGroup>
        <ControlLabel>Gender</ControlLabel>
        <Radio name="gender" 
        value="Male" onChange={this.onChange('gender')}> Male</Radio>
        <Radio name="gender" 
        value="Female" onChange={this.onChange('gender')}> Female</Radio>
        </FormGroup>
        
          
          
          <FormGroup>
        <ControlLabel>Address</ControlLabel>
        <FormControl type="text" 
        placeholder="Address here..."
        value={this.state.address}
        onChange={this.onChange('address')}
        />
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Pet</ControlLabel>
        <Checkbox value="Snake"
                  checked={this.state.pet.indexOf('Snake') >=0 ? true:false}
                  onChange={this.checkboxChange('pet')}>
                  Snake
                  </Checkbox>
        <Checkbox value="Bird"
                  checked={this.state.pet.indexOf('Bird') >=0 ? true:false}
                  onChange={this.checkboxChange('pet')}>
                  Bird </Checkbox>
        <Checkbox value="Cat"
                  checked={this.state.pet.indexOf('Cat') >=0 ? true:false}
                  onChange={this.checkboxChange('pet')}>
                  Cat </Checkbox>
        <Checkbox value="Dog"
                  checked={this.state.pet.indexOf('Dog') >=0 ? true:false}
                  onChange={this.checkboxChange('pet')}>
                  Dog </Checkbox>          
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Status</ControlLabel>
        <Radio name="status" 
        value="Single" onChange={this.onChange('status')}> Single</Radio>
        <Radio name="status" 
        value="Married" onChange={this.onChange('status')}> Married</Radio>
        <Radio name="status" 
        value="Widowed" onChange={this.onChange('status')}> Widowed</Radio>
        </FormGroup>
        
          </Form>
        </Col>
        
        <Col md={6}>
        <strong> Name is: {this.state.name}</strong><br/>
        <strong> Color is: {this.state.color}</strong><br/>
        <strong> Movies is: {this.state.movies.map((item,i) =>{
        return <div>
        <span className="label label-info">{item}</span>
        </div>  
        
        
    })
          
        }</strong><br/>
        
          
        
        <strong> Gender is: {this.state.gender}</strong><br/>
        <strong> Address is: {this.state.address}</strong><br/>
        <strong> Pet is: {this.state.pet.map((item,i) =>{
        return <div>
        <span className="label label-info">{item}</span>
        </div>  
        
        
    })
          
        }</strong><br/>
        <strong> Status is: {this.state.status}</strong><br/>
        
      
          
        
        <br/>
        <br/>
        <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-music"></span> 
          Info Button </Button>
          <Button bsStyle="primary"> Primary Button </Button>
          <Button bsStyle="warning"> Warning Button </Button>
          <Button bsStyle="danger"> Error Button </Button>
          </ButtonGroup>
        
        </Col>
        
        </Row>
        
        </Grid>
        
       
        </div>
      </div>
    );
  }
}

export default App;
