import React from 'react'

const ShowValues = ({ values }) => {
  console.log('values', values)
  return (
    <div>
      <code>
        {JSON.stringify(values)}
      </code>
    </div>
  )
}

export default ShowValues