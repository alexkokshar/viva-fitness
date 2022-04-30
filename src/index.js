import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewsOverview from './pages/News/NewsOverview';
import News2022 from './pages/News/News2022';
import News2021 from './pages/News/News2021';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsOverview />}>
          <Route index element={<News2022 />} />
          <Route path="2021" element={<News2021 />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
