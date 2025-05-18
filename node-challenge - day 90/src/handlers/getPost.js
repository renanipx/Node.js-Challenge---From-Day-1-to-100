exports.handler = async (event) => {
  const { id } = event.arguments;

  // Mocking the retrieval of a post
  const post = {
    id,
    title: "Mock Post Title",
    content: "This is a mock post content",
  };

  return post;
};
