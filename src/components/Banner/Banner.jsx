import React, { useCallback, useEffect, useState } from "react";
import bannerImgs from "../../assets/imgExporter";

const Banner = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId,setIntervalId]=useState(null)

  const handleSwipe = useCallback((direction) => {
    clearInterval(intervalId)
    if (direction === "left") {
      
      
      setActiveIndex((activeIndex) =>
        activeIndex === 0 ? bannerImgs.length - 1 : (activeIndex -= 1)
      );
    } else if (direction === "right") {
      setActiveIndex((activeIndex) => {
        if (activeIndex === bannerImgs.length - 1) {
          
          return 0;
        } else {
          
          return activeIndex + 1;
        }
      });
    }
  },[intervalId])
  useEffect(() => {
    const id = setInterval(() => {
      handleSwipe("right");
    },3000);
    setIntervalId(id)
    return () => clearInterval(id);
  }, []);

  return (
    <div className=" relative w-full mt-[100px] h-fit  ">
      <button
        onClick={() => handleSwipe("right")}
        className=" text-5xl hidden md:block md:text-8xl absolute top-[20%] md:top-1/3 text-green-300 font-bold right-0 "
      >
        {">"}
      </button>
      <button
        onClick={() => handleSwipe("left")}
        className=" text-5xl hidden md:block md:text-8xl absolute top-[20%] md:top-1/3 text-green-300 font-bold left-0 "
      >
        {"<"}
      </button>
      <div
        style={{ translate: "-50%" }}
        className="flex left-[50%] gap-6 z-10 absolute bottom-8 md:bottom-28 lg:bottom-[110px]"
      >
        {bannerImgs.map((_, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            className={`px-[6px] py-[6px] md:px-[10px] md:py-[10px]
         ${
           index === activeIndex ? "bg-orange-400 scale-110" : "bg-orange-200"
         }  rounded-full `}
            key={index}
          ></button>
        ))}
      </div>
      <div className="flex w-full h-auto ">
        <img
        
          src={bannerImgs[activeIndex]}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
