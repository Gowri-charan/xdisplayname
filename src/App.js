import React, {useState } from "react";
function App() {

  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  // const [data, setData] = useEffect(null);?\
  const [show, SetShow] = useState(false);
  
  function getData1(val1){
    setData1(val1.target.value)
    SetShow(false)
  }
  function getData2(val2){
    setData2(val2.target.value)
    SetShow(false)
  }

  return (
    <div className="App">
      <form>
        <h2>Full Name Display</h2>
        <label for="name">First Name:</label>
        <input type="text" id="fname" onChange={getData1} required/>
        <br/> <br/>
        <label for="name">First Name:</label>
        <input type="text" id="lname" onChange={getData2} required/>
        <br/>        <br/>
        <button 
          type="submit" 
          onClick={(e) => {
            SetShow(true);
            e.preventDefault();
        }}>
          Submit
        </button>
      </form>
      {
        show? 
        <p><label>Full Name: </label>{data1 +" " + data2}</p>
        :null
      }
    </div>
  );
}

export default App;