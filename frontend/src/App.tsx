import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/Signup'
import LoginPage from './pages/Login'
import BlogPostPage from './pages/Blog'
import HomeFeedPage from './pages/Feed'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>  
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path='feed' element={<HomeFeedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;