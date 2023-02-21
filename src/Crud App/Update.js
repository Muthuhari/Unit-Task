import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Update() {

    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        actual_name: '',
        short_name: '',
        allow_decimal: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/users/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5000/users/'+id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Unit ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <div>
                    <label htmlFor="name">Actual Name:</label>
                    <input type="text" name='actual_name' className='form-control' value={inputData.actual_name}
                    onChange={e => setInputData({...inputData, actual_name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Short Name:</label>
                    <input type="text" name='short_name' className='form-control' value={inputData.short_name}
                    onChange={e => setInputData({...inputData, short_name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Allow Decimal:</label>
                    <input type="text" name='allow_decimal' className='form-control' value={inputData.allow_decimal}
                    onChange={e => setInputData({...inputData, allow_decimal: e.target.value})}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update