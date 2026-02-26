import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TicketForm from '../components/TicketForm';
import { createTicket } from '../api/tickets';

function CreateTicketPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(formValues) {
    try {
      setSubmitting(true);
      const payload = {
        title: formValues.title,
        description: formValues.description
      };
      await createTicket(payload);
      navigate('/');
    } catch (err) {
      console.error(err);
      window.alert('Failed to create ticket.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h2>Create Ticket</h2>
      <TicketForm
        initialValues={{ status: 'Open' }}
        onSubmit={handleSubmit}
        submitting={submitting}
      />
      <div style={{ marginTop: '1rem' }}>
        <Link to="/" className="button secondary">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default CreateTicketPage;

