import fetch from 'node-fetch';
import config from '../config/environment';

class Post {
  constructor(id, slug, link) {
    this.id = id;
    this.slug = slug;
    this.link =link;
  }
}

class User {
  constructor(id, name, username, website) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
  }
}

let lastFetchTask;
let posts = [];
let url = config.url;

lastFetchTask = fetch(url)
  .then(res => res.json())
  .then(data => {
    posts = data;
    return posts;
  })

const nlewis = new User('1', 'Nick Lewis', 'nickeblewis', 'http://twitter.com');

function getPost(id) {
  return posts.find(p => p.id === id)
}

function getPosts() {
  return posts;
}

function getUser(id) {
  return id === nlewis.id ? nlewis : null;
}

export {
  User,
  Post,
  getUser,
  getPost,
  getPosts
};
