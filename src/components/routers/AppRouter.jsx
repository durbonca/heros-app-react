import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../login/LoginScreen';
import { DashboarRoutes } from './DashboarRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboarRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
