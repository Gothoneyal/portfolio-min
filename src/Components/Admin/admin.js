import React, {useState} from 'react'
import UpdateProject from '../Projects/UpdateProject';
import DeleteProject from '../Projects/DeletProject';
import ProjectForm from '../Projects/ProjectForm';

const Admin = () => {
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('');
  return (
    <div>
      <h1>Admin Page</h1>

      <h2>Create a New Project</h2>
      <ProjectForm />

      <h2>Update an Existing Project</h2>
      <input
        type="text"
        value={selectedProjectTitle}
        onChange={(e) => setSelectedProjectTitle(e.target.value)}
        placeholder="Enter Project Title to Update"
      />
      {selectedProjectTitle && <UpdateProject projectTitle={selectedProjectTitle} />}

      <h2>Delete an Existing Project</h2>
      <input
        type="text"
        value={selectedProjectTitle}
        onChange={(e) => setSelectedProjectTitle(e.target.value)}
        placeholder="Enter Project Title to Delete"
      />
      {selectedProjectTitle && <DeleteProject projectTitle={selectedProjectTitle} />}
    </div>
  )
}

export default Admin