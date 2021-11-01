import { useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';

type props = {
  myFile: any;
};

export default function ImageCropScreen({ myFile }: props) {
  const [imageSrc, setImageSrc] = useState<string>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    //read myFile
    const reader = new FileReader();
    reader.addEventListener('load', () => setImageSrc(reader.result as string));
    reader.readAsDataURL(myFile);
    //set Results to imgsrc
  }, [myFile]);
  return (
    <div>
      <h1>Image Crop Screen</h1>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
      />
    </div>
  );
}
