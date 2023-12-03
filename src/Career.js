import React, { useState } from 'react'
import Header from './Header'
import Bottom from './Bottom'
import carban from './img/carban.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

function Career() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }






return (
  <div onLoad={getcookie} className={color !== 'true' ? 'dashboard2' : 'dashboard'}>
      <Header/>

      <div className='fstbod'> 
        <img src={carban} alt='' />      
        <div className='fstwrites'>
              <h1>Career Single</h1>
        </div>
        </div>



        <div className='fstbod'> 

        <div className='fstwrites'>
          <h1>Office Manager</h1>
          <h3>Full time</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut morbi nibh et, ullamcorper ultricies. Vitae platea arcu nulla eu pharetra in.</p>



          <h1>Job Overview</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis tortor lectus risus lorem eu. Blandit pulvinar purus et nunc odio turpis ac euismod volutpat. Metus vitae justo iaculis enim aenean scelerisque. Quis purus congue vel tellus donec at. Sed tellus non consectetur massa, velit.</p>
          <div className='done'>
          <div className='done_btn'>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          
          <div className='done'>
          <div className='done_btn'>
          </div>
          Bibendum enim facilisis gravida neque convallis a cras semper.  
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Tincidunt nunc pulvinar sapien et. Donec ac odio tempor orci dapibus  
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Purus semper eget duis at. Condimentum lacinia quis vel eros.tempor. 
          </div>



          <h1>How to apply to this position?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna urna viverra at in. Eleifend bibendum enim faucibus in id et convallis sed. Et praesent id consectetur dolor aliquam lectus viverra. Dignissim quis tristique</p>






          <h1>Job Overview</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis tortor lectus risus lorem eu. Blandit pulvinar purus et nunc odio turpis ac euismod volutpat. Metus vitae justo iaculis enim aenean scelerisque. Quis purus congue vel tellus donec at. Sed tellus non consectetur massa, velit.</p>
          <div className='done'>
          <div className='done_btn'>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Bibendum enim facilisis gravida neque convallis a cras semper.  
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Tincidunt nunc pulvinar sapien et. Donec ac odio tempor orci dapibus  
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Purus semper eget duis at. Condimentum lacinia quis vel eros.tempor. 
          </div>





          <h1>Job Requirements</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis tortor lectus risus lorem eu. Blandit pulvinar purus et nunc odio turpis ac euismod volutpat. Metus vitae justo iaculis enim aenean scelerisque. Quis purus congue vel tellus donec at. Sed tellus non consectetur massa, velit.</p>
          <div className='done'>
          <div className='done_btn'>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Bibendum enim facilisis gravida neque convallis a cras semper.  
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Tincidunt nunc pulvinar sapien et. Donec ac odio tempor orci dapibus  
          </div>

          <div className='done'>
          <div className='done_btn'>
          </div>
          Purus semper eget duis at. Condimentum lacinia quis vel eros.tempor. 
          </div>


          <Link to='/signin' className='regg1' >
          <p>Apply for this job</p>
        </Link>
        </div>


        <div style={{backgroundColor:'whitesmoke', color:'black'}} className='car_box'>
            <h1>Apply to this position</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing eliterloe. Donec est sit ut justo. Non pharetra sem vitae odio lorem ipi</p>
            <Link to='/signin' className='regg1' >
          <p>Apply for this job</p>
        </Link>
        </div>




          
        </div>
      




      <Bottom/>
    </div>
  )
}

export default Career