const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNotebyIdHandler,
  deleteNotedByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNotebyIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNotedByIdHandler,
  },
];

module.exports = routes;
