import React, { useRef, useState } from 'react';
import { Dropbox } from 'dropbox';

const CameraScreen = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageLink, setImageLink] = useState('');
  const imageRef = useRef(null);

  const handleTakePhoto = async () => {
    try {
      const constraints = { video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);

      const photoBlob = await imageCapture.takePhoto();
      const imageUrl = URL.createObjectURL(photoBlob);
      setImageSrc(imageUrl);
      imageRef.current.src = imageUrl;

      // Upload the photo to Dropbox
      const dbx = new Dropbox({ accessToken: 'Bearer sl.BeP7OzIW2QDbjFk0pzzkoboW1xRPlId7gGGtr8GOWUSeh13t_2bGQY3NEcPZhynYz-Nqj-XxnW7cNEzv358eQ9x5H8L3z0UnxF-4jBxmI-kBGdITTYkTk1vEUsBMO8-Vt3csIFY' });
      const response = await dbx.filesUpload({
        path: '/halation/photo.jpg',
        contents: photoBlob,
        autorename: true,

      });
      console.log('Upload successful:', response);

      // Create a link to the photo
      const linkJson = await dbx.filesGetTemporaryLink({ path: response.path_display });
      setImageLink(linkJson.link);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  return (
    <div>
      <button onClick={handleTakePhoto}>Take Photo</button>
      {imageSrc && <img src={imageSrc} alt="captured photo" ref={imageRef} />}
      {imageLink && <p>Image link: {imageLink}</p>}
    </div>
  );
};

export default CameraScreen;