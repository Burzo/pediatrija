import React from "react"

const Table = (props) => {
    return (
        <div class="flex-column-wrap">
        <div class="flex w-100">
        {/* <a href="#samoplacniki" class="mybtn mybtn--orange" data-toggle="collapse">Cenik storitev</a>
        <a href="#laboratorij" class="mybtn mybtn--orange" data-toggle="collapse">Cenik lab. storitev</a> */}
        <a href="#cenik" class="mybtn mybtn--orange mb-1" data-toggle="collapse">Kliknite za cenik</a>
        </div>

        <div id="cenik" class="collapse">
        <div class="flex-column-wrap">
        <p class="pricing-table__disclaimer">Cena storitve opravljene, na željo ali zahtevo naročnika, v nočnem času med 20 in 7 uro ter ob vikendih in praznikih se poviša za 50%. Nismo zavezanec za obračun in plačilo davka na dodano vrednost.</p>
        <table class="pricing-table">
        <tr>
            <th class="heading-tertiary">Pregleh pred cepljenjem in cepljenje (občasno veljajo akcijske cene)</th>
            <th>Cene v €</th>
        </tr>
        <tr>
        <td>KME otrok (s popustom)</td>
        <td>30,00 (25,00)</td>
        </tr>
        <tr>
        <td>KME odrasli (s popustom)</td>
        <td>35,00 (25,00)</td>
        </tr>
        <tr>
        <td>Rotarix (s popustom)</td>
        <td>75,00 (70,00)</td>
        </tr>
        <tr>
        <td>Rotateq (s popustom)</td>
        <td>60,00 (55,00)</td>
        </tr>
        <tr>
        <td>Prevenar (s popustom)</td>
        <td>60,00 (55,00)</td>
        </tr>
        <tr>
        <td>Synflorix (s popustom)</td>
        <td>45,00 (40,00)</td>
        </tr>
        <tr>
        <td>Cervarix (s popustom)</td>
        <td>100,00 (95,00)</td>
        </tr>
        <tr>
        <td>Silgard (s popustom)</td>
        <td>55,00 (50,00)</td>
        </tr>
        <tr>
        <td>Priorix Tetra (s popustom)</td>
        <td>75,00 (70,00)</td>
        </tr>
        <tr>
        <td>Varivax (s popustom)</td>
        <td>50,00 (45,00)</td>
        </tr>
        <tr>
        <td>Gripa (s popustom)</td>
        <td>15,00 (10,00)</td>
        </tr>
        <tr>
        <td>Nimenrix (s popustom)</td>
        <td>50,00 (45,00)</td>
        </tr>
        <tr>
        <td>M M RVAXPRO cena cepiva</td>
        <td>5,00</td>
        </tr>
        <tr>
        <td>Infanrix cena cepiva</td>
        <td>12,00</td>
        </tr>
        <tr>
        <td>Infanrix Hexa cena cepiva</td>
        <td>45,00</td>
        </tr>
        <tr>
        <td>
        <p>Fotokopiranje</p>
        <p>format A4 1 stran  </p>
        <p>format A3 1 stran </p>
        </td>
        <td>
        <p>&nbsp;</p>
        <p>0,10 EUR</p>
        <p>0,15 EUR</p>
        </td>
        </tr>
        </table>
        <table class="pricing-table">
        <tr>
            <th class="heading-tertiary">Laboratorijske storitve</th>
            <th>Cene v €</th>
        </tr>
        <tr>
        <td>KKS (hemogram)</td>
        <td>10,00</td>
        </tr>
        <tr>
        <td>CRP/Hitri strep test</td>
        <td>7,50</td>
        </tr>
        <tr>
        <td>Krvni sladkor/Celokupni holesterol/Nativni urin</td>
        <td>5,00</td>
        </tr>
        <tr>
        <td>Kratko zdravniško potrdilo (opravičilo za šolo, opravičilo za šport/športno vzgojo, športni klub, o pregledu otroka, za zavod za zaposlovanje…)</td>
        <td>5,00</td>
        </tr>
        <tr>
        <td>Zdravniško potrdilo (dietna prehrana v vrtcu, šoli, prepis iz kartoteke za potrebe zavarovalnice po poškodbi, o bolezni otroka za potrebe odpovedi potovanja ali druge namene, druga potrdila za potrebe raznih postopkov na željo staršev, prepis cepilne knjižice ob izgubi ali uničenju, izpolnjevanje avstrijske knjižice mame in otroka…)</td>
        <td>25,00</td>
        </tr>
        <tr>
        <td>Pošiljanje dokumentov po pošti, faksu, elektronski pošti</td>
        <td>5,00</td>
        </tr>
        <tr>
        <td>Izposoja podaljška za dajanje inhalacijskih zdravil</td>
        <td>5,00</td>
        </tr>
        <tr>
        <td>Cepilna knjižica</td>
        <td>2,00</td>
        </tr>
        <tr>
        <td>Paket Medo</td>
        <td>35,00</td>
        </tr>
        <tr>
        <td>Paket Medo za dva otroka</td>
        <td>55,00</td>
        </tr>
        </table>
        <table class="pricing-table">
        <tr>
            <th class="heading-tertiary">Cenik storitev za samoplačnike</th>
            <th>Cene v €</th>
        </tr>
        <tr>
        <td>Prvi preventivni ali kurativni pregled</td>
        <td>45,00</td>
        </tr>
        <tr>
        <td>Ponovni preventivni ali kurativni pregled</td>
        <td>30,00</td>
        </tr>
        <tr>
        <td>Kratek obisk v ordinaciji, posvetovanje (do 15 min.)</td>
        <td>25,00</td>
        </tr>
        <tr>
        <td>Posvetovanje ali pogovor (do 30 minut)</td>
        <td>40,00</td>
        </tr>
        <tr>
        <td>Obisk bolnika na domu do 30 min (z vožnjo)</td>
        <td>75,00</td>
        </tr>
        <tr>
        <td>vsakih nadaljnjih začetih 30 min (z vožnjo)</td>
        <td>30,00</td>
        </tr>
        <tr>
        <td>Delni pregled</td>
        <td>25,00</td>
        </tr>
        <tr>
        <td>Predpis recepta (brez pregleda)</td>
        <td>5,00</td>
        </tr>
        <tr>
        <td>Manjši posegi: - inhalacija,</td>
        <td>10,00</td>
        </tr>
        <tr>
        <td>                      - prevez rane</td>
        <td>10,00 do 20,00</td>
        </tr>
        </table>
        </div>
        </div>
        </div>
    )
}

export default Table