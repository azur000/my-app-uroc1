import React from 'react';
//import './styleMessage.css';


export const Message=({logo, text})=> {
   const mesengeBodi = {
      backgroundColor: "#86a5e2",
      width: "400px",
      margin: "16px 200px",
      paddingLeft: "16px",
   }

   const pstyle={
      color: "green",
      borderColor: "red",
      fontSize: "1.2em"
   }

   return (
      <div style={mesengeBodi}>
         <mesenge className="">
         <h1 style={{color:"red", borderColor:"green"}}>public Mesenge</h1>
         <p style={pstyle}>всем здрасьте</p>
         </mesenge>
       </div>
   );
};

