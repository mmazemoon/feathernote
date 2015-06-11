FeatherNote.Views.NoteShow = Backbone.View.extend({

  template: JST['notes/show'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({note: this.collection.first()});
    this.$el.html(content);
    return this;
  }

});
