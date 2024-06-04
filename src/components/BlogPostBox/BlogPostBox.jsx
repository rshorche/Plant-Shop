/* eslint-disable react/prop-types */
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BlogPostBox({
  cover,
  title,
  description,
  category,
  author,
  author_Photo,
  created_at,
  id,
}) {
  console.log(author_Photo);
  return (
    <div className="max-w-80">
      <img src={`${cover}`} alt={title} />

      <div className="mt-6 mb-3">
        <span className="bg-green2 text-green3 text-sm px-3 py-[0.4rem] rounded-lg">
          {category}
        </span>
        <p className="text-xl mt-2">{title}</p>
      </div>

      <Link
        to={`/Blog/${id}`}
        className="flex items-end gap-2 text-base text-orange">
        ادامه مطلب
        <FaArrowLeftLong />
      </Link>

      <div className="flex items-center gap-2">
        <img
          src={`${author_Photo}`}
          alt={author}
          className="w-8 h-8 rounded-full"
        />
        <div className="text-xs mt-3">
          <p>توسط {author}</p>
          <p className="text-gray">{created_at}</p>
        </div>
      </div>
    </div>
  );
}
