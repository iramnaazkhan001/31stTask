// import React, { useState } from "react";
// export default function App() {
//   const [value, setValue] = useState("");
//   const [result, setResult] = useState("");
//   const handleChange = e => {  
//     setValue(e.target.value);
//     setResult("");
//   }
//   const isPrime = num => {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   const handleClick = _ => {
//     if (isNaN(value)) {
//       setResult("ERROR");
//     } else {
//       const res = isPrime(parseInt(value, 10)) ? "YES": "NO";
//       setResult(res);
//     }
//   }
//   let text = "";
//   let classValue = "";
//   if (result === "YES") {
//     text = `${value} is a prime number`;
//     classValue = "success panel";
//   } else if (result === "NO") {
//     text = `${value} is not a prime number`;
//     classValue="error panel";
//   } else if (result === "ERROR") {
//     text = `${value} is not a number`;
//     classValue="error panel";
//   }
//   return (
//     <div className="App">
//       <div>
//         <p>Enter number to verify prime number</p>
//         <input type="text" className="input" value={value} onChange={handleChange}/>
//       </div>
//       <div>
//         <button className="button" onClick={handleClick}>Check</button>
//       </div>
//       <div className={ classValue }>{text}</div>
//     </div>
//   );
// }

import { useState } from "react";
export default function Prime(){
  const [value, setValue]=useState('');
  const [result, setResult]= useState('');
  const handle=e=>
  {
    setValue(e.target.value);
    setResult('');
  }
  const pn= num=>{
    for(let i=2; i<num; i++)
    if(num % i===0)
    return num>1;
  }
  const click=_=>{
    if(isNaN(value)){
      setResult('Error');
    }
      else {
        const pm=  pn(parseInt(value,10))?'yes':'no';
        setResult(pm);
      }
    
  }
  let text ='';
  let classValue='';
  if (result==='yes'){
    text= `${value} is a prime number`;
    classValue='Success panel';
  }
    else if(result==='no'){
text=`${value} is not  prime number`;
classValue='error panel';
    }
    else if(result==='error') {
text =`${value} is not a prime number`;
classValue='error panel'
    }

  return(
    <>
    <div>
      <h1>Prime Number</h1>
    <input type="text" className="input" value={value} onChange={handle} />
    </div>
    <div>
      <button className="button" onClick={click}>Check</button>
    </div>
    <div className={classValue}>{text}</div>
    </>
  )
}