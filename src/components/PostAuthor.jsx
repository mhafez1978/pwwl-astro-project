const PostAuthor = async ({ id }) => {
  const res = await fetch(
    `https://charlottecitylimo.com/wp-json/wp/v2/users/${id}`
  );
  const wroteBy = await res.json();
  console.log(wroteBy.name);
  const author = wroteBy.name;
  return author;
};

export default PostAuthor;
