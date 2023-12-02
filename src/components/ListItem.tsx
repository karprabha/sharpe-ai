import { Post } from "../types";

interface ListItemProps {
    post: Post;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => {
    return (
        <tr className="hover:bg-gray-100 border">
            <td className="py-2 px-8 text-center border">{post.id}</td>
            <td className="py-2 px-8 text-center border">{post.title}</td>
            <td className="py-2 px-8 text-center border">{post.body}</td>
        </tr>
    );
};

export default ListItem;
