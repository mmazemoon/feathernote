# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  { email: "mark@gmail.com",
    password: "password"
  },
  { email: "andrew@gmail.com",
    password: "password"
  }])

notebooks = Notebook.create([
  {
    name: "Mark's Notebook",
    author_id: 1
  },
  {
    name: "Mark's Other Notebook",
    author_id: 1
  },
  {
    name: "Andrew's Notebook",
    author_id: 2
  },
  {
    name: "Andrew's Other Notebook",
    author_id: 2
  }])

notes = Note.create([
  { title: "1 - Welcome to FeatherNote!",
    body: "Thanks for checking out FeatherNote, a clone of Evernote, the popular note-taking app.  Some features to try out:

    Notes
    -- Create a note using the 'New Note' button next to the search bar
    -- Edit a note's content by clicking its title and body on the right side of the page
    -- Change a note's notebook by clicking on the notebook dropdown under the 'New Note' button
    -- Add a tag to a note by clicking on the '+ Tag' button
    -- Like or delete a note by clicking on the like and delete buttons at the top right of the screen
    -- Comment on a note by clicking ",
    notebook_id: 1,
    author_id: 1
  },

  { title: "2 - Welcome to FeatherNote!",
    body: "Thanks for checking out FeatherNote, a clone of Evernote, the popular note-taking app.  Some features to try out:

    Notes
    -- Create a note using the 'New Note' button next to the search bar
    -- Edit a note's content by clicking its title and body on the right side of the page
    -- Change a note's notebook by clicking on the notebook dropdown under the 'New Note' button
    -- Add a tag to a note by clicking on the '+ Tag' button
    -- Like or delete a note by clicking on the like and delete buttons at the top right of the screen
    -- Comment on a note by clicking ",
    notebook_id: 1,
    author_id: 1
  },
  { title: "3 - Welcome to FeatherNote!",
    body: "Thanks for checking out FeatherNote, a clone of Evernote, the popular note-taking app.  Some features to try out:

    Notes
    -- Create a note using the 'New Note' button next to the search bar
    -- Edit a note's content by clicking its title and body on the right side of the page
    -- Change a note's notebook by clicking on the notebook dropdown under the 'New Note' button
    -- Add a tag to a note by clicking on the '+ Tag' button
    -- Like or delete a note by clicking on the like and delete buttons at the top right of the screen
    -- Comment on a note by clicking ",
    notebook_id: 1,
    author_id: 1
  },
  { title: "1 - Welcome to FeatherNote!",
    body: "Thanks for checking out FeatherNote, a clone of Evernote, the popular note-taking app.  Some features to try out:

    Notes
    -- Create a note using the 'New Note' button next to the search bar
    -- Edit a note's content by clicking its title and body on the right side of the page
    -- Change a note's notebook by clicking on the notebook dropdown under the 'New Note' button
    -- Add a tag to a note by clicking on the '+ Tag' button
    -- Like or delete a note by clicking on the like and delete buttons at the top right of the screen
    -- Comment on a note by clicking ",
    notebook_id: 1,
    author_id: 2
  },

  { title: "2 - Welcome to FeatherNote!",
    body: "Thanks for checking out FeatherNote, a clone of Evernote, the popular note-taking app.  Some features to try out:

    Notes
    -- Create a note using the 'New Note' button next to the search bar
    -- Edit a note's content by clicking its title and body on the right side of the page
    -- Change a note's notebook by clicking on the notebook dropdown under the 'New Note' button
    -- Add a tag to a note by clicking on the '+ Tag' button
    -- Like or delete a note by clicking on the like and delete buttons at the top right of the screen
    -- Comment on a note by clicking ",
    notebook_id: 1,
    author_id: 2
  },
  { title: "3 - Welcome to FeatherNote!",
    body: "Thanks for checking out FeatherNote, a clone of Evernote, the popular note-taking app.  Some features to try out:

    Notes
    -- Create a note using the 'New Note' button next to the search bar
    -- Edit a note's content by clicking its title and body on the right side of the page
    -- Change a note's notebook by clicking on the notebook dropdown under the 'New Note' button
    -- Add a tag to a note by clicking on the '+ Tag' button
    -- Like or delete a note by clicking on the like and delete buttons at the top right of the screen
    -- Comment on a note by clicking ",
    notebook_id: 1,
    author_id: 2
  }
  ])
