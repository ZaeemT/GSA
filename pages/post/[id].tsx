
import BlogDetails from '@/components/blogDetails';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BlogDetailSkeleton from '@/components/skelBlogDetail';


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


    return (
        <div className="container mx-auto p-4 mx-auto w-full max-w-2xl">
            <h1 className='text-2xl font-bold mb-4 tracking-tighter'>Blog details</h1>
            { (post) ? <BlogDetails prop={post} /> : <BlogDetailSkeleton />}
        </div>
    );
};

export default PostPage;
