"use client";
import React, { useEffect, useState } from "react";
import Footer from "./pages/Footer/footer";
import CountdownTimer from "./components/CountdownTimer";

const Home = () => {
  const targetDate = new Date("2024-1-30");
  const [isScrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    setScrollLocked(true);

    return () => {
      setScrollLocked(false);
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className={`relative h-screen ${
          isScrollLocked ? "overflow-hidden" : ""
        }`}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={require("./images/video.mp4")} autoPlay muted loop />
        </video>
        {/* Your content on top of the video */}
        <div className="relative z-10">
          <div className="flex flex-col text-white justify-center items-center h-60 mt-32 px-6">
            <div
              className="text-7xl"
              style={{ color: "orange", fontSize: "4rem", fontWeight: "bold" }}
            >
              ICON BEGINS IN
            </div>

            <div className="mt-24 px-9 ">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
