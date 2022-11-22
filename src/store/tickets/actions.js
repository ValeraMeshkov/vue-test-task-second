import api from '@/services/api/tickets';

export default {
  /**
   * Изменение тикета
   */
  changeTicket(context, value) {
    context.commit('setChangeTicket', value);
  },
  /**
   * Обновление тикета
   */
  updateTicket(context, value) {
    context.commit('setUpdateTicket', value);
  },
  /**
   * Получение tickets
   */
  async getTickets({ commit }) {
    try {
      const res = await api.getTickets();
      return commit('setTickets', res.data.data);
    } catch (error) {
      return error;
    }
  },
};
