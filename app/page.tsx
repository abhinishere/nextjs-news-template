import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // ... is spread operator to pass all values
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 py-5">
      {postPreviews}
    </div>
  );
};

export default HomePage;
