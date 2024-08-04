
import BlogDetails from '@/components/blogDetails';
import { useRouter } from 'next/router';
import BlogDetailSkeleton from '@/components/skelBlogDetail';
import useFetch from '@/hooks/useFetch';
import {Post} from '@/hooks/useFetch';

const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const {data: post, isPending, error} = useFetch(`/api/posts/${id}`)

   

    return (
        <div className="container mx-auto p-4 mx-auto w-full max-w-2xl">
            <h1 className='text-2xl font-bold mb-4 tracking-tighter'>Blog details</h1>
            { isPending && <BlogDetailSkeleton /> }
            { (post) && <BlogDetails prop={post as Post} /> } 
        </div>
    );
};

export default PostPage;
