import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../../components/UI/Container';

function NewsPosts() {
  return (
    <section>
      <Container>
        <Outlet />
      </Container>
    </section>
  );
}

export default NewsPosts;
