const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const archiver = require('archiver')
const os = require('os')

// export const download = async (url) => {
//   const path = 'image.png'

//   const response = await axios.get({
//     url,
//     responseType: 'stream',
//   })

//   response.data.pipe(fs.createWriteStream(path))

//   return new Promise((resolve, reject) => {
//     response.data.on('end', () => {
//       resolve()
//     })
//     response.data.on('error', (error) => {
//       reject(error)
//     })
//   })
// }

// router.post('/', download(), (req, res) => {
//   console.log('downloaded')
// })

const downloadZip = async (req, res) => {
  const files = req.query.files
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  })

  //set the archive name
  res.attachment('untitled.zip')

  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err
    }
  })
  archive.on('error', (err) => {
    throw err
  })
  const filesArray = files.split(',')
  filesArray &&
    filesArray.forEach((file) => {
      let splitFile = file.split('\\')
      splitFile = 'uploads/'.concat(splitFile[1])
      archive.file(splitFile, {})
    })

  archive.pipe(res)
  archive.finalize()
}
const download = (req, res) => {
  const fileName = req.params.id
  const name = 'untitled'.concat(path.extname(fileName))

  res.download('uploads/' + fileName, name, (err) => {
    if (err) {
      res.status(500).send({
        message: 'Could not download the file.' + err,
      })
    }
  })
}

router.route('/').get(downloadZip)

module.exports = router
