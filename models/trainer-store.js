
const JsonStore = require('./json-store');

const trainerStore = {

  store: new JsonStore('./models/trainer-store.json', { trainers: [] }),
  collection: 'trainers',

  getAllTrainers() {
    return this.store.findAll(this.collection);
  },

  addTrainer(trainer) {
    this.store.add(this.collection, trainer);
  },

  getTrainerById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },


  getTrainerByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },

 
  getTrainerByName(name) {
    return this.store.findOneBy(this.collection, { name: name });
  },
};

module.exports = trainerStore;
