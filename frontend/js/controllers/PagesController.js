// Generated by CoffeeScript 1.6.2
(function() {
  define('controllers/PagesController', ['views/pages/main', 'views/pages/submit', 'views/pages/editr', 'views/pages/support', 'views/pages/how'], function(main, submit, editr, support, how) {
    var Controller;

    Controller = (function() {
      function Controller() {
        this.main = main;
        this.submit = submit;
        this.editr = editr;
        this.support = support;
        this.how = how;
      }

      return Controller;

    })();
    return new Controller;
  });

}).call(this);
