import { Post } from "../types";

interface ListItemProps {
    post: Post;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => {
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    );
};

export default ListItem;
