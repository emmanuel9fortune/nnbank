import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from './firebase';
import {doc, setDoc} from 'firebase/firestore'
import {db} from './firebase'
import firebase from 'firebase/compat/app';
import './Sign.css'
import { Link, useNavigate } from 'react-router-dom';
import {Cancel} from '@mui/icons-material'


function Signing() {
  const [input1, setinput1] = useState('')
  const [input2, setinput2] = useState('')
  const [input3, setinput3] = useState('')
  const [input4, setinput4] = useState('')
  const [input5, setinput5] = useState('')
  const [input6, setinput6] = useState('')
  const [input7, setinput7] = useState('')
  const [input8, setinput8] = useState('')
  const [input9, setinput9] = useState('')
  const [input10, setinput10] = useState('')
  const [input11, setinput11] = useState('')
  const [input12, setinput12] = useState('')
  const [input13, setinput13] = useState('')
  const [input14, setinput14] = useState('')
  const [input15, setinput15] = useState('')
  const [input16, setinput16] = useState('')
  const [input17, setinput17] = useState('')
  const [input18, setinput18] = useState('')
  const [input19, setinput19] = useState('')
  const [input20, setinput20] = useState('')
  const [input21, setinput21] = useState('')
  const [input22, setinput22] = useState('')
  const [input23, setinput23] = useState('')
  const [input24, setinput24] = useState('')

 const [get, setget] = useState(false)
  

  const reg=(e)=>{
    e.preventDefault()
    setget(true)

    if(input1 !== '' && input2 !== '' && input3 !== '' &&input4 !== ''&&input5 !== ''&&input6 !== ''&&input7 !== ''&&input8 !== '' &&input9 !== ''&&input10 !== ''&&input11 !== ''&&input12 !== ''&&input13 !== ''&&input14 !== ''&&input15 !== ''&&input16 !== ''&&input17 !== ''&&input18 !== ''&&input19 !== ''&&input20 !== ''&&input21 !== ''&&input22 !== ''&&input23 !== ''&&input24 !== ''){

    const fst = Math.floor(Math.random() * 10);
    const sec = Math.floor(Math.random() * 10);
    const trd = Math.floor(Math.random() * 10);
    const frt = Math.floor(Math.random() * 10);
    const fif = Math.floor(Math.random() * 10);
    const sis = Math.floor(Math.random() * 10);
    const sev = Math.floor(Math.random() * 10);
    const eit = Math.floor(Math.random() * 10);


   if(input23 === input24){

    

    const email = input14
    const password = input24
    const displayName= input2 + ' ' + input4
    const age = input6 +  '/' +  input7  +  '/' +  input8



    try{
      createUserWithEmailAndPassword(auth, email, password).then(async(ref)=>{
           await updateProfile(ref.user,{
               displayName,
               email,
           })

           await setDoc(doc(db, 'users', ref.user.uid),{
              fstn : input2,
              sectn : input4,
               uid: ref.user.uid,
               displayName,
               title: input1,
               middlename: input3,
               email,
               photoURL: ref.user.photoURL,
               gender : input5,
               age,
               coverphotoURL: null,
               timestamp :  firebase.firestore.FieldValue.serverTimestamp(),
               country : input9,
               city : input10,
               zipcode : input11, 
               houseaddress : input12,
               phonenumber : input13,
               beneficiaryname : input15,
               ssn : input16,
               valid : false,
               ban : true,
               pin :'',
               balance : 0,
               accountdate : input20,
               accounttype : input21,
               accountname : input22,
               kin : input17,
               kinaddress : input18,
               kinphonenumber : input19,
               accountnumber :  `${fst}` + sec + trd + frt + fif + sis + sev + eit,
               password : input24,
           })

           await setDoc(doc(db, 'userchat', ref.user.uid),{});
           await setDoc(doc(db, 'notification', ref.user.uid),{notification:[]});
           await setDoc(doc(db, 'transaction', ref.user.uid),{transaction:[]});
       }
      )
    }catch(e){
      alert('you have a bad internet connection')
  }
   }else{
    alert('password mismatched')
   }

  }else{  
    alert('Complete Registration form')
  }
  }


  const navigate = useNavigate()

  const back =()=>{ 
    navigate('/')
  }


  return (
    <div className='reg'>
        <div className='logboxx'>
            <Cancel onClick={back} id='cn'/>

              <img src='https://www.drupal.org/files/project-images/540_afd6a44c7d.png' alt='' />
            </div>


    <div className='sign'>
      <form onSubmit={reg} className='sign_form'> 

        <h3 >Open An Account With Us!</h3>

       <div className='title'>
       <h3 >Title: </h3>
       <select style={ get && input1===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput1(e.target.value)} >
          <option>select a title</option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
          <option>Ms</option>
          <option>Dr</option>
          <option>Brigadier</option>
          <option>Canon</option>
          <option>Captain</option>
          <option>Comander</option>
          <option>Corporal</option>
          <option>Councillor</option>
          <option>Dame</option>
          <option>Father</option>
          <option>Flight Leiutenant</option>
          <option>Flight Sergeant</option>
          <option>Flying Officer</option>
          <option>Group Captain</option>
          <option>Honourable Judge</option>
          <option>Lady</option>
          <option>Lord</option>
          <option>lt Commander</option>
          <option>lt Colonel</option>
          <option>Major</option>
          <option>Professor</option>
          <option>Petty Officer</option>
          <option>Private</option>
          <option>Rear Admiral</option>
          <option>Reverend</option>
          <option>Reverend Canon</option>
          <option>Reverend doctor</option>
          <option>Right Honourable</option>
          <option>Sergeant</option>
          <option>sir</option>
          <option>Sister</option>
          <option>Squadron Leader</option>
          <option>The Honourable</option>
          <option>Warrant Officer</option>
        </select>
       </div>

        <input style={ get && input2===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}}  onChange={(e)=>setinput2(e.target.value)} placeholder='First Name'  />
        <input style={ get && input3===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput3(e.target.value)} placeholder='Middle Name'  />
        <input style={ get && input4===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput4(e.target.value)} placeholder='Last Name'  />
        
        <div className='title'>
        <h3 >Gender :</h3>
        <select style={ get && input5===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput5(e.target.value)}>
          <option>slect a gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        </div>

        <div className='date'>
          <h3 >Date Of Birth:</h3>
          
          <div className='date_box'>
            <input style={ get && input6===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput6(e.target.value)} maxLength={4} type='number' pattern="^[0-9]{2}$"  placeholder='DD'/>
            <input style={ get && input7===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput7(e.target.value)} maxLength={4} type='number' pattern="^[0-9]{2}$"  placeholder='MM'/>
            <input style={ get && input8===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput8(e.target.value)} maxLength={4} type='number' pattern="^[0-9]{4}$" placeholder='YYYY'/>
          </div>
        </div>

        <input style={ get && input9===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput9(e.target.value)} placeholder='country' />
        <input style={ get && input10===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput10(e.target.value)} placeholder='city' />
        <input style={ get && input11===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput11(e.target.value)} placeholder='zipcode' />
        <input style={ get && input12===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput12(e.target.value)} placeholder='House Address' />
        <input style={ get && input13===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput13(e.target.value)} placeholder='Phone Number' />
        <input style={ get && input14===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput14(e.target.value)} placeholder='Email' />
        <input style={ get && input15===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput15(e.target.value)} placeholder='Name Of Beneficiary' />
        <input style={ get && input16===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput16(e.target.value)} placeholder='SSN' />
        <input style={ get && input17===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput17(e.target.value)} placeholder='Next Of Kin'/>
        <input style={ get && input18===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput18(e.target.value)} placeholder='Address Of Next Of Kin ' />
        <input style={ get && input19===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput19(e.target.value)} placeholder='Phone Number of Next Of Kin' />
        <input style={ get && input20===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput20(e.target.value)} placeholder='Account Date' />
        
        <div className='title'>
            <h3 >Account Type</h3>
          <select style={ get && input21===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput21(e.target.value)}>
            <option>select Account Type</option>
            <option>Savings</option>
            <option>Loan Account</option>
            <option>Credit Card Account</option>
          </select>
        </div>

        <input style={ get && input22===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput22(e.target.value)}  placeholder='Account Name' />
            <input style={ get && input23===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput23(e.target.value)} className='pass' type={'password'} value={input23}  placeholder='Create Password' />
        
            <input style={ get && input24===''? {border:'2px solid red'} : {color:'green', border:'2px solid green'}} onChange={(e)=>setinput24(e.target.value)} className='pass' type={'password'} value={input24}  placeholder='Create Password' />

        {
          input23 === input24 && input24.length !== 0 ?
          <button type='submit' >Register</button>
          :
          <div style={{width:'60%', display:'flex', justifyContent:'center' , padding:'10px', borderRadius:'5px', color:'grey', backgroundColor:'whitesmoke'}}  >Register</div>
        }

        <p style={{display:'flex', alignItems:'center', marginBottom:'4em', color:'white'}} >
            Already have an account!
            <Link to='/login'  >
              <span style={{color:'blue', marginLeft:'.5em'}}>Login</span>
            </Link>
          </p>
      </form>
    </div>
    </div>
  )
}

export default Signing