import "./App.css"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProfileSection from "./components/ProfileSection"

function App() {
  return (
    <main className="">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="container">
        {/* Left Section */}
        <AboutSection />

        {/* Right Section */}
        <ProfileSection />
      </div>
    </main>
  )
}

export default App

