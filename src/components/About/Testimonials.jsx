import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./About.css";

const BrandSlider = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="p-2">
      <div className="border-2 rounded border-color" data-value="1">
        <img
          className="mx-2 h-10 w-10"
          src="/assets/about/commas.png"
          alt="commas"
        />
        <p className="px-4 text-gray-600">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics. Behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>

        <div className="flex p-2">
          <img
            className="h-10 w-10"
            src="/assets/about/profile.png"
            alt="profile"
          />
          <div className="px-4">
            <h3 className="font-medium">Chirag Khatri</h3>
            <h3 className="font-medium text-gray-600">Delhi , India</h3>
          </div>
        </div>
      </div>
    </div>,

    <div className="p-2">
      <div className="border-2 rounded border-color" data-value="2">
        <img
          className="mx-2 h-10 w-10"
          src="/assets/about/commas.png"
          alt="commas"
        />
        <p className="px-4 text-gray-600">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics. Behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>

        <div className="flex p-2">
          <img
            className="h-10 w-10"
            src="/assets/about/profile.png"
            alt="profile"
          />
          <div className="px-4">
            <h3 className="font-medium">Abhishek Jadav</h3>
            <h3 className="font-medium text-gray-600">Mumbai , India</h3>
          </div>
        </div>
      </div>
    </div>,

    <div className="p-2">
      <div className="border-2 rounded border-color" data-value="3">
        <img
          className="mx-2 h-10 w-10"
          src="/assets/about/commas.png"
          alt="commas"
        />
        <p className="px-4 text-gray-600">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics. Behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>

        <div className="flex p-2">
          <img
            className="h-10 w-10"
            src="/assets/about/profile.png"
            alt="profile"
          />
          <div className="px-4">
            <h3 className="font-medium">Manish</h3>
            <h3 className="font-medium text-gray-600">Lucknow , India</h3>
          </div>
        </div>
      </div>
    </div>,

    <div className="p-2">
      <div className="border-2 rounded border-color" data-value="4">
        <img
          className="mx-2 h-10 w-10"
          src="/assets/about/commas.png"
          alt="commas"
        />
        <p className="px-4 text-gray-600">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics. Behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>

        <div className="flex p-2">
          <img
            className="h-10 w-10"
            src="/assets/about/profile.png"
            alt="profile"
          />
          <div className="px-4">
            <h3 className="font-medium">Tony Stark</h3>
            <h3 className="font-medium text-gray-600">Wasington, USA</h3>
          </div>
        </div>
      </div>
    </div>,
      <div className="p-2">
      <div className="border-2 rounded border-color" data-value="5">
        <img
          className="mx-2 h-10 w-10"
          src="/assets/about/commas.png"
          alt="commas"
        />
        <p className="px-4 text-gray-600">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics. Behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>

        <div className="flex p-2">
        <img
          className="h-10 w-10"
          src="/assets/about/profile.png"
          alt="profile"
        />
        <div className="px-4">
          <h3 className="font-medium">John Doe</h3>
          <h3 className="font-medium text-gray-600">Paris, France</h3>
        </div>
      </div>
      </div>
    </div>
  ];

  return (
    <div className="bg-gray-200 w-full my-6 px-5">
      <div className="p-2 my-6 text-center">
        <h2 className="mt-12 text-4xl font-medium">Happy Patients</h2>
        <p className="text-lg my-4 text-gray-500">
          There live the blind texts separated they right at the coast of the
          Semantics.
        </p>
        <div className="flex justify-center items-center w-full">
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        infinite={true}
        animationDuration={900}
        paddingLeft={6}
        paddingRight={6}
        items={items}
        responsive={responsive}
        disableDotsControls={true}
        disableButtonsControls={false}
        controlsStrategy="default"
      />
    </div>
  );
};

export default BrandSlider;
