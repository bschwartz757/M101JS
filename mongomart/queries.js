LAB 1a: Implement the getCategories() method

db.item.aggregate(
  [
    {$group: {_id: "$category", num: {$sum: 1}}}
  ]
)

LAB #2A: Implement searchItems()

db.item.createIndex({
  title: "text",
  slogan: "text",
  description: "text"
})
