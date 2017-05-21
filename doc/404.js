function redirect (l) {
  const pathnames = l.pathname.split('/')
  const repo = pathnames[1]
  const pathname = pathnames.slice(2).join('/')
  const host = `${l.protocol}//${l.hostname}${l.port ? ':' + l.port : ''}/${repo}/`
  const path = pathname.replace(/&/g, '~and~')
  const search = l.search.slice(1).replace(/&/g, '~and~')
  const hash = l.hash

  const url = `${host}?p=${path}&q=${search}${hash ? '#' + hash : ''}`
  l.replace(url)
}

redirect(window.location)
