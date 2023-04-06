import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const {status,statusText}=useRouteError()
  return (
    <div>
      <h1>OOPS!</h1>
      <h3>{status+": "+statusText}</h3>
    </div>
  )
}

export default Error