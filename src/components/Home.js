import React from 'react'
import styles from "../styles/Home.module.scss";
import ImgSlider from './ImgSlider';

function Home() {
  return (
    <div className={styles.home + " home-bg"}>
      <ImgSlider/>
    </div>
  )
}

export default Home