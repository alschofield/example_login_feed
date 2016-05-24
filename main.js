function createSigninTemplate (element, context) {
  var source = element.html();
  var template = Handlebars.compile(source);
  var context = context;
  var html = template(context);
  $('#signin-div').append(html);
  $('#done-button').on('click', function () {
    $('#signin-div').addClass('feed-div');
    $('input').remove();
    $('#mountain-icon').remove();
    $('.line').remove();
    $('#done-button').addClass('transform-done');
    $('#done-button').text('+');
    var source = $('#nav-template').html();
    var template = Handlebars.compile(source);
    var context = {};
    var nav = template(context);
    $('#element').append(nav);
    window.setTimeout(function() {
      var second_source = $('#feed-template').html();
      var second_template = Handlebars.compile(second_source);
      var second_context = {post: [{color: 'red'}, {color: 'orange'}, {color: 'yellow'}, {color: 'blue'}, {color: 'lightblue'}, {color: 'aqua'}, {color: 'green'}, {color: 'pink'}, {color: 'gold'}]};
      var feed = second_template(second_context);
      $('#signin-div').append(feed);
    }, 200);
  });
}

$(document).ready(function() {
  $('#signup-button').on('click', function() {
    $('#signin-div').addClass('transform-signin');
    $('#mountain-icon').addClass('moveup-img')
    $('#signup-button').remove();
    window.setTimeout(createSigninTemplate, 300, $('#signin-template'), {});
  });
})