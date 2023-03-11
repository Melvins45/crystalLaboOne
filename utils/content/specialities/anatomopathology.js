import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Anatomopathologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Anatomopathologie",
        title_id: "anatomopathology-intro",
        sub: 0,
        content: (
          <p>
            L' anatomopathologie est une spécialité médicale qui consiste à examiner les organes, les tissus ou les cellules pour repérer et analyser les différentes lésions liées à une maladie.
          </p>
        )
      },
      {
        name: "body_1",
        title: "Maladies cancéreuses",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            On y distingue surtout les cancers. Mais les plus courants sont :
            <ul>
              <li> Le cancer du poumon:
                <DivInLi>
                  <ImgInLi src='/cancer-poumon.jpeg' alt='cancer-poumon' />
                  <p>
                    Les personnes atteintes peuvent présenter des symptômes comme:
                    <ul>
                      <li> Des douleurs au niveau des côtes et de la poitrine;</li>
                      <li> Une toux sévère avec du sang;</li>
                      <li> Des essoufflements et des infections respiratoires;</li>
                      <li> Une perte d'appétit;</li>
                      <li> Une perte du poids</li>
                      <li> Une fatigue</li>
                    </ul>
                  </p>
                </DivInLi>
              </li>
              <li> Le cancer du col de l'utérus:
                <p> Certaines personnes peuvent ne manifester aucun symptôme. Dans quelques cas, on peut observer:
                  <ul>
                    <li>Des douleurs au niveau du bassin;</li>
                    <li> Des règles anormales ou orrégulières;</li>
                    <li> Des saignements vaginaux anormaux;</li>
                    <li> Une fatigue;</li>
                    <li> Des nausées;</li>
                    <li> Une perte de poids.</li>
                  </ul>
                </p>
              </li>
              <li> Le cancer du sein:
                <p>
                  La plupart des cas peut ne pas présenter de symptômes. Mais il peut toutefois s'y manifester:
                  <ul>
                    <li>Des grosseurs et un inconfort au niveau de la poitrine;</li>
                    <li> Des mammelons invertis;</li>
                    <li> Des écoulements mammaires.</li>
                  </ul>
                </p>
              </li>
            </ul>
          </p>
        )
      },
      {
        name: "body_2",
        title: "Examens médicaux en bactériologie",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Selon la maladie qu'on veut diagnostiquer, on peut procéder à plusieurs examens :
            <ul>
              <li> Le FCV( Frottis cervico-vaginal):
              <p> Il permet de diagnostiquer le cancer du col de l'utérus</p>
              </li>
              <li>Ponction mammaire ou biopsie mammaire:
                <p> Il permet de diagnostiquer le cancer du sein.</p>
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