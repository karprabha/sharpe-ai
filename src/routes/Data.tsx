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
            <div className="max-w-screen-md mx-auto">
                <table className="w-full border-collapse border bg-white shadow-md">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h1>Loading ...</h1>
                        ) : (
                            posts.map((post) => (
                                <ListItem key={post.id} post={post} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Data;
