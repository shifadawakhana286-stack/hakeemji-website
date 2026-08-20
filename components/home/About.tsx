"use client";

import "./About.css";

import { useEffect, useRef } from "react";

import {
  Award,
  CheckCircle,
  Leaf,
  Users,
} from "lucide-react";

import Link from "next/link";

import Button from "../common/Button";
import Container from "../common/Container";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = document.getElementById("about");

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Browser autoplay block kar sakta hai
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (

    <section
      id="about"
      className="about"
    >

      {/* Background */}

      <div className="about-bg"></div>

      <div className="about-glow-left"></div>

      <div className="about-glow-right"></div>

      <Container>

        <div className="about-grid">

          {/* LEFT */}

          <div className="about-left">

            <div className="about-subtitle">

              <span></span>

              <p>

                About Al Shifa

              </p>

            </div>

            <h2>

              Legacy Of

              <span>

                Unani Excellence

              </span>

            </h2>

            <p className="about-description">

              Al Shifa Dawakhana has been serving families with
              authentic Unani healthcare for more than four decades.
              We combine traditional herbal wisdom with modern
              consultation to provide safe, natural and personalized
              treatment for every patient.

            </p>

            <div className="about-features">

              <div className="about-item">

                <CheckCircle size={20} />

                <span>

                  45+ Years Experience

                </span>

              </div>

              <div className="about-item">

                <Users size={20} />

                <span>

                  10,000+ Happy Patients

                </span>

              </div>

              <div className="about-item">

                <Leaf size={20} />

                <span>

                  100% Herbal Medicines

                </span>

              </div>

              <div className="about-item">

                <Award size={20} />

                <span>

                  Certified Hakeem

                </span>

              </div>

            </div>

            <Link
  href="/features/expert-hakeem"
  target="_blank"
>

  <Button className="about-btn">

    Learn More

  </Button>

</Link>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <div className="about-video-frame">

              <video

                ref={videoRef}
  loop
  playsInline
  controls

                className="about-video"

              >

                <source

                  src="/video.mp4"

                  type="video/mp4"

                />

              </video>

              <div className="video-overlay"></div>


            </div>

           

          </div>

        </div>

      </Container>

    </section>

  );

}