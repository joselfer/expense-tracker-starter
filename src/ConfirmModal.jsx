function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Delete this transaction?</p>
        <button className="modal-delete-btn" onClick={onConfirm}>Delete</button>
        <button className="modal-cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmModal;
