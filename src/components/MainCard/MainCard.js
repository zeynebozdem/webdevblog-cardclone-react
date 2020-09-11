import React, { Component } from 'react';
import styles from './MainCard.module.scss';
import ImageBox from '../ImageBox/ImageBox';
import DetailBox from '../DetailBox/DetailBox';

class MainCard extends Component {
    render() { 
        return ( <div className={styles.mainCard}>
            <ImageBox/>
            <DetailBox/>
        </div> );
    }
}
 
export default MainCard;
