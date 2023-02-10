import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
    const {status, statusText} = err;
  return (
    
    <>
        <h1>Opps!!</h1>
        <h2>An Error has occured!</h2>
        <h2>{"Error " + status + ": " + statusText}</h2>
    </>
  )
}

export default Error