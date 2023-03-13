import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Bactériologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Bactériologie",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            La bactériologie est l'étude des bactéries pouvant être à l'origine de parhologies. Elle permet d'isoler et/ou de caractériser une ou des bactéries pouvant être responsable de la pathologie suspectée. Pour cela, on prélève au sujet des liquides biologiques ou des tissus (selles, urines, etc...) pour les analyser en laboratoire. 
          </p>
        )
      },
      {
        name: "body_1",
        title: "Infections bactériologiques",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Il s'agit du :
            <ul>
              <li id='cervicite-bacteriologie' >La cervicite:
                <DivInLi>
                  <ImgInLi src='/cervicite.jpg' alt='cervicite' />
                  <p>
                    C'est une inflammation du col de l'utérus. Elle est caractérisée par : 
                    <ul>
                      <li> Des saignements vaginaux;</li>
                      <li> Des émissions de flux abondant et malodorant;</li>
                      <li> Des sensations de malaises;</li>
                      <li> Des envies fréquentes d'uriner.</li>
                    </ul>
                  </p>
                </DivInLi>
              </li>
              <li>L'urétrite:
                <DivInLi>
                  <p>
                    C'est une inflammation du col de l'urètre chez l'homme. Ce canal, qui transporte l'urine depuis la vessie jusqu'à l'extérieur de l'organisme, devient alors irrité et se gonfle.
                  </p>
                </DivInLi>
              </li>
              <li> Les gastrites:
                <DivInLi>
                  <p>
                    C'est une inflammation de la paroi de l'estomac. Les symptômes fréquents sont: 
                    <ul>
                      <li>Des douleurs dans la partie supérieure de l'abdomen; </li>
                      <li> Des nausées; </li>
                      <li> Des vomissements.</li>
                    </ul>
                    Mais il arrive que certains cas ne présentent pas de symptômes.
                  </p>
                </DivInLi>
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
            Selon la maladie qu'on veut diagnostiquer, on peut procéder à plusieurs examens, tous disponibles chez Crystal Labo:
            <ul>
              <li>PCV+ATB( Prélèvement cervico-vaginal et AnTi Biogramme):
                <DivInLi>
                  Il permet le diagnostic des cervicites.
                </DivInLi>
              </li>
              <li>PU+ATB (Prélèvement urétral et AnTi-Biogramme):
              <p>
                Il permet de diagnostiquer les urétrites
              </p>
              </li>
              <li>ECBU+ATB ( Examen Cytobacteriologique de l’Urine et AnTi-Biogramme):
                <p>
                  Ici, un prélèvement des urines est nécessaire pour diagnostiquer des possibles maladies.
                </p>
              </li>
              <li> LCR+ATB ( Liquide Céphalo-rachidien et AnTi-Biogramme)
              </li>
              <li> La coproculture:
                <p>
                  C'est la culture des selles pour identifier des agents pathogènes.
                </p>
              </li>
              <li> La spermoculture:
                <p>
                  C'est la recherche des bactéries dans le sperme
                </p>
              </li>
              <li> Mycoplasme + ATB(AnTi-Biogramme):
                <p>
                  Ce test permet d'identifier la présence des mycoplasmes dans l'organisme qui causent généralement chez l'homme' des envies fréquentes d'uriner , des sensations de brûlures lors de la miction et l'écoulement du pénis.
                </p>
              </li>
              <li>Hémoculture + ATB (AnTi-Biogramme):
                <p>
                  Sur prescription médicale, cet examen permet d'identifier la présence de bactéries pathogènes dans le sang.
                </p>
              </li>
              <li> Les squames + ATB ( AnTi-Biogramme):
              <p>
                Les squames sont de petites lamelles de peau morte qui se retirent spontanément de l'épiderme. Elles sont souvent prélevées pour des examens médicaux.
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