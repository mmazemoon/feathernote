// FeatherNote.Views.NotebookShow = Backbone.CompositeView.extend({
//
//   events: {
//     "click li.notebook-name-sidebar": "addMyView"
//   },
//
//   template: JST['notebooks/show'],
//
//   initialize: function(){
//     this.listenTo(this.model, "sync", this.render);
//   },
//
//   render: function(){
//     var content = this.template(notes = this.model.notes());
//     this.$el.html(content);
//     return this;
//   }
//
// });
