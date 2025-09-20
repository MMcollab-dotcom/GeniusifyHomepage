import './App.css';
import iconImage from './assets/icon.png';
import blobImage from './assets/blob.png';
import { useState } from 'react';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Header - True top-left corner */}
      <header className="header-container">
        <img src={iconImage} alt="Icon" />
        <div>Geniusify</div>
      </header>

      {/* Main Content - Full viewport */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Background Blob Image - Properly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={blobImage}
              alt="Abstract blob"
              className={`blob-image ${imageLoaded ? 'opacity-50' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.8s ease-in-out'
              }}
            />
          </div>
        </div>

        {/* Floating Text Content - positioned at bottom */}
        <div className="floating-text-container">
          {/* Main tagline - floating and elegant */}
          <h1 className="floating-text text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed">
            <span className="block opacity-90">Scaling human potential with Geniusify</span>
          </h1>
        </div>

        {/* Product Launch - positioned at bottom of viewport */}
        <div className="product-launch-container">
          <div className="floating-card glass rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Product Launching Soon</h2>
            
            {/* Waitlist Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="elegant-input"
              />
              <button
                type="submit"
                className="elegant-button"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;