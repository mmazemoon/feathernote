FeatherNote.Views.Searchbar = Backbone.View.extend({

  template: JST['static_pages/searchbar'],

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
