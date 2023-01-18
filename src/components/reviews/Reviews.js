import React, {useEffect, useState} from 'react';
import styles from './Reviews.module.css';
import no_user from '../../images/default.png';
import pencil1 from '../../images/pencil.svg';
import pencil2 from '../../images/pencil_mini.svg';
import {handle} from './requests/Post';
import {deleteData} from './requests/Delete';
import close from '../../images/close_2.png';

const Reviews = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [review, setReviews] = useState([]);

    const toggleInputs = () => {
        setShowInputs(!showInputs);
    };

    const getReview = () => {
        fetch('http://localhost:3001/reviews?_start=1&_end=5')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('some error');
                }
            })
            .then((data) => setReviews(data));
    };
    useEffect(getReview, []);

    return (
        <section className={styles.reviews}>
            <div className={styles.container}>
                {/* Title */}
                <h2 className={styles.title}>Отзывы</h2>
                {/* Items */}
                <ul className={styles.reviews_inner}>
                    {review.map((item) => (
                        <Item
                            key={item.id}
                            username={item.username}
                            dateCurr={item.dateCurr}
                            user_img={item.user_img}
                            desc={item.desc}
                            id={item.id}
                        />
                    ))}
                </ul>

                {/* show inputs */}
                <h3 className={styles.subtitle} onClick={toggleInputs}>
                    Оставить отзыв
                </h3>
                {showInputs && (
                    <div className={styles.inputs_wrapper}>
                        <form onSubmit={handle}>
                            <input
                                id="username"
                                type="text"
                                placeholder="Ваше имя"
                            />
                            <input
                                id="user_img"
                                type="text"
                                placeholder="Ссылка на изображение"
                            />
                            <textarea
                                id="desc"
                                placeholder="Введите ваш отзыв"
                            ></textarea>
                            <input
                                className={styles.submit}
                                type="submit"
                                value="Отправить"
                            />
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

const Item = ({user_img, desc, username, dateCurr, id}) => {
    return (
        <li className={styles.item}>
            <img
                onClick={() => {
                    deleteData(id);
                }}
                className={styles.close}
                src={close}
                alt="close"
            />
            <img className={styles.pencil} src={pencil1} alt="pen" />
            <img
                className={styles.user_pic}
                src={user_img ? user_img : no_user}
                alt="user"
            />
            <div className={styles.name_inner}>
                <p>{username}</p>
                <img src={pencil2} alt="pen" />
            </div>
            <p className={styles.text}>{desc}</p>
            <p className={styles.date}>{dateCurr}</p>
        </li>
    );
};

export default Reviews;
