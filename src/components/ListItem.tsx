import { Post } from "../types";

interface ListItemProps {
    post: Post;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => {
    return (
        <li key={post.id}>
            <div>
                <p>User ID: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
        </li>
    );
};

export default ListItem;
