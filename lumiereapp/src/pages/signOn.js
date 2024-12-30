import styles from '../styles/signIn.module.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';




export function  SignOn(){
     const [errors, setErrors] = useState({});
     const [email, setEmail] = useState("");
     const [password, setPass] = useState("");



    useEffect(() => {
               
                console.log("email:", email)
                console.log("password:", password)
                console.log("errors:", errors)

              },[email,password, errors])



    return (
        <div className={styles.SignOn}>
            <div className={styles.main}>

            <nav className={styles.nav} >
                    <div id={styles.logo}>
                    <h1 id={styles.logoP1}>Lumiere</h1>
                    <h1 id={styles.logoP2}>Trading</h1>
                    </div>

                    <div className={styles.navItemList}>
                    <Link className={styles.nav_Item} to="/">Home</Link>
                    <Link  className={styles.nav_Item}to="/news">Fundamentals</Link>
                    <Link  className={styles.nav_Item_last}to="/demo">Charts</Link>
                    </div>
                </nav>
                    <div className={styles.content}>
                            <div className={styles.Left}>
                            <TypeAnimation
                                    sequence={[
                                        '',
                                        500, 
                                        'Welcome Back',
                                        , 
                                        () => {
                                        console.log('Sequence completed');
                                        },
                                    ]}
                                    preRenderFirstString="false"
                                    wrapper="h2"
                                    cursor={true}
                                    repeat={0}
                                    style={{ fontSize: '5rem', display: 'inline-block',color:"white", fontWeight:"550", marginBottom:"15rem", 
                                        textShadow: "0px 0px 11px white"
                                    }}
                                          />                            
                            </div>

                            <div className={styles.Right}> 
                            <form className={styles.FormInputs} onSubmit={(event) =>userSignOn(event)}>
                                <div id={styles.FormUser}>
                                        <label> 
                                            <input  id={styles.emailInput} onChange={(e) => {setEmail(e.target.value)}}
                                            autoFocus type='email'
                                            placeholder='  Email'></input>
                                        </label>
                                        {errors.email && <span>{errors.email}</span>}       

                                        
                                        <label>
                                        <input type='text' onChange={(e) => {setPass(e.target.value)}}
                                        placeholder=' Password'></input>
                                        </label>
                                        {errors.password && <span>{errors.password}</span>}
                                        <button className={styles.bttnSignIn} type='submit' name='submit'>Submit</button>


                                </div> 
                                </form>
                        </div>
                    </div>                                  
            </div>
        </div>



    )
}