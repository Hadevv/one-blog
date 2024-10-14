import { getPosts } from "@/lib/posts";

export default async function RoutePage(props: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === props.params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.content}</p>
    </div>
  );
}
