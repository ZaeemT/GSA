import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./blog.db');

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse ) {
        
    const { id } = req.query;
    db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(200).json(row);
        }
    });
}
