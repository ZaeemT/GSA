import Link from "next/link"

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Post } from "@/hooks/useFetch";
import DeleteAlert from "./deleteAlert";

interface PostItemProps {
    prop: Post;
}

const BlogCard = ({ prop }: PostItemProps) => {
    return(
        <>
            <Card className="grid grid-cols-4 gap-4 items-center bg-secondary text-primary shadow-md">
                <Link className="col-start-1 col-span-3" href={`/post/${prop.id}`}>
                    <CardHeader>
                        <CardTitle>{prop.title}</CardTitle>
                        <CardDescription>{prop.summary}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <span className="text-xs underline text-muted-foreground decoration-sky-500">View Blog </span>
                    </CardFooter>
                </Link>

                <div className="p-6 justify-self-end">
                    
                    <DeleteAlert prop={prop.id}/>
                </div>
            </Card>
        </>
    )
}

export default BlogCard;