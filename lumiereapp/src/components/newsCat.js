import styles from "../../src/styles/components.module.css"

export function NewsCat ({cat,setNewSearch}) {
    function handleClick(event) {
       setNewSearch(true) 
       console.log(event.target.id)
    }
    return(
        <div  key={cat.id}  value = {cat.name} className={styles.News_newsCat} style={{backgroundImage: `url(${cat.imgUrl})`}}>
            <h2 id={cat.name} onClick={(e) => handleClick(e)} > {cat.name}</h2>
        </div>
    )
}