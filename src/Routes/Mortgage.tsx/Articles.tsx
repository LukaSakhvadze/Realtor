import React from "react";
import styles from "./MortgageCss/Articles.module.css";
import {
  notebookSvg,
  articlesList1,
  articlesImg,
  articleLists,
} from "../../Consts/Articles.consts";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className={styles.articles}>
      <h2>Articles</h2>
      {articlesList1.map((article) => (
        <div className={styles.info} key={article.id}>
          <p>{article.p}</p>
          <h3>{article.title}</h3>
          <div>
            <abbr title={article.link}>
              <Link to="/">
                {notebookSvg} {article.link}
              </Link>
            </abbr>
          </div>
        </div>
      ))}
      <div className={styles.container}>
        <div className={styles.articleLists}>
          {articleLists.map((articleList) => (
            <div className={styles.articlesList} key={articleList.id}>
              <p>{articleList.title}</p>
              {articleList.item.map((article) => (
                <abbr title={article.link} key={article.id}>
                  <Link to="/">
                    {notebookSvg} {article.link}
                  </Link>
                </abbr>
              ))}
            </div>
          ))}
        </div>
        <div>
          <img src={articlesImg} alt=""></img>
        </div>
      </div>
      <div className={styles.moreArticles}>
        <Link to="/">More articles</Link>
      </div>
    </div>
  );
}

export default Articles;
