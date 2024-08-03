import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import BlogCard from '@/components/blogCard';

interface Post {
    id: number;
    title: string;
    summary: string;
}

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="container mx-auto p-4 mx-auto w-full max-w-2xl space-y-1">
            <h1 className="text-2xl font-bold mb-4 tracking-tighter">Blog Posts</h1>
            <SearchBar />
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="m-4">
                        <BlogCard prop={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
