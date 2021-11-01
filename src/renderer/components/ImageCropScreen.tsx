import { useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useHistory } from 'react-router';
import { Area } from 'react-easy-crop/types';
import saveCroppedImage from '../../helper';

type props = {
  myFile: any;
};

export default function ImageCropScreen({ myFile }: props) {
  const history = useHistory();
  const [imageSrc, setImageSrc] = useState<string>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  useEffect(() => {
    //read myFile
    const reader = new FileReader();
    reader.addEventListener('load', () => setImageSrc(reader.result as string));
    reader.readAsDataURL(myFile);
    //set Results to imgsrc
  }, [myFile]);

  const onCropComplete = (croppedArea: Area, _croppedAreaPixels: Area) => {
    console.log(croppedArea); // delete
    setCroppedAreaPixels(_croppedAreaPixels);
  };
  console.log(croppedAreaPixels); //delete
  const handleSave = async () => {
    await saveCroppedImage(myFile.path, imageSrc, croppedAreaPixels);
    history.push('/');
  };
  return (
    <div>
      <button className="save-btn" onClick={handleSave}>
        SAVE
      </button>
      <h1>Loading...</h1>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
}
