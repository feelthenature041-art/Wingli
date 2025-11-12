export interface Mentor {
  id: number;
  name: string;
  title: string;
  airline: string;
  country: string;
  gender: string;
  rating: number;
  reviews: number;
  years: number;
  price: number;
  languages: string[];
  skills: string[];
  img: string;
  aboutMe: string;
  userReviews: Array<{
    id: number;
    reviewer: string;
    rating: number;
    text: string;
  }>;
}

export const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Vidya Rai",
    title: "Sr. Cabin Crew Air India",
    airline: "Air India",
    country: "India",
    gender: "Female",
    rating: 4.8,
    reviews: 100,
    years: 7,
    price: 25,
    languages: ["English", "Hindi", "Nepali", "Bengali", "Tamil"],
    skills: ["Interview Prep", "Career Guidance", "Resume Review"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "With 7 years of experience at Air India, I have successfully guided over 500 candidates through cabin crew interviews. My expertise lies in interview preparation, personal grooming standards, and career guidance for those aspiring to join premium airlines. I'm passionate about helping candidates present their best selves and achieve their aviation dreams.",
    userReviews: [
      {
        id: 1,
        reviewer: "Priya M.",
        rating: 5,
        text: "Vidya's guidance was incredibly helpful! She provided detailed feedback on my interview presentation and confidence. Got selected in my first attempt!"
      },
      {
        id: 2,
        reviewer: "Arun K.",
        rating: 5,
        text: "Very professional and supportive. Clear explanations and practical tips that made a real difference in my interview performance."
      },
      {
        id: 3,
        reviewer: "Neha P.",
        rating: 4,
        text: "Great mentor with real industry experience. Helped me understand what airlines actually look for in candidates."
      }
    ]
  },
  {
    id: 2,
    name: "Bibechana Rai",
    title: "Sr. Cabin Crew Air India",
    airline: "Air India",
    country: "Nepal",
    gender: "Female",
    rating: 4.8,
    reviews: 100,
    years: 8,
    price: 30,
    languages: ["English", "Hindi", "Nepali"],
    skills: ["Mock Interview", "Flight Operations", "Safety"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "As a Senior Cabin Crew member at Air India with 8 years of experience, I specialize in mock interviews and practical flight operations training. I've trained candidates for various international airlines and understand the nuances of what each carrier expects. My sessions focus on real-world scenarios and safety protocols.",
    userReviews: [
      {
        id: 1,
        reviewer: "Rajesh S.",
        rating: 5,
        text: "Bibechana's mock interviews were incredibly realistic. She caught all my mistakes and helped me improve significantly."
      },
      {
        id: 2,
        reviewer: "Simran D.",
        rating: 5,
        text: "Amazing mentor! Her knowledge of flight operations is unparalleled. Worth every penny."
      },
      {
        id: 3,
        reviewer: "Vikram N.",
        rating: 4,
        text: "Very thorough and detailed. Provided excellent feedback on safety awareness and customer service."
      }
    ]
  },
  {
    id: 3,
    name: "Ruchita Lama",
    title: "Sr. Cabin Crew Qatar Airways",
    airline: "Qatar Airways",
    country: "Nepal",
    gender: "Female",
    rating: 4.9,
    reviews: 150,
    years: 9,
    price: 35,
    languages: ["English", "Hindi", "Nepali", "Arabic"],
    skills: ["Career Transition", "International Airlines", "Leadership"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "I am a Senior Cabin Crew member at Qatar Airways with 9 years of international aviation experience. I specialize in helping candidates transition to premium airlines and develop leadership skills. Having worked with diverse international teams, I bring a global perspective to mentor candidates aspiring for careers in international aviation.",
    userReviews: [
      {
        id: 1,
        reviewer: "Meera T.",
        rating: 5,
        text: "Ruchita helped me transition from domestic to international airlines. Her insights were invaluable!"
      },
      {
        id: 2,
        reviewer: "Arjun M.",
        rating: 5,
        text: "Best mentor I could have asked for. She prepared me thoroughly for Qatar Airways interview."
      },
      {
        id: 3,
        reviewer: "Divya K.",
        rating: 5,
        text: "Her international experience and guidance gave me the confidence to crack a tough interview."
      },
      {
        id: 4,
        reviewer: "Rohan P.",
        rating: 4,
        text: "Great mentoring sessions. Very professional and knowledgeable about international standards."
      }
    ]
  },
  {
    id: 4,
    name: "Priya Singh",
    title: "Sr. Cabin Crew Emirates",
    airline: "Emirates",
    country: "India",
    gender: "Female",
    rating: 4.7,
    reviews: 120,
    years: 10,
    price: 40,
    languages: ["English", "Hindi", "Arabic"],
    skills: ["International Experience", "Premium Service", "Training"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "With a decade of experience at Emirates, I am an expert in premium airline services and international protocols. I have trained and mentored hundreds of cabin crew candidates and currently work on training programs for Emirates. My sessions are designed to provide real insights into what makes a successful cabin crew member in the luxury aviation sector.",
    userReviews: [
      {
        id: 1,
        reviewer: "Anjali V.",
        rating: 5,
        text: "Priya's training on premium service standards was exactly what I needed. Got selected at Emirates!"
      },
      {
        id: 2,
        reviewer: "Karan J.",
        rating: 5,
        text: "Outstanding mentor with deep knowledge of Emirates standards. Highly recommended!"
      },
      {
        id: 3,
        reviewer: "Sneha L.",
        rating: 4,
        text: "Great insights into luxury service. Very professional and approachable."
      }
    ]
  },
  {
    id: 5,
    name: "Aisha Khan",
    title: "Cabin Crew IndiGo",
    airline: "IndiGo",
    country: "Pakistan",
    gender: "Female",
    rating: 4.6,
    reviews: 90,
    years: 5,
    price: 20,
    languages: ["English", "Urdu", "Hindi"],
    skills: ["Entry Level Guidance", "Service Excellence"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "As a Cabin Crew member at IndiGo, I focus on helping entry-level candidates kickstart their aviation career. My background in service excellence and customer interaction helps guide aspiring cabin crew members through the entire selection process. I love mentoring young talents and helping them achieve their dreams.",
    userReviews: [
      {
        id: 1,
        reviewer: "Tushar M.",
        rating: 5,
        text: "Perfect mentor for beginners! Aisha made the entire interview process less intimidating."
      },
      {
        id: 2,
        reviewer: "Pooja R.",
        rating: 4,
        text: "Great personality and very encouraging. Helped build my confidence for interviews."
      },
      {
        id: 3,
        reviewer: "Harsh S.",
        rating: 5,
        text: "Affordable and very effective guidance. Exactly what I needed at the start of my career."
      }
    ]
  },
  {
    id: 6,
    name: "Deepika Sharma",
    title: "Sr. Cabin Crew Singapore Airlines",
    airline: "Singapore Airlines",
    country: "India",
    gender: "Female",
    rating: 4.9,
    reviews: 200,
    years: 12,
    price: 45,
    languages: ["English", "Hindi", "Mandarin"],
    skills: ["Leadership", "Training Programs", "Safety Management"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "I am a Senior Cabin Crew member and trainer at Singapore Airlines with 12 years of experience in international aviation. I head the training programs for new cabin crew and have comprehensive knowledge of safety management and leadership skills. My mentoring sessions are focused on developing well-rounded aviation professionals.",
    userReviews: [
      {
        id: 1,
        reviewer: "Sanjana M.",
        rating: 5,
        text: "Deepika's training on leadership was exceptional. She prepared me perfectly for my management role."
      },
      {
        id: 2,
        reviewer: "Akshay T.",
        rating: 5,
        text: "Best mentor for serious career development. Her experience is unmatched."
      },
      {
        id: 3,
        reviewer: "Nitya P.",
        rating: 5,
        text: "Comprehensive guidance on safety and protocols. Truly world-class mentoring."
      },
      {
        id: 4,
        reviewer: "Varun K.",
        rating: 5,
        text: "Outstanding professional. Her safety management insights are invaluable."
      },
      {
        id: 5,
        reviewer: "Shweta R.",
        rating: 4,
        text: "Very thorough and detailed sessions. Highly recommended for serious candidates."
      }
    ]
  },
  {
    id: 7,
    name: "Neha Patel",
    title: "Cabin Crew Lufthansa",
    airline: "Lufthansa",
    country: "India",
    gender: "Female",
    rating: 4.8,
    reviews: 110,
    years: 6,
    price: 32,
    languages: ["English", "Hindi", "German"],
    skills: ["European Airlines", "Customer Relations"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "With 6 years of experience flying with Lufthansa, I specialize in European airline standards and customer relations. I understand the German work culture and customer service expectations of premium European carriers. My mentoring helps candidates understand and adapt to European aviation standards.",
    userReviews: [
      {
        id: 1,
        reviewer: "Isha D.",
        rating: 5,
        text: "Neha's knowledge of European airlines is fantastic. Helped me crack Lufthansa interview!"
      },
      {
        id: 2,
        reviewer: "Abhinav S.",
        rating: 5,
        text: "Great understanding of German work culture. Very helpful for EU airlines."
      },
      {
        id: 3,
        reviewer: "Mahira L.",
        rating: 4,
        text: "Good mentor with European experience. Provided valuable insights."
      }
    ]
  },
  {
    id: 8,
    name: "Sakshi Verma",
    title: "Sr. Cabin Crew Air India",
    airline: "Air India",
    country: "India",
    gender: "Female",
    rating: 4.7,
    reviews: 105,
    years: 8,
    price: 28,
    languages: ["English", "Hindi", "French"],
    skills: ["Interview Prep", "Grooming Standards"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "As a Senior Cabin Crew member at Air India with 8 years of experience, I specialize in interview preparation and grooming standards. I am very particular about presentation skills and personal grooming, which are crucial in the cabin crew selection process. My sessions focus on enhancing your personality and presentation.",
    userReviews: [
      {
        id: 1,
        reviewer: "Ria M.",
        rating: 5,
        text: "Sakshi's focus on grooming and presentation made all the difference. Very detailed feedback!"
      },
      {
        id: 2,
        reviewer: "Yash P.",
        rating: 4,
        text: "Great mentor for interview preparation. Helped me refine my appearance and demeanor."
      },
      {
        id: 3,
        reviewer: "Zara K.",
        rating: 5,
        text: "Excellent guidance on personality development. Highly professional approach."
      }
    ]
  },
  {
    id: 9,
    name: "Anushka Desai",
    title: "Cabin Crew Thai Airways",
    airline: "Thai Airways",
    country: "India",
    gender: "Female",
    rating: 4.8,
    reviews: 130,
    years: 7,
    price: 33,
    languages: ["English", "Hindi", "Thai"],
    skills: ["Asian Markets", "Cultural Sensitivity"],
    img: "https://cdn.builder.io/api/v1/image/assets%2F728d0307159d4db0b6c1744ba0b9e3d6%2F8f8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e?format=webp&width=400",
    aboutMe: "With 7 years at Thai Airways, I bring expertise in Asian markets and cultural sensitivity. I help candidates understand Asian hospitality standards and the unique requirements of regional carriers. My mentoring emphasizes cultural awareness and regional customer service excellence.",
    userReviews: [
      {
        id: 1,
        reviewer: "Leena V.",
        rating: 5,
        text: "Anushka's cultural insights were invaluable for Asian airline interviews. Fantastic mentor!"
      },
      {
        id: 2,
        reviewer: "Adit M.",
        rating: 5,
        text: "Great understanding of Thai and Asian markets. Very helpful for my career transition."
      },
      {
        id: 3,
        reviewer: "Prachi L.",
        rating: 4,
        text: "Good cultural awareness training. Prepared me well for Thai Airways standards."
      }
    ]
  }
];
