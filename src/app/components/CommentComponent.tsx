import { useState } from 'react';

const CommentComponent = () => {
  // Define the type for the comments state
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      
      {/* Comment Input */}
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-purple-400"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentComponent;