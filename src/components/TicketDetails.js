import React from 'react';

function TicketDetails({ ticket }) {
  if (!ticket) {
    return <p>Ticket not found.</p>;
  }

  return (
    <div>
      <h2>Ticket #{ticket.id}</h2>
      <p>
        <strong>Title:</strong> {ticket.title}
      </p>
      <p>
        <strong>Description:</strong>{' '}
        {ticket.description || <em>No description</em>}
      </p>
      <p>
        <strong>Status:</strong>{' '}
        <span className="status-pill">{ticket.status}</span>
      </p>
    </div>
  );
}

export default TicketDetails;

