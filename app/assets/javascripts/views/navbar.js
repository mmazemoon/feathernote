Feathernote.Views.Navbar = Backbone.View.extend({

  template: JST['static_pages/navbar'],

  className: "abcd",

  events: {
    "submit form" : "logOut"
  },

  initialize: function (){
    this.currentUser = Feathernote.currentUser;
  },

  render: function(){
    var content = this.template({currentUser: currentUser});
    this.$el.html(content);
    return this;
  }

});
