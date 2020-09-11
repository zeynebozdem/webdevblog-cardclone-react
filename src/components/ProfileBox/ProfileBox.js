import React, { Component } from 'react';
import styles from './ProfileBox.module.scss';
import ProfileImage from '../ProfileImage/ProfileImage';
import ProfileNameDetail from '../ProfileNameDetail/ProfileNameDetail';

class ProfileBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <ProfileImage/>
                <ProfileNameDetail/>
            </div>
         );
    }
}
 
export default ProfileBox;