const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('blog.db');

db.serialize(() => {
	db.run(`CREATE TABLE IF NOT EXISTS posts (
				id INTEGER PRIMARY KEY AUTOINCREMENT, 
				title TEXT, 
				summary TEXT, 
				content TEXT)`, (err) => {
		if (err) {
		console.error('Error creating table:', err);
		} else {
		console.log('Table "posts" created or already exists.');
		}
	});

	db.run(`INSERT INTO posts (title, summary, content) VALUES
		('First Post', 'This is the summary of the first post.', 'This is the content of the first post.'),
		('Second Post', 'This is the summary of the second post.', 'This is the content of the second post.'),
		('Third Post', 'This is the summary of the third post.', 'This is the content of the third post.'),
		('Fourth Post', 'This is the summary of the fourth post.', 'This is the content of the fourth post.'),
		('Fifth Post', 'This is the summary of the fifth post.', 'This is the content of the fifth post.');`
	)

	db.all('SELECT name FROM sqlite_master WHERE type="table" AND name="posts"', (err, rows) => {
		if (err) {
		console.error('Error querying database:', err);
		} else if (rows.length > 0) {
		console.log('Database initialized successfully. Table "posts" exists.');
		} else {
		console.error('Table "posts" does not exist.');
		}
		db.close();
	});
});
