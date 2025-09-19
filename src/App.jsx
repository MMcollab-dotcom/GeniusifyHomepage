import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Header - True top-left corner */}
      <header className="header-container">
        <img src="/src/assets/icon.png" alt="Icon" />
        <div>Geniusify</div>
      </header>

      {/* Main Content - Full viewport */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Background Blob Image - Properly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/src/assets/blob.png"
              alt="Abstract blob"
              className="blob-image opacity-50"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </div>

        {/* Floating Text Content - positioned at bottom */}
        <div className="floating-text-container">
          {/* Main tagline - floating and elegant */}
          <h1 className="floating-text text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed">
            <span className="block opacity-90">Scaling human potential</span>
            <span className="block opacity-70 text-sm md:text-base mt-2"> with artificial intelligence</span>
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