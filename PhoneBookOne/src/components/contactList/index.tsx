import React, { useEffect, useState } from "react";
import ContactListItem from "../contactListItem/contactListItem";
import type { User } from "../../utils/mockData";
import "./contactList.css";
import { chunkArray } from "../../utils/helpers";

interface ContactListProps {
  data: User[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  data,
  onDelete,
  onEdit,
}) => {
  const [userPages, setUserPages] = useState<Array<User[]>>([]);
  const [currentPage, setCurrentPage] = useState(0);

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

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const handleEdit = (id: number) => {
    onEdit(id);
  };

  return (
    <div className="contact-container">
      <div className="contact-list-container">
        <ul className="contact-list first-column">
          {userPages &&
            userPages[currentPage]?.map((user) => (
              <ContactListItem
                key={user.id}
                user={user}
                onDelete={() => handleDelete(user.id)}
                onEdit={() => handleEdit(user.id)}
              />
            ))}
        </ul>
        <ul className="contact-list second-column">
          {userPages &&
            userPages[currentPage + 1]?.map((user) => (
              <ContactListItem
                key={user.id}
                user={user}
                onDelete={() => handleDelete(user.id)}
                onEdit={() => handleEdit(user.id)}
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
