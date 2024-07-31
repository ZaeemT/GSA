import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./blog.db');

type Post ={
	id: number;
    title: string;
    summary: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse, ) {

	db.all('SELECT id, title, summary FROM posts', (err, rows) => {
		if (err) {
			res.status(500).json({ error: 'Database error' });
		} else {
			res.status(200).json(rows);
		}
	});
		
}

