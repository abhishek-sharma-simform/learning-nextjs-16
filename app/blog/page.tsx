const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolve");
    }, 2000);
  });
  return <div>Blog page</div>;
};

export default Blog;
