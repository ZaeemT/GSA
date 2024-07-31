
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        if (id) {
            fetch(`/api/posts/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Resource does not exists');
                    }
                    return response.json()
                })
                .then(data => setPost(data))
                .catch(err => {
                    console.log(err.message)
                });
            }
    }, [id]);

    if (!post) {
        return <p>Loading...</p>
    }

    return (
        <div className="container mx-auto p-4">
            <h1>Blog details</h1>
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <div>{post.content}</div>
        </div>
    );
};

export default PostPage;