import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error)

  return (
    <div>Some things went wrong:{error.status} || {error.statusText}</div>
  )
}

export default Error