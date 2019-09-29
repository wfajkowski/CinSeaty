import React from 'react';
import "./Content.css";

let title = "(Nie)znajomi";
let trailer = "trailer";
let duration = 104;
let genre = "Komedia";
let adult = "Nie";
let production = "Polska, 2019";
let premiere = "2019-09-27";
let lead = "(Nie)znajomi to wzruszający film o miłościach, inspirowaniy hitem, który pokochały miliony widzów na całym świecie. Grupa przyjaciół decyduje się zagrać w trakcie kolacji w niewinną grę.";
let description = "Do zakończenia spotkania szyscy muszą ujawniać wiadomości przychodzące na ich telefony, a rozmowy mają się odbywać w trybie głośnomówiącym. Jak możemy się spodziewać, ten przyjemny wieczór wywróci ich świat do góry nogami. W filmie występują: Tomasz Kot, Maja Ostaszewska, Aleksandra Domańska, Michał Żurawski, Kasia Smutniak, Łukasz Simlat oraz Wojtek Żołądkowicz."

class PopUp extends React.Component {
    render() {
        return (
        <div className = "background">
            <div className = "content">
                <div className = "title"><h1>{title}</h1></div>
                <div className = "close">x</div>
                <div className = "trailer"><iframe width="90%" height="100%" src="https://www.youtube.com/embed/YypFzpm6F18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe></div>
                <div className = "lead">{lead}</div>
                <div className = "description">{description}</div>
                <div className = "reservation">
                    <div className = "hours">Godziny seansów:</div>
                    <div>12:00</div>
                    <div>16:00</div>
                    <div>20:00</div>
                </div>
                <div className = "metadata">
                    Czas trwania: {duration} minut<br />
                    Gatunek: {genre}<br />
                    Film wyłącznie dla dorosłych: {adult}<br />
                    Data premiery: {premiere}<br />
                    Produkcja: {production}
                </div>
            </div>
        </div>
        );
    }
}
export default PopUp;