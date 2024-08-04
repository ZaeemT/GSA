import SearchBar from '@/components/searchbar';
import BlogCard from '@/components/blogCard';
import useFetch from '@/hooks/useFetch';

const HomePage = () => {
    const {data: posts, isPending, error} = useFetch('/api/posts')

    return (
        <div className="container mx-auto p-4 mx-auto w-full max-w-2xl space-y-1">
            <h1 className="text-2xl font-bold mb-4 tracking-tighter">Blog Posts</h1>
            <SearchBar />
            {/* { isPending && } */}
            { Array.isArray(posts) && <ul>
                {posts.map((post) => (
                    <li key={post.id} className="m-4">
                        <BlogCard prop={post} />
                    </li>
                ))}
            </ul> }
        </div>
    );
};

export default HomePage;
