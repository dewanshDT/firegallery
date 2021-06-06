import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //refrences
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url: url, createdAt: timeStamp() });
        setUrl(url);
      }
    );
  }, [file]);

  return {progress, error, url};
};

export default useStorage;
