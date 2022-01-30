import React from "react";

const MediaGrid = ({ imgUrl }) => {
    return (
        <div className="overflow-hidden">
            <img
                className="w-full h-full transform transition-all duration-700 hover:scale-110"
                src={imgUrl}
                alt="media"
            />
        </div>
    );
};

export default MediaGrid;
