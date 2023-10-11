import React from "react";
import { Form ,Button,Table} from "react-bootstrap";

class FormValidate extends React.Component {
  state = {
    name: '',
    email: '',
    city: '',
    mob: '',
    data:[],
  };


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
   console.log(this.state.mob)
  //  this.setState({mob:event.target.value})
 
   
  };

   
  handleSubmit = (event) => {
    // console.log(this.state);
    if (this.state.mob == "") {
      alert("please fill complete form")
    }
    else if (isNaN(this.state.mob)) {
      alert("enter number")
    }
    else if (this.state.mob.length < 10 || this.state.mob.length > 10) {
      alert("enter valid number")
  
    }
    else if(this.state.name == "" || this.state.name== null){
      alert("please enter name")
    }
    else if(this.state.email == "" || this.state.email== null){
      alert("please enter email")
    }
    else if(this.state.city == "" || this.state.city== null){
      alert("please enter city")
    }
    else if(this.state.name=="" ||this.state.email=="" ||this.state.city=="" ||this.state.mob==""){
      alert("please fill complted form")
    }
    else{
      alert("welcome to our website")
      event.preventDefault();
      let arr=this.state;
      this.setState({data:arr})  
    }
    
    this.setState({ name:'',email:'',city:'',mob:'' });
    

  }
  


  render() {
    
    return (
    
    <>
      {/* <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="mob"
          value={this.state.mob}
          onChange={this.handleChange}
        />

        <button type="submit">submit</button>
      </form>
       */}
    
      <Form onSubmit={this.handleSubmit} style={{width:"50%",height:"400px",marginLeft:"240px",marginTop:"40px",background:"black",color:"white",fontSize:"15px"}}>
      <Form.Group className="mb-2" controlId="formBasicEmail" style={{width:"80%",height:"70px",marginLeft:"50px",marginTop:"40px"}}>
        <Form.Label style={{marginTop:"10px"}}>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" name="name"
          value={this.state.name}
          onChange={this.handleChange}/>
    
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail" style={{width:"80%",height:"70px",marginLeft:"50px"}}>
        <Form.Label style={{marginTop:"10px"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" name="email"
          value={this.state.email}
          onChange={this.handleChange}/>
     </Form.Group>
    <Form.Group className="mb-2" controlId="formBasicEmail" style={{width:"80%",height:"70px",marginLeft:"50px"}}>
        <Form.Label style={{marginTop:"10px"}}>City</Form.Label>
        <Form.Control type="text" placeholder="Enter Your City"  name="city"
          value={this.state.city}
          onChange={this.handleChange}/>
    
      </Form.Group>
     <Form.Group className="mb-2" controlId="formBasicEmail" style={{width:"80%",height:"70px",marginLeft:"50px"}}>
        <Form.Label style={{marginTop:"10px"}}>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Mobile-no" name="mob"
          value={this.state.mob}
          onChange={this.handleChange}/>
    
      </Form.Group>
      <Button variant="secondary" type="submit" style={{marginLeft:"170px",marginTop:"30px",background:"white",color:"black"}}>
        Submit
      </Button>
    </Form>
    </>
    );
  }
}


class TableData extends FormValidate{
  render(){
    return (
      <>
      <table>
        {this.data.map((i)=>{
          return (
            <>
            <tr>
              <td>{i.name}</td>
            </tr>
            </>
          )
        })}
      </table>
      </>
    )
  }

}
 

export  {FormValidate,TableData};
