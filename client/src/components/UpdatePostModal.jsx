import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../redux/actions/postActions";
import { fetchCategories } from "../redux/actions/categoryActions";

const UpdatePostModal = ({ setUpdatePost, post }) => {
     const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [category, setCategory] = useState(post.category);

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updatePost({ title, category, description }, post?._id));
    setUpdatePost(false) 
  };
  useEffect(async() => {
                    await dispatch(await fetchCategories());
  }, [])
    const categories = useSelector((state) => state.categories.categories);


  return (
    <div className="update-post">
      <ToastContainer theme="colored" />
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <i
            onClick={() => setUpdatePost(false)}
            className="bi bi-x-circle-fill update-post-form-close"
          ></i>
        </abbr>
        <h1 className="update-post-title">Update Post</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="update-post-input"
        />
        <select
          className="update-post-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Select A Category
          </option>
          {categories?.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
        <textarea
          className="update-post-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
        ></textarea>
        <button type="submit" className="update-post-btn">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePostModal;
