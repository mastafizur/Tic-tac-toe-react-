import React from 'react'

const button = ({value, onClick}) => {
  return (
    <div>
        <button onClick={onClick}>{value}</button>
    </div>
  )
}

export default button