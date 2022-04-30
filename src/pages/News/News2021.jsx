import React from 'react';
import styled from 'styled-components';

import NewsMainCard from '../../components/news/NewsMainCard';
import NewsPost from '../../components/news/NewsPost';
import { news2021 } from '../../data/newsData';

const NewsYear = styled.div`
  margin-bottom: 40px;
`;

const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -20px;
  @media (max-width: 614px) {
    justify-content: center;
  }
`;

function News2021() {
  return (
    <NewsYear>
      <NewsMainCard to="/posts" {...news2021.mainPost} />
      <Posts>
        {news2021.posts.map((post) => (
          <NewsPost key={post.id} {...post} />
        ))}
      </Posts>
    </NewsYear>
  );
}

export default News2021;
