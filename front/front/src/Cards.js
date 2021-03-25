import React from 'react';
// import Card from './Card';
import { useState, useEffect } from 'react'
import Card from "./Card"

export default function Main() {

    const [title, handleTitleChange] = useState("");
    const [desc, handleDescChange] = useState("");
    const [cards, setCards] = useState([]);

    function getCards() {
        fetch("http://localhost:8080/cards", {
            "method": "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setCards(Object.values(res))
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function sendCard() {
        fetch("http://localhost:8080/cards", {
            "method": "POST",
            'Content-Type': 'application/json',
            "body": JSON.stringify({ "name": title, "about": desc })
        }).then(res => {
            console.log(res)
            getCards();
        })
            .catch((err) => {
                console.log(err)
            })

    }
    useEffect(() => {
        getCards()
    }, []);

    function handleSubmit(e){
        e.preventDefault();
        console.log('called')
        sendCard()
    }

    return (
        <main className="content">
         
            <section className="data">
                <h2>Это форма которая отправляет данные</h2>
                <form className="form-list" noValidate>

                    <input className="form__input" name="title" placeholder="Здесь заголовок" onChange={(obj) => { handleTitleChange(obj.target.value) }}></input>
                    <input className="form__input" name="info" placeholder="А здесь описание" onChange={(obj) => { handleDescChange(obj.target.value) }}></input>

                    <button className="form__submit" type="submit" onClick={handleSubmit}>Отправить</button>

                </form>
            </section>

            <section className="notes">
                <h2>Это список карточек с сервера</h2>
                <div className="notes-list">
                    {cards.map(card =>

                        <Card
                            title={card.name}
                            info={card.about}
                        ></Card>
                    )}

                </div>
            </section>

        </main>
    )
}