const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, '../data/posts.json');

const readData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading data file:", err);
        return [];
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error("Error writing data file:", err);
        return false;
    }
};

const Post = {
    findAll: () => {
        return readData();
    },

    findById: (id) => {
        const posts = readData();
        return posts.find(p => p.id === id);
    },

    create: (postData) => {
        const posts = readData();
        const newPost = {
            id: uuidv4(),
            title: postData.title,
            content: postData.content,
            createdAt: new Date().toISOString()
        };
        posts.push(newPost);
        writeData(posts);
        return newPost;
    },

    update: (id, updateData) => {
        const posts = readData();
        const index = posts.findIndex(p => p.id === id);
        if (index !== -1) {
            posts[index] = { ...posts[index], ...updateData, updatedAt: new Date().toISOString() };
            writeData(posts);
            return posts[index];
        }
        return null;
    },

    delete: (id) => {
        const posts = readData();
        const filteredPosts = posts.filter(p => p.id !== id);
        if (posts.length !== filteredPosts.length) {
            writeData(filteredPosts);
            return true;
        }
        return false;
    }
};

module.exports = Post;
