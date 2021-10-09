const pages = dv.pages()
const tags = {}
const tagsArr = []
const initialTag = name => {
  return { name, count: 1 }
}

pages.forEach(page => {
  if (page.tags) {
    page.tags.forEach(tag => {
      if (tags[tag]) tags[tag].count++
      else initialTag(tag)
    })
  }
})

Object.keys(tags).forEach(key => tagsArr.push(tags[key]))

// for (const page of pages) {
//   if (page.tags) {
//     for (const tag of page.tags) {
//       const existing = tags[tag]
//       if (existing) {
//         tags[tag].count++
//       } else tags[tag] = { name: tag, count: 1 }
//     }
//   }
// }

// for (const key of Object.keys(tags)) {
//   tagsArr.push([tags[key].name, tags[key].count])
// }

dv.table(['Name', 'Count'], tagsArr)
