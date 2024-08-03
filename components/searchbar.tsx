import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { TextCursor } from 'lucide-react';
import { cursorTo } from 'readline';
  

interface Post {
    id: number;
    title: string;
    summary: string;
}


const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Post[]>([]);


    useEffect(() => {

        const fetchPosts = async () => {
            try {

                const response = await fetch(`/api/posts/search?query=${query}`);
                if (!response.ok) {
                    //throw new Error(`Error: ${response.statusText}`);
                    console.error('response not ok')
                }
                const data = await response.json();
                console.log(data);  // Checking the data we are getting
                setSuggestions(data);
                
            } catch (error) {
                console.error('Failed to fetch posts:', error);
                setSuggestions([]);
            }
        };

        
        //Custom debounce function
        const handler = setTimeout(() => {
            fetchPosts();
            console.log("debounced") // For checking in browser console
        }, 1000);

        return () => {
            clearTimeout(handler);
        };

    }, [query]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log("changed")
        setQuery(value);
    };


    return (
        <>
            <Command className='p-1 rounded-lg border shadow-md'>
                <CommandInput 
                    placeholder=" Search..."
                    value={query}
                    onChangeCapture={handleChange}
                />
                <CommandList>
                    { query && 
                        <CommandGroup heading="Suggestions">
                            { (suggestions.length > 0) && suggestions.slice(0, 5).map((suggestion) => (
                                <Link href={`/post/${suggestion.id}`} key={ suggestion.id }>
                                    <span>
                                        <CommandItem style={{cursor:'pointer'}}>
                                            { suggestion.title }
                                        </CommandItem>
                                    </span>
                                </Link>
                            ))}
                        </CommandGroup>
                    }
                    {/*    <CommandSeparator />

                    <CommandGroup heading="Settings">
                    </CommandGroup>*/}
                </CommandList>
            </Command>

        </>
    );
};

export default SearchBar;
