import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Post {
    id: number;
    title: string;
    content: string;
}

interface PostItemProps {
    prop: Post;
}

const BlogDetails = ({ prop }: PostItemProps) => {
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
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>

        </>
    )    
}

export default BlogDetails;