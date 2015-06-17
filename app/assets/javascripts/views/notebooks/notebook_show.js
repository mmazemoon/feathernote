FeatherNote.Views.NotebookShow = Backbone.CompositeView.extend({

  events: {
    "click li.notebook-name-sidebar": "addMyView"
  },

  template: JST['notebooks/show'],

  initialize: function(){
    this.addSubview(".notes-list-content", this.subView());
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var content = this.template;
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  subView: function(){
    if(this._subView){
      this.removeSubview(".notes-list-content", this._subView);
    }
    this._subView = new FeatherNote.Views.NotesIndex({ collection: this.model.notes() });
    return this._subView; // an object
  }

});
