//Resmi buluta yukler ve url döndürür

import axios from 'axios'
export const upload = async file => {
  const data = new FormData()
  data.append('file', file)
  data.append('upload_preset', 'Floww-image')

  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/dgyn5ej6p/image/upload',
    data
  )

  return res.data.url
}
