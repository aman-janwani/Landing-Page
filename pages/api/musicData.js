// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        "logo": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662735767/landingPage/coder_plaza_3_obxsqs-removebg-preview_ykynhs.png",
        "name": "Music Hub",
        "slogan": "Let music flow in your heart and enrich your soul.",
        "heroImage": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662736021/landingPage/Untitled_design__53_-removebg-preview_mbt9jx.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur gravida arcu ac tortor dignissim convallis. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.",
        "descriptionImage": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662736019/landingPage/Untitled_design__52_-removebg-preview_jvjzqg.png",
        "about": [
          {
            "title": "Wanna Learn Music ?",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            "color" : "#FFDD00"
          },
          {
            "title": "Lorem ipsum dolor sit",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            "color" : "#FF6D00"
          },
          {
            "title": "Lorem ipsum dolor sit amet",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            "color" : "#07C8F9"
          },
          {
            "title": "Lorem ipsum",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            "color" : "#F20089"
          }
        ],
        "teachers": [
          {
            "name": "A. R. Rahman",
            "position": "Indian film composer",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662736581/landingPage/image-removebg-preview_9_lpgz81.png",
            "description": "Allah Rakha Rahman is an Indian film composer, record producer, singer and songwriter who works predominantly in Indian cinema",
            "instagram": "https://instagram.com",
            "youtube": "https://youtube.com",
            "twitter": "https://twitter.com",
            "facebook": "https://facebook.com"
          },
          {
            "name": "Arijit Singh",
            "position": "Indian singer",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743111/landingPage/image-removebg-preview_10_g6rlk8.png",
            "description": "Arijit Singh is an Indian singer and music composer. He sings predominantly in his native Bengali and Hindi, but has also performed in various other Indian languages.",
            "instagram": "https://instagram.com",
            "youtube": "https://youtube.com",
            "twitter": "https://twitter.com",
            "facebook": "https://facebook.com"
          },
          {
            "name": "Neha Kakkar",
            "position": "Indian playback singer",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743280/landingPage/t5yyomulkiu566pp3ojy.jpg",
            "description": "Neha Kakkar Singh, is an Indian playback singer. She is the younger sister of playback singer Sonu Kakkar. She began performing at a very early age at religious events.",
            "instagram": "https://instagram.com",
            "youtube": "https://youtube.com",
            "twitter": "https://twitter.com",
            "facebook": "https://facebook.com"
          },
          {
            "name": "Badshah",
            "position": "Indian rapper",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743213/landingPage/vemnbtaqo2rcau3ylhcy.jpg",
            "description": "Aditya Prateek Singh Sisodia, popularly known by his stage name Badshah, is an Indian rapper, singer, film producer, and businessman known for his Hindi, Haryanvi, and Punjabi music.",
            "instagram": "https://instagram.com",
            "youtube": "https://youtube.com",
            "twitter": "https://twitter.com",
            "facebook": "https://facebook.com"
          },
          {
            "name": "Jubin Nautiyal",
            "position": "Indian playback singer",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743264/landingPage/o8knhrujtwmuon6wpliw.jpg",
            "description": "Jubin Nautiyal is an Indian playback singer and performer. In June 2022, he won the IIFA award for “Playback Singer ” for the song “Raataan Lambiyan.”",
            "instagram": "https://instagram.com",
            "youtube": "https://youtube.com",
            "twitter": "https://twitter.com",
            "facebook": "https://facebook.com"
          }
        ],
        "communities": [
          {
            "name": "Indian Classical Community",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743363/landingPage/4_tgl33j.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Rap Community",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743367/landingPage/5_ho0oiv.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Indian pop Community",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743372/landingPage/6_gjq31f.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Ghazal Community",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743381/landingPage/8_lbt56w.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Punjabi Music Community",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743384/landingPage/9_elo8dh.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Indian folk Community",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743376/landingPage/7_iymmjr.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            "link": "https://codercommunity.io/"
          }
        ],
        "liveFeedLink": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662566349/landingPage/Screenshot_2022-09-07_212845_ne0j3j.png",
        "testimonials": [
          {
            "name": "Mukesh Ambani",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743540/landingPage/sh52shtoypqjqpazeg8q.jpg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
            "position": "Founder, Jio"
          },
          {
            "name": "Aman Janwani",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743574/landingPage/profilepic2_2_xnti8d.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
            "position": "Student"
          },
          {
            "name": "T-Series",
            "image": "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662743616/landingPage/crh3zj9ksdbh3ajtijhy.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem.",
            "position": "Company"
          }
        ],
        "FAQs": [
          {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis. "
          },
          {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor? ",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis."
          },
          {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis."
          }
        ],
        "footer": [
          {
            "name": "About Us",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Contact Us",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Privacy Policy",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Terms & Conditions",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "Hack-A-Thon",
            "link": "https://codercommunity.io/"
          },
          {
            "name": "FAQs",
            "link": "https://codercommunity.io/"
          }
        ]
      });
  }
  