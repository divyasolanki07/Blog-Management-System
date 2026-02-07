const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const DATA_FILE = path.join(__dirname, '../data/users.json');

const readUsers = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading users file:", err);
        return [];
    }
};

const writeUsers = (users) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
        return true;
    } catch (err) {
        console.error("Error writing users file:", err);
        return false;
    }
};

const User = {
    create: async (username, password) => {
        const users = readUsers();
        if (users.find(u => u.username === username)) {
            throw new Error('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: uuidv4(),
            username,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        writeUsers(users);
        return newUser;
    },

    findByUsername: (username) => {
        const users = readUsers();
        return users.find(u => u.username === username);
    },

    findById: (id) => {
        const users = readUsers();
        return users.find(u => u.id === id);
    }
};

module.exports = User;
