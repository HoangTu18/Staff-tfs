import React, { useState } from "react";

function ChangePasswordSuccess() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit password change to server
    // assuming success:
    setSuccessMessage("Password changed successfully.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="current-password">Current Password:</label>
        <input
          type="password"
          id="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-new-password">Confirm New Password:</label>
        <input
          type="password"
          id="confirm-new-password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Change Password</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default ChangePasswordSuccess;
