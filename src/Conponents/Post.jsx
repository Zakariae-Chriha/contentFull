import React from "react";

function Post({ article }) {
  console.log(article);
  const { name, margaritta, price } = article.fields;
  return (
    <div className="Post">
      {margaritta && (
        <img
          className="margaritta"
          src={margaritta.fields.file.url}
          alt={name}
        />
      )}
      <h2 className="title">{name}</h2>
      <p>{price}</p>
    </div>
  );
}
export default Post;
