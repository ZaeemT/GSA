import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";

const BlogCardSkeleton = () => {
    return(
        <>
            <div className="p-4">
                <Card className="bg-secondary shadow-md">
                    <CardHeader>
                        <CardTitle>
                            <Skeleton className="h-4 w-[250px] bg-foreground" />
                        </CardTitle>
                        <CardDescription>
                            <Skeleton className="h-4 w-[250px] bg-foreground" />
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}

export default BlogCardSkeleton;