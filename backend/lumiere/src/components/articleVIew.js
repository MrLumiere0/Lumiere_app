import styles from "../../src/styles/App.module.css"



export function ArticleView({...headline}) {

    let date = headline.publishedAt;
    date = date.substr(0, 10);

    function viewArticle(url) {
      console.log(url);
      window.open(url, "_blank");
    }

    return (
        <li className={styles.mainHeadline}>
        <div className={styles.mainCardDetails}>
          <div className={styles.mainImage}>
            <img className={styles.mainDynamicImage} src={headline.urlToImage} />
          </div>
  
          <div className={styles.mainDetails}>
            <h2 className={styles.mainCardTitle}>{headline.title} </h2>

          </div>
        </div>
        <div className={styles.mainCardSource}>
          <div className={styles.mainSource}>
            <p className={styles.sourceName}>{headline.source.name}</p>
            <div className={styles.mainFeature}>
              <button
                onClick={(e) => viewArticle(e.target.value)}
                value={headline.url}
                className={styles.viewButton}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </li>
    )
}



