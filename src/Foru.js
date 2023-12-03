import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import suc from './asset/cont.json'
import cash from './asset/cash.json'
import inv from './asset/inv.json'

function Foru() {
  return (
    <div className='forus'>
        <h3>For You</h3>
        <p>We provide guides on how your finances should be managed </p>
        <div className='forusbod'>
            <Link to='https://www.altusfinancial.com.au/blog/8-strategies-to-optimise-your-spending-habits' className='foruslink fr11'>
                <p>How to control your spending.</p>
                <Lottie style={{width:'100%'}} animationData={suc} />
            </Link>

            <Link to='https://www.infotoask.com/web?q=top+10+investment+companies&o=1672495&cid=15224747941&agid=124770014610&utm_source=google&gclid=CjwKCAiAmZGrBhAnEiwAo9qHiYPNMySPtTsV2uG3IM4mK1FFEZGDdx3E1Ev5MZw5qLbz13EaIQOSdBoCUdEQAvD_BwE&gad_source=1&qo=semQuery&ag=fw10&tt=rmd&ad=semA&akid=ita-15224747941-124770014610&an=google_s' className='foruslink fr112'>
                <p>Companies you should invest in.</p>
                <Lottie style={{width:'100%'}} animationData={inv} />
            </Link>

            <Link to={'https://www.santander.com/en/stories/why-do-we-still-use-cash#:~:text=We%20usually%20pay%20cash%20for,amount%20to%20pay%20with%20plastic.'} className='foruslink fr113'>
                <p>Why people still use cash ?</p>
                <Lottie style={{width:'100%'}} animationData={cash} />
            </Link>
        </div>
    </div>
  )
}

export default Foru