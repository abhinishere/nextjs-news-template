import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="p-4  transition duration-200 transform hover:translate-y-2 ">
      <div className="hover:opacity-80">
        <Link href={`/${props.slug}`}>
          <Image src={props.featured_image} alt="" width="800" height="400" />

          <h4 className="font-bold text-lg pt-2 tracking-wide">
            {props.title}
          </h4>
        </Link>
      </div>
      <div className="flex">
        <p className="text-sm pt-3 tracking-wider font-medium pr-1">By</p>
        <p className="text-sm pt-3 text-[#e53170] tracking-wider font-semibold">
          {props.author}
        </p>
      </div>
      <p className="text-sm pt-3 text-gray-600 tracking-wider">
        {props.subtitle}
      </p>
    </div>
  );
};

export default PostPreview;
