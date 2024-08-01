"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    title: z.string().min(1, {
      message: "Title must be at least 2 characters.",
    }),
    summary: z.string().min(1, {
        message: "Summary must be at least 2 characters.",
    }),
    content: z.string().min(1, {
        message: "Content must be at least 2 characters.",
    }),
})




const CreatePostPage = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const { toast } = useToast()
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            summary: "",
            content: "",
        },
    })
    
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            variant: "default",
            description: "Post Added Successfully",
        })

        const response = await fetch('/api/posts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( data ),
        });

        if (response.ok) {
            router.push('/');
        }
    }

    

    return (
        <div className="container mx-auto p-4 mx-auto w-full max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 tracking-tighter">Create a New Post</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-md m-5">
                    <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    id="title"
                                    placeholder='Type title of your blog here'
                                    className="w-full p-2 border border-gray-300 rounded"
                                    {...field}
                                />
                            </FormControl>
                            
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Summary</FormLabel>
                            <FormControl>
                                <Textarea
                                    id="summary"
                                    placeholder='Type summary of your blog here'
                                    className="w-full p-2 border border-gray-300 rounded"
                                    {...field}
                                />
                            </FormControl>
                            
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea
                                    id="content"
                                    placeholder='Type content of your blog here'
                                    className="w-full p-2 border border-gray-300 rounded"
                                    {...field}
                                />
                            </FormControl>
                            
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default CreatePostPage;
