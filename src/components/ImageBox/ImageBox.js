import React, { Component } from 'react';
import styles from './ImageBox.module.scss';

class ImageBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.articleImage}>
                <img srcset="
              https://webdev.imgix.net/iframe-lazy-loading/hero.png?auto=format&amp;fit=max&amp;w=240 240w,
              https://webdev.imgix.net/iframe-lazy-loading/hero.png?auto=format&amp;fit=max&amp;w=480 480w,
              https://webdev.imgix.net/iframe-lazy-loading/hero.png?auto=format&amp;fit=max&amp;w=768 768w,
            " src="https://webdev.imgix.net/iframe-lazy-loading/hero.png"/>
            </div>
         );
    }
}
 
export default ImageBox;