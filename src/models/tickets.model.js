const database = require("./connection");

const getAllTickets = async () => {
  const [tickets] = await database.execute("SELECT * FROM tickets");

  return tickets;
};

const getTicketByUserId = async (id) => {
  const [ticket] = await database.execute(
    "SELECT * FROM tickets WHERE user_id = ? AND is_active = true",
    [id],
  );

  return ticket;
};

const createTicket = async (title, description, userId) => {
  await database.execute(
    "INSERT INTO tickets (title, description, user_id) VALUES (?, ?, ?)",
    [title, description, userId],
  );
};

const deleteTicket = async (id) => {
  await database.execute("DELETE FROM tickets WHERE id = ?", [id]);
};

const updateTicketToClose = async (id) => {
  const updated_at = new Date();
  await database.execute(
    "UPDATE tickets SET is_active = false, updated_at = ? WHERE id = ?",
    [updated_at, id],
  );
};

module.exports = {
  getAllTickets,
  getTicketByUserId,
  createTicket,
  deleteTicket,
  updateTicketToClose,
};
