import styles from '../../src/styles/dash.module.css'
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import TimeZone from '../components/timezone';
import profilePic from '../assets_Pics/profileImg.jpg'
import { RiHome3Line } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { RiStockFill } from "react-icons/ri";
import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { ArticleView } from '../components/articleVIew';
import { getArticles } from '../components/api';
// import { delArticles } from '../components/api';
import { getUsersInfo } from '../components/api';
import { logout } from '../components/api';
import { UserArticleView } from '../components/userArticle';
import { useNavigate } from 'react-router-dom';
import axios from "axios"







const DELETEARTICLE = 'http://127.0.0.1:8000/delArticle'




export function Dash(){
  const [keyword, setkeyword] = useState([]);
  const [dataReady, setDataReady] = useState(false)
  const [articles, setArticles] = useState([]);
  const [user, setUser]= useState("User")
  const [fetchNew, setDidFetchNew]= useState(false)


    let navigate = useNavigate();



  useEffect(() => {

    const fetchArticles = async () => {
        const returnedArticles = await getArticles()
        setArticles(returnedArticles)
        setDataReady(true)

    }

    const fetchUser = async () => {
        const userInfo = await getUsersInfo()
        setUser(userInfo)
    }

    fetchArticles()
    fetchUser()
  }, [fetchNew])

  const handleLogout = async () => {
    const success = await logout()
    if (success){
        navigate('/')
    }
}

  function handleKeyword (event)  {
    setkeyword(event.target.value);
    console.log(user)
  };

  // const delArticle = async (event)=> {
  //     const articleId = event.target.value
  //     const newArtList = await delArticles(articleId)
  //     setArticles(newArtList)
  //   }

  //   export function delArticles (artId) {

  //             const response =  axios.delete(DELETEARTICLE,
  //                 {headline:artId},
  //                     {withCredentials: true}
  //             )
  //             return response.data
          
              
          
  //     } 


      const delArticle = async (event)=> {
        const articleId = event.target.value
        const response =  await axios.delete(`http://127.0.0.1:8000/delArticle/${articleId}`,
          {},
              {withCredentials: true}
      )   
        // navigate('/dashboard')
        // navigate('/dashboard')
        if (response) {
          setDidFetchNew(prevState => !prevState)
        }
      }


    return (
         <div className={styles.Dash}>

        
              <div className={styles.account}>
                <div className={styles.accountContainer}>
                    <div id={styles.logo}>
                    <Link className={styles.LogoLink} to="/"> <h1 id={styles.logoP1}>{user.username}</h1>
                                  <h1 id={styles.logoP2}>Trading</h1>
                                  </Link>
                    </div>
        
        
                    <div className={styles.accountNav}>

                    <div className={styles.accountView}>
                        <img className={styles.profilePic} src={profilePic}></img>
                    <h3>{user.first_Name} {user.last_Name}</h3>
                    <h5>Lumiere</h5>
                    </div>   
                    
                    </div> 

                      <div className={styles.navItemListNews}>
                             
                              <Link  className={styles.nav_Item}  to="/news" id={styles.News}><ImNewspaper /> <span className={styles.nav_Item_span}>News</span>
                              </Link>
                              <Link  className={styles.nav_Item}to="/charts"><RiStockFill /> <span className={styles.nav_Item_span}>Charts</span>
                              </Link>
                            </div>        
                    </div>

                    
                            
                    <div className={styles.logoutBttn}>
                        <button onClick={handleLogout} className={styles.logout}>Logout</button>
                    </div>
        
              </div>

               <div className={styles.Main}> 
                    {/* <h3 className={styles.dashHeader}>Welcome Back</h3> */}
                    
                    <div className={styles.userView}>
                        <h4 id={styles.ArticleHEader}> Articles:</h4>
                    </div>

                    <div className={styles.searchBar}>
                                            <input value={keyword} onKeyDown={(event) => handleKeyPress(event)} onChange={handleKeyword} id={styles.keyword}placeholder='Search' name="keyword"></input>
                                            <button  type="submit" onClick={(e)=>handleSearchNews(e)} id={styles.searchBttn}><FaSearch /> </button> 
                
                 </div>

                 <div className={styles.listView}>
                         <ul id={styles.views}>
                             <div className={styles.dynamicView}> 
                                      
                                        {articles.map((headline) => {
                                          return <UserArticleView {...headline} delArticle={delArticle} />})}  
                                          </div>
                        </ul>
                </div>
            </div>

                 

    </div>

    )
}