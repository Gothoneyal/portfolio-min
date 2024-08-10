import React, { useState } from 'react';
import { db, storage } from '../../firebase';  // Import db and storage
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const imageRef = ref(storage, `projects/${uuidv4()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'projects'), {
        title,
        description,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Project uploaded successfully!");
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error("Error uploading project: ", error);
      alert("Error uploading project.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload Project</button>
    </form>
  );
}

export default ProjectForm;
