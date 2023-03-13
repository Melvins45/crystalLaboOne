import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Immuno-sérologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Immuno-sérologie",
        title_id: "immuno-serology-intro",
        sub: 0,
        content: (
          <p>
            L'immuno-sérologie est une discipline médicale qui permet de détecter la présence des anticorps spécifiques dans le sérum afin de pouvoir diagnostiquer une maladie infectueuse.
          </p>
        )
      },
      {
        name: "body_1",
        title: "Maladies virales",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Il s'agit du :
            <ul>
              <li> Les hépatites:
                <DivInLi>
                  <ImgInLi src='/hepatite.jpeg' alt='hepatite' />
                  <p>
                  Ce sont des inflammations du foie causées le plus souvent par des virus. Certains cas peuvent ne pas présenter de symptômes mais elles peuvent se manifester par: 
                    <ul>
                      <li>Un jaunissement des yeux et de la peau;</li>
                      <li> La fatigue;</li>
                      <li> Les nausées;</li>
                      <li> Une perte d'appétit.</li>
                    </ul>
                  </p>
                </DivInLi>
              </li>
              <li> La chlamydia:
                <p>
                  C'est une maladie sexuellement transmissible courante qui peut ne pas provoquer de symptômes. Sinon, certaines personnes peuvent présenter des synptômes comme:
                    <ul>
                      <li> Des douleurs génitales;</li>
                      <li> Des écoulements via les organes génitaux.</li>
                    </ul>
                </p>
              </li>
              <li> La syphilis:
                <p>
                  C'est une infection bactérienne qui se transmet lors de rapports sexuels. Elle se manifeste par:
                  <ul>
                    <li> Une perte de poids;</li>
                    <li> Des démangeaisons;</li>
                    <li> Des éruptions cutanées;</li>
                    <li> Des ulcères ou des sécrétions vaginales indolores;</li>
                    <li> Un mal de gorge;</li>
                    <li> Une inflammation de la paroi rectale.</li>
                  </ul>
                </p>
              </li>
              <li> La toxoplasmose:
                <p>
                  Se transmettant par des excréments de chat ou des aliments contaminés, il provoque généralement:
                  <ul>
                    <li> Des douleurs musculaires;</li>
                    <li> De la fatigue;</li>
                    <li> De la fièvre;</li>
                    <li> Des maux de tête.</li>
                  </ul>
                </p>
              </li>
              <li> La rubéole:
                <p>
                  Ayant un vaccin préventif, elle se propage généralement par voie respiratoire ou par contact direct avec la salive ou le mucus d'une personne infectée. Ses symptômes les plus courants sont:
                  <ul>
                    <li> L'inconfort physique ou de la fièvre;</li>
                    <li> Les maux de tête;</li>
                    <li> Le nez qui coule;</li>
                    <li> Les yeux rouges;</li>
                    <li> Les éruptions cutanées rouges.</li>
                  </ul>
                </p>
              </li>
              <li> L'herpès virale:
                <p>
                  Il cause des lésions contagieuses, le plus souvent autour de la bouche ou sur les parties génitales.
                </p>
              </li>
            </ul>
          </p>
        )
      },
      {
        name: "body_2",
        title: "Examens médicaux en immuni-sérologie",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Selon la maladie qu'on veut diagnostiquer, on peut procéder à plusieurs examens, tous disponibles chez Crystal Labo:
            <ul>
              <li> La clamydia IgG et IgM:
                <p>
                  Il permet de diagnostiquer la chlamydia.
                </p>
              </li>
              <li> L'Hépatite B et C:
                <p>
                  Il permet de diagnostiquer l'hépatite.
                </p>
              </li>
              <li> La toxo IgG et IgM:
                <p>
                  Il permet de diagnostiquer la toxoplasmose.
                </p>
              </li>
              <li> La rubéole IgG et IgM:
                <p>
                  Il permet de diagnostiquer la rubéole.
                </p>
              </li>
              <li> L'herpès 1 et 2:
                <p>
                  Il permet de diagnostiquer l'herpès.
                </p>
              </li>
              <li> ASLO (Anti StreptoLysines O):
                <p>
                  Il permet de diagnostiquer une infection à streptocoques.
                </p>
              </li>
              <li> CRP ( Protéine C Réactive ):
                <p>
                  Il permet de détecter des inflammations dans l'organisme.
                </p>
              </li>
              <li> FR (Facteur Rhumatoïde):
                <p>
                  Il permet de détecter des inflammations et dommages au niveau des articulations du corps.
                </p>
              </li>
              <li> VIH:
                <p>
                  Il permet de diagnostiquer le SIDA.
                </p>
              </li>
              <li> Anti-Corps anti HBs, HBe, HBc, HCv:
                <p>
                  Il permet de diagnostiquer les hépatites.
                </p>
              </li>
              <li> Widal:
                <p>
                  Il permet de diagnostiquer les fièvres typhoïde et paratyphoïde.
                </p>
              </li>
              <li> TPHA/VDRL ( Treponema Pallidum Hemagglutinations Assay /Venereal Disease Research Laboratory);
                <p>
                  Il permet de diagnostiquer la syphilis.
                </p>
              </li>
            </ul>
          </p>
        )
      },
      {
        name: 'conclu',
        title: 'Conseil du médécin',
        title_id: "parisotology-conclu",
        sub: 0,
        content: (
          <p>
            Renseignez-vous toujours auprès d'un médecin avant de faire un examen médical.
          </p>
        )
      }
    ],
    articlePub : (<span>Besoin d'assistance ? Contactez-nous ou prenez un rendez-vous.</span>)
  }

export default content