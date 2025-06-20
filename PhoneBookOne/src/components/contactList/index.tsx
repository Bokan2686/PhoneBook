import React, { useEffect, useState } from "react";
import ContactListItem from "../contactListItem/contactListItem";
import type { User } from "../../utils/mockData";
import "./contactList.css";
import { chunkArray } from "../../utils/helpers";

interface ContactListProps {
  data: User[];
}

const ContactList: React.FC<ContactListProps> = ({ data }) => {
  const [userPages, setUserPages] = useState<Array<User[]>>([]);
  const [currentPage, setCurrentPage] = useState(0);

  console.log("Data received in ContactList:", data);

  useEffect(() => {
    setUserPages(chunkArray(data, 5));
  }, [data]);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < userPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <div className="contact-list-container">
        <ul className="contact-list first-column">
          {userPages &&
            userPages[currentPage]?.map((user) => (
              <ContactListItem
                key={user.id}
                user={user}
                onDelete={() => console.log(`Delete user with id: ${user.id}`)}
                onEdit={() => console.log(`Edit user with id: ${user.id}`)}
              />
            ))}
        </ul>
        <ul className="contact-list second-column">
          {userPages &&
            userPages[currentPage + 1]?.map((user) => (
              <ContactListItem
                key={user.id}
                user={user}
                onDelete={() => console.log(`Delete user with id: ${user.id}`)}
                onEdit={() => console.log(`Edit user with id: ${user.id}`)}
              />
            ))}
        </ul>
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span className="page-number">
          Page {currentPage + 1} of {userPages.length}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage >= userPages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ContactList;
