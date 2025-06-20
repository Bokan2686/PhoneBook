import "./contactListItem.css";

interface User {
  id: number;
  name: string;
  phone: string;
}

const ContactListItem = ({
  user,
  onDelete,
  onEdit,
}: {
  user: User;
  onDelete: () => void;
  onEdit: () => void;
}) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <li className="list-item-container">
      <div className="user-info">
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </div>
      <div className="user-actions">
        <button style={{ marginLeft: "5px" }} onClick={handleEdit}>
          Edit
        </button>
        <button style={{ marginLeft: "10px" }} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
