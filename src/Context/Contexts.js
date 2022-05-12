
import React, { useState, createContext } from 'react'
export const valueContext = createContext({});

export default function Contexts({ children }) {
  const [data, setData] = useState(null);
  console.log("context",data)
  return (
    <div>
      <valueContext.Provider value={{data,setData}}>
        {children}
      </valueContext.Provider>
    </div>
  )
}



