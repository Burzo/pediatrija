import React from 'react';
import './App.scss';
import Table from "./components/Table"

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
                        <a href="#" class="mybtn mybtn--white mybtn--animated">Naročite se</a>
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
                                        <button class="mybtn mybtn--orange">Next step &rarr;</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-features">
                
                <div class="u-center-text u-margin-bottom-small">
                    <h2 class="heading-secondary">
                        O nas
                    </h2>
                </div>

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
                </div>
                <div class="row">
                    <div class="feature-box--map">
                        <div class="feature-box__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.635871001059!2d15.62630821579361!3d46.53510686936774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f7785d3934241%3A0x1d94d0f6f2feae1a!2sBor%C5%A1tnikova%20ulica%2079%2C%202000%20Maribor!5e0!3m2!1sen!2ssi!4v1573128292102!5m2!1sen!2ssi" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-pricing">
            <div class="row">
            <Table/>
            </div>
            </section>

            <section class="section-delo">
            <div class="u-center-text u-margin-bottom-small">
                <h2 class="heading-secondary">
                Delovni čas ordinacije
                </h2>
            </div>

            <div class="row">
                <ul class="list-group normalflex">
                <div href="#" class="delo__text w-20 list-group-item list-group-item-action orange-card flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Ponedeljek</h5>
                    </div>
                    <p class="mb-1">Od 7.30 do 13.30 sprejem do 13.00.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                <div href="#" class="delo__text w-20 list-group-item list-group-item-action orange-card flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Torek</h5>
                    </div>
                    <p class="mb-1">Od 13.00 do 20.00 sprejem do 19.30.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                <div href="#" class="delo__text w-20 list-group-item list-group-item-action orange-card flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Sreda</h5>
                    </div>
                    <p class="mb-1">Od 9.30 do 13.00 sprejem do 12.30 in 14.00 do 18.30 - preventiva.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                <div href="#" class="delo__text w-20 list-group-item list-group-item-action orange-card flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Četrtek</h5>
                    </div>
                    <p class="mb-1">Od 7.30 do 13.30 sprejem do 13.00.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                <div href="#" class="delo__text w-20 list-group-item list-group-item-action orange-card flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Petek</h5>
                    </div>
                    <p class="mb-1">Od 7.30 do 13.00 sprejem do 12.30.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                </ul>
            </div>
            <div class="row">
                <div class="u-center-text u-margin-bottom-small">
                    <h2 class="heading-secondary">
                    Naročanje
                    </h2>
                </div>
                <div class="delo__text">
                Po telefonu 02/4290222 in 041/502220 v ponedeljek, četrtek in petek od 8.00 do 12.30, v torek od 12.45 do 18.00 in v sredo od 9.15 do 12.45. V sredo popoldan telefona ne dvigujemo, zaradi nemotenega poteka dela v otroški posvetovalnici, kjer so dojenči naročeni vnaprej. Naročanje po pošti P.B., d.o.o., Borštnikova ulica 79, 2000 Maribor zaradi zamudnosti odsvetujemo. Naročanje preko e-maila: info@pediatrija.si  ni učinkovito, ker mailov ne beremo vsako uro.
                </div>
            </div>
            <div class="row">
                <div class="u-center-text u-margin-bottom-small">
                    <h2 class="heading-secondary">
                    Nadomeščanja
                    </h2>
                </div>
                <div class="delo__text">
                V primeru, ko je ordinacija zaprta, le v nujnih primerih pomoč poiščete:
                </div>
                <div class="row">
                <ul class="list-group">
                <div href="#" class="delo__text list-group-item list-group-item-action inforcard flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Ponedeljek</h5>
                    </div>
                    <p class="mb-1">Ordinacija Sabine Rozman-Golčar, dr. med. spec. pediatrije v zdravstveni postaji v Rušah, Tovarniška c. 51 tel.: 02/609-0091 ali (v času dopustov tudi v četrtek do 17.00 ure) v ordinaciji Barbare Dietner-Merkan, dr. med. spec. pediatrije na Teznu, Zagrebška 103. tel.: 08/205-7530.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                {/* <div href="#" class="delo__text w-20 list-group-item list-group-item-action inforcard flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Torek</h5>
                    </div>
                    <p class="mb-1">Od 13.00 do 20.00 sprejem do 19.30.</p>
                    <small>Donec id elit non mi porta.</small>
                </div> */}
                <div href="#" class="delo__text list-group-item list-group-item-action inforcard flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Sreda</h5>
                    </div>
                    <p class="mb-1">Na Kalohovi 18 na Studencih v ordinaciji dr. Andreje Krebs, dr. med. spec. pediatrije tel.: 420 18 87 ali (v času dopustov tudi v torek do 17.00) v ordinaciji Branke Kvas-Kučič, dr. med. spec. šolske med. v ambulanti na Teznu, Zagrebška 103. tel.: 08 205 7570.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                {/* <div href="#" class="delo__text list-group-item list-group-item-action inforcard flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Četrtek</h5>
                    </div>
                    <p class="mb-1">Od 7.30 do 13.30 sprejem do 13.00.</p>
                    <small>Donec id elit non mi porta.</small>
                </div> */}
                <div href="#" class="delo__text list-group-item list-group-item-action inforcard flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 delo__heading">Petek</h5>
                    </div>
                    <p class="mb-1">Za nujne primere deluje od 14.00 do 18.00 ure eden od pediatrov koncesionarjev, ki delamo v Mariboru, Rušah, Šentilju in Lenartu po razporedu v nadaljevanju. Kontakti in naslovi vsakega od kolegov so navedeni na koncu te strani. Veljavni razpored je: 4.10.2019. Igor Dovnik, 11.10.2019 Barbara Dietner Merkan, 18.10.2019 Mojca Švab Zavratnik, 25.10.2019 Matjaž Homšak, 8.11.2019 Mojca Ivankovič-Kacjan, 15.11.2019 Branka Kvas Kučič, 22.11.2019 Andreja Krebs, 29.11.2019 Sabina Rozman Golčar, 6.12.2019 Suzana Škorjanc Antolič, 13.12.2019 Mojca Švab Zavratnik, 20.11.2019 Bernarda Vogrin, 27.12.2019 Sabina Rozman Golčar, 3.1.2020 Barbara Dietner Merkan, 10.1.2020 Matjaž Homšak, 17.1.2020 Mojca Ivankovič Kacijan, 24.1.2020 Branka Kvas Kučič, 31.1.2020 Andreja Krebs, 7.2.2020 Igor Dovnik, 14.2.2020 Suzana Škorjanc Antolič, 21.2.2020 Mojca Švab Zavratnik, 28.2.2020 Bernarda Vogrin.</p>
                    <small>Donec id elit non mi porta.</small>
                </div>
                </ul>
            </div>
            </div>
v ponedeljek popoldan v ordinaciji Sabine Rozman-Golčar, dr. med. spec. pediatrije v zdravstveni postaji v Rušah, Tovarniška c. 51 tel.: 02/609-0091 ali
v ponedeljek popoldan (v času dopustov tudi v četrtek do 17.00 ure) v ordinaciji Barbare Dietner-Merkan, dr. med. spec. pediatrije na Teznu, Zagrebška 103. tel.: 08/205-7530
v sredo popoldan na Kalohovi 18 na Studencih v ordinaciji dr. Andreje Krebs, dr. med. spec. pediatrije tel.: 420 18 87 ali
v sredo popoldan (v času dopustov tudi v torek do 17.00) v ordinaciji Branke Kvas-Kučič, dr. med. spec. šolske med. v ambulanti na Teznu, Zagrebška 103. tel.: 08 205 7570,
v petek popoldan za nujne primere deluje od 14.00 do 18.00 ure eden od pediatrov koncesionarjev, ki delamo v Mariboru, Rušah, Šentilju in Lenartu po razporedu v nadaljevanju. Kontakti in naslovi vsakega od kolegov so navedeni na koncu te strani. Veljavni razpored je: 4.10.2019. Igor Dovnik, 11.10.2019 Barbara Dietner Merkan, 18.10.2019 Mojca Švab Zavratnik, 25.10.2019 Matjaž Homšak, 8.11.2019 Mojca Ivankovič-Kacjan, 15.11.2019 Branka Kvas Kučič, 22.11.2019 Andreja Krebs, 29.11.2019 Sabina Rozman Golčar, 6.12.2019 Suzana Škorjanc Antolič, 13.12.2019 Mojca Švab Zavratnik, 20.11.2019 Bernarda Vogrin, 27.12.2019 Sabina Rozman Golčar, 3.1.2020 Barbara Dietner Merkan, 10.1.2020 Matjaž Homšak, 17.1.2020 Mojca Ivankovič Kacijan, 24.1.2020 Branka Kvas Kučič, 31.1.2020 Andreja Krebs, 7.2.2020 Igor Dovnik, 14.2.2020 Suzana Škorjanc Antolič, 21.2.2020 Mojca Švab Zavratnik, 28.2.2020 Bernarda Vogrin
v soboto, ob nedeljah in praznikih med 8.00 in 23.00 ter vsak delovnik med 20.00 in 23.00 uro dela v ZD dr.A. Drolca Maribor v Vošnjakovi ulici za nujne primere dežurna pediatrična služba tel.: 228 64 29
vsak dan med 23.00 in 7.00 nujne primere obravnava urgentna ambulanta, ki deluje v mariborskem UKC v pritličju prizidka kirurške stolpnice.
Andreja Krebs, dr. med. specialistka pediatrije, Studenci, Kalohova 18, telefon: 02/4201887.  Spletna stran:www.pediatrija.krebs.si

Suzana Škorjanc Antolič, dr. med. specialistka pediatrije, Studenci, Hrenova 6, 2000 Maribor, telefon: 02/429 0911, spletna stran: www.pediatrinjasuzana.si

 Branka Kvas Kučič, dr. med., specialistka šolske medicine, Zagrebška cesta 103, 2000 Maribor, telefon:08 205 75 70, E pošta: www.zdravniki-zobozdravniki.net/Clan/Branka-KVAS-KUCIC-1226

 Barbara Dietner Merkan, dr. med. specialistka pediatrije, Zagrebška cesta 103, 2000 Maribor, telefon: 08 205 75 30, spletna stran: www.pediatrija-tezno.si

 Sabina Rozman Golčar, dr. med. specialistka pediatrije, Stadionska ul.4, 2342 Ruše, tel.: 02/609 0091, spletna stran: https://sabinarozman.wordpress.com

 Mojca Švab Zavratnik, dr. med. specialistka pediatrije, Pod hribom 14, 2212 Šentilj v Slovenskih goricah, telefon: 08 200 26 65, spletna stran: www.pediatrija-sentilj.si

 Bernarda Vogrin, dr. med. specialistka pediatrije, Maistrova 22, 2230 Lenart v Slovenskih goricah, telefon: 02 729 18 41, spletna stran: www.zdravniki-zobozdravniki.net/Clan/Bernarda-VOGRIN-1111

 asist. dr. Matjaž Homšak, dr. med., specialist pediater, Maistrova ulica 22, 2230 Lenart v Slovenskih goricah, telefon: 02 729 18 33 in 02 729 18 42, spletna stran: www.zdravniki-zobozdravniki.net/Clan/Matjaz-HOMSAK-1446

 Mojca Ivankovič Kacjan, dr. med. specialistka pediatrije, Maistrova 22, 2230 Lenart v Slovenskih Goricah, telefon: 02 729 18 27, spletna stran: www.zdravniki-zobozdravniki.net/Clan/Mojca-IVANKOVIC-KACJAN-1486

 
            </section>


            <footer class="footer">
            <div class="footer__logo-box">

                <picture class="footer__logo">
                    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                            media="(max-width: 37.5em)" />
                    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png" />
                </picture>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        
                    </p>
                </div>
            </div>
            </footer>

            </div>
        )
    }
}

export default App;
