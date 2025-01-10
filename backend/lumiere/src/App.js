import styles from '../src/styles/App.module.css'
import { Charts } from './components/charts';
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { NewsCat } from './components/newsCat';
import categories from '../src/resources/newsSeed';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { ArticleView } from './components/articleVIew';
import { FaSearch } from "react-icons/fa";
import TimeZone from './components/timezone';



function App() {

  const [newSearch, setNewSearch] = useState(false)
  const [keyword, setkeyword] = useState('');
  const [selNewsCat, setSelNewsCat] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [headlineView, setHeadlineVIew] = useState(true);
  const [selectValue, setSelectValue] = useState("Headlines");
  const [articles, setArticles] = useState([])


  function handleKeyword (event)  {
    setkeyword(event.target.value);
    // console.log(keyword)
  };


  function handleNewsCatSelect(event) {
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

  // function handleSubmit(event) {
  //   console.log(event)
  // }

  function handleBack() {
    setNewSearch(false)
  }

   async function handleNewsCat(event){
    setNewSearch(true) 
    event.preventDefault();
    let cat =  event.target.innerText
    console.log(cat)
    try{
      const response = await fetch("http://127.0.0.1:8000/getNews", {
        method:"POST",
        headers: {
          "Content-Type": 'application/json',
      },
      body:JSON.stringify({category:`${cat}`})
      })

      const data = await response.json();
      
      for ( let i = 0; i < data.length; i++){
          if(data[i].content == "[Removed]"){
            data.splice(i,1)
          }
      }

      setArticles(data)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      


    }
    catch(error){
        console.log(error)
    }
    
  }


  async function handleSearchNews(event){

    setNewSearch(true) 
    event.preventDefault();
    const cat = event.target.id
    console.log(cat)
    
    try{
      const response = await fetch("http://127.0.0.1:8000/searchNews", {
        method:"POST",
        headers: {
          "Content-Type": 'application/json',
      },
      // body:JSON.stringify({keyword:`${keyword}`}, {category:`${selNewsCat}`})
      body:JSON.stringify({keyword:`${keyword}`})
      })

      console.log(response)
      const data = await response.json();
      
      for ( let i = 0; i < data.length; i++){
          if(data[i].content == "[Removed]"){
            data.splice(i,1)
          }
      }

      setArticles(data)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      


    }
    catch(error){
        console.log(error)
    }
    
  }

  useEffect(() => {
 
    console.log("keyword:", keyword)
    console.log("NewsCat:", selNewsCat)
    console.log("sort:", sortBy)
    console.log("articles:", articles)


  },[keyword, selNewsCat,sortBy,headlineView, setHeadlineVIew, articles, newSearch, setArticles])

  function handleVIew (event){
    console.log(event.target.value)
    console.log(headlineView)

    if (event.target.value === "Sentiment"){
      setHeadlineVIew(false)
      setSelectValue("Sentiment")
    }

     if (event.target.value === "Headlines"){
      setHeadlineVIew(true)
      setSelectValue("Headlines")
    }

    else{
      console.log("Could not capture value")
    }
  }


  return (
    <div className={styles.App}>


      <div className={styles.account}>
        <div className={styles.accountContainer}>
            <div id={styles.logo}>
            <Link className={styles.LogoLink} to="/"> <h1 id={styles.logoP1}>LUMIERE</h1>
                          <h1 id={styles.logoP2}>Trading</h1>
                          </Link>
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
            </div>

              <TimeZone />
       
      </div>

    
      <div className={styles.Main}> 
        
        <div className={styles.viewChanger}>
                                   <select value = {headlineView} onChange={(event) => handleVIew(event)} id={styles.viewsSwitch}  name="">
                                            <option value="">{selectValue}</option>
                                            <option value="Headlines">Headlines</option>
                                            <option value="Sentiment">Sentiment</option>
                                            {/* <option value="Headlines">Headlines</option> */}
                                     </select>
          </div>

                <div className={styles.mainContent}> 
                {headlineView ?

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
                            <select onChange={handleNewsCatSelect} value={selNewsCat} id={styles.category}  name="category">
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
                            <button  type="submit" onClick={(e)=>handleSearchNews(e)} id={styles.searchBttn}><FaSearch /> </button> 

                          </div>
                  
                          <div className={styles.listView}>
                            <ul id={styles.views}>
                              
                                {newSearch ?  <div className={styles.resultsView}>
                                  <div className={styles.resultsViewHeader}>
                                       <button className={styles.returnBttn} onClick={handleBack}><IoReturnDownBackOutline className={styles.return}/> </button> 
                                  </div>
                                  <ul>
                                {articles.map((headline) => {
                                  return <ArticleView {...headline} />})} 
                                
                              
                                   
                                  </ul>
                                  
                                  </div>: 
                                <div className={styles.dynamicView}>
                                {categories.map((category) => {
                                   return <NewsCat handleNewsCat={(e) => handleNewsCat(e)} setNewSearch={setNewSearch} cat = {category} />
                                 })}
                                 </div>
                                }
                                 
                            </ul>
                          </div>
                        </div>
                 
                

                  : <Charts headlineView ={headlineView} />}
                  </div>
      </div>

    </div>
  );
}

export default App;
