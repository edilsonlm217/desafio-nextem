const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          email: "test@nextem.com.br",
          name: "Nextem Test",
          password_hash: bcrypt.hashSync("1234", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: "hemilly@nextem.com.br",
          name: "Hemilly Julia",
          password_hash: bcrypt.hashSync("1234", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: "tereza@nextem.com.br",
          name: "Tereza Santos",
          password_hash: bcrypt.hashSync("1234", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: "ze_carlos@nextem.com.br",
          name: "José Carlos",
          password_hash: bcrypt.hashSync("1234", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: "felipe@nextem.com.br",
          name: "Felipe Lima",
          password_hash: bcrypt.hashSync("1234", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: "moany@nextem.com.br",
          name: "Moany Lima",
          password_hash: bcrypt.hashSync("1234", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },

  down: () => {}
};