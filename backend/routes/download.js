const express = require('express')
const router = express.Router()
const path = require('path')
const b = require('../../')
const fs = require('fs')
const archiver = require('archiver')

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

const downloadZip = (req, res) => {
  const output = fs.createWriteStream(__dirname + '/example.zip')
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  })
  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes')
    console.log(
      'archiver has been finalized and the output file descriptor has closed.'
    )
  })
  output.on('end', function () {
    console.log('Data has been drained')
  })
  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err
    }
  })
  archive.on('error', function (err) {
    throw err
  })
  archive.pipe(output)
  archive.file('uploads/image-1602700125670.png', {
    name: 'file1.png',
  })
  archive.file('uploads/image-1602700131411.png', {
    name: 'file1.png',
  })
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

router.route('/:id').get(downloadZip)

module.exports = router
