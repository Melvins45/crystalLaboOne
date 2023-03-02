const content = {
  title : 'Article',
  articleBreakPoints : [
    {
      name: 'intro',
      title: 'Intro',
      sub: 0,
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
        </p>
      )
    },
    {
      name: 'body',
      title: 'Corps',
      sub: 0,
      content: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
        </p>
      )
    },
    {
      name: 'body_1',
      title: 'Corps_1',
      sub: 1,
      parent: 'body',
      content: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
        </p>
      )
    },
    {
      name: 'body_2',
      title: 'Corps_2',
      sub: 1,
      parent: 'body',
      content: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
        </p>
      )
    },
    {
      name: 'conclu',
      title: 'Conclu',
      sub: 0,
      content: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
        </p>
      )
    }
  ],
  articlePub : (<span>Besoin d'assistance ? Contactez-nous ou prenez un rendez-vous.</span>)
}

export default content