import React, { useState } from "react";
import "./createUserModal.css";
import { validatePhoneNumber } from "../../utils/helpers";

interface CreateUserModalProps {
  onClose: (newUser: { name: string; phone: string } | null) => void;
}

const CreateUserModal = ({ onClose }: CreateUserModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidName, setIsValidName] = useState(true);

  const handleClose = () => {
    onClose(null);
  };

  const validateName = (name: string): boolean => {
    return name.trim().length > 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isPhoneValid = validatePhoneNumber(phone);
    const isNameValid = validateName(name);

    if (!isPhoneValid || !isNameValid) {
      setIsValidPhone(isPhoneValid);
      setIsValidName(isNameValid);
      return;
    }

    if (name && phone) {
      onClose({ name, phone });
    } else {
      onClose(null);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <dialog className="modal" id="createUserModal">
      <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
        <header className="modal-header">
          Create user
          <button className="close-button" onClick={handleClose} type="button">
            ✕
          </button>
        </header>
        <div className="content">
          <h3 className="font-bold text-lg">Create User</h3>
          <div className="form-control">
            <div className="input-container">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered"
                onChange={handleNameChange}
                value={name}
              />
            </div>
            {!isValidName && (
              <span className="error-text">Name cannot be empty.</span>
            )}
          </div>
          <div className="form-control">
            <div className="input-container">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="input input-bordered"
                required
                onChange={handlePhoneChange}
                value={phone}
              />
            </div>
            {!isValidPhone && (
              <span className="error-text">
                Phone number must be a valid format.
              </span>
            )}
          </div>
          <div className="modal-action">
            <button className="btn" type="submit">
              Create
            </button>
            <button className="btn" type="reset">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default CreateUserModal;
