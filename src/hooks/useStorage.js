import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
  [progress, setProgress] = useState(0);
  [error, setError] = useState(null)[(url, setUrl)] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percenatge = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percenatge);
      },
      (err) => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
