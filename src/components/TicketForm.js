import React, { useState } from 'react';

const STATUS_OPTIONS = ['Open', 'InProgress', 'Resolved', 'Closed'];

function TicketForm({ initialValues, onSubmit, submitting }) {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [status, setStatus] = useState(initialValues?.status || 'Open');

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim() || '',
      status
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={submitting}
        />
        {errors.title && <div className="error-text">{errors.title}</div>}
      </div>

      <div className="form-field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={submitting}
        />
      </div>

      <div className="form-field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          disabled={submitting}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="button" disabled={submitting}>
        {submitting ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}

export default TicketForm;

