# 介绍
jQuery是一个JavaScript函数库。
jQuery是一个轻量级的"写的少，做的多"的JavaScript库

# 引入


# 兼容
1.12.4  支持ie678
2.2.4   支持ie9
3.4.1 es6新语法

# api
$ | jQuery 暴漏全局变量
$(selector) => jqObj

jQuery.prototype.add: ƒ ( selector, context )
jQuery.prototype.addBack: ƒ ( selector )
jQuery.prototype.addClass: ƒ ( value )
jQuery.prototype.after: ƒ ()
jQuery.prototype.ajaxComplete: ƒ ( fn )
jQuery.prototype.ajaxError: ƒ ( fn )
jQuery.prototype.ajaxSend: ƒ ( fn )
jQuery.prototype.ajaxStart: ƒ ( fn )
jQuery.prototype.ajaxStop: ƒ ( fn )
jQuery.prototype.ajaxSuccess: ƒ ( fn )
jQuery.prototype.animate: ƒ ( prop, speed, easing, callback )
jQuery.prototype.append: ƒ ()
jQuery.prototype.appendTo: ƒ ( selector )
jQuery.prototype.attr: ƒ ( name, value )
jQuery.prototype.before: ƒ ()
jQuery.prototype.bind: ƒ ( types, data, fn )
jQuery.prototype.blur: ƒ ( data, fn )
jQuery.prototype.change: ƒ ( data, fn )
jQuery.prototype.children: ƒ ( until, selector )
jQuery.prototype.clearQueue: ƒ ( type )
jQuery.prototype.click: ƒ ( data, fn )
jQuery.prototype.clone: ƒ ( dataAndEvents, deepDataAndEvents )
jQuery.prototype.closest: ƒ ( selectors, context )
jQuery.prototype.constructor: ƒ ( selector, context )
jQuery.prototype.contents: ƒ ( until, selector )
jQuery.prototype.contextmenu: ƒ ( data, fn )
jQuery.prototype.css: ƒ ( name, value )
jQuery.prototype.data: ƒ ( key, value )
jQuery.prototype.dblclick: ƒ ( data, fn )
jQuery.prototype.delay: ƒ ( time, type )
jQuery.prototype.delegate: ƒ ( selector, types, data, fn )
jQuery.prototype.dequeue: ƒ ( type )
jQuery.prototype.detach: ƒ ( selector )
jQuery.prototype.each: ƒ ( callback )
jQuery.prototype.empty: ƒ ()
jQuery.prototype.end: ƒ ()
jQuery.prototype.eq: ƒ ( i )
jQuery.prototype.even: ƒ ()
jQuery.prototype.extend: ƒ ()
jQuery.prototype.fadeIn: ƒ ( speed, easing, callback )
jQuery.prototype.fadeOut: ƒ ( speed, easing, callback )
jQuery.prototype.fadeTo: ƒ ( speed, to, easing, callback )
jQuery.prototype.fadeToggle: ƒ ( speed, easing, callback )
jQuery.prototype.filter: ƒ ( selector )
jQuery.prototype.find: ƒ ( selector )
jQuery.prototype.finish: ƒ ( type )
jQuery.prototype.first: ƒ ()
jQuery.prototype.focus: ƒ ( data, fn )
jQuery.prototype.focusin: ƒ ( data, fn )
jQuery.prototype.focusout: ƒ ( data, fn )
jQuery.prototype.get: ƒ ( num )
jQuery.prototype.has: ƒ ( target )
jQuery.prototype.hasClass: ƒ ( selector )
jQuery.prototype.height: ƒ ( margin, value )
jQuery.prototype.hide: ƒ ( speed, easing, callback )
jQuery.prototype.hover: ƒ ( fnOver, fnOut )
jQuery.prototype.html: ƒ ( value )
jQuery.prototype.index: ƒ ( elem )
jQuery.prototype.init: ƒ ( selector, context, root )
jQuery.prototype.innerHeight: ƒ ( margin, value )
jQuery.prototype.innerWidth: ƒ ( margin, value )
jQuery.prototype.insertAfter: ƒ ( selector )
jQuery.prototype.insertBefore: ƒ ( selector )
jQuery.prototype.is: ƒ ( selector )
jQuery.prototype.jquery: "3.5.1"
jQuery.prototype.keydown: ƒ ( data, fn )
jQuery.prototype.keypress: ƒ ( data, fn )
jQuery.prototype.keyup: ƒ ( data, fn )
jQuery.prototype.last: ƒ ()
jQuery.prototype.length: 0
jQuery.prototype.load: ƒ ( url, params, callback )
jQuery.prototype.map: ƒ ( callback )
jQuery.prototype.mousedown: ƒ ( data, fn )
jQuery.prototype.mouseenter: ƒ ( data, fn )
jQuery.prototype.mouseleave: ƒ ( data, fn )
jQuery.prototype.mousemove: ƒ ( data, fn )
jQuery.prototype.mouseout: ƒ ( data, fn )
jQuery.prototype.mouseover: ƒ ( data, fn )
jQuery.prototype.mouseup: ƒ ( data, fn )
jQuery.prototype.next: ƒ ( until, selector )
jQuery.prototype.nextAll: ƒ ( until, selector )
jQuery.prototype.nextUntil: ƒ ( until, selector )
jQuery.prototype.not: ƒ ( selector )
jQuery.prototype.odd: ƒ ()
jQuery.prototype.off: ƒ ( types, selector, fn )
jQuery.prototype.offset: ƒ ( options )
jQuery.prototype.offsetParent: ƒ ()
jQuery.prototype.on: ƒ ( types, selector, data, fn )
jQuery.prototype.one: ƒ ( types, selector, data, fn )
jQuery.prototype.outerHeight: ƒ ( margin, value )
jQuery.prototype.outerWidth: ƒ ( margin, value )
jQuery.prototype.parent: ƒ ( until, selector )
jQuery.prototype.parents: ƒ ( until, selector )
jQuery.prototype.parentsUntil: ƒ ( until, selector )
jQuery.prototype.position: ƒ ()
jQuery.prototype.prepend: ƒ ()
jQuery.prototype.prependTo: ƒ ( selector )
jQuery.prototype.prev: ƒ ( until, selector )
jQuery.prototype.prevAll: ƒ ( until, selector )
jQuery.prototype.prevUntil: ƒ ( until, selector )
jQuery.prototype.promise: ƒ ( type, obj )
jQuery.prototype.prop: ƒ ( name, value )
jQuery.prototype.push: ƒ push()
jQuery.prototype.pushStack: ƒ ( elems )
jQuery.prototype.queue: ƒ ( type, data )
jQuery.prototype.ready: ƒ ( fn )
jQuery.prototype.remove: ƒ ( selector )
jQuery.prototype.removeAttr: ƒ ( name )
jQuery.prototype.removeClass: ƒ ( value )
jQuery.prototype.removeData: ƒ ( key )
jQuery.prototype.removeProp: ƒ ( name )
jQuery.prototype.replaceAll: ƒ ( selector )
jQuery.prototype.replaceWith: ƒ ()
jQuery.prototype.resize: ƒ ( data, fn )
jQuery.prototype.scroll: ƒ ( data, fn )
jQuery.prototype.scrollLeft: ƒ ( val )
jQuery.prototype.scrollTop: ƒ ( val )
jQuery.prototype.select: ƒ ( data, fn )
jQuery.prototype.serialize: ƒ ()
jQuery.prototype.serializeArray: ƒ ()
jQuery.prototype.show: ƒ ( speed, easing, callback )
jQuery.prototype.siblings: ƒ ( until, selector )
jQuery.prototype.slice: ƒ ()
jQuery.prototype.slideDown: ƒ ( speed, easing, callback )
jQuery.prototype.slideToggle: ƒ ( speed, easing, callback )
jQuery.prototype.slideUp: ƒ ( speed, easing, callback )
jQuery.prototype.sort: ƒ sort()
jQuery.prototype.splice: ƒ splice()
jQuery.prototype.stop: ƒ ( type, clearQueue, gotoEnd )
jQuery.prototype.submit: ƒ ( data, fn )
jQuery.prototype.text: ƒ ( value )
jQuery.prototype.toArray: ƒ ()
jQuery.prototype.toggle: ƒ ( speed, easing, callback )
jQuery.prototype.toggleClass: ƒ ( value, stateVal )
jQuery.prototype.trigger: ƒ ( type, data )
jQuery.prototype.triggerHandler: ƒ ( type, data )
jQuery.prototype.unbind: ƒ ( types, fn )
jQuery.prototype.undelegate: ƒ ( selector, types, fn )
jQuery.prototype.unwrap: ƒ ( selector )
jQuery.prototype.val: ƒ ( value )
jQuery.prototype.width: ƒ ( margin, value )
jQuery.prototype.wrap: ƒ ( html )
jQuery.prototype.wrapAll: ƒ ( html )
jQuery.prototype.wrapInner: ƒ ( html )
jQuery.prototype.Symbol(Symbol.iterator): ƒ values()

jQuery.Animation: ƒ Animation( elem, properties, options )
jQuery.Callbacks: ƒ ( options )
jQuery.Deferred: ƒ ( func )
jQuery.Event: ƒ ( src, props )
jQuery.Tween: ƒ Tween( elem, options, prop, end, easing )
jQuery.active: 0
jQuery.ajax: ƒ ( url, options )
jQuery.ajaxPrefilter: ƒ ( dataTypeExpression, func )
jQuery.ajaxSettings: {url: "http://localhost:63342/study_notes/instructions/temp.html?_ijt=jcp2un8ur0f4hcb2stsu91jekd", type: "GET", isLocal: false, global: true, processData: true, …}
jQuery.ajaxSetup: ƒ ( target, settings )
jQuery.ajaxTransport: ƒ ( dataTypeExpression, func )
jQuery.attr: ƒ ( elem, name, value )
jQuery.attrHooks: {type: {…}}
jQuery.camelCase: ƒ camelCase( string )
jQuery.cleanData: ƒ ( elems )
jQuery.clone: ƒ ( elem, dataAndEvents, deepDataAndEvents )
jQuery.contains: ƒ ( context, elem )
jQuery.css: ƒ ( elem, name, extra, styles )
jQuery.cssHooks: {opacity: {…}, height: {…}, width: {…}, marginLeft: {…}, margin: {…}, …}
jQuery.cssNumber: {animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, …}
jQuery.cssProps: {}
jQuery.data: ƒ ( elem, name, data )
jQuery.dequeue: ƒ ( elem, type )
jQuery.each: ƒ ( obj, callback )
jQuery.easing: {_default: "swing", linear: ƒ, swing: ƒ}
jQuery.error: ƒ ( msg )
jQuery.escapeSelector: ƒ ( sel )
jQuery.etag: {}
jQuery.event: {global: {…}, add: ƒ, remove: ƒ, dispatch: ƒ, handlers: ƒ, …}
jQuery.expando: "jQuery3510027078527503044292"
jQuery.expr: {cacheLength: 50, match: {…}, attrHandle: {…}, find: {…}, createPseudo: ƒ, …}
jQuery.extend: ƒ ()
jQuery.filter: ƒ ( expr, elems, not )
jQuery.find: ƒ Sizzle( selector, context, results, seed )
jQuery.fn: Object [jquery: "3.5.1", constructor: ƒ, toArray: ƒ, get: ƒ, pushStack: ƒ, …]
jQuery.fx: ƒ ( elem, options, prop, end, easing, unit )
jQuery.get: ƒ ( url, data, callback, type )
jQuery.getJSON: ƒ ( url, data, callback )
jQuery.getScript: ƒ ( url, callback )
jQuery.globalEval: ƒ ( code, options, doc )
jQuery.grep: ƒ ( elems, callback, invert )
jQuery.guid: 1
jQuery.hasData: ƒ ( elem )
jQuery.holdReady: ƒ ( hold )
jQuery.htmlPrefilter: ƒ ( html )
jQuery.inArray: ƒ ( elem, arr, i )
jQuery.isArray: ƒ isArray()
jQuery.isEmptyObject: ƒ ( obj )
jQuery.isFunction: ƒ isFunction( obj )
jQuery.isNumeric: ƒ ( obj )
jQuery.isPlainObject: ƒ ( obj )
jQuery.isReady: true
jQuery.isWindow: ƒ isWindow( obj )
jQuery.isXMLDoc: ƒ ( elem )
jQuery.lastModified: {}
jQuery.makeArray: ƒ ( arr, results )
jQuery.map: ƒ ( elems, callback, arg )
jQuery.merge: ƒ ( first, second )
jQuery.noConflict: ƒ ( deep )
jQuery.nodeName: ƒ nodeName( elem, name )
jQuery.noop: ƒ ()
jQuery.now: ƒ now()
jQuery.offset: {setOffset: ƒ}
jQuery.param: ƒ ( a, traditional )
jQuery.parseHTML: ƒ ( data, context, keepScripts )
jQuery.parseJSON: ƒ parse()
jQuery.parseXML: ƒ ( data )
jQuery.post: ƒ ( url, data, callback, type )
jQuery.prop: ƒ ( elem, name, value )
jQuery.propFix: {for: "htmlFor", class: "className", tabindex: "tabIndex", readonly: "readOnly", maxlength: "maxLength", …}
jQuery.propHooks: {tabIndex: {…}}
jQuery.proxy: ƒ ( fn, context )
jQuery.queue: ƒ ( elem, type, data )
jQuery.ready: ƒ ( wait )
jQuery.readyException: ƒ ( error )
jQuery.readyWait: 0
jQuery.removeAttr: ƒ ( elem, value )
jQuery.removeData: ƒ ( elem, name )
jQuery.removeEvent: ƒ ( elem, type, handle )
jQuery.speed: ƒ ( speed, easing, fn )
jQuery.style: ƒ ( elem, name, value, extra )
jQuery.support: {checkClone: true, noCloneChecked: true, option: true, clearCloneStyle: true, boxSizingReliable: ƒ, …}
jQuery.text: ƒ ( elem )
jQuery.timers: []
jQuery.trim: ƒ ( text )
jQuery.type: ƒ toType( obj )
jQuery.unique: ƒ ( results )
jQuery.uniqueSort: ƒ ( results )
jQuery.valHooks: {option: {…}, select: {…}, radio: {…}, checkbox: {…}}
jQuery.when: ƒ ( singleValue )
jQuery._data: ƒ ( elem, name, data )
jQuery._evalUrl: ƒ ( url, options, doc )
jQuery._queueHooks: ƒ ( elem, type )
jQuery._removeData: ƒ ( elem, name )

# 选择器选中下jq对象
{length}

# 选择器
https://www.runoob.com/jquery/jquery-ref-selectors.html

# 事件方法
https://www.runoob.com/jquery/jquery-ref-events.html

# jQuery 效果 方法
https://www.runoob.com/jquery/jquery-ref-effects.html

# HTML / CSS 方法
https://www.runoob.com/jquery/jquery-ref-html.html

# 遍历方法
https://www.runoob.com/jquery/jquery-ref-traversing.html

# ajax方法
https://www.runoob.com/jquery/jquery-ref-ajax.html

# 杂项方法
https://www.runoob.com/jquery/jquery-ref-misc.html

# jQuery 属性
https://www.runoob.com/jquery/jquery-ref-prop.html






















