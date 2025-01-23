import { pb } from "@/app/lib";

export async function generateStaticParams() {
  const posts = await pb.collection("Ancestry").getFullList();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const ancestry = await pb.collection("Ancestry").getOne(id);

  return (
    <div>
      <h1>Ancestry: {ancestry.name}</h1>
      <p>ID: {id}</p>
    </div>
  );
}
