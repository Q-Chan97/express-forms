// Database simulation

class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName, email }) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, { firstName, lastName, email }) {
        this.storage[id] = { id, firstName, lastName, email };
    }

    deleteUser(id) {
        delete this.storage[id];
    }
}

export default new UsersStorage;