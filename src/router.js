const express = require("express");

const {
  getUserByPhone,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("./controllers/users.controller");

const {
  validateParamsGetUserByPhone,
  validateBodyCreateUser,
  validateUserExists,
  validateBodyUpdateUser,
} = require("./middlewares/users.middlewares");

const {
  getAllOrders,
  getOrdersOfUser,
  getOrderById,
} = require("./controllers/orders.controller");

const {
  validateParamsUserId,
  validateParamsOrderId,
} = require("./middlewares/orders.middlewares");

const {
  getAllTickets,
  getTicketByUserId,
  createTicket,
  deleteTicket,
  updateTicketToClose,
} = require("./controllers/tickets.controller");

const {
  validateParamsgetTicketByUserId,
  validateBodyCreateTicket,
  validateParamsDeleteTicket,
  validateParamsUpdateTicketToClose,
} = require("./middlewares/tickets.middlewares");

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/user/:phone", validateParamsGetUserByPhone, getUserByPhone);
router.post("/user", validateBodyCreateUser, createUser);
router.put(
  "/user/:phone",
  validateUserExists,
  validateBodyUpdateUser,
  updateUser,
);
router.delete("/user/:phone", validateUserExists, deleteUser);

router.get("/orders", getAllOrders);
router.get("/orders/:userId", validateParamsUserId, getOrdersOfUser);
router.get("/order/:orderId", validateParamsOrderId, getOrderById);

router.get("/tickets", getAllTickets);
router.get(
  "/tickets/:userId",
  validateParamsgetTicketByUserId,
  getTicketByUserId,
);
router.post("/ticket", validateBodyCreateTicket, createTicket);
router.delete("/ticket/:ticketId", validateParamsDeleteTicket, deleteTicket);
router.put(
  "/ticket/:ticketId",
  validateParamsUpdateTicketToClose,
  updateTicketToClose,
);

module.exports = router;
