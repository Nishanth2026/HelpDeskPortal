import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TicketDetailsPage from './pages/TicketDetailsPage';
import CreateTicketPage from './pages/CreateTicketPage';
import EditTicketPage from './pages/EditTicketPage';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>HelpDesk Portal</h1>
        <nav>
          <Link to="/" className="button secondary">
            Tickets
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets/:id" element={<TicketDetailsPage />} />
          <Route path="/create" element={<CreateTicketPage />} />
          <Route path="/edit/:id" element={<EditTicketPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
