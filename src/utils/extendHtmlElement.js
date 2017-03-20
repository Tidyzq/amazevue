let classCache = {}, handlers = {}, _zid = 1

function classRE (name) {
  return name in classCache ? classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
}

function className (node, value) {
  let klass = node.className || ''
  let svg = klass && klass.baseVal !== undefined
  if (value === undefined) return svg ? klass.baseVal : klass
  svg ? (klass.baseVal = value) : (node.className = value)
}

function zid (element) {
  return element._zid || (element._zid = _zid++)
}

class ExtendHtmlElement {

  constructor (element) {
    this.element = element
  }

  hasClass (name) {
    if (!name) return false
    return classRE(name).test(className(this.element))
  }

  addClass (name) {
    if (!name) return this
    let cls = className(this.element), classList = []
    name.split(/\s+/g).forEach(klass => {
      if (!this.hasClass(klass)) classList.push(klass)
    })
    classList.length && className(this.element, cls + (cls ? ' ' : '') + classList.join(' '))
    return this
  }

  removeClass (name) {
    if (name === undefined) {
      className(this.element, '')
      return this
    }
    let classList = className(this.element)
    name.split(/\s+/g).forEach(klass => {
      classList = classList.replace(classRE(klass), ' ')
    })
    className(this.element, classList.replace(/(^\s*)|(\s*$)/g, ''))
    return this
  }

  css (property, value) {
    if (arguments.length < 2) {
      if (typeof property === 'string') {
        return this.element.style[property]
      }
    }
    if (typeof property === 'string') {
      if (!value && value !== 0) {
        this.element.style.removeProperty(property)
      } else {
        this.element.style[property] = value
      }
    } else {
      for (let key in property) {
        if (!property[key] && property[key] !== 0) {
          this.element.style.removeProperty(key)
        } else {
          this.element.style[key] = property[key]
        }
      }
    }
    return this
  }

  off (events, listener) {
    let id = zid(this.element)
    events = events || ''
    events.split(/\s/).forEach(event => {
      if (event) {
        let foundHandlers = (handlers[id] || []).filter(handler => {
          return handler &&
            (!event || handler.e === event) &&
            (!listener || handler.fn === listener)
        })
        foundHandlers.forEach(handler => {
          delete handlers[id][handler.i]
          this.element.removeEventListener(event, handler.fn)
        })
      }
    })
    return this
  }

  on (events, listener) {
    let id = zid(this.element), set = (handlers[id] || (handlers[id] = []))
    events = events || ''
    events.split(/\s/).forEach(event => {
      if (event) {
        let handler = {
          e: event,
          i: set.length,
          fn: listener
        }
        set.push(handler)
        this.element.addEventListener(event, listener)
      }
    })
    return this
  }

}

export default ExtendHtmlElement
