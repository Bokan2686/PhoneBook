import "./App.css";
import ContactList from "./components/contactList";
import { useState, useEffect } from "react";
import type { User } from "./utils/mockData";
import { userData } from "./utils/mockData";
import CreateUserModal from "./components/createUserModal";

function App() {
  const [users, setUsers] = useState<Array<User>>(userData);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setUsers((prevUsers) => sortUsers(prevUsers));
  }, [users]);

  const sortUsers = (users: User[]) => {
    return users.sort((a, b) => a.name.localeCompare(b.name));
  };

  const handleCloseModal = (
    newUser: { name: string; phone: string } | null
  ) => {
    setShowModal(false);
    if (newUser) {
      setUsers((prevUsers) => [
        ...prevUsers,
        { ...newUser, id: prevUsers.length + 1 },
      ]);
    }
  };

  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleEdit = (id: number) => {
    // Logic for editing a user can be implemented here
    console.log(`Edit user with id: ${id}`);
  };

  return (
    <div>
      <h1>Phone Book</h1>
      <p>Welcome to the Phone Book application!</p>

      <div>
        <button
          onClick={() => {
            if (showModal) {
              setShowModal(false);
            } else {
              setShowModal(true);
            }
          }}
          className="btn btn-primary"
        >
          Add Contact
        </button>
      </div>
      <div className="contact-list-container">
        <ContactList data={users} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
      {showModal && <CreateUserModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
