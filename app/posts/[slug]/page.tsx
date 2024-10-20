import { getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Mdx } from "@/features/mdx/Mdx";
import { ViewCount } from "./ViewCount";

export default async function RoutePage(props: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === props.params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="prose prose-sm lg:prose-lg">

      <div className="flex items-center gap-2">
        <p className="text-xs text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <ViewCount slug={props.params.slug} />
      </div>
      <h1>{post.title}</h1>
      <Mdx>{post.content}</Mdx>
    </div>
  );
}
