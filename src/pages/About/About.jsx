import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../components/UI/Container';
import TrainerCard from '../../pages/Team/TrainerCard/TrainerCard';
import { RedLink } from '../../components/UI/RedLink';
import { teamData } from '../../data/teamData';

import introImg from '../../assets/bg/intro.jpg';
import './About.scss';

function About() {
  return (
    <div className="about">
      <section className="about__intro">
        <Container>
          <div className="about__wrapper">
            <h1 className="about__title">О клубе</h1>
            <div className="about__info">
              <div className="about__img">
                <img src={introImg} alt="Workout place VIVA" className="about__img-intro" />
              </div>
              <div className="about__details">
                <div className="about__subtitle">
                  VIVA - это просторный, оснащённый современным оборудованием фитнес-клуб с
                  бассейном для всей семьи
                </div>
                <div className="about__description">
                  <div>
                    Фитнес-клуб VIVA — это современный многоэтажный спортивный комплекс, почти 5000
                    квадратных метров фитнеса, хорошего настроения и уникальной атмосферы. Одним из
                    основных преимуществ фитнес-клуба VIVA является просторный{' '}
                    <b>тренажёрный зал площадью около 850 м2</b>, в котором представлено большое
                    количество кардио и силовых тренажёров на все группы мышц, зона для
                    функциональных тренировок со свободными весами, зона для занятий тяжёлой
                    атлетикой и пауэрлифтингом. А наши инструкторы с удовольствием проведут с вами
                    бесплатную вводную тренировку.
                  </div>
                  <div>
                    Ещё одним преимуществом фитнес-клуба VIVA является наличие{' '}
                    <b>шести залов для групповых программ</b>, включая зал сайкла и настоящий зал
                    единоборств с рингом. Под руководством квалифицированных наставников у нас
                    проводится большое количество разнообразных занятий, таких как: силовые,
                    танцевальные, кардиотренировки, а также йога и растяжка.{' '}
                  </div>
                  <div>
                    После занятий в тренажёрном зале или залах групповых программ вы можете посетить
                    наш <b>25-ти метровый бассейн</b>, который расположен на первом этаже клуба.
                  </div>
                  <div>
                    В фитнес-клубе VIVA каждый сможет выбрать для себя наиболее привлекательный вид
                    тренировок и сделать свои будни более яркими, найти новых друзей, а также
                    достичь желаемых результатов совместно с квалифицированными тренерами в
                    по-настоящему спортивной и позитивной атмосфере!{' '}
                  </div>
                  <div>
                    Для удобства наших клиентов клуб располагает большой бесплатной парковкой.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="gallery"></section>
      <section className="about__trainers">
        <Container>
          <div className="about__team">
            <h2 className="about__team-title">Команда VIVA</h2>
            <ul className="about__team-list">
              {teamData.slice(0, 6).map((trainer) => (
                <TrainerCard key={trainer.id} trainer={trainer} />
              ))}
            </ul>
            <div className="about__team-all">
              <RedLink as={Link} to="/team">
                Все тренеры
              </RedLink>
            </div>
          </div>
        </Container>
      </section>
      <section className="documents">
        <Container>
          <div className="documents__inner">
            <h2 className="documents__title" id="documents">
              Документы
            </h2>
            <ul className="documents__list">
              <li className="documents__item">
                <a
                  className="documents__link"
                  href="https://vivafitness.ru/files/about/svodnaya_vedomost_ocenki_usloviy_truda-39c70561baaef11604c59f1c971bc24c-8459c5e586e5aa633272488bea901ebb.pdf"
                >
                  Сводная ведомость 1
                </a>
              </li>
              <li className="documents__item">
                <a
                  className="documents__link"
                  href="https://vivafitness.ru/files/about/file0001_rotated-f7169e6449f2f0cb465a1e77214f34a3-47dda704f76800658a5431a7aa07ced9.pdf"
                >
                  Сводная ведомость 2
                </a>
              </li>
              <li className="documents__item">
                <a
                  className="documents__link"
                  href="https://vivafitness.ru/files/about/pravila_zamorozki-57194bda506a96c035e56d6610cfac30-f7d2af3a28bb1826b08d8cb68318e10d.doc"
                >
                  Правила заморозки
                </a>
              </li>
              <li className="documents__item">
                <a
                  className="documents__link"
                  href="https://vivafitness.ru/files/about/polzovatelskoe_soglashenie_sayt-efef043a841b986c7ea69e39612060b5-731d4c1406f477b5a68a6176efb41df4.pdf"
                >
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
