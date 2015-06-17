FeatherNote.Views.NotesIndex = Backbone.View.extend({

  // this.model = activeNotebook

  template: JST['notes/index'],

  initialize: function(){
    this.listenTo(this.collection, "add sync change", this.render);
  },

  render: function(){
    var content = this.template({notes: this.collection});
    this.$el.html(content);
    return this;
  }

});
