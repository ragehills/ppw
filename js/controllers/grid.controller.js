angular
  .module('PortfolioApp',['ngMaterial', 'angular-loading-bar', 'ngAnimate'])
  .controller('gridListDemoCtrl', function($scope, cfpLoadingBar) {

    this.tiles = buildGridModel({
      icon : "",
      title: "",
      background: ""
    });

    function buildGridModel(tileTmpl){

      var it, results = [ ];

      for (var j=0; j<11; j++) {

        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        it.title = it.title + (j+1);
        it.span  = { row : 1, col : 1 };

        switch(j+1) {
          case 1:
            it.background = "red";
            it.span.row = it.span.col = 2;
            break;

          case 2: 
            it.background = "green";         
            break;
          
          case 3: 
            it.background = "darkBlue";      
            break;
          
          case 4:
            it.background = "blue";
            it.span.col = 2;
            break;

          case 5:
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;

          case 6: 
            it.background = "pink";
            it.span.col = 2;
            break;

          case 7: 
            it.background = "grey";
            it.span.col = 2;
            break;

          case 8: 
            it.background = "purple";        
            break;
            
          case 9: 
            it.background = "deepBlue";      
            break;
        }
        results.push(it);
        cfpLoadingBar.complete();
      }
      return results;
    }
  })