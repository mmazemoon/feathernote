# FeatherNote

[Heroku link][heroku]

[heroku]: https://myfeathernote.herokuapp.com/

## Minimum Viable Product
Feathernote is an open source note-taking app inspired by Evernote. It is built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in/log out)
- [ ] Create notes and notebooks
- [ ] Create tags
- [ ] View notes and notebooks
- [ ] Organize notes into custom notebooks
- [ ] Tag notes with multiple tags
- [ ] Search for notes by title
- [ ] Search for notes by notebooks or tags

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Note & Notebook Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create notes and notebooks using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Notes and Notebooks (~2 days)
I will add API routes to serve note and notebook data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create and view notes and notebooks and view, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing and Organizing Notes (~2 days)
I plan to use third-party libraries to add design bfunctionality to the `NoteForm` and
`NoteShow` views in this phase. First I'll need to add a Markdown editor to the
`NoteForm`, and make sure that the Markdown is properly escaped and formatted in
the `NoteShow` view.

[Details][phase-three]

### Phase 4: Searching for Notes (~2 days)
I'll need to add `search` routes to both the Notes and Notebooks controllers. On the
Backbone side, there will be a `SearchResults` composite view which has `NotesIndex`
and `NotebookIndex` subviews. These views will use plain old `notes` and `notebook` dcollections, but they will fetch from the new `search` routes.

[Details][phase-four]

### Bonus Features (TBD)
- [ ] Authenticate email addresses and account activation upon sign-up
- [ ] Add jQuery UI drag/drop functionality
- [ ] Allow rich text editing of notes
- [ ] Multiple sessions/session management
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
