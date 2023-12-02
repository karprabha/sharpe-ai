import { useEffect, useState } from "react";

import { Post } from "../types";
import ListItem from "../components/ListItem";
import PieChartCard from "../components/PieChartCard";

const Data = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [userId1Posts, setUserId1Posts] = useState<Post[]>([]);

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
                setUserId1Posts(data.filter((post) => post.userId === 1));
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
            <div className="max-w-screen-md mx-auto my-4 mb-20">
                <PieChartCard
                    userId1Posts={userId1Posts.length}
                    otherUsersPosts={posts.length - userId1Posts.length}
                />

                <table className="w-full border-collapse border bg-white shadow-md">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-2">ID</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h1>Loading ...</h1>
                        ) : (
                            userId1Posts.map((post) => (
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
