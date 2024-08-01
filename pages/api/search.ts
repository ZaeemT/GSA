import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./blog.db');

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse) {

    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    db.all(
        'SELECT id, title, summary FROM posts WHERE title LIKE ? OR summary LIKE ? LIMIT 5',
        [`%${query}%`, `%${query}%`],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: 'Database error' });
            } else {
                res.status(200).json(rows);
            }
        }
    );
}
