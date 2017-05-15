function PortfolioController($state) {
  var controller = this;

  controller.portfolioData = [
    {
      title: 'Connect 4',
      titleName: 'portfolio-connect4',
      img: '',
      desc: '',
      link: 'https://jcolairo-sg-project-1.herokuapp.com/'
    },
    {
      title: 'Find your favourite Movie',
      titleName: 'portfolio-movies',
      img: '',
      desc: '',
      link: 'https://users-movie-mvc.herokuapp.com/'
    },
    {
      title: 'Find crime in your area',
      titleName: 'portfolio-police',
      img: '',
      desc: '',
      link: 'https://james-sg-project-3.herokuapp.com/'
    }
  ];
}

angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
