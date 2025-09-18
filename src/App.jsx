import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Header - True top-left corner */}
      <header className="header-container">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/icon.png" alt="Icon" className="w-5 h-5" />
          <div className="text-lg font-semibold text-gray-700">Geniusify</div>
        </div>
      </header>

      {/* Main Content - Full viewport */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Background Blob Image - Properly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/src/assets/blob.png"
              alt="Abstract blob"
              className="max-w-lg max-h-lg w-auto h-auto object-contain opacity-20"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </div>

        {/* Floating Text Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Main tagline - floating and elegant */}
          <h1 className="floating-text text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8">
            <span className="block opacity-90">Scaling human potential</span>
            <span className="block opacity-70 text-sm md:text-base mt-2">with artificial intelligence</span>
          </h1>
        </div>

        {/* Product Launch - positioned at bottom of viewport */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md z-20">
          <div className="floating-card glass rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Product Launching Soon</h2>
            <p className="text-sm text-gray-600 mb-4">Join the waitlist to be the first to know when we launch.</p>
            
            {/* Waitlist Form */}
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white/90"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
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