import apiClient from '@/services/api/apiClient';

export default {
  getTickets: (payload) => apiClient.get('/api/items/', { params: payload }),
};
