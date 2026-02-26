import React from 'react';
import { Link } from 'react-router-dom';

function TicketList({ tickets, onDelete }) {
  if (!tickets || tickets.length === 0) {
    return (
      <div>
        <p>No tickets found.</p>
        <Link to="/create" className="button">
          Create Ticket
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/create" className="button">
          Create Ticket
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th style={{ width: '180px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>
                <Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link>
              </td>
              <td>{ticket.description}</td>
              <td>
                <span className="status-pill">{ticket.status}</span>
              </td>
              <td>
                <Link
                  to={`/edit/${ticket.id}`}
                  className="button secondary"
                  style={{ marginRight: '0.5rem' }}
                >
                  Edit
                </Link>
                <button
                  className="button danger"
                  onClick={() => onDelete(ticket.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketList;

