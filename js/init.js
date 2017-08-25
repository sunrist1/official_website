(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.modal').modal();

    var options = [
      {selector: '#staggered_first', offset: 200, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      // {selector: '#staggered-test', offset: 50, callback: function(el) {
      //   Materialize.showStaggeredList($(el));
      // } },
    ];

    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space