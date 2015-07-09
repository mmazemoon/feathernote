Feathernote.Views.NotesIndex = Backbone.View.extend({

  className: "bb-notes-list",
  template: JST['notes/index'],

// options: all, id, collection, model
  initialize: function(options){
    this.all = options.all || false;
    this.id = options.id || null;
    this.notebook = options.notebook || null;
    this.listenTo(this.collection, "add remove change sync", this.render);
  },

  render: function (){
    var content;
    // var fragment = "notes/";
    if(this.all){
      content = this.template({ notes: this.collection, all: true, notebook: this.notebook });
    } else {
      content = this.template({ notes: this.collection, all: false, notebook: this.notebook });
    }

    this.$el.html(content);
    return this;
  }

});

// when would it have a model
// when would it have an id
