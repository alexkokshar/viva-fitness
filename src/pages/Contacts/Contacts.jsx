import React from 'react';

import { Container } from '../../components/UI/Container';
import { RedLink } from '../../components/UI/RedLink';
import './Contacts.scss';

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <Container>
          <div className="contacts__info">
            <h1 className="contacts__title">Контакты</h1>
            <div className="contacts__content">
              <div className="contacts__details">
                <div className="contacts__subtitle">Адрес</div>
                <div className="contacts__text">
                  ОOO «Фортсан-Новация» <br />
                  г. Калининград, ул. Олега Кошевого 33
                </div>
                <div className="contacts__subtitle">Время работы</div>
                <div className="contacts__text">Ежедневно с 7:00 до 23:00</div>
                <div className="contacts__text">
                  Бассейны: <br />
                  Пн с 11:00 до 22:00 <br />
                  Вт-Вс с 7:00 до 22:00
                </div>
                <div className="contacts__subtitle">Телефоны</div>
                <div className="contacts__phones">
                  <a href="tel:+74012614061">+7 (4012) 61-40-61</a>
                  <a href="tel:+79637386316">+7 963 738 63 16 (Viber, WhatsApp)</a>
                </div>
              </div>
              <div className="contacts__feedback">
                <div className="contacts__subtitle">Напишите нам</div>
                <form className="contacts__form">
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      className="contacts__input"
                    />
                  </label>
                  <label>
                    <input
                      type="tel"
                      name="tel"
                      placeholder="Номер телефона"
                      className="contacts__input"
                    />
                  </label>
                  <label>
                    <input
                      type="email="
                      name="email"
                      placeholder="E-mail"
                      className="contacts__input"
                    />
                  </label>
                  <textarea
                    className="contacts__textarea"
                    name="description"
                    placeholder="Текст сообщения"
                  ></textarea>
                  <div className="contacts__aggrement">
                    Нажимая "отправить", я соглашаюсь с обработкой персональных данных в
                    соответствии с ФЗ «О персональных данных» № 152-ФЗ
                  </div>
                  <div className="contacts__btn">
                    <RedLink right type="submit">
                      Отправить
                    </RedLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="contacts__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.2008750292484!2d20.51099921601465!3d54.67089258237353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e317b1ff262b59%3A0x216be2ba600cbeb8!2sUlitsa%20Olega%20Koshevogo%2C%2033%2C%20Kaliningrad%2C%20Kaliningradskaya%20oblast&#39;%2C%20236011!5e0!3m2!1sen!2sru!4v1650976794092!5m2!1sen!2sru"
          title="This is a google map"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
