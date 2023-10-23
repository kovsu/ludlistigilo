import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"
import Platforms from "./components/MusicPlatform"

function App() {

  return (
    <div className="font-mono" p="x-12">
      <Header />
      <Input />
      <Platforms />
      <Footer />
    </div>
  )
}

export default App
