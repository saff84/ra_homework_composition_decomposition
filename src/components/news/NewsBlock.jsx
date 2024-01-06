import React from "react";
import News from './News';


function NewsBlock(props) {
    return (
        <div className="news-blocks">
            <News>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">Путин упростил получение автомобильных номеров</p>
                </div>
            </News>
            <News>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">В команде Зеленского раскрыли план реформ на Украине</p>
                </div>
            </News>
            <News>
                <div className="new-wrapper">
                    <img class='icon-news' src='https://www.kindpng.com/picc/m/193-1939576_world-news-png-world-map-facebook-cover-transparent.png' alt={props.text} />
                    <p className="news-block">Турпомощь прокомментировала гибель десятков россиян в Анталье</p>
                </div>
            </News>
        </div>
    )
}

export default NewsBlock;