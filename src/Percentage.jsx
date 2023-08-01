import React, {useState} from 'react'; 

function Calculate() {
    const [PhysicsMarks,setPhysicsMarks]=useState();
    const[MathsMarks, setMathsMarks]=useState();
    const [ChemistryMarks, setChemistryMarks]=useState();
    const [GkMarks, setGkMarks]=useState();
    const [ForensicMarks, setFronsicMarks]=useState();

    const [TotalMarks, setTotalMarks]=useState();
    const [Percentage, setPercentage]=useState();

    const percentage=()=>{
const total= PhysicsMarks+MathsMarks+ChemistryMarks+GkMarks+ForensicMarks;
const TotalMarks =500;

const calculatePercentage=(total/TotalMarks)*100;

setTotalMarks(total);
setPercentage(calculatePercentage);



}  

return (
    <> 
    <div style={{textAlign:'center', backgroundColor:'lightblue',width:'300px', marginLeft:'400px', marginTop:'200px'}}>
   <label style={{}}>Physics: 
    <input type="number" value={PhysicsMarks} onChange={(e)=>setPhysicsMarks(parseInt(e.target.value))} />
   </label>

   <div>Maths:<input type='number' value={MathsMarks} onChange={(e)=>setMathsMarks
(parseInt(e.target.value))}/></div>


<div>Chemistry:<input type='number' value={ChemistryMarks} onChange={(e)=>setChemistryMarks
(parseInt(e.target.value))}/></div>

<div>Gk:<input type='number' value={GkMarks} onChange={(e)=>setGkMarks
(parseInt(e.target.value))}/></div>

<div>Forensic:<input type='number' value={ForensicMarks} onChange={(e)=>setFronsicMarks
(parseInt(e.target.value))}/></div>


<button onClick={percentage}>Total Marks</button>

 <p>Total Marks:{TotalMarks}</p>
 <p>Percentage %:{Percentage}</p>

 </div>
    </>
  )
}

export default Calculate;