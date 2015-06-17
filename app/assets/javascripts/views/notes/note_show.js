FeatherNote.Views.NoteShow = Backbone.View.extend({

  template: JST['notes/show'],

  events: {
    "blur form.note-title, form.note-body": "updateNote"
  },

  initialize: function (){
    this.listenTo(this.model, "change sync", this.render);
    // this.listenTo(this.collection, "change sync");
  },

  // setNoteModel: function(){
  //   if(!this.model){
  //     this.model = FeatherNote.notes.at(0);
  //   }
  //   this.render();
  // },

  render: function(){
    var content = this.template({ note: this.model, notebooks: this.collection });
    this.$el.html(content);
    return this;
  },

  updateNote: function(event){
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON();
    this.model.save(attr, {
      wait: true
    });
  }

});
