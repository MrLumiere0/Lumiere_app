import styles from '../styles/charts.module.css'
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { RiHome3Line } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { RiStockFill } from "react-icons/ri";



export function Charts ({headlineView}) {


    return (
        <div id={styles.charts}>
            <div id={styles.Main}>


                 <div id={styles.mainContent}>

                     <div className={styles.banner}>
                          <h2 id={styles.bannerHeading}>Economic Releases</h2>
                          <p>Market shifts around economic release are unpredictable, know when they happening to plan ahead</p>
                     </div>

                     <div className={styles.bannerDetails}>
                        
                     </div>
                            
              </div>
                        
                    </div>
                    

        </div>
    )
}