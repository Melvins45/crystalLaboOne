import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Imagerie Médicale',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Imagerie Médicale",
        title_id: "medical_imaging-intro",
        sub: 0,
        content: (
          <p>
            L'imagerie médicale regroupre différentes techniques d'exploration du corps humain permettant des images 2D et 3D de nos structures et organes internes. Elle compte donc plusieurs branches mais ici, à Crystal Labo, nous nous appuyons plus sur l'échographie.
          </p>
        )
      },
      {
        name: "body_1",
        title: "Types d'échographies",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Au Crystal Labo, vous pourrez trouver:
            <ul>
              <li> L'échographie pelvienne:
                <DivInLi>
                  <ImgInLi src ='/echographie-pelvienne.jpeg' alt0'echographie-pelvienne' />
                  <p>
                    Elle se fait au niveau de la ceinture pelvienne(bas-ventre).
                  </p>
                </DivInLi>
              </li>
              <li> L'échographie endo-vaginale</li>
              <li> L'échographie cardiaque</li>
              <li> L'échographie thyroïdienne:
                <p>
                  Elle se fait au niveau du cou.
                </p>
              </li>
              <li>L'échographie mammaire
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