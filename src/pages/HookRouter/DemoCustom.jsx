import React from 'react'
import useToggle from '../../hooks/useToggle'
const DemoCustom = () => {
  const [status,setStatus] = useToggle(false)
  return (
    <div>
      <button onClick={setStatus}>{status ? 'Toggled' : 'click to Toggle'}</button>
    </div>
  )
}

export default DemoCustom