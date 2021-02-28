import React from 'react'
import axios from 'axios'
// Assets
import classes from './CoursesScreen.module.css'

const CoursesScreen = () => {
  const files = [
    { url: 'image-1602700125670.png', name: 'image1' },
    { url: 'image-1603302272458.jpg', name: 'image2' },
  ]
  const downloadImage = async () => {
    window.open(`http://localhost:5001/api/download?files=${files}`, '_parent')
  }

  return (
    <div className={classes.screen_container}>
      <div style={{ margin: 100 }}>
        <button onClick={() => downloadImage(files)}>Download</button>
      </div>
    </div>
  )
}

export default CoursesScreen
