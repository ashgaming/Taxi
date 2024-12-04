import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';


const Home = React.lazy(() => import('../src/pages/Home'))
const CaptainLogin = React.lazy(() => import('../src/pages/CaptainLogin'))
const CaptainRegister = React.lazy(() => import('../src/pages/CaptainRegister'))
const UserLogin = React.lazy(() => import('../src/pages/UserLogin'))
const UserRegister = React.lazy(() => import('../src/pages/UserRegister'))

function App() {

  const routes = [
    {
      path: '/',
      component: Home,
      option: {}
    },
    {
      path: '/user/register',
      component: UserRegister,
      option: {}
    },
    {
      path: '/user/login',
      component: UserLogin,
      option: {}
    },
    {
      path: '/captain/register',
      component: CaptainRegister,
      option: {}
    },
    {
      path: '/captain/login',
      component: CaptainLogin,
      option: {}
    },

  ]


  return (
    <div>

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {
              routes.map((r) => (
                <Route key={r.path} path={r.path} element={<r.component />} option={r.option} />
              ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>

  );
}

export default App;
