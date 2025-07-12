'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function InfiniteScroller() {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const topRow = topRowRef.current;
    const topItems = topRow.children;
    const cloneTop = topItems[0].cloneNode(true);
    topRow.appendChild(cloneTop);
    const topWidth = topItems[0].offsetWidth;
    gsap.set(topRow, { x: 0 }); // Reset position
    const topTl = gsap.to(topRow, {
      x: -topWidth,
      duration: 15,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(topRow, { x: 0 }); // Reset position on repeat
      }
    });

    const bottomRow = bottomRowRef.current;
    const bottomItems = bottomRow.children;
    const cloneBottom = bottomItems[0].cloneNode(true);
    bottomRow.appendChild(cloneBottom);
    const bottomWidth = bottomItems[0].offsetWidth;
    gsap.set(bottomRow, { x: -bottomWidth });
    const bottomTl = gsap.to(bottomRow, {
      x: 0,
      duration: 15,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(bottomRow, { x: -bottomWidth }); // Reset position on repeat
      }
    });

    return () => {
      topTl.kill();
      bottomTl.kill();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .hollow-text {
          color: transparent;
          -webkit-text-stroke: 2px #FFFF;
          text-stroke: 2px #1f2937;
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          margin: 0 1rem;
          white-space: nowrap;
          font-family: 'HeadingBold', sans-serif;
          font-style: bold;
        }
        
        .scroller-row {
          display: flex;
          white-space: nowrap;
          padding: 0.5rem 0;
          position: relative;
          will-change: transform;
        }
        
        .item-group {
          display: flex;
          align-items: center;
        }
        
        .scroller-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
      `}</style>
      
      <div className="scroller-container bg-[#111] py-10">
        <h1 className=" text-lg md:text-3xl text-[#FE7743] font-bold font-heading text-center ">Customized Strategies for Every Sector</h1>
        <div ref={topRowRef} className="scroller-row">
          <div className="item-group ">
            <span className="hollow-text">DIGITAL MARKETING</span>
            <span className="hollow-text">UI/UX</span>
            <span className="hollow-text">WEB DEVELOPMENT</span>
          </div>
        </div>
        
        <div ref={bottomRowRef} className="scroller-row">
          <div className="item-group">
            <span className="hollow-text">APP DEVELOPMENT</span>
            <span className="hollow-text">SEO</span>
            <span className="hollow-text">SOCIALMEDIA MARKETING</span>
          </div>
        </div>
      </div>
    </>
  );
}