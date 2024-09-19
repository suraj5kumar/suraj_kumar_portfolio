import React, { useState } from 'react'
import Context from './ContextFile'

const ContextState = (props) => {
  const [hire, sethire] = useState(false)


  return (
    <>
      <Context.Provider value={{ hire, sethire }}>
        {props.children}
      </Context.Provider>
    </>
  )
}

export default ContextState