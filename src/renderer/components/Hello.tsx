import { Link, useHistory } from 'react-router-dom';

type props = {
  setMyFile: any;
};

export default function Hello({ setMyFile }: props) {
  let history = useHistory();
  const handleImage = (event: any) => {
    const newFile = event.target.files[0];
    setMyFile(newFile);
    history.push('./crop');
  };
  return (
    <div>
      <h1>Image Cropper</h1>
      <div className="Hello">
        <input
          className="button"
          onChange={handleImage}
          name="image"
          type="file"
        />
      </div>
      <div>
        <Link to="/about"> About this App</Link>
      </div>
    </div>
  );
}
