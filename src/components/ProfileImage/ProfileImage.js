import React, { Component } from 'react';
import styles from './ProfileImage.module.scss';

class ProfileImage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.profileImage}>
                <img src="https://webdev.imgix.net/images/authors/addyosmani.jpg"/>
          </div>
         );
    }
}
 
export default ProfileImage;