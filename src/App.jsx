import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedLayout from './components/ProtectedLayout';
import Login from './pages/Login';
import Main from './pages/Main';
import HomePage from './pages/HomePage';
import TicketDetailsPage from './pages/TicketDetailsPage';
import CreateTicketPage from './pages/CreateTicketPage';
import EditTicketPage from './pages/EditTicketPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={
        <ProtectedRoute>
          <Main />
        </ProtectedRoute>
      } />
      <Route path="/" element={
        <ProtectedRoute>
          <ProtectedLayout />
        </ProtectedRoute>
      }>
        <Route index element={<HomePage />} />
        <Route path="tickets/:id" element={<TicketDetailsPage />} />
        <Route path="create" element={<CreateTicketPage />} />
        <Route path="edit/:id" element={<EditTicketPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
