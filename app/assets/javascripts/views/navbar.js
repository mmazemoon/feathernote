FeatherNote.Views.Navbar = Backbone.View.extend({

  template: JST['static_pages/navbar'],

  events: {
    "submit form" : "logOut"
  },

  initialize: function (){
    this.currentUser = FeatherNote.currentUser;
  },

  render: function(){
    var content = this.template({currentUser: currentUser});
    this.$el.html(content);
    return this;
  }

});
