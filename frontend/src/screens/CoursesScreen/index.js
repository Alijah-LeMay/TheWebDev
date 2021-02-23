import React from 'react'
import axios from 'axios'
// Assets
import classes from './CoursesScreen.module.css'

const CoursesScreen = () => {
  let chosenImage
  const downloadImage = async (id) => {
    // window.open(`http://localhost:5001/api/download/${id}`, '_parent')
    await axios.get(`api/download/${id}`)
  }

  const setImage = (id) => {
    chosenImage = id
    console.log({ chosenImage, id })
  }
  return (
    <div className={classes.screen_container}>
      <div style={{ margin: 100 }}>
        <button onClick={() => setImage('image-1602700125670.png')}>
          Reno Architecture
        </button>

        <button onClick={() => setImage('image-1603302272458.jpg')}>
          Bizzy Biz
        </button>
        <button onClick={() => downloadImage(chosenImage)}>Download</button>
      </div>
    </div>
  )
}

export default CoursesScreen
