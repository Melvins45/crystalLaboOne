import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Hormonologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Hormonologie",
        title_id: "toxicology-intro",
        sub: 0,
        content: (
          <p>
            L'hormonologie est la science qui s’intéresse aux hormones, à leurs rôles dans l’organisme. 
          </p>
        )
      },
      {
        name: "body_1",
        title: "Maladies hormonales",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Ces maladies sont dues à des dérèglements hormonaux. On peut y citer:
            <ul>
              <li> Le diabète:
                <p>
                  Le diabète peut aussi être causé du fait d'un dérèglement hormonal, ici en l'occurence l'insuline responsable de la régulation du sucre dans l'organisme. Sa faible quantité dans l'organisme peut donc conduire au diabète(Il s'agit ici du diabète de type 2).
                </p>
              </li>
              <li> Le goitre:
                <DivInLi>
                  <ImgInLi src='/goitre.jpeg' alt='goitre' />
                  <p>
                    C'est un grossissement anormal de la glande en forme de papillon sous la pomme d'Adam.
                  </p>
                </DivInLi>
              </li>
              <li> L'hyperparathyroïdie:
                <p>
                  C'est la production anormalement élevée des hormones produites par les 4 petites glandes sous le cou. On peut noter comme symptômes:
                  <ul>
                    <li> Une fragilité des os;</li>
                    <li> Des calculs rénaux;</li>
                    <li> La fatigue;</li>
                    <li> La perte de poids;</li>
                    <li> Une faiblesse musculaire;</li>
                    <li> Des nausées;</li>
                    <li> Des sensations de fourmillement;</li>
                    <li> Une miction excessive.</li>
                  </ul>
                </p>
              </li>
              <li> L'hypothyroïdie:
                <p>
                  Ici, la glande thyroïdienne ne produit pas suffisamment d'hormones thyroïdiennes. Les principaux symptômes sont:
                  <ul>
                    <li> La fatigue;</li>
                    <li> Une sensibilitéau froid;</li>
                    <li> La constipation;</li>
                    <li> Une peau sèche;</li>
                    <li> Une prise de poidsinexpliquée;</li>
                    <li> Une faible fréquence cardiaque.</li>
                  </ul>
                </p>
              </li>
              <li> La thyroïdite:
                <p>
                  Il est dû à une altération inflammatoire de la glande thyroïde située sous le cou. Ses symptômes sont:
                </p>
                <ul>
                  <li> La fatigue à l'effort;</li>
                  <li> Une prise de poids inexpliquée;</li>
                  <li> Un visage bouffi;</li>
                  <li> Des doigts boudinés</li>
                  <li> La constipation;</li>
                  <li> Des douleurs articulaires;</li>
                  <li> Des sautes d'humeur;</li>
                  <li> Une intolérance au stress avec tachycardies(arrêts ou ralentissements cardiaques)</li>
                </ul>
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
            Selon la maladie qu'on veut diagnostiquer ou le test qu'on veut effectuer, on peut procéder à plusieurs examens :
            <ul>
              <li> Le test de grossesse</li>
              <li> Le Beta HCG quantitatif:
                <p> 
                  Ils 'agit d'un autre test de grossesse.
                </p>
              </li>
              <li> La testostérone:
                <p> 
                  En évaluant sa quantité dans l'organisme, il permet de déceler des problèmes de fécondités chez l'homme.
                </p>
              </li>
              <li> La prolactine:
                <p>
                  Ce test permet d'évaluer la quantité dans l'organisme de cette hormone qui, chez la femme, est responsable de la montée du lait.
                </p>
              </li>
              <li> L'œstradiol:
                <p>
                  Son examen permet de connaitre son taux dans l'organisme, qui est impliqué dans la régulation du cycle menstruel et aide à maintenir la grossesse.
                </p>
              </li>
              <li> La progestérone:
                <p>
                  Cette hormone féminine sert à préparer l'organisme à la grossesse. Son examen permet d'évaluer son taux.
                </p>
              </li>
              <li> LH/FSH/TSH/T3/T4
                <p> 
                  Ce sont des hormones liées aux problèmes de fécondité. Cette analyse permet d'avoir un bilan total de ces hormones pour directement avoir une réponse aux problèmes de fécondité.
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