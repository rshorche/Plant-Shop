import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsFromSupabase } from "../Redux/store/Posts";
import { useEffect } from "react";
import BlogPostBox from "../components/BlogPostBox/BlogPostBox";

export default function MainBlog() {
  const param = useParams();
  const dispath = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispath(getPostsFromSupabase());
  }, []);

  let findPost = posts.find((post) => post.id == param.BlogID);

  console.log(param);
  console.log(posts);
  console.log(findPost);

  return (
    <div className="px-4 sm:px-14">
      {/* Path */}
      <div className="my-14 bg-gray/10 px-8 py-2 rounded-full">
        <p className="flex">
          <span className="text-orange"> خانه / وبلاگ &nbsp; </span>{" "}
          /&nbsp;&nbsp;
          {findPost && findPost.title}
        </p>
      </div>

      {/* Header Post */}
      <div className="flex flex-col items-center">
        <span className="bg-green2/30 text-green3 text-sm px-3 py-[0.4rem] rounded-lg">
          {findPost && findPost.category}
        </span>
        <h3 className="text-4xl md:text-6xl max-w-2xl mt-4 mb-6 text-center">
          {findPost && findPost.title}
        </h3>
        <div className="flex gap-2 items-center">
          <img
            src={`${findPost && findPost.author_Photo}`}
            alt=""
            className="w-11 h-11 rounded-full"
          />
          <div>
            <p className="text-base">{findPost && findPost.author}</p>
            <p className="text-xs">همین الان</p>
          </div>
        </div>
      </div>

      {/* Body Post */}
      <div className="max-w-2xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: `${findPost?.articleBody}` }} />

        {/* Share */}
        <div className="my-10">
          <span>اشتراک گذاری</span>
          <div className="flex gap-2 mt-2">
            <img
              src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Social/Social_Instagram.png"
              alt=""
              className="w-9 h-9"
            />
            <img
              src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Social/Social_Facebook.png"
              alt=""
              className="w-9 h-9"
            />
            <img
              src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Social/Social_Twitter.png"
              alt=""
              className="w-9 h-9"
            />
          </div>
        </div>
      </div>

      {/* Relate Blog */}
      <div>
        <h4 className="text-center text-5xl">مطالب مرتبط</h4>
        <p className="max-w-3xl mx-auto text-center text-sm my-5">
          وبلاگ ما پر از محتوای آموزنده و الهام بخش در مورد همه چیز سبز است. از
          نکات و توصیه های مربوط به مراقبت از گیاهان گرفته تا آخرین گرایش ها در
          باغبانی و طراحی، کارشناسان ما دانش خود را به اشتراک می گذارند تا به
          شما کمک کنند فضاهای داخلی و خارجی خود را زنده کنید.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap  mt-5">
          {posts.map((post) => (
            <BlogPostBox key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
