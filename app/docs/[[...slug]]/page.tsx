const DocsPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  console.log(slug);
  return <div>Docs Page</div>;
};

export default DocsPage;
