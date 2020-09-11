import React, { Component } from 'react';
import styles from './ArticleTagRow.module.scss';

import ArticleTag from '../ArticleTag/ArticleTag';

class ArticleTagRow extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.articleTagRow}>
                <ArticleTag tagName="Performance"/>
                <ArticleTag tagName="SpeedTest"/>
                <ArticleTag tagName="SpeedTest"/>
                <ArticleTag tagName="SpeedTest"/>
          </div>
         );
    }
}
 
export default ArticleTagRow;