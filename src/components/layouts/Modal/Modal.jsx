import React from 'react';

import { RedLink } from '../../UI/RedLink';
import closeIcon from '../../../assets/icons/close.svg';
import './Modal.scss';

function Modal({ isModalOpen, setIsModalOpen }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`modal ${isModalOpen && 'modal-open'}`} onClick={closeModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__btn">
          <button onClick={closeModal}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>

        <div className="contacts__feedback">
          <div className="contacts__subtitle">Напишите нам</div>
          <form className="contacts__form">
            <label>
              <input type="text" name="name" placeholder="Ваше имя" className="contacts__input" />
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
              <input type="email=" name="email" placeholder="E-mail" className="contacts__input" />
            </label>
            <textarea
              className="contacts__textarea"
              name="description"
              placeholder="Текст сообщения"
            ></textarea>
            <div className="contacts__aggrement">
              Нажимая "отправить", я соглашаюсь с обработкой персональных данных в соответствии с ФЗ
              «О персональных данных» № 152-ФЗ
            </div>
            <div className="contacts__btn" onClick={closeModal}>
              <RedLink right type="submit">
                Отправить
              </RedLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
