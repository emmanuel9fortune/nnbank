import React, { useEffect, useState } from 'react'
import './App.css';
import Main from './Main';
import Moapp from './Moapp';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Loading from './Loading';
 

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(
          login({
            email : authUser.email,
            displayName : authUser.displayName,
            photoURL : authUser.photoURL,
            uid: authUser.uid,
          })
        )
      }else{
        dispatch(
            logout()
        )
      }
    })
  },[dispatch])


  const [loading, setloading] = useState(false)


  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    }, 5000)

    clearTimeout(setloading(true))
  },[])

  return (
    <div>
     {
      loading?
      <Loading/>
      :
      <>
     {
        user?
        <>
        <Moapp/>
        </>
        :
        <Main/>
      }
     </>
     }
    </div>
  )
}

export default App