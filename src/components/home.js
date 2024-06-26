// Home.js
import React from 'react';
import { Collection } from '../components/Collection';

function Home() {
  return (
    <>
      <div className="video-container">
        <video className="responsive-video" autoPlay loop muted playsInline>
          <source src="/videos/store.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-text">
          <span className="text1">Trendy collections</span>
          <span className="text2">Building a better you</span>
          <span className="text3">Shop Now</span>
        </div>
      </div>
      <div className="collection-container">
        <Collection />
      </div>
    </>
  );
}

export default Home;
