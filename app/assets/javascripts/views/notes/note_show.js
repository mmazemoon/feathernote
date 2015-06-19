FeatherNote.Views.NoteShow = Backbone.View.extend({

  template: JST['notes/show'],

  events: {
    "blur form.note-title, form.note-body": "updateNote",
    "submit form.note-title, form.note-body": "updateNote",
    "keyup form.note-title, form.note-body": "handleInput"
  },

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render);
},

  handleInput: function(event) {
    this.debounced = this.debounced || _.debounce(this.saveNote, 500);
    $('#save-status').text('Saving...');
    this.debounced(event);
  },

  render: function(){
      var content = this.template({
        note: this.model,
        notebooks: this.collection
      });
      this.$el.html(content);
    return this;
  },

  setAttributes: function(event){
    var attr = $(event.currentTarget).serializeJSON();
    this.model.set(attr);
  },

  saveNote: function (event) {
    console.log("saving");
    this.setAttributes(event);
    this.model.save({}, {
      success: function() {
        $("#save-status").text("All changes saved to Feathernote");
      },
    });
  },

  updateNote: function(event){
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON();
    this.model.save(attr, {
      wait: true
    });
  }

});
