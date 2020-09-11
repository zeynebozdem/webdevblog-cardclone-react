import React, { Component } from 'react';
import styles from './ArticleTag.module.scss';

class ArticleTag extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.articleTag}>
                <a>{this.props.tagName}</a>
          </div>
         );
    }
}
 
export default ArticleTag;