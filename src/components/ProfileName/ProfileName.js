import React, { Component } from 'react';
import styles from './ProfileName.module.scss';

class ProfileName extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.profileName}>
                <span>Addy Osmani</span>
          </div>
         );
    }
}
 
export default ProfileName;