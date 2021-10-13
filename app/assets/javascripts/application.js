//= require rails-ujs
//= require jquery
//= require materialize
//= require turbolinks
//= require_tree

$( document ).on('turbolinks:load', function() {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('#fade-out-target').fadeOut(4000);
})
