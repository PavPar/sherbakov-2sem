import React from 'react';
// import Card from './Card';
import { useState, useEffect } from 'react'


export default function Main() {
    const [msg, setMsg] = useState({ "isOk": false, "text": "" });

    function getServerMsg() {
        fetch("http://localhost:8080/", {
            "method": "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then(({ msg }) => {
                setMsg({ "isOk": true, "text": msg })
                console.log(msg)
            })
            .catch((err) => {
                setMsg({ "isOk": false, "text": "Произошла ошибка" })
                console.log(err)
            })
    }

    useEffect(() => {

        getServerMsg()

    }, []);

    return (
        <main className="content">
            <section className="section">
                <h2 className="section__title">Здесь получается сообщение от сервера</h2>
                <p className="section__text" style={msg.isOk ? {color:"green"} : {color:"red"}}>{msg.text}</p>
            </section>
        </main>
    )
}