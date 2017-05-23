webpackJsonp([3],{

/***/ 43:
/***/ (function(module, exports) {

function redirect(l) {
  var pathnames = l.pathname.split('/');
  var repo = pathnames[1];
  var pathname = pathnames.slice(2).join('/');
  var host = l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + '/' + repo + '/';
  var path = pathname.replace(/&/g, '~and~');
  var search = l.search.slice(1).replace(/&/g, '~and~');
  var hash = l.hash;

  var url = host + '?p=' + path + '&q=' + search + (hash ? '#' + hash : '');
  l.replace(url);
}

redirect(window.location);

/***/ })

},[43]);
//# sourceMappingURL=404.35dafc242f22fa6f5188.js.map