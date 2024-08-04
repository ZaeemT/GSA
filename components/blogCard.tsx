import Link from "next/link"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Post } from "@/hooks/useFetch";

interface PostItemProps {
    prop: Post;
}

const BlogCard = ({ prop }: PostItemProps) => {
    return(
        <>
            <Link href={`/post/${prop.id}`}>
                <Card className="bg-secondary text-primary shadow-md">
                    <CardHeader>
                        <CardTitle>{prop.title}</CardTitle>
                        <CardDescription>{prop.summary}</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </>
    )
}

export default BlogCard;