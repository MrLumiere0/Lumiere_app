import styles from '../../src/styles/App.module.css'
import { Link } from "react-router-dom";
import { NewsCat } from './newsCat';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { ArticleView } from '../components/articleVIew';
import { useEffect, useState } from 'react';





export function Fundamentals({ handleKeyPress,keyword, handleBack, handleKeyword, handleNewsCat, selNewsCat, handleSortBy, sortBy, newSearch, categories, NewsCat, setNewSearch}){

  
  return(
        <div id={styles.Headlines}>
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
          {/* <select onChange={handleSortBy} value={sortBy} id={styles.sortBy}  name="sortBy">
          <option value="">Sort by</option>
          <option value="relevancy">Relevant</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Newest</option>

          </select> */}

        </div>

        <div className={styles.listView}>
          <ul id={styles.views}>
            
              {newSearch ?  <div className={styles.resultsView}>
                <div className={styles.resultsViewHeader}>
                     <button className={styles.returnBttn} onClick={handleBack}><IoReturnDownBackOutline className={styles.return}/> </button> 
                </div>
                <ul>
             {/* {news.map((headline) => {
                return <ArticleView {...headline} />})}  */}
              
            
                 
                </ul>
                
                </div>: 
              <div className={styles.dynamicView}>
              {categories.map((category) => {
                 return <NewsCat handleNewsCat={handleNewsCat} setNewSearch={setNewSearch} cat = {category} />
               })}
               </div>
              }
               
          </ul>
        </div>
      </div>
    )
}