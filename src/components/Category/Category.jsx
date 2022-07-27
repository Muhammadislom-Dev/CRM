import './Category.scss'
import { IoCloseOutline } from "react-icons/io5";
import logo from '../../Assets/Img/logo.png'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import TabPanel from '../Content/Content'


const Category = () => {

    const [korzinkaModal, setKorzinkaModal]=useState(false);

    function openKorzinkaModal(){
        setKorzinkaModal(!korzinkaModal);
    }  

    return(
        <div className="category">
            <div className="category__list">
                <div className="category__item">
                    <span>Hammasi
                        <p className='category__name'>100 ta guruh</p>
                    </span>
                    <img src={logo} alt="" className="category__img" />
                </div>
                <div className="category__item">
                    <span>Vue g23
                        <p className='category__name'>16 ta guruh</p>
                    </span>
                    <img src={logo} alt="" className="category__img" />
                </div>
                <div className="category__item">
                    <span>React g2
                        <p className='category__name'>30 ta guruh</p>
                    </span>
                    <img src={logo} alt="" className="category__img" />
                </div>
                <div className="category__item">
                    <span>Robo g1
                        <p className='category__name'>43 ta guruh</p>
                    </span>
                    <img src={logo} alt="" className="category__img" />
                </div>
                <div className="category__item">
                    <span>React g2
                        <p className='category__name'>30 ta guruh</p>
                    </span>
                    <img src={logo} alt="" className="category__img" />
                </div>
                <div className="category__item">
                    <span>Robo g1
                        <p className='category__name'>43 ta guruh</p>
                    </span>
                    <img src={logo} alt="" className="category__img" />
                </div>
                <div className="category__items">
                    <button onClick={() => openKorzinkaModal()} className='category__names'> + Yangi category</button>
                </div>
            </div>

            <h3 className="category__surname">Bizning guruhlarimiz</h3>

            <TabPanel />
            <Modal show={korzinkaModal} className="modal-content"
                contentLabel="Example Modal">
                  <button className='category__close' onClick={()=>setKorzinkaModal()}><IoCloseOutline /></button>
                  <h2 className="category__modal--name"> Category qo’shish</h2>
                  <label htmlFor="" className='category__label'>
                        Guruhlar soni
                        <input className='category__input' type="text" />
                  </label>
                  <label htmlFor="" className='category__label'>
                        Guruh nomini kiriting
                        <input className='category__input' type="text" />
                  </label>

                  <button className="category__btn">Kursni joylash</button>
            </Modal>
        </div>
    )
}

export default Category