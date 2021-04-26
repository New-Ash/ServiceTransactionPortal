import React, { Component } from 'react'
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Card from "react-bootstrap/Card";

const jwt = require('jsonwebtoken')

 

  
var c_id;

function getUserID(){
  var token = document.cookie.split('=')[1];
  jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
    if (err) {
        console.log(err);
    } else{
      c_id = decodedToken.id;
     
    }
  })
}


export class ListItemsCusHistory extends Component {

  

  state={
    posts: []

  };



  componentDidMount(){
   this.getBlogPost();
   
  };
  

  getBlogPost(){
    
    console.log("listitems "+c_id);
    
    axios.get('http://localhost:4000/api4/'+c_id)
    .then((response)=>{
      const data= response.data;
      this.setState({posts:data});

      console.log("data from mongo recieved to prof history list item")
      console.log(data);


    })
    .catch((error)=>{
      console.log("data from mongo didnrt receive");

    })
  }



  render() {
    getUserID();
    
    const items=this.state.posts;

    console.log("lisitmes");
    

     return this.state.posts.map((item,index)=>{

     return(
      <Card style={{marginTop:"2%",border:"2px solid",boxShadow:"0px 14px 20px rgba(34, 35, 58, 0.2)",marginLeft:"10%",marginRight:"10%" ,color:'black',padding:"10px"}}>
      <div  key={index}>
      <h3>City : {(item.location).charAt(0).toUpperCase() + (item.location).slice(1)}  </h3> 
      
      <h3>Profession : {(item.profession).charAt(0).toUpperCase()+(item.profession).slice(1)}</h3>
    <p>Description : {item.body}</p>
   <br></br>
   <h5>Customer Name : {item.name}</h5>
    <h5>Customer Contact Number : {item.phoneNo}</h5>
    <h5>Customer Email : {item.email}</h5>
   
   <p><b>Job Completed</b></p>
       
       
      
    </div>
    </Card>

     )
       

   
       })
    
    
    
 

  }
}

export default ListItemsCusHistory;