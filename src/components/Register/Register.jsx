import './Register.scss'

import message from '../../Assets/Img/message.png'
import call from '../../Assets/Img/call.png'
import key from '../../Assets/Img/key.png'
import icon from '../../Assets/Img/icon.png'

const Register = () => {
    return(
        <div className="register">
            <div className="register__page">
                <p className="register__text">Уже зарегистрированы? Войти</p>
                <h2 className="register__name">Впервые на RemoteHead?</h2>
                <form action="" className="register__form">
                    <label htmlFor="" className="register__label">
                        <img src={message} alt="" className="register__img" />
                        <input type="email" className='register__input' placeholder='Введите e-mail' required />
                    </label>
                    <label htmlFor="" className="register__label">
                        <img src={call} alt="" className="register__img" />
                        <input type="tell" name='tell' className='register__input' placeholder='Введите телефон' required />
                    </label>
                    <label htmlFor="" className="register__label">
                        <img src={key} alt="" className="register__img" />
                        <input type="password" className='register__input' placeholder='Придумайте пароль' required />
                    </label>
                    <p className="register__texts">Принимаю  <span>Пользовательское соглашение</span></p>
                    <button className="register__btn"> <img src={icon} alt="" className="register__pic" />Создать аккаунт</button>
                </form>
            </div>
        </div>
    )
}

export default Register