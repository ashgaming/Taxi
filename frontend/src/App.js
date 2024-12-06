import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import UserProtectedWrapper from './wrappers/UserProtectedWrapper';
import CaptainAuthWrapper from './wrappers/CaptainAuthWrapper';


const Start = React.lazy(() => import('./pages/Start'))
const Home = React.lazy(() => import('./pages/Home'))
const CaptianHome = React.lazy(() => import('./pages/CaptianHome'));
const UserLogin = React.lazy(() => import('./pages/UserLogin'))
const CaptainLogin = React.lazy(() => import('./pages/CaptainLogin'))
const CaptainRegister = React.lazy(() => import('./pages/CaptainRegister'))
const UserRegister = React.lazy(() => import('./pages/UserRegister'))
const UserLogout = React.lazy(() => import('./pages/UserLogout'));

function App() {

  const routes = [
    {
      path: '/',
      component: Start,
      option: {}
    },
    {
      path: '/home',
      component: ()=>(
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      ),
      option: {}
    },
    {
      path: '/captian-home',
      component: ()=>(
        <CaptainAuthWrapper>
          <CaptianHome/>
        </CaptainAuthWrapper>
      ),
      option: {}
    },
    {
      path: '/user-logout',
      component: ()=>(
        <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>
      ),
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
    <div >
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {
              routes.map((r) => (
                <Route key={r.path} path={r.path} Component={r.component} option={r.option} />
              ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>

  );
}

export default App;
