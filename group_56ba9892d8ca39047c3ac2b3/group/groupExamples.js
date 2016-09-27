db.companies.aggregate([
    { $group: {
        _id: { founded_year: "$founded_year" },
        average_number_of_employees: { $avg: "$number_of_employees" }
    } },
    { $sort: { average_number_of_employees: -1 } }

])

db.companies.aggregate( [
    { $match : { founded_year : 2001 } },
    { $project : { _id: 0, name : 1, number_of_employees: 1 } },
    { $sort : { number_of_employees : -1 } }
] )


db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
] )



db.companies.aggregate( [
    { $match : { founded_year : 2001 } },
    { $project : { _id: 0, name : 1, number_of_employees: 1 } },
    { $sort : { number_of_employees : -1 } }
] )

db.grades.aggregate([
  {$match: {"scores.type": {$ne: "quiz"}}},
  {$project: {
    _id: 0,
    type: 1,
    scores: {$filter:{
      input: "$scores",
      as: "score",
      cond: {}
    }}
  }}
]).pretty()


db.grades.aggregate([
  {"scores.type": "quiz"},
  {$project: {_id: 0, scores: 1}}
]).pretty()

db.grades.aggregate([
  {$match: {"student_id": {$ne: null}}},
  {$project: {_id: 0, student_id: 1}},
  {$group: {
    _id: "student_id",
    class_id:
  }}
]).pretty()


db.grades.aggregate([
  {$group: {
    _id: {scores}
  } "quiz"},
  {$project: {_id: 0, scores: 1}}
]).pretty()
