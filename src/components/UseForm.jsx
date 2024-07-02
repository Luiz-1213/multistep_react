import React from 'react'

const UseForm = ({data , updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name='name' 
            id='name' 
            placeholder='digite seu nome' 
            required
            value={data.name || ""}
            onChange={(e)=> updateFieldHandler("name", e.target.value)}/>
            
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name='email' 
            id='email' 
            placeholder='digite seu email' 
            required
            value={data.email || ""}
            onChange={(e)=> updateFieldHandler("email", e.target.value)}/>
        </div>
    </div>
  )
}

export default UseForm