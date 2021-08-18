import React from 'react';
import {useState}  from 'react';

 function MessageList() {
   const myRef = React.createRef();

   const [messages, setMessages] = useState([
      {
         autor: "",
         text: "",
         taime: "",
      }
   ]);

   let addMessages = () =>{
      let messagesValue = myRef.current.value;
      let message = [...messages, messagesValue];
      setMessages(message);
      myRef.current.value="";
   }

   return (
  <>
   <div>
      <textarea ref={myRef}></textarea>
   </div>
   <div>
      <button onClick={addMessages}>Add messages</button>
   </div>
   <div>
      <ul>
         {messages.map((item, index) => <li key={index.toString()}>{item}</li>)}
      </ul>
   </div>
   </>
   );
}

export default MessageList;