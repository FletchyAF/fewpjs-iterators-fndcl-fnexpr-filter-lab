function findMatching(source, sought) {
    return source.filter( match =>
      match.toLowerCase() === sought.toLowerCase() 
      )
}

function fuzzyMatch(source, sought) {
    return source.filter( match =>
        match.toLowerCase().indexOf(sought.toLowerCase()) === 0 
    )
}

function matchName(source, sought) {
    return source.filter( record => record.name === sought)
  }
