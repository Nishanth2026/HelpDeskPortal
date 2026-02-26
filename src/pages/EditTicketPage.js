import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import TicketForm from '../components/TicketForm';
import { getTicket, updateTicket } from '../api/tickets';

function EditTicketPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setNotFound(false);
        const data = await getTicket(id);
        setTicket(data);
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  async function handleSubmit(formValues) {
    try {
      setSubmitting(true);
      await updateTicket(id, {
        id: ticket.id,
        title: formValues.title,
        description: formValues.description,
        status: formValues.status
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      window.alert('Failed to update ticket.');
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (notFound || !ticket) {
    return (
      <div>
        <p>Ticket not found.</p>
        <Link to="/" className="button secondary">
          Back to list
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Edit Ticket #{ticket.id}</h2>
      <TicketForm
        initialValues={{
          title: ticket.title,
          description: ticket.description,
          status: ticket.status
        }}
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

export default EditTicketPage;

