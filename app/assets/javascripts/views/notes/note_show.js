Feathernote.Views.NoteShow = Backbone.View.extend({

  template: JST['notes/show'],

  events: {
    "blur form.note-title, form.note-body": "updateNote",
    "save form.note-title, form.note-body": "updateNote",
    "submit form.note-title, form.note-body": "updateNote",
    "keyup form.note-title, form.note-body": "handleInput",
    "click .delete-note": "deleteNote"
    },

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render);
},

  deleteNote: function(){
    alert("Are you sure you want to destroy?");
    this.model.destroy();
  },

  handleInput: function(event) {
    this.debounced = this.debounced || _.debounce(this.saveNote, 500);
    $('#save-status').text('Saving... ');
    this.debounced(event);
  },

  render: function(){
      var content = this.template({
        note: this.model,
        notebooks: this.collection
      });
      this.$el.html(content);

      var that = this;
      tinymce.remove();
      tinyMCE.init({
        forced_root_block: "",
        menubar: false,
        selector: '#note-body',
        plugins: ["textcolor colorpicker preview print wordcount link image"],
        toolbar: "preview print | undo redo | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        setup: function (editor) {
                editor.on('keyup',
                  function (event) {
                    var content = tinyMCE.activeEditor.getContent();
                    $("#note-body").html(content);
                    $("#note-body").trigger("keyup");
                  });
                editor.on("blur",
                  function(event){
                    var content = tinyMCE.activeEditor.getContent();
                    $("#note-body").html(content);
                    $("#note-body").trigger("keyup");
                  });
              }
      });

    return this;
  },

  saveNote: function (event) {
    var attrs = $(event.currentTarget).serializeJSON();
    this.model.save(attrs, {
      success: function() {
        $("#save-status").text("All changes saved to Feathernote");
      },
    });
  },

  updateNote: function(event){
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON();
    this.model.save(attr);
  }

});
