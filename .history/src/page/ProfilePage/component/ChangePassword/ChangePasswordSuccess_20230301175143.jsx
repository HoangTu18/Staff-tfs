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
    <div>
      <h2>Password Changed Successfully</h2>
      <p>Your password has been successfully changed.</p>
    </div>
  );
}

export default ChangePasswordSuccess;
