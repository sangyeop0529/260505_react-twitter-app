import { FiImage } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";

import { Link } from "react-router-dom";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  like?: string[];
  likeCount?: number;
  comments?: any;
}
const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2026-05-11",
    uid: "123123",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2026-05-11",
    uid: "123123",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2026-05-11",
    uid: "123123",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2026-05-11",
    uid: "123123",
  },
  {
    id: "5",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2026-05-11",
    uid: "123123",
  },
  {
    id: "6",
    email: "test@test.com",
    content: "내용입니다.",
    createdAt: "2026-05-11",
    uid: "123123",
  },
];

export default function HomePage() {
  const handleFileUpload = () => {};
  const handleDelete = () => {};
  const handleEdit = () => {};
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab ">Fallowing</div>
      </div>
      {/* Post Form */}
      <form className={"post-form"}>
        <textarea
          name="content"
          id="content"
          className={"post-form__textarea"}
          required
          placeholder={"What is happening?"}
        ></textarea>
        <div className="post-form__submit-area">
          <label htmlFor="file-input" className={"post-form__file"}>
            <FiImage className={"post-form__file-icon"} />
          </label>
          <input
            type="file"
            name={"file-input"}
            accept={"image/*"}
            onChange={handleFileUpload}
            className={"hidden"}
          />
          <input
            type="submit"
            value={"Tweet"}
            className={"post-form__submit-btn"}
          />
        </div>
      </form>
      {/* Tweet Post */}
      <div className={"post"}>
        {posts?.map((post) => (
          <div className={"post-box"} key={post.id}>
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
                <button
                  type={"button"}
                  className={"post__edit"}
                  onClick={handleEdit}
                >
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
        ))}
      </div>
    </div>
  );
}
