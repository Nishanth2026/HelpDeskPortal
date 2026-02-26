import axiosClient from './axiosClient';

export async function getTickets() {
  const response = await axiosClient.get('/api/tickets');
  return response.data;
}

export async function getTicket(id) {
  const response = await axiosClient.get(`/api/tickets/${id}`);
  return response.data;
}

export async function createTicket(ticket) {
  const response = await axiosClient.post('/api/tickets', ticket);
  return response.data;
}

export async function updateTicket(id, ticket) {
  await axiosClient.put(`/api/tickets/${id}`, ticket);
}

export async function deleteTicket(id) {
  await axiosClient.delete(`/api/tickets/${id}`);
}

