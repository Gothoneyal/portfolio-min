import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs,doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

const UpdateProject = ({ projectTitle }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const q = query(collection(db, 'projects'), where('title', '==', projectTitle));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const projectDoc = querySnapshot.docs[0];
        const projectData = projectDoc.data();

        setTitle(projectData.title);
        setDescription(projectData.description);
        setImageUrl(projectData.imageUrl);
        setProjectId(projectDoc.id);
      }
    };

    fetchProject();
  }, [projectTitle]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!projectId) {
      alert('Project not found!');
      return;
    }

    const projectRef = doc(db, 'projects', projectId);
    let updatedData = { title, description };

    if (image) {
      const imageRef = ref(storage, `projects/${projectId}/${image.name}`);
      await uploadBytes(imageRef, image);
      const newImageUrl = await getDownloadURL(imageRef);
      updatedData.imageUrl = newImageUrl;
    }

    await updateDoc(projectRef, updatedData);
    alert('Project updated successfully!');
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      {imageUrl && <img src={imageUrl} alt="Project" style={{ width: '100px' }} />}
      <button type="submit">Update Project</button>
    </form>
  );
};

export default UpdateProject;
