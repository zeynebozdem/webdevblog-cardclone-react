import React, { Component } from 'react';
import styles from './DetailBox.module.scss';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ArticleDetailTitle from'../ArticleDetailTitle/ArticleDetailTitle';
import ArticleTagRow from '../ArticleTagRow/ArticleTagRow';
import ProfileBox from '../ProfileBox/ProfileBox';

class DetailBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.detailBox}>
                <ArticleTitle/>
                <ProfileBox/>
                <ArticleDetailTitle/>
                <ArticleTagRow/>
            </div>
         );
    }
}
 
export default DetailBox
