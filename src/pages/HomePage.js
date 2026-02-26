import React, { useEffect, useState } from 'react';
import TicketList from '../components/TicketList';
import { getTickets, deleteTicket } from '../api/tickets';

function HomePage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState('');

  async function loadTickets() {
    try {
      setLoading(true);
      setError('');
      const data = await getTickets();
      setTickets(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load tickets.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTickets();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm(`Delete ticket #${id}?`)) {
      return;
    }
    try {
      setDeletingId(id);
      await deleteTicket(id);
      setTickets((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
      window.alert('Failed to delete ticket.');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <h2>Tickets</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && (
        <TicketList
          tickets={tickets}
          onDelete={deletingId ? () => {} : handleDelete}
        />
      )}
    </div>
  );
}

export default HomePage;

