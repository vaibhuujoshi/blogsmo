import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/Signup'
import LoginPage from './pages/Login'
import BlogPostPage from './pages/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<BlogPostPage post={mockBackendData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const mockBackendData = {
  title: "Taxing Laughter: The Joke Tax Chronicles",
  date: "August 24, 2023",
  content: [
    "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
    "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.",
    "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop."
  ],
  author: {
    name: "Jokester",
    bio: "Master of mirth, purveyor of puns, and the funniest person in the kingdom."
  }
};

export default App;