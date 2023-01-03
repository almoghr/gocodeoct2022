import React from 'react'
import { useParams } from 'react-router-dom'
const SingleProductView = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>look at this amazing product its number is:{params.productId}</div>
  )
}

export default SingleProductView