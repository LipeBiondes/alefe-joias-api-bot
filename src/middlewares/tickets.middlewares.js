const validateParamsgetTicketByUserId = (req, res, next) => {
  const { userId } = req.params;

  if (!userId || userId === "" || userId.length === 0) {
    return res.status(400).json({ message: "userId is required" });
  }

  next();
};

const validateBodyCreateTicket = (req, res, next) => {
  const { title, description, userId } = req.body;

  if (!title || title === "" || title.length === 0) {
    return res.status(400).json({ message: "title is required" });
  }

  if (!description || description === "" || description.length === 0) {
    return res.status(400).json({ message: "description is required" });
  }

  if (!userId || userId === "" || userId.length === 0) {
    return res.status(400).json({ message: "userId is required" });
  }

  next();
};

const validateParamsDeleteTicket = (req, res, next) => {
  const { ticketId } = req.params;

  if (!ticketId || ticketId === "" || ticketId.length === 0) {
    return res.status(400).json({ message: "ticketId is required" });
  }

  next();
};

const validateParamsUpdateTicketToClose = (req, res, next) => {
  const { ticketId } = req.params;

  if (!ticketId || ticketId === "" || ticketId.length === 0) {
    return res.status(400).json({ message: "ticketId is required" });
  }

  next();
};

module.exports = {
  validateParamsgetTicketByUserId,
  validateBodyCreateTicket,
  validateParamsDeleteTicket,
  validateParamsUpdateTicketToClose,
};
