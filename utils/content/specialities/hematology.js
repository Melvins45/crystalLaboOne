import {DivInLi, ImgInLi} from './'

const content = {
    title : 'Hématologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Hématologie",
        title_id: "virology-intro",
        sub: 0,
        content: (
          <p>
            L'hématologie est la science qui étudie le sang et ses maladies.
          </p>
        )
      },
      {
        name: "body_1",
        title: "Maladies hématologiques",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Il s'agit du :
            <ul>
              <li> La drépanocytose:
                <p>
                  C'est une maladie qui provoque la déformation et la dégradation des globules rouges. Ses symptômes comptent:
                  <ul>
                    <li>Des douleurs soudaines aux articulations;</li>
                    <li> Un faible taux d'oxygène dans l'organisme;</li>
                    <li> La fatigue,un inconfort physique ou des vertiges;</li>
                    <li> La présence de ang dans les urines;</li>
                    <li> La pâleur ou le retard de developpement.</li>
                  </ul>
                </p>
              </li>
              <li> Les anémies:
                <p> 
                  Dues à un manque ou un disfonctionnement des globules rouges, ses symptômes se manifestent par:
                  <ul>
                    <li> La fatigue, un inconfort physique ou des vertiges;</li>
                    <li> Une fréquence cardiaque élevée ou des palpitations;</li>
                    <li> Un essoufflement;</li>
                    <li> Les maux de tête;</li>
                    <li> Les ongles cassants ou pâleur.</li>
                  </ul>
                </p>
              </li>
              <li> Les thrombocytoses:
                <p>
                  Elle se caractérise par une production excessive de plaquettes sanguines par la moelle osseuse.
                  <ul>
                    <li> Les maux de tête et les étourdissements;</li>
                    <li> Une vision légèrement floue par moment;</li>
                    <li> Le saignement du tube digestif, de la peau, des yeux, des gencives ou des voies urinaires;</li>
                    <li> La douleur, la rougeur, les enflures et la chaleur aux pieds et aux jambes.</li>
                  </ul>
                </p>
              </li>
              <li> Les leucémies:
                <p>
                  Ce sont des cancers des tissus dont la fonction est de fabriquer les cellules du sang, y compris la moelle épinière. Elles empêchent ainsi le corps de lutter contre les infections. Ses symptômes peuvent comprendre:
                  <ul>
                    <li> Des douleurs au niveau de articulations et aux os;</li>
                    <li> La fatigue ou des vertiges;</li>
                    <li> La fièvre;</li>
                    <li> La perte d'appétit ou de poids;</li>
                    <li> Des essouflements;</li>
                    <li> La pâleur;</li>
                    <li> Les saignements du nez;</li>
                    <li> Les tâches rouges sur la peau.</li>
                  </ul>
                </p>
              </li>
              <li> La polyglobulie:
                <p> 
                  C'est une augmentation anormale de l'hémoglobine et du nombre de globules rouges dans le sang. Elles peuvent se manifester par: 
                  <ul>
                    <li> Une colorationrouge de la peau surtout au niveau du visage et les mains.</li>
                  </ul>
                </p>
              </li>
            </ul>
          </p>
        )
      },
      {
        name: "body_2",
        title: "Examens médicaux en hématologie",
        title_id: "bacteriology-intro",
        sub: 0,
        content: (
          <p>
            Selon la maladie à diagnostiquer ou le test à effectuer, on peut procéder à plusieurs examens, tous disponibles au Crytal Labo :
            <ul>
              <li> La NFS ( Numération Formule Sanguine):
                <p> 
                  Cette analyse permet de connaître le nombre de globules rouges ainsi que leur nature présents dans le sang. Il permet ainsi de diagnostiquer les leucémies, la thrombocytose et la polyglobulie.
                </p>
              </li>
              <li> La VS (Vitesse de Sédimentation):
                <p>
                  C'est un test qui mesure la vitesse à laquelle les globules rou ges chutent dans un tube de sang placé à la verticale. Il permet de détecter une inflammation ou une infection.
                </p>
              </li>
              <li> La TP/TCK ( Taux de prothrombine/ Temps de Céphaline Kaolin)
                <p>
                  Il permet d'évaluer globalement l'activité des facteurs de la coagulation de la voie intrinsèque et d'en déceler les problèmes. 
                </p>
              </li>
              <li>Groupe Sanguin-Rhésus/Confirmation: 
                <p>
                  C'est le test du groupe sanguin et du facteur Rhésus.
                </p>
              </li>
              <li> Charge virale:
                <p>
                  Mesurer cette charge permet d'évaluer la sévérité de l'infection et l'efficacité des traitements contre le VIH.
                </p>
              </li>
              <li> l'électrophorèse d’hémoglobine:
                <p>
                  Elle sert à détecter les anomalies de forme et de concentration de l'hémoglobine.
                </p>
              </li>
              <li> Le test d'emmel
                <p>
                  Il révèle la présence de l'hémoglobine drépanocytaire S.
                </p>
              </li>
              <li> L'électrophorèse des protéines:
                <p>
                  Elle permet de détecter certains types d'anémies.
                </p>
              </li>
              <li> Le TC ( Temps de coagulation):
                <p>
                  Son intérêt principal est de diagnostiquer une fibrinolyse aiguë, mais ses résultats peuvent servir en complément à d'autres analyses.
                </p>
              </li>
              <li> Le TS ( Temps de Saignement):
                <p>
                  Permettant de mesurer le temps nécessaire à l'arrêt du saignement après incision superficielle de la peau, ses résultats sont aussi utilisés en complément d'autres analyses.
                </p>
              </li>
              <li> Le Coombs direct/indirect:
                <p>
                  Encore appelé test à l'antiglobuline, il permet de mettre un anti-corps en évidence.
                </p>
              </li>
              <li> Les D-dimeres
                <p>
                  Ces protéines sont impliquées dans la coagulation du sang. Ce test permet alors de décéler des problèmes de coagulation.
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