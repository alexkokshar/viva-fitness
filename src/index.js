import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import NewsOverview from './pages/News/NewsOverview';
import News2022 from './pages/News/News2022';
import News2021 from './pages/News/News2021';
import NewsPosts from './pages/News/NewsPosts';
import Post20220404 from './pages/News/Posts/Post20220404';
import Post20220228 from './pages/News/Posts/Post20220228';
import Post20211231 from './pages/News/Posts/Post20211231';
import Post20211230 from './pages/News/Posts/Post20211230';
import Post20210315 from './pages/News/Posts/Post20210315';
import Post20210208 from './pages/News/Posts/Post20210208';
import Schedule from './pages/Schedule/Schedule';
import Cards from './pages/Cards/Cards';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="news" element={<NewsOverview />}>
          <Route index element={<News2022 />} />
          <Route path="2021" element={<News2021 />} />
        </Route>
        <Route path="posts" element={<NewsPosts />}>
          <Route index element={<Post20220404 />} />
          <Route path="2" element={<Post20220228 />} />
          <Route path="3" element={<Post20211231 />} />
          <Route path="4" element={<Post20211230 />} />
          <Route path="5" element={<Post20210315 />} />
          <Route path="6" element={<Post20210208 />} />
        </Route>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/cards" element={<Cards />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
