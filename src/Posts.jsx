import React from "react";
import { usePosts } from "./usePosts";

function Posts() {
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              <ul>
                {data.map((post) => (
                  <li key={post.id}>
                    <p>{post.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export { Posts };
