module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "tasks",
      [
        {
          description: "Realizar testes funcionais",
          status: "Done",
          deadline: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },  
        {
          description: "Levantar requisitos do sistema",
          status: "WIP",
          deadline: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        }, 
        {
          description: "Desenvolver o backend do sistema",
          status: "Review",
          deadline: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        }, 
        {
          description: "Desenvolver o frontend do sistema",
          status: "To Do",
          deadline: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        }, 
        {
          description: "Desenvolver o mobile do sistema",
          status: "Done",
          deadline: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        }, 
        {
          description: "Entregar o sistema para stakeholders",
          status: "WIP",
          deadline: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        }, 
      ],
      {}
    );
  },

  down: () => {}
};