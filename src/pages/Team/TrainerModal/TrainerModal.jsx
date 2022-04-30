import React from 'react';
import ReactDOM from 'react-dom';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { Container } from '../../../components/UI/Container';
import { RedLink } from '../../../components/UI/RedLink';

import { personData } from '../../../data/personData';

import './TrainerModal.scss';

function TrainerModal() {
  const params = useParams();
  const id = +params.id;
  const navigate = useNavigate();

  const person = personData[id - 1];
  const prevPersonName = personData[id - 2]?.name;
  const nextPersonName = personData[id]?.name;

  const closeTrainerModal = () => {
    navigate('/team', { replace: true });
    document.documentElement.classList.remove('no-scroll');
  };

  return ReactDOM.createPortal(
    <div className="person">
      <Container>
        <div className="person__inner">
          <button className="person__close" onClick={closeTrainerModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
            </svg>
          </button>
          <div className="person__content">
            <div className="person__img">
              <img src={person.img} alt={person.name} className="person__photo" />
            </div>
            <div className="person__info">
              <div className="person__name">{person.name}</div>
              <div className="person__position">{person.position}</div>
              <div className="person__details">
                {person.details.map((detail) => (
                  <div key={detail}>{detail}</div>
                ))}
              </div>
              <a
                style={{ display: !person.insta ? 'none' : '' }}
                className="person__insta"
                href={person.insta}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="person__insta-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="person__links">
            <div className="person__link-prev" style={{ display: id === 1 ? 'none' : '' }}>
              <RedLink as={Link} to={`/team/${id - 1}`}>
                {prevPersonName}
              </RedLink>
            </div>
            <div
              className="person__link-next"
              style={{ display: id === personData.length ? 'none' : '' }}
            >
              <RedLink right as={Link} to={`/team/${id + 1}`}>
                {nextPersonName}
              </RedLink>
            </div>
          </div>
        </div>
      </Container>
    </div>,
    document.querySelector('#root')
  );
}

export default TrainerModal;
