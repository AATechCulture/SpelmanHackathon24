
import Button from "@mui/material/Button"
import {useState} from 'react';
function AppButton(){
    const [msg, setmsg] = useState<string>("Okay");
    function onButtonClick(){
        const url = "http://localhost:11434/api/generate";
            const options = {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
                    },
              body: JSON.stringify({
                "model": "llama3:8b",
                "prompt": "Why did the chicken cross the road?",
                "stream": false
              }),
                  }
    fetch(url, options)
    .then( (res)=>{
      //this executes if the promise is fulfilled
      console.log(res);
      return (res.json())
    },

    (res2) => {
      //this executes if the promise is rejected
    }
  )
  .then((data) =>{
    //this executes if the json() promise is fulfilled
    console.log(data)
    setmsg(data.message.content)
  },
  (data)=> {

    //this executes if the json() promise if not fulfilled
  }
    )   
  }

return(<>
    <Button onClick={onButtonClick} variant="contained">Get Notes</Button>
    <p>{msg}</p>
    </>);}

export default AppButton;