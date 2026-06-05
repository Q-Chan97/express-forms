// Database simulation

class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName, email, age, bio }) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email, age, bio};
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, { firstName, lastName, email, age, bio }) {
        this.storage[id] = { id, firstName, lastName, email, age, bio };
    }

    deleteUser(id) {
        delete this.storage[id];
    }

    searchUsers(name, email) {
        return Object.values(this.storage).filter((user) => {
            // Case insensitive full name search
            const fullUserName = `${user.firstName} ${user.lastName}`;
            const nameMatch = name ? fullUserName.toLowerCase() === name.toLowerCase() : false;

            const emailMatch = email ? user.email === email : false;
            return nameMatch || emailMatch;
        })
    }
}

export default new UsersStorage;