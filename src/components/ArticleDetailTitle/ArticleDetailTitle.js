import React, { Component } from 'react';
import styles from './ArticleDetailTitle.module.scss';

class ArticleDetailTitle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.articleDetailTitle}>
                <p>
                    Browser-level native lazy-loading for iframes is here
                </p>
            </div>
         );
    }
}
 
export default ArticleDetailTitle;