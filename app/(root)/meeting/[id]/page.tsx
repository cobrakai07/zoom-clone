import React from 'react'

const page = ({params}:{params:{id:number}}) => {
  return (
    <div>meeting ID: {params.id}</div>
  )
}

export default page