import React from 'react';
import { Suspense } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Art from '../../public/Art'

gsap.registerPlugin(ScrollTrigger);

function Name() {
  const firstName = "HASHIM".split("");
  const lastName = "KADER".split("");
  const degree = "Software & AI/ML Engineer.".split("")
  const tl = gsap.timeline()
  useEffect(() => {
    const model = document.querySelector('.model'); 
    const screenHeight = window.innerHeight; 
    const screenWidth = window.innerWidth;
    const modelHeight = model.offsetHeight; 
    const modelWidth = model.offsetWidth; 
    const startY = screenHeight + modelHeight;
    const letters = document.querySelectorAll('.letter');
  
    // Animation timeline
    tl.to('.letter', {
      scale: 1,
      stagger: 0.07,
      opacity: 1,
      duration: 0.1,
      ease: "power2.out",
    })
      .fromTo(
        '.model',
        { y: -startY },
        { y: 0, ease: 'bounce.out', duration: 2 },
        '-=2.5'
      )

      .to('.name', {
        y: -300,
        opacity:0,
        scale: () => (screenWidth < 768 ? 0.5 : 1),
        scrollTrigger: {
          trigger: ".name",
          start: () => (screenWidth < 768 ? "top 15%" : "bottom center"),
          end: () => (screenWidth < 768 ? "bottom top" : "400px center"),
          scrub: 1,
          toggleActions: 'play reverse play reverse',
        },
      })
      .to('.surname', {
        y: -300,
        opacity:0,
        scale: () => (screenWidth < 768 ? 0.5 : 1),
        scrollTrigger: {
          trigger: ".name",
          start: () => (screenWidth < 768 ? "10px 15%" : "150px center"),
          end: () => (screenWidth < 768 ? "bottom top" : "400px center"),
          scrub: 1,
          toggleActions: 'play reverse play reverse',
        },
      })
      .to('.degree', {
        y: -300,
        opacity:0,
        scale: () => (screenWidth < 768 ? 0.5 : 1),
        scrollTrigger: {
          trigger: ".name",
          start: () => (screenWidth < 768 ? "30px 15%" : "175px center"),
          end: () => (screenWidth < 768 ? "bottom top" : "400px center"),
          scrub: 1,
          toggleActions: 'play reverse play reverse',
        },
      })
      .to('.model', {
        x:screenWidth+ modelWidth,
        scrollTrigger: {
          trigger: ".name",
          start: () => (screenWidth < 768 ? "40px 15%" : "150px center"),
          end: () => (screenWidth < 768 ? "bottom top" : "400px center"),
          scrub: 1,
          toggleActions: 'play reverse play reverse',
          markers: true,
        },
      }); 
      // .to('.name', {
      //   y: -300,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.name',
      //     start: 'bottom center',
      //     end: '400px center',
      //     scrub: 1,
      //     toggleActions: 'play reverse play reverse',
      //     markers: true,
      //   },
      // })
      // .to('.surname', {
      //   y: -300,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.name',
      //     start: '150px center',
      //     end: '400px center',
      //     scrub: 1,
      //     toggleActions: 'play reverse play reverse',
      //   },
      // })
      // .to('.degree', {
      //   y: -300,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.name',
      //     start: '175px center',
      //     end: '400px center',
      //     scrub: 1,
      //     toggleActions: 'play reverse play reverse',
      //   },
      // })
      // .to('.model', {
      //   x: screenHeight,
      //   scrollTrigger: {
      //     trigger: '.name',
      //     start: '150px center',
      //     end: '400px center',
      //     scrub: 1,
      //     toggleActions: 'play reverse play reverse',
      //   },
      // });
  
    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', () => {
        gsap.to(letter, {
          scale: 1.4,
          rotate: gsap.utils.random(-30, 30),
          color: "#D3D3D3",
          duration: 0.3,
          ease: "power2.out",
        });
      });
  
      letter.addEventListener('mouseleave', () => {
        gsap.to(letter, {
          scale: 1, 
          rotate:0,
          color: "#3C4142",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  
    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener('mouseenter', () => {});
        letter.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  
  const renderLetters = (letters) =>
    letters.map((letter, index) => (
      <div
        key={index}
        className="letter text-7xl sm:text-8xl md:text-9xl text-grey opacity-0 font-larken font-bold relative scale-150"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {letter}
      </div>
    ));

    const renderDegree = (letters) =>
      letters.map((letter, index) => (
        <div
          key={index}
          className={`letter text-2xl sm:text-4xl  md:text-6xl text-grey opacity-0 font-larken relative scale-150  ${
            letter === " " ? "w-4" : ""
          }`}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {letter === " " ? "\u00A0" : letter} 
        </div>
      ));

  return (

  <div className='flex flex-col h-full md:justify-center my-14 md:my-0 sm:mx-8 md:flex-row'>
    <div className='flex flex-col items-center md:items-start justify-center space-y-4'>
      <div className="name flex items-center justify-center md:justify-start">{renderLetters(firstName)}</div>
      <div className="surname flex items-center justify-center md:justify-start">{renderLetters(lastName)}</div>
      <div className="degree flex items-center justify-center md:justify-start">{renderDegree(degree)}</div>
    </div>
    <div className="model flex-grow flex items-center justify-center w-full">
      <Canvas camera={{ position: [0, 70, 300] }} shadows>
        <ambientLight/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Art/>
        </Suspense>
        <Environment preset='studio'/>
        {/* <ContactShadows position={[0,-2,0]} opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000"/> */}
      </Canvas>
    </div>
  </div>
  );
}

export default Name; 