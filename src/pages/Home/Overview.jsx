import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../components/UI/Container';
import { RedLink } from '../../components/UI/RedLink';
import './Overview.scss';

function Overview() {
  const [numberOfActiveItem, setNumberOfActiveItem] = useState(1);
  const refButtons = useRef(null);
  const refSlides = useRef(null);

  useEffect(() => {
    const arrBtns = refButtons.current.children;
    const arrSlides = refSlides.current.children;
    for (let slide of arrSlides) {
      slide.className = 'overview__item';
    }
    arrSlides[numberOfActiveItem - 1].classList.add('overview__item-active');
    for (let button of arrBtns) {
      button.className = 'overview__btn';
      if (numberOfActiveItem === 1) {
        arrBtns[numberOfActiveItem - 1].classList.add('overview__btn-active');
        arrBtns[arrBtns.length - 1].classList.add('overview__btn-prev');
        arrBtns[numberOfActiveItem].classList.add('overview__btn-next');
      } else if (numberOfActiveItem === arrBtns.length) {
        arrBtns[numberOfActiveItem - 1].classList.add('overview__btn-active');
        arrBtns[numberOfActiveItem - 2].classList.add('overview__btn-prev');
        arrBtns[0].classList.add('overview__btn-next');
      } else {
        arrBtns[numberOfActiveItem - 1].classList.add('overview__btn-active');
        arrBtns[numberOfActiveItem - 2].classList.add('overview__btn-prev');
        arrBtns[numberOfActiveItem].classList.add('overview__btn-next');
      }
    }
  }, [numberOfActiveItem]);

  return (
    <section className="overview">
      <ul className="overview__list" ref={refSlides}>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Тренажерный зал</h3>
              <div className="overview__description">
                850 квадратных метров первоклассного железа
              </div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Кардиозона</h3>
              <div className="overview__description">Движение – жизнь</div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Functional zone</h3>
              <div className="overview__description">Новая ступень развития</div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Зона тяжёлой атлетики</h3>
              <div className="overview__description">Старая школа</div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Залы групповых программ</h3>
              <div className="overview__description">
                Профессиональные инструкторы и уникальная атмосфера
              </div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Зал единоборств</h3>
              <div className="overview__description">“Порхай как бабочка, жаль как пчела”</div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Бассейн 25 метров</h3>
              <div className="overview__description">
                “Лучше бассейна может быть только бассейн”
              </div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
        <li className="overview__item">
          <Container>
            <div className="overview__details">
              <div className="overview__text">Наши услуги</div>
              <h3 className="overview__title">Детский бассейн</h3>
              <div className="overview__description">
                Безопасность, индивидуальный подход и внимание
              </div>
              <div className="overview__link">
                <RedLink as={Link} to="/services">
                  Подробнее
                </RedLink>
              </div>
            </div>
          </Container>
        </li>
      </ul>
      <div className="overview__actions">
        <div className="overview__line"></div>
        <div className="overview__buttons" ref={refButtons}>
          <button
            className="overview__btn overview__btn-active"
            onClick={() => setNumberOfActiveItem(1)}
          >
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M18.23.446s-.884 2.575-.369 5.146c.531 2.645 2.139 3.895 2.139 3.895v14.513h-16v-14.513s1.608-1.25 2.139-3.895c.515-2.571-.369-5.146-.369-5.146l2.23-.446.019.023c1.599 1.976 3.466 2.044 3.981 2.044 1.5 0 2.935-.752 4-2.067l2.23.446zm-9.865 1.313c.511 2.241 1.29 4.241 3.635 4.241 2.335 0 3.121-1.997 3.63-4.222-.813.637-2.03 1.286-3.629 1.283-1.317-.003-2.568-.457-3.636-1.302z" />
            </svg>
          </button>
          <button
            className="overview__btn overview__btn-next"
            onClick={() => setNumberOfActiveItem(2)}
          >
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M19 24h-14v-16l-2 1.084-3-3.612 6-5.472h12l6 5.505-3 3.647-2-1.152v16zm-11-23h8c-.365 1.846-1.792 3.5-4 3.5s-3.635-1.708-4-3.5z" />
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(3)}>
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M18 24h-12v-12l-3 10.357-3-.773 4-17.584 3.782-2.002c-.417 1.998.72 4.432 1.516 6.158.804-.703 1.301-1.157 2.7-2.252 1.394 1.093 1.822 1.485 2.7 2.251.83-1.796 1.935-4.186 1.518-6.158l3.784 2.003 4 17.584-3 .731-2.882-10.315-.118 12zm-6-3c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-3c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-3.001c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-2.998c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-3.001c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-2.425-2.15c-2.099-4.546-1.049-6.858 2.422-6.846 2.888 0 4.823 1.646 2.422 6.846-.877-.766-2.162-1.76-2.422-1.959-.029-.023-2.389 1.93-2.422 1.959zm2.438-2.226c1.396-.419 3.992-3.633-.013-3.624-4.009.009-1.39 3.228-.003 3.629l.016-.005z" />
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(4)}>
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M6.496 22.004h10.942v2h-10.942v-2zm-3.744-.35l-2.435-.571-.317 1.35 2.435.571.317-1.35zm18.496 0l2.435-.571.317 1.35-2.435.571-.317-1.35zm-3.253-.432h-12.009v-9.218l-2.664 9-3.019-.721 3.681-16.279 4.003-1.727v-1.242s1.414-1.022 4.004-1.031c2.589-.009 4.003 1.001 4.003 1.001v1.27l4.003 1.729 3.694 16.27-3.003.73-2.693-9v9.218zm-6.004-20.217c1.657 0 3.002.338 3.002.755 0 .416-1.345.754-3.002.754-1.657 0-3.003-.338-3.003-.754 0-.417 1.346-.755 3.003-.755z" />
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(5)}>
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11.6 24h-5.619l.019-10-2.983 8.721-3.017-.721 3.981-16 4-1.727c-.888-.944-1.355-2.337 0-3.242 0 0 1.432-1.018 4.019-1.027 2.587-.01 3.981.997 3.981.997 1.326.843.896 2.468 0 3.27l4 1.729 4.019 16-3 .73-3-8.73-.019 10h-5.581v-21.496c1.467-.05 2.6-.366 2.6-.748 0-.417-1.344-.755-3-.755s-3 .338-3 .755c0 .382 1.133.698 2.6.748v21.496zm3.545-7.021l-.645.469 2.355 3.234.645-.469-2.355-3.234zm-6.29 0l.645.469-2.355 3.234-.645-.469 2.355-3.234z" />
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(6)}>
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M15.968 11l6.032 11.463s-2.112.804-5.554 1.249l-1.446-3.712.432 3.828c-1.062.105-2.228.172-3.479.172-1.219 0-2.352-.063-3.385-.164l.432-3.836-1.45 3.721c-3.458-.443-5.55-1.258-5.55-1.258l6.128-11.463h7.84zm-7.823-1l-1.162-4.09-2.44.794-1.543-2.429 5-4.275s2.039 1 4 1c1.961 0 3.978-1 3.978-1l5.022 4.275-1.543 2.429-2.44-.794-1.076 4.09h-7.796zm.362-8.709s1.497.709 3.493.709c1.996 0 3.546-.707 3.546-.707s-1.028 2.707-3.546 2.707-3.493-2.709-3.493-2.709z" />
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(7)}>
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M10 24h-4v-17.61c.604-.093 1.22-.315 1.779-.753.804-.628 1.352-1.627 1.564-2.837h5.321c.212 1.21.76 2.209 1.564 2.837.557.436 1.17.658 1.772.752v17.611h-4l-1.968-15-2.032 15zm-4-21.2h2.529c-.192.951-.626 1.724-1.243 2.207-.364.286-.794.476-1.286.569v-2.776zm9.479 0h2.521v2.775c-.489-.094-.916-.283-1.279-.568-.617-.483-1.05-1.256-1.242-2.207zm2.521-.8h-12v-2h12v2zm-6-1.5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z" />
            </svg>
          </button>
          <button
            className="overview__btn overview__btn-prev"
            onClick={() => setNumberOfActiveItem(8)}
          >
            <svg
              className="overview__btn-icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M2 5h8.845l-1.961 3.397c-.066.115-.084.251-.05.38.034.128.118.237.233.303.115.066.251.084.379.05s.238-.118.304-.233l2.25-3.897 2.25 3.897c.066.115.176.199.304.233s.264.016.379-.05c.115-.066.199-.175.233-.303.034-.129.016-.265-.05-.38l-1.961-3.397h8.845l2 17-9.972 1-1.969-6.385-2 6.385-10.059-1 2-17zm20-1h-20v-3h20v3z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overview;
