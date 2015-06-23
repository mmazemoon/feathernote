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
  { title: "Why end might ask civil again spoil.",
    body: "Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything.",
    notebook_id: 1,
    author_id: 1
  },

  { title: "She dinner she our horses depend. Remember at children by reserved to vicinity.",
    body: "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.",
    notebook_id: 1,
    author_id: 1
  },
  { title: " In affronting unreserved delightful simplicity ye.",
    body: "no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses.",
    notebook_id: 1,
    author_id: 1
  },
  { title: "Law own advantage furniture continual sweetness bed agreeable perpetual.",
    body: "He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you sang. Parlors visited noisier how explain pleased his see suppose. Do ashamed assured on related offence at equally totally. Use mile her whom they its. Kept hold an want as he bred of. Was dashwood landlord cheerful husbands two. Estate why theirs indeed him polite old settle though she. In as at regard easily narrow roused adieus.",
    notebook_id: 2,
    author_id: 1
  },

  { title: " Afford son she had lively living.",
    body: "Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done. ",
    notebook_id: 2,
    author_id: 1
  },
  { title: " Tastes lovers myself too formal season our valley boy.",
    body: "Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye an. Mr unsatiable at literature connection favourable. We neglected mr perfectly continual dependent. ",
    notebook_id: 2,
    author_id: 1
  },
  { title: "Why end might ask civil again spoil.",
    body: "Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything.",
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
