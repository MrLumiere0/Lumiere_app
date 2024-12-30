import styles from "../../src/styles/landing.module.css"
import { Link } from "react-router-dom";
import bgVideo from "../assets/video.mp4"
import { TypeAnimation } from 'react-type-animation';
import { FaRegUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';




export  function Landing() {
  const [showElement, setShowElement] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true);
    }, 11250); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);


  return (
    <div className={styles.landing}>
      <video className={styles.bgVdeo} src={bgVideo} autoPlay loop muted/>
      <div className={styles.view}>
      <nav className={styles.nav} >
        <div id={styles.logo}>
        <h1 id={styles.logoP1}>Lumiere</h1>
        <h1 id={styles.logoP2}>Trading</h1>
        </div>
   
        <div className={styles.navItemList}>
          <Link className={styles.nav_Item} to="/news">Fundamentals</Link>
          <Link  className={styles.nav_Item}to="/charts">Charts</Link>
          <Link  className={styles.nav_Item}to="/demo"> 
          <button  className={styles.ReqDemo}>Request Demo</button> 
          </Link>

        </div>
      </nav>

        <div className={styles.copy}>
        <TypeAnimation
      sequence={[
        'The latest',
        8750, 
        'Trading', 
        () => {
          console.log('Sequence completed');
        },
      ]}
      preRenderFirstString="false"
      wrapper="h2"
      cursor={false}
      repeat={0}
      style={{ fontSize: '10rem', display: 'inline-block',color:"white", fontWeight:"600", marginBottom:"5rem"}}
    />


<TypeAnimation
      sequence={[
        'Headlines', 
        1000, 
        'Economic Releases', 
        1000, 
        'Price Action',
        1000,
        "now.",
        2500,
        "made easy." ,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="h2"
      cursor={true}
      repeat={0}
      style={{ fontSize: '6rem', display: 'inline-block', color:"rgba(7, 129, 254)",  fontWeight:"300", marginTop:"0"}}
    />
  {showElement && <div className={styles.copy_bttns}>
    <Link to="/signOn"> 
    <button  className={styles.button} id={styles.copy_user_button}><FaRegUser /></button>
    </Link>

    <Link to="/demo">
    <button  className={styles.button} id={styles.copy_Req_button}>Request a Demo</button>
    </Link>
    </div>}
    </div>
    </div>
      </div>


  );
}

