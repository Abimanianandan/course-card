import React from "react";
import All from "./components/All";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagenotFound from "../PagenotFound";


const App = () => {
  let data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA-768x480.webp",
      head: "Full Stack developement",
      title: "Backend Developer Salary in India & USA [2024]",
      content:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
      date: "February 15, 2024 No Comments",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide-768x480.webp",
      head: "Full Stack developement",
      title: "Feature image - What Does a Top Backend Developer?",
      content:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
      date: "15 February 2024  No Comments",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect-768x480.webp",
      head: "Full Stack developement",
      title: "Top Full Stack Development Trends for 2024: What to Expect",
      content:
        "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. ",
      date: "9 February 2024  No Comments",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      head: "Data Science",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      content:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "November 28, 2023 No Comments",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      head: "Data Science",
      title: "10 Best Data Science Frameworks in 2024",
      content:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      date: "August 5, 2023 No Comments",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/13311397_v617batch2-kul-05-technology-1-1536x1024.jpg",
      head: "Data Science",
      title: "A Complete Data Scientist Roadmap for Beginners",
      content:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      date: "July 28, 2023 No Comments",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      head: "Cyber Security",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      content:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "4 December 2023  No Comments",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      head: "Cyber Security",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      content:
        "Look around today, you will witness that we are more reliant on technology and devices",
      date: "20 December 2022  1 Comment",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      head: "Cyber Security",
      title: "Top 7 Cyber Security Attacks in Real Life",
      content:
        "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
      date: "10 June 2022  1 Comment",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career-768x480.webp",
      head: "Career",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      content:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "19 January 2024  No Comments",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students-768x480.webp",
      head: "Career",
      title: "Top 5 IT Jobs for Economics Students",
      content:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date: "4 December 2023  No Comments",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      head: "Career",
      title: "Top 5 Product-Based Companies That Don’t Require Coding",
      content:
        "Every one of us wants to work in top product-based companies, Right? But, Not everyone",
      date: "24 November 2023  No Comments",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/FullStack" element={<FullStack data={data} />} />
          <Route path="/DataScience" element={<DataScience data={data} />} />
          <Route path="/CyberSecurity" element={<CyberSecurity data={data} />} />
          <Route path="/Career" element={<Career data={data} />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
