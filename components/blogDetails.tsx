import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Post } from "@/hooks/useFetch";
import DeleteAlert from "./deleteAlert";

interface PostItemProps {
    prop: Post;
}

const BlogDetails = ({ prop }: PostItemProps) => {
    const router = useRouter();

    const handleDelete = (id: number) => {
        router.push('/')
    }

    return(
        <>
            <div className="p-4">
                <Card className="bg-secondary shadow-md">
                    <CardHeader>
                        <CardTitle>{ prop.title }</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{ prop.content}</p>
                    </CardContent>
                    <CardFooter>
                        <DeleteAlert prop={prop.id} onDelete={handleDelete}/>
                    </CardFooter>
                </Card>
            </div>

        </>
    )    
}

export default BlogDetails;