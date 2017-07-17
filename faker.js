// json-server --port 4000 faker.js
var faker = require('faker');

module.exports = () => {
	const data = { users: [], posts: [] };
	// Create 1000 users
	for (let i = 0; i < 100; i++) {
		data.users.push({
			id: i,
			name: faker.name.findName(),
			email: faker.internet.email(),
			website: faker.internet.url(),
			address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
			bio: faker.lorem.sentences(),
			image: faker.image.avatar(),
		});
	}
	for (let i = 0; i < 100; i++) {
		data.posts.push({
			id: i,
			title: faker.name.findName(),
			messages: faker.lorem.sentences(),
			user: faker.random.number(100),
		});
	}
	return data;
};
