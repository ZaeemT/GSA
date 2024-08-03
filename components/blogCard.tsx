import * as React from "react"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Post {
    id: number;
    title: string;
    summary: string;
}

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