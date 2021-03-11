import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import classes from './ArticleContainer.module.css'

import { titleCase, elipsesText } from '../functions'

const ArticleContainer = (props) => {
  const { title, imageLOC, description, link } = props
  let updatedTitle = titleCase(title)
  return (
    <div className={classes.article_container}>
      <img
        className={classes.preview_image}
        src={imageLOC}
        alt={updatedTitle}
      />
      <h3>{updatedTitle}</h3>
      <p>{elipsesText(description, 80)}</p>
      <Link to={link}>Read More</Link>
    </div>
  )
}

export default ArticleContainer
