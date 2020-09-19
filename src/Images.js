import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props => 
  props.images.map((imag, i) =>
    <div key={i} className='fadein'>
      <div 
        onClick={() => props.removeImage(imag.public_id)} 
        className='delete'
      >
      </div>
      <img 
        src={imag.image} 
        
        alt='' 
        onError={() => props.onError(imag.public_id)}
      />
    </div>
  )