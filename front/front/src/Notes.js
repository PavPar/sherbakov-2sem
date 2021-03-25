// import React from 'react';
// // import Card from './Card';
// import { useState, useEffect } from 'react'


// export default function Main() {
//     const [msg, setMsg] = useState({ "isOk": false, "text": "" });

//     function getServerMsg() {
//         fetch("http://localhost:8080/", {
//             "method": "GET"
//         })
//             .then((res) => {
//                 return res.json()
//             })
//             .then(({ msg }) => {
//                 setMsg({ "isOk": true, "text": msg })
//                 console.log(msg)
//             })
//             .catch((err) => {
//                 setMsg({ "isOk": true, "text": "Произошла ошибка" })
//                 console.log(err)
//             })
//     }

//     useEffect(() => {

//         getServerMsg()

//     }, []);

//     return (
//         <main className="content">
//             <section className="section">
//                 <h2 className="section__title">Здесь получается сообщение от сервера</h2>
//                 <p className="section__text" style={msg.isOk ? {color:"green"} : {color:"red"}}>{msg.text}</p>
//             </section>
//             <section className="notes">
//                 <h2>А это список каких-то дел</h2>
//                 <button className="btnget">Получить список дел</button>
//                 <div className="notes-list"></div>
//             </section>
//             <section className="data">
//                 <h2>А это форма которая отправляет данные</h2>
//                 <form className="form-list">

//                     <input className="form__input" name="title" placeholder="Здесь заголовок" required></input>
//                     <input className="form__input" name="info" placeholder="А здесь описание" required></input>

//                     <button className="form__submit" type="submit" >Отправить</button>

//                 </form>
//             </section>

//         </main>
//     )
// }