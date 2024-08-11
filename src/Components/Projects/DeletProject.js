import React from 'react';
import { collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '../../firebase';

const DeleteProject = ({ projectTitle }) => {
  const handleDelete = async () => {
    const q = query(collection(db, 'projects'), where('title', '==', projectTitle));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert('Project not found!');
      return;
    }

    const projectDoc = querySnapshot.docs[0];
    const projectData = projectDoc.data();
    const imageUrl = projectData.imageUrl;

    // Delete the image from Storage
    if (imageUrl) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    }

    // Delete the project from Firestore
    await deleteDoc(projectDoc.ref);
    alert('Project deleted successfully!');
  };

  return (
    <button onClick={handleDelete}>Delete Project</button>
  );
};

export default DeleteProject;
