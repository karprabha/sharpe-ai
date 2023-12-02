import { useEffect, useState } from "react";

import { Post } from "../types";

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
                setPosts(data);
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
                            <li key={post.id}>
                                <div>
                                    <p>User ID: {post.userId}</p>
                                    <p>Name: {post.title}</p>
                                    <p>Family: {post.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default Data;
