import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Parisotologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Parisotologie",
        title_id: "Définition",
        sub: 0,
        content: (
          <p>
            La parasitologie est l'étude des parasites, de leurs hôtes et de leurs interactions mutuelles. En tant que discipline biologique, les enjeux de la parasitologie ne sont pas tant déterminés par l'organisme ou l'environnement en question, mais par les modes de vie et les interactions durables entre parasites et leurs hôtes (si elles n'étaient pas durable, l’hôte ou le parasite disparaitrait). Elle est donc à la croisée d'autres disciplines telles que la biologie cellulaire, la bio-informatique, la biologie moléculaire, l'immunologie, la génétique et l'écologie, l'écoépidémiologie.
          </p>
        )
      },
      {
        name: 'body_1',
        title: 'Maladies parasitaires et synptômes',
        title_id: "parisotology-body_1",
        sub: 0,
        content: (
          <p>
            Il s'agit du :
            <ul>
              <li> L'onchocercose:
                <DivInLi>
                <ImgInLi src='/onchocercose.jpeg' alt='onchocercose' />
                <p>
                  Cette maladie se caractérise par:
                  <ul>
                    <li> Une vue déficiente, incapable de différencier certaines couleurs; </li>
                    <li> Des bosses sous la peau;</li>
                    <li> Des éruptions cutanées;</li>
                    <li> Des cicatrices;</li>
                    <li> Des terribles démangeaisons.</li>
                  </ul>
                </p>
                </DivInLi>
              </li>
              <li> La schistosomiase:
                <DivInLi>
                  <p>
                    Encore appelée bilharziose, ses symptômes comprennent:
                    <ul>
                      <li> Une fièvre;</li>
                      <li> Des frissons;</li>
                      <li> De la toux;</li>
                      <li> Des nausées;</li>
                      <li> Des douleurs abdominales et musculaires;</li>
                      <li> Des éruptions cutanées.</li>
                    </ul>
                  </p>
                </DivInLi>
              </li>
              <li> L'amibiase intestinale:
                <DivInLi>
                  <p>
                    Les personnes atteintes peuvent présenter des symptômes tel que:
                    <ul>
                      <li> Les douleurs abdominales;</li>
                      <li> La diarrhée et du sang dans les selles;</li>
                      <li> La fièvre;</li>
                      <li> La perte d'appétit;</li>
                      <li> La perte de poids.</li>
                    </ul>
                  </p>
                </DivInLi>
              </li>
              <li>Le paludisme</li>
            </ul>
          </p>
        )
      },
      {
        name: 'body_2',
        title: 'Les examens en parisotologie',
        title_id: "parisotology-body_2",
        sub: 0,
        content: (
          <p>
            Nous vous proposons des examens vous permettant d'identifier ces différentes maladies. Nous pouvons ainsi citer: 
            <ul>
              <li>La goutte épaisse:
              <DivInLi>
                <p>
                  C'est un test utilisé pour diagnostiquer le paludisme.
                </p>
              </DivInLi>
              </li>
              <li>La coprologie (examen des selles) </li>
              <li>La recherche des microfillaires cutanée et sanguicoles</li>
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
            Les maladies parasitaires sont néfastes à la santé de l'homme et il faut les prévenir très rapidement. Il est donc important de faire des examens dès que vous vous doutez de quelque chose parce que votre santé est primordiale. 
          </p>
        )
      }
    ],
    articlePub : (<span>Besoin d'assistance ? Contactez-nous ou prenez un rendez-vous.</span>)
  }

export default content