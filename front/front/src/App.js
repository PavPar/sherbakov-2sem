import './App.css';
import { useState } from 'react';
import Cards from "./Cards";
import Main from "./Main";

function App() {
  const [displayCards, changeCardsState] = useState(true)

  function showMenu(){
    changeCardsState(false)
  }

  function showCards(){
    changeCardsState(true)
  }

  return (
    <>
      <header className="header">
        <h1 className="header__title">Это простая страница</h1>
        <p className="header__subtitle">А это простой подзагловок</p>
      </header>
      <nav className="menu">
        <button className="menu_btn" onClick={showMenu}>Получить сообщение от сервера</button>
        <button className="menu_btn" onClick={showCards}>Добавить карточки</button>
      </nav>
      {displayCards ? <Cards></Cards> : <Main></Main>}
      <footer className="footer">
        <p className="footer__name">Все это сделал Павел Парамонов</p>
      </footer>
    </>
  );
}

export default App;
