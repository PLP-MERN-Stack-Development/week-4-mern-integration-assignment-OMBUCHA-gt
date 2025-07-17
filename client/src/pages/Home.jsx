import { useEffect, useState } from 'react';
import { postService } from '../api/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Latest Posts</h1>
      {posts.map(post => (
        <div key={post._id} className="mb-4 p-4 border rounded">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
