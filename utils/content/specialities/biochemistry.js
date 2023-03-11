import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Biochimie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Biochimie",
        title_id: "biochemistry-intro",
        sub: 0,
        content: (
          <p>
            La biochimie est l’analyse des molécules contenues dans les fluides corporels. Elle permet de diagnostiquer et de suivre l’évolution d’une maladie et l’efficacité d’un traitement.
          </p>
        )
      },
      {
        name: "body_1",
        title: "Maladies métaboliques",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            La biochimie permet de diagnostiquer les maladies métaboliques comme :
            <ul>
              <li> Le diabète</li>
              <li> L'hypertension artérielle</li>
              <li> La malnutrition </li>
              <li> L'obésité</li>
            </ul>
            Elle permet de relever aussi certains manques comme les manques en calcium et en fer.
          </p>
        )
      },
      {
        name: "body_2",
        title: "Examens médicaux en biochime",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Selon la maladie qu'on veut diagnostiquer, on peut procéder à plusieurs examens :
            <ul>
              <li> La glycémie
                <p>
                  Il permet d'obtenir le taux de sucre dans le sang.
                </p>
              </li>
              <li> L'ionogramme complet
                <p>
                  Il permet de doser des paramètres tels que le fer, le calcium, le magnésium, le sodium, le potassium et autres vitamines dans le corps.
                </p>
              </li>
              <li> L'hémoglobine glyquée(HbA1c)
                <p>
                  C'est un test fait pour évaluer l'équilibre de la glycémie sur 3 mois.
                </p>
              </li>
              <li> Le bilirubine conjuguée et totale
                <p>
                  Il permet d'explorer le foie et la bile.
                </p>
              </li>
              <li> L'acide urique
                <p>
                  Il permet de diagnostiquer la goutte ou une insuffisance rénale.
                </p>
              </li>
              <li> Le profil lipidique
                <p>
                  Il permet d'évaluer le cholestérol total, le cholestérol HDL, le cholestérol LDL et les triglycerides.
                </p>
              </li>
              <li> L'albumine/ Protéine totale
                <p>
                  Il permet d'évaluer les protéines en prélevant le sang.
                </p>
              </li>
              <li> L'albumine/Sucre
                <p>
                  Il permet d'évaluer les sucres en prélevant les urines.
                </p>
              </li>
              <li>L'urée/Créat
                <p>
                   Il permet d'explorer le rein.
                </p>
              </li>
              <li> La transaminase ( ASAT/ ALAT ou SGPT/SGOT )
                <p>
                  Il permet d'explorer le coeur et le foie.
                </p>
              </li>
              <li> La gamma Gt 
                <p>
                  Il permet d'explorer le foie.
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