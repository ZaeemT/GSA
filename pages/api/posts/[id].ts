import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./blog.db');

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse ) {
        
    const { id } = req.query;
    
    switch (req.method) {
        case 'GET':
            db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
                if (err) {
                    res.status(500).json({ error: 'Database error' });
                } else if (!row) {
                    res.status(404).json({ error: 'Post not found' });
                } else {
                    res.status(200).json(row);
                }
            });
            break;

        case 'DELETE':
            db.run('DELETE FROM posts WHERE id = ?', [id], function (err) {
                if (err) {
                    res.status(500).json({ error: 'Database error' });
                } else if (this.changes === 0) {
                    res.status(404).json({ message: 'Post not found' });
                } else {
                    res.status(200).json({ message: 'Post deleted successfully' });
                }
            });
            break;

        default:
            res.setHeader('Allow', ['GET', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}
