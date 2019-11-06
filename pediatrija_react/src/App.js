import React from 'react';
import './App.scss';

class App extends React.Component {
    render() {

        return(
            <div>
                {/* <div class="navigation">
                    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
                    <label for="navi-toggle" class="navigation__button">
                        <span class="navigation__icon">&nbsp;</span>
                    </label>
                    <div class="navigation__background">&nbsp;</div>

                    <nav class="navigation__nav">
                        <ul class="navigation__list">
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Nature</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benefits</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book now</a></li>
                        </ul>
                    </nav>
                </div> */}

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

            </div>
        )
    }
}

export default App;
