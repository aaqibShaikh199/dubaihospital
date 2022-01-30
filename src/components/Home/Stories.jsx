import React from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  const stories = [
    {
      imgsrc: "/assets/home-stories/s1.jpg",
      imgalt: "story 1",
      date: "9 Dec",
      category: "Technology",
      heading: "Technology can help you become healthy",
      content:
        "Behind the word mountains, far from the countries Vokalia, there live the texts",
      route: "/stories/technology",
    },
    {
      imgsrc: "/assets/home-stories/s2.jpg",
      imgalt: "story 2",
      date: "10 Dec",
      category: "Food",
      heading: "Healthier options for those hunger-pangs",
      content:
        "Behind the word mountains, far from the countries Vokalia, there live the texts",
      route: "/stories/food",
    },
    {
      imgsrc: "/assets/home-stories/s3.jpg",
      imgalt: "story 3",
      date: "11 Dec",
      category: "HealthCare",
      heading: "Complete guide to shoulder & neck pain",
      content:
        "Behind the word mountains, far from the countries Vokalia, there live the texts",
      route: "/stories/healthcare",
    },
  ];

  return (
    <div className="bg-gray-200">
      <div className="p-2 my-6 text-center">
        <h2 className="mt-12 text-4xl font-medium">Read New Stories</h2>
        <p className="text-lg my-4 text-gray-500">
          Behind the word mountains, far from the countries Vokalia and
          Consonantia
        </p>
        <div className="flex justify-center items-center w-full">
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
      </div>
      {/* contents */}
      <div className="grid gap-4 md:gap-8 mx-4 md:mx-20 justify-center grid-cols-1 md:grid-cols-3">
        {stories.map((story) => {
          return (
            <div  className="mb-12">
              <img className="px-4" src={story.imgsrc} alt={story.imgalt} />{" "}
              {/* date and category */}
              <div className="flex text-white p-4">
                <span className="bg-gray-400 px-4">{story.date}</span>
                <div className="px-4">
                  <span className="bg-blue-600 px-4">{story.category}</span>
                </div>
              </div>
              {/* heading and content  */}
              <h3 className="px-4 text-2xl font-medium">{story.heading}</h3>
              <p className="px-4 text-lg my-4 text-gray-600">{story.content}</p>
              {/* link */}
              <Link className="text-blue-700 text-lg px-4" to={story.route}>
                Read More...
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
