"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Sparkles } from "lucide-react";

export default function VideoTestimonial() {
  const videoRef = useRef(null);
  const playerRef = useRef(null); // Ref for container to support fullscreen wrapper
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync mute state directly with video DOM property for cross-browser compatibility (e.g. Safari)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Synchronize playing state if video is paused by browser/system
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

  // Listen to fullscreen changes to update state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
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
    e.stopPropagation(); // Prevent playing/pausing click event
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
    <section className="w-full bg-bg-primary text-white py-32 px-4 relative border-t border-neutral-900/60 overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/2 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner mb-2">
          <Sparkles size={11} className="animate-pulse" />
          <span>Partner Video Review</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
          Hear it from <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Our Partners</span>
        </h2>
      </div>

      <div ref={playerRef} className="w-full max-w-2xl lg:max-w-[360px] mx-auto relative group">

        {/* Glow border backdrop */}
        <div className="absolute -inset-1 bg-linear-to-r from-orange-500 to-amber-500 rounded-3xl blur-md opacity-20 group-hover:opacity-35 transition duration-1000 pointer-events-none" />

        <div
          onClick={togglePlay}
          className="relative rounded-3xl overflow-hidden bg-neutral-950 shadow-2xl cursor-pointer aspect-video lg:aspect-9/16"
        >
          {/* Main Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            webkit-playsinline="true"
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src="/testimonial/CapictureTestimonial.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Initial Play Overlay - Shows in center if not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 z-10">
              <div className="p-5 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500 hover:border-orange-400 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <Play size={36} className="text-white fill-white ml-1" />
              </div>
            </div>
          )}

          {/* Hover Play/Pause Overlay - Shows on hover in center if playing */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-orange-500 transition-all duration-300 transform scale-95 group-hover:scale-100">
                <Pause size={36} className="text-white fill-white" />
              </div>
            </div>
          )}

          {/* PREMIUM FLOATING CONTROL BAR */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 inset-x-4 h-12 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center px-4 justify-between gap-4 transition-all duration-350 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 z-30 cursor-default"
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="p-1 text-white hover:text-orange-500 transition-colors duration-200 focus:outline-none"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={16} className="fill-white hover:fill-orange-500" /> : <Play size={16} className="fill-white hover:fill-orange-500" />}
            </button>

            {/* Current Time / Duration display */}
            <div className="text-[10px] font-mono text-neutral-400 select-none shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Scrubber timeline track */}
            <div
              onClick={handleScrub}
              className="flex-1 h-1 bg-white/15 rounded-full relative cursor-pointer group/scrub py-2 flex items-center"
            >
              <div className="w-full h-1 bg-white/10 rounded-full relative">
                <div
                  className="h-full rounded-full bg-linear-to-r from-orange-500 to-amber-500 absolute left-0 top-0"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border border-orange-500 shadow-md scale-0 group-hover/scrub:scale-100 transition-transform duration-200 pointer-events-none"
                  style={{ left: `calc(${progress}% - 5px)` }}
                />
              </div>
            </div>

            {/* Mute/Unmute Control */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 text-white hover:text-orange-500 transition-colors duration-200 focus:outline-none"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-1 text-white hover:text-orange-500 transition-colors duration-200 focus:outline-none"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}