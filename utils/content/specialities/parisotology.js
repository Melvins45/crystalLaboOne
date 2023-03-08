const content = {
    title : 'Parisotologie',
    articleBreakPoints : [
      {
        name: "intro",
        title: "Docteur, c'est quoi la parisotologie ? ",
        title_id: "parisotology-intro",
        sub: 0,
        content: (
          <p>
            La parasitologie est l'étude des parasites, de leurs hôtes et de leurs interactions mutuelles. En tant que discipline biologique, les enjeux de la parasitologie ne sont pas tant déterminés par l'organisme ou l'environnement en question, mais par les modes de vie et les interactions durables entre parasites et leurs hôtes (si elles n'étaient pas durable, l’hôte ou le parasite disparaitrait).[pas clair] Elle est donc à la croisée d'autres disciplines telles que la biologie cellulaire, la bio-informatique, la biologie moléculaire, l'immunologie, la génétique et l'écologie, l'écoépidémiologie.
          </p>
        )
      },
      {
        name: 'body',
        title: "Ce qu'il faut savoir sur la parisotologie",
        title_id: "parisotology-body",
        sub: 0,
        content: (
          <p>
            La parasitologie médicale étudie les maladies de l'homme provoquées directement ou indirectement par les parasites. Le contexte biologique qui entraîne l'intervention de ces agents bien particuliers éclaire en grande partie leur action et mérite à ce titre qu'on en rappelle les principaux traits.
          </p>
        )
      },
      {
        name: 'body_1',
        title: 'Maladies parasitaires et synptômes',
        title_id: "parisotology-body_1",
        sub: 1,
        parent: 'body',
        content: (
          <p>
            Il s'agit du :
            <ul>
              <li>Le paludisme</li>
              <li>La maladie du sommeil(trypanosomiase humaine africaine)</li>
            </ul>
          </p>
        )
      },
      {
        name: 'body_2',
        title: 'Ce que Crystal Labo propose en terme de prévention des maladies parasitaires',
        title_id: "parisotology-body_2",
        sub: 1,
        parent: 'body',
        content: (
          <p>
            Nous vous proposons des examens vous permettant d'identifier ces différentes. Nous pouvons ainsi citer: 
            <ul>
              <li>La goutte epaisse</li>
              <li>La coprologie</li>
              <li>La recherche des microfillaires cutanée et sanguicoles</li>
            </ul>
          </p>
        )
      },
      {
        name: 'conclu',
        title: 'Pour conclure',
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