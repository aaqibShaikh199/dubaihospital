import React from "react";
import MediaGrid from "./MediaGrid";
import ReactPlayer from "react-player";

const MediaImages = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center py-7 px-2 md:px-6">
            <div className="md:col-span-2 overflow-hidden ">
                <img
                    className="w-full h-full transform transition-all duration-700 hover:scale-110"
                    src="assets/igdata/post1.jpg"
                    alt="media"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
                <div className="overflow-hidden">
                    <ReactPlayer
                        className=""
                        url="assets/igdata/vid1.mp4"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
                <div className="overflow-hidden">
                    <ReactPlayer
                        className=""
                        url="assets/igdata/vidosra1.mp4"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
                <div className="overflow-hidden">
                    <ReactPlayer
                        className=""
                        url="assets/igdata/vidosra2.mp4"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
                <MediaGrid imgUrl="assets/igdata/post2.jpg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
                <div className="overflow-hidden">
                    <ReactPlayer
                        className=""
                        url="assets/igdata/vid2.mp4"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
                <MediaGrid imgUrl="assets/igdata/post3.jpg" />
                <MediaGrid imgUrl="assets/igdata/post4.jpg" />
                <MediaGrid imgUrl="assets/igdata/post5.jpg" />
            </div>
            <div className="md:col-span-2 overflow-hidden">
                <img
                    className="w-full h-full transform transition-all duration-700 hover:scale-110"
                    src="assets/igdata/post8.jpg"
                    alt="media"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
                <MediaGrid imgUrl="assets/igdata/post6.jpg" />
                <MediaGrid imgUrl="assets/igdata/post7.jpg" />
            </div>
        </div>
    );
};

export default MediaImages;
