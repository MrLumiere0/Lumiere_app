import styles from '../src/styles/App.module.css'
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { IoReturnDownBackOutline } from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { RiHome3Line } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { RiStockFill } from "react-icons/ri";
import { NewsCat } from './components/newsCat';
import categories from '../src/resources/newsSeed';



function App() {

  const [newSearch, setNewSearch] = useState(false)
  const [keyword, setkeyword] = useState('');
  const [selNewsCat, setSelNewsCat] = useState('');
  const [sortBy, setSortBy] = useState('');

  function handleKeyword (event)  {
    setkeyword(event.target.value);
    // console.log(keyword)
  };


  function handleNewsCat  (event) {
    setSelNewsCat(event.target.value);
    // console.log(selNewsCat)

  };

  function handleSortBy  (event)  {
    setSortBy(event.target.value);
    // console.log(sortBy)

  };
  function handleKeyPress (event) {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  function handleSubmit(event) {
    console.log(event)
  }

  function handleClick() {
    setNewSearch(false)
  }


  useEffect(() => {
 
    console.log("keyword:", keyword)
    console.log("NewsCat:", selNewsCat)
    console.log("sort:", sortBy)

  },[keyword, selNewsCat,sortBy])

  return (
    <div className={styles.App}>


      <div className={styles.account}>
            <div id={styles.logo}>
                          <h1 id={styles.logoP1}>Lumiere</h1>
                          <h1 id={styles.logoP2}>Trading</h1>
            </div>


            <div className={styles.accountNav}>
              <h3>Already  a member?</h3>
                <Link to="/signOn"> 
                  <button  className={styles.button} id={styles.signIn}><FaRegUser /></button>
              </Link>

              {/* <Link to="/demo">
                  <button  className={styles.button} id={styles.copy_Req_button}>Request a Demo</button>
              </Link>       */}
            </div>


        <div className={styles.navItemListNews}>
          <Link className={styles.nav_Item} to="/"><RiHome3Line /><span className={styles.nav_Item_span}>Home</span>
          </Link>
          <Link  className={styles.nav_Item} id={styles.News}><ImNewspaper /> <span className={styles.nav_Item_span_News}>News</span>
          </Link>
          <Link  className={styles.nav_Item}to="/demo"><RiStockFill /> <span className={styles.nav_Item_span}>Charts</span>
          </Link>
        </div>
      </div>

    
      <div className={styles.mainContent}> 
        <div className={styles.banner}>
          <h2 className={styles.bannerHeading}>Get Better Results, Faster
          </h2>
          <Link  className={styles.banner_nav_Item}to="/demo"> 
          <button  className={styles.ReqDemo}>Request Demo</button> 
          </Link>
        </div>
        <div className={styles.searchBar}>
          <input value={keyword} onKeyDown={(event) => handleKeyPress(event)} onChange={handleKeyword} id={styles.keyword}placeholder='Search' name="keyword"></input>
          <select onChange={handleNewsCat} value={selNewsCat} id={styles.category}  name="category">
          <option value="">Category</option>
          <option value="technology">Technology</option>
          <option value="health">Health </option>
          <option value="science">Science </option>
          <option value="business">Business</option>
          <option value="general">General</option>
          </select>
          <select onChange={handleSortBy} value={sortBy} id={styles.sortBy}  name="sortBy">
          <option value="">Sort by</option>
          <option value="relevancy">Relevant</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Newest</option>

          </select>
        </div>

        <div className={styles.listView}>
          <ul id={styles.views}>
            
              {newSearch ?  <div className={styles.resultsView}>
              <button className={styles.returnBttn} onClick={handleClick}><IoReturnDownBackOutline className={styles.return}/> </button> 
                             </div>: 
              <div className={styles.dynamicView}>
              {categories.map((category) => {
                 return <NewsCat setNewSearch={setNewSearch} cat = {category} />
               })}
               </div>
              }
               
          </ul>
        </div>
      </div>



      <div className={styles.priceAction}>
        <div className={styles.priceActionHeader}>
        <h2>Economic Releases</h2>
        </div>
        <div className={styles.priceAction_View}>
          <ul>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
