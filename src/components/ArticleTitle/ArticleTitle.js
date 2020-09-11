import React, { Component } from 'react';
import styles from './ArticleTitle.module.scss';

class ArticleTitle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.articleTitle}>
                <h2>It's time to lazy-load offscreen iframes!</h2>
          </div>
         );
    }
}
 
export default ArticleTitle;