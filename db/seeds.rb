# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  { email: "demo@feathernote.me",
    password: "feathernote"
  },
  { email: "andrew@gmail.com",
    password: "password"
  }])

notebooks = Notebook.create([
  {
    name: "Physics",
    author_id: 1
  },
  {
    name: "English Literature",
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
  { title: "Kinematics",
    body: "In classical mechanics, we are ultimately interested with understanding the motion of objects. However, before we can even begin to discuss the causes of such motion (i.e. before we study the dynamics of physical systems), we must first find a way of describing the motion of objects. In other words, we want to develop a mathematical formalism that allows us to represent the position, velocity, and acceleration of moving objects, and to express how these quantities are related to each other in time. This is the project of kinematics.",
    notebook_id: 1,
    author_id: 1
  },

  { title: "2D Motion",
    body: "Most real-world kinematics problems involve the motion of objects in two and three dimensions. (This should come as no surprise, since we do live in a three-dimensional world.) Fortunately, most of the equations we derived in the previouscan be easily generalized to the two- and three-dimensional cases. The prescription for doing this is simple: instead of treating x(t) , v(t) , and a(t) as scalar-valued functions for position, velocity, and acceleration, we will reinterpret these functions as being vector-valued. In other words, instead of the value of x(t) at a particular point in time being a number (orscalar), the value of the function at that point will be a vector.",
    notebook_id: 1,
    author_id: 1
  },
  { title: "1D Motion",
    body: "Even though we live in a three-dimensional world, it is useful to understand the motion of objects in just one dimension, since many physical problems can be reduced to this simpler case. For example, the motion of a falling object is in essence a one-dimensional problem: the object moves in only one direction (down). We will also find that once we have the formalism for motion in one dimension, it will be easy to generalize our equations to two and three dimensions by replacing our scalar-valued functions for position, velocity, and acceleration with vector-valued ones.",
    notebook_id: 1,
    author_id: 1
  },
  { title: "Introduction to Vectors",
    body: "In order to represent physical quantities such as position and momentum in more than one dimension, we must introduce new mathematical objects called vectors. Technically speaking, a vector is defined as an element of a vector space, but since we will only be dealing with very special types of vector spaces (namely, two- and three-dimensional Euclidean space) we can be more specific. For our purposes, a vector is either an ordered pair or triplet of numbers. On a two-dimensional plane, for instance, any point (a, b) is a vector. Graphically, we often represent such a vector by drawing an arrow from the origin to the point, with the tip of the arrow resting at the point. The situation for three-dimensional vectors is very much the same, with an ordered triplet (a, b, c) being represented by an arrow from the origin to the corresponding point in three-dimensional space.",
    notebook_id: 2,
    author_id: 1
  },

  { title: "Newton's Three Laws",
    body: "Newton's Three Laws, named after Sir Isaac Newton, who derived the laws, provide the basis for the study of Dynamics, and describe the fundamental laws of motion. These three laws will serve as a springboard for all other topics concerning dynamics.


Mathematically, the laws can be written as the following:

First Law: If  F = 0 then a = 0 and v = constant
Second Law:  F = ma
Third Law: F AB = - F BA
We will spend the nest three section of this SparkNote examining the ideas behind Newton's Three Laws, and explaining the derivation of their mathematical formulas.",
    notebook_id: 2,
    author_id: 1
  },
  { title: "Work, Energy & Power",
    body: "Newton's Laws, and dynamics as a whole, provide us with fundamental axioms for the study of classical mechanics. Once these foundations are laid, we can derive new concepts from the axioms, furthering our understanding of mechanics and allowing us to extend our study to new and more complex physical situations.


Perhaps the most significant concept derived in dynamics is that of work. The understanding of work greatly simplifies many physical situations. Work, in a sense, introduces a dynamic understanding to mechanics. It allows us to evaluate forces over distance and time, to give us a broader understanding not just of the forces acting on a given object, but about what happens to that object over the course of a given journey. In addition, the concept of work makes our complicated kinematics equations virtually obsolete. It makes calculations easier, and allows us to extend our study to other realms.",
    notebook_id: 2,
    author_id: 1
  },
  { title: "Hamlet",
    body: "Claudius has killed Hamlet's father, the King of Denmark. Hamlet's mother married Claudius two months later because she didn't know.

The guards of the castle see the ghost of Hamlet's father. And the ghost tells Hamlet that his uncle, Claudius killed him, so Hamlet went crazy.

The King and Queen think that he is acting strange because he is in love with Ophelia. So they put him in a room with Ophelia to find out for sure. But Hamlet was mean to her, so his uncle thinks Hamlet knows he killed his father and that's why he's mad.

Ophelia goes crazy because Hamlet says he doesn't love her and she drowns herself. Her brother blames Hamlet and challenges him to a duel.

At the duel, Claudius puts poison in a glass of wine and on the swords because he wants to kill Hamlet. The Queen drinks the wine by mistake and dies. Hamlet and Ophelia's brother stab one another with the poison swords and they both die, but Hamlet kills the king just before he dies.",
    notebook_id: 3,
    author_id: 2
  },

  { title: "She dinner she our horses depend. Remember at children by reserved to vicinity.",
    body: "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.",
    notebook_id: 3,
    author_id: 2
  },
  { title: " In affronting unreserved delightful simplicity ye.",
    body: "no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses.",
    notebook_id: 3,
    author_id: 2
  },
  { title: "Law own advantage furniture continual sweetness bed agreeable perpetual.",
    body: "He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you sang. Parlors visited noisier how explain pleased his see suppose. Do ashamed assured on related offence at equally totally. Use mile her whom they its. Kept hold an want as he bred of. Was dashwood landlord cheerful husbands two. Estate why theirs indeed him polite old settle though she. In as at regard easily narrow roused adieus.",
    notebook_id: 4,
    author_id: 2
  },

  { title: " Afford son she had lively living.",
    body: "Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done. ",
    notebook_id: 4,
    author_id: 2
  },
  { title: " Tastes lovers myself too formal season our valley boy.",
    body: "Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye an. Mr unsatiable at literature connection favourable. We neglected mr perfectly continual dependent. ",
    notebook_id: 4,
    author_id: 2
  }
  ])
