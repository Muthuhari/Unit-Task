import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
    const [inputData, setInputData] = useState({
        actual_name: '',
        short_name: '',
        allow_decimal: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/datatable', inputData)
        .then(res => {
            alert("Data Posted Successfully!")
            navigate('/')
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Actual Name:</label>
                    <input type="text" name='actual_name' className='form-control'
                    onChange={e => setInputData({...inputData, actual_name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Short Name:</label>
                    <input type="text" name='short_name' className='form-control'
                    onChange={e => setInputData({...inputData, short_name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Allow Decimal:</label>
                    <input type="text" name='allow_decimal' className='form-control'
                    onChange={e => setInputData({...inputData, allow_decimal: e.target.value})}/>
                </div>
                <br />
                <div >
  <button className='btn btn-info'>Submit</button>
</div>




            </form>
        </div>
    </div>
  )
}

export default Create