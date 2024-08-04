import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./blog.db');

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse) {


    const { title, summary, content } = req.body;
    
    db.run('INSERT INTO posts (title, summary, content) VALUES (?, ?, ?)', [title, summary, content], function (err) {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(200).json({ id: this.lastID });
        }
    });
}
