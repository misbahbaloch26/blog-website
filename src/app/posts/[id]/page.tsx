'use client'
import { notFound } from 'next/navigation';
import Link from 'next/link';





// Define the type for a blog post
type BlogPost = {
  id: string;
  title: string;
  image: string;
  paragraph: string;
  content: string ; // Additional content for the detail page
  location: string;
  perfectfor: string[],
  Cuisine:string[]
};

// Hardcoded blog posts
const blogPosts: BlogPost[] = [
  
    {
        id: '1',
        title: 'bistro , lahore',
        image: '/bistro.png',
        paragraph: 'Bistro Restaurant is one of Lahore&rsquo;s most beloved dining spots, known for its warm ambiance, excellent service, and delicious food.Bistro Restaurant is one of Lahore&rsquo;s most beloved dining spots, known for its warm ambiance,',
        content: 'Bistro Restaurant in Lahore is a well-known dining spot that offers a blend of continental and Pakistani cuisine in a cozy and elegant setting. It&rsquo;s a popular choice for both casual and fine dining experiences. ',
        location: 'Main Branch: 14 CC, Block C2, Gulberg III, Lahore.',
        perfectfor: ['Family gatherings' ,'  ,', 'Casual dining with friends'],
        Cuisine: [' Continental', ',' , 'pakistani' , ',' , 'Fusion' ]

        
      },
      {
        id: '2',
        title: 'the forest,Karachi',
        image: '/the-forest.jpg',
        paragraph: ' The Forest is a unique café in Karachi that offers a forest-like ambiance with artificial trees, greenery, and a cozy atmosphere.',
        content: 'The Forest is a unique café in Karachi that offers a forest-like ambiance with artificial trees, greenery, and a cozy atmosphere. It&rsquo;s a great spot for nature lovers who want to escape the city&rsquo;s hustle and bustle.Perfect For: Casual dining, hanging out with friends, or enjoying a nature-inspired setting.',
        location: 'Karachi',
        perfectfor: [' Casual dining' ,',', 'Hanging out with friends' , ',', 'enjoying a nature-inspired setting'],
        Cuisine: [' Continental', ','   , ',' , 'Fusion' ]
    },
      {
        id: '3',
        title: 'The Monal Resturent, Islambad',
        image: '/monal-image.jpg',
        paragraph: 'Location: Pir Sohawa Road, Islamabad.Monal Restaurant is perched on a hilltop, offering breathtaking views of Islamabad and the Margalla Hills.',
        content:'Located on the Margalla Hills, Monal offers breathtaking views of Islamabad&rsquo;s lush greenery and forests. The restaurant is surrounded by nature, making it a perfect spot for a peaceful dining experience.',
        location: 'Pir Sohawa Road, Islamabad.',
        perfectfor: ['Scenic dining' , 'enjoying nature'],
        Cuisine: [' Traditional Dishes', ',' , 'Continental Cuisine' , ',' , 'Beverages' ]
    },
      {
        id: '4',
        title: 'Cafe Aylanto, Lahore and Karachi',
        image: '/Café Aylanto.jpg',
        paragraph: 'Café Aylanto is a favorite among food enthusiasts for its cozy yet sophisticated vibe. The restaurant is known for its fresh ingredients, beautifully plated dishes, and warm hospitality.',
        content:'Café Aylanto is one of the most popular and upscale restaurants in Lahore and Karachi, known for its Mediterranean and European cuisine. It offers a fine dining experience with a cozy yet sophisticated ambiance, making it a favorite among food enthusiasts.Café Aylanto is a mid-to-high-range restaurant, with prices reflecting the quality of ingredients and the fine dining experience.',
        location: 'Lahore: 12C, Main Boulevard, Gulberg III , Karachi: 26th Street, Khayaban-e-Seher, Phase 5, DHA.',
        perfectfor: ['Romantic dinners' , 'casual outings.'],
        Cuisine: [' Continental', ',' , 'pakistani' , ',' , 'Fusion' ]
    },
      {
        id: '5',
        title: 'Kolachi,Karachi',
        image: '/kolanchi.jpg',
        paragraph: 'Do Darya, Kolachi offers stunning seaside views and a relaxed ambiance. It&rsquo;s famous for its fresh seafood and traditional Pakistani dishes. ',
        content:'Kolachi is a popular seafood and traditional Pakistani restaurant located at Clifton, Karachi, right along the Arabian Sea at the waterfront of the Clifton Boat Basin. It&rsquo;s known for its scenic views, especially during sunset, and offers a variety of dishes, including grilled fish, BBQ, and traditional Pakistani cuisine.',
        Cuisine: [' sea food', ',' , 'Desi Delicacies' , ',' , 'BBQ platters' ],
        location: 'Clifton Boat Basin, Karachi',
        perfectfor: ['family outing' , ',' , 'Dining with Sea veiw']
    },
];

export default function PostDetail({ params }: { params: { id: string } }) {
 
  const post = blogPosts.find((post) => post.id === params.id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto text-2xl">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
        <p className="text-gray-700 mt-4">{post.paragraph}</p>
        <p className="text-gray-700 mt-4">{post.content}</p>

        <div className='mt-6 text-purple-800'>
        <span className='text-black'> location:</span>  {post.location}
        </div>

        <div className='mt-6 text-yellow-600'>
        <span className='text-black'> Cuisine: </span> {post.Cuisine}
        </div>

        <div className='mt-6 text-2xl text-yellow-500' >
        <span className='text-black'> Perfect for:</span> {post.perfectfor}
        </div>
        
        <Link href="/">
          <button className="bg-purple-500 text-white px-4 py-2 mt-6 rounded hover:bg-yellow-500">
            Back to Home
          </button>
        </Link>
      
       
      </div>
    </div>
   
    
    
  );
}


