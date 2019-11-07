import React from 'react';
import './App.scss';

class App extends React.Component {
    render() {

        return(
            <div>

                <div class="navigation">
                    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
                    <label for="navi-toggle" class="navigation__button">
                        <span class="navigation__icon">&nbsp;</span>
                    </label>
                    <div class="navigation__background">&nbsp;</div>

                    <nav class="navigation__nav">
                        <ul class="navigation__list">
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>O nas</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Zaposleni</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Naročite se</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Kontakti</a></li>
                        </ul>
                    </nav>
                </div>

                <header class="header">
                    <div class="header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">
                                Pediatrija
                            </span>
                            <span class="heading-primary--sub">
                            Igor Dovnik
                            </span>
                            <span class="heading-primary--sub">
                            dr. med. specialist pediater
                            </span>
                        </h1>
                        <a href="#" class="btn btn--white btn--animated">Naročite se</a>
                    </div>
                </header>

                <section class="section-stories">

                    <div class="u-center-text u-margin-bottom-small">
                        <h2 class="heading-secondary">
                            Za vaše zdravje skrbimo
                        </h2>
                    </div>

                    <div class="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img src="/images/igor_dovnik2.png" alt="Igor Dovnik" class="story__img" />
                                <figcaption class="story__caption">Igor Dovnik</figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">Igor Dovnik, dr. med. specialist pediater</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img src="/images/vera_glazar2.png" alt="Vera Glažar" class="story__img" />
                                <figcaption class="story__caption">Vera Glažar</figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">Vera Glažar, srednja medicinska sestra</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-book">
                    <div class="row">
                        <div class="book">
                            <div class="book__form">
                                <form class="form" action="#">
                                    <div class="u-margin-bottom-medium">
                                        <h2 class="heading-secondary">
                                            Naročite se na termin
                                        </h2>
                                    </div>
                                    <div class="form__group">
                                        <input id="name" type="text" class="form__input" placeholder="Ime in Priimek" required />
                                        <label for="name" class="form__label">Ime in Priimek</label>
                                    </div>
                                    <div class="form__group">
                                        <input id="email" type="email" class="form__input" placeholder="Vaš elektronski naslov" required />
                                        <label for="email" class="form__label">Vaš elektronski naslov</label>
                                    </div>
                                    <div class="form__group u-margin-bottom-medium">
                                        <div class="form__radio-group">
                                            <input type="radio" class="form__radio-input" id="small" name="size" />
                                            <label for="small" class="form__radio-label">
                                                <span class="form__radio-button"></span>
                                                Možnost 1</label>
                                        </div>
                                        <div class="form__radio-group">
                                            <input type="radio" class="form__radio-input" id="large" name="size" />
                                            <label for="large" class="form__radio-label">
                                                <span class="form__radio-button"></span>
                                                Možnost 2</label>
                                        </div>
                                    </div>
                                    <div class="form__group">
                                        <button class="btn btn--orange">Next step &rarr;</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-features">
                
                <div class="row flex">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-map"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Naslov</h3>
                        <p class="feature-box__text">
                        <p>Borštnikova ulica 79</p>
                        <p>2000 Maribor</p>
                        <p>Slovenija</p>
                        </p>
                    </div>
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-smartphone"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Telefon</h3>
                        <p class="feature-box__text">
                        <p>Telefon: 	(02) 429 02 22</p>
                        <p>Faks: 	(02) 429 02 23</p>
                        <p>Številka prenosnega telefona: 	(041) 502 220</p>
                        </p>
                    </div>
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-sheet-pen"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Informacije</h3>
                        <p class="feature-box__text">
                        <p>Matična: 1798146000</p>
                        <p>Davčna: SI33471142</p>
                        <p>TRR IBAN SI56 2900 0005 5378 612 (UniCredit Banka)</p>
                        </p>
                    </div>
                    <div class="feature-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.635871001059!2d15.62630821579361!3d46.53510686936774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f7785d3934241%3A0x1d94d0f6f2feae1a!2sBor%C5%A1tnikova%20ulica%2079%2C%202000%20Maribor!5e0!3m2!1sen!2ssi!4v1573128292102!5m2!1sen!2ssi" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen=""></iframe>
                    </div>
                </div>
            </section>

            </div>
        )
    }
}

export default App;
