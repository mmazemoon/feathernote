Feathernote.Views.NotesIndex = Backbone.View.extend({

  className: "bb-notes-list",
  template: JST['notes/index'],

// options: all, id, collection, model
  initialize: function(options){
    this.all = options.all || false;
    this.id = options.id || null;
    this.listenTo(this.collection, "add remove change", this.render);
  },

  // refresh: function(){
  //   if (all){
  //     return this.render();
  //   }
  //   this.collection.fetch({ success:
  //     function(refreshedCollection, response, options){
  //       var notes = refreshedCollection.filter(function(model){
  //         if(model.notebook().id === Feathernote.activeNotebook.id){
  //           return true;
  //         }
  //       });
  //       this.collection = new Feathernote.Collections.Notes(notes);
  //       this.render();
  //     }.bind(this)
  //   });
  // },

  render: function (){

    var content;
    var fragment = "notes/";

    if(this.all){
      content = this.template({ notes: this.collection, all: true });
      if(this.id) {
        fragment = fragment.concat("all/" + this.id);
      } else {
        fragment = fragment.concat("all/" + this.collection.first().id);
      }
    } else {
      content = this.template({ notes: this.collection, all: false });
      fragment = fragment.concat(this.id);
    }

    if (this.all || this.id){
      Backbone.history.navigate(fragment);
    }

    this.$el.html(content);
    return this;
  }

});

// when would it have a model
// when would it have an id
