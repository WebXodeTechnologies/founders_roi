"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    company: "Capicture Studios",
    metric: "3.8x ROAS Generated",
    quote:
      "Founders ROI completely restructured our performance marketing and Shopify infrastructure. Our monthly recurring revenue scaled exponentially within 90 days.",
    videoSrc: "/testimonial/CapictureTestimonial.webm",
  },
  {
    id: 2,
    name: "Jeevan",
    role: "Managing Director",
    company: "Twinkle Holidays",
    metric: "64% Reduction in CPL",
    quote:
      "Their precision targeting and automated WhatsApp qualification funnels eliminated low-quality leads entirely. Our sales team closes high-ticket clients effortlessly.",
    videoSrc: "/testimonial/IMG_2097.webm",
  },
  {
    id: 3,
    name: "Prasaana",
    role: "Managing Director",
    company: "IFS Global",
    metric: "4.2x Pipeline Growth",
    quote:
      "Their precision targeting and automated WhatsApp qualification funnels eliminated low-quality leads entirely. Our sales team closes high-ticket clients effortlessly.",
    videoSrc: "/testimonial/F-ROI_Prasanna Testimonial_.webm",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="w-full bg-[#070707] text-white py-32 px-4 sm:px-6 lg:px-8 relative border-t border-neutral-900/80 overflow-hidden">
      {/* Background ambient gold/orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-amber-500/5 via-orange-500/5 to-transparent blur-[180px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner mb-2">
          <Sparkles size={11} className="animate-pulse" />
          <span>Verified Partner Video Reviews</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
          Hear It Directly From{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Our Partners
          </span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Real founders sharing how our embedded growth architecture transformed
          their unit economics and scaled revenue predictably.
        </p>
      </div>

      {/* Grid of Testimonial Cards (3 columns) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

// Sub-component for individual vertical cards
function TestimonialCard({ item }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.log("Video playback blocked or failed:", error);
        });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setCurrentTime(current);
      if (dur > 0) {
        setDuration(dur);
        setProgress((current / dur) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleScrub = (e) => {
    e.stopPropagation();
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress((newTime / duration) * 100);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => console.log(err));
      } else {
        if (playerRef.current.requestFullscreen) {
          playerRef.current.requestFullscreen();
        } else if (playerRef.current.webkitRequestFullscreen) {
          playerRef.current.webkitRequestFullscreen();
        }
      }
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col bg-neutral-900/60 border border-neutral-800/80 p-6 rounded-3xl backdrop-blur-xl hover:border-orange-500/40 transition-all duration-300 shadow-2xl justify-between group/card">
      {/* Video Player Box on Top */}
      <div
        ref={playerRef}
        className={`relative group transition-all duration-300 w-full mb-6 ${
          isFullscreen
            ? "max-w-none h-screen bg-black flex items-center justify-center"
            : ""
        }`}
      >
        {!isFullscreen && (
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-md opacity-10 group-hover/card:opacity-30 transition duration-500 pointer-events-none" />
        )}

        <div
          onClick={togglePlay}
          className={`relative overflow-hidden bg-neutral-950 shadow-inner cursor-pointer transition-all duration-300 ${
            isFullscreen
              ? "w-full h-full rounded-none"
              : "rounded-2xl aspect-[9/16] w-full"
          }`}
        >
          <video
            ref={videoRef}
            className={`w-full h-full ${isFullscreen ? "object-contain" : "object-cover"}`}
            loop
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={item.videoSrc} type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Initial Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 z-10">
              <div className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500 hover:border-orange-400 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <Play size={28} className="text-white fill-white ml-0.5" />
              </div>
            </div>
          )}

          {/* Pause Overlay on Hover */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-orange-500 transition-all duration-300 transform scale-95 group-hover:scale-100">
                <Pause size={28} className="text-white fill-white" />
              </div>
            </div>
          )}

          {/* Floating Control Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 inset-x-3 h-10 bg-neutral-950/85 backdrop-blur-md border border-white/10 rounded-xl flex items-center px-3 justify-between gap-3 transition-all duration-350 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 z-30 cursor-default"
          >
            <button
              onClick={togglePlay}
              className="p-1 text-white hover:text-orange-500 transition-colors focus:outline-none"
            >
              {isPlaying ? (
                <Pause size={14} className="fill-white" />
              ) : (
                <Play size={14} className="fill-white" />
              )}
            </button>

            <div className="text-[9px] font-mono text-neutral-400 select-none shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            <div
              onClick={handleScrub}
              className="flex-1 h-1 bg-white/15 rounded-full relative cursor-pointer group/scrub py-2 flex items-center"
            >
              <div className="w-full h-1 bg-white/10 rounded-full relative">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 absolute left-0 top-0"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 text-white hover:text-orange-500 transition-colors focus:outline-none"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-1 text-white hover:text-orange-500 transition-colors focus:outline-none"
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Quote & Info Below */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400" />
              ))}
            </div>
            <span className="px-3 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-bold">
              {item.metric}
            </span>
          </div>

          <Quote className="w-6 h-6 text-neutral-700 mb-1" />
          <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
            &quot;{item.quote}&quot;
          </p>
        </div>

        <div className="border-t border-neutral-800/80 pt-4 mt-auto">
          <h4 className="font-bold text-white text-base">{item.name}</h4>
          <p className="text-xs text-gray-400">
            {item.role}, <span className="text-orange-400">{item.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
