const ticketModel = require("../models/tickets.model");

const getAllTickets = async (req, res) => {
  const tickets = await ticketModel.getAllTickets();

  if (!tickets.length) {
    return res.status(404).json({ message: "Tickets not found" });
  }

  return res.status(200).json({ tickets });
};

const getTicketByUserId = async (req, res) => {
  const { userId } = req.params;

  const ticket = await ticketModel.getTicketByUserId(userId);

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  return res.status(200).json({ ticket });
};

const createTicket = async (req, res) => {
  const { title, description, userId } = req.body;

  await ticketModel.createTicket(title, description, userId);

  return res.status(204).json();
};

const deleteTicket = async (req, res) => {
  const { ticketId } = req.params;

  await ticketModel.deleteTicket(ticketId);

  return res.status(204).json();
};

const updateTicketToClose = async (req, res) => {
  const { ticketId } = req.params;

  await ticketModel.updateTicketToClose(ticketId);

  return res.status(204).json();
};

module.exports = {
  getAllTickets,
  getTicketByUserId,
  createTicket,
  deleteTicket,
  updateTicketToClose,
};
