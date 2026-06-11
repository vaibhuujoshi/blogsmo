import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/Signup'
import LoginPage from './pages/Login'
import BlogPostPage from './pages/Blog'
import HomeFeedPage from './pages/Feed'
import Navbar from './components/Navbar'
import WritePage from './pages/Write'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>  
          <Route path="/" element={<Navigate to="/feed" replace />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path='/feed' element={<HomeFeedPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;