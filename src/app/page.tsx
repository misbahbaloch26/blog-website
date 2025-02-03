'use client'
import Link from 'next/link';
import Hero from './components/Hero';
import CommentComponent from './components/CommentComponent';


type BlogPost = {
  id: string;
  title: string;
  image: string;
  paragraph: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'bistro , lahore',
    image: '/bistro.png',
    paragraph: 'Bistro Restaurant is one of Lahore&rsquo;s most beloved dining... Click "Read More" to see the full content.',
  },
  {
    id: '2',
    title: 'the forest,murree',
    image: '/the-forest.jpg',
    paragraph: ' The Forest is a unique café in Karachi that offers a forest-like ambiance with artificial trees, greenery, and a cozy atmosphere... Click "Read More" to see the full content.',
  },
  {
    id: '3',
    title: 'The Monal Resturent, Islambad',
    image: '/monal-image.jpg',
    paragraph: 'Location: Pir Sohawa Road, Islamabad.Monal Restaurant is perched on a hilltop, offering breathtaking views of Islamabad and the Margalla Hills.. Click "Read More" to see the full content.',
  },
  {
    id: '4',
    title: 'Cafe Aylanto, Lahore and Karachi',
    image: '/Café Aylanto.jpg',
    paragraph: 'Café Aylanto is a favorite among food enthusiasts for its cozy yet sophisticated vibe. The restaurant is known for its fresh ingredients, beautifully plated dishes, and warm hospitality... Click "Read More" to see the full content.',
  },
  {
    id: '5',
    title: 'Kolachi,Karachi',
    image: '/kolanchi.jpg',
    paragraph: 'Do Darya, Kolachi offers stunning seaside views and a relaxed ambiance. It&rsquo;s famous for its fresh seafood and traditional Pakistani dishes. Click "Read More" to see the full content.',
  },
];


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Hero />
      <h1 className="text-3xl font-bold text-center my-8">Top 5 Best Resturents in Pakistan!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.paragraph}</p>
              <Link href={`/posts/${post.id}`}>
                <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-yellow-500">
                  Read More
                </button>
              </Link>
             
            </div>
          </div>
        ))}
      
      </div>

      <div className='w-[90%] mt-11'>
      <CommentComponent />
      </div>


    </div>
      
  );
}



