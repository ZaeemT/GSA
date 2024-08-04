import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

const BlogDetailSkeleton = () => {
    return(
        <>
            <div className="p-4">
                <Card className="bg-secondary shadow-md">
                    <CardHeader>
                        <Skeleton className="h-4 w-[250px] bg-foreground" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-[250px] bg-foreground" />
                    </CardContent>
                    <CardFooter>
                    <Skeleton className="h-4 w-[100px] bg-foreground" />
                    </CardFooter>
                </Card>
            </div>

        </>
    )
}

export default BlogDetailSkeleton;