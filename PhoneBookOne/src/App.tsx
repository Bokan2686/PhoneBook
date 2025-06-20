import "./App.css";
import ContactList from "./components/contactList";
import { useState } from "react";
import type { User } from "./utils/mockData";
import { userData } from "./utils/mockData";
import CreateUserModal from "./components/createUserModal";

function App() {
  const [users, setUsers] = useState<Array<User>>(userData);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (newUser: User | null) => {
    setShowModal(false);
    if (newUser) {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };

  console.log("Current users:", users);

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
        <ContactList data={users} />
      </div>
      {showModal && <CreateUserModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
