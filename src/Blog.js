import React, { useState } from 'react'
import Header from './Header'
import Bottom from './Bottom'
import blog from './img/blog.png'
import blog2 from './img/blog2.png'
import blog3 from './img/blog3.png'
import not from './img/phone.webp'

function Blog() {

  const [stick, setstick] = useState(false)

  const scrollfunction =()=>{
    if(window.scrollY > window.innerHeight ){
      setstick(true)
    }
  }

  return (
    <div  onMouseOver={scrollfunction} className='home'>
      <Header stick={stick}/>




      <div className='fstbod'>
              <img src={blog} alt='' />
            <div className='fstwrites'>
              <h1 style={{fontSize:'60px'}}>Blog Single</h1>
            </div>
      </div>





      <div className='fstbod'>
            <div className='fstwrites'>
              <h1>5 Tips to choose the right auto loan to buy your next dream car</h1>
              <h3>Voom Trust is a next-gen banking experience looking to disrupt the industry.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor at turpis porta elementum non pulvinar. Elit eu, ante lobortis amet, tincidunt. Bibendum blandit imperdiet tincidunt a ac tempor adipiscing morbi erat. Fringilla ut nibh mattis fames. Pellentesque gravida diam sodales eros, quis in amet. Egestas enim tristique tincidun.</p>
            </div>
            <img src={blog2} alt='' />
      </div>





      <div className='fstbod'>
      <img src={blog3} alt='' />
            <div className='fstwrites'>
              <h1>Learn how easy is to invest with Bankio</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor at turpis porta elementum non pulvinar. Elit eu, ante lobortis amet, tincidunt. Bibendum blandit imperdiet tincidunt a ac tempor adipiscing morbi erat. Fringilla ut nibh mattis fames. Pellentesque gravida diam sodales eros, quis in amet. Egestas enim tristique tincidun.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor at turpis porta elementum non pulvinar. Elit eu, ante lobortis amet, tincidunt. Bibendum blandit imperdiet tincidunt a ac tempor adipiscing morbi erat. Fringilla ut nibh mattis fames. Pellentesque gravida diam sodales eros, quis in amet. Egestas enim tristique tincidun.
              </p>
            </div>
      </div>





      <div className='fstbod'> 
        <div className='fstwrites'>
              <h1> With Voom Trust, you can open an account today</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit purus vel, viverra facilisi neque quisque. Phasellus aliquam ut id rhoncus. In viverra sed vitae.
              </p>

              <div>
                <div className='done'>
                  <div className='done_btn'>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </div>

                <div className='done'>
                  <div className='done_btn'>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. integer eu parturient faucibus morbi curabitur. Sagittis in porttitor et proin euismod at pellentesque
                </div>

                <div className='done'>
                  <div className='done_btn'>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>

              <h1> We are here to help your business grow</h1>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit purus vel, viverra facilisi neque quisque. Phasellus aliquam ut id rhoncus. In viverra sed vitae vivamus amet, nunc. Magna tempus lacus, pellentesque lorem lectus sem. Dictum aenean natoque purus, feugiat. Risus pellentesque ornare sit hendrerit odio vel.
              </p>

              <div>
                <div className='done'>
                  <div className='done_btn'>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div className='done'>
                  <div className='done_btn'>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. integer eu parturient faucibus morbi curabitur. Sagittis in porttitor et proin euismod at pellentesque
                </div>

                <div className='done'>
                  <div className='done_btn'>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <img src={not} alt='' />      

        </div>







      <Bottom/>
    </div>
  )
}

export default Blog