import React from 'react'
import { ClipLoader } from 'react-spinners'
import './load.css'

function Loading() {
  return (
    <div className='load'>
        <img style={{width:'8em'}} src={'https://www.drupal.org/files/project-images/540_afd6a44c7d.png'} alt='' />
         <ClipLoader
        color={'green'}
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading