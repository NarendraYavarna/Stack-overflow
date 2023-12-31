import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Auth from './Page/Auth/Auth'
import Home from './Page/Home/Home'
import Questions from './Page/Questions/Questions'
import AskQuestion from './Page/AskQuestion/AskQuestion'
import DisplayQuestion from './Page/Questions/DisplayQuestion'
import Tags from './Page/Tags/Tags'
import Users from './Page/Users/Users'
import UserProfile from './Page/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/AskQuestion' element={<AskQuestion/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
    </Routes>
  )
}

export default AllRoutes
