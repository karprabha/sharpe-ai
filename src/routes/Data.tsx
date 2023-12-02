import { useEffect, useState } from "react";

import { Post } from "../types";
import ListItem from "../components/ListItem";

const Data = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data: Post[] = await response.json();
                setPosts(data.filter((post) => post.userId === 1));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <ul>
                        {posts.map((post) => (
                            <ListItem key={post.id} post={post} />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default Data;
