import { useState } from "react";
import { useRouter } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";


interface PostItemProps {
    prop: number;
}

const DeleteAlert = ({prop}: PostItemProps) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();
    const { toast } = useToast()


    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/posts/${prop}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // onDelete(prop.id); // Notify parent component
                toast({
                    variant: "default",
                    description: "Post Deleted Successfully",
                })
                router.push('/')
                
                console.log('Post deleted successfully');
            } else {
                const data = await response.json();
                console.error('Failed to delete post:', data.error);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteAlert;
