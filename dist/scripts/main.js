_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

var Todo = Backbone.Model.extend({
  Task: $('form').on('submit', function (event) {
    event.preventDefault();
    var new_entry = $('#input').val();
    $('#list').append('<li><input type="checkbox" class="checkbox" />' +new_entry +'</li>');
    $('#input').val('');
  })
});

var Todos = Backbone.Collection.extend({
  model: Todo
});


var CompleteView = Backbone.View.extend({
  tagName: 'li',

  render: $('#list').on('click', 'input.checkbox', function (event) {
    // var li = this
    var li = $(this).closest('li');
    // console.log(this);

    if (this.checked) {
      $('#completelist').append('<li>' + li.text() + '</li>')
      li.hide();
    }

  })
});
