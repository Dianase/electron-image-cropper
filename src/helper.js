
const createImage  = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', ()=> resolve(image))
    image.addEventListener('error', ()=> reject)
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url 
    })

}

export default async function saveCroppedImage(filename, imageSrc, croppedAreaPixels){
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const maxSize = Math.max(image.width, image.height)
  canvas.height = maxSize
  canvas.width = maxSize
  ctx.drawImage(image, maxSize / 2 - image.width / 2 maxSize /2 - image.height /2)
  const data = ctx.getImageData(0, 0, maxSize, maxSize) //BEFORE
  canvas.width = croppedAreaPixels.width
  canvas.width = croppedAreaPixels.height
  ctx.putImageData(data, 
    Math.round(0 - maxSize / 2 + image.width / 2 - croppedAreaPixels.x)
    Math.round(0 - maxSize /2 + image.height /2 - croppedAreaPixels.y)) //AFTER
  const url = canvas.toDataURL('image/jpg', 0.8)
  const base64data = url.replace(/^data:image\/png;base64,/, '')
  const newFileName = `${filename}-cropped.png`
  fs.writeFileSync(newFileName, base64data, 'base64', (err)=> console.error(err))
}