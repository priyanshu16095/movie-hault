import React from 'react'

function Icon({icon, title}) {
  return (
    <div className='icon flex-v gap-s'>
        {icon}
        <p>{title}</p>
    </div>
  )
}

export default Icon
