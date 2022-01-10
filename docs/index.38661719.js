// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5UGAA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BQdY":[function(require,module,exports) {
var _bookPublication = require("./src/script/bookPublication");
var _createNewBook = require("./src/script/createNewBook");
var _dragOnDrop = require("./src/script/dragOnDrop");
var _button = require("./src/script/button");
var _stylesScss = require("./src/styles.scss");

},{"./src/script/bookPublication":"122SZ","./src/script/createNewBook":"dsYe0","./src/script/dragOnDrop":"6TjOc","./src/script/button":"esyGm","./src/styles.scss":"2G57T"}],"122SZ":[function(require,module,exports) {
var _library = require("./library");
var _appendCard = require("./appendCard");
_appendCard.$areaAllBook.querySelector('.list-book__list').innerHTML = '';
_appendCard.$areaFavoriteBook.querySelector('.list-book__list').innerHTML = '';
_library.library.get().forEach((book)=>{
    const html = _appendCard.createCard(book);
    if (book.favorite) _appendCard.appendCard(html, _appendCard.$areaFavoriteBook);
    else _appendCard.appendCard(html, _appendCard.$areaAllBook);
});

},{"./library":"j4BrA","./appendCard":"i9GQ7"}],"j4BrA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library", ()=>library
);
class Library {
    constructor(books){
        this.books = books;
    }
    get() {
        return [
            ...this.books
        ].sort((a, b)=>a.status ? -1 : 1
        );
    }
    set(newValue) {
        this.books = [
            ...newValue
        ];
        localStorage.setItem('books', JSON.stringify(this.books));
    }
}
// const testBook = [
//   { id: 1, status: false, favorite: false, title: 'Book 1', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' },
//   { id: 2, status: true, favorite: true, title: 'Book 2', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' },
//   { id: 3, status: false, favorite: true, title: 'Book 3', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' },
//   { id: 4, status: false, favorite: false, title: 'Book 4', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iure ullam, ut asperiores veritatis doloribus blanditiis dicta laudantium ad animi assumenda officia architecto provident laborum fuga voluptatem eos consequuntur adipisci minima ?' }
// ];
// localStorage.setItem('books', JSON.stringify(testBook));
const data = JSON.parse(localStorage.getItem('books')) || [];
let library = new Library(data);
window.library = library;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i9GQ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$areaAllBook", ()=>$areaAllBook
);
parcelHelpers.export(exports, "$areaFavoriteBook", ()=>$areaFavoriteBook
);
parcelHelpers.export(exports, "createCard", ()=>createCard
);
parcelHelpers.export(exports, "appendCard", ()=>appendCard
);
const $areaAllBook = document.querySelector('.list-book--all');
const $areaFavoriteBook = document.querySelector('.list-book--favorite');
function createCard(book) {
    return `
    <li class="list-book__item card-book ${book.status ? 'card-book--read' : ''}" draggable='true' data-id=${book.id}>
      <p class="card-book__name">${book.title}</p>
      <div class="card-book__controls">
        <button class="card-book__btn-edit btn">Ред.</button>
        <button class="card-book__btn-status ${book.status ? 'card-book__btn-status--read' : ''} btn">Прочитана</button>
        <button class="card-book__btn-read btn">Читать</button>
        <button class="card-book__btn-delete btn">X</button>
      </div>
    </li>
  `;
}
function appendCard(html, element) {
    element.querySelector('.list-book__list').innerHTML += html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dsYe0":[function(require,module,exports) {
var _appendCard = require("./appendCard");
var _library = require("./library");
const url = 'https://apiinterns.osora.ru/';
const form = document.querySelector('form');
const method = document.getElementsByName('method');
let select = [
    ...method
].find((item)=>item.checked
).id;
const textMessage = document.querySelector('.form__select-file-text');
function createBook(title, text) {
    if (title && text) {
        const newBook = {
            id: Date.now(),
            status: false,
            favorite: false,
            title: title,
            text: text
        };
        _library.library.set([
            ..._library.library.get(),
            newBook
        ]);
        _appendCard.appendCard(_appendCard.createCard(newBook), _appendCard.$areaAllBook);
    }
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (select === 'select-book') {
        const files = document.querySelector('[type=file]').files[0];
        const formData = new FormData();
        formData.append('login', 'login');
        formData.append('file', files);
        fetch(url, {
            method: 'POST',
            body: formData
        }).then((response)=>response.json()
        ).then((json)=>createBook(json.title, json.text)
        );
    } else {
        const formData = new FormData(form);
        createBook(formData.get('title'), formData.get('text'));
    }
    form.reset();
    textMessage.innerText = '';
    form.querySelector(`#${select}`).checked = true;
});
form.classList.add(`form--${select}`);
[
    ...method
].forEach((element)=>{
    element.addEventListener('change', (e)=>{
        form.classList.remove(`form--${select}`);
        select = e.target.id;
        form.classList.add(`form--${select}`);
    });
});
document.querySelector('.form__input-file').addEventListener('change', (e)=>{
    const files = e.target.files[0];
    if (files.type == 'text/plain') {
        textMessage.innerText = `Выбран файл: ${files.name}`;
        if (textMessage.classList.contains('form__select-file-text--error')) textMessage.classList.remove('form__select-file-text--error');
    } else {
        textMessage.innerText = `Выбранный файл должен быть формата txt`;
        textMessage.classList.add('form__select-file-text--error');
    }
});
const $box = document.querySelectorAll('.list-book');
[
    ...$box
].forEach((item)=>{
    item.addEventListener('click', function(e) {
        e.target.classList.toggle('list-book--visible');
    }, {
        capture: false
    });
});

},{"./appendCard":"i9GQ7","./library":"j4BrA"}],"6TjOc":[function(require,module,exports) {
var _library = require("./library");
var _appendCard = require("./appendCard");
const $book = document.querySelectorAll('.list-book__list');
const $zone = document.querySelectorAll('.list-book__drop');
let dragger;
[
    ...$book
].forEach((item)=>{
    item.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'LI') dragger = e.target;
    });
});
[
    ...$zone
].forEach((item1)=>{
    item1.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    item1.addEventListener('dragenter', function(e) {
        e.target.classList.add('list-book__drop--active');
    });
    item1.addEventListener('dragleave', function(e) {
        e.target.classList.remove('list-book__drop--active');
    });
    item1.addEventListener('drop', function(e) {
        e.target.classList.remove('list-book__drop--active');
        const area = e.target.id === 'favorite' ? _appendCard.$areaFavoriteBook : _appendCard.$areaAllBook;
        let newBooks = [
            ..._library.library.get()
        ];
        if (dragger.closest('.list-book') !== area) {
            newBooks = newBooks.map((item)=>{
                if (item.id == dragger.dataset.id) return {
                    ...item,
                    favorite: !item.favorite
                };
                return item;
            });
            _library.library.set(newBooks);
        }
        area.querySelector('.list-book__list').append(dragger);
    });
});

},{"./library":"j4BrA","./appendCard":"i9GQ7"}],"esyGm":[function(require,module,exports) {
var _library = require("./library");
const $modal = document.querySelector('.modal');
const $modalContent = $modal.querySelector('.modal__content');
function editBookModal(book) {
    return `
  <form action="/" class="modal__form" data-id="${book.id}">
    <div class="modal__box">
      <label class="modal__info" for="modal-title">Название книги: </label>
      <input class="modal__edit-title" name="title" value="${book.title}" id="modal-title"/>
      <label class="modal__info modal__info--text" for="modal-text">Текст книги: </label>
      <textarea class="modal__edit-text" name="text" id="modal-text">${book.text}</textarea>
    </div>
    <button type="submit" class="btn">Сохранить</button>
  </form>`;
}
$modal.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = e.target.dataset.id;
    const updateBook = _library.library.get().map((book)=>{
        if (book.id.toString() === id) return {
            ...book,
            title: formData.get('title'),
            text: formData.get('text')
        };
        return book;
    });
    _library.library.set(updateBook);
    $modal.classList.remove('modal--visible');
    const cards = document.querySelectorAll(`[data-id='${id}'`);
    [
        ...cards
    ].forEach((card)=>{
        if (card.tagName === 'LI') {
            const title = formData.get('title') || 'book`s title';
            card.querySelector('.card-book__name').innerText = title;
        }
    });
});
function readBookModal(book) {
    return `
    <h2 class="modal__title-book">${book.title}</h2>
    <p class="modal__text-book">${book.text}</p>`;
}
$modal.addEventListener('click', (e)=>{
    if (e.target.classList.contains('modal')) $modal.classList.remove('modal--visible');
});
const list = document.querySelectorAll('.list-book__list');
[
    ...list
].forEach((element1)=>{
    element1.addEventListener('click', (e)=>{
        const { target  } = e;
        if (target.tagName !== 'BUTTON') return;
        const id = target.closest('.card-book').dataset.id;
        if (target.classList.contains('card-book__btn-edit')) {
            $modal.classList.add('modal--visible');
            let book1 = _library.library.get().find((book)=>book.id.toString() === id
            );
            $modalContent.innerHTML = editBookModal(book1);
        }
        if (target.classList.contains('card-book__btn-status')) {
            let updateLibrary = _library.library.get().map((book)=>{
                return book.id.toString() === id ? {
                    ...book,
                    status: !book.status
                } : book;
            });
            _library.library.set(updateLibrary);
            const card = document.querySelectorAll(`[data-id='${id}'`);
            [
                ...card
            ].forEach((element)=>{
                element.classList.toggle('card-book--read');
            });
        }
        if (target.classList.contains('card-book__btn-read')) {
            $modal.classList.add('modal--visible');
            let book2 = _library.library.get().find((book)=>book.id.toString() === id
            );
            $modalContent.innerHTML = readBookModal(book2);
        }
        if (target.classList.contains('card-book__btn-delete')) {
            _library.library.set(_library.library.get().filter((book)=>book.id.toString() !== id
            ));
            const card = document.querySelectorAll(`[data-id='${id}'`);
            [
                ...card
            ].forEach((element)=>{
                element.remove();
            });
        }
    });
});

},{"./library":"j4BrA"}],"2G57T":[function() {},{}]},["5UGAA","7BQdY"], "7BQdY", "parcelRequire5495")

//# sourceMappingURL=index.38661719.js.map
