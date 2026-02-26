import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TicketDetails from '../components/TicketDetails';
import { getTicket } from '../api/tickets';

function TicketDetailsPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (notFound) {
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
      <TicketDetails ticket={ticket} />
      <div style={{ marginTop: '1rem' }}>
        <Link
          to="/"
          className="button secondary"
          style={{ marginRight: '0.5rem' }}
        >
          Back
        </Link>
        <Link to={`/edit/${ticket.id}`} className="button">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default TicketDetailsPage;

