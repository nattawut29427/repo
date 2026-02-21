"use client"; // ต้องใส่เพราะเราใช้ Hooks (useEffect, useRef)

import { useEffect, useRef } from 'react';
import styles from "./vedio.module.scss";

export default function Vedio() {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const basePath = '/repo';

    useEffect(() => {
        
        audioRef.current = new  Audio(`${basePath}/music.mp3`); 
        audioRef.current.loop = true;
        audioRef.current.volume = 0.2; 

        const observer = new IntersectionObserver(
            ([entry]) => {
                const video = videoRef.current;
                const audio = audioRef.current;

                if (!video || !audio) return;

                if (entry.isIntersecting) {
                  
                    video.play();
                    audio.play().catch(error => {
                        console.log("Audio autoplay was prevented. Interaction required.");
                    });
                } else {
                    
                    video.pause();
                    audio.pause();
                }
            },
            {
                threshold: 0.5
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.container__left}>
                    <video
                        ref={videoRef}
                        src={`${basePath}/videoplayback.mp4`}
                        loop
                        muted
                        playsInline
                        // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

               
            </div>
        </section>
    );
}
