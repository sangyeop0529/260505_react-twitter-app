import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";
import type { PostProps } from "pages/home";

interface PostBoxProps {
  post: PostProps;
}

export default function PostBox({ post }: PostBoxProps) {
  const handleDelete = () => {};
  const handleEdit = () => {};
  return (
    <div className={"post__box"} key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <div className="post__box-profile">
          <div className="post__flex">
            {post?.profileUrl ? (
              <img
                src={post?.profileUrl}
                alt={"profile"}
                className={"post__box-profile-img"}
              />
            ) : (
              <FaCircleUser className={"post__box-profile-icon"} />
            )}
            <div className="post__email">{post?.email}</div>
            <div className="post__createdAt">{post?.createdAt}</div>
          </div>
          <div className="post__box-content">{post?.content}</div>
        </div>
      </Link>
      <div className="post__box-footer">
        {/* post.uid === user.uid */}
        <>
          <button
            type={"button"}
            className={"post__delete"}
            onClick={handleDelete}
          >
            Delete
          </button>
          <button type={"button"} className={"post__edit"} onClick={handleEdit}>
            <Link to={`/posts/edit/${post?.id}`}>Edit</Link>
          </button>
          <button type={"button"} className={"post__likes"}>
            <CiHeart />
            {post?.likeCount || 0}
          </button>
          <button type={"button"} className={"post__comments"}>
            <FaRegComments />
            {post?.comments || 0}
          </button>
        </>
      </div>
    </div>
  );
}
