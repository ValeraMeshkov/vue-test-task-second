export default {
  setTickets(state, value) {
    state.tickets = value;
  },
  setChangeTicket(state, value) {
    const elem = state.tickets.find((el) => el.id === value.id);
    elem.url = value.img;
    elem.imgBinary = value.imgBinary;
  },
  setUpdateTicket(state, value) {
    const elem = state.tickets.find((el) => el.id === value.id);
    elem.updated_at = value.updated_at;
    elem.url = value.url;
  },
};
