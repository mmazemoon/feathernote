FeatherNote.Views.NotesIndex = Backbone.View.extend({

  template: JST['notes/index'],

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({notes: this.collection});
    this.$el.html(content);
    return this;
  }

});
