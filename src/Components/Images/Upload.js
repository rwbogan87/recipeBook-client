import React, { useState } from 'react';
import Danger from '../../Assets/Danger.jpg'

function Images() {

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(Danger)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'cloudappimages')
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/cloudscar/image/upload", {
      method: 'POST',
      body: data
    })

    const file = await res.json()

    // console.log(file)

    setImage(file.secure_url)
    saveToDB(file.secure_url)
    setLoading(false)
  }
  // console.log('image:', image)

  const saveToDB = async (data) => {
    console.log(data)
    const resTwo = await fetch('http://localhost:3000/image/upload', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }),
      body: JSON.stringify({
          url: data,
          note: 'some note'
      })
    })

    const newFile = await resTwo.json()

    console.log(newFile);


  }



  return (
    <div className="App">
      <h1>Upload Image</h1>
      <input type="file" name="file" placeholder="upload image" onChange={uploadImage} />
          <img src={image} />
    </div>
  )
}

export default Images