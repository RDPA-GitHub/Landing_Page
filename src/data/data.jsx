// DataNavbar

export const DataNavbar = ['Home', 'About', 'Services', 'Contact'];
//Data Jumbotron
export const Principal = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada purus eget libero lacinia dapibus. Praesent volutpat sem sed ligula maximus, a sollicitudin urna auctor. Nam elementum tellus nec tortor lobortis, nec pellentesque massa auctor. Nunc lacus eros, porta placerat tristique viverra, imperdiet vitae nibh. In hac habitasse platea dictumst. Integer turpis ex, egestas aliquam posuere id, lobortis semper lectus.'

// DataCard
const Parrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada purus eget libero lacinia dapibus. Praesent volutpat sem sed ligula maximus, a sollicitudin urna auctor.', Dimensiones = '500/325';

export const CardData = [
  {
    id: '1',
    Title: 'Titulo',
    body: Parrafo, 
    avatar: `https://picsum.photos/id/${Math.floor((Math.random()*800)+300)}/${Dimensiones}` 
  },
  {
    id: '2',
    Title: 'Titulo',
    body: Parrafo, 
    avatar: `https://picsum.photos/id/${Math.floor((Math.random()*800)+300)}/${Dimensiones}` 
  },
  {
    id: '3',
    Title: 'Titulo',
    body: Parrafo, 
    avatar: `https://picsum.photos/id/${Math.floor((Math.random()*800)+300)}/${Dimensiones}` 
  },
  {
    id: '4',
    Title: 'Titulo',
    body: Parrafo, 
    avatar: `https://picsum.photos/id/${Math.floor((Math.random()*800)+300)}/${Dimensiones}` 
  }
];

