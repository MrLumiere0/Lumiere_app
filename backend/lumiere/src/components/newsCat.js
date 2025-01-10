import styles from "../../src/styles/newsItem.module.css"

export function NewsCat ({handleNewsCat, cat}) {
   
    return(
        <div  key={cat.id} onClick={(e) => handleNewsCat(e)}   value = {cat.name} className={styles.News_newsCat} style={{backgroundImage: `url(${cat.imgUrl})`}}>
            <h2 id={styles.name} value = {cat.name} > {cat.name}</h2>
        </div>
    )
}