import  styles from '../styles/demo.module.css'
import { Link } from "react-router-dom";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stage, PresentationControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import model from "../../src/resources/space.glb"
import { useState, useEffect } from 'react';
import formValidationSignUp from '../components/logic/signUp';

function Space(props) {
const {scene}  = useLoader(GLTFLoader, model )
return <primitive object={scene} {...props} />
}


export function Demo () {



    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState('')
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [role, setRole] = useState("");
    const [formErr, setErrors] = useState({});
    const [validForm, setValidForm] = useState(true)

    
    function Mouse() {
        const { mouse } = useThree();
    
        // return useFrame(() => {
        //   console.log(mouse.x, mouse.y, mouse.z);
        // });
      }

    
      
  useEffect(() => {
    // Display state values update  in real time
    console.log("firstName:", firstName)
    console.log("middleName:", middleName)
    console.log("lastName:", lastName)
    console.log("role:", role)
    console.log("email:", email)
    console.log("phoneNum:", phoneNum)
    console.log("errors:", formErr)


  },[firstName,lastName, role, middleName,email,phoneNum,formErr, validForm])

  async function userRegister (event )  {
    event.preventDefault();
    setErrors({})
    formValidationSignUp(
    { firstName },
    { lastName },
    { middleName },
    { email },
    { phoneNum },
    {role},
    { setErrors }
    )
     const errCapture = {formErr}
     const errs = errCapture.formErr
    

     if (Object.keys(errs).length === 0){
        // console.log("No keys")   
        try {
            const response = await fetch("/getNews", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body:JSON.stringify({"username":`${email}`, "role":`${role}`, "first_Name":`${firstName}`, "last_Name":`${lastName}` ,"phone":`${phoneNum}`
            })})
        

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }

                  console.log('Data submitted successfully:', response);

         } catch (error) {
            console.error('Error submitting data:', error);
        }        
        
         

     }

        else if (Object.keys(errs).length > 0){
            console.log("KEYS")
            setValidForm(false)
        }
    }

    

    // try a try..catch statemtn to break if there are error state is not empty
  
    return (
        <div className={styles.demo}>
            <div className={styles.main}>

                <nav className={styles.nav} >
                    <div id={styles.logo}>
                    <h1 id={styles.logoP1}>Lumiere</h1>
                    <h1 id={styles.logoP2}>Trading</h1>
                    </div>

                    <div className={styles.navItemList}>
                    <Link className={styles.nav_Item} to="/">Home</Link>
                    <Link  className={styles.nav_Item}to="/news">Fundamentals</Link>
                    {/* <Link  className={styles.nav_Item_last}to="/demo">Charts</Link> */}
                    </div>
                </nav>


                <div className={styles.content}>
                    <div className={styles.Left}>
                    <Canvas    gl={{ antialias: false }} camera={{ position: [0, 0, 1], fov: 3.5}} style={{"position": "relative"}}>
                    <Mouse />
                    <color attach="background" args={["black"]} />
                    <ambientLight intensity={1} />
                    <PresentationControls speed={1.5} zoom={5} global={true} snap={false} polar={[-1.0, Math.PI / 4]}>
                    <Stage environment={null}>
                    <Space scale={1} />
                    </Stage>
                    </PresentationControls>
                    </Canvas>
                  

                    <div className={styles.Copy}>
                        <h4>Request a Demo</h4>
                        <h2>See Farther than Your Screen</h2>
                        <p>Please tell us how to reach you, and
                            one of our Solutions Managers </p>
                        <p>will help <span className={styles.copyPLast}>you get started.</span></p>
                    </div>
                    </div>

                    <div className={styles.Right}> 
                        { validForm ?<div className={styles.Form}>
                            
                            <form className={styles.FormInputs} onSubmit={(event) =>userRegister(event)}>
                                <div className={styles.FormWork}>
                                <label> 
                                    <input  onChange={(e) => {setEmail(e.target.value)}}
                                     autoFocus type='email'
                                    placeholder=' Work Email'></input>
                                </label>
                                {formErr.email && <span>{formErr.email}</span>}


                                <label>
                                <input type='text' onChange={(e) => {setRole(e.target.value)}}
                                placeholder=' Role'></input>
                                </label>
                                {formErr.role && <span>{formErr.role}</span>}

                                </div>

                                <div className={styles.FormName}>
                                <label>
                                <input type='text' onChange={(e) => {setfirstName(e.target.value)}}
                                placeholder=' First Name'></input>
                                </label>
                                {formErr.first && <span>{formErr.first}</span>}


                                {/* <label>
                                <input type='text' onChange={(e) => {setMiddleName(e.target.value)}}
                                id={styles.MI}placeholder='MI'></input>
                                </label> */}


                                <label>
                                <input type='text' onChange={(e) => {setLastName(e.target.value)}}
                                placeholder=' Last Name'></input>
                                </label>
                                {formErr.last && <span>{formErr.last}</span>}

                                </div>


                                <div>
                                <label>
                                    <input type='text'onChange={(e) => {setPhoneNum(e.target.value)}}
                                     placeholder=' Phone Number'></input>

                                </label>


                                <label>

                                </label>
                                </div>

                                <div id={styles.FormFinal}>
                                    <p className={styles.FormFInalP}>By submitting this information, I agree to the privacy policy and to learn 
                                        more about products and services from  Lumiere Trading.</p>
                                    <button className={styles.formSubmit} type='submit' name='submit'>Submit</button>

                                </div>                            
                            </form> 
                            </div>:
                            <div className={styles.Form_Confirm}>
                            <div className={styles.FormInputs_Confirm}>
                                    <h3>Thank you</h3>
                                    <p>Our team will  contact with you shortly.</p>
                                 </div> 
                                 </div>}
                       
                    </div>              
                 </div>

             </div>
        </div>
    )
}