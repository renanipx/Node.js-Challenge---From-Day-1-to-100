exports.handler = async (event) => {
  const { title, content } = event.arguments;

  // Mocking the creation of a post and returning it
  const newPost = {
    id: new Date().toISOString(),
    title,
    content,
  };

  return newPost;
};
