import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Welcome Post', content: 'This is your first post!' }
  ]);

  const addPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addPost} />
    </div>
  );
}