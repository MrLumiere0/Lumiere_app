import styles from "../../src/styles/userarticle.module.css"


export function UserArticleView({ delArticle, ...headline}) {

  function viewArticle(url) {
    console.log(url);
    window.open(url, "_blank");
  }

  
    return (

       <li className={styles.mainHeadline}>
               <div className={styles.mainCardDetails}>
                 <div className={styles.mainImage}>
                   <img className={styles.mainDynamicImage} src={headline.imgUrl} />
                </div>

    
              <div className={styles.mainDetails}>
                <h2 className={styles.mainCardTitle}>{headline.title} </h2>
    
              </div>

            <div className={styles.mainCardSource}>
                      <div className={styles.mainSource}>
                        <div className={styles.mainFeature}>
                          <button
                            onClick={(e) => viewArticle(e.target.value)}
                            value={headline.headlineURL}
                            className={styles.viewButton}
                          >
                            View
                          </button>

                          <button
                            onClick={(e) => delArticle(e)}
                            className={styles.delButton}
                            value = {headline.id}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
        </div>
    </li>
    )
}

