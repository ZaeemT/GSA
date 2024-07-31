import { useState } from 'react';
import { useRouter } from 'next/router';

import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/posts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, summary, content }),
        });

        if (response.ok) {
            router.push('/');
        }
    };

    return (
        <div className="container mx-auto p-4 mx-auto w-full max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 tracking-tighter">Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                    <Input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Type title of your blog here'
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="summary">Summary</label>
                    <Textarea
                        id="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        placeholder='Type summary of your blog here'
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="content">Content</label>
                    <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Type your blog content here'
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <Button type="submit" className="px-4 py-2 rounded">Create</Button>
            </form>
        </div>
    );
};

export default CreatePostPage;





