interface PageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function ProductDetails({
  params,}: PageProps) {
  const { category, id } = await params;
  return (
    <div>
      Product <h1>{id}</h1>
      in {category}
    </div>
  );
}