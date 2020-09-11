import React, { Component } from 'react';
import styles from './ProfileNameDetail.module.scss';
import ProfileName from '../ProfileName/ProfileName';
import ArticlePublishDate from '../ArticlePublishDate/ArticlePublishDate';

class ProfileNameDetail extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.profileNameDetail}>
                <ProfileName/>
                <ArticlePublishDate/>
            </div>
         );
    }
}
 
export default ProfileNameDetail;