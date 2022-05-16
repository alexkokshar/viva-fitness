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
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 40.000000 44.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,44.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M125 373 c-3 -16 -14 -36 -22 -45 -13 -14 -13 -20 -3 -33 10 -12 10
-18 0 -30 -6 -8 -10 -19 -8 -26 2 -6 10 1 18 16 11 20 11 30 3 45 -16 24 -7
30 40 30 36 0 39 -2 33 -24 -7 -30 4 -116 15 -116 5 0 9 13 9 28 0 15 5 33 12
40 10 10 8 20 -6 47 -11 19 -23 35 -27 35 -4 0 -10 14 -14 30 -9 39 -40 41
-50 3z m35 -3 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10
-4 10 -10z m3 -27 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m50
-85 c-2 -5 -8 -8 -14 -8 -11 0 -12 33 -2 44 8 8 23 -25 16 -36z"
                />
                <path
                  d="M90 195 c-7 -8 -18 -15 -25 -15 -16 0 -25 -23 -25 -66 0 -26 5 -37
22 -44 13 -6 30 -15 40 -22 20 -15 48 4 48 33 0 16 8 19 50 19 42 0 50 -3 50
-19 0 -29 28 -48 48 -33 10 7 27 16 40 22 18 8 22 17 22 55 0 38 -4 47 -22 55
-13 6 -30 15 -40 22 -19 13 -48 -4 -48 -28 0 -10 -14 -14 -48 -14 -39 0 -49 4
-57 22 -12 28 -38 34 -55 13z m38 -76 c-2 -36 -7 -63 -13 -62 -11 3 -19 107
-10 131 12 33 26 -7 23 -69z m170 0 c-2 -36 -7 -63 -13 -62 -11 3 -19 107 -10
131 12 33 26 -7 23 -69z m-218 5 c0 -32 -4 -44 -12 -42 -14 5 -23 51 -14 74
11 30 26 12 26 -32z m265 1 c0 -22 -5 -40 -12 -43 -9 -2 -13 10 -13 43 0 33 4
45 13 43 7 -3 12 -21 12 -43z m-95 5 c0 -5 -22 -10 -50 -10 -27 0 -50 5 -50
10 0 6 23 10 50 10 28 0 50 -4 50 -10z"
                />
              </g>
            </svg>
          </button>
          <button
            className="overview__btn overview__btn-next"
            onClick={() => setNumberOfActiveItem(2)}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 44.000000 39.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,39.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M386 345 c-23 -30 -33 -35 -67 -35 -21 0 -39 -4 -39 -10 0 -5 6 -10
13 -10 8 0 7 -4 -3 -10 -13 -9 -13 -11 0 -20 13 -9 13 -11 0 -20 -10 -6 -11
-10 -2 -10 18 0 15 -60 -4 -81 -15 -17 -19 -16 -82 7 -37 14 -70 29 -74 32 -3
4 -9 28 -13 55 -6 39 -5 47 9 47 9 0 16 5 16 10 0 6 -17 10 -39 10 -22 0 -44
6 -51 15 -7 8 -17 15 -23 15 -6 0 0 -11 13 -26 19 -19 21 -27 11 -33 -10 -7
-10 -9 2 -14 8 -3 18 -22 21 -42 6 -31 3 -40 -18 -60 -35 -32 -35 -86 -1 -120
22 -23 31 -25 128 -25 122 0 142 9 135 61 -4 22 -1 40 9 50 18 22 30 89 14 89
-6 0 -11 -15 -11 -33 0 -34 -23 -77 -35 -65 -4 4 0 17 9 30 10 14 17 46 17 83
1 33 4 48 6 33 6 -37 23 -36 23 2 0 17 4 30 9 30 12 0 66 69 59 76 -3 2 -17
-11 -32 -31z m-281 -117 c4 -23 3 -38 -3 -38 -9 0 -22 55 -22 90 1 25 17 -9
25 -52z m35 -73 c0 -10 -10 -15 -27 -16 -16 0 -22 -3 -15 -6 6 -2 12 -18 12
-34 0 -17 6 -32 15 -35 8 -4 15 -13 15 -21 0 -20 -55 -10 -82 14 -24 21 -23
68 2 93 24 24 80 27 80 5z m100 -77 l0 -48 -40 0 c-29 0 -40 4 -40 15 0 9 10
15 28 16 15 1 20 3 11 6 -11 3 -15 12 -11 28 3 17 -1 27 -12 31 -9 3 -16 12
-16 19 0 11 8 10 40 -2 39 -16 40 -17 40 -65z m-65 17 c0 -22 -31 -33 -47 -17
-17 17 -1 44 24 40 15 -2 23 -10 23 -23z m116 15 c25 -14 25 -56 0 -70 -30
-15 -31 -14 -31 35 0 49 1 50 31 35z"
                />
              </g>
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(3)}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 44.000000 40.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M90 358 c0 -21 0 -21 -15 -2 -13 18 -14 18 -15 1 0 -13 -5 -17 -19
-12 -21 6 -34 -15 -25 -40 7 -17 24 -20 24 -5 0 18 20 11 20 -7 1 -16 2 -16
15 1 15 19 15 19 15 -2 0 -29 17 -28 23 1 2 12 5 -40 6 -115 0 -86 -3 -138 -9
-138 -5 0 -10 -4 -10 -10 0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -4 10 -10
10 -6 0 -10 52 -10 135 l0 135 70 0 70 0 0 -135 c0 -83 -4 -135 -10 -135 -5 0
-10 -4 -10 -10 0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -4 10 -10 10 -6 0 -10
52 -9 138 0 109 3 132 11 112 11 -25 11 -25 15 -2 5 25 23 31 23 7 0 -8 5 -15
10 -15 6 0 10 8 10 18 0 14 2 15 10 2 9 -13 11 -13 20 0 5 8 10 20 10 27 0 18
-21 27 -30 13 -5 -8 -10 -4 -15 12 -6 19 -8 20 -12 6 -6 -25 -21 -22 -26 5
l-4 22 -8 -22 c-4 -12 -13 -19 -20 -17 -7 3 -16 1 -20 -5 -3 -6 -33 -11 -66
-11 -46 0 -61 4 -66 16 -6 15 -8 15 -20 -2 -12 -16 -13 -16 -13 9 0 15 -4 27
-10 27 -5 0 -10 -10 -10 -22z"
                />
              </g>
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(4)}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 44.000000 40.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M90 358 c0 -21 0 -21 -15 -2 -13 18 -14 18 -15 1 0 -13 -5 -17 -19
-12 -21 6 -34 -15 -25 -40 7 -17 24 -20 24 -5 0 18 20 11 20 -7 1 -16 2 -16
15 1 15 19 15 19 15 -2 0 -29 17 -28 23 1 2 12 5 -40 6 -115 0 -86 -3 -138 -9
-138 -5 0 -10 -4 -10 -10 0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -4 10 -10
10 -6 0 -10 52 -10 135 l0 135 70 0 70 0 0 -135 c0 -83 -4 -135 -10 -135 -5 0
-10 -4 -10 -10 0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -4 10 -10 10 -6 0 -10
52 -9 138 0 109 3 132 11 112 11 -25 11 -25 15 -2 5 25 23 31 23 7 0 -8 5 -15
10 -15 6 0 10 8 10 18 0 14 2 15 10 2 9 -13 11 -13 20 0 5 8 10 20 10 27 0 18
-21 27 -30 13 -5 -8 -10 -4 -15 12 -6 19 -8 20 -12 6 -6 -25 -21 -22 -26 5
l-4 22 -8 -22 c-4 -12 -13 -19 -20 -17 -7 3 -16 1 -20 -5 -3 -6 -33 -11 -66
-11 -46 0 -61 4 -66 16 -6 15 -8 15 -20 -2 -12 -16 -13 -16 -13 9 0 15 -4 27
-10 27 -5 0 -10 -10 -10 -22z"
                />
              </g>
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(5)}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 41.000000 40.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M290 370 c0 -5 -6 -10 -14 -10 -8 0 -21 -7 -30 -15 -12 -12 -20 -13
-40 -4 -20 9 -29 9 -41 -1 -12 -10 -18 -10 -31 1 -12 10 -20 10 -35 1 -15 -9
-23 -9 -38 0 -37 23 -68 -25 -35 -53 12 -10 20 -10 35 -1 15 9 23 9 38 0 15
-9 23 -9 35 1 11 9 20 10 35 1 15 -8 26 -7 40 2 16 10 23 9 39 -5 10 -9 24
-17 30 -17 7 0 12 -4 12 -10 0 -5 23 -10 50 -10 47 0 50 2 50 25 0 23 -3 25
-49 25 -28 0 -51 -5 -53 -11 -6 -18 -50 9 -46 28 4 22 39 42 45 26 3 -8 24
-13 54 -13 46 0 49 2 49 25 0 23 -3 25 -50 25 -27 0 -50 -4 -50 -10z m88 -17
c2 -9 -9 -13 -37 -13 -39 0 -50 8 -34 24 11 11 66 2 71 -11z m-317 -46 c-5 -5
-17 -7 -26 -3 -14 5 -15 9 -5 21 10 12 16 13 27 4 9 -8 10 -16 4 -22z m70 0
c-5 -5 -17 -7 -26 -3 -14 5 -15 9 -5 21 10 12 16 13 27 4 9 -8 10 -16 4 -22z
m79 7 c0 -8 -8 -14 -18 -14 -25 0 -34 11 -21 26 13 15 39 7 39 -12z m168 -36
c-6 -17 -70 -17 -75 0 -3 8 8 12 37 12 29 0 40 -4 38 -12z"
                />
                <path
                  d="M20 140 l0 -60 35 0 c26 0 35 4 36 18 4 59 2 57 52 60 38 3 49 0 54
-15 6 -15 8 -12 13 12 4 21 11 30 25 30 14 0 22 -9 26 -30 6 -29 7 -29 8 8 1
36 0 37 -34 37 -24 0 -35 -5 -35 -15 0 -12 -13 -15 -55 -15 -42 0 -55 3 -55
15 0 10 -11 15 -35 15 l-35 0 0 -60z m58 -3 c3 -45 2 -47 -22 -47 -24 0 -26 4
-26 43 0 48 6 59 30 55 10 -2 16 -17 18 -51z"
                />
                <path
                  d="M110 80 l0 -60 35 0 c24 0 35 5 35 15 0 12 13 15 55 15 42 0 55 -3
55 -15 0 -10 11 -15 35 -15 l35 0 0 60 0 60 -35 0 c-24 0 -35 -5 -35 -15 0
-12 -13 -15 -55 -15 -42 0 -55 3 -55 15 0 10 -11 15 -35 15 l-35 0 0 -60z m58
3 c-3 -40 -6 -48 -23 -48 -17 0 -20 8 -23 48 -3 45 -2 47 23 47 25 0 26 -2 23
-47z m180 0 c-3 -40 -6 -48 -23 -48 -17 0 -20 8 -23 48 -3 45 -2 47 23 47 25
0 26 -2 23 -47z m-60 0 c-5 -26 -101 -26 -106 0 -3 14 5 17 53 17 48 0 56 -3
53 -17z"
                />
              </g>
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(6)}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 41.000000 39.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,39.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M145 356 c-17 -7 -43 -28 -59 -46 -25 -31 -91 -150 -84 -154 2 0 13
-9 24 -19 21 -17 22 -17 55 34 31 48 33 50 41 29 5 -13 4 -47 -2 -78 -16 -86
-14 -90 29 -103 48 -14 130 -4 138 17 3 8 1 43 -4 77 -6 33 -7 72 -3 86 6 25
7 24 41 -26 l34 -51 23 19 23 18 -36 68 c-46 87 -65 110 -109 128 -43 18 -71
18 -111 1z m83 -5 c11 -6 10 -15 -4 -44 -19 -40 -27 -40 -50 5 -13 25 -14 32
-2 39 17 11 39 11 56 0z m-57 -52 c19 -37 20 -46 9 -85 -13 -45 -35 -58 -44
-26 -9 35 -17 132 -11 142 12 19 25 10 46 -31z m102 -35 c-2 -38 -5 -75 -8
-81 -6 -17 -85 -17 -85 0 0 7 16 45 35 86 44 92 61 90 58 -5z m-189 -69 c-31
-47 -39 -53 -55 -44 -19 9 -18 11 2 52 12 23 33 58 47 76 l26 35 8 -32 c7 -27
3 -39 -28 -87z m247 72 c49 -78 59 -103 46 -116 -18 -18 -22 -14 -58 42 -25
38 -33 61 -31 85 2 17 6 32 10 32 4 0 19 -19 33 -43z m-175 -138 c-3 -17 -6
-44 -6 -60 0 -20 -5 -29 -16 -29 -13 0 -15 8 -9 53 8 58 12 67 27 67 6 0 8
-12 4 -31z m31 -21 c-2 -29 -2 -41 0 -25 5 33 23 36 24 5 0 -13 3 -18 5 -11 3
6 1 28 -5 48 l-10 36 32 -3 c30 -3 33 -6 41 -56 11 -65 4 -73 -60 -75 -45 -2
-49 0 -52 22 -6 36 8 111 19 111 6 0 9 -21 6 -52z"
                />
              </g>
            </svg>
          </button>
          <button className="overview__btn" onClick={() => setNumberOfActiveItem(7)}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 41.000000 42.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,42.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M155 365 c-23 -23 -25 -31 -25 -132 l0 -108 -30 -13 c-22 -10 -34
-11 -50 -2 -12 6 -29 9 -38 7 -31 -7 40 -29 73 -22 17 3 38 5 48 5 39 -2 93
-3 112 -1 11 1 34 -1 50 -4 30 -7 100 14 78 22 -7 2 -21 -1 -33 -7 -15 -8 -29
-8 -55 1 l-35 13 0 106 c0 93 3 109 19 124 26 24 72 17 87 -12 16 -32 24 -38
24 -18 0 25 -45 66 -73 66 -33 0 -67 -40 -67 -78 0 -31 -1 -32 -45 -32 -44 0
-45 1 -45 33 0 40 15 57 52 57 15 0 28 5 28 10 0 20 -51 10 -75 -15z m85 -135
c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z
m0 -78 c0 -20 -7 -33 -24 -41 -34 -19 -66 0 -66 39 0 29 2 30 45 30 43 0 45
-1 45 -28z"
                />
                <path
                  d="M34 42 c24 -11 38 -11 64 -2 26 9 40 9 63 0 23 -10 35 -10 58 0 23 9
37 9 63 0 26 -9 40 -9 65 2 29 12 13 14 -156 14 -167 -1 -185 -2 -157 -14z"
                />
              </g>
            </svg>
          </button>
          <button
            className="overview__btn overview__btn-prev"
            onClick={() => setNumberOfActiveItem(8)}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 40.000000 40.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className="overview__btn-icon"
                transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M184 368 c-23 -11 -44 -48 -44 -77 0 -10 9 -30 20 -44 11 -14 20 -30
20 -36 0 -21 -37 -11 -65 19 -37 39 -51 38 -65 -5 -23 -69 13 -175 66 -195 62
-24 146 -4 178 42 23 32 21 109 -3 135 -23 25 -18 33 20 33 18 0 35 9 48 26
29 37 27 44 -19 44 -22 0 -40 5 -40 10 0 6 -11 22 -25 35 -25 26 -56 31 -91
13z m80 -19 c30 -24 34 -63 10 -97 -14 -21 -14 -24 5 -48 31 -39 28 -96 -7
-135 -23 -26 -38 -33 -80 -37 -38 -3 -58 0 -77 12 -48 31 -77 123 -55 176 l12
30 35 -30 c57 -50 108 -30 64 26 -33 42 -23 96 22 114 33 13 42 12 71 -11z
m96 -58 c0 -16 -30 -41 -49 -41 -14 0 -17 6 -13 25 3 20 10 25 33 25 16 0 29
-4 29 -9z"
                />
                <path
                  d="M206 325 c-9 -24 4 -45 29 -45 29 0 38 13 30 40 -8 24 -50 27 -59 5z
m44 -2 c0 -5 -5 -15 -10 -23 -7 -11 -12 -12 -21 -3 -6 6 -8 16 -5 22 8 12 36
15 36 4z"
                />
                <path
                  d="M150 155 c-38 -14 -40 -28 -8 -62 47 -51 117 -4 92 61 -7 19 -36 19
-84 1z m78 -21 c3 -24 -21 -54 -44 -54 -15 0 -54 35 -54 48 0 11 51 31 75 29
12 -1 21 -10 23 -23z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overview;
