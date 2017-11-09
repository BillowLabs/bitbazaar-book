document.addEventListener('DOMContentLoaded', function() {
  console.log('content loaded!')
  var header = document.getElementsByClassName('page-header')[0]
  var child = null

  for (var i = 0; i < header.childNodes.length; i++) {
    child = header.childNodes[i]
    if (child.className !== 'project-tagline' && child.className !== 'btn') continue
    console.log('CHILD', child)
    header.removeChild(child)
  }

})
