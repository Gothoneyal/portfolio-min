import React, { useState } from 'react';
import UpdateProject from '../Projects/UpdateProject';
import DeleteProject from '../Projects/DeletProject';
import ProjectForm from '../Projects/ProjectForm';
import './admin.css'; // Import the CSS file

const Admin = () => {
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('');
  
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>

      <div className="admin-section">
        <h2>Create a New Project</h2>
        <ProjectForm />
      </div>

      <div className="admin-section">
        <h2>Update an Existing Project</h2>
        <input
          type="text"
          value={selectedProjectTitle}
          onChange={(e) => setSelectedProjectTitle(e.target.value)}
          placeholder="Enter Project Title to Update"
          className="admin-input"
        />
        {selectedProjectTitle && <UpdateProject projectTitle={selectedProjectTitle} />}
      </div>

      <div className="admin-section">
        <h2>Delete an Existing Project</h2>
        <input
          type="text"
          value={selectedProjectTitle}
          onChange={(e) => setSelectedProjectTitle(e.target.value)}
          placeholder="Enter Project Title to Delete"
          className="admin-input"
        />
        {selectedProjectTitle && <DeleteProject projectTitle={selectedProjectTitle} />}
      </div>
    </div>
  );
}

export default Admin;
