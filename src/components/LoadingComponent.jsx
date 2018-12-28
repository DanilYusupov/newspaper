import React from 'react'

const LoadingComponent = ({error, pastDelay}) => {
  if (error) {
    return <div>Error! Cannot load component.</div>
  } else if (pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

export default LoadingComponent
