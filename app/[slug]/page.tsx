import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (err) {
    const matterResult = null;
    return matterResult;
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function PostPage(props: any) {
  const slug = props.params.slug;

  const post = getPostContent(slug);
  if (post == null) {
    return (
      <div className="py-5">
        <h1 className="text-center mb-5 title">404: This Page Doesn't Exist</h1>
        <article className="text-center article">
          Go to homepage to find latest articles!
        </article>
      </div>
    );
  }
  return (
    <div className="mx-4 my-10">
      <div className="my-2 text-center px-1 font-semibold  text-[#e53170] text-base md:text-lg tracking-wide">
        <span className="flex justify-center">
          {post!.data.category.map((category: string) => {
            return (
              <div key={category} className="pr-4">
                {category}
              </div>
            );
          })}
        </span>
      </div>
      <h1 className=" text-black text-center text-3xl md:text-4xl font-extrabold ">
        {post!.data.title}
      </h1>
      <div className="text-gray-600 text-base md:text-lg font-medium text-center my-3">
        <span>{post!.data.subtitle}</span>
      </div>
      <article className="article">
        <figure className="">
          <Image
            src={post!.data.featured_image}
            alt=""
            width={800}
            height={480}
            priority
          />
        </figure>
        <div className="flex justify-center my-4 ">
          <div className="font-medium text-gray-600 text-base md:text-lg tracking-wide">
            By
          </div>
          <div className="px-1 font-semibold  text-[#e53170] text-base md:text-lg tracking-wide">
            {post!.data.author}
          </div>
          <div className="font-medium text-base md:text-lg text-gray-600 tracking-wide">
            & Published on {post!.data.date}
          </div>
        </div>
        <div className="prose md:prose-xl">
          <Markdown>{post!.content}</Markdown>
        </div>
      </article>
    </div>
  );
}

export default PostPage;
