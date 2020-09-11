import React, { Component } from 'react';
import styles from './ArticlePublishDate.module.scss';
import moment from 'moment';

class ArticlePublishDate extends Component {
    state = { 
        currentDate : moment(new Date()).format('ll'),
     }
    render() { 
        
        return ( 
            <div className={styles.articlePublishDate}>
                <span>{this.state.currentDate}</span>
          </div>
         );
    }
}
 
export default ArticlePublishDate;