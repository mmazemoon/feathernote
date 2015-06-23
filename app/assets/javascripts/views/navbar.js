Feathernote.Views.Navbar = Backbone.View.extend({

  template: JST['static_pages/navbar'],

  className: "bb-navbar",

  events: {
    "click .fa-sign-out": "logOut"
    },

  initialize: function (){
    this.currentUser = Feathernote.currentUser;
  },

  logOut: function(){
    $("#log-out").submit();
  },

  render: function(){
    var content = this.template({currentUser: currentUser});
    this.$el.html(content);
    return this;
  }

});
