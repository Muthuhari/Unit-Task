import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(()=> {
    axios.get('http://localhost:5000/datatable')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleDelete(id) {
    setData(data.filter(d => d.id !== id));
  }

  return (
    <div className='container '>

{/*start */}
<div>
<div class="col-sm-3 mt-5 mb-4 text-gred" style={{color:"black", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h5><b>Welcome to Parallax Technologies</b></h5></div>


        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src="/img/parallax.png" alt="Parallax Technologies" style={{marginTop: "10px", display: "block", margin: "0 auto"}} />
        </div>
      </div>


       <div style={{display: "flex", justifyContent: "right", alignItems: "right"}}>
       <div class="col-sm-3 mt-5 mb-4 text-green" style={{color: "black", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
       <h5 style={{textAlign: "right", marginLeft: "auto"}}><b>Dashbord/Unit</b></h5>
  </div>
</div>
{/*end */}



      
<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Link to='/create' className='btn btn-success my-3' style={{backgroundColor: 'blue'}}>Add Unit</Link>
</div>


      <table className='table'>
        <thead>
          <tr>
            <th>Unit ID</th>
            <th>Actual Name</th>
            <th>Short Name </th>
            <th>Allow Decimal</th>
            <th>Base Unit Multiplier</th>
            <th>Based Unit </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i)=> (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.actual_name}</td>
              <td>{d.short_name}</td>
              <td>{d.allow_decimal}</td>
              <td>{d.name3}</td>
              <td>{d.name4}</td>
              <td>
                <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
