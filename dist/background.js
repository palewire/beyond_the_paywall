var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

createCommonjsModule(function (module, exports) {
(function (global, factory) {
  {
    factory(module);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function (module) {

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const CORE_ADDON_ID = "rally-core@mozilla.org";
const SIGNUP_URL = "https://mozilla-rally.github.io/core-addon/";

class Rally {
  /**
   * Initialize the Rally library.
   *
   * @param {String} keyId
   *        The id of the key used to encrypt outgoing data.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the outgoing data.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   * @param {Boolean} enableDevMode
   *        Whether or not to initialize Rally.js in developer mode.
   *        In this mode we ignore problems when communicating with
   *        core add-on.
   */
  async initialize(keyId, key, enableDevMode) {
    console.debug("Rally.initialize");

    this._validateEncryptionKey(keyId, key);

    this._keyId = keyId;
    this._key = key;
    this._enableDevMode = Boolean(enableDevMode);

    let hasRally = await this._checkRallyCore().then(() => {
      console.debug("Rally.initialize - Found the Core Add-on.");
      return true;
    }).catch(async () => {
      // We did not find the Rally Core Add-on. But maybe we
      // are in developer mode. Do not trigger the sign-up flow
      // if that's the case.
      if (this._enableDevMode) {
        console.warn("Rally.initialize - Executing in developer mode.");
        return true;
      }

      // The Core Add-on was not found and we're not in developer
      // mode.
      await browser.tabs.create({ url: SIGNUP_URL });
      return false;
    });

    if (!hasRally) {
      throw new Error("Rally.initialize - Initialization failed.");
    }

    // Listen for incoming messages from the Core addon.
    browser.runtime.onMessageExternal.addListener(
      (m, s) => this._handleExternalMessage(m, s));

    // We went through the whole init process, it's now safe
    // to use the Rally public APIs.
    this._initialized = true;
  }

  /**
   * Check if the Core addon is installed.
   *
   * @returns {Promise} resolved if the core addon was found and
   *          communication was successful, rejected otherwise.
   */
  async _checkRallyCore() {
    try {
      const msg = {
        type: "core-check",
        data: {}
      };
      let response =
        await browser.runtime.sendMessage(CORE_ADDON_ID, msg, {});

      if (!response
          || response.type !== "core-check-response"
          || response.data.enrolled !== true) {
        throw new Error(`Rally._checkRallyCore - unexpected response returned ${response}`);
      }
    } catch (ex) {
      throw new Error("Rally._checkRallyCore - core addon not found");
    }
  }

  /**
   * Handles messages coming in from external addons.
   *
   * @param {Object} message
   *        The payload of the message.
   * @param {runtime.MessageSender} sender
   *        An object containing informations about who sent
   *        the message.
   * @returns {Promise} The response to the received message.
   *          It can be resolved with a value that is sent to the
   *          `sender`.
   */
  _handleExternalMessage(message, sender) {
    // We only expect messages coming from the core addon.
    if (sender.id != CORE_ADDON_ID) {
      return Promise.reject(
        new Error(`Rally._handleExternalMessage - unexpected sender ${sender.id}`));
    }

    switch (message.type) {
      case "uninstall":
        return browser.management.uninstallSelf({showConfirmDialog: false});
      default:
        return Promise.reject(
          new Error(`Rally._handleExternalMessage - unexpected message type ${message.type}`));
    }
  }

  /**
   * Validate the provided encryption keys.
   *
   * @param {String} keyId
   *        The id of the key used to encrypt outgoing data.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the outgoing data.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   *
   * @throws {Error} if either the key id or the JWK key object are
   *         invalid.
   */
  _validateEncryptionKey(keyId, key) {
    if (typeof keyId !== "string") {
      throw new Error(`Rally._validateEncryptionKey - Invalid encryption key id ${keyId}`);
    }

    if (typeof key !== "object") {
      throw new Error(`Rally._validateEncryptionKey - Invalid encryption key ${key}`);
    }
  }

  /**
   * Submit an encrypted ping through the Rally Core addon.
   *
   * @param {String} payloadType
   *        The type of the encrypted payload. This will define the
   *        `schemaName` of the ping.
   * @param {Object} payload
   *        A JSON-serializable payload to be sent with the ping.
   */
  async sendPing(payloadType, payload) {
    if (!this._initialized) {
      console.error("Rally.sendPing - Not initialzed, call `initialize()`");
      return;
    }

    // When in developer mode, dump the payload to the console.
    if (this._enableDevMode) {
      console.log(
        `Rally.sendPing - Developer mode. ${payloadType} will not be submitted`,
        payload
      );
      return;
    }

    // Wrap everything in a try block, as we don't really want
    // data collection to be the culprit of a bug hindering user
    // experience.
    try {
      // The unique identifier of the study can be used as the
      // namespace, in order to make sure data is routed to the
      // proper analysis sandbox.
      const studyName = browser.runtime.id;

      // This function may be mistakenly called while init has not
      // finished. Let's be safe and check for key validity again.
      this._validateEncryptionKey(this._keyId, this._key);

      const msg = {
        type: "telemetry-ping",
        data: {
          payloadType: payloadType,
          payload: payload,
          namespace: studyName,
          keyId: this._keyId,
          key: this._key
        }
      };
      await browser.runtime.sendMessage(CORE_ADDON_ID, msg, {});
    } catch (ex) {
      console.error(`Rally.sendPing - error while sending ${payloadType}`, ex);
    }
  }
}

/**
 * This module provides utilities for logging debugging events.
 * The module currently just outputs events with `console.debug`.
 * 
 * @module webScience.debugging
 */

/**
 * Create a debugging logger, a function that logs debugging events (as strings).
 * @param {string} moduleName - A name that uniquely identifies the module
 * generating the debugging events.
 * @returns {function(string)} - A debugging logger.
 */
function getDebuggingLog(moduleName) {
    return ((text) => {
    });
}

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.0.3, Wed Nov 18 2020
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
 
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
        global;
if (typeof Promise !== 'undefined' && !_global.Promise) {
    _global.Promise = Promise;
}
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    if (typeof extension === 'function')
        extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ?
        { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } :
        { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop);
    var proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b)
        throw new Error("Assertion Failed");
}
function asap(fn) {
    if (_global.setImmediate)
        setImmediate(fn);
    else
        setTimeout(fn, 0);
}

function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}

function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    }
    catch (ex) {
        onerror && onerror(ex);
    }
}
function getByKeyPath(obj, keyPath) {
    if (hasOwn(obj, keyPath))
        return obj[keyPath];
    if (!keyPath)
        return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}
function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined)
        return;
    if ('isFrozen' in Object && Object.isFrozen(obj))
        return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    }
    else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
                if (value === undefined) {
                    if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                        obj.splice(currentKeyPath, 1);
                    else
                        delete obj[currentKeyPath];
                }
                else
                    obj[currentKeyPath] = value;
            else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj)
                    innerObj = (obj[currentKeyPath] = {});
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        }
        else {
            if (value === undefined) {
                if (isArray(obj) && !isNaN(parseInt(keyPath)))
                    obj.splice(keyPath, 1);
                else
                    delete obj[keyPath];
            }
            else
                obj[keyPath] = value;
        }
    }
}
function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string')
        setByKeyPath(obj, keyPath, undefined);
    else if ('length' in keyPath)
        [].map.call(keyPath, function (kp) {
            setByKeyPath(obj, kp, undefined);
        });
}
function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m))
            rv[m] = obj[m];
    }
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
    .split(',').concat(flatten([8, 16, 32, 64].map(function (num) { return ["Int", "Uint", "Float"].map(function (t) { return t + num + "Array"; }); }))).filter(function (t) { return _global[t]; });
var intrinsicTypes = intrinsicTypeNames.map(function (t) { return _global[t]; });
var intrinsicTypeNameSet = arrayToObject(intrinsicTypeNames, function (x) { return [x, true]; });
function deepClone(any) {
    if (!any || typeof any !== 'object')
        return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    }
    else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
        rv = any;
    }
    else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}
var toString = {}.toString;
function toStringTag(o) {
    return toString.call(o).slice(8, -1);
}
var getValueOf = function (val, type) {
    return type === "Array" ? '' + val.map(function (v) { return getValueOf(v, toStringTag(v)); }) :
        type === "ArrayBuffer" ? '' + new Uint8Array(val) :
            type === "Date" ? val.getTime() :
                ArrayBuffer.isView(val) ? '' + new Uint8Array(val.buffer) :
                    val;
};
function getObjectDiff(a, b, rv, prfx) {
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop))
            rv[prfx + prop] = undefined;
        else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === 'object' && typeof bp === 'object' && ap && bp) {
                var apTypeName = toStringTag(ap);
                var bpTypeName = toStringTag(bp);
                if (apTypeName === bpTypeName) {
                    if (intrinsicTypeNameSet[apTypeName]) {
                        if (getValueOf(ap, apTypeName) !== getValueOf(bp, bpTypeName)) {
                            rv[prfx + prop] = b[prop];
                        }
                    }
                    else {
                        getObjectDiff(ap, bp, rv, prfx + prop + ".");
                    }
                }
                else {
                    rv[prfx + prop] = b[prop];
                }
            }
            else if (ap !== bp)
                rv[prfx + prop] = b[prop];
        }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop];
        }
    });
    return rv;
}
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () { return null; };
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike))
            return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string')
            return [arrayLike];
        if ((it = getIteratorOf(arrayLike))) {
            a = [];
            while (x = it.next(), !x.done)
                a.push(x.value);
            return a;
        }
        if (arrayLike == null)
            return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--)
                a[i] = arrayLike[i];
            return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--)
        a[i] = arguments[i];
    return a;
}
var isAsyncFunction = typeof Symbol !== 'undefined'
    ? function (fn) { return fn[Symbol.toStringTag] === 'AsyncFunction'; }
    : function () { return false; };

var debug = typeof location !== 'undefined' &&
    /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}
var libraryFilter = function () { return true; };
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    if (NEEDS_THROW_FOR_STACK)
        try {
            throw new Error();
        }
        catch (e) {
            return e;
        }
    return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack)
        return "";
    numIgnoredFrames = (numIgnoredFrames || 0);
    if (stack.indexOf(exception.name) === 0)
        numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n')
        .slice(numIgnoredFrames)
        .filter(libraryFilter)
        .map(function (frame) { return "\n" + frame; })
        .join('');
}

var dexieErrorNames = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait'
];
var idbDomErrorNames = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone'
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};
function DexieError(name, msg) {
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack ||
                (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () { return this.name + ": " + this.message; }
});
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + Object.keys(failures)
        .map(function (key) { return failures[key].toString(); })
        .filter(function (v, i, s) { return s.indexOf(v) === i; })
        .join('\n');
}
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function (obj, name) { return (obj[name] = name + "Error", obj); }, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function (obj, name) {
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        }
        else if (typeof msgOrInner === 'string') {
            this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
            this.inner = inner || null;
        }
        else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + " " + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
        return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}
var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1)
        obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() { }
function mirror(val) { return val; }
function pureFunctionChain(f1, f2) {
    if (f1 == null || f1 === mirror)
        return f2;
    return function (val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined)
            arguments[0] = res;
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}
function hookUpdatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ?
            (res2 === undefined ? undefined : res2) :
            (extend(res, res2));
    };
}
function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        if (f2.apply(this, arguments) === false)
            return false;
        return f1.apply(this, arguments);
    };
}

function promisableChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this, i = arguments.length, args = new Array(i);
            while (i--)
                args[i] = arguments[i];
            return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 100;
var _a = typeof Promise === 'undefined' ?
    [] :
    (function () {
        var globalP = Promise.resolve();
        if (typeof crypto === 'undefined' || !crypto.subtle)
            return [globalP, globalP.__proto__, globalP];
        var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
            nativeP,
            nativeP.__proto__,
            globalP
        ];
    })();
var resolvedNativePromise = _a[0];
var nativePromiseProto = _a[1];
var resolvedGlobalPromise = _a[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ?
    function () { resolvedGlobalPromise.then(physicalTick); }
    :
        _global.setImmediate ?
            setImmediate.bind(null, physicalTick) :
            _global.MutationObserver ?
                function () {
                    var hiddenDiv = document.createElement("div");
                    (new MutationObserver(function () {
                        physicalTick();
                        hiddenDiv = null;
                    })).observe(hiddenDiv, { attributes: true });
                    hiddenDiv.setAttribute('i', '1');
                } :
                function () { setTimeout(physicalTick, 0); };
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};
var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror;
var globalPSD = {
    id: 'global',
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            }
            catch (e) { }
        });
    }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
    if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop;
    this._lib = false;
    var psd = (this._PSD = PSD);
    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0;
    }
    if (typeof fn !== 'function') {
        if (fn !== INTERNAL)
            throw new TypeError('Not a function');
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false)
            handleRejection(this, this._value);
        return;
    }
    this._state = null;
    this._value = null;
    ++psd.ref;
    executePromiseTask(this, fn);
}
var thenProp = {
    get: function () {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            var cleanup = possibleAwait && !decrementExpectedAwaits();
            var rv = new DexiePromise(function (resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            debug && linkToPreviousPromise(rv, this);
            return rv;
        }
        then.prototype = INTERNAL;
        return then;
    },
    set: function (value) {
        setProp(this, 'then', value && value.prototype === INTERNAL ?
            thenProp :
            {
                get: function () {
                    return value;
                },
                set: thenProp.set
            });
    }
};
props(DexiePromise.prototype, {
    then: thenProp,
    _then: function (onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function (onRejected) {
        if (arguments.length === 1)
            return this.then(null, onRejected);
        var type = arguments[0], handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            return err instanceof type ? handler(err) : PromiseReject(err);
        })
            : this.then(null, function (err) {
                return err && err.name === type ? handler(err) : PromiseReject(err);
            });
    },
    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },
    stack: {
        get: function () {
            if (this._stack)
                return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null)
                    this._stack = stack;
                return stack;
            }
            finally {
                stack_being_generated = false;
            }
        }
    },
    timeout: function (ms, msg) {
        var _this = this;
        return ms < Infinity ?
            new DexiePromise(function (resolve, reject) {
                var handle = setTimeout(function () { return reject(new exceptions.Timeout(msg)); }, ms);
                _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
    }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
    setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
}
props(DexiePromise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments)
            .map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
            if (values.length === 0)
                resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) { return DexiePromise.resolve(a).then(function (x) {
                values[i] = x;
                if (!--remaining)
                    resolve(values);
            }, reject); });
        });
    },
    resolve: function (value) {
        if (value instanceof DexiePromise)
            return value;
        if (value && typeof value.then === 'function')
            return new DexiePromise(function (resolve, reject) {
                value.then(resolve, reject);
            });
        var rv = new DexiePromise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
    },
    reject: PromiseReject,
    race: function () {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
            values.map(function (value) { return DexiePromise.resolve(value).then(resolve, reject); });
        });
    },
    PSD: {
        get: function () { return PSD; },
        set: function (value) { return PSD = value; }
    },
    totalEchoes: { get: function () { return totalEchoes; } },
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function () { return asap$1; },
        set: function (value) { asap$1 = value; }
    },
    rejectionMapper: {
        get: function () { return rejectionMapper; },
        set: function (value) { rejectionMapper = value; }
    },
    follow: function (fn, zoneProps) {
        return new DexiePromise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject;
                psd.finalize = callBoth(function () {
                    var _this = this;
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, zoneProps, resolve, reject);
        });
    }
});
if (NativePromise) {
    if (NativePromise.allSettled)
        setProp(DexiePromise, "allSettled", function () {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve) {
                if (possiblePromises.length === 0)
                    resolve([]);
                var remaining = possiblePromises.length;
                var results = new Array(remaining);
                possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return results[i] = { status: "fulfilled", value: value }; }, function (reason) { return results[i] = { status: "rejected", reason: reason }; })
                    .then(function () { return --remaining || resolve(results); }); });
            });
        });
    if (NativePromise.any && typeof AggregateError !== 'undefined')
        setProp(DexiePromise, "any", function () {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve, reject) {
                if (possiblePromises.length === 0)
                    reject(new AggregateError([]));
                var remaining = possiblePromises.length;
                var failures = new Array(remaining);
                possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return resolve(value); }, function (failure) {
                    failures[i] = failure;
                    if (!--remaining)
                        reject(new AggregateError(failures));
                }); });
            });
        });
}
function executePromiseTask(promise, fn) {
    try {
        fn(function (value) {
            if (promise._state !== null)
                return;
            if (value === promise)
                throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof DexiePromise ?
                        value._then(resolve, reject) :
                        value.then(resolve, reject);
                });
            }
            else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
                endMicroTickScope();
        }, handleRejection.bind(null, promise));
    }
    catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null)
        return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ?
                    origProp && (origProp.get ?
                        origProp.get.apply(reason) :
                        origProp.value) :
                    promise.stack;
            }
        });
    });
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick)
        endMicroTickScope();
}
function propagateAllListeners(promise) {
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize();
    if (numScheduledCalls === 0) {
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0)
                finalizePhysicalTick();
        }, []);
    }
}
function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
    try {
        currentFulfiller = promise;
        var ret, value = promise._value;
        if (promise._state) {
            ret = cb(value);
        }
        else {
            if (rejectingErrors.length)
                rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1)
                markErrorAsHandled(promise);
        }
        listener.resolve(ret);
    }
    catch (e) {
        listener.reject(e);
    }
    finally {
        currentFulfiller = null;
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit)
        return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value, errorName, message;
        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        }
        else {
            errorName = failure;
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1)
            stacks.push(stack);
        if (promise._prev)
            getStack(promise._prev, stacks, limit);
    }
    return stacks;
}
function linkToPreviousPromise(promise, prev) {
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0);
    var i = finalizers.length;
    while (i)
        finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
    }, []);
}
function addPossiblyUnhandledError(promise) {
    if (!unhandledErrors.some(function (p) { return p._value === promise._value; }))
        unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
    var i = unhandledErrors.length;
    while (i)
        if (unhandledErrors[--i]._value === promise._value) {
            unhandledErrors.splice(i, 1);
            return;
        }
}
function PromiseReject(reason) {
    return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
        }
        catch (e) {
            errorCatcher && errorCatcher(e);
        }
        finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
                endMicroTickScope();
        }
    };
}
var task = { awaits: 0, echoes: 0, id: 0 };
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props$$1, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: { value: DexiePromise, configurable: true, writable: true },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
    } : {};
    if (props$$1)
        extend(psd, props$$1);
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0)
        psd.finalize();
    return rv;
}
function incrementExpectedAwaits() {
    if (!task.id)
        task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
}
function decrementExpectedAwaits() {
    if (!task.awaits)
        return false;
    if (--task.awaits === 0)
        task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT;
    return true;
}
if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
    incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function (x) {
            decrementExpectedAwaits();
            return x;
        }, function (e) {
            decrementExpectedAwaits();
            return rejection(e);
        });
    }
    return possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.id = 0;
    }
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
        enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    }
    if (targetZone === PSD)
        return;
    PSD = targetZone;
    if (currentZone === globalPSD)
        globalPSD.env = snapShot();
    if (patchGlobalPromise) {
        var GlobalPromise_1 = globalPSD.env.Promise;
        var targetEnv = targetZone.env;
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise_1.prototype.then = targetEnv.gthen;
        if (currentZone.global || targetZone.global) {
            Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
            GlobalPromise_1.all = targetEnv.all;
            GlobalPromise_1.race = targetEnv.race;
            GlobalPromise_1.resolve = targetEnv.resolve;
            GlobalPromise_1.reject = targetEnv.reject;
            if (targetEnv.allSettled)
                GlobalPromise_1.allSettled = targetEnv.allSettled;
            if (targetEnv.any)
                GlobalPromise_1.any = targetEnv.any;
        }
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
    }
    finally {
        switchToZone(outerScope, false);
    }
}
function enqueueNativeMicroTask(job) {
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
    return typeof fn !== 'function' ? fn : function () {
        var outerZone = PSD;
        if (possibleAwait)
            incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
            return fn.apply(this, arguments);
        }
        finally {
            switchToZone(outerZone, false);
            if (cleanup)
                enqueueNativeMicroTask(decrementExpectedAwaits);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function (onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
    };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    }
    catch (e) { }
    if (rv !== false)
        try {
            var event, eventData = { promise: promise, reason: err };
            if (_global.document && document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(UNHANDLEDREJECTION, true, true);
                extend(event, eventData);
            }
            else if (_global.CustomEvent) {
                event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
                extend(event, eventData);
            }
            if (event && _global.dispatchEvent) {
                dispatchEvent(event);
                if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                    try {
                        _global.onunhandledrejection(event);
                    }
                    catch (_) { }
            }
            if (debug && event && !event.defaultPrevented) {
                console.warn("Unhandled rejection: " + (err.stack || err));
            }
        }
        catch (e) { }
}
var rejection = DexiePromise.reject;

function tempTransaction(db, mode, storeNames, fn) {
    if (!db._state.openComplete && (!PSD.letThrough)) {
        if (!db._state.isBeingOpened) {
            if (!db._options.autoOpen)
                return rejection(new exceptions.DatabaseClosed());
            db.open().catch(nop);
        }
        return db._state.dbReadyPromise.then(function () { return tempTransaction(db, mode, storeNames, fn); });
    }
    else {
        var trans = db._createTransaction(mode, storeNames, db._dbSchema);
        try {
            trans.create();
        }
        catch (ex) {
            return rejection(ex);
        }
        return trans._promise(mode, function (resolve, reject) {
            return newScope(function () {
                PSD.trans = trans;
                return fn(resolve, reject, trans);
            });
        }).then(function (result) {
            return trans._completion.then(function () { return result; });
        });
    }
}

var DEXIE_VERSION = '3.0.3';
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) { return !/(dexie\.js|dexie\.min\.js)/.test(frame); };
var DBNAMES_DB = '__dbnames';
var READONLY = 'readonly';
var READWRITE = 'readwrite';

function combine(filter1, filter2) {
    return filter1 ?
        filter2 ?
            function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } :
            filter1 :
        filter2;
}

var AnyRange = {
    type: 3          ,
    lower: -Infinity,
    lowerOpen: false,
    upper: [[]],
    upperOpen: false
};

function workaroundForUndefinedPrimKey(keyPath) {
    return function (obj) {
        if (getByKeyPath(obj, keyPath) === undefined) {
            obj = deepClone(obj);
            delByKeyPath(obj, keyPath);
        }
        return obj;
    };
}

var Table =               (function () {
    function Table() {
    }
    Table.prototype._trans = function (mode, fn, writeLocked) {
        var trans = this._tx || PSD.trans;
        var tableName = this.name;
        function checkTableInTransaction(resolve, reject, trans) {
            if (!trans.schema[tableName])
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn(trans.idbtrans, trans);
        }
        var wasRootExec = beginMicroTickScope();
        try {
            return trans && trans.db === this.db ?
                trans === PSD.trans ?
                    trans._promise(mode, checkTableInTransaction, writeLocked) :
                    newScope(function () { return trans._promise(mode, checkTableInTransaction, writeLocked); }, { trans: trans, transless: PSD.transless || PSD }) :
                tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
        }
        finally {
            if (wasRootExec)
                endMicroTickScope();
        }
    };
    Table.prototype.get = function (keyOrCrit, cb) {
        var _this = this;
        if (keyOrCrit && keyOrCrit.constructor === Object)
            return this.where(keyOrCrit).first(cb);
        return this._trans('readonly', function (trans) {
            return _this.core.get({ trans: trans, key: keyOrCrit })
                .then(function (res) { return _this.hook.reading.fire(res); });
        }).then(cb);
    };
    Table.prototype.where = function (indexOrCrit) {
        if (typeof indexOrCrit === 'string')
            return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit))
            return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
        var keyPaths = keys(indexOrCrit);
        if (keyPaths.length === 1)
            return this
                .where(keyPaths[0])
                .equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
            return ix.compound &&
                keyPaths.every(function (keyPath) { return ix.keyPath.indexOf(keyPath) >= 0; }) &&
                ix.keyPath.every(function (keyPath) { return keyPaths.indexOf(keyPath) >= 0; });
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString)
            return this
                .where(compoundIndex.name)
                .equals(compoundIndex.keyPath.map(function (kp) { return indexOrCrit[kp]; }));
        if (!compoundIndex && debug)
            console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " +
                ("compound index [" + keyPaths.join('+') + "]"));
        var idxByName = this.schema.idxByName;
        var idb = this.db._deps.indexedDB;
        function equals(a, b) {
            try {
                return idb.cmp(a, b) === 0;
            }
            catch (e) {
                return false;
            }
        }
        var _a = keyPaths.reduce(function (_a, keyPath) {
            var prevIndex = _a[0], prevFilterFn = _a[1];
            var index = idxByName[keyPath];
            var value = indexOrCrit[keyPath];
            return [
                prevIndex || index,
                prevIndex || !index ?
                    combine(prevFilterFn, index && index.multi ?
                        function (x) {
                            var prop = getByKeyPath(x, keyPath);
                            return isArray(prop) && prop.some(function (item) { return equals(value, item); });
                        } : function (x) { return equals(value, getByKeyPath(x, keyPath)); })
                    : prevFilterFn
            ];
        }, [null, null]), idx = _a[0], filterFunction = _a[1];
        return idx ?
            this.where(idx.name).equals(indexOrCrit[idx.keyPath])
                .filter(filterFunction) :
            compoundIndex ?
                this.filter(filterFunction) :
                this.where(keyPaths).equals('');
    };
    Table.prototype.filter = function (filterFunction) {
        return this.toCollection().and(filterFunction);
    };
    Table.prototype.count = function (thenShortcut) {
        return this.toCollection().count(thenShortcut);
    };
    Table.prototype.offset = function (offset) {
        return this.toCollection().offset(offset);
    };
    Table.prototype.limit = function (numRows) {
        return this.toCollection().limit(numRows);
    };
    Table.prototype.each = function (callback) {
        return this.toCollection().each(callback);
    };
    Table.prototype.toArray = function (thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
    };
    Table.prototype.toCollection = function () {
        return new this.db.Collection(new this.db.WhereClause(this));
    };
    Table.prototype.orderBy = function (index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ?
            "[" + index.join('+') + "]" :
            index));
    };
    Table.prototype.reverse = function () {
        return this.toCollection().reverse();
    };
    Table.prototype.mapToClass = function (constructor) {
        this.schema.mappedClass = constructor;
        var readHook = function (obj) {
            if (!obj)
                return obj;
            var res = Object.create(constructor.prototype);
            for (var m in obj)
                if (hasOwn(obj, m))
                    try {
                        res[m] = obj[m];
                    }
                    catch (_) { }
            return res;
        };
        if (this.schema.readHook) {
            this.hook.reading.unsubscribe(this.schema.readHook);
        }
        this.schema.readHook = readHook;
        this.hook("reading", readHook);
        return constructor;
    };
    Table.prototype.defineClass = function () {
        function Class(content) {
            extend(this, content);
        }
        
        return this.mapToClass(Class);
    };
    Table.prototype.add = function (obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans('readwrite', function (trans) {
            return _this.core.mutate({ trans: trans, type: 'add', keys: key != null ? [key] : null, values: [objToAdd] });
        }).then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
            .then(function (lastResult) {
            if (keyPath) {
                try {
                    setByKeyPath(obj, keyPath, lastResult);
                }
                catch (_) { }
                
            }
            return lastResult;
        });
    };
    Table.prototype.update = function (keyOrObject, modifications) {
        if (typeof modifications !== 'object' || isArray(modifications))
            throw new exceptions.InvalidArgument("Modifications must be an object.");
        if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
            keys(modifications).forEach(function (keyPath) {
                setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
            });
            var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
            if (key === undefined)
                return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
            return this.where(":id").equals(key).modify(modifications);
        }
        else {
            return this.where(":id").equals(keyOrObject).modify(modifications);
        }
    };
    Table.prototype.put = function (obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'put', values: [objToAdd], keys: key != null ? [key] : null }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
            .then(function (lastResult) {
            if (keyPath) {
                try {
                    setByKeyPath(obj, keyPath, lastResult);
                }
                catch (_) { }
                
            }
            return lastResult;
        });
    };
    Table.prototype.delete = function (key) {
        var _this = this;
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'delete', keys: [key] }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
    };
    Table.prototype.clear = function () {
        var _this = this;
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'deleteRange', range: AnyRange }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
    };
    Table.prototype.bulkGet = function (keys$$1) {
        var _this = this;
        return this._trans('readonly', function (trans) {
            return _this.core.getMany({
                keys: keys$$1,
                trans: trans
            }).then(function (result) { return result.map(function (res) { return _this.hook.reading.fire(res); }); });
        });
    };
    Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
        var _this = this;
        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys$$1)
                throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys$$1 && keys$$1.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToAdd = keyPath && auto ?
                objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                objects;
            return _this.core.mutate({ trans: trans, type: 'add', keys: keys$$1, values: objectsToAdd, wantResults: wantResults })
                .then(function (_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                    return result;
                throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) { return failures[pos]; }));
            });
        });
    };
    Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
        var _this = this;
        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys$$1)
                throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys$$1 && keys$$1.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToPut = keyPath && auto ?
                objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                objects;
            return _this.core.mutate({ trans: trans, type: 'put', keys: keys$$1, values: objectsToPut, wantResults: wantResults })
                .then(function (_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                    return result;
                throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) { return failures[pos]; }));
            });
        });
    };
    Table.prototype.bulkDelete = function (keys$$1) {
        var _this = this;
        var numKeys = keys$$1.length;
        return this._trans('readwrite', function (trans) {
            return _this.core.mutate({ trans: trans, type: 'delete', keys: keys$$1 });
        }).then(function (_a) {
            var numFailures = _a.numFailures, lastResult = _a.lastResult, failures = _a.failures;
            if (numFailures === 0)
                return lastResult;
            throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
        });
    };
    return Table;
}());

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            var i = arguments.length, args = new Array(i - 1);
            while (--i)
                args[i - 1] = arguments[i];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
        }
        else if (typeof (eventName) === 'string') {
            return evs[eventName];
        }
    };
    rv.addEventType = add;
    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object')
            return addConfiguredEvents(eventName);
        if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
        if (!defaultFunction)
            defaultFunction = nop;
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }
    function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            }
            else if (args === 'asap') {
                var context = add(eventName, mirror, function fire() {
                    var i = arguments.length, args = new Array(i);
                    while (i--)
                        args[i] = arguments[i];
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            }
            else
                throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

function makeClassConstructor(prototype, constructor) {
    derive(constructor).from({ prototype: prototype });
    return constructor;
}

function createTableConstructor(db) {
    return makeClassConstructor(Table.prototype, function Table$$1(name, tableSchema, trans) {
        this.db = db;
        this._tx = trans;
        this.name = name;
        this.schema = tableSchema;
        this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
    });
}

function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) &&
        (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
    ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
    var curr = ctx.replayFilter;
    ctx.replayFilter = curr ? function () { return combine(curr(), factory()); } : factory;
    ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
    ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
    if (ctx.isPrimKey)
        return coreSchema.primaryKey;
    var index = coreSchema.getIndexByKeyPath(ctx.index);
    if (!index)
        throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
    return index;
}
function openCursor(ctx, coreTable, trans) {
    var index = getIndexOrStore(ctx, coreTable.schema);
    return coreTable.openCursor({
        trans: trans,
        values: !ctx.keysOnly,
        reverse: ctx.dir === 'prev',
        unique: !!ctx.unique,
        query: {
            index: index,
            range: ctx.range
        }
    });
}
function iter(ctx, fn, coreTrans, coreTable) {
    var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
    if (!ctx.or) {
        return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
    }
    else {
        var set_1 = {};
        var union = function (item, cursor, advance) {
            if (!filter || filter(cursor, advance, function (result) { return cursor.stop(result); }, function (err) { return cursor.fail(err); })) {
                var primaryKey = cursor.primaryKey;
                var key = '' + primaryKey;
                if (key === '[object ArrayBuffer]')
                    key = '' + new Uint8Array(primaryKey);
                if (!hasOwn(set_1, key)) {
                    set_1[key] = true;
                    fn(item, cursor, advance);
                }
            }
        };
        return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
        ]);
    }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
    var mappedFn = valueMapper ? function (x, c, a) { return fn(valueMapper(x), c, a); } : fn;
    var wrappedFn = wrap(mappedFn);
    return cursorPromise.then(function (cursor) {
        if (cursor) {
            return cursor.start(function () {
                var c = function () { return cursor.continue(); };
                if (!filter || filter(cursor, function (advancer) { return c = advancer; }, function (val) { cursor.stop(val); c = nop; }, function (e) { cursor.fail(e); c = nop; }))
                    wrappedFn(cursor.value, cursor, function (advancer) { return c = advancer; });
                c();
            });
        }
    });
}

var Collection =               (function () {
    function Collection() {
    }
    Collection.prototype._read = function (fn, cb) {
        var ctx = this._ctx;
        return ctx.error ?
            ctx.table._trans(null, rejection.bind(null, ctx.error)) :
            ctx.table._trans('readonly', fn).then(cb);
    };
    Collection.prototype._write = function (fn) {
        var ctx = this._ctx;
        return ctx.error ?
            ctx.table._trans(null, rejection.bind(null, ctx.error)) :
            ctx.table._trans('readwrite', fn, "locked");
    };
    Collection.prototype._addAlgorithm = function (fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
    };
    Collection.prototype._iterate = function (fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
    };
    Collection.prototype.clone = function (props$$1) {
        var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
        if (props$$1)
            extend(ctx, props$$1);
        rv._ctx = ctx;
        return rv;
    };
    Collection.prototype.raw = function () {
        this._ctx.valueMapper = null;
        return this;
    };
    Collection.prototype.each = function (fn) {
        var ctx = this._ctx;
        return this._read(function (trans) { return iter(ctx, fn, trans, ctx.table.core); });
    };
    Collection.prototype.count = function (cb) {
        var _this = this;
        return this._read(function (trans) {
            var ctx = _this._ctx;
            var coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, true)) {
                return coreTable.count({
                    trans: trans,
                    query: {
                        index: getIndexOrStore(ctx, coreTable.schema),
                        range: ctx.range
                    }
                }).then(function (count) { return Math.min(count, ctx.limit); });
            }
            else {
                var count = 0;
                return iter(ctx, function () { ++count; return false; }, trans, coreTable)
                    .then(function () { return count; });
            }
        }).then(cb);
    };
    Collection.prototype.sortBy = function (keyPath, cb) {
        var parts = keyPath.split('.').reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
        function getval(obj, i) {
            if (i)
                return getval(obj[parts[i]], i - 1);
            return obj[lastPart];
        }
        var order = this._ctx.dir === "next" ? 1 : -1;
        function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }
        return this.toArray(function (a) {
            return a.sort(sorter);
        }).then(cb);
    };
    Collection.prototype.toArray = function (cb) {
        var _this = this;
        return this._read(function (trans) {
            var ctx = _this._ctx;
            if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper;
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    limit: ctx.limit,
                    values: true,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                }).then(function (_a) {
                    var result = _a.result;
                    return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
            }
            else {
                var a_1 = [];
                return iter(ctx, function (item) { return a_1.push(item); }, trans, ctx.table.core).then(function () { return a_1; });
            }
        }, cb);
    };
    Collection.prototype.offset = function (offset) {
        var ctx = this._ctx;
        if (offset <= 0)
            return this;
        ctx.offset += offset;
        if (isPlainKeyRange(ctx)) {
            addReplayFilter(ctx, function () {
                var offsetLeft = offset;
                return function (cursor, advance) {
                    if (offsetLeft === 0)
                        return true;
                    if (offsetLeft === 1) {
                        --offsetLeft;
                        return false;
                    }
                    advance(function () {
                        cursor.advance(offsetLeft);
                        offsetLeft = 0;
                    });
                    return false;
                };
            });
        }
        else {
            addReplayFilter(ctx, function () {
                var offsetLeft = offset;
                return function () { return (--offsetLeft < 0); };
            });
        }
        return this;
    };
    Collection.prototype.limit = function (numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows);
        addReplayFilter(this._ctx, function () {
            var rowsLeft = numRows;
            return function (cursor, advance, resolve) {
                if (--rowsLeft <= 0)
                    advance(resolve);
                return rowsLeft >= 0;
            };
        }, true);
        return this;
    };
    Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function (cursor, advance, resolve) {
            if (filterFunction(cursor.value)) {
                advance(resolve);
                return bIncludeStopEntry;
            }
            else {
                return true;
            }
        });
        return this;
    };
    Collection.prototype.first = function (cb) {
        return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
    };
    Collection.prototype.last = function (cb) {
        return this.reverse().first(cb);
    };
    Collection.prototype.filter = function (filterFunction) {
        addFilter(this._ctx, function (cursor) {
            return filterFunction(cursor.value);
        });
        addMatchFilter(this._ctx, filterFunction);
        return this;
    };
    Collection.prototype.and = function (filter) {
        return this.filter(filter);
    };
    Collection.prototype.or = function (indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
    };
    Collection.prototype.reverse = function () {
        this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
        if (this._ondirectionchange)
            this._ondirectionchange(this._ctx.dir);
        return this;
    };
    Collection.prototype.desc = function () {
        return this.reverse();
    };
    Collection.prototype.eachKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) { cb(cursor.key, cursor); });
    };
    Collection.prototype.eachUniqueKey = function (cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
    };
    Collection.prototype.eachPrimaryKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) { cb(cursor.primaryKey, cursor); });
    };
    Collection.prototype.keys = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
            a.push(cursor.key);
        }).then(function () {
            return a;
        }).then(cb);
    };
    Collection.prototype.primaryKeys = function (cb) {
        var ctx = this._ctx;
        if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            return this._read(function (trans) {
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    values: false,
                    limit: ctx.limit,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                });
            }).then(function (_a) {
                var result = _a.result;
                return result;
            }).then(cb);
        }
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
            a.push(cursor.primaryKey);
        }).then(function () {
            return a;
        }).then(cb);
    };
    Collection.prototype.uniqueKeys = function (cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
    };
    Collection.prototype.firstKey = function (cb) {
        return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
    };
    Collection.prototype.lastKey = function (cb) {
        return this.reverse().firstKey(cb);
    };
    Collection.prototype.distinct = function () {
        var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi)
            return this;
        var set = {};
        addFilter(this._ctx, function (cursor) {
            var strKey = cursor.primaryKey.toString();
            var found = hasOwn(set, strKey);
            set[strKey] = true;
            return !found;
        });
        return this;
    };
    Collection.prototype.modify = function (changes) {
        var _this = this;
        var ctx = this._ctx;
        return this._write(function (trans) {
            var modifyer;
            if (typeof changes === 'function') {
                modifyer = changes;
            }
            else {
                var keyPaths = keys(changes);
                var numKeys = keyPaths.length;
                modifyer = function (item) {
                    var anythingModified = false;
                    for (var i = 0; i < numKeys; ++i) {
                        var keyPath = keyPaths[i], val = changes[keyPath];
                        if (getByKeyPath(item, keyPath) !== val) {
                            setByKeyPath(item, keyPath, val);
                            anythingModified = true;
                        }
                    }
                    return anythingModified;
                };
            }
            var coreTable = ctx.table.core;
            var _a = coreTable.schema.primaryKey, outbound = _a.outbound, extractKey = _a.extractKey;
            var limit = 'testmode' in Dexie ? 1 : 2000;
            var cmp = _this.db.core.cmp;
            var totalFailures = [];
            var successCount = 0;
            var failedKeys = [];
            var applyMutateResult = function (expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
                    var pos = _a[_i];
                    totalFailures.push(failures[pos]);
                }
            };
            return _this.clone().primaryKeys().then(function (keys$$1) {
                var nextChunk = function (offset) {
                    var count = Math.min(limit, keys$$1.length - offset);
                    return coreTable.getMany({ trans: trans, keys: keys$$1.slice(offset, offset + count) }).then(function (values) {
                        var addValues = [];
                        var putValues = [];
                        var putKeys = outbound ? [] : null;
                        var deleteKeys = [];
                        for (var i = 0; i < count; ++i) {
                            var origValue = values[i];
                            var ctx_1 = {
                                value: deepClone(origValue),
                                primKey: keys$$1[offset + i]
                            };
                            if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                                if (ctx_1.value == null) {
                                    deleteKeys.push(keys$$1[offset + i]);
                                }
                                else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                                    deleteKeys.push(keys$$1[offset + i]);
                                    addValues.push(ctx_1.value);
                                }
                                else {
                                    putValues.push(ctx_1.value);
                                    if (outbound)
                                        putKeys.push(keys$$1[offset + i]);
                                }
                            }
                        }
                        return Promise.resolve(addValues.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'add', values: addValues })
                                .then(function (res) {
                                for (var pos in res.failures) {
                                    deleteKeys.splice(parseInt(pos), 1);
                                }
                                applyMutateResult(addValues.length, res);
                            })).then(function (res) { return putValues.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'put', keys: putKeys, values: putValues })
                                .then(function (res) { return applyMutateResult(putValues.length, res); }); }).then(function () { return deleteKeys.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'delete', keys: deleteKeys })
                                .then(function (res) { return applyMutateResult(deleteKeys.length, res); }); }).then(function () {
                            return keys$$1.length > offset + count && nextChunk(offset + limit);
                        });
                    });
                };
                return nextChunk(0).then(function () {
                    if (totalFailures.length > 0)
                        throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                    return keys$$1.length;
                });
            });
        });
    };
    Collection.prototype.delete = function () {
        var ctx = this._ctx, range = ctx.range;
        if (isPlainKeyRange(ctx) &&
            ((ctx.isPrimKey && !hangsOnDeleteLargeKeyRange) || range.type === 3          ))
         {
            return this._write(function (trans) {
                var primaryKey = ctx.table.core.schema.primaryKey;
                var coreRange = range;
                return ctx.table.core.count({ trans: trans, query: { index: primaryKey, range: coreRange } }).then(function (count) {
                    return ctx.table.core.mutate({ trans: trans, type: 'deleteRange', range: coreRange })
                        .then(function (_a) {
                        var failures = _a.failures; _a.lastResult; _a.results; var numFailures = _a.numFailures;
                        if (numFailures)
                            throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) { return failures[pos]; }), count - numFailures);
                        return count - numFailures;
                    });
                });
            });
        }
        return this.modify(function (value, ctx) { return ctx.value = null; });
    };
    return Collection;
}());

function createCollectionConstructor(db) {
    return makeClassConstructor(Collection.prototype, function Collection$$1(whereClause, keyRangeGenerator) {
        this.db = db;
        var keyRange = AnyRange, error = null;
        if (keyRangeGenerator)
            try {
                keyRange = keyRangeGenerator();
            }
            catch (ex) {
                error = ex;
            }
        var whereCtx = whereClause._ctx;
        var table = whereCtx.table;
        var readingHook = table.hook.reading.fire;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: (!whereCtx.index || (table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name)),
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error,
            or: whereCtx.or,
            valueMapper: readingHook !== mirror ? readingHook : null
        };
    });
}

function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
}

function fail(collectionOrWhereClause, err, T) {
    var collection = collectionOrWhereClause instanceof WhereClause ?
        new collectionOrWhereClause.Collection(collectionOrWhereClause) :
        collectionOrWhereClause;
    collection._ctx.error = T ? new T(err) : new TypeError(err);
    return collection;
}
function emptyCollection(whereClause) {
    return new whereClause.Collection(whereClause, function () { return rangeEqual(""); }).limit(0);
}
function upperFactory(dir) {
    return dir === "next" ?
        function (s) { return s.toUpperCase(); } :
        function (s) { return s.toLowerCase(); };
}
function lowerFactory(dir) {
    return dir === "next" ?
        function (s) { return s.toLowerCase(); } :
        function (s) { return s.toUpperCase(); };
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
    var length = Math.min(key.length, lowerNeedle.length);
    var llp = -1;
    for (var i = 0; i < length; ++i) {
        var lwrKeyChar = lowerKey[i];
        if (lwrKeyChar !== lowerNeedle[i]) {
            if (cmp(key[i], upperNeedle[i]) < 0)
                return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
            if (cmp(key[i], lowerNeedle[i]) < 0)
                return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
            if (llp >= 0)
                return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
            return null;
        }
        if (cmp(key[i], lwrKeyChar) < 0)
            llp = i;
    }
    if (length < lowerNeedle.length && dir === "next")
        return key + upperNeedle.substr(key.length);
    if (length < key.length && dir === "prev")
        return key.substr(0, upperNeedle.length);
    return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
    var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
    if (!needles.every(function (s) { return typeof s === 'string'; })) {
        return fail(whereClause, STRING_EXPECTED);
    }
    function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = (dir === "next" ? simpleCompare : simpleCompareReverse);
        var needleBounds = needles.map(function (needle) {
            return { lower: lower(needle), upper: upper(needle) };
        }).sort(function (a, b) {
            return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function (nb) { return nb.upper; });
        lowerNeedles = needleBounds.map(function (nb) { return nb.lower; });
        direction = dir;
        nextKeySuffix = (dir === "next" ? "" : suffix);
    }
    initDirection("next");
    var c = new whereClause.Collection(whereClause, function () { return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix); });
    c._ondirectionchange = function (direction) {
        initDirection(direction);
    };
    var firstPossibleNeedle = 0;
    c._addAlgorithm(function (cursor, advance, resolve) {
        var key = cursor.key;
        if (typeof key !== 'string')
            return false;
        var lowerKey = lower(key);
        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
            return true;
        }
        else {
            var lowestPossibleCasing = null;
            for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                if (casing === null && lowestPossibleCasing === null)
                    firstPossibleNeedle = i + 1;
                else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                    lowestPossibleCasing = casing;
                }
            }
            if (lowestPossibleCasing !== null) {
                advance(function () { cursor.continue(lowestPossibleCasing + nextKeySuffix); });
            }
            else {
                advance(resolve);
            }
            return false;
        }
    });
    return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
    return {
        type: 2            ,
        lower: lower,
        upper: upper,
        lowerOpen: lowerOpen,
        upperOpen: upperOpen
    };
}
function rangeEqual(value) {
    return {
        type: 1            ,
        lower: value,
        upper: value
    };
}

var WhereClause =               (function () {
    function WhereClause() {
    }
    Object.defineProperty(WhereClause.prototype, "Collection", {
        get: function () {
            return this._ctx.table.db.Collection;
        },
        enumerable: true,
        configurable: true
    });
    WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
        includeLower = includeLower !== false;
        includeUpper = includeUpper === true;
        try {
            if ((this._cmp(lower, upper) > 0) ||
                (this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                return emptyCollection(this);
            return new this.Collection(this, function () { return createRange(lower, upper, !includeLower, !includeUpper); });
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
    };
    WhereClause.prototype.equals = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return rangeEqual(value); });
    };
    WhereClause.prototype.above = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(value, undefined, true); });
    };
    WhereClause.prototype.aboveOrEqual = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(value, undefined, false); });
    };
    WhereClause.prototype.below = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(undefined, value, false, true); });
    };
    WhereClause.prototype.belowOrEqual = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(undefined, value); });
    };
    WhereClause.prototype.startsWith = function (str) {
        if (typeof str !== 'string')
            return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
    };
    WhereClause.prototype.startsWithIgnoreCase = function (str) {
        if (str === "")
            return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return x.indexOf(a[0]) === 0; }, [str], maxString);
    };
    WhereClause.prototype.equalsIgnoreCase = function (str) {
        return addIgnoreCaseAlgorithm(this, function (x, a) { return x === a[0]; }, [str], "");
    };
    WhereClause.prototype.anyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return a.indexOf(x) !== -1; }, set, "");
    };
    WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return a.some(function (n) { return x.indexOf(n) === 0; }); }, set, maxString);
    };
    WhereClause.prototype.anyOf = function () {
        var _this = this;
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = this._cmp;
        try {
            set.sort(compare);
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        if (set.length === 0)
            return emptyCollection(this);
        var c = new this.Collection(this, function () { return createRange(set[0], set[set.length - 1]); });
        c._ondirectionchange = function (direction) {
            compare = (direction === "next" ?
                _this._ascending :
                _this._descending);
            set.sort(compare);
        };
        var i = 0;
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            while (compare(key, set[i]) > 0) {
                ++i;
                if (i === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (compare(key, set[i]) === 0) {
                return true;
            }
            else {
                advance(function () { cursor.continue(set[i]); });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.notEqual = function (value) {
        return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
    };
    WhereClause.prototype.noneOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return new this.Collection(this);
        try {
            set.sort(this._ascending);
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var ranges = set.reduce(function (res, val) { return res ?
            res.concat([[res[res.length - 1][1], val]]) :
            [[minKey, val]]; }, null);
        ranges.push([set[set.length - 1], this.db._maxKey]);
        return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
    };
    WhereClause.prototype.inAnyRange = function (ranges, options) {
        var _this = this;
        var cmp = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
        if (ranges.length === 0)
            return emptyCollection(this);
        if (!ranges.every(function (range) {
            return range[0] !== undefined &&
                range[1] !== undefined &&
                ascending(range[0], range[1]) <= 0;
        })) {
            return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        }
        var includeLowers = !options || options.includeLowers !== false;
        var includeUppers = options && options.includeUppers === true;
        function addRange(ranges, newRange) {
            var i = 0, l = ranges.length;
            for (; i < l; ++i) {
                var range = ranges[i];
                if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                    range[0] = min(range[0], newRange[0]);
                    range[1] = max(range[1], newRange[1]);
                    break;
                }
            }
            if (i === l)
                ranges.push(newRange);
            return ranges;
        }
        var sortDirection = ascending;
        function rangeSorter(a, b) { return sortDirection(a[0], b[0]); }
        var set;
        try {
            set = ranges.reduce(addRange, []);
            set.sort(rangeSorter);
        }
        catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var rangePos = 0;
        var keyIsBeyondCurrentEntry = includeUppers ?
            function (key) { return ascending(key, set[rangePos][1]) > 0; } :
            function (key) { return ascending(key, set[rangePos][1]) >= 0; };
        var keyIsBeforeCurrentEntry = includeLowers ?
            function (key) { return descending(key, set[rangePos][0]) > 0; } :
            function (key) { return descending(key, set[rangePos][0]) >= 0; };
        function keyWithinCurrentRange(key) {
            return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }
        var checkKey = keyIsBeyondCurrentEntry;
        var c = new this.Collection(this, function () { return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers); });
        c._ondirectionchange = function (direction) {
            if (direction === "next") {
                checkKey = keyIsBeyondCurrentEntry;
                sortDirection = ascending;
            }
            else {
                checkKey = keyIsBeforeCurrentEntry;
                sortDirection = descending;
            }
            set.sort(rangeSorter);
        };
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            while (checkKey(key)) {
                ++rangePos;
                if (rangePos === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (keyWithinCurrentRange(key)) {
                return true;
            }
            else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
                return false;
            }
            else {
                advance(function () {
                    if (sortDirection === ascending)
                        cursor.continue(set[rangePos][0]);
                    else
                        cursor.continue(set[rangePos][1]);
                });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.startsWithAnyOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (!set.every(function (s) { return typeof s === 'string'; })) {
            return fail(this, "startsWithAnyOf() only works with strings");
        }
        if (set.length === 0)
            return emptyCollection(this);
        return this.inAnyRange(set.map(function (str) { return [str, str + maxString]; }));
    };
    return WhereClause;
}());

function createWhereClauseConstructor(db) {
    return makeClassConstructor(WhereClause.prototype, function WhereClause$$1(table, index, orCollection) {
        this.db = db;
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            or: orCollection
        };
        var indexedDB = db._deps.indexedDB;
        if (!indexedDB)
            throw new exceptions.MissingAPI("indexedDB API missing");
        this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);
        this._descending = function (a, b) { return indexedDB.cmp(b, a); };
        this._max = function (a, b) { return indexedDB.cmp(a, b) > 0 ? a : b; };
        this._min = function (a, b) { return indexedDB.cmp(a, b) < 0 ? a : b; };
        this._IDBKeyRange = db._deps.IDBKeyRange;
    });
}

function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getMaxKey(IdbKeyRange) {
    try {
        IdbKeyRange.only([[]]);
        return [[]];
    }
    catch (e) {
        return maxString;
    }
}

function eventRejectHandler(reject) {
    return wrap(function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    });
}



function preventDefault(event) {
    if (event.stopPropagation)
        event.stopPropagation();
    if (event.preventDefault)
        event.preventDefault();
}

var Transaction =               (function () {
    function Transaction() {
    }
    Transaction.prototype._lock = function () {
        assert(!PSD.global);
        ++this._reculock;
        if (this._reculock === 1 && !PSD.global)
            PSD.lockOwnerFor = this;
        return this;
    };
    Transaction.prototype._unlock = function () {
        assert(!PSD.global);
        if (--this._reculock === 0) {
            if (!PSD.global)
                PSD.lockOwnerFor = null;
            while (this._blockedFuncs.length > 0 && !this._locked()) {
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                    usePSD(fnAndPSD[1], fnAndPSD[0]);
                }
                catch (e) { }
            }
        }
        return this;
    };
    Transaction.prototype._locked = function () {
        return this._reculock && PSD.lockOwnerFor !== this;
    };
    Transaction.prototype.create = function (idbtrans) {
        var _this = this;
        if (!this.mode)
            return this;
        var idbdb = this.db.idbdb;
        var dbOpenError = this.db._state.dbOpenError;
        assert(!this.idbtrans);
        if (!idbtrans && !idbdb) {
            switch (dbOpenError && dbOpenError.name) {
                case "DatabaseClosedError":
                    throw new exceptions.DatabaseClosed(dbOpenError);
                case "MissingAPIError":
                    throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                default:
                    throw new exceptions.OpenFailed(dbOpenError);
            }
        }
        if (!this.active)
            throw new exceptions.TransactionInactive();
        assert(this._completion._state === null);
        idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
        idbtrans.onerror = wrap(function (ev) {
            preventDefault(ev);
            _this._reject(idbtrans.error);
        });
        idbtrans.onabort = wrap(function (ev) {
            preventDefault(ev);
            _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
            _this.active = false;
            _this.on("abort").fire(ev);
        });
        idbtrans.oncomplete = wrap(function () {
            _this.active = false;
            _this._resolve();
        });
        return this;
    };
    Transaction.prototype._promise = function (mode, fn, bWriteLock) {
        var _this = this;
        if (mode === 'readwrite' && this.mode !== 'readwrite')
            return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active)
            return rejection(new exceptions.TransactionInactive());
        if (this._locked()) {
            return new DexiePromise(function (resolve, reject) {
                _this._blockedFuncs.push([function () {
                        _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                    }, PSD]);
            });
        }
        else if (bWriteLock) {
            return newScope(function () {
                var p = new DexiePromise(function (resolve, reject) {
                    _this._lock();
                    var rv = fn(resolve, reject, _this);
                    if (rv && rv.then)
                        rv.then(resolve, reject);
                });
                p.finally(function () { return _this._unlock(); });
                p._lib = true;
                return p;
            });
        }
        else {
            var p = new DexiePromise(function (resolve, reject) {
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then)
                    rv.then(resolve, reject);
            });
            p._lib = true;
            return p;
        }
    };
    Transaction.prototype._root = function () {
        return this.parent ? this.parent._root() : this;
    };
    Transaction.prototype.waitFor = function (promiseLike) {
        var root = this._root();
        var promise = DexiePromise.resolve(promiseLike);
        if (root._waitingFor) {
            root._waitingFor = root._waitingFor.then(function () { return promise; });
        }
        else {
            root._waitingFor = promise;
            root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            (function spin() {
                ++root._spinCount;
                while (root._waitingQueue.length)
                    (root._waitingQueue.shift())();
                if (root._waitingFor)
                    store.get(-Infinity).onsuccess = spin;
            }());
        }
        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function (resolve, reject) {
            promise.then(function (res) { return root._waitingQueue.push(wrap(resolve.bind(null, res))); }, function (err) { return root._waitingQueue.push(wrap(reject.bind(null, err))); }).finally(function () {
                if (root._waitingFor === currentWaitPromise) {
                    root._waitingFor = null;
                }
            });
        });
    };
    Transaction.prototype.abort = function () {
        this.active && this._reject(new exceptions.Abort());
        this.active = false;
    };
    Transaction.prototype.table = function (tableName) {
        var memoizedTables = (this._memoizedTables || (this._memoizedTables = {}));
        if (hasOwn(memoizedTables, tableName))
            return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];
        if (!tableSchema) {
            throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        }
        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        transactionBoundTable.core = this.db.core.table(tableName);
        memoizedTables[tableName] = transactionBoundTable;
        return transactionBoundTable;
    };
    return Transaction;
}());

function createTransactionConstructor(db) {
    return makeClassConstructor(Transaction.prototype, function Transaction$$1(mode, storeNames, dbschema, parent) {
        var _this = this;
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.schema = dbschema;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new DexiePromise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this._completion.then(function () {
            _this.active = false;
            _this.on.complete.fire();
        }, function (e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ?
                _this.parent._reject(e) :
                wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e);
        });
    });
}

function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
    return {
        name: name,
        keyPath: keyPath,
        unique: unique,
        multi: multi,
        auto: auto,
        compound: compound,
        src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
    };
}
function nameFromKeyPath(keyPath) {
    return typeof keyPath === 'string' ?
        keyPath :
        keyPath ? ('[' + [].join.call(keyPath, '+') + ']') : "";
}

function createTableSchema(name, primKey, indexes) {
    return {
        name: name,
        primKey: primKey,
        indexes: indexes,
        mappedClass: null,
        idxByName: arrayToObject(indexes, function (index) { return [index.name, index]; })
    };
}

function getKeyExtractor(keyPath) {
    if (keyPath == null) {
        return function () { return undefined; };
    }
    else if (typeof keyPath === 'string') {
        return getSinglePathKeyExtractor(keyPath);
    }
    else {
        return function (obj) { return getByKeyPath(obj, keyPath); };
    }
}
function getSinglePathKeyExtractor(keyPath) {
    var split = keyPath.split('.');
    if (split.length === 1) {
        return function (obj) { return obj[keyPath]; };
    }
    else {
        return function (obj) { return getByKeyPath(obj, keyPath); };
    }
}

function getEffectiveKeys(primaryKey, req) {
    if (req.type === 'delete')
        return req.keys;
    return req.keys || req.values.map(primaryKey.extractKey);
}
function getExistingValues(table, req, effectiveKeys) {
    return req.type === 'add' ? Promise.resolve(new Array(req.values.length)) :
        table.getMany({ trans: req.trans, keys: effectiveKeys });
}

function arrayify(arrayLike) {
    return [].slice.call(arrayLike);
}

var _id_counter = 0;
function getKeyPathAlias(keyPath) {
    return keyPath == null ?
        ":id" :
        typeof keyPath === 'string' ?
            keyPath :
            "[" + keyPath.join('+') + "]";
}
function createDBCore(db, indexedDB, IdbKeyRange, tmpTrans) {
    var cmp = indexedDB.cmp.bind(indexedDB);
    function extractSchema(db, trans) {
        var tables = arrayify(db.objectStoreNames);
        return {
            schema: {
                name: db.name,
                tables: tables.map(function (table) { return trans.objectStore(table); }).map(function (store) {
                    var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                    var compound = isArray(keyPath);
                    var outbound = keyPath == null;
                    var indexByKeyPath = {};
                    var result = {
                        name: store.name,
                        primaryKey: {
                            name: null,
                            isPrimaryKey: true,
                            outbound: outbound,
                            compound: compound,
                            keyPath: keyPath,
                            autoIncrement: autoIncrement,
                            unique: true,
                            extractKey: getKeyExtractor(keyPath)
                        },
                        indexes: arrayify(store.indexNames).map(function (indexName) { return store.index(indexName); })
                            .map(function (index) {
                            var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath = index.keyPath;
                            var compound = isArray(keyPath);
                            var result = {
                                name: name,
                                compound: compound,
                                keyPath: keyPath,
                                unique: unique,
                                multiEntry: multiEntry,
                                extractKey: getKeyExtractor(keyPath)
                            };
                            indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                            return result;
                        }),
                        getIndexByKeyPath: function (keyPath) { return indexByKeyPath[getKeyPathAlias(keyPath)]; }
                    };
                    indexByKeyPath[":id"] = result.primaryKey;
                    if (keyPath != null) {
                        indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                    }
                    return result;
                })
            },
            hasGetAll: tables.length > 0 && ('getAll' in trans.objectStore(tables[0])) &&
                !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
                    !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
    }
    function makeIDBKeyRange(range) {
        if (range.type === 3          )
            return null;
        if (range.type === 4            )
            throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
        var idbRange = lower === undefined ?
            upper === undefined ?
                null :
                IdbKeyRange.upperBound(upper, !!upperOpen) :
            upper === undefined ?
                IdbKeyRange.lowerBound(lower, !!lowerOpen) :
                IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
        return idbRange;
    }
    function createDbCoreTable(tableSchema) {
        var tableName = tableSchema.name;
        function mutate(_a) {
            var trans = _a.trans, type = _a.type, keys$$1 = _a.keys, values = _a.values, range = _a.range, wantResults = _a.wantResults;
            return new Promise(function (resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var outbound = store.keyPath == null;
                var isAddOrPut = type === "put" || type === "add";
                if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange')
                    throw new Error("Invalid operation type: " + type);
                var length = (keys$$1 || values || { length: 1 }).length;
                if (keys$$1 && values && keys$$1.length !== values.length) {
                    throw new Error("Given keys array must have same length as given values array.");
                }
                if (length === 0)
                    return resolve({ numFailures: 0, failures: {}, results: [], lastResult: undefined });
                var results = wantResults && __spreadArrays((keys$$1 ?
                    keys$$1 :
                    getEffectiveKeys(tableSchema.primaryKey, { type: type, keys: keys$$1, values: values })));
                var req;
                var failures = [];
                var numFailures = 0;
                var errorHandler = function (event) {
                    ++numFailures;
                    preventDefault(event);
                    if (results)
                        results[event.target._reqno] = undefined;
                    failures[event.target._reqno] = event.target.error;
                };
                var setResult = function (_a) {
                    var target = _a.target;
                    results[target._reqno] = target.result;
                };
                if (type === 'deleteRange') {
                    if (range.type === 4            )
                        return resolve({ numFailures: numFailures, failures: failures, results: results, lastResult: undefined });
                    if (range.type === 3          )
                        req = store.clear();
                    else
                        req = store.delete(makeIDBKeyRange(range));
                }
                else {
                    var _a = isAddOrPut ?
                        outbound ?
                            [values, keys$$1] :
                            [values, null] :
                        [keys$$1, null], args1 = _a[0], args2 = _a[1];
                    if (isAddOrPut) {
                        for (var i = 0; i < length; ++i) {
                            req = (args2 && args2[i] !== undefined ?
                                store[type](args1[i], args2[i]) :
                                store[type](args1[i]));
                            req._reqno = i;
                            if (results && results[i] === undefined) {
                                req.onsuccess = setResult;
                            }
                            req.onerror = errorHandler;
                        }
                    }
                    else {
                        for (var i = 0; i < length; ++i) {
                            req = store[type](args1[i]);
                            req._reqno = i;
                            req.onerror = errorHandler;
                        }
                    }
                }
                var done = function (event) {
                    var lastResult = event.target.result;
                    if (results)
                        results[length - 1] = lastResult;
                    resolve({
                        numFailures: numFailures,
                        failures: failures,
                        results: results,
                        lastResult: lastResult
                    });
                };
                req.onerror = function (event) {
                    errorHandler(event);
                    done(event);
                };
                req.onsuccess = done;
            });
        }
        function openCursor(_a) {
            var trans = _a.trans, values = _a.values, query = _a.query, reverse = _a.reverse, unique = _a.unique;
            return new Promise(function (resolve, reject) {
                resolve = wrap(resolve);
                var index = query.index, range = query.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ?
                    store :
                    store.index(index.name);
                var direction = reverse ?
                    unique ?
                        "prevunique" :
                        "prev" :
                    unique ?
                        "nextunique" :
                        "next";
                var req = values || !('openKeyCursor' in source) ?
                    source.openCursor(makeIDBKeyRange(range), direction) :
                    source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function (ev) {
                    var cursor = req.result;
                    if (!cursor) {
                        resolve(null);
                        return;
                    }
                    cursor.___id = ++_id_counter;
                    cursor.done = false;
                    var _cursorContinue = cursor.continue.bind(cursor);
                    var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                    if (_cursorContinuePrimaryKey)
                        _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                    var _cursorAdvance = cursor.advance.bind(cursor);
                    var doThrowCursorIsNotStarted = function () { throw new Error("Cursor not started"); };
                    var doThrowCursorIsStopped = function () { throw new Error("Cursor not stopped"); };
                    cursor.trans = trans;
                    cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                    cursor.fail = wrap(reject);
                    cursor.next = function () {
                        var _this = this;
                        var gotOne = 1;
                        return this.start(function () { return gotOne-- ? _this.continue() : _this.stop(); }).then(function () { return _this; });
                    };
                    cursor.start = function (callback) {
                        var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
                            resolveIteration = wrap(resolveIteration);
                            req.onerror = eventRejectHandler(rejectIteration);
                            cursor.fail = rejectIteration;
                            cursor.stop = function (value) {
                                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                                resolveIteration(value);
                            };
                        });
                        var guardedCallback = function () {
                            if (req.result) {
                                try {
                                    callback();
                                }
                                catch (err) {
                                    cursor.fail(err);
                                }
                            }
                            else {
                                cursor.done = true;
                                cursor.start = function () { throw new Error("Cursor behind last entry"); };
                                cursor.stop();
                            }
                        };
                        req.onsuccess = wrap(function (ev) {
                            req.onsuccess = guardedCallback;
                            guardedCallback();
                        });
                        cursor.continue = _cursorContinue;
                        cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                        cursor.advance = _cursorAdvance;
                        guardedCallback();
                        return iterationPromise;
                    };
                    resolve(cursor);
                }, reject);
            });
        }
        function query(hasGetAll) {
            return function (request) {
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var trans = request.trans, values = request.values, limit = request.limit, query = request.query;
                    var nonInfinitLimit = limit === Infinity ? undefined : limit;
                    var index = query.index, range = query.range;
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    if (limit === 0)
                        return resolve({ result: [] });
                    if (hasGetAll) {
                        var req = values ?
                            source.getAll(idbKeyRange, nonInfinitLimit) :
                            source.getAllKeys(idbKeyRange, nonInfinitLimit);
                        req.onsuccess = function (event) { return resolve({ result: event.target.result }); };
                        req.onerror = eventRejectHandler(reject);
                    }
                    else {
                        var count_1 = 0;
                        var req_1 = values || !('openKeyCursor' in source) ?
                            source.openCursor(idbKeyRange) :
                            source.openKeyCursor(idbKeyRange);
                        var result_1 = [];
                        req_1.onsuccess = function (event) {
                            var cursor = req_1.result;
                            if (!cursor)
                                return resolve({ result: result_1 });
                            result_1.push(values ? cursor.value : cursor.primaryKey);
                            if (++count_1 === limit)
                                return resolve({ result: result_1 });
                            cursor.continue();
                        };
                        req_1.onerror = eventRejectHandler(reject);
                    }
                });
            };
        }
        return {
            name: tableName,
            schema: tableSchema,
            mutate: mutate,
            getMany: function (_a) {
                var trans = _a.trans, keys$$1 = _a.keys;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var length = keys$$1.length;
                    var result = new Array(length);
                    var keyCount = 0;
                    var callbackCount = 0;
                    var req;
                    var successHandler = function (event) {
                        var req = event.target;
                        if ((result[req._pos] = req.result) != null)
                            ;
                        if (++callbackCount === keyCount)
                            resolve(result);
                    };
                    var errorHandler = eventRejectHandler(reject);
                    for (var i = 0; i < length; ++i) {
                        var key = keys$$1[i];
                        if (key != null) {
                            req = store.get(keys$$1[i]);
                            req._pos = i;
                            req.onsuccess = successHandler;
                            req.onerror = errorHandler;
                            ++keyCount;
                        }
                    }
                    if (keyCount === 0)
                        resolve(result);
                });
            },
            get: function (_a) {
                var trans = _a.trans, key = _a.key;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var req = store.get(key);
                    req.onsuccess = function (event) { return resolve(event.target.result); };
                    req.onerror = eventRejectHandler(reject);
                });
            },
            query: query(hasGetAll),
            openCursor: openCursor,
            count: function (_a) {
                var query = _a.query, trans = _a.trans;
                var index = query.index, range = query.range;
                return new Promise(function (resolve, reject) {
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                    req.onsuccess = wrap(function (ev) { return resolve(ev.target.result); });
                    req.onerror = eventRejectHandler(reject);
                });
            }
        };
    }
    var _a = extractSchema(db, tmpTrans), schema = _a.schema, hasGetAll = _a.hasGetAll;
    var tables = schema.tables.map(function (tableSchema) { return createDbCoreTable(tableSchema); });
    var tableMap = {};
    tables.forEach(function (table) { return tableMap[table.name] = table; });
    return {
        stack: "dbcore",
        transaction: db.transaction.bind(db),
        table: function (name) {
            var result = tableMap[name];
            if (!result)
                throw new Error("Table '" + name + "' not found");
            return tableMap[name];
        },
        cmp: cmp,
        MIN_KEY: -Infinity,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema: schema
    };
}

function createMiddlewareStack(stackImpl, middlewares) {
    return middlewares.reduce(function (down, _a) {
        var create = _a.create;
        return (__assign(__assign({}, down), create(down)));
    }, stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
    var IDBKeyRange = _a.IDBKeyRange, indexedDB = _a.indexedDB;
    var dbcore = createMiddlewareStack(createDBCore(idbdb, indexedDB, IDBKeyRange, tmpTrans), middlewares.dbcore);
    return {
        dbcore: dbcore
    };
}
function generateMiddlewareStacks(db, tmpTrans) {
    var idbdb = tmpTrans.db;
    var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
    db.core = stacks.dbcore;
    db.tables.forEach(function (table) {
        var tableName = table.name;
        if (db.core.schema.tables.some(function (tbl) { return tbl.name === tableName; })) {
            table.core = db.core.table(tableName);
            if (db[tableName] instanceof db.Table) {
                db[tableName].core = table.core;
            }
        }
    });
}

function setApiOnPlace(db, objs, tableNames, dbschema) {
    tableNames.forEach(function (tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function (obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            if (!propDesc || ("value" in propDesc && propDesc.value === undefined)) {
                if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
                    setProp(obj, tableName, {
                        get: function () { return this.table(tableName); },
                        set: function (value) {
                            defineProperty(this, tableName, { value: value, writable: true, configurable: true, enumerable: true });
                        }
                    });
                }
                else {
                    obj[tableName] = new db.Table(tableName, schema);
                }
            }
        });
    });
}
function removeTablesApi(db, objs) {
    objs.forEach(function (obj) {
        for (var key in obj) {
            if (obj[key] instanceof db.Table)
                delete obj[key];
        }
    });
}
function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
    var globalSchema = db._dbSchema;
    var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);
    trans.create(idbUpgradeTrans);
    trans._completion.catch(reject);
    var rejectTransaction = trans._reject.bind(trans);
    var transless = PSD.transless || PSD;
    newScope(function () {
        PSD.trans = trans;
        PSD.transless = transless;
        if (oldVersion === 0) {
            keys(globalSchema).forEach(function (tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
            });
            generateMiddlewareStacks(db, idbUpgradeTrans);
            DexiePromise.follow(function () { return db.on.populate.fire(trans); }).catch(rejectTransaction);
        }
        else
            updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
    });
}
function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
    var queue = [];
    var versions = db._versions;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
    var anyContentUpgraderHasRun = false;
    var versToRun = versions.filter(function (v) { return v._cfg.version >= oldVersion; });
    versToRun.forEach(function (version) {
        queue.push(function () {
            var oldSchema = globalSchema;
            var newSchema = version._cfg.dbschema;
            adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
            adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
            globalSchema = db._dbSchema = newSchema;
            var diff = getSchemaDiff(oldSchema, newSchema);
            diff.add.forEach(function (tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
            });
            diff.change.forEach(function (change) {
                if (change.recreate) {
                    throw new exceptions.Upgrade("Not yet support for changing primary key");
                }
                else {
                    var store_1 = idbUpgradeTrans.objectStore(change.name);
                    change.add.forEach(function (idx) { return addIndex(store_1, idx); });
                    change.change.forEach(function (idx) {
                        store_1.deleteIndex(idx.name);
                        addIndex(store_1, idx);
                    });
                    change.del.forEach(function (idxName) { return store_1.deleteIndex(idxName); });
                }
            });
            var contentUpgrade = version._cfg.contentUpgrade;
            if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db, idbUpgradeTrans);
                trans._memoizedTables = {};
                anyContentUpgraderHasRun = true;
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function (table) {
                    upgradeSchema_1[table] = oldSchema[table];
                });
                removeTablesApi(db, [db.Transaction.prototype]);
                setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
                trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                if (contentUpgradeIsAsync_1) {
                    incrementExpectedAwaits();
                }
                var returnValue_1;
                var promiseFollowed = DexiePromise.follow(function () {
                    returnValue_1 = contentUpgrade(trans);
                    if (returnValue_1) {
                        if (contentUpgradeIsAsync_1) {
                            var decrementor = decrementExpectedAwaits.bind(null, null);
                            returnValue_1.then(decrementor, decrementor);
                        }
                    }
                });
                return (returnValue_1 && typeof returnValue_1.then === 'function' ?
                    DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () { return returnValue_1; }));
            }
        });
        queue.push(function (idbtrans) {
            if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                var newSchema = version._cfg.dbschema;
                deleteRemovedTables(newSchema, idbtrans);
            }
            removeTablesApi(db, [db.Transaction.prototype]);
            setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
            trans.schema = db._dbSchema;
        });
    });
    function runQueue() {
        return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) :
            DexiePromise.resolve();
    }
    return runQueue().then(function () {
        createMissingTables(globalSchema, idbUpgradeTrans);
    });
}
function getSchemaDiff(oldSchema, newSchema) {
    var diff = {
        del: [],
        add: [],
        change: []
    };
    var table;
    for (table in oldSchema) {
        if (!newSchema[table])
            diff.del.push(table);
    }
    for (table in newSchema) {
        var oldDef = oldSchema[table], newDef = newSchema[table];
        if (!oldDef) {
            diff.add.push([table, newDef]);
        }
        else {
            var change = {
                name: table,
                def: newDef,
                recreate: false,
                del: [],
                add: [],
                change: []
            };
            if ((
            '' + (oldDef.primKey.keyPath || '')) !== ('' + (newDef.primKey.keyPath || '')) ||
                (oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge))
             {
                change.recreate = true;
                diff.change.push(change);
            }
            else {
                var oldIndexes = oldDef.idxByName;
                var newIndexes = newDef.idxByName;
                var idxName = void 0;
                for (idxName in oldIndexes) {
                    if (!newIndexes[idxName])
                        change.del.push(idxName);
                }
                for (idxName in newIndexes) {
                    var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                    if (!oldIdx)
                        change.add.push(newIdx);
                    else if (oldIdx.src !== newIdx.src)
                        change.change.push(newIdx);
                }
                if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                    diff.change.push(change);
                }
            }
        }
    }
    return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ?
        { keyPath: primKey.keyPath, autoIncrement: primKey.auto } :
        { autoIncrement: primKey.auto });
    indexes.forEach(function (idx) { return addIndex(store, idx); });
    return store;
}
function createMissingTables(newSchema, idbtrans) {
    keys(newSchema).forEach(function (tableName) {
        if (!idbtrans.db.objectStoreNames.contains(tableName)) {
            createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
        }
    });
}
function deleteRemovedTables(newSchema, idbtrans) {
    for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
        var storeName = idbtrans.db.objectStoreNames[i];
        if (newSchema[storeName] == null) {
            idbtrans.db.deleteObjectStore(storeName);
        }
    }
}
function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
    var globalSchema = {};
    var dbStoreNames = slice(idbdb.objectStoreNames, 0);
    dbStoreNames.forEach(function (storeName) {
        var store = tmpTrans.objectStore(storeName);
        var keyPath = store.keyPath;
        var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
        var indexes = [];
        for (var j = 0; j < store.indexNames.length; ++j) {
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
            indexes.push(index);
        }
        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
    });
    return globalSchema;
}
function readGlobalSchema(db, idbdb, tmpTrans) {
    db.verno = idbdb.version / 10;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
    db._storeNames = slice(idbdb.objectStoreNames, 0);
    setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
    var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
    var diff = getSchemaDiff(installedSchema, db._dbSchema);
    return !(diff.add.length || diff.change.some(function (ch) { return ch.add.length || ch.change.length; }));
}
function adjustToExistingIndexNames(db, schema, idbtrans) {
    var storeNames = idbtrans.db.objectStoreNames;
    for (var i = 0; i < storeNames.length; ++i) {
        var storeName = storeNames[i];
        var store = idbtrans.objectStore(storeName);
        db._hasGetAll = 'getAll' in store;
        for (var j = 0; j < store.indexNames.length; ++j) {
            var indexName = store.indexNames[j];
            var keyPath = store.index(indexName).keyPath;
            var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
            if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                if (indexSpec) {
                    indexSpec.name = indexName;
                    delete schema[storeName].idxByName[dexieName];
                    schema[storeName].idxByName[indexName] = indexSpec;
                }
            }
        }
    }
    if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
        _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope &&
        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
        db._hasGetAll = false;
    }
}
function parseIndexSyntax(primKeyAndIndexes) {
    return primKeyAndIndexes.split(',').map(function (index, indexNum) {
        index = index.trim();
        var name = index.replace(/([&*]|\+\+)/g, "");
        var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
    });
}

var Version =               (function () {
    function Version() {
    }
    Version.prototype._parseStoresSpec = function (stores, outSchema) {
        keys(stores).forEach(function (tableName) {
            if (stores[tableName] !== null) {
                var indexes = parseIndexSyntax(stores[tableName]);
                var primKey = indexes.shift();
                if (primKey.multi)
                    throw new exceptions.Schema("Primary key cannot be multi-valued");
                indexes.forEach(function (idx) {
                    if (idx.auto)
                        throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!idx.keyPath)
                        throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
            }
        });
    };
    Version.prototype.stores = function (stores) {
        var db = this.db;
        this._cfg.storesSource = this._cfg.storesSource ?
            extend(this._cfg.storesSource, stores) :
            stores;
        var versions = db._versions;
        var storesSpec = {};
        var dbschema = {};
        versions.forEach(function (version) {
            extend(storesSpec, version._cfg.storesSource);
            dbschema = (version._cfg.dbschema = {});
            version._parseStoresSpec(storesSpec, dbschema);
        });
        db._dbSchema = dbschema;
        removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
        setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
        db._storeNames = keys(dbschema);
        return this;
    };
    Version.prototype.upgrade = function (upgradeFunction) {
        this._cfg.contentUpgrade = upgradeFunction;
        return this;
    };
    return Version;
}());

function createVersionConstructor(db) {
    return makeClassConstructor(Version.prototype, function Version$$1(versionNumber) {
        this.db = db;
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
    });
}

var databaseEnumerator;
function DatabaseEnumerator(indexedDB) {
    var hasDatabasesNative = indexedDB && typeof indexedDB.databases === 'function';
    var dbNamesTable;
    if (!hasDatabasesNative) {
        var db = new Dexie(DBNAMES_DB, { addons: [] });
        db.version(1).stores({ dbnames: 'name' });
        dbNamesTable = db.table('dbnames');
    }
    return {
        getDatabaseNames: function () {
            return hasDatabasesNative
                ?
                    DexiePromise.resolve(indexedDB.databases()).then(function (infos) { return infos
                        .map(function (info) { return info.name; })
                        .filter(function (name) { return name !== DBNAMES_DB; }); })
                :
                    dbNamesTable.toCollection().primaryKeys();
        },
        add: function (name) {
            return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.put({ name: name }).catch(nop);
        },
        remove: function (name) {
            return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.delete(name).catch(nop);
        }
    };
}
function initDatabaseEnumerator(indexedDB) {
    try {
        databaseEnumerator = DatabaseEnumerator(indexedDB);
    }
    catch (e) { }
}

function vip(fn) {
    return newScope(function () {
        PSD.letThrough = true;
        return fn();
    });
}

function dexieOpen(db) {
    var state = db._state;
    var indexedDB = db._deps.indexedDB;
    if (state.isBeingOpened || db.idbdb)
        return state.dbReadyPromise.then(function () { return state.dbOpenError ?
            rejection(state.dbOpenError) :
            db; });
    debug && (state.openCanceller._stackHolder = getErrorWithStack());
    state.isBeingOpened = true;
    state.dbOpenError = null;
    state.openComplete = false;
    var resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null;
    return DexiePromise.race([state.openCanceller, new DexiePromise(function (resolve, reject) {
            if (!indexedDB)
                throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " +
                    "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
            var dbName = db.name;
            var req = state.autoSchema ?
                indexedDB.open(dbName) :
                indexedDB.open(dbName, Math.round(db.verno * 10));
            if (!req)
                throw new exceptions.MissingAPI("IndexedDB API not available");
            req.onerror = eventRejectHandler(reject);
            req.onblocked = wrap(db._fireOnBlocked);
            req.onupgradeneeded = wrap(function (e) {
                upgradeTransaction = req.transaction;
                if (state.autoSchema && !db._options.allowEmptyDB) {
                    req.onerror = preventDefault;
                    upgradeTransaction.abort();
                    req.result.close();
                    var delreq = indexedDB.deleteDatabase(dbName);
                    delreq.onsuccess = delreq.onerror = wrap(function () {
                        reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                    });
                }
                else {
                    upgradeTransaction.onerror = eventRejectHandler(reject);
                    var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                    db.idbdb = req.result;
                    runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
                }
            }, reject);
            req.onsuccess = wrap(function () {
                upgradeTransaction = null;
                var idbdb = db.idbdb = req.result;
                var objectStoreNames = slice(idbdb.objectStoreNames);
                if (objectStoreNames.length > 0)
                    try {
                        var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
                        if (state.autoSchema)
                            readGlobalSchema(db, idbdb, tmpTrans);
                        else {
                            adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                            if (!verifyInstalledSchema(db, tmpTrans)) {
                                console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
                            }
                        }
                        generateMiddlewareStacks(db, tmpTrans);
                    }
                    catch (e) {
                    }
                connections.push(db);
                idbdb.onversionchange = wrap(function (ev) {
                    state.vcFired = true;
                    db.on("versionchange").fire(ev);
                });
                databaseEnumerator.add(dbName);
                resolve();
            }, reject);
        })]).then(function () {
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(db.on.ready.fire)).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
                var remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
                state.onReadyBeingFired = [];
                return DexiePromise.resolve(vip(remainders)).then(fireRemainders);
            }
        });
    }).finally(function () {
        state.onReadyBeingFired = null;
    }).then(function () {
        state.isBeingOpened = false;
        return db;
    }).catch(function (err) {
        try {
            upgradeTransaction && upgradeTransaction.abort();
        }
        catch (e) { }
        state.isBeingOpened = false;
        db.close();
        state.dbOpenError = err;
        return rejection(state.dbOpenError);
    }).finally(function () {
        state.openComplete = true;
        resolveDbReady();
    });
}

function awaitIterator(iterator) {
    var callNext = function (result) { return iterator.next(result); }, doThrow = function (error) { return iterator.throw(error); }, onSuccess = step(callNext), onError = step(doThrow);
    function step(getNext) {
        return function (val) {
            var next = getNext(val), value = next.value;
            return next.done ? value :
                (!value || typeof value.then !== 'function' ?
                    isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) :
                    value.then(onSuccess, onError));
        };
    }
    return step(callNext)();
}

function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    var i = arguments.length;
    if (i < 2)
        throw new exceptions.InvalidArgument("Too few arguments");
    var args = new Array(i - 1);
    while (--i)
        args[i - 1] = arguments[i];
    scopeFunc = args.pop();
    var tables = flatten(args);
    return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
    return DexiePromise.resolve().then(function () {
        var transless = PSD.transless || PSD;
        var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
        var zoneProps = {
            trans: trans,
            transless: transless
        };
        if (parentTransaction) {
            trans.idbtrans = parentTransaction.idbtrans;
        }
        else {
            trans.create();
        }
        var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
        if (scopeFuncIsAsync) {
            incrementExpectedAwaits();
        }
        var returnValue;
        var promiseFollowed = DexiePromise.follow(function () {
            returnValue = scopeFunc.call(trans, trans);
            if (returnValue) {
                if (scopeFuncIsAsync) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue.then(decrementor, decrementor);
                }
                else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                    returnValue = awaitIterator(returnValue);
                }
            }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === 'function' ?
            DexiePromise.resolve(returnValue).then(function (x) { return trans.active ?
                x
                : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); })
            : promiseFollowed.then(function () { return returnValue; })).then(function (x) {
            if (parentTransaction)
                trans._resolve();
            return trans._completion.then(function () { return x; });
        }).catch(function (e) {
            trans._reject(e);
            return rejection(e);
        });
    });
}

function pad(a, value, count) {
    var result = isArray(a) ? a.slice() : [a];
    for (var i = 0; i < count; ++i)
        result.push(value);
    return result;
}
function createVirtualIndexMiddleware(down) {
    return __assign(__assign({}, down), { table: function (tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
                var keyPathAlias = getKeyPathAlias(keyPath);
                var indexList = (indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || []);
                var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
                var isVirtual = keyTail > 0;
                var virtualIndex = __assign(__assign({}, lowLevelIndex), { isVirtual: isVirtual, isPrimaryKey: !isVirtual && lowLevelIndex.isPrimaryKey, keyTail: keyTail,
                    keyLength: keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
                indexList.push(virtualIndex);
                if (!virtualIndex.isPrimaryKey) {
                    allVirtualIndexes.push(virtualIndex);
                }
                if (keyLength > 1) {
                    var virtualKeyPath = keyLength === 2 ?
                        keyPath[0] :
                        keyPath.slice(0, keyLength - 1);
                    addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
                }
                indexList.sort(function (a, b) { return a.keyTail - b.keyTail; });
                return virtualIndex;
            }
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [primaryKey];
            for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
                var index = _a[_i];
                addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
                var result = indexLookup[getKeyPathAlias(keyPath)];
                return result && result[0];
            }
            function translateRange(range, keyTail) {
                return {
                    type: range.type === 1             ?
                        2             :
                        range.type,
                    lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                    lowerOpen: true,
                    upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                    upperOpen: true
                };
            }
            function translateRequest(req) {
                var index = req.query.index;
                return index.isVirtual ? __assign(__assign({}, req), { query: {
                        index: index,
                        range: translateRange(req.query.range, index.keyTail)
                    } }) : req;
            }
            var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey: primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function (req) {
                    return table.count(translateRequest(req));
                },
                query: function (req) {
                    return table.query(translateRequest(req));
                },
                openCursor: function (req) {
                    var _a = req.query.index, keyTail = _a.keyTail, isVirtual = _a.isVirtual, keyLength = _a.keyLength;
                    if (!isVirtual)
                        return table.openCursor(req);
                    function createVirtualCursor(cursor) {
                        function _continue(key) {
                            key != null ?
                                cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) :
                                req.unique ?
                                    cursor.continue(pad(cursor.key, req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) :
                                    cursor.continue();
                        }
                        var virtualCursor = Object.create(cursor, {
                            continue: { value: _continue },
                            continuePrimaryKey: {
                                value: function (key, primaryKey) {
                                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                                }
                            },
                            key: {
                                get: function () {
                                    var key = cursor.key;
                                    return keyLength === 1 ?
                                        key[0] :
                                        key.slice(0, keyLength);
                                }
                            },
                            value: {
                                get: function () {
                                    return cursor.value;
                                }
                            }
                        });
                        return virtualCursor;
                    }
                    return table.openCursor(translateRequest(req))
                        .then(function (cursor) { return cursor && createVirtualCursor(cursor); });
                } });
            return result;
        } });
}
var virtualIndexMiddleware = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: createVirtualIndexMiddleware
};

var hooksMiddleware = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: function (downCore) { return (__assign(__assign({}, downCore), { table: function (tableName) {
            var downTable = downCore.table(tableName);
            var primaryKey = downTable.schema.primaryKey;
            var tableMiddleware = __assign(__assign({}, downTable), { mutate: function (req) {
                    var dxTrans = PSD.trans;
                    var _a = dxTrans.table(tableName).hook, deleting = _a.deleting, creating = _a.creating, updating = _a.updating;
                    switch (req.type) {
                        case 'add':
                            if (creating.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'put':
                            if (creating.fire === nop && updating.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'delete':
                            if (deleting.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'deleteRange':
                            if (deleting.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return deleteRange(req); }, true);
                    }
                    return downTable.mutate(req);
                    function addPutOrDelete(req) {
                        var dxTrans = PSD.trans;
                        var keys$$1 = req.keys || getEffectiveKeys(primaryKey, req);
                        if (!keys$$1)
                            throw new Error("Keys missing");
                        req = req.type === 'add' || req.type === 'put' ? __assign(__assign({}, req), { keys: keys$$1, wantResults: true }) :
                         __assign({}, req);
                        if (req.type !== 'delete')
                            req.values = __spreadArrays(req.values);
                        if (req.keys)
                            req.keys = __spreadArrays(req.keys);
                        return getExistingValues(downTable, req, keys$$1).then(function (existingValues) {
                            var contexts = keys$$1.map(function (key, i) {
                                var existingValue = existingValues[i];
                                var ctx = { onerror: null, onsuccess: null };
                                if (req.type === 'delete') {
                                    deleting.fire.call(ctx, key, existingValue, dxTrans);
                                }
                                else if (req.type === 'add' || existingValue === undefined) {
                                    var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);
                                    if (key == null && generatedPrimaryKey != null) {
                                        key = generatedPrimaryKey;
                                        req.keys[i] = key;
                                        if (!primaryKey.outbound) {
                                            setByKeyPath(req.values[i], primaryKey.keyPath, key);
                                        }
                                    }
                                }
                                else {
                                    var objectDiff = getObjectDiff(existingValue, req.values[i]);
                                    var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);
                                    if (additionalChanges_1) {
                                        var requestedValue_1 = req.values[i];
                                        Object.keys(additionalChanges_1).forEach(function (keyPath) {
                                            if (hasOwn(requestedValue_1, keyPath)) {
                                                requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                                            }
                                            else {
                                                setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                                            }
                                        });
                                    }
                                }
                                return ctx;
                            });
                            return downTable.mutate(req).then(function (_a) {
                                var failures = _a.failures, results = _a.results, numFailures = _a.numFailures, lastResult = _a.lastResult;
                                for (var i = 0; i < keys$$1.length; ++i) {
                                    var primKey = results ? results[i] : keys$$1[i];
                                    var ctx = contexts[i];
                                    if (primKey == null) {
                                        ctx.onerror && ctx.onerror(failures[i]);
                                    }
                                    else {
                                        ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ?
                                            req.values[i] :
                                            primKey
                                        );
                                    }
                                }
                                return { failures: failures, results: results, numFailures: numFailures, lastResult: lastResult };
                            }).catch(function (error) {
                                contexts.forEach(function (ctx) { return ctx.onerror && ctx.onerror(error); });
                                return Promise.reject(error);
                            });
                        });
                    }
                    function deleteRange(req) {
                        return deleteNextChunk(req.trans, req.range, 10000);
                    }
                    function deleteNextChunk(trans, range, limit) {
                        return downTable.query({ trans: trans, values: false, query: { index: primaryKey, range: range }, limit: limit })
                            .then(function (_a) {
                            var result = _a.result;
                            return addPutOrDelete({ type: 'delete', keys: result, trans: trans }).then(function (res) {
                                if (res.numFailures > 0)
                                    return Promise.reject(res.failures[0]);
                                if (result.length < limit) {
                                    return { failures: [], numFailures: 0, lastResult: undefined };
                                }
                                else {
                                    return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                                }
                            });
                        });
                    }
                } });
            return tableMiddleware;
        } })); }
};

var Dexie =               (function () {
    function Dexie(name, options) {
        var _this = this;
        this._middlewares = {};
        this.verno = 0;
        var deps = Dexie.dependencies;
        this._options = options = __assign({
            addons: Dexie.addons, autoOpen: true,
            indexedDB: deps.indexedDB, IDBKeyRange: deps.IDBKeyRange }, options);
        this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {};
        this._versions = [];
        this._storeNames = [];
        this._allTables = {};
        this.idbdb = null;
        var state = {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: nop,
            dbReadyPromise: null,
            cancelOpen: nop,
            openCanceller: null,
            autoSchema: true
        };
        state.dbReadyPromise = new DexiePromise(function (resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
            state.cancelOpen = reject;
        });
        this._state = state;
        this.name = name;
        this.on = Events(this, "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
        this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
            return function (subscriber, bSticky) {
                Dexie.vip(function () {
                    var state = _this._state;
                    if (state.openComplete) {
                        if (!state.dbOpenError)
                            DexiePromise.resolve().then(subscriber);
                        if (bSticky)
                            subscribe(subscriber);
                    }
                    else if (state.onReadyBeingFired) {
                        state.onReadyBeingFired.push(subscriber);
                        if (bSticky)
                            subscribe(subscriber);
                    }
                    else {
                        subscribe(subscriber);
                        var db_1 = _this;
                        if (!bSticky)
                            subscribe(function unsubscribe() {
                                db_1.on.ready.unsubscribe(subscriber);
                                db_1.on.ready.unsubscribe(unsubscribe);
                            });
                    }
                });
            };
        });
        this.Collection = createCollectionConstructor(this);
        this.Table = createTableConstructor(this);
        this.Transaction = createTransactionConstructor(this);
        this.Version = createVersionConstructor(this);
        this.WhereClause = createWhereClauseConstructor(this);
        this.on("versionchange", function (ev) {
            if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
            else
                console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
            _this.close();
        });
        this.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('" + _this.name + "') was blocked");
            else
                console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
        this._maxKey = getMaxKey(options.IDBKeyRange);
        this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) { return new _this.Transaction(mode, storeNames, dbschema, parentTransaction); };
        this._fireOnBlocked = function (ev) {
            _this.on("blocked").fire(ev);
            connections
                .filter(function (c) { return c.name === _this.name && c !== _this && !c._state.vcFired; })
                .map(function (c) { return c.on("versionchange").fire(ev); });
        };
        this.use(virtualIndexMiddleware);
        this.use(hooksMiddleware);
        addons.forEach(function (addon) { return addon(_this); });
    }
    Dexie.prototype.version = function (versionNumber) {
        if (isNaN(versionNumber) || versionNumber < 0.1)
            throw new exceptions.Type("Given version is not a positive number");
        versionNumber = Math.round(versionNumber * 10) / 10;
        if (this.idbdb || this._state.isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions;
        var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
        if (versionInstance)
            return versionInstance;
        versionInstance = new this.Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        versionInstance.stores({});
        this._state.autoSchema = false;
        return versionInstance;
    };
    Dexie.prototype._whenReady = function (fn) {
        var _this = this;
        return this._state.openComplete || PSD.letThrough ? fn() : new DexiePromise(function (resolve, reject) {
            if (!_this._state.isBeingOpened) {
                if (!_this._options.autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                _this.open().catch(nop);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
    };
    Dexie.prototype.use = function (_a) {
        var stack = _a.stack, create = _a.create, level = _a.level, name = _a.name;
        if (name)
            this.unuse({ stack: stack, name: name });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        middlewares.push({ stack: stack, create: create, level: level == null ? 10 : level, name: name });
        middlewares.sort(function (a, b) { return a.level - b.level; });
        return this;
    };
    Dexie.prototype.unuse = function (_a) {
        var stack = _a.stack, name = _a.name, create = _a.create;
        if (stack && this._middlewares[stack]) {
            this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
                return create ? mw.create !== create :
                    name ? mw.name !== name :
                        false;
            });
        }
        return this;
    };
    Dexie.prototype.open = function () {
        return dexieOpen(this);
    };
    Dexie.prototype.close = function () {
        var idx = connections.indexOf(this), state = this._state;
        if (idx >= 0)
            connections.splice(idx, 1);
        if (this.idbdb) {
            try {
                this.idbdb.close();
            }
            catch (e) { }
            this.idbdb = null;
        }
        this._options.autoOpen = false;
        state.dbOpenError = new exceptions.DatabaseClosed();
        if (state.isBeingOpened)
            state.cancelOpen(state.dbOpenError);
        state.dbReadyPromise = new DexiePromise(function (resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
            state.cancelOpen = reject;
        });
    };
    Dexie.prototype.delete = function () {
        var _this = this;
        var hasArguments = arguments.length > 0;
        var state = this._state;
        return new DexiePromise(function (resolve, reject) {
            var doDelete = function () {
                _this.close();
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function () {
                    databaseEnumerator.remove(_this.name);
                    resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = _this._fireOnBlocked;
            };
            if (hasArguments)
                throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (state.isBeingOpened) {
                state.dbReadyPromise.then(doDelete);
            }
            else {
                doDelete();
            }
        });
    };
    Dexie.prototype.backendDB = function () {
        return this.idbdb;
    };
    Dexie.prototype.isOpen = function () {
        return this.idbdb !== null;
    };
    Dexie.prototype.hasBeenClosed = function () {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && (dbOpenError.name === 'DatabaseClosed');
    };
    Dexie.prototype.hasFailed = function () {
        return this._state.dbOpenError !== null;
    };
    Dexie.prototype.dynamicallyOpened = function () {
        return this._state.autoSchema;
    };
    Object.defineProperty(Dexie.prototype, "tables", {
        get: function () {
            var _this = this;
            return keys(this._allTables).map(function (name) { return _this._allTables[name]; });
        },
        enumerable: true,
        configurable: true
    });
    Dexie.prototype.transaction = function () {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    };
    Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
        var _this = this;
        var parentTransaction = PSD.trans;
        if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1)
            parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', '');
        var idbMode, storeNames;
        try {
            storeNames = tables.map(function (table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName !== 'string')
                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });
            if (mode == "r" || mode === READONLY)
                idbMode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
                idbMode = READWRITE;
            else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                    if (onlyIfCompatible) {
                        parentTransaction = null;
                    }
                    else
                        throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                parentTransaction = null;
                            }
                            else
                                throw new exceptions.SubTransaction("Table " + storeName +
                                    " not included in parent transaction.");
                        }
                    });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                    parentTransaction = null;
                }
            }
        }
        catch (e) {
            return parentTransaction ?
                parentTransaction._promise(null, function (_, reject) { reject(e); }) :
                rejection(e);
        }
        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return (parentTransaction ?
            parentTransaction._promise(idbMode, enterTransaction, "lock") :
            PSD.trans ?
                usePSD(PSD.transless, function () { return _this._whenReady(enterTransaction); }) :
                this._whenReady(enterTransaction));
    };
    Dexie.prototype.table = function (tableName) {
        if (!hasOwn(this._allTables, tableName)) {
            throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        }
        return this._allTables[tableName];
    };
    return Dexie;
}());

var Dexie$1 = Dexie;
props(Dexie$1, __assign(__assign({}, fullNameExceptions), {
    delete: function (databaseName) {
        var db = new Dexie$1(databaseName);
        return db.delete();
    },
    exists: function (name) {
        return new Dexie$1(name, { addons: [] }).open().then(function (db) {
            db.close();
            return true;
        }).catch('NoSuchDatabaseError', function () { return false; });
    },
    getDatabaseNames: function (cb) {
        return databaseEnumerator ?
            databaseEnumerator.getDatabaseNames().then(cb) :
            DexiePromise.resolve([]);
    },
    defineClass: function () {
        function Class(content) {
            extend(this, content);
        }
        return Class;
    },
    ignoreTransaction: function (scopeFunc) {
        return PSD.trans ?
            usePSD(PSD.transless, scopeFunc) :
            scopeFunc();
    },
    vip: vip, async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function')
                    return DexiePromise.resolve(rv);
                return rv;
            }
            catch (e) {
                return rejection(e);
            }
        };
    }, spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function')
                return DexiePromise.resolve(rv);
            return rv;
        }
        catch (e) {
            return rejection(e);
        }
    },
    currentTransaction: {
        get: function () { return PSD.trans || null; }
    }, waitFor: function (promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ?
            Dexie$1.ignoreTransaction(promiseOrFunction) :
            promiseOrFunction)
            .timeout(optionalTimeout || 60000);
        return PSD.trans ?
            PSD.trans.waitFor(promise) :
            promise;
    },
    Promise: DexiePromise,
    debug: {
        get: function () { return debug; },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () { return true; } : dexieStackFrameFilter);
        }
    },
    derive: derive, extend: extend, props: props, override: override,
    Events: Events,
    getByKeyPath: getByKeyPath, setByKeyPath: setByKeyPath, delByKeyPath: delByKeyPath, shallowClone: shallowClone, deepClone: deepClone, getObjectDiff: getObjectDiff, asap: asap,
    minKey: minKey,
    addons: [],
    connections: connections,
    errnames: errnames,
    dependencies: (function () {
        try {
            return {
                indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
                IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
            };
        }
        catch (e) {
            return { indexedDB: null, IDBKeyRange: null };
        }
    })(),
    semVer: DEXIE_VERSION, version: DEXIE_VERSION.split('.')
        .map(function (n) { return parseInt(n); })
        .reduce(function (p, c, i) { return p + (c / Math.pow(10, i * 2)); }),
    default: Dexie$1,
    Dexie: Dexie$1 }));
Dexie$1.maxKey = getMaxKey(Dexie$1.dependencies.IDBKeyRange);

initDatabaseEnumerator(Dexie.dependencies.indexedDB);
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

/**
 * Class for a key-value storage area, where the key is a string and the value can have
 * any of a number of basic types.
 */
class KeyValueStorage {
    /**
     * Create a key-value storage area. Only a name for the storage area is required.
     * Storage is implemented using the Dexie wrapper for IndexedDB. Clients that wish to
     * have multiple independent Dexie stores within this storage area can specify them with
     * the `storeNames` parameter. If none are specified, the module will create a default store
     * and use that store for future interactions.
     * @param {string} storageAreaName - A name that uniquely identifies the storage area.
     * @param {Array<string>} storeNames - A list of names of stores.
     * @param {string} defaultStore - If store names are given, which one should be the default in future interactions.
     * @example var exampleStorage = await (new KeyValueStorage("exampleName"));
     */
    constructor(storageAreaName, storeNames=["default"], defaultStore = "") {
        this.storageAreaName = storageAreaName;
        const stores = {};
        for (const storeName in storeNames) stores[storeNames[storeName]] = "key";

        this.defaultStore = defaultStore === "" ? Object.keys(stores)[0] : defaultStore;

        this.storageInstance = new Dexie(this.storageAreaName);
        this.storageInstance.version(1).stores(stores);
        return this;
    }

    /**
     * Get a value from storage.
     * @param {string} key - The key to use in the storage area.
     * @param {string} store - The name of the store from which to access the key
     * @returns {Promise<Array>|Promise<ArrayBuffer>|Promise<Blob>|Promise<Float32Array>|Promise<Float64Array>|
     * Promise<Int8Array>|Promise<Int16Array>|Promise<Int32Array>|Promise<Number>|Promise<Object>|Promise<Uint8Array>|
     * Promise<Uint8ClampedArray>|Promise<Uint16Array>|Promise<Uint32Array>|Promise<string>} The value in the
     * storage area for the key, or `null` if the key is not in storage.
     */
    async get(key, store="") {
        const result = await this.storageInstance[store == "" ? this.defaultStore : store].get(key);
        if (result) return result.value;
        return null;
    }

    /**
     * Set a value in storage.
     * @param {string} key - The key to use in the storage area.
     * @param {(Array|ArrayBuffer|Blob|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|
     * Number|Object|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|string)} value - The value
     * to store in the storage area for the key.
     * @param {string} store - The name of the store where the pair should be placed
     */
    async set(key, value, store="") {
        await this.storageInstance[store == "" ? this.defaultStore : store].put({key: key, value: value});
    }

    /**
     * Create an object where with a property-value pair for each key-value pair in the storage area.
     * Note that this could be slow and consume excessive memory if the storage area contains a lot
     * of data.
     * @param {string} The store whose contents to return
     * @returns {Promise<Object>} An object that reflects the content in the storage area.
     */
    async getContentsAsObject(store="") {
        const storeToAccess = this.storageInstance[store == "" ? this.defaultStore : store];
        const output = { };
        storeToAccess.each(async (object) => {
            output[object.key] = object.value;
        });

        return output;
    }
}

/** Class for maintaining persistent counters (e.g., unique IDs). */
class Counter {
    /**
     * Create a persistent counter. Note that, because creating a counter
     * requires asynchronous calls (which cannot happen in a constructor),
     * the counter will not be setup until a subsequent call to `initialize()`.
     * @param {string} counterName - A name that uniquely identifies the counter.
     * @example var exampleCounter = await (new Counter("exampleName")).initialize();
     */
    constructor(counterName) {
        this.counterName = counterName;
        this.counterValue = 0;
    }

    /**
     * Complete creation of the persistent counter. Returns itself for convenience.
     * @returns {Object} The persistent counter.
     */
    async initialize() {
        if(Counter.storage == null)
            Counter.storage = new KeyValueStorage("webScience.storage.counter");
        const initialCounterValue = await Counter.storage.get(this.counterName);
        if(initialCounterValue != null)
            this.counterValue = initialCounterValue;
        else
            await Counter.storage.set(this.counterName, this.counterValue);
        return this;
    }

    /**
     * Get the current value of the counter. The value is cached in memory, which allows
     * this function to be synchronous.
     * @returns {number} The current value of the counter.
     */
    get() {
        return this.counterValue;
    }

    /**
     * Increment the value of the counter by a number and return the incremented value.
     * The cached counter value is synchronously incremented; the stored
     * counter value is asynchronously incremented.
     * @param {number} incrementValue - The amount to increment the counter.
     * @returns {Promise<number>} - The counter value after incrementing.
     */
    async incrementByAndGet(incrementValue) {
        const currentCounterValue = (this.counterValue = this.counterValue + incrementValue);
        await Counter.storage.set(this.counterName, this.counterValue);
        return currentCounterValue;
    }

    /**
     * Increment the value of the counter, ignoring the value. Identical to
     * the Promise returned by `counter.incrementByAndGet.then(value => return)`.
     * @param {number} incrementValue - The amount to increment the counter.
     */
    async incrementBy(incrementValue) {
        await this.incrementByAndGet(incrementValue);
        return;
    }

    /**
     * Increment the value of the counter and return the incremented value.
     * The cached counter value is synchronously incremented; the stored
     * counter value is asynchronously incremented.
     * @returns {Promise<number>} - The counter value after incrementing.
     */
    async incrementAndGet() {
        // Saving the current counter value to avoid race conditions during
        // the asynchronous save to storage
        const currentCounterValue = (this.counterValue = this.counterValue + 1);
        await Counter.storage.set(this.counterName, this.counterValue);
        return currentCounterValue;
    }

    /**
     * Increment the value of the counter and return the value prior to
     * incrementing. Identical to the Promise returned by
     * `counter.incrementAndGet().then(value => return value - 1)`.
     * @returns {Promise<number>} - The counter value before incrementing.
     */
    async getAndIncrement() {
        const ret = await this.incrementAndGet() - 1;
        return ret;
    }

    /**
     * Increment the value of the counter, ignoring the value. Identical to
     * the Promise returned by `counter.incrementAndGet.then(value => return)`.
     */
    async increment() {
        await this.incrementAndGet();
        return;
    }

    async getAndReset() {
        const currentCounterValue = this.counterValue;
        this.counterValue = 0;
        await Counter.storage.set(this.counterName, this.counterValue);
        return currentCounterValue;
    }

    /**
     * Create an object with a property-value pair for each counter name-value pair.
     * @returns {Promise<Object>} An object that reflects the set of counters.
     */
    static async getContentsAsObject() {
        return await Counter.storage.getContentsAsObject();
    }
}

// Workaround for static class variable
Counter.storage = null;

// Prevents IndexedDB data from getting deleted without user intervention
// Ignoring the promise resolution because we still want to use storage
// even if Firefox won't guarantee persistence
navigator.storage.persist();

/**
 * This module provides functionality for passing messages between the
 * background page and content script environments. Messages between the
 * environments are easily malformed, and minor errors in message handlers
 * can have cascading effects. These problems can be quite difficult to debug.
 * This module addresses these issue by providing a simple message type and
 * type checking system on top of `browser.runtime.onMessage` and
 * `browser.tabs.sendMessage`.
 * 
 * # Messages
 * A message, for purposes of this module, must be an object and must have a
 * type property with a string value.
 * 
 * # Schemas
 * A schema, for purposes of this module, must be an object. Each property in
 * the schema object is a property that is required in a corresponding message
 * object. Each value in the schema object is a string that must match the
 * `typeof` value for that property in a corresponding message.
 * 
 * @module webScience.messaging
 */

const debugLog = getDebuggingLog();

/**
 * A Map that stores message listeners. The keys are message types and the values
 * are Sets of message listeners.
 * @private
 * @const {Map<string,Set<function>>}
 */
const messageRouter = new Map();

/**
 * A Map that stores message schemas. The keys are message types and the values
 * are schemas.
 * @private
 * @const {Map<string,Object>}
 */
const messageSchemas = new Map();

/**
 * Whether the module's `browser.runtime.onMessage` listener has been registered.
 * @private
 * @type {boolean}
 * @default
 */
let initialized = false;

/**
 * Validates that a message is an object with a type string.
 * @param {*} message - The message.
 * @returns {boolean} Whether the message is an object with a type string.
 */
function validateMessageObject(message) {
    // If the message does not have the right type, fail validation.
    if ((typeof message !== "object") || (message === null)) {
        return false;
    }

    // If there is no type string, fail validation.
    if(!("type" in message) || (typeof message.type !== "string")) {
        debugLog(`Unable to validate message object with missing type string: ${JSON.stringify(message)}`);
        return false;
    }

    return true;
}

/**
 * Validates a message against a registered schema. Assumes that the message is an object
 * with a type string. If you cannot guarantee that, call `validateMessageObject` first.
 * @param {*} message - The message, which must be an object that matches the properties
 * and types specified in the schema.
 * @param {object} [messageSchema] - The schema to use for validation. If no schema is
 * specified, this function attempts to retrieve the registered schema for the message type.
 * @returns {boolean} Whether the message successfully validated against the schema. Returns
 * `false` if there is a schema mismatch or if there is no schema registered for the message
 * type.
 */
function validateMessageAgainstSchema(message, messageSchema)
{
    // If the caller doesn't specify a message schema, attempt to retrieve the registered schema.
    if(messageSchema === undefined) {
        messageSchema = messageSchemas.get(message.type);
        if(messageSchema === undefined) {
            debugLog(`No schema for message with type: ${message.type}`);
            return false;
        }
    }

    // Check the message against the schema.
    for(const field in messageSchema) {
        if (!(field in message) || (typeof message[field] !== messageSchema[field])) {
            debugLog(`Mismatch between message and schema: ${JSON.stringify(message)}`);
            return false;
        }
    }
    return true;
}

/**
 * A listener for `browser.runtime.onMessage` that routes messages to the right
 * listener(s) based on message type. See the documentation for `browser.runtime.onMessage`
 * for detail on the parameters.
 * @returns {Promise} - An optional response to the message.
 * @private
 */
function browserRuntimeListener(message, sender, sendResponse) {
    let messageListeners, messageSchema, browserRuntimeReturnValue;

    // If the message is not in an expected format, ignore it.
    if(!validateMessageObject(message)) {
        debugLog(`browser.runtime message with unexpected format: ${JSON.stringify(message)}`);
        return;
    }

    // If the message does not have at least one registered listener, ignore it.
    if ((messageListeners = messageRouter.get(message.type)) === undefined) {
        debugLog(`browser.runtime message with no listener for message type: ${JSON.stringify(message)}`);
        return;
    }

    // If there is a schema registered for this message type, check the message against the schema.
    if(((messageSchema = messageSchemas.get(message.type)) !== undefined)
         && !validateMessageAgainstSchema(message, messageSchema)) {
             debugLog(`browser.runtime message failed schema validation: ${JSON.stringify(message)}`);
        return;
    }

    for (const messageListener of messageListeners) {
        const messageListenerReturnValue = messageListener(message, sender, sendResponse);
        if ((messageListenerReturnValue !== undefined) && (browserRuntimeReturnValue !== undefined))
            debugLog(`Multiple listener return values for message type: ${message.type}`);
        browserRuntimeReturnValue = messageListenerReturnValue;
    }
    
    return browserRuntimeReturnValue;
}

/**
 * Registers a message listener.
 * @param {string} messageType - The type of message that triggers the listener function.
 * @param {function} messageListener - The listener function, which receives the same
 * parameters as if it had been called by `browser.runtime.onMessage`, and that can
 * return the same values as a listener to `browser.runtime.onMessage`.
 * @param {object} [messageSchema] - An optional schema to register for the message type.
 */
function registerListener(messageType, messageListener, messageSchema) {
    if (!initialized) {
        initialized = true;
        browser.runtime.onMessage.addListener(browserRuntimeListener);
    }

    let messageListeners = messageRouter.get(messageType);
    if (messageListeners === undefined) {
        messageListeners = new Set();
        messageRouter.set(messageType, messageListeners);
    }
    messageListeners.add(messageListener);

    if(messageSchema !== undefined)
        registerSchema(messageType, messageSchema);
}

/**
 * Unregisters a message listener.
 * @param {string} messageType - The type of message that triggers the listener function.
 * @param {function} messageListener - The listener function.
 * @param {boolean} [unregisterSchema=true] - Whether to unregister the schema for the message type, if there is one.
 */
function unregisterListener(messageType, messageListener, unregisterSchema) {
    const messageListeners = messageRouter.get(messageType);
    if(messageListeners !== undefined) {
        messageListeners.delete(messageListener);
        if(messageListeners.size === 0)
            messageRouter.delete(messageType);
    }
    if(unregisterSchema)
        messageSchemas.delete(messageType);
}

/**
 * Registers a message schema.
 * @param {string} messageType - The type of message that must follow the schema.
 * @param {Object} messageSchema - An object where each field has a value that is
 * a built-in type string.
 */
function registerSchema(messageType, messageSchema) {
    // Check whether the schema has already been registered
    if(messageSchemas.has(messageType)) {
        return;
    }
    messageSchemas.set(messageType, messageSchema);
}

/**
 * Sends a message to a tab after checking the message against the registered
 * schema for the message type. Equivalent to calling `browser.tabs.sendMessage`
 * with a `catch` handler after validating the message against the schema.
 * @param {number} tabId - The ID of the tab that should receive the message.
 * @param {Object} message - The contents of the message.
 * @returns {Promise} - The same return value as `browser.tabs.sendMessage`,
 * or a Promise that resolves to false if there was an errror sending the message.
 */
function sendMessageToTab(tabId, message) {
    // Validate the outbound message against the schema
    if(!validateMessageObject(message) || !validateMessageAgainstSchema(message)) {
        debugLog(`Attempted to send message that fails validation: ${JSON.stringify(message)}`);
        return new Promise((resolve) => { resolve(false); });
    }
    return browser.tabs.sendMessage(tabId, message).catch((reason) => {
        debugLog(`Unable to send message to tab: ${JSON.stringify(message)}`);
        return false;
    });
}

/**
 * This module enables registering browser idle state listeners with
 * varying detection intervals. The module is needed because the
 * WebExtensions `idle` API currently only supports one detection
 * interval per extension.
 * 
 * The implementation of this module combines the WebExtensions `idle`
 * API and `setTimeout`. It configures the `idle` API to use the
 * minimum idle detection interval with `idle.setDetectionInterval()`,
 * registers a listener for the `idle.onStateChanged` event, and then
 * uses `setTimeout` after the browser goes idle to notify idle state
 * listeners with detection intervals greater than the minimum. If there
 * are any pending idle notification timeouts when the browser goes
 * active, those timeouts are cleared.
 * 
 * Some implementation quirks to be aware of for use and future
 * development:
 * 
 *   * This module depends on configuring the detection interval
 *     for the `idle` API to its minimum value. Any subsequent changes to
 *     the idle state detection interval in the `idle` API will result in
 *     unpredictable behavior.
 * 
 *   * Idle state events generated by this module are not guaranteed to
 *     reflect idle state transitions (e.g., a listener might receive
 *     `"active"` followed by `"active"`). We might want to implement this
 *     guarantee eventually.
 * 
 *   * Because the browser idle state resets with each browser session,
 *     it is not a problem that timeouts do not persist between browser
 *     sessions.
 * 
 *   * The module does not directly interact with the Firefox
 *     [`nsIdleService`](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIdleService),
 *     even though it supports varying idle state detection intervals, in
 *     order to minimize privileged extension code.
 * 
 * @module webScience.idle
 */

/**
 * The minimum idle state detection interval (in seconds) supported by
 * the `idle` API.
 * @private
 * @const {number}
 */
const minimumIdleStateDetectionIntervalInSeconds = 15;

/**
 * Whether we have configured  configured the idle state detection
 * interval, cached the idle state, and registered the idle state
 * listener.
 * @private
 * @type {boolean}
 * @default
 */
let initialized$1 = false;

/**
 * An estimate of the time (in milliseconds since the epoch) when the
 * browser last entered an idle state. Generated by subtracting the
 * idle state detection interval (converted to milliseconds) from the
 * time the browser last fired an idle state notification.
 * @private
 * @type {boolean}
 * @default
 */
let lastIdleTime = -1;

/**
 * A cached copy of the browser's current idle state. This caching enables
 * synchronous checking of the current idle state.
 * @private
 * @type {string}
 * @default
 */
let currentIdleState = "active";

/**
 * A Map that stores browser idle state listeners. The keys are
 * detection intervals in seconds and the values are Sets of
 * browser idle state listeners.
 * @private
 * @const {Map<number,Set<function>>}
 */
const idleStateListeners = new Map();

/**
 * A Map that stores browser idle state timeouts. The keys are
 * detection intervals in seconds and the values are `timeoutID`
 * values from `setTimeout()`.
 * @private
 * @const {Map<number,number>}
 */
const idleStateTimeouts = new Map();

/**
 * Configure the idle state detection interval, cache the idle state,
 * and register the idle state listener.
 * @private
 */
async function initialize() {
    if(initialized$1)
        return;
    initialized$1 = true;
    browser.idle.setDetectionInterval(minimumIdleStateDetectionIntervalInSeconds);
    currentIdleState = await browser.idle.queryState(minimumIdleStateDetectionIntervalInSeconds);
    if(currentIdleState === "idle")
        lastIdleTime = Date.now() - (minimumIdleStateDetectionIntervalInSeconds * 1000);
    browser.idle.onStateChanged.addListener(idleOnStateChangedListener);
}

/**
 * Determine whether the browser has been idle for a specified time.
 * This function is synchronous, unlike `idle.queryState`. Note that,
 * if an idle state listener has not been registered, this function
 * will always return the default value of active state.
 * @param {number} detectionIntervalInSeconds - The detection interval
 * to use
 */
function queryState(detectionIntervalInSeconds) {
    if(currentIdleState !== "idle")
        return currentIdleState;

    if(Date.now() >= (lastIdleTime + (detectionIntervalInSeconds * 1000)))
        return "idle";

    return "active";    
}

/**
 * A listener for `idle.onStateChanged` that supports notifying
 * idle state listeners with varying detection intervals.
 * @private
 */
function idleOnStateChangedListener(newState) {
    currentIdleState = newState;

    // If the browser idle state transitions to non-idle...
    if(newState !== "idle") {
        // Cancel any pending notification timeouts and forget the timeout IDs
        for(const idleStateTimeoutID of idleStateTimeouts.values())
            clearTimeout(idleStateTimeoutID);
        idleStateTimeouts.clear();

        // Notify all the idle state listeners
        for(const idleStateListenerSet of idleStateListeners.values())
            for(const idleStateListener of idleStateListenerSet)
                idleStateListener(newState.repeat(1));
        return;
    }

    // If the browser idle state transitions to idle...

    // Remember an estimate of when the browser last went into idle state
    lastIdleTime = Date.now() - (minimumIdleStateDetectionIntervalInSeconds * 1000);

    // Set timeouts for all the idle state listeners
    for(const [detectionIntervalInSeconds, idleStateListenersWithDetectionInterval] of idleStateListeners)
        scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds);
}

/**
 * Schedule a timeout for a set of idle state listeners.
 * @param {Set<function>} idleStateListenersWithDetectionInterval - The set of idle state listeners.
 * @param {number} detectionIntervalInSeconds - The idle state detection interval (in seconds) for this set of listeners.
 * @returns {number} The timeout ID for the scheduled timeout.
 * @private
 */
function scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds) {
    // Determine how long to delay before firing the listeners
    // If the delay is negative, set it to 0 (i.e., fire as soon as possible)
    const delayTime = Math.max(lastIdleTime + (detectionIntervalInSeconds * 1000) - Date.now(), 0);
    const timeoutId = setTimeout(function() {
        for(const idleStateListener of idleStateListenersWithDetectionInterval)
            idleStateListener("idle");
    }, delayTime);
    idleStateTimeouts.set(detectionIntervalInSeconds, timeoutId);
}

/**
 * Register a listener function for browser idle state.
 * @param {function} idleStateListener - The listener function.
 * The function will receive the same `idle.IdleState` parameter
 * as if it had subscribed to idle state events with
 * `browser.idle.onStateChanged.addListener`.
 * @param {number} detectionIntervalInSeconds - The detection
 * interval for firing the idle state listener. Note that this
 * time in measured in seconds because that is how the `idle`
 * API is implemented, even though most times in the library
 * are measured in milliseconds.
 */
async function registerIdleStateListener(idleStateListener, detectionIntervalInSeconds) {
    await initialize();

    // If we already have at least one idle state listener with this
    // detection interval, add the new listener to the Set of listeners
    // and we're done
    let idleStateListenersWithDetectionInterval = idleStateListeners.get(detectionIntervalInSeconds);
    if(idleStateListenersWithDetectionInterval !== undefined) {
        idleStateListenersWithDetectionInterval.add(idleStateListener);
        return;
    }

    // Create a Set for listeners with this detection interval, including
    // this idle state listener
    idleStateListenersWithDetectionInterval = idleStateListeners.set(detectionIntervalInSeconds, (new Set()).add(idleStateListener));

    // If we're in idle state, and we have been in the state for less time
    // than the detection interval for this listener (i.e., the listener
    // should still receive a state change notification), schedule a
    // notification
    if((currentIdleState === "idle") && (Date.now() < (lastIdleTime + detectionIntervalInSeconds * 1000)))
        scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds);
}

/**
 * This module provides utilities for matching URLs against criteria.
 *
 * The module supports two types of criteria:
 *   * Match Patterns (preferred) - a syntax used in the WebExtensions API for expressing possible URL matches.
 *     See: {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns}.
 *   * Domains - a simple list of domain names, which are converted into match patterns.
 *
 * The module supports two types of output for matching URLs:
 *   * Match Pattern Sets (preferred) - optimized objects that compare a URL against the criteria.
 *   * Regular Expressions - `RegExp` objects that compare a URL against the criteria.
 *   * Regular Expression Strings - strings expressing regular expressions for comparing a URL against the criteria.
 *
 * @module webScience.matching
 */

/**
 * A RegExp for validating WebExtensions match patterns, using the same regular expressions for manifest
 * validation as Firefox.
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/schemas/manifest.json}
 * @constant
 * @type {RegExp}
 * @private
 */
const matchPatternValidationRegExp = new RegExp("(^<all_urls>$)|(^(https?|wss?|file|ftp|\\*)://(\\*|\\*\\.[^*/]+|[^*/]+)/.*$)|(^file:///.*$)|(^resource://(\\*|\\*\\.[^*/]+|[^*/]+)/.*$|^about:|^data:)", "i");

/**
 * A Set of URL schemes permitted in WebExtensions match patterns.
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp}
 * @constant
 * @type {Set<string>}
 * @private
 */
const permittedMatchPatternSchemes = new Set(["*", "http", "https", "ws", "wss", "file", "ftp", "data", "file"]);

/**
 * A Set of URL schemes that require a host locator (i.e., are followed by `://` rather than `:`).
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp}
 * @constant
 * @type {Set<string>}
 * @private
 */
const hostLocatorMatchPatternSchemes = new Set(["*", "http", "https", "ws", "wss", "file", "ftp", "moz-extension", "chrome", "resource", "moz", "moz-icon", "moz-gio"]);

/**
 * A regular expression string for the special "<all_urls>" wildcard match pattern, which matches
 * "http", "https", "ws", "wss", "ftp", "file", and "data" schemes with any hostname and path.
 * This regular expression includes a little sanity checking: hostnames are limited to alphanumerics,
 * hyphen, period, and brackets at the start and end (for IPv6 literals).
 * @constant
 * @type {string}
 * @private
 */
const allUrlsRegExpString = "^(?:(?:(?:https?)|(?:wss?)|(?:ftp))://[?[a-zA-Z0-9\\-\\.]+\\]?(?::[0-9]+)?(?:(?:)|(?:/.*)))|(?:file://[?[a-zA-Z0-9\\-\\.]*\\]?/.*)|(?:data:.*)$";

/**
 * An internal object that represents a parsed match pattern.
 * @typedef {Object} ParsedMatchPattern
 * @property {boolean} allUrls - Whether the match pattern is the special all URLs match pattern.
 * @property {string} scheme - The scheme for the match pattern. Must be one of: "http", "https", "ws",
 * wss", "file", "ftp", "data", "file", or "*". The special wildcard value "*" matches "http", "https",
 * "ws", or "wss".
 * @property {boolean} matchSubdomains - If this scheme involves a hostname, and the hostname is not the
 * special wildcard value, whether to match any subdomains of the domain.
 * @property {boolean} host - If this scheme involves a hostname, either the hostname for the match pattern
 * or the special wildcard value "*" that matches all domains.
 * @property {string} path - The path for the match pattern. The special wildcard value "/*" matches all
 * paths.
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns}
 * @private
 */

/**
 * Parses a match pattern string into an object that represents the match pattern. We use this internal,
 * intermediate representation to enable constructing efficient matching objects. The parsing logic is
 * nearly identical to the parsing logic in Firefox.
 * @throws {Throws an error if the match pattern is not valid.}
 * @param {string} matchPattern - The match pattern string.
 * @returns {ParsedMatchPattern} - The parsed match pattern.
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp}
 * @private
 */
function parseMatchPattern(matchPattern) {
    if(!matchPatternValidationRegExp.test(matchPattern))
        throw new Error(`Invalid match pattern, failed validation: ${matchPattern}`);

    const parsedMatchPattern = {
        allUrls: false,
        scheme: "",
        matchSubdomains: false,
        host: "",
        path: ""
    };

    let tail = matchPattern.repeat(1);

    if(matchPattern === "<all_urls>") {
        parsedMatchPattern.allUrls = true;
        return parsedMatchPattern;
    }

    // Parse the scheme
    let index = matchPattern.indexOf(":");
    if(index <= 0)
        throw new Error(`Invalid match pattern, missing : after scheme: ${matchPattern}`);
    const scheme = matchPattern.substr(0, index);
    if(!permittedMatchPatternSchemes.has(scheme))
        throw new Error(`Invalid match pattern, unsupported scheme: ${matchPattern}`);
    const hostLocatorScheme = hostLocatorMatchPatternSchemes.has(scheme);
    parsedMatchPattern.scheme = scheme;

    // Parse the host
    let offset = index + 1;
    tail = matchPattern.substr(offset);
    if(hostLocatorScheme) {
        if(!tail.startsWith("//"))
            throw new Error(`Invalid match pattern, missing // required by scheme: ${matchPattern}`);

        offset += 2;
        tail = matchPattern.substr(offset);
        index = tail.indexOf("/");
        if(index < 0)
            index = tail.length;

        let host = tail.substring(0, index);
        if((host === "") && (scheme !== "file"))
            throw new Error(`Invalid match pattern, missing host required by scheme: ${matchPattern}`);

        offset += index;
        tail = matchPattern.substring(offset);

        if(host !== "*") {
            if(host.startsWith("*.")) {
                host = host.substring(2);
                if(host === "*")
                    throw new Error(`Invalid match pattern, subdomain wildcard with host wildcard: ${matchPattern}`);
                parsedMatchPattern.matchSubdomains = true;
            }
        }
        parsedMatchPattern.host = host;
    }

    // Parse the path
    const path = tail;
    if(path === "")
        throw new Error(`Invalid match pattern, missing path: ${matchPattern}`);
    parsedMatchPattern.path = path;

    return parsedMatchPattern;
}

/**
 * Escapes regular expression special characters in a string.
 * @param {string} string - The input string.
 * @returns {string} The input string with regular expression special characters escaped.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions}
 */
function escapeRegExpString(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Converts a parsed match pattern into a regular expression string.
 * @param {ParsedMatchPattern} parsedMatchPattern - The parsed match pattern object.
 * @returns {string} - The regular expression string.
 * @private
 */
function parsedMatchPatternToRegExpString(parsedMatchPattern) {
    if(parsedMatchPattern.allUrls)
        return allUrlsRegExpString.repeat(1);

    // Scheme
    const hostLocatorScheme = hostLocatorMatchPatternSchemes.has(parsedMatchPattern.scheme);
    let schemeRegExpString = parsedMatchPattern.scheme;
    // The special "*" wildcard scheme should match the "http", "https", "ws", and "wss" schemes
    if(parsedMatchPattern.scheme === "*")
        schemeRegExpString = "(?:https?|wss?)";

    // Host
    let hostRegExpString = "";
    if(hostLocatorScheme) {
        // The special "*" wildcard host should match any valid hostname
        // This isn't a robust check, just limiting to permitted characters and IPv6 literal brackets
        if(parsedMatchPattern.host === "*")
            hostRegExpString = "\\[?[a-zA-Z0-9\\-\\.]+\\]?";
        else {
            hostRegExpString = escapeRegExpString(parsedMatchPattern.host);
            // The check for subdomains also isn't robust, limiting to permitted characters, no repeated
            // periods, and ending in a period
            if(parsedMatchPattern.matchSubdomains)
                hostRegExpString = "(?:[a-zA-Z0-9\\-]+\\.)*" + hostRegExpString;
            // If this is a scheme that requires "://" and isn't "file", there might be a port specified
            if(parsedMatchPattern.scheme !== "file")
                hostRegExpString = hostRegExpString + "(?::[0-9]+)?";
        }
    }

    // Path
    let pathRegExpString = "";
    // If the path is / or /*, allow a URL with no path specified to match
    if(parsedMatchPattern.path === "/" )
        pathRegExpString = "/?";
    else if(parsedMatchPattern.path === "/*")
        pathRegExpString = "(?:/.*)?";
    else {
        const escapedPathArray = [ ];
        for(const c of parsedMatchPattern.path) {
            if(c === "*")
                escapedPathArray.push(".*");
            else
                escapedPathArray.push(escapeRegExpString(c));
        }
        pathRegExpString = escapedPathArray.join("");
    }
    // Allow arbitrary parameters or an arbitrary fragment identifier
    pathRegExpString += "(?:\\?.*)?(?:#.*)?";
    return "^" + schemeRegExpString + (hostLocatorScheme ? "://" : ":") + hostRegExpString + pathRegExpString + "$";
}

/**
 * Converts a match pattern into a regular expression string.
 * @throws {Throws an error if the match pattern is not valid.}
 * @param {string} matchPattern - The match pattern.
 * @returns {string} The regular expression.
 * @private
 */
function matchPatternToRegExpString(matchPattern) {
    return parsedMatchPatternToRegExpString(parseMatchPattern(matchPattern));
}

/**
 * Combines an array of regular expression strings into one regular expression string, encapsulated as
 * a non-capturing group, where each input string is an alternative.
 * @param {string[]} regExpStrings - An array of regular expression strings.
 * @private
 */
function combineRegExpStrings(regExpStrings) {
    return "(?:" + (regExpStrings.map((regExpString) => { return regExpStrings.length > 1 ? `(?:${regExpString})` : regExpString; })).join("|") + ")";
}

/**
 * Converts an array of match patterns into a regular expression string.
 * @throws {Throws an error if a match pattern is not valid.}
 * @param {string[]} matchPatterns - The match patterns.
 * @returns {string} The regular expression string.
 */
function matchPatternsToRegExpString(matchPatterns) {
    return combineRegExpStrings(matchPatterns.map(matchPattern => { return matchPatternToRegExpString(matchPattern); }));
}

/**
 * Converts an array of match patterns into a RegExp object.
 * @throws {Throws an error if a match pattern is not valid.}
 * @param {string[]} matchPatterns - The match patterns.
 * @returns {RegExp} The regular expression RegExp object.
 */
function matchPatternsToRegExp(matchPatterns) {
    // Set the entire regular expression to case insensitive, because JavaScript regular expressions
    // do not (currently) support partial case insensitivity
    return new RegExp(matchPatternsToRegExpString(matchPatterns), "i");
}

/**
 * Generates a set of match patterns for a set of domains. The match patterns will use the special
 * "*" wildcard scheme (matching "http", "https", "ws", and "wss") and the special "/*" wildcard
 * path (matching any path).
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string[]} Match patterns for the domains in the set.
 */
function domainsToMatchPatterns(domains, matchSubdomains = true) {
    return domains.map(domain => { return `*://${matchSubdomains ? "*." : ""}${domain}/*` });
}

/**
 * Normalizes a URL string for subsequent comparison. Normalization includes the following steps:
 *   * Parse the string as a `URL` object, which will (among other normalization) lowercase the
 *     scheme and hostname.
 *   * Remove the port number, if any. For example, https://www.mozilla.org:443/ becomes https://www.mozilla.org/.
 *   * Remove query parameters, if any. For example, https://www.mozilla.org/?foo becomes https://www.mozilla.org/.
 *   * Remove the fragment identifier, if any. For example, https://www.mozilla.org/#foo becomes https://www.mozilla.org/.
 * @param {string} url - The URL string to normalize.
 * @return {string} The normalized URL string.
 * @throws {Throws an error if the URL string is not a valid, absolute URL.}
 */
function normalizeUrl(url) {
    const urlObj = new URL(url);
    urlObj.port = "";
    urlObj.search = "";
    urlObj.hash = "";
    return urlObj.href;
}

/**
 * A callback function with no parameters.
 * @callback callbackWithoutParameters
 */

/**
 * A class that provides an event API similar to WebExtensions `events.Event` objects.
 * @template EventCallbackFunction
 * @template EventOptions
 */
class Event {
    /**
     * Creates an event instance similar to WebExtensions `events.Event` objects.
     * @param {EventOptions} [options] - A set of options for the event.
     * @param {addListenerCallback} [options.addListenerCallback] - A function that is
     * called when a listener function is added.
     * @param {removeListenerCallback} [options.removeListenerCallback] - A function
     * that is called when a listener function is removed.
     * @param {notifyListenersCallback} [options.notifyListenersCallback] - A function
     * that is called before a listener is notified and can filter the notification.
     */
    constructor({
        addListenerCallback = null,
        removeListenerCallback = null,
        notifyListenersCallback = null
    } = {
        addListenerCallback: null,
        removeListenerCallback: null,
        notifyListenersCallback: null
    }) {
        this.addListenerCallback = addListenerCallback;
        this.removeListenerCallback = removeListenerCallback;
        this.notifyListenersCallback = notifyListenersCallback;
        this.listeners = new Map();
    }

    /**
     * A callback function that is called immediately before a new listener function is added.
     * @callback addListenerCallback
     * @param {EventCallbackFunction} listener - The new listener function.
     * @param {EventOptions} options - The options for the new listener function.
     */

    /**
     * A function that adds an event listener, with optional parameters. If the
     * listener has previously been added for the event, the listener's options
     * (if any) will be updated.
     * @param {EventCallbackFunction} listener - The function to call when the event fires.
     * @param {EventOptions} options - Options for when the listener should be called.
     * The supported option(s) depend on the event type.
     */
    addListener(listener, options) {
        if(this.addListenerCallback !== null) {
            this.addListenerCallback(listener, options);
        }
        this.listeners.set(listener, options);
    }

    /**
     * A callback function that is called immediately after a listener function is removed.
     * @callback removeListenerCallback
     * @param {EventCallbackFunction} listener - The listener function to remove.
     */

    /**
     * A function that removes an event listener.
     * @param {EventCallbackFunction} listener - The listener function to remove.
     */
    removeListener(listener) {
        this.listeners.delete(listener);
        if(this.removeListenerCallback !== null) {
            this.removeListenerCallback(listener);
        }
    }

    /**
     * A function that checks whether a particular event listener has been added.
     * @param {EventCallbackFunction} listener - The listener function to check.
     * @return {boolean} Whether the listener function has been added.
     */
    hasListener(listener) {
        return this.listeners.has(listener);
    }

    /**
     * Checks whether there are any listeners registered.
     * @return {boolean} Whether there are any listeners
     */
    hasAnyListeners() {
        return this.listeners.size > 0;
    }

    /**
     * A callback function that is called when a listener function may be notified.
     * @callback notifyListenersCallback
     * @param {EventCallbackFunction} listener - The listener function that may be called.
     * @param {Array} listenerArguments - The arguments that would be passed to the listener
     * function.
     * @param {EventOptions} options - The options that the listener was added with.
     * @return {boolean} Whether to call the listener function.
     */

    /**
     * Notify the listener functions for the event.
     * @param {Array} [listenerArguments=[]] - The arguments that will be passed to listener
     * functions.
     */
    notifyListeners(listenerArguments = []) {
        this.listeners.forEach((options, listener) => {
            try {
                if((this.notifyListenersCallback === null) || this.notifyListenersCallback(listener, listenerArguments, options))
                    listener.apply(null, listenerArguments);
            }
            catch(error) {
            }
        });
    }
}

/**
 * This module provides utilities for working with content scripts.
 * 
 * @module webScience.contentScripts
 */

/**
 * Unpacks a content script represented as a data URL, with base64 encoding, to
 * a string containing the content script. Useful for working with content
 * scripts that have been encoded with `@rollup/plugin-url`.
 * @param {string} dataUrl - The data URL.
 * @returns {string} - The content script.
 */
function unpack(dataUrl) {
    return atob(dataUrl.slice("data:application/javascript;base64,".length));
}

var pageManagerContentScript = "data:application/javascript;base64,KGZ1bmN0aW9uICgpIHsKICAgICd1c2Ugc3RyaWN0JzsKCiAgICAvKioKICAgICAqIENvbnRlbnQgc2NyaXB0IGZvciB0aGUgcGFnZU1hbmFnZXIgbW9kdWxlLiBUaGlzIHNjcmlwdCBwcm92aWRlcyBhIGBwYWdlTWFuYWdlcmAKICAgICAqIEFQSSB3aXRoIGdsb2JhbCBzY29wZSBpbiB0aGUgY29udGVudCBzY3JpcHQgZW52aXJvbm1lbnQuIFRoZSBBUEkgaW5jbHVkZXMgdGhlCiAgICAgKiBmb2xsb3dpbmcgZmVhdHVyZXMuCiAgICAgKiAgICogUGFnZSBUcmFja2luZwogICAgICogICAgICogYHBhZ2VJZGAgLSBBIHVuaXF1ZSBJRCBmb3IgdGhlIHBhZ2UuCiAgICAgKiAgICAgKiBgdXJsYCAtIFRoZSBVUkwgb2YgdGhlIHBhZ2UsIG9taXR0aW5nIGFueSBoYXNoLgogICAgICogICAgICogYHJlZmVycmVyYCAtIFRoZSByZWZlcnJlciBmb3IgdGhlIHBhZ2UuCiAgICAgKiAgICogUGFnZSBFdmVudHMKICAgICAqICAgICAqIGBvblBhZ2VWaXNpdFN0YXJ0YCAtIEFuIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiBhIHBhZ2UgdmlzaXQgYmVnaW5zLiBOb3RlIHRoYXQKICAgICAqICAgICAgIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IG1heSBoYXZlIGFscmVhZHkgZmlyZWQgYnkgdGhlIHRpbWUgYW5vdGhlcgogICAgICogICAgICAgY29udGVudCBzY3JpcHQgYXR0YWNoZXMgKHNlZSBkaXNjdXNzaW9uIGJlbG93KS4KICAgICAqICAgICAqIGBvblBhZ2VWaXNpdFN0b3BgIC0gQW4gZXZlbnQgdGhhdCBmaXJlcyB3aGVuIGEgcGFnZSB2aXNpdCBlbmRzLgogICAgICogICAgICogYG9uUGFnZUF0dGVudGlvblVwZGF0ZWAgLSBBbiBldmVudCB0aGF0IGZpcmVzIHdoZW4gdGhlIHBhZ2UncyBhdHRlbnRpb24gc3RhdGUKICAgICAqICAgICBjaGFuZ2VzLgogICAgICogICAgICogYG9uUGFnZUF1ZGlvVXBkYXRlYCAtIEFuIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiB0aGUgcGFnZSdzIGF1ZGlvIHN0YXRlIGNoYW5nZXMuCiAgICAgKiAgICogUGFnZSBQcm9wZXJ0aWVzCiAgICAgKiAgICAgKiBgcGFnZUhhc0F0dGVudGlvbmAgLSBXaGV0aGVyIHRoZSBwYWdlIGN1cnJlbnRseSBoYXMgdGhlIHVzZXIncyBhdHRlbnRpb24uCiAgICAgKiAgICAgKiBgcGFnZUhhc0F1ZGlvIC0gV2hldGhlciB0aGVyZSBpcyBjdXJyZW50bHkgYXVkaW8gcGxheWluZyBvbiB0aGUgcGFnZS4KICAgICAqICAgICAqIGBwYWdlVmlzaXRTdGFydGVkYCAtIFdoZXRoZXIgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQgaGFzIGNvbXBsZXRlZCBmaXJpbmcsCiAgICAgKiAgICAgc3VjaCB0aGF0IGFsbCBsaXN0ZW5lcnMgaGF2ZSBiZWVuIG5vdGlmaWVkLgogICAgICogICAgICogYHBhZ2VWaXNpdFN0YXJ0VGltZWAgLSBUaGUgdGltZSB0aGF0IHRoZSBwYWdlIHZpc2l0IHN0YXJ0ZWQuCiAgICAgKgogICAgICogIyBFdmVudHMKICAgICAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBpbiB0aGUgcGFnZU1hbmFnZXIgbW9kdWxlIGZvciBkZXRhaWwgb24gdGhlIGV2ZW50IHR5cGVzLgogICAgICoKICAgICAqIEVhY2ggZXZlbnQgaW1wbGVtZW50cyB0aGUgc3RhbmRhcmQgV2ViRXh0ZW5zaW9ucyBldmVudCBmZWF0dXJlcy4KICAgICAqICAgKiBhZGRMaXN0ZW5lcgogICAgICogICAqIHJlbW92ZUxpc3RlbmVyCiAgICAgKiAgICogaGFzTGlzdGVuZXIKICAgICAqCiAgICAgKiBFdmVudCBsaXN0ZW5lcnMgcmVjZWl2ZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnR5LgogICAgICogICAqIHRpbWVTdGFtcCAtIFRoZSB0aW1lIHRoYXQgdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC4KICAgICAqCiAgICAgKiBMaXN0ZW5lcnMgZm9yIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IHJlY2VpdmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZwogICAgICogYWRkaXRpb25hbCBwcm9wZXJ0eS4KICAgICAqICAgKiBpc0hpc3RvcnlDaGFuZ2UgLSBXaGV0aGVyIHRoZSBwYWdlIHZpc2l0IHdhcyBjYXVzZWQgYnkgYSBjaGFuZ2UgdmlhIHRoZSBIaXN0b3J5IEFQSS4KICAgICAqCiAgICAgKiBFeGFtcGxlIHVzYWdlOgogICAgICogYGBgCiAgICAgKiBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0b3AuYWRkTGlzdGVuZXIoKHt0aW1lU3RhbXB9KSA9PiB7CiAgICAgKiAgICAgY29uc29sZS5sb2coYFBhZ2UgdmlzaXQgc3RvcHBlZCBhdCAke3RpbWVTdGFtcH0gd2l0aCBwYWdlIElEICR7cGFnZU1hbmFnZXIucGFnZUlkfWApOwogICAgICogfSk7CiAgICAgKgogICAgICogcGFnZU1hbmFnZXIub25QYWdlQXR0ZW50aW9uVXBkYXRlLmFkZExpc3RlbmVyKCh7dGltZVN0YW1wfSkgPT4gewogICAgICogICAgIGNvbnNvbGUubG9nKGBQYWdlIGF0dGVudGlvbiB1cGRhdGUgYXQgJHt0aW1lU3RhbXB9IHdpdGggYXR0ZW50aW9uIHN0YXRlICR7cGFnZU1hbmFnZXIucGFnZUhhc0F0dGVudGlvbn0uYCk7CiAgICAgKiB9KTsKICAgICAqIGBgYAogICAgICoKICAgICAqICMgQ29udGVudCBTY3JpcHQgTG9hZCBPcmRlcmluZwogICAgICogIyMgRXhlY3V0aW5nIGEgQ29udGVudCBTY3JpcHQgQWZ0ZXIgdGhlIHBhZ2VNYW5hZ2VyIEFQSSBIYXMgTG9hZGVkCiAgICAgKiBOb3RlIHRoYXQgdGhlIFdlYkV4dGVuc2lvbnMgY29udGVudCBzY3JpcHQgbW9kZWwgZG9lcyBub3QgZ3VhcmFudGVlIGV4ZWN1dGlvbgogICAgICogb3JkZXIgZm9yIGNvbnRlbnQgc2NyaXB0cywgc28gaXQgaXMgcG9zc2libGUgdGhhdCB0aGUgQVBJIHdpbGwgbm90IGhhdmUgbG9hZGVkCiAgICAgKiB3aGVuIGEgY29udGVudCBzY3JpcHQgdGhhdCBkZXBlbmRzIG9uIHRoZSBBUEkgbG9hZHMuIEFzIGEgd29ya2Fyb3VuZCwgdGhpcwogICAgICogY29udGVudCBzY3JpcHQgY2hlY2tzIHRoZSBnbG9iYWwgYHBhZ2VNYW5hZ2VySGFzTG9hZGVkYCBmb3IgYW4gYXJyYXkgb2YKICAgICAqIGZ1bmN0aW9ucyB0byBjYWxsIGFmdGVyIHRoZSBjb250ZW50IHNjcmlwdCBoYXMgZXhlY3V0ZWQsIGJ1dCBiZWZvcmUgdGhlIGNvbnRlbnQKICAgICAqIHNjcmlwdCBoYXMgZmlyZWQgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQuCiAgICAgKgogICAgICogRXhhbXBsZSB1c2FnZToKICAgICAqIGBgYAogICAgICogZnVuY3Rpb24gbWFpbigpIHsKICAgICAqICAgICAvLyBDb250ZW50IHNjcmlwdCBsb2dpYyBnb2VzIGhlcmUKICAgICAqIH0KICAgICAqCiAgICAgKiBpZigicGFnZU1hbmFnZXIiIGluIHdpbmRvdykKICAgICAqICAgICBtYWluKCk7CiAgICAgKiBlbHNlIHsKICAgICAqICAgICBpZighKCJwYWdlTWFuYWdlckhhc0xvYWRlZCIgaW4gd2luZG93KSkKICAgICAqICAgICAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkID0gW107CiAgICAgKiAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkLnB1c2gobWFpbik7CiAgICAgKiB9CiAgICAgKiBgYGAKICAgICAqCiAgICAgKiAjIyBMaXN0ZW5pbmcgZm9yIHRoZSBQYWdlIFZpc2l0IFN0YXJ0IEV2ZW50CiAgICAgKiBCZWNhdXNlIHRoZSBvcmRlciBvZiBjb250ZW50IHNjcmlwdCBleGVjdXRpb24gaXMgbm90IGd1YXJhbnRlZWQsIGEgY29udGVudAogICAgICogc2NyaXB0IHRoYXQgdXNlcyB0aGUgcGFnZU1hbmFnZXIgQVBJIG1pZ2h0IG1pc3MgYSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50LiBGb3IKICAgICAqIGV4YW1wbGUsIHRoZSBwYWdlTWFuYWdlciBjb250ZW50IHNjcmlwdCBtaWdodCBhdHRhY2ggYW5kIGZpcmUgdGhlIHBhZ2UgdmlzaXQKICAgICAqIHN0YXJ0IGV2ZW50LCB0aGVuIGFub3RoZXIgY29udGVudCBzY3JpcHQgYXR0YWNoZXMgYW5kIGJlZ2lucyBsaXN0ZW5pbmcgZm9yCiAgICAgKiB0aGUgZXZlbnQuIFRoZSBwYWdlTWFuYWdlciBBUEkgYWRkcmVzc2VzIHRoaXMgbGltaXRhdGlvbiBieSBwcm92aWRpbmcgYQogICAgICogYHBhZ2VWaXNpdFN0YXJ0ZWRgIGJvb2xlYW4gcmVmbGVjdGluZyB3aGV0aGVyIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IGhhcwogICAgICogYWxyZWFkeSBjb21wbGV0ZWQgZmlyaW5nIChpLmUuLCBhbGwgbGlzdGVuZXJzIGhhdmUgYmVlbiBub3RpZmllZCkuIENvbnRlbnQgc2NyaXB0cwogICAgICogdGhhdCB1c2UgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQgd2lsbCBjb21tb25seSB3YW50IHRvIGNhbGwgdGhlaXIgb3duIHBhZ2UgdmlzaXQKICAgICAqIHN0YXJ0IGxpc3RlbmVyIGlmIGBwYWdlVmlzaXRTdGFydGVkYCBpcyBgdHJ1ZWAuCiAgICAgKgogICAgICogRXhhbXBsZSB1c2FnZToKICAgICAqIGBgYAogICAgICogZnVuY3Rpb24gcGFnZVZpc2l0U3RhcnRMaXN0ZW5lcih7dGltZVN0YW1wfSkgewogICAgICogICAgIC8vIFBhZ2UgdmlzaXQgc3RhcnQgbG9naWMgZ29lcyBoZXJlCiAgICAgKiB9CiAgICAgKiBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0YXJ0LmFkZExpc3RlbmVyKHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIpOwogICAgICogaWYocGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRlZCkKICAgICAqICAgICBwYWdlVmlzaXRTdGFydExpc3RlbmVyKHsgdGltZVN0YW1wOiBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydFRpbWUgfSk7CiAgICAgKiBgYGAKICAgICAqCiAgICAgKiAjIEtub3duIElzc3VlcwogICAgICogICAqIFdoZW4gc2VuZGluZyBhIHBhZ2UgdmlzaXQgc3RvcCBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCwgc29tZXRpbWVzCiAgICAgKiAgICAgRmlyZWZveCBnZW5lcmF0ZXMgYW4gZXJyb3IgKCJQcm9taXNlIHJlc29sdmVkIHdoaWxlIGNvbnRleHQgaXMgaW5hY3RpdmUiKQogICAgICogICAgIGJlY2F1c2UgdGhlIGNvbnRlbnQgc2NyaXB0IGV4ZWN1dGlvbiBlbnZpcm9ubWVudCBpcyB0ZXJtaW5hdGluZyB3aGlsZSB0aGUKICAgICAqICAgICBtZXNzYWdlIHNlbmRpbmcgUHJvbWlzZSByZW1haW5zIG9wZW4uIFRoaXMgZXJyb3IgZG9lcyBub3QgYWZmZWN0IGZ1bmN0aW9uYWxpdHksCiAgICAgKiAgICAgYmVjYXVzZSB3ZSBkbyBub3QgZGVwZW5kIG9uIHJlc29sdmluZyB0aGUgUHJvbWlzZSAoaS5lLiwgYSByZXNwb25zZSB0byB0aGUKICAgICAqICAgICBwYWdlIHZpc2l0IHN0b3AgbWVzc2FnZSkuCiAgICAgKiBAbW9kdWxlIHdlYlNjaWVuY2UucGFnZU1hbmFnZXIuY29udGVudAogICAgICovCiAgICAvLyBUZWxsIGVzbGludCB0aGF0IHBhZ2VNYW5hZ2VyIGlzbid0IGFjdHVhbGx5IHVuZGVmaW5lZAogICAgLyogZ2xvYmFsIHBhZ2VNYW5hZ2VyICovCgogICAgLy8gSUlGRSB3cmFwcGVyIHRvIGFsbG93IGVhcmx5IHJldHVybgogICAgKGZ1bmN0aW9uICgpIHsKCiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2VNYW5hZ2VyIGNvbnRlbnQgc2NyaXB0IGhhcyBhbHJlYWR5IHJ1biBvbiB0aGlzIHBhZ2UKICAgICAgICAvLyBJZiBpdCBoYXMsIGJhaWwgb3V0CiAgICAgICAgaWYoInBhZ2VNYW5hZ2VyIiBpbiB3aW5kb3cpCiAgICAgICAgICAgIHJldHVybjsKCiAgICAgICAgLy8gQ29uc3RydWN0IGEgcGFnZU1hbmFnZXIgb2JqZWN0IG9uIHRoZSBgd2luZG93YCBnbG9iYWwKICAgICAgICAvLyBBbGwgdGhlIHB1YmxpYyBwYWdlTWFuYWdlciBmdW5jdGlvbmFsaXR5IHRoYXQgaXMgYXZhaWxhYmxlIGluIHRoZSBjb250ZW50CiAgICAgICAgLy8gc2NyaXB0IGVudmlyb25tZW50IGlzIGV4cG9zZWQgdGhyb3VnaCB0aGlzIG9iamVjdAogICAgICAgIHdpbmRvdy5wYWdlTWFuYWdlciA9IHsgfTsKCiAgICAgICAgLyoqCiAgICAgICAgKiBHZW5lcmF0ZSBhIHBhZ2UgSUQsIGEgcmFuZG9tIDEyOC1iaXQgdmFsdWUgcmVwcmVzZW50ZWQgYXMgYSBoZXhhZGVjaW1hbCBzdHJpbmcuCiAgICAgICAgKiBAcHJpdmF0ZQogICAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIG5ldyBwYWdlIElELgogICAgICAgICovCiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQYWdlSWQoKSB7CiAgICAgICAgICAgIGNvbnN0IHBhZ2VJZEJ5dGVzID0gd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKTsKICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocGFnZUlkQnl0ZXMsIChieXRlKSA9PiB7CiAgICAgICAgICAgICAgICBpZihieXRlIDwgMTYpCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICIwIiArIGJ5dGUudG9TdHJpbmcoMTYpOwogICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGUudG9TdHJpbmcoMTYpOwogICAgICAgICAgICB9KS5qb2luKCIiKTsKICAgICAgICB9CgogICAgICAgIC8qKgogICAgICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBVUkwgc3RyaW5nIGZyb20gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYCwgd2l0aG91dCBhbnkKICAgICAgICAgKiBoYXNoIGF0IHRoZSBlbmQuIFdlIGNhbm9uaWNhbGl6ZSBVUkxzIHdpdGhvdXQgdGhlIGhhc2ggYmVjYXVzZSBqdW1waW5nCiAgICAgICAgICogYmV0d2VlbiBwYXJ0cyBvZiBhIHBhZ2UgKGFzIGluZGljYXRlZCBieSBhIGhhc2gpIHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBwYWdlCiAgICAgICAgICogbmF2aWdhdGlvbi4KICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfQogICAgICAgICAqLwogICAgICAgIGZ1bmN0aW9uIGxvY2F0aW9uSHJlZldpdGhvdXRIYXNoKCkgewogICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoLTEgKiB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpOwogICAgICAgIH0KCiAgICAgICAgLyoqCiAgICAgICAgICogTG9nIGEgZGVidWdnaW5nIG1lc3NhZ2UgdG8gYGNvbnNvbGUuZGVidWdgIGluIGEgc3RhbmRhcmRpemVkIGZvcm1hdC4KICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIFRoZSBkZWJ1Z2dpbmcgbWVzc2FnZS4KICAgICAgICAgKi8KICAgICAgICBmdW5jdGlvbiBkZWJ1Z0xvZyhtZXNzYWdlKSB7CiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYHdlYlNjaWVuY2UucGFnZU1hbmFnZXIuY29udGVudDogJHttZXNzYWdlfWApOwogICAgICAgIH0KCiAgICAgICAgLy8gRXZlbnQgbWFuYWdlbWVudCB0eXBlcyBhbmQgY2xhc3NlcwogICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSBFdmVudHMgbW9kdWxlLCByZW1vdmluZyBvbmx5IGV4cG9ydCBzdGF0ZW1lbnRzCgogICAgICAgIC8qKgogICAgICAgICAqIEEgY2xhc3MgdGhhdCBwcm92aWRlcyBhbiBldmVudCBBUEkgc2ltaWxhciB0byBXZWJFeHRlbnNpb25zIGBldmVudHMuRXZlbnRgIG9iamVjdHMuCiAgICAgICAgICogQHRlbXBsYXRlIEV2ZW50Q2FsbGJhY2tGdW5jdGlvbgogICAgICAgICAqIEB0ZW1wbGF0ZSBFdmVudE9wdGlvbnMKICAgICAgICAgKi8KICAgICAgICBjbGFzcyBFdmVudCB7CiAgICAgICAgICAgIC8qKgogICAgICAgICAgICAgKiBDcmVhdGVzIGFuIGV2ZW50IGluc3RhbmNlIHNpbWlsYXIgdG8gV2ViRXh0ZW5zaW9ucyBgZXZlbnRzLkV2ZW50YCBvYmplY3RzLgogICAgICAgICAgICAgKiBAcGFyYW0ge0V2ZW50T3B0aW9uc30gW29wdGlvbnNdIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIGV2ZW50LgogICAgICAgICAgICAgKiBAcGFyYW0ge2FkZExpc3RlbmVyQ2FsbGJhY2t9IFtvcHRpb25zLmFkZExpc3RlbmVyQ2FsbGJhY2tdIC0gQSBmdW5jdGlvbiB0aGF0IGlzCiAgICAgICAgICAgICAqIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gaXMgYWRkZWQuCiAgICAgICAgICAgICAqIEBwYXJhbSB7cmVtb3ZlTGlzdGVuZXJDYWxsYmFja30gW29wdGlvbnMucmVtb3ZlTGlzdGVuZXJDYWxsYmFja10gLSBBIGZ1bmN0aW9uCiAgICAgICAgICAgICAqIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBsaXN0ZW5lciBmdW5jdGlvbiBpcyByZW1vdmVkLgogICAgICAgICAgICAgKiBAcGFyYW0ge25vdGlmeUxpc3RlbmVyc0NhbGxiYWNrfSBbb3B0aW9ucy5ub3RpZnlMaXN0ZW5lcnNDYWxsYmFja10gLSBBIGZ1bmN0aW9uCiAgICAgICAgICAgICAqIHRoYXQgaXMgY2FsbGVkIGJlZm9yZSBhIGxpc3RlbmVyIGlzIG5vdGlmaWVkIGFuZCBjYW4gZmlsdGVyIHRoZSBub3RpZmljYXRpb24uCiAgICAgICAgICAgICAqLwogICAgICAgICAgICBjb25zdHJ1Y3Rvcih7CiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lckNhbGxiYWNrID0gbnVsbCwKICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyQ2FsbGJhY2sgPSBudWxsLAogICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzQ2FsbGJhY2sgPSBudWxsCiAgICAgICAgICAgIH0gPSB7CiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lckNhbGxiYWNrOiBudWxsLAogICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJDYWxsYmFjazogbnVsbCwKICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrOiBudWxsCiAgICAgICAgICAgIH0pIHsKICAgICAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXJDYWxsYmFjayA9IGFkZExpc3RlbmVyQ2FsbGJhY2s7CiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyQ2FsbGJhY2sgPSByZW1vdmVMaXN0ZW5lckNhbGxiYWNrOwogICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnNDYWxsYmFjayA9IG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrOwogICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8qKgogICAgICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24gaXMgYWRkZWQuCiAgICAgICAgICAgICAqIEBjYWxsYmFjayBhZGRMaXN0ZW5lckNhbGxiYWNrCiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24uCiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnRPcHRpb25zfSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24uCiAgICAgICAgICAgICAqLwoKICAgICAgICAgICAgLyoqCiAgICAgICAgICAgICAqIEEgZnVuY3Rpb24gdGhhdCBhZGRzIGFuIGV2ZW50IGxpc3RlbmVyLCB3aXRoIG9wdGlvbmFsIHBhcmFtZXRlcnMuIElmIHRoZQogICAgICAgICAgICAgKiBsaXN0ZW5lciBoYXMgcHJldmlvdXNseSBiZWVuIGFkZGVkIGZvciB0aGUgZXZlbnQsIHRoZSBsaXN0ZW5lcidzIG9wdGlvbnMKICAgICAgICAgICAgICogKGlmIGFueSkgd2lsbCBiZSB1cGRhdGVkLgogICAgICAgICAgICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2tGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBldmVudCBmaXJlcy4KICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudE9wdGlvbnN9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB3aGVuIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgY2FsbGVkLgogICAgICAgICAgICAgKiBUaGUgc3VwcG9ydGVkIG9wdGlvbihzKSBkZXBlbmQgb24gdGhlIGV2ZW50IHR5cGUuCiAgICAgICAgICAgICAqLwogICAgICAgICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lciwgb3B0aW9ucykgewogICAgICAgICAgICAgICAgaWYodGhpcy5hZGRMaXN0ZW5lckNhbGxiYWNrICE9PSBudWxsKQogICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXJDYWxsYmFjayhsaXN0ZW5lciwgb3B0aW9ucyk7CiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIsIG9wdGlvbnMpOwogICAgICAgICAgICB9CgogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gaXMgcmVtb3ZlZC4KICAgICAgICAgICAgICogQGNhbGxiYWNrIHJlbW92ZUxpc3RlbmVyQ2FsbGJhY2sKICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrRnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIHJlbW92ZS4KICAgICAgICAgICAgICovCgogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIuCiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuCiAgICAgICAgICAgICAqLwogICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikgewogICAgICAgICAgICAgICAgaWYodGhpcy5yZW1vdmVMaXN0ZW5lckNhbGxiYWNrICE9PSBudWxsKQogICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJDYWxsYmFjayhsaXN0ZW5lcik7CiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpOwogICAgICAgICAgICB9CgogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQSBmdW5jdGlvbiB0aGF0IGNoZWNrcyB3aGV0aGVyIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBiZWVuIGFkZGVkLgogICAgICAgICAgICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2tGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdG8gY2hlY2suCiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGhhcyBiZWVuIGFkZGVkLgogICAgICAgICAgICAgKi8KICAgICAgICAgICAgaGFzTGlzdGVuZXIobGlzdGVuZXIpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIpOwogICAgICAgICAgICB9CgogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gbWF5IGJlIG5vdGlmaWVkLgogICAgICAgICAgICAgKiBAY2FsbGJhY2sgbm90aWZ5TGlzdGVuZXJzQ2FsbGJhY2sKICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrRnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIGNhbGxlZC4KICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbGlzdGVuZXJBcmd1bWVudHMgLSBUaGUgYXJndW1lbnRzIHRoYXQgd291bGQgYmUgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lcgogICAgICAgICAgICAgKiBmdW5jdGlvbi4KICAgICAgICAgICAgICogQHBhcmFtIHtFdmVudE9wdGlvbnN9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyB0aGF0IHRoZSBsaXN0ZW5lciB3YXMgYWRkZWQgd2l0aC4KICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0byBjYWxsIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi4KICAgICAgICAgICAgICovCgogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogTm90aWZ5IHRoZSBsaXN0ZW5lciBmdW5jdGlvbnMgZm9yIHRoZSBldmVudC4KICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gW2xpc3RlbmVyQXJndW1lbnRzPVtdXSAtIFRoZSBhcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBsaXN0ZW5lcgogICAgICAgICAgICAgKiBmdW5jdGlvbnMuCiAgICAgICAgICAgICAqLwogICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMobGlzdGVuZXJBcmd1bWVudHMgPSBbXSkgewogICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgob3B0aW9ucywgbGlzdGVuZXIpID0+IHsKICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgICBpZigodGhpcy5ub3RpZnlMaXN0ZW5lcnNDYWxsYmFjayA9PT0gbnVsbCkgfHwgdGhpcy5ub3RpZnlMaXN0ZW5lcnNDYWxsYmFjayhsaXN0ZW5lciwgbGlzdGVuZXJBcmd1bWVudHMsIG9wdGlvbnMpKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgbGlzdGVuZXJBcmd1bWVudHMpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikgewogICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZyhgRXJyb3IgaW4gY29udGVudCBzY3JpcHQgbGlzdGVuZXIgbm90aWZpY2F0aW9uOiAke2Vycm9yfWApOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvKioKICAgICAgICAgKiBBbiBleHRlbnNpb24gb2YgdGhlIEV2ZW50IGNsYXNzIHRoYXQgb21pdHMgb3B0aW9ucyB3aGVuIGFkZGluZyBhIGxpc3RlbmVyLgogICAgICAgICAqIEB0ZW1wbGF0ZSBFdmVudENhbGxiYWNrRnVuY3Rpb24KICAgICAgICAgKiBAZXh0ZW5kcyB7RXZlbnQ8RXZlbnRDYWxsYmFja0Z1bmN0aW9uLCB1bmRlZmluZWQ+fQogICAgICAgICAqLwogICAgICAgIGNsYXNzIEV2ZW50V2l0aG91dE9wdGlvbnMgZXh0ZW5kcyBFdmVudCB7CiAgICAgICAgICAgIC8qKgogICAgICAgICAgICAgKiBAY2FsbGJhY2sgYWRkTGlzdGVuZXJDYWxsYmFja1dpdGhvdXRPcHRpb25zCiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24uCiAgICAgICAgICAgICAqLwoKICAgICAgICAgICAgLyoqCiAgICAgICAgICAgICAqIENyZWF0ZXMgYW4gZXZlbnQgaW5zdGFuY2Ugc2ltaWxhciB0byBXZWJFeHRlbnNpb25zIGBldmVudHMuRXZlbnRgIG9iamVjdHMuCiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnRPcHRpb25zfSBbb3B0aW9uc10gLSBBIHNldCBvZiBvcHRpb25zIGZvciB0aGUgZXZlbnQuCiAgICAgICAgICAgICAqIEBwYXJhbSB7YWRkTGlzdGVuZXJDYWxsYmFja1dpdGhvdXRPcHRpb25zfSBbb3B0aW9ucy5hZGRMaXN0ZW5lckNhbGxiYWNrXSAtIEEgZnVuY3Rpb24gdGhhdCBpcwogICAgICAgICAgICAgKiBjYWxsZWQgd2hlbiBhIGxpc3RlbmVyIGZ1bmN0aW9uIGlzIGFkZGVkLgogICAgICAgICAgICAgKiBAcGFyYW0ge3JlbW92ZUxpc3RlbmVyQ2FsbGJhY2t9IFtvcHRpb25zLnJlbW92ZUxpc3RlbmVyQ2FsbGJhY2tdIC0gQSBmdW5jdGlvbgogICAgICAgICAgICAgKiB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gaXMgcmVtb3ZlZC4KICAgICAgICAgICAgICogQHBhcmFtIHtub3RpZnlMaXN0ZW5lcnNDYWxsYmFja30gW29wdGlvbnMubm90aWZ5TGlzdGVuZXJzQ2FsbGJhY2tdIC0gQSBmdW5jdGlvbgogICAgICAgICAgICAgKiB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYSBsaXN0ZW5lciBpcyBub3RpZmllZCBhbmQgY2FuIGZpbHRlciB0aGUgbm90aWZpY2F0aW9uLgogICAgICAgICAgICAgKi8KICAgICAgICAgICAgY29uc3RydWN0b3IoewogICAgICAgICAgICAgICAgYWRkTGlzdGVuZXJDYWxsYmFjayA9IG51bGwsCiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lckNhbGxiYWNrID0gbnVsbCwKICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrID0gbnVsbAogICAgICAgICAgICB9ID0gewogICAgICAgICAgICAgICAgYWRkTGlzdGVuZXJDYWxsYmFjazogbnVsbCwKICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyQ2FsbGJhY2s6IG51bGwsCiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnNDYWxsYmFjazogbnVsbAogICAgICAgICAgICB9KSB7CiAgICAgICAgICAgICAgICBzdXBlcih7IGFkZExpc3RlbmVyQ2FsbGJhY2ssIHJlbW92ZUxpc3RlbmVyQ2FsbGJhY2ssIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrIH0pOwogICAgICAgICAgICB9CgogICAgICAgICAgICAvKioKICAgICAgICAgICAgICogQSBmdW5jdGlvbiB0aGF0IGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIuCiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGV2ZW50IGZpcmVzLgogICAgICAgICAgICAgKi8KICAgICAgICAgICAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHsKICAgICAgICAgICAgICAgIHN1cGVyLmFkZExpc3RlbmVyKGxpc3RlbmVyLCB1bmRlZmluZWQpOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvKioKICAgICAgICAgKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGFuIGV2ZW50LCBjb250YWluaW5nIG9ubHkgYSB0aW1lIHN0YW1wLgogICAgICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFRpbWVTdGFtcERldGFpbHMKICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBldmVudCBvY2N1cnJlZC4KICAgICAgICAgKi8KCiAgICAgICAgLyoqCiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgdGltZSBzdGFtcCBwYXJhbWV0ZXIuCiAgICAgICAgICogQGNhbGxiYWNrIGNhbGxiYWNrV2l0aFRpbWVTdGFtcAogICAgICAgICAqIEBwYXJhbSB7VGltZVN0YW1wRGV0YWlsc30gZGV0YWlscyAtIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2ZW50LgogICAgICAgICAqLwoKICAgICAgICAvKioKICAgICAgICAgKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSB2aXNpdCBzdGFydCBldmVudC4KICAgICAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlVmlzaXRTdGFydERldGFpbHMKICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBldmVudCBvY2N1cnJlZC4KICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzSGlzdG9yeUNoYW5nZSAtIFdoZXRoZXIgdGhlIHBhZ2UgdmlzaXQgd2FzIGNhdXNlZCBieSBhIGNoYW5nZSB2aWEgdGhlIEhpc3RvcnkgQVBJLgogICAgICAgICAqLwoKICAgICAgICAvKioKICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudC4KICAgICAgICAgKiBAY2FsbGJhY2sgcGFnZVZpc2l0U3RhcnRDYWxsYmFjawogICAgICAgICAqIEBwYXJhbSB7UGFnZVZpc2l0U3RhcnREZXRhaWxzfSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnQuCiAgICAgICAgICovCgogICAgICAgIC8qKgogICAgICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiBhIHBhZ2UgdmlzaXQgc3RhcnRzLgogICAgICAgICAqIEB0eXBlIHtFdmVudFdpdGhvdXRPcHRpb25zPHBhZ2VWaXNpdFN0YXJ0Q2FsbGJhY2s+fQogICAgICAgICAqLwogICAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZVZpc2l0U3RhcnQgPSBuZXcgRXZlbnRXaXRob3V0T3B0aW9ucygpOwoKICAgICAgICAvKioKICAgICAgICAgKiBBbiBldmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gYSBwYWdlIHZpc2l0IHN0b3BzLgogICAgICAgICAqIEB0eXBlIHtFdmVudFdpdGhvdXRPcHRpb25zPGNhbGxiYWNrV2l0aFRpbWVTdGFtcD59CiAgICAgICAgICovCiAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlVmlzaXRTdG9wID0gbmV3IEV2ZW50V2l0aG91dE9wdGlvbnMoKTsKCiAgICAgICAgLyoqCiAgICAgICAgICogQW4gZXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLgogICAgICAgICAqIEB0eXBlIHtFdmVudFdpdGhvdXRPcHRpb25zPGNhbGxiYWNrV2l0aFRpbWVTdGFtcD59CiAgICAgICAgICovCiAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlQXR0ZW50aW9uVXBkYXRlID0gbmV3IEV2ZW50V2l0aG91dE9wdGlvbnMoKTsKCiAgICAgICAgLyoqCiAgICAgICAgICogQW4gZXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLgogICAgICAgICAqIEB0eXBlIHtFdmVudFdpdGhvdXRPcHRpb25zPGNhbGxiYWNrV2l0aFRpbWVTdGFtcD59CiAgICAgICAgICovCiAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlQXVkaW9VcGRhdGUgPSBuZXcgRXZlbnRXaXRob3V0T3B0aW9ucygpOwoKICAgICAgICAvKioKICAgICAgICAgKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlLCB3aXRoIGEgY2F0Y2ggYmVjYXVzZSBlcnJvcnMgY2FuCiAgICAgICAgICogb2NjdXIgaW4gYGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZWAgd2hlbiB0aGUgcGFnZSBpcyB1bmxvb2FkaW5nLgogICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gc2VuZCwgd2hpY2ggc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoCiAgICAgICAgICogYSB0eXBlIHN0cmluZy4KICAgICAgICAgKi8KICAgICAgICBwYWdlTWFuYWdlci5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKS5jYXRjaCgocmVhc29uKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgZGVidWdMb2coYEVycm9yIHdoZW4gc2VuZGluZyBtZXNzYWdlIGZyb20gY29udGVudCBzY3JpcHQgdG8gYmFja2dyb3VuZCBwYWdlOiAke0pTT04uc3RyaW5naWZ5KG1lc3NhZ2UpfWApOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgY2F0Y2goZXJyb3IpIHsKICAgICAgICAgICAgICAgIGRlYnVnTG9nKGBFcnJvciB3aGVuIHNlbmRpbmcgbWVzc2FnZSBmcm9tIGNvbnRlbnQgc2NyaXB0IHRvIGJhY2tncm91bmQgcGFnZTogJHtKU09OLnN0cmluZ2lmeShtZXNzYWdlKX1gKTsKICAgICAgICAgICAgfQogICAgICAgIH07CgogICAgICAgIC8qKgogICAgICAgICAqIFRoZSBmdW5jdGlvbiBmb3IgZmlyaW5nIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50LCB3aGljaCBydW5zIHdoZW5ldmVyIGEgbmV3IHBhZ2UKICAgICAgICAgKiBsb2Fkcy4gQSBwYWdlIGxvYWQgbWlnaHQgYmUgYmVjYXVzZSBvZiBvcmRpbmFyeSB3ZWIgbmF2aWdhdGlvbiAoaS5lLiwgbG9hZGluZyBhIG5ldwogICAgICAgICAqIEhUTUwgZG9jdW1lbnQgd2l0aCBhIGJhc2UgSFRUUChTKSByZXF1ZXN0KSBvciBiZWNhdXNlIHRoZSBVUkwgY2hhbmdlZCB2aWEgdGhlIEhpc3RvcnkKICAgICAgICAgKiBBUEkuCiAgICAgICAgICogQHByaXZhdGUKICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBldmVudCBmaXJlZC4KICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0hpc3RvcnlDaGFuZ2U9ZmFsc2VdIC0gV2hldGhlciB0aGlzIHBhZ2UgbG9hZCB3YXMgY2F1c2VkIGJ5IHRoZQogICAgICAgICAqIEhpc3RvcnkgQVBJLgogICAgICAgICAqLwogICAgICAgIGZ1bmN0aW9uIHBhZ2VWaXNpdFN0YXJ0KHRpbWVTdGFtcCwgaXNIaXN0b3J5Q2hhbmdlID0gZmFsc2UpIHsKICAgICAgICAgICAgLy8gQXNzaWduIGEgbmV3IHBhZ2UgSUQKICAgICAgICAgICAgcGFnZU1hbmFnZXIucGFnZUlkID0gZ2VuZXJhdGVQYWdlSWQoKTsKICAgICAgICAgICAgLy8gU3RvcmUgYSBjb3B5IG9mIHRoZSBVUkwsIGJlY2F1c2Ugd2UgdXNlIGl0IHRvIGNoZWNrIGZvciBIaXN0b3J5IEFQSSBwYWdlIGxvYWRzCiAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLnVybCA9IGxvY2F0aW9uSHJlZldpdGhvdXRIYXNoKCk7CiAgICAgICAgICAgIC8vIFN0b3JlIGEgY29weSBvZiB0aGUgcmVmZXJyZXIgZm9yIGNvbnZlbmllbmNlCiAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLnJlZmVycmVyID0gZG9jdW1lbnQucmVmZXJyZXIucmVwZWF0KDEpOwogICAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydFRpbWUgPSB0aW1lU3RhbXA7CiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBIaXN0b3J5IEFQSSBwYWdlIGxvYWQsIHBlcnNpc3QgdGhlIHN0YXRlcyBmb3IgYXR0ZW50aW9uIGFuZCBhdWRpbwogICAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uID0gaXNIaXN0b3J5Q2hhbmdlID8gcGFnZU1hbmFnZXIucGFnZUhhc0F0dGVudGlvbiA6IGZhbHNlOwogICAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8gPSBpc0hpc3RvcnlDaGFuZ2UgPyBwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8gOiBmYWxzZTsKICAgICAgICAgICAgLy8gU3RvcmUgd2hldGhlciB0aGUgcGFnZSB2aXNpdCBldmVudCBoYXMgY29tcGxldGVkIGZpcmluZwogICAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydGVkID0gZmFsc2U7CgogICAgICAgICAgICAvLyBTZW5kIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UKICAgICAgICAgICAgcGFnZU1hbmFnZXIuc2VuZE1lc3NhZ2UoewogICAgICAgICAgICAgICAgdHlwZTogIndlYlNjaWVuY2UucGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnQiLAogICAgICAgICAgICAgICAgcGFnZUlkOiBwYWdlTWFuYWdlci5wYWdlSWQsCiAgICAgICAgICAgICAgICB1cmw6IHBhZ2VNYW5hZ2VyLnVybCwKICAgICAgICAgICAgICAgIHJlZmVycmVyOiBwYWdlTWFuYWdlci5yZWZlcnJlciwKICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogcGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRUaW1lLAogICAgICAgICAgICAgICAgcHJpdmF0ZVdpbmRvdzogYnJvd3Nlci5leHRlbnNpb24uaW5JbmNvZ25pdG9Db250ZXh0LAogICAgICAgICAgICAgICAgaXNIaXN0b3J5Q2hhbmdlCiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgLy8gTm90aWZ5IHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IGxpc3RlbmVycyBpbiB0aGUgY29udGVudCBzY3JpcHQgZW52aXJvbm1lbnQKICAgICAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlVmlzaXRTdGFydC5ub3RpZnlMaXN0ZW5lcnMoW3sKICAgICAgICAgICAgICAgIHRpbWVTdGFtcCwKICAgICAgICAgICAgICAgIGlzSGlzdG9yeUNoYW5nZQogICAgICAgICAgICB9XSk7CgogICAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydGVkID0gdHJ1ZTsKCiAgICAgICAgICAgIGRlYnVnTG9nKGBQYWdlIHZpc2l0IHN0YXJ0OiAke0pTT04uc3RyaW5naWZ5KHBhZ2VNYW5hZ2VyKX1gKTsKICAgICAgICB9CgogICAgICAgIC8qKgogICAgICAgICAqIFRoZSBmdW5jdGlvbiBmb3IgZmlyaW5nIHRoZSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQsIHdoaWNoIHJ1bnMgd2hlbmV2ZXIgYSBwYWdlIGNsb3Nlcy4KICAgICAgICAgKiBUaGF0IGNvdWxkIGJlIGJlY2F1c2Ugb2YgYnJvd3NlciBleGl0LCB0YWIgY2xvc2luZywgdGFiIG5hdmlnYXRpb24gdG8gYSBuZXcgcGFnZSwgb3IKICAgICAgICAgKiBhIG5ldyBwYWdlIGxvYWRpbmcgdmlhIHRoZSBIaXN0b3J5IEFQSS4KICAgICAgICAgKiBAcHJpdmF0ZQogICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGV2ZW50IGZpcmVkLgogICAgICAgICAqLwogICAgICAgIGZ1bmN0aW9uIHBhZ2VWaXNpdFN0b3AodGltZVN0YW1wKSB7CiAgICAgICAgICAgIC8vIFNlbmQgdGhlIHBhZ2UgdmlzaXQgc3RvcCBldmVudCB0byB0aGUgYmFja2dyb3VuZCBwYWdlCiAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLnNlbmRNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJ3ZWJTY2llbmNlLnBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0b3AiLAogICAgICAgICAgICAgICAgcGFnZUlkOiBwYWdlTWFuYWdlci5wYWdlSWQsCiAgICAgICAgICAgICAgICB1cmw6IHBhZ2VNYW5hZ2VyLnVybCwKICAgICAgICAgICAgICAgIHJlZmVycmVyOiBwYWdlTWFuYWdlci5yZWZlcnJlciwKICAgICAgICAgICAgICAgIHRpbWVTdGFtcCwKICAgICAgICAgICAgICAgIHBhZ2VWaXNpdFN0YXJ0VGltZTogcGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRUaW1lLAogICAgICAgICAgICAgICAgcHJpdmF0ZVdpbmRvdzogYnJvd3Nlci5leHRlbnNpb24uaW5JbmNvZ25pdG9Db250ZXh0CiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgLy8gTm90aWZ5IHRoZSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQgbGlzdGVuZXJzIGluIHRoZSBjb250ZW50IHNjcmlwdCBlbnZpcm9ubWVudAogICAgICAgICAgICBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0b3Aubm90aWZ5TGlzdGVuZXJzKFt7CiAgICAgICAgICAgICAgICB0aW1lU3RhbXAKICAgICAgICAgICAgfV0pOwoKICAgICAgICAgICAgZGVidWdMb2coYFBhZ2UgdmlzaXQgc3RvcDogJHtKU09OLnN0cmluZ2lmeShwYWdlTWFuYWdlcil9YCk7CiAgICAgICAgfQoKICAgICAgICAvKioKICAgICAgICAgKiBUaGUgZnVuY3Rpb24gZm9yIGZpcmluZyB0aGUgcGFnZSBhdHRlbnRpb24gdXBkYXRlIGV2ZW50LCB3aGljaCBydW5zIHdoZW5ldmVyIHRoZQogICAgICAgICAqIHBhZ2UgYXR0ZW50aW9uIHN0YXRlIG1pZ2h0IGhhdmUgY2hhbmdlZC4gVGhlIGZ1bmN0aW9uIGNvbnRhaW5zIGxvZ2ljIHRvIHZlcmlmeQogICAgICAgICAqIHRoYXQgdGhlIGF0dGVudGlvbiBzdGF0ZSBhY3R1YWxseSBjaGFuZ2VkIGJlZm9yZSBmaXJpbmcgdGhlIGV2ZW50LgogICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGV2ZW50IGZpcmVkLgogICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFnZUhhc0F0dGVudGlvbiAtIFRoZSBsYXRlc3QgYXR0ZW50aW9uIHN0YXRlLCBhY2NvcmRpbmcgdG8gdGhlCiAgICAgICAgICogcGFnZU1hbmFnZXIgbW9kdWxlIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmQgcGFnZS4KICAgICAgICAgKi8KICAgICAgICBmdW5jdGlvbiBwYWdlQXR0ZW50aW9uVXBkYXRlKHRpbWVTdGFtcCwgcGFnZUhhc0F0dGVudGlvbikgewogICAgICAgICAgICBpZihwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uID09PSBwYWdlSGFzQXR0ZW50aW9uKQogICAgICAgICAgICAgICAgcmV0dXJuOwoKICAgICAgICAgICAgcGFnZU1hbmFnZXIucGFnZUhhc0F0dGVudGlvbiA9IHBhZ2VIYXNBdHRlbnRpb247CgogICAgICAgICAgICAvLyBOb3RpZnkgdGhlIHBhZ2UgYXR0ZW50aW9uIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIGNvbnRlbnQgc2NyaXB0IGVudmlyb25tZW50CiAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZUF0dGVudGlvblVwZGF0ZS5ub3RpZnlMaXN0ZW5lcnMoW3sKICAgICAgICAgICAgICAgIHRpbWVTdGFtcAogICAgICAgICAgICB9XSk7CgogICAgICAgICAgICBkZWJ1Z0xvZyhgUGFnZSBhdHRlbnRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KHBhZ2VNYW5hZ2VyKX1gKTsKICAgICAgICB9CgogICAgICAgIC8qKgogICAgICAgICAqIFRoZSBmdW5jdGlvbiBmb3IgZmlyaW5nIHRoZSBwYWdlIGF1ZGlvIHVwZGF0ZSBldmVudCwgd2hpY2ggcnVucyB3aGVuZXZlciB0aGUKICAgICAgICAgKiBwYWdlIGF1ZGlvIHN0YXRlIG1pZ2h0IGhhdmUgY2hhbmdlZC4gVGhlIGZ1bmN0aW9uIGNvbnRhaW5zIGxvZ2ljIHRvIHZlcmlmeQogICAgICAgICAqIHRoYXQgdGhlIGF1ZGlvIHN0YXRlIGFjdHVhbGx5IGNoYW5nZWQgYmVmb3JlIGZpcmluZyB0aGUgZXZlbnQuCiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgZXZlbnQgZmlyZWQuCiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBwYWdlSGFzQXVkaW8gLSBUaGUgbGF0ZXN0IGF1ZGlvIHN0YXRlLCBhY2NvcmRpbmcgdG8gdGhlCiAgICAgICAgICogcGFnZU1hbmFnZXIgbW9kdWxlIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmQgcGFnZS4KICAgICAgICAgKi8KICAgICAgICBmdW5jdGlvbiBwYWdlQXVkaW9VcGRhdGUodGltZVN0YW1wLCBwYWdlSGFzQXVkaW8pIHsKICAgICAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZUhhc0F1ZGlvID09PSBwYWdlSGFzQXVkaW8pCiAgICAgICAgICAgICAgICByZXR1cm47CgogICAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8gPSBwYWdlSGFzQXVkaW87CgogICAgICAgICAgICAvLyBOb3RpZnkgdGhlIHBhZ2UgYXVkaW8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycyBpbiB0aGUgY29udGVudCBzY3JpcHQgZW52aXJvbm1lbnQKICAgICAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlQXVkaW9VcGRhdGUubm90aWZ5TGlzdGVuZXJzKFt7CiAgICAgICAgICAgICAgICB0aW1lU3RhbXAKICAgICAgICAgICAgfV0pOwoKICAgICAgICAgICAgZGVidWdMb2coYFBhZ2UgYXVkaW8gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KHBhZ2VNYW5hZ2VyKX1gKTsKICAgICAgICB9CgogICAgICAgIC8vIEhhbmRsZSBldmVudHMgc2VudCBmcm9tIHRoZSBiYWNrZ3JvdW5kIHBhZ2UKICAgICAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7CiAgICAgICAgICAgIGlmKG1lc3NhZ2UudHlwZSA9PT0gIndlYlNjaWVuY2UucGFnZU1hbmFnZXIucGFnZUF0dGVudGlvblVwZGF0ZSIpIHsKICAgICAgICAgICAgICAgIHBhZ2VBdHRlbnRpb25VcGRhdGUobWVzc2FnZS50aW1lU3RhbXAsIG1lc3NhZ2UucGFnZUhhc0F0dGVudGlvbik7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8vIElmIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgZGV0ZWN0ZWQgYSBVUkwgY2hhbmdlLCB0aGlzIGNvdWxkIGJlIGJlbGF0ZWQKICAgICAgICAgICAgLy8gbm90aWZpY2F0aW9uIGFib3V0IGEgY29udmVudGlvbmFsIG5hdmlnYXRpb24gb3IgaXQgY291bGQgYmUgYSBwYWdlCiAgICAgICAgICAgIC8vIGxvYWQgdmlhIHRoZSBIaXN0b3J5IEFQSQogICAgICAgICAgICAvLyBXZSBjYW4gZGlzdGluZ3Vpc2ggdGhlc2UgdHdvIHNjZW5hcmlvcyBieSBjaGVja2luZyB3aGV0aGVyIHRoZSBVUkwKICAgICAgICAgICAgLy8gdmlzaWJsZSB0byB0aGUgdXNlciAoYHdpbmRvdy5sb2NhdGlvbi5ocmVmYCkgaGFzIGNoYW5nZWQgc2luY2UgdGhlCiAgICAgICAgICAgIC8vIHBhZ2UgdmlzaXQgc3RhcnQKICAgICAgICAgICAgaWYoKG1lc3NhZ2UudHlwZSA9PT0gIndlYlNjaWVuY2UucGFnZU1hbmFnZXIudXJsQ2hhbmdlZCIpICYmCiAgICAgICAgICAgICAgICAobG9jYXRpb25IcmVmV2l0aG91dEhhc2goKSAhPT0gcGFnZU1hbmFnZXIudXJsKSkgewogICAgICAgICAgICAgICAgcGFnZVZpc2l0U3RvcChtZXNzYWdlLnRpbWVTdGFtcCk7CiAgICAgICAgICAgICAgICBwYWdlVmlzaXRTdGFydChtZXNzYWdlLnRpbWVTdGFtcCwgdHJ1ZSk7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGlmKG1lc3NhZ2UudHlwZSA9PT0gIndlYlNjaWVuY2UucGFnZU1hbmFnZXIucGFnZUF1ZGlvVXBkYXRlIikgewogICAgICAgICAgICAgICAgcGFnZUF1ZGlvVXBkYXRlKG1lc3NhZ2UudGltZVN0YW1wLCBtZXNzYWdlLnBhZ2VIYXNBdWRpbyk7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKCiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBvdGhlciBjb250ZW50IHNjcmlwdHMgdGhhdCBhcmUgd2FpdGluZyBmb3IgdGhlIEFQSSB0byBsb2FkLAogICAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrcyBmb3IgdGhvc2UgY29udGVudCBzY3JpcHRzCiAgICAgICAgaWYoInBhZ2VNYW5hZ2VySGFzTG9hZGVkIiBpbiB3aW5kb3cpIHsKICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh3aW5kb3cucGFnZU1hbmFnZXJIYXNMb2FkZWQpKQogICAgICAgICAgICAgICAgZm9yKGNvbnN0IGNhbGxiYWNrIG9mIHdpbmRvdy5wYWdlTWFuYWdlckhhc0xvYWRlZCkKICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09ICJmdW5jdGlvbiIpIHsKICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2goZXJyb3IpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nKGBFcnJvciBpbiBjYWxsYmFjayBmb3IgcGFnZU1hbmFnZXIgbG9hZDogJHtlcnJvcn1gKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5wYWdlTWFuYWdlckhhc0xvYWRlZDsKICAgICAgICB9CgogICAgICAgIC8vIFNlbmQgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQgZm9yIHRoZSBmaXJzdCB0aW1lCiAgICAgICAgcGFnZVZpc2l0U3RhcnQoTWF0aC5mbG9vcih3aW5kb3cucGVyZm9ybWFuY2UudGltZU9yaWdpbikpOwoKICAgICAgICAvLyBTZW5kIHRoZSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQgb24gdGhlIHdpbmRvdyB1bmxvYWQgZXZlbnQKICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigidW5sb2FkIiwgKGV2ZW50KSA9PiB7CiAgICAgICAgICAgIHBhZ2VWaXNpdFN0b3AoRGF0ZS5ub3coKSk7CiAgICAgICAgfSk7CiAgICAgICAgCiAgICB9KSgpOwoKfSgpKTsK";

/**
 * # Overview
 * This module addresses several challenges for studying user engagement with web content.
 *   * __Syncing Measurements and Interventions.__ A study that uses `WebScience` will
 *     often involve multiple measurements or interventions on a webpage. The
 *     `pageManager` module enables studies to sync these measurements and interventions
 *     by assigning a random unique identifier to each webpage.
 *   * __Generating Page Lifecycle Events.__ Measurements and interventions are often
 *     linked to specific events in the webpage lifecyle. The `pageManager` module
 *     standardizes a set of webpage lifecycle events.
 *   * __Tracking User Attention.__ Measurements and interventions often depend on user
 *     attention to web content. The `pageManager` module provides a standardized
 *     attention model that incorporates tab switching, window switching, application
 *     switching, locked screens, and user mouse and keyboard input.
 *   * __Generating Audio Events.__ This module provides events for webpage audio,
 *     enabling measurements and interventions based on media playback.
 *   * __Bridging the Background and Content Script Environments.__ WebExtensions
 *     includes two distinct execution environments: background scripts and content
 *     scripts. These execution environments are, unfortunately, only loosely bound
 *     together by tab IDs. As a result, there can be race conditions---the background
 *     and content environments can have mismatched states, such that messages arrive
 *     at the wrong webpage or are attributed to the wrong webpage. This module
 *     provides provides page lifecycle, user attention, and audio events that are
 *     bound to specific webpages.
 *
 * # Pages
 * This module creates an abstraction over webpages as perceived by users (i.e., when
 * content loads with a new HTTP(S) URL in the browser bar or the page visibly reloads).
 * Note that the History API enables web content to modify the URL without loading a new
 * HTML document via HTTP(S) or creating a new Document object. This module treats
 * a URL change via the History API as equivalent to traditional webpage navigation,
 * because (by design) it appears identical to the user. Accounting for the History
 * API is important, because it is used on some exceptionally popular websites (e.g.,
 * YouTube).
 *
 * # Page IDs
 * Each page ID is 128-bit value, randomly generated with the Web Crypto API and
 * stored as a hexadecimal `String`. While this representation is less efficient than
 * a `Uint8Array` or similar, it is more convenient for development and debugging. The
 * page ID is available in the content script environment.
 *
 * # Page Lifecycle
 * Each webpage has the following lifecycle events, which fire in both the background
 * page and content script environments.
 *   * Page Visit Start - The browser has started to load a webpage in a tab. This
 *     event is fired early in context script execution (i.e., soon after
 *     `document_start`). For a webpage with a new Document, the event is
 *     timestamped with the time the `window` object was created (the time origin
 *     from the High Resolution Time Level 2 API, in ms). For a webpage that does not
 *     have a new Document (i.e., resulting from the History API), the event is
 *     timestamped with the URL change in the WebNavigation API.
 *   * Page Visit Stop - The browser is unloading the webpage. Ordinarily this
 *     event fires and is timestamped with the `window` unload event. When the page
 *     changes via the History API, this event fires and is timestamped with the URL
 *     change in the WebNavigation API.
 *
 * # Attention Tracking
 * Attention to a page is defined as satisfying all of the following conditions.
 *   * The tab is the active tab in its browser window.
 *   * The window containing the tab is the current browser window.
 *   * The current browser window has focus in the operating system.
 *   * The operating system is not displaying a lock screen or screen saver.
 *   * Optional: The user has provided mouse or keyboard input within a specified time
 *     interval.
 *
 * In the content script environment, each page has an attention status, and an event
 * fires when that status changes. Attention update events are timestamped with events
 * from the WebExtensions `tabs`, `windows`, and `idle` APIs.
 *
 * # Audio Events
 * In the content script environment, each page has an audio status, and an event fires
 * when that status changes. Audio update events fire and are timestamped with events
 * from the WebExtensions `tabs` API.
 *
 * # Event Ordering
 * This module guarantees the ordering of page lifecycle, attention, and audio events.
 *   * Page visit start and page visit stop only fire once for each page, in that order.
 *   * Page attention and audio update events will only occur between page visit start
 *     and stop events.
 *
 * # Additional Implementation Notes
 * This module depends on the `idle` API, which has a couple quirks in Firefox:
 *   * There is a five-second interval when polling idle status from the operating
 *     system.
 *   * Depending on the platform, the idle API reports either time since user input to
 *     the browser or time since user input to the operating system.
 *
 * The polling interval coarsens the timing of page attention events related to idle state.
 * As long as the polling interval is relatively short in comparison to the idle threshold,
 * that should not be an issue.
 *
 * The platform-specific meaning of idle state should also not be an issue. There is only a
 * difference between the two meanings of idle state when the user is providing input to
 * another application; if the user is providing input to the browser, or is not providing
 * input at all, the two meanings are identical. In the scenario where the user is providing
 * input to another application, the browser will lose focus in the operating system; this
 * module will detect that with the windows API and fire a page attention event (if needed).
 *
 * Some implementation quirks to be aware of for future development on this module:
 *   * Non-browser windows do not appear in the results of `windows.getAll()`, and calling
 *     `windows.get()` on a non-browser window throws an error. Switching focus to a non-
 *     browser window will, however, fire the `windows.onFocusChanged` event. The module
 *     assumes that if `windows.onFocusChanged` fires with an unknown window, that window
 *     is a non-browser window.
 *   * The module assumes that valid tab IDs and window IDs are always >= 0.
 *
 * # Known Issues
 *   * The background script sends update messages to tabs regardless of whether they
 *     are ordinary tabs or have the pageManager content script running, because the
 *     background script does not track window types or tab content. The errors
 *     generated by this issue are caught in `messaging.sendMessageToTab`, and the
 *     issue should not cause any problems for studies.
 *
 * # Possible Improvements
 *   * Rebuild a page attention update event in the background page environment.
 *   * Rebuild the capability to fire events for pages that are already open when the module
 *     loads.
 *   * Add logic to handle the situation where the content script execution environment crashes,
 *     so the page visit stop message doesn't fire from the associated content script.
 *   * Add an event in the content script for detecting when content has lazily loaded into the
 *     DOM after the various DOM loading events (e.g., on Twitter).
 * @module webScience.pageManager
 */

/**
 * The threshold (in seconds) for determining whether the browser has the user's attention,
 * based on mouse and keyboard input.
 * @private
 * @constant {number}
 * @default
 */
const idleThreshold = 15;

/**
 * Whether to consider user input in determining attention state.
 * @private
 * @constant {boolean}
 * @default
 */
const considerUserInputForAttention = true;

/**
 * Additional information about a page visit start event.
 * @typedef {Object} PageVisitStartDetails
 * @param {number} pageId - The ID for the page, unique across browsing sessions.
 * @param {number} tabId - The ID for the tab containing the page, unique to the browsing session.
 * @param {number} windowId - The ID for the window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @param {string} url - The URL of the page loading in the tab, without any hash.
 * @param {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @param {number} pageVisitStartTime - The time when the underlying event fired.
 * @param {boolean} privateWindow - Whether the page is in a private window.
 * @property {boolean} isHistoryChange - Whether the page visit was caused by a change via the History API.
 */

/**
 * A listener function for page visit start events.
 * @callback pageVisitStartListener
 * @param {PageVisitStartDetails} details - Additional information about the page visit start event.
 */

/**
 * Additional information about a page visit start event listener function.
 * @typedef {Object} PageVisitStartListenerOptions
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 */

/**
 * An event that is fired when a page visit starts.
 * @type {Events.Event<pageVisitStartListener, PageVisitStartListenerOptions>}
 * @const
 */
const onPageVisitStart = new Event({
    // Filter notifications for events in private windows
    notifyListenersCallback: (listener, [ details ], options) => {
        if(!details.privateWindow || (("privateWindows" in options) && options.privateWindows))
            return true;
        return false;
    }
});

/**
 * Notify listeners for the page visit start event.
 * @param {PageVisitStartDetails} details - Additional information about the page visit start event.
 * @private
 */
function pageVisitStart(details) {
    onPageVisitStart.notifyListeners([ details ]);
}

/**
 * Additional information about a page visit stop event.
 * @typedef {Object} PageVisitStopDetails
 * @param {number} pageId - The ID for the page, unique across browsing sessions.
 * @param {string} url - The URL of the page loading in the tab, without any hash.
 * @param {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @param {number} pageVisitStartTime - The time when the page visit started.
 * @param {number} pageVisitStopTime - The time when the underlying event fired.
 * @param {boolean} privateWindow - Whether the page is in a private window.
 */

/**
 * A listener function for page visit stop events.
 * @callback pageVisitStopListener
 * @param {PageVisitStopDetails} details - Additional information about the page visit stop event.
 */

/**
 * Additional information about a page visit start stop listener function.
 * @typedef {Object} PageVisitStopListenerOptions
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 */

/**
 * An event that is fired when a page visit starts.
 * @type {Events.Event<pageVisitStopListener, PageVisitStartListenerOptions>}
 * @const
 */
const onPageVisitStop = new Event({
    // Filter notifications for events in private windows
    notifyListenersCallback: (listener, [ details ], options) => {
        if(!details.privateWindow || (("privateWindows" in options) && options.privateWindows))
            return true;
        return false;
    }
});

/**
 * Notify listeners for the page visit stop event.
 * @param {PageVisitStopDetails} details - Additional information about the page visit stop event.
 * @private
 */
function pageVisitStop(details) {
    onPageVisitStop.notifyListeners([ details ]);
}

/**
 * Notify a page that its attention state may have changed.
 * @private
 * @param {number} tabId - The tab containing the page, unique to the browsing session.
 * @param {boolean} pageHasAttention - Whether the tab containing the page has the user's
 * attention.
 * @param {number} [timeStamp=Date.now()] - The time when the underlying browser event fired.
 */
function sendPageAttentionUpdate(tabId, pageHasAttention, timeStamp = Date.now()) {
    sendMessageToTab(tabId, {
        type: "webScience.pageManager.pageAttentionUpdate",
        pageHasAttention,
        timeStamp
    });
}

/**
 * The currently active tab in the currently focused browsing window. Has the value -1
 * if there is no such tab.
 * @private
 * @type {number}
 * @default
 */
let currentActiveTab = -1;

/**
 * The currently focused browsing window. Has the value -1 if there is no such window.
 * @private
 * @type {number}
 * @default
 */
let currentFocusedWindow = -1;

/**
 * Checks for the following conditions:
 *   * The tab is the currently active tab in the currently focused window.
 *   * The window is the currently focused window.
 *   * The browser is active (i.e., not idle), if the module is configured to
 *     consider user input in determining the attention state.
 * @private
 * @param {number} tabId - The tab to check.
 * @param {number} windowId - The window to check.
 */
function checkForAttention(tabId, windowId) {
    return ((currentActiveTab === tabId) && (currentFocusedWindow === windowId) && (browserIsActive ));
}

/**
 * @typedef {Object} WindowDetails
 * @property {number} activeTab - The ID of the active tab in the window,
 * or -1 if there is no active tab.
 */

/**
 * A Map that tracks the current state of browser windows. We need this cached
 * state to avoid asynchronous queries when the focused window changes. The
 * keys are window IDs and the values are WindowDetails objects.
 * @private
 * @const {Map<number,WindowDetails>}
 * @default
 */
const windowState = new Map();

/**
 * Update the window state cache with new information about a window.
 * @private
 * @param {number} windowId - The window ID.
 * @param {WindowDetails} windowDetails - The new information about the
 * window.
 */
function updateWindowState(windowId, { activeTab }) {
    let windowDetails = windowState.get(windowId);

    if(windowDetails === undefined) {
        windowDetails = { activeTab: -1 };
        windowState.set(windowId, windowDetails);
    }

    if(activeTab !== undefined)
        windowDetails.activeTab = activeTab;
}

/**
 * Whether the browser is active or idle. Ignored if the module is configured to
 * not consider user input when determining the attention state.
 * @private
 * @type {boolean}
 * @default
 */
let browserIsActive = false;

/**
 * Whether the module is in the process of configuring browser event handlers
 * and caching initial state.
 * @private
 * @type {boolean}
 */
let initializing = false;

/**
 * Whether the module has started configuring browser event handlers and caching
 * initial state.
 * @private
 * @type {boolean}
 */
let initialized$2 = false;

/**
 * Configure message passing between the background script and content script, register browser
 * event handlers, cache initial state, and register the content script. Runs only once.
 * @private
 */
async function initialize$1() {
    if(initialized$2 || initializing)
        return;
    initializing = true;

    // Register message listeners and schemas for communicating with the content script

    // The content script sends a webScience.pageManger.pageVisitStart message when
    // there is a page visit start event
    registerListener("webScience.pageManager.pageVisitStart", (pageVisitStartInfo, sender) => {
        // Notify the content script if it has attention
        // We can't send this message earlier (e.g., when the tab URL changes) because we need to know the content
        // script is ready to receive the message
        if(checkForAttention(sender.tab.id, sender.tab.windowId))
            sendPageAttentionUpdate(sender.tab.id, true, Date.now());

        pageVisitStart({
            pageId: pageVisitStartInfo.pageId,
            tabId: sender.tab.id,
            windowId: sender.tab.windowId,
            url: pageVisitStartInfo.url,
            referrer: pageVisitStartInfo.referrer,
            pageVisitStartTime: pageVisitStartInfo.timeStamp,
            privateWindow: pageVisitStartInfo.privateWindow,
            isHistoryChange: pageVisitStartInfo.isHistoryChange
        });
    }, {
        pageId: "string",
        url: "string",
        referrer: "string",
        timeStamp: "number",
        privateWindow: "boolean",
        isHistoryChange: "boolean"
    });

    // The content script sends a webScience.pageManger.pageVisitStop message when
    // there is a page visit stop event
    // We don't currently include tab or window information with the page visit stop event
    // because the sender object doesn't include that information when the tab is closing
    registerListener("webScience.pageManager.pageVisitStop", (pageVisitStopInfo) => {
        pageVisitStop({
            pageId: pageVisitStopInfo.pageId,
            url: pageVisitStopInfo.url,
            referrer: pageVisitStopInfo.referrer,
            pageVisitStartTime: pageVisitStopInfo.timeStamp,
            pageVisitStopTime: pageVisitStopInfo.timeStamp,
            privateWindow: pageVisitStopInfo.privateWindow
        });
    }, {
        pageId: "string",
        url: "string",
        referrer: "string",
        timeStamp: "number",
        pageVisitStartTime: "number",
        privateWindow: "boolean"
    });

    // The background script sends a webScience.pageManager.pageAttentionUpdate message
    // when the attention state of the page may have changed
    registerSchema("webScience.pageManager.pageAttentionUpdate", {
        timeStamp: "number",
        pageHasAttention: "boolean"
    });

    // The background script sends a webScience.pageManager.urlChanged message when
    // the URL changes for a tab, indicating a possible page load with the History API
    registerSchema("webScience.pageManager.urlChanged", {
        timeStamp: "number"
    });

    // The background script sends a webScience.pageManager.pageAudioUpdate message
    // when the audio state of the page may have changed
    registerSchema("webScience.pageManager.pageAudioUpdate", {
        pageHasAudio: "boolean",
        timeStamp: "number"
    });

    // Register background script event handlers

    // If a tab's audible state changed, send webScience.pageManager.pageAudioUpdate
    browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        sendMessageToTab(tabId, {
            type: "webScience.pageManager.pageAudioUpdate",
            pageHasAudio: changeInfo.audible,
            timeStamp
        });
    }, {
        urls: [ "http://*/*", "https://*/*" ],
        properties: [ "audible" ]
    });

    // If a tab's URL changed because of the History API, send webScience.pageManager.urlChanged
    browser.webNavigation.onHistoryStateUpdated.addListener((details) => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        sendMessageToTab(details.tabId, {
            type: "webScience.pageManager.urlChanged",
            timeStamp
        });
    }, {
        url: [ { schemes: [ "http", "https" ] } ]
    });

    browser.tabs.onRemoved.addListener((tabId, removeInfo) => {
        if(!initialized$2)
            return;

        // We don't have to update the window state here, because either there is
        // another tab in the window that will become active (and tabs.onActivated
        // will fire), or there is no other tab in the window so the window closes
        // (and windows.onRemoved will fire)

        // If this is the active tab, forget it
        if(currentActiveTab === tabId)
            currentActiveTab = -1;
    });

    // Handle when the active tab in a window changes
    browser.tabs.onActivated.addListener(activeInfo => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        // If this is a non-browser tab, ignore it
        if((activeInfo.tabId === browser.tabs.TAB_ID_NONE) || (activeInfo.tabId < 0) ||
            (activeInfo.windowId < 0))
            return;

        // Update the window state cache with the new
        // active tab ID
        updateWindowState(activeInfo.windowId, {
            activeTab: activeInfo.tabId
        });

        // If there isn't a focused window, or the tab update is not in the focused window, ignore it
        if((currentFocusedWindow < 0) || (activeInfo.windowId != currentFocusedWindow))
            return;

        // If the browser is active or (optionally) we are not considering user input,
        // notify the current page with attention that it no longer has attention, and notify
        // the new page with attention that is has attention
        if((browserIsActive || !considerUserInputForAttention)) {
            if((currentActiveTab >= 0) && (currentFocusedWindow >= 0))
                sendPageAttentionUpdate(currentActiveTab, false, timeStamp);
            sendPageAttentionUpdate(activeInfo.tabId, true, timeStamp);
        }

        // Remember the new active tab
        currentActiveTab = activeInfo.tabId;
    });

    browser.windows.onRemoved.addListener(windowId => {
        if(!initialized$2)
            return;

        // If we have cached state for this window, drop it
        windowState.delete(windowId);
    });

    browser.windows.onFocusChanged.addListener(windowId => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        // If the browser is active or (optionally) we are not considering user input, and if
        // if there is an active tab in a focused window, notify the current page with attention
        // that it no longer has attention
        if((browserIsActive || !considerUserInputForAttention) && ((currentActiveTab >= 0) && (currentFocusedWindow >= 0)))
            sendPageAttentionUpdate(currentActiveTab, false, timeStamp);

        // If the browser has lost focus in the operating system, remember
        // tab ID = -1 and window ID = -1, and do not notify any page that it has attention
        // Note that this check should happen before the browser.windows.get await below,
        // because quick sequential events can cause the browser.windows.onFocusChanged
        // listener to run again before the await resolves and trigger errors if currentActiveTab
        // and currentFocusedWindow are not set properly
        if (windowId === browser.windows.WINDOW_ID_NONE) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // Get information about the focused window from the cached window state
        const focusedWindowDetails = windowState.get(windowId);

        // If we haven't seen this window before, that means it's not a browser window,
        // so remember tab ID = -1 and window ID -1, and do not notify any page that it has attention
        if(focusedWindowDetails === undefined) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // Otherwise, remember the new active tab and focused window, and if the browser is active
        // or (optionally) we are not considering user input, notify the page in the tab that it
        // has attention
        currentActiveTab = focusedWindowDetails.activeTab;
        currentFocusedWindow = windowId;
        if(browserIsActive || !considerUserInputForAttention)
            sendPageAttentionUpdate(currentActiveTab, true, timeStamp);
    });

    // Handle when the browser activity state changes
    // This listener abstracts the browser activity state into two categories: active and inactive
    // Active means the user has recently provided input to the browser, inactive means any other
    // state (regardless of whether a screensaver or lock screen is enabled)

    // Note that we have to call Idle.registerIdleStateListener before we call
    // Idle.queryState, so this comes before caching the initial state
    {
        await registerIdleStateListener(newState => {
            if(!initialized$2)
                return;
            const timeStamp = Date.now();

            // If the browser is not transitioning between active and inactive states, ignore the event
            if((browserIsActive) === (newState === "active"))
                return;

            // Remember the flipped browser activity state
            browserIsActive = !browserIsActive;

            // If there isn't an active tab in a focused window, we don't need to send attention events
            if((currentActiveTab < 0) || (currentFocusedWindow < 0))
                return;

            // Send an attention state change event to the current active tab, reflecting the browser activity state
            sendPageAttentionUpdate(currentActiveTab, browserIsActive, timeStamp);
        }, idleThreshold);
    }

    // Cache the initial idle, window, and tab state

    browserIsActive = (queryState(idleThreshold) === "active");

    const openWindows = await browser.windows.getAll({
        populate: true
    });
    for(const openWindow of openWindows) {
        // If the window doesn't have a window ID, ignore it
        // This shouldn't happen, but checking anyway since
        // the id property is optional in the windows.Window
        // type
        if(!("id" in openWindow))
            continue;
        // Iterate the tabs in the window to cache tab state
        // and find the active tab in the window
        let activeTabInOpenWindow = -1;
        if("tabs" in openWindow)
            for(const tab of openWindow.tabs) {
                if(tab.active)
                    activeTabInOpenWindow = tab.id;
            }
        updateWindowState(openWindow.id, {
            activeTab: activeTabInOpenWindow
        });

        // If this is the focused window and it is a normal or popup
        // window, remember the window ID and active tab ID (if any)
        // If there is no focused window, or the focused window isn't
        // a normal or popup window, this block will not run and we
        // will retain the default values of tab ID = -1 and window
        // ID = -1
        if(openWindow.focused) {
            currentFocusedWindow = openWindow.id;
            currentActiveTab = activeTabInOpenWindow;
        }
    }

    // Register the pageManager content script for all HTTP(S) URLs
    browser.contentScripts.register({
        matches: [ "http://*/*", "https://*/*" ],
        js: [{
            code: unpack(pageManagerContentScript)
        }],
        runAt: "document_start"
    });

    initializing = false;
    initialized$2 = true;
}

/**
 * An array of match patterns for known URL shorteners.
 * @constant
 * @type {Array<string>}
 */
const urlShortenerMatchPatterns = [
    "*://0rz.tw/*",
    "*://1-url.net/*",
    "*://1.usa.gov/*",
    "*://126.am/*",
    "*://1l2.us/*",
    "*://1link.in/*",
    "*://1tk.us/*",
    "*://1u.ro/*",
    "*://1un.fr/*",
    "*://1url.com/*",
    "*://1url.cz/*",
    "*://1wb2.net/*",
    "*://2.gp/*",
    "*://2.ht/*",
    "*://2.ly/*",
    "*://20ft.net/*",
    "*://2ad.in/*",
    "*://2big.at/*",
    "*://2chap.it/*",
    "*://2doc.net/*",
    "*://2fear.com/*",
    "*://2long.cc/*",
    "*://2pl.us/*",
    "*://2su.de/*",
    "*://2tu.us/*",
    "*://2ty.in/*",
    "*://2u.xf.cz/*",
    "*://2wsb.tv/*",
    "*://2ze.us/*",
    "*://3.ly/*",
    "*://301.to/*",
    "*://301url.com/*",
    "*://307.to/*",
    "*://3ra.be/*",
    "*://3x.si/*",
    "*://4.nbcny.com/*",
    "*://49rs.me/*",
    "*://4i.ae/*",
    "*://4ms.me/*",
    "*://4sq.com/*",
    "*://4url.cc/*",
    "*://4view.me/*",
    "*://5-11.co/*",
    "*://5.wews.com/*",
    "*://53eig.ht/*",
    "*://5em.cz/*",
    "*://5rr.it/*",
    "*://5url.net/*",
    "*://5z8.info/*",
    "*://6fr.ru/*",
    "*://6g6.eu/*",
    "*://6url.com/*",
    "*://7.ly/*",
    "*://76.gd/*",
    "*://77.ai/*",
    "*://7fth.cc/*",
    "*://7gen.us/*",
    "*://7li.in/*",
    "*://7ny.tv/*",
    "*://7vd.cn/*",
    "*://8u.cz/*",
    "*://944.la/*",
    "*://98.to/*",
    "*://9mp.com/*",
    "*://L9.fr/*",
    "*://Lvvk.com/*",
    "*://To8.cc/*",
    "*://a-fr.is/*",
    "*://a.gd/*",
    "*://a.gg/*",
    "*://a.nf/*",
    "*://a.wish.org/*",
    "*://a0.fr/*",
    "*://a2a.me/*",
    "*://a2n.eu/*",
    "*://aa.cx/*",
    "*://aarp.us/*",
    "*://abbr.com/*",
    "*://abbr.sk/*",
    "*://abc.tv/*",
    "*://abc11.tv/*",
    "*://abc13.co/*",
    "*://abcn.ws/*",
    "*://abcurl.net/*",
    "*://abe5.com/*",
    "*://access.im/*",
    "*://accura.cc/*",
    "*://acosm.in/*",
    "*://action.me/*",
    "*://ad-med.cz/*",
    "*://ad.vu/*",
    "*://ad5.eu/*",
    "*://ad7.biz/*",
    "*://adage.com/*",
    "*://adb.ug/*",
    "*://adcraft.co/*",
    "*://adcrun.ch/*",
    "*://add.vc/*",
    "*://adf.ly/*",
    "*://adfa.st/*",
    "*://adflav.com/*",
    "*://adfly.fr/*",
    "*://adjix.com/*",
    "*://adli.pw/*",
    "*://adnews.ms/*",
    "*://adobe.ly/*",
    "*://adv.li/*",
    "*://advmo.us/*",
    "*://adweek.it/*",
    "*://aexp.co/*",
    "*://afx.cc/*",
    "*://agileit.co/*",
    "*://ahwd.tv/*",
    "*://aje.me/*",
    "*://ajn.me/*",
    "*://aka.gr/*",
    "*://al.st/*",
    "*://alil.in/*",
    "*://alj.am/*",
    "*://all.fuseurl.com/*",
    "*://alturl.com/*",
    "*://amcurl.com/*",
    "*://amzn.com/*",
    "*://amzn.to/*",
    "*://andr.tv/*",
    "*://ann.cr/*",
    "*://any.gs/*",
    "*://aofb.us/*",
    "*://aol.it/*",
    "*://apadv.co/*",
    "*://apl.tv/*",
    "*://apne.ws/*",
    "*://appsumo.com/*",
    "*://aqva.pl/*",
    "*://ar.gy/*",
    "*://ara.tv/*",
    "*://arcnct.co/*",
    "*://ares.tl/*",
    "*://argusne.ws/*",
    "*://arm.in/*",
    "*://arsn.al/*",
    "*://arst.ch/*",
    "*://asa.na/*",
    "*://asos.to/*",
    "*://asso.in/*",
    "*://at.cmt.com/*",
    "*://at.mrmule.com/*",
    "*://at.mtv.com/*",
    "*://at.pw.org/*",
    "*://atmlb.com/*",
    "*://att-msg.com/*",
    "*://atu.ca/*",
    "*://au.ms/*",
    "*://aurls.info/*",
    "*://autode.sk/*",
    "*://avc.lu/*",
    "*://avlne.ws/*",
    "*://awe.sm/*",
    "*://ayl.lv/*",
    "*://ayt.fr/*",
    "*://azali.fr/*",
    "*://azc.cc/*",
    "*://azqq.com/*",
    "*://b-gat.es/*",
    "*://b.globe.com/*",
    "*://b.qr.ae/*",
    "*://b.rian.cc/*",
    "*://b00.fr/*",
    "*://b23.ru/*",
    "*://b2l.me/*",
    "*://b54.in/*",
    "*://b65.com/*",
    "*://b65.us/*",
    "*://bacn.me/*",
    "*://baid.us/*",
    "*://basno.com/*",
    "*://bbc.in/*",
    "*://bbry.lv/*",
    "*://bbt.gs/*",
    "*://bbyurl.us/*",
    "*://bc.vc/*",
    "*://bcene.ws/*",
    "*://bcool.bz/*",
    "*://bcove.me/*",
    "*://be.net/*",
    "*://beam.to/*",
    "*://beats.is/*",
    "*://bee4.biz/*",
    "*://beebe.in/*",
    "*://bf10.co/*",
    "*://bfpne.ws/*",
    "*://bgl.me/*",
    "*://bgr.co/*",
    "*://bhpho.to/*",
    "*://bible.us/*",
    "*://bigtbl.com/*",
    "*://bim.im/*",
    "*://binged.it/*",
    "*://bit.do/*",
    "*://bit.ly/*",
    "*://bitly.com/*",
    "*://bitly.is/*",
    "*://bitw.in/*",
    "*://bizj.us/*",
    "*://bkite.com/*",
    "*://blap.net/*",
    "*://blbrd.co/*",
    "*://blbrd.com/*",
    "*://blck.by/*",
    "*://ble.ac/*",
    "*://ble.pl/*",
    "*://blip.tv/*",
    "*://blippr.com/*",
    "*://bln.kr/*",
    "*://bloat.me/*",
    "*://bloom.bg/*",
    "*://blu.cc/*",
    "*://bo.st/*",
    "*://boi.re/*",
    "*://bon.no/*",
    "*://bonapp.it/*",
    "*://bonefi.sh/*",
    "*://bor.com/*",
    "*://bote.me/*",
    "*://bougn.at/*",
    "*://bourn.co/*",
    "*://br4.in/*",
    "*://brad.mn/*",
    "*://bravo.ly/*",
    "*://brby.co/*",
    "*://brd.rs/*",
    "*://brk.to/*",
    "*://brzu.net/*",
    "*://bsa.ly/*",
    "*://bsl.io/*",
    "*://bsun.md/*",
    "*://bt.io/*",
    "*://budurl.com/*",
    "*://buff.ly/*",
    "*://buk.me/*",
    "*://bul.lu/*",
    "*://bull.hn/*",
    "*://burnurl.com/*",
    "*://buswk.co/*",
    "*://buzurl.com/*",
    "*://buzztap.com/*",
    "*://bxl.me/*",
    "*://bzfd.it/*",
    "*://bzh.me/*",
    "*://c-o.in/*",
    "*://c.shamekh.ws/*",
    "*://cachor.ro/*",
    "*://campl.us/*",
    "*://canurl.com/*",
    "*://canva.link/*",
    "*://capi.tl/*",
    "*://captl1.co/*",
    "*://captur.in/*",
    "*://cart.mn/*",
    "*://cbc.sh/*",
    "*://cble.co/*",
    "*://cbs.so/*",
    "*://cbsloc.al/*",
    "*://cbsn.ws/*",
    "*://cbsprt.co/*",
    "*://cbug.cc/*",
    "*://cc.cc/*",
    "*://ccj.im/*",
    "*://cd4.me/*",
    "*://cdpn.io/*",
    "*://cdtr.co/*",
    "*://cektkp.com/*",
    "*://cesar.mn/*",
    "*://cf.ly/*",
    "*://cf2.me/*",
    "*://cf6.co/*",
    "*://cf97.co/*",
    "*://chbr.gr/*",
    "*://chi.mg/*",
    "*://chic.ag/*",
    "*://chil.is/*",
    "*://chilp.it/*",
    "*://chip.tl/*",
    "*://chipr.es/*",
    "*://chn.ge/*",
    "*://cho.ba/*",
    "*://chopd.it/*",
    "*://chpt.me/*",
    "*://chrg.rs/*",
    "*://chrma.co/*",
    "*://chroni.cl/*",
    "*://chs.mx/*",
    "*://chzb.gr/*",
    "*://cin.ci/*",
    "*://cinemagr.am/*",
    "*://cjb.net/*",
    "*://cjky.it/*",
    "*://cl.lk/*",
    "*://cl.ly/*",
    "*://clck.ru/*",
    "*://cld.me/*",
    "*://cle.clinic/*",
    "*://clema.cc/*",
    "*://cli.gs/*",
    "*://cliccami.info/*",
    "*://clickthru.ca/*",
    "*://clikk.in/*",
    "*://clipurl.us/*",
    "*://clk.my/*",
    "*://cln.me/*",
    "*://cloaky.de/*",
    "*://clop.in/*",
    "*://cloudup.com/*",
    "*://clp.ly/*",
    "*://clrlv.rs/*",
    "*://cmpbell.com/*",
    "*://cmsa.me/*",
    "*://cmsc.re/*",
    "*://cn86.org/*",
    "*://cnb.cx/*",
    "*://cnet.co/*",
    "*://cnn.it/*",
    "*://cnnmon.ie/*",
    "*://cntx.me/*",
    "*://cog.gd/*",
    "*://coge.la/*",
    "*://cokeurl.com/*",
    "*://con.st/*",
    "*://conta.cc/*",
    "*://contnt.ly/*",
    "*://cook.ba/*",
    "*://copy.bz/*",
    "*://cort.as/*",
    "*://cosm.ag/*",
    "*://cot.ag/*",
    "*://couic.fr/*",
    "*://cpo.st/*",
    "*://cptl1.co/*",
    "*://cpwr.it/*",
    "*://cr.tl/*",
    "*://crks.me/*",
    "*://crowdspring.co/*",
    "*://crtv.mk/*",
    "*://crum.pl/*",
    "*://cs.pn/*",
    "*://ctt.ec/*",
    "*://ctvr.us/*",
    "*://ctx.ly/*",
    "*://cuda.co/*",
    "*://cudder.it/*",
    "*://cultm.ac/*",
    "*://cultr.me/*",
    "*://cur.lv/*",
    "*://curio.us/*",
    "*://curl.im/*",
    "*://cus.tm/*",
    "*://cut.by/*",
    "*://cut.pe/*",
    "*://cut.sk/*",
    "*://cuthut.com/*",
    "*://cutt.eu/*",
    "*://cutt.us/*",
    "*://cutu.me/*",
    "*://cuturl.com/*",
    "*://cuturls.com/*",
    "*://cybr.fr/*",
    "*://cyonix.to/*",
    "*://d.me/*",
    "*://d.pr/*",
    "*://d75.eu/*",
    "*://daa.pl/*",
    "*://dai.ly/*",
    "*://dailym.ai/*",
    "*://dakd.me/*",
    "*://dalaila.ma/*",
    "*://dallasne.ws/*",
    "*://datl.in/*",
    "*://db.tt/*",
    "*://dbl.chz.gr/*",
    "*://dbron.co/*",
    "*://dcdr.me/*",
    "*://dd.ma/*",
    "*://ddp.net/*",
    "*://ddut.ch/*",
    "*://deadsp.in/*",
    "*://dealspl.us/*",
    "*://decenturl.com/*",
    "*://deck.ly/*",
    "*://del.ly/*",
    "*://dell.to/*",
    "*://demgoverno.rs/*",
    "*://dems.me/*",
    "*://depot.ly/*",
    "*://derf.me/*",
    "*://desert.sn/*",
    "*://detne.ws/*",
    "*://df4.us/*",
    "*://df9.net/*",
    "*://dfl8.me/*",
    "*://dft.ba/*",
    "*://dger.at/*",
    "*://dhurl.org/*",
    "*://di.gg/*",
    "*://di.sn/*",
    "*://diddy.it/*",
    "*://digbig.com/*",
    "*://digg.com/*",
    "*://digipills.com/*",
    "*://digs.by/*",
    "*://dis.tl/*",
    "*://discvr.co/*",
    "*://disq.us/*",
    "*://dld.bz/*",
    "*://dlrshv.es/*",
    "*://dlvr.it/*",
    "*://dmreg.co/*",
    "*://dn.vc/*",
    "*://dnain.fo/*",
    "*://do.co/*",
    "*://do.my/*",
    "*://doi.org/*",
    "*://doiop.com/*",
    "*://dolp.cc/*",
    "*://dopen.us/*",
    "*://dopice.sk/*",
    "*://dpo.st/*",
    "*://dr.tl/*",
    "*://dragd.is/*",
    "*://drbl.in/*",
    "*://droid.ws/*",
    "*://drop.io/*",
    "*://droz.me/*",
    "*://drp.ly/*",
    "*://drpln.gs/*",
    "*://drudge.tw/*",
    "*://ds.pn/*",
    "*://dsc.tv/*",
    "*://dspy.me/*",
    "*://dtdg.co/*",
    "*://dthin.gs/*",
    "*://durl.me/*",
    "*://durl.us/*",
    "*://dv.gd/*",
    "*://dvlr.it/*",
    "*://dwarfurl.com/*",
    "*://dyo.gs/*",
    "*://e37.eu/*",
    "*://eam.me/*",
    "*://easyuri.com/*",
    "*://easyurl.net/*",
    "*://eca.sh/*",
    "*://eclurl.com/*",
    "*://econ.st/*",
    "*://ecoti.ms/*",
    "*://ecra.se/*",
    "*://ecrea.tv/*",
    "*://edut.to/*",
    "*://eepurl.com/*",
    "*://eezurl.com/*",
    "*://eff.org/*",
    "*://elegantthem.es/*",
    "*://elitedai.ly/*",
    "*://elq.to/*",
    "*://ely.re/*",
    "*://emc.im/*",
    "*://encosia.me/*",
    "*://engt.co/*",
    "*://entm.ag/*",
    "*://enva.to/*",
    "*://eoc.cc/*",
    "*://eonli.ne/*",
    "*://eqbot.com/*",
    "*://erax.cz/*",
    "*://erw.cz/*",
    "*://es.pn/*",
    "*://essn.tl/*",
    "*://et.tv/*",
    "*://etsy.me/*",
    "*://eweri.com/*",
    "*://ewerl.com/*",
    "*://ex9.co/*",
    "*://exm.nr/*",
    "*://extr.tv/*",
    "*://ezurl.cc/*",
    "*://ezurl.eu/*",
    "*://f-st.co/*",
    "*://fa.by/*",
    "*://facebook.appstore.com/*",
    "*://faceto.us/*",
    "*://fandan.co/*",
    "*://fandw.me/*",
    "*://fatc.co/*",
    "*://fav.me/*",
    "*://fb.me/*",
    "*://fb.nbcsports.com/*",
    "*://fbshare.me/*",
    "*://fbuy.me/*",
    "*://fcnews.tv/*",
    "*://feedzil.la/*",
    "*://ff.im/*",
    "*://ffce.bz/*",
    "*://fff.re/*",
    "*://fff.to/*",
    "*://fff.wf/*",
    "*://fhurl.com/*",
    "*://fileshar.es/*",
    "*://filoops.info/*",
    "*://filz.fr/*",
    "*://find.beer/*",
    "*://fire.to/*",
    "*://firsturl.de/*",
    "*://firsturl.net/*",
    "*://fitm.ag/*",
    "*://flic.kr/*",
    "*://flingk.com/*",
    "*://flip.it/*",
    "*://flne.ws/*",
    "*://flq.us/*",
    "*://fltr.tv/*",
    "*://flwr.pt/*",
    "*://fly2.ws/*",
    "*://fm2.me/*",
    "*://fnk.es/*",
    "*://foak.co/*",
    "*://foe.hn/*",
    "*://followedu.com/*",
    "*://folu.me/*",
    "*://fon.gs/*",
    "*://font.me/*",
    "*://for.tn/*",
    "*://forr.st/*",
    "*://fox.tv/*",
    "*://foxs.pt/*",
    "*://foxyurl.com/*",
    "*://frc.vc/*",
    "*://freak.to/*",
    "*://freepr.es/*",
    "*://freze.it/*",
    "*://fro.gy/*",
    "*://ftcy.co/*",
    "*://fun.ly/*",
    "*://funni.ly/*",
    "*://fur.ly/*",
    "*://fus.in/*",
    "*://fuseurl.com/*",
    "*://fuzzy.to/*",
    "*://fwd4.me/*",
    "*://fwdurl.net/*",
    "*://fwib.net/*",
    "*://fxn.ws/*",
    "*://fxs.pt/*",
    "*://fzy.co/*",
    "*://g.co and/*",
    "*://g.ro.lt/*",
    "*://g00.me/*",
    "*://g8l.us/*",
    "*://ga.co/*",
    "*://gap.us/*",
    "*://gates.ly/*",
    "*://gathr.us/*",
    "*://gaw.kr/*",
    "*://gbpg.net/*",
    "*://georiot.co/*",
    "*://get-shorty.com/*",
    "*://get-url.com/*",
    "*://get.sh/*",
    "*://getf.ly/*",
    "*://getm.pt/*",
    "*://geturl.us/*",
    "*://gg.gg/*",
    "*://gi.vc/*",
    "*://gizmo.do/*",
    "*://gkurl.us/*",
    "*://gl.am/*",
    "*://glbn.ca/*",
    "*://glmr.me/*",
    "*://glpo.st/*",
    "*://glsen.us/*",
    "*://go.9nl.com/*",
    "*://go.brit.co/*",
    "*://go.fox59.com/*",
    "*://go.ign.com/*",
    "*://go.me/*",
    "*://go.nasa.gov/*",
    "*://go.ostp.gov/*",
    "*://go.shr.lc/*",
    "*://go.to/*",
    "*://go.unl.edu/*",
    "*://go.usa.gov/*",
    "*://go2.me/*",
    "*://gog.li/*",
    "*://gohe.at/*",
    "*://gohsn.co/*",
    "*://gokev.in/*",
    "*://golinks.co/*",
    "*://golmao.com/*",
    "*://goo.gl/*",
    "*://goo.lu/*",
    "*://good.ly/*",
    "*://goshrink.com/*",
    "*://gossi.pr/*",
    "*://gossipcop.com/*",
    "*://gotom.tg/*",
    "*://gowal.la/*",
    "*://gplus.to/*",
    "*://gqm.ag/*",
    "*://gr.pn/*",
    "*://grab.by/*",
    "*://grdns.co/*",
    "*://grem.io/*",
    "*://gri.ms/*",
    "*://grindr.me/*",
    "*://grnol.co/*",
    "*://grnpc.org/*",
    "*://grz.cm/*",
    "*://gtg.lu/*",
    "*://gtr.bz/*",
    "*://gu.com/*",
    "*://guiama.is/*",
    "*://gurl.es/*",
    "*://hadej.co/*",
    "*://hailo.to/*",
    "*://hao.jp/*",
    "*://hatne.ws/*",
    "*://hbspk.co/*",
    "*://hclte.ch/*",
    "*://hefr.in/*",
    "*://hellotxt.com/*",
    "*://hex.io/*",
    "*://hg.tv/*",
    "*://hide.my/*",
    "*://hiderefer.com/*",
    "*://hip.mu/*",
    "*://hit.my/*",
    "*://hjkl.fr/*",
    "*://hmm.ph/*",
    "*://hndiary.com/*",
    "*://hop.im/*",
    "*://hopclicks.com/*",
    "*://hops.me/*",
    "*://hops.to/*",
    "*://hotredirect.com/*",
    "*://hotshorturl.com/*",
    "*://hou.li/*",
    "*://hp.nu/*",
    "*://hpstm.tc/*",
    "*://hrc.io/*",
    "*://hrd.cm/*",
    "*://href.in/*",
    "*://href.li/*",
    "*://hrld.us/*",
    "*://hrv.st/*",
    "*://hrvd.me/*",
    "*://hsblinks.com/*",
    "*://ht.ly/*",
    "*://htrne.ws/*",
    "*://htxt.it/*",
    "*://htz.li/*",
    "*://hub.am/*",
    "*://hubs.ly/*",
    "*://huff.lv/*",
    "*://huff.to/*",
    "*://hugeurl.com/*",
    "*://hulu.com/*",
    "*://hulu.tv/*",
    "*://hurl.it/*",
    "*://hurl.me/*",
    "*://hurl.no/*",
    "*://hurl.ws/*",
    "*://hyperurl.co/*",
    "*://hyv.ee/*",
    "*://i-2.co/*",
    "*://i0rz.tw/*",
    "*://i99.cz/*",
    "*://icanhaz.com/*",
    "*://icio.us/*",
    "*://icit.fr/*",
    "*://ick.li/*",
    "*://icks.ro/*",
    "*://icont.ac/*",
    "*://icp-c.com/*",
    "*://id.tl/*",
    "*://idek.net/*",
    "*://ihg.co/*",
    "*://iiiii.in/*",
    "*://ikr.me/*",
    "*://iky.fr/*",
    "*://ilix.in/*",
    "*://illin.is/*",
    "*://img.ly/*",
    "*://in.flux.com/*",
    "*://ind.pn/*",
    "*://indy.st/*",
    "*://info.ms/*",
    "*://inst.cr/*",
    "*://intel.ly/*",
    "*://into.tv/*",
    "*://intuit.me/*",
    "*://inv.lv/*",
    "*://invent.ge/*",
    "*://iplogger.com/*",
    "*://iplogger.org/*",
    "*://ir.pe/*",
    "*://irt.me/*",
    "*://is.gd/*",
    "*://iscool.net/*",
    "*://isra.li/*",
    "*://it2.in/*",
    "*://ithacajr.nl/*",
    "*://ithem.es/*",
    "*://itm.im/*",
    "*://ito.mx/*",
    "*://its.my/*",
    "*://itseo.org/*",
    "*://itsh.bo/*",
    "*://itsjust.in/*",
    "*://itsy.it/*",
    "*://itv.co/*",
    "*://ity.im/*",
    "*://ivill.ag/*",
    "*://ix.lt/*",
    "*://ix.sk/*",
    "*://j.gs/*",
    "*://j.mp/*",
    "*://j.st/*",
    "*://j2j.de/*",
    "*://jcp.is/*",
    "*://jcrew.co/*",
    "*://jdem.cz/*",
    "*://jieb.be/*",
    "*://jijr.com/*",
    "*://jmorr.is/*",
    "*://jmsbrd.co/*",
    "*://journ.us/*",
    "*://jp22.net/*",
    "*://jpm.com/*",
    "*://jqw.de/*",
    "*://jr.ly/*",
    "*://jrnl.ie/*",
    "*://js.is/*",
    "*://jshen.me/*",
    "*://just.as/*",
    "*://k.vu/*",
    "*://k2ne.ws/*",
    "*://k6.kz/*",
    "*://kabbage.io/*",
    "*://kare11.tv/*",
    "*://kask.us/*",
    "*://kcitp.me/*",
    "*://kck.st/*",
    "*://ke-we.net/*",
    "*://kel.by/*",
    "*://ketkp.in/*",
    "*://kfd.pl/*",
    "*://kiro.tv/*",
    "*://kisa.ch/*",
    "*://kiss.ly/*",
    "*://kissa.be/*",
    "*://kl.am/*",
    "*://klck.me/*",
    "*://klou.tt/*",
    "*://kng.ht/*",
    "*://kng5.tv/*",
    "*://knot.ly/*",
    "*://konrath.co/*",
    "*://kore.us/*",
    "*://korta.nu/*",
    "*://kots.nu/*",
    "*://kp.cc/*",
    "*://kr3w.de/*",
    "*://krat.si/*",
    "*://kratsi.cz/*",
    "*://krod.cz/*",
    "*://krunchd.com/*",
    "*://krz.ch/*",
    "*://kstp.mn/*",
    "*://ktie.tv/*",
    "*://ktimes.co/*",
    "*://ktlane.ws/*",
    "*://ktzr.us/*",
    "*://kuc.cz/*",
    "*://kunzi.me/*",
    "*://kxb.me/*",
    "*://kxk.me/*",
    "*://l-k.be/*",
    "*://l-r.tv/*",
    "*://l.hh.de/*",
    "*://l.pr/*",
    "*://l9k.net/*",
    "*://laco.st/*",
    "*://lands.to/*",
    "*://lat.ms/*",
    "*://lc-s.co/*",
    "*://lc.cx/*",
    "*://lcut.in/*",
    "*://leafne.ws/*",
    "*://letop10./*",
    "*://libero.it/*",
    "*://lick.my/*",
    "*://lien.li/*",
    "*://lien.pl/*",
    "*://lifehac.kr/*",
    "*://liip.to/*",
    "*://liltext.com/*",
    "*://lin.cr/*",
    "*://lin.io/*",
    "*://link.wnep.com/*",
    "*://link.zip.net/*",
    "*://linkbee.com/*",
    "*://linkbun.ch/*",
    "*://linkee.com/*",
    "*://linkgap.com/*",
    "*://linkn.co/*",
    "*://linkslice.com/*",
    "*://linkto.im/*",
    "*://linxfix.de/*",
    "*://listn.to/*",
    "*://liteurl.net/*",
    "*://liurl.cn/*",
    "*://livemixtap.es/*",
    "*://livesi.de/*",
    "*://livestre.am/*",
    "*://livingsoci.al/*",
    "*://lix.in/*",
    "*://lk.ht/*",
    "*://llu.ch/*",
    "*://ln-s.net/*",
    "*://ln-s.ru/*",
    "*://lnch.co/*",
    "*://lnk.by/*",
    "*://lnk.co/*",
    "*://lnk.direct/*",
    "*://lnk.gd/*",
    "*://lnk.in/*",
    "*://lnk.ly/*",
    "*://lnk.ms/*",
    "*://lnk.sk/*",
    "*://lnkd.in/*",
    "*://lnks.fr/*",
    "*://lnkurl.com/*",
    "*://lnky.fr/*",
    "*://lnp.sn/*",
    "*://logo.tv/*",
    "*://lohud.us/*",
    "*://longrep.ly/*",
    "*://loopt.us/*",
    "*://lost.in/*",
    "*://low.es/*",
    "*://lp25.fr/*",
    "*://lplza.co/*",
    "*://lru.jp/*",
    "*://ls.ly/*",
    "*://lt.tl/*",
    "*://lts.cr/*",
    "*://lu.to/*",
    "*://lurl.no/*",
    "*://lx.im/*",
    "*://m.tri.be/*",
    "*://m1.io/*",
    "*://m1p.fr/*",
    "*://m3mi.com/*",
    "*://macrumo.rs/*",
    "*://macte.ch/*",
    "*://mad.ly/*",
    "*://make.my/*",
    "*://mapq.st/*",
    "*://marie.cl/*",
    "*://mash.to/*",
    "*://mavrev.com/*",
    "*://mbist.ro/*",
    "*://mcaf.ee/*",
    "*://mcd.to/*",
    "*://mcstr.net/*",
    "*://mctr.st/*",
    "*://mdl29.net/*",
    "*://mdtm.pl/*",
    "*://mediate.com/*",
    "*://mee.bo/*",
    "*://meetu.ps/*",
    "*://mefi.us/*",
    "*://memurl.com/*",
    "*://merky.de/*",
    "*://metamark.net/*",
    "*://mi.tt/*",
    "*://mic.fr/*",
    "*://michael.ph/*",
    "*://might.ly/*",
    "*://migre.me/*",
    "*://min.dj/*",
    "*://min.us/*",
    "*://min2.me/*",
    "*://minilien.com/*",
    "*://minilink.org/*",
    "*://miniurl.com/*",
    "*://minu.me/*",
    "*://minurl.fr/*",
    "*://mitne.ws/*",
    "*://mke.me/*",
    "*://mklnd.com/*",
    "*://mkt.com/*",
    "*://mktplc.org/*",
    "*://mlan.co/*",
    "*://mlks.co/*",
    "*://mln.im/*",
    "*://mlsp.co/*",
    "*://mmf.cc/*",
    "*://mmflint.me/*",
    "*://moby.to/*",
    "*://mojo.ly/*",
    "*://money.us/*",
    "*://monster.me/*",
    "*://moourl.com/*",
    "*://moph.ie/*",
    "*://more.sh/*",
    "*://movi.es/*",
    "*://movie.ps/*",
    "*://mph.to/*",
    "*://mrkt.rs/*",
    "*://mrmn.org/*",
    "*://mrte.ch/*",
    "*://msft.it/*",
    "*://msg.sg/*",
    "*://mstr.cd/*",
    "*://mths.be/*",
    "*://mtln.us/*",
    "*://muo.fm/*",
    "*://murl.kz/*",
    "*://mut.lu/*",
    "*://mv2.me/*",
    "*://mvp.to/*",
    "*://mwne.ws/*",
    "*://my.yoplait.com/*",
    "*://mydesert.co/*",
    "*://myfonts.us/*",
    "*://myloc.me/*",
    "*://mypict.me/*",
    "*://mysp.ac/*",
    "*://mysp.in/*",
    "*://myurl.in/*",
    "*://myurl.si/*",
    "*://mz.cm,/*",
    "*://mzl.la/*",
    "*://n.pr/*",
    "*://name.social/*",
    "*://nanoref.com/*",
    "*://nanourl.se/*",
    "*://natl.re/*",
    "*://nature.ly/*",
    "*://nbc.co/*",
    "*://nbc.to/*",
    "*://nbcchi.com/*",
    "*://nbcnews.to/*",
    "*://nbcny.com/*",
    "*://nbco.ly/*",
    "*://nblo.gs/*",
    "*://nbx.ch/*",
    "*://nca.st/*",
    "*://ncane.com/*",
    "*://ndurl.com/*",
    "*://ne1.net/*",
    "*://neo.ly/*",
    "*://net.ms/*",
    "*://net46.net/*",
    "*://netnet.me/*",
    "*://netshortcut.com/*",
    "*://news.google.com/articles/*",
    "*://newsday.com/*",
    "*://newser.me/*",
    "*://newspr.es/*",
    "*://newsy.com/*",
    "*://nfz.me/*",
    "*://ni.to/*",
    "*://nicou.ch/*",
    "*://nie.mn/*",
    "*://niel.sn/*",
    "*://nig.gr/*",
    "*://ning.it/*",
    "*://nixle.us/*",
    "*://njour.nl/*",
    "*://nm.ly/*",
    "*://nmem.ag/*",
    "*://nn.nf/*",
    "*://nod2.me/*",
    "*://noip.co/*",
    "*://nokia.ly/*",
    "*://not.my/*",
    "*://notlong.com/*",
    "*://nov.io/*",
    "*://nowth.is/*",
    "*://nq.st/*",
    "*://nrdry.net/*",
    "*://nsfw.in/*",
    "*://nssn.co/*",
    "*://ntbx.co/*",
    "*://nutshellurl.com/*",
    "*://nxg.is/*",
    "*://nxy.in/*",
    "*://nydn.us/*",
    "*://nym.ag/*",
    "*://nyob.co/*",
    "*://nyp.st/*",
    "*://nyti.ms/*",
    "*://nyv.me/*",
    "*://nzh.tw/*",
    "*://o-x.fr/*",
    "*://o.ea.com/*",
    "*://o.ly/*",
    "*://oads.co/*",
    "*://oboeyasui.com/*",
    "*://oc1.us/*",
    "*://occip.it and 360.io/*",
    "*://ofa.bo/*",
    "*://offur.com/*",
    "*://ofl.me/*",
    "*://ohdev.in/*",
    "*://oink.com/*",
    "*://okok.fr/*",
    "*://om.ly/*",
    "*://omf.gd/*",
    "*://omgf.ac/*",
    "*://omoikane.net/*",
    "*://on-ajc.com/*",
    "*://on-msn.com/*",
    "*://on.11alive.com/*",
    "*://on.app.com/*",
    "*://on.azcentral.com/*",
    "*://on.bofa.com/*",
    "*://on.cc.com/*",
    "*://on.cnn.com/*",
    "*://on.ea.com/*",
    "*://on.fb.me/*",
    "*://on.fearnet.com/*",
    "*://on.flatoday.com/*",
    "*://on.ft.com/*",
    "*://on.hln.tv/*",
    "*://on.jconline.com/*",
    "*://on.ksdk.com/*",
    "*://on.kthv.com/*",
    "*://on.life.com/*",
    "*://on.mash.to/*",
    "*://on.mgmadv.com/*",
    "*://on.mktw.net/*",
    "*://on.msnbc.com/*",
    "*://on.natgeo.com/*",
    "*://on.news10.net/*",
    "*://on.nfib.com/*",
    "*://on.pier1.com/*",
    "*://on.pnj.com/*",
    "*://on.si.com/*",
    "*://on.sugarsca.pe/*",
    "*://on.tdo.com/*",
    "*://on.thec-l.com/*",
    "*://on.thegrio.com/*",
    "*://on.thekitc.hn/*",
    "*://on.today.com/*",
    "*://on.ventrachicago.com/*",
    "*://on.vh1.com/*",
    "*://on.wbir.com/*",
    "*://on.wcsh6.com/*",
    "*://on.wfmy.com/*",
    "*://on.wgrz.com/*",
    "*://on.wkyc.com/*",
    "*://on.wlbz2.com/*",
    "*://on.wltx.com/*",
    "*://on.wmaz.com/*",
    "*://on.wnep.com/*",
    "*://on.wsj.com/*",
    "*://on.wtsp.com/*",
    "*://on.wusa9.com/*",
    "*://on.wzzm.com/*",
    "*://on9news.tv/*",
    "*://onecent.us/*",
    "*://onforb.es/*",
    "*://onion.com/*",
    "*://onmsnbc.co/*",
    "*://onsaas.info/*",
    "*://onvb.co/*",
    "*://ooqx.com/*",
    "*://opb.is/*",
    "*://optimize.ly/*",
    "*://orcl.so/*",
    "*://oreil.ly/*",
    "*://orgcns.org/*",
    "*://orz.se/*",
    "*://oshko.sh/*",
    "*://osky.co/*",
    "*://otak.hu/*",
    "*://ou.af/*",
    "*://ou.gd/*",
    "*://oua.be/*",
    "*://ow.ly/*",
    "*://owl.li/*",
    "*://oxyz.info/*",
    "*://p.ly/*",
    "*://p.ost.im/*",
    "*://p.pw/*",
    "*://p4k.in/*",
    "*://p6l.org/*",
    "*://p8g.tw/*",
    "*://pack.rs/*",
    "*://pape.rs/*",
    "*://parky.tv/*",
    "*://parton.ly/*",
    "*://parv.us/*",
    "*://past.is/*",
    "*://patch.com/*",
    "*://paulding.net/*",
    "*://pbli.sh/*",
    "*://pck.rs/*",
    "*://pco.lt/*",
    "*://pdh.co/*",
    "*://pduda.mobi/*",
    "*://peachp.it/*",
    "*://peaurl.com/*",
    "*://pendek.in/*",
    "*://pep.si/*",
    "*://perez.ly/*",
    "*://petsmartsocial.com/*",
    "*://pewrsr.ch/*",
    "*://pge.sx/*",
    "*://ph.ly/*",
    "*://phillips.to/*",
    "*://phtshp.us/*",
    "*://pi.pe/*",
    "*://pic.gd/*",
    "*://pich.in/*",
    "*://picplz.com/*",
    "*://picz.us/*",
    "*://piff.me/*",
    "*://piko.me/*",
    "*://pin.st/*",
    "*://pinews.co/*",
    "*://ping.fm/*",
    "*://pitch.pe/*",
    "*://piurl.com/*",
    "*://pl.an/*",
    "*://plated.me/*",
    "*://pli.gs/*",
    "*://plots.fr/*",
    "*://plumurl.com/*",
    "*://plurl.me/*",
    "*://pm.wu.cz/*",
    "*://pndo.ly/*",
    "*://pngr.it/*",
    "*://pninja.co/*",
    "*://pnt.me/*",
    "*://po.st/*",
    "*://pocket.co/*",
    "*://pojonews.co/*",
    "*://politi.co/*",
    "*://poll.fm/*",
    "*://pop.ly/*",
    "*://poprl.com/*",
    "*://pops.ci/*",
    "*://post.cr/*",
    "*://post.ly/*",
    "*://postdispat.ch/*",
    "*://posted.at/*",
    "*://powells.us/*",
    "*://pp.gg/*",
    "*://ppche.ro/*",
    "*://ppfr.it/*",
    "*://ppst.me/*",
    "*://ppt.cc/*",
    "*://ppt.li/*",
    "*://prejit.cz/*",
    "*://press.sn/*",
    "*://prettylinkpro.com/*",
    "*://prez.is/*",
    "*://pri.vc/*",
    "*://prn.to/*",
    "*://prnt.in/*",
    "*://profile.to/*",
    "*://pt2.me/*",
    "*://ptab.it/*",
    "*://ptiturl.com/*",
    "*://ptm.ro/*",
    "*://ptrani.me/*",
    "*://pub.vitrue.com/*",
    "*://publun.ch/*",
    "*://puke.it/*",
    "*://pulse.me/*",
    "*://pulsene.ws/*",
    "*://puri.na/*",
    "*://pw2.ro/*",
    "*://pwire.at/*",
    "*://py6.ru/*",
    "*://pysper.com/*",
    "*://q.gs/*",
    "*://qbn.ru/*",
    "*://qik.li/*",
    "*://qkme.me/*",
    "*://qlnk.net/*",
    "*://qoiob.com/*",
    "*://qqc.co/*",
    "*://qr.ae/*",
    "*://qr.cx/*",
    "*://qr.net/*",
    "*://qrtag.fr/*",
    "*://qte.me/*",
    "*://qu.tc/*",
    "*://quickurl.co.uk/*",
    "*://qurl.com/*",
    "*://qurlyq.com/*",
    "*://quu.nu/*",
    "*://qux.in/*",
    "*://qvc.co/*",
    "*://qxp.cz/*",
    "*://qxp.sk/*",
    "*://qy.fi/*",
    "*://qz.com/*",
    "*://r.im/*",
    "*://r29.co/*",
    "*://r29.us/*",
    "*://r8t.us/*",
    "*://rach.tv/*",
    "*://racked.cc/*",
    "*://raven.im/*",
    "*://rb6.co/*",
    "*://rb6.me/*",
    "*://rbl.ms/*",
    "*://rcknr.io/*",
    "*://rclk.ly/*",
    "*://rd.io/*",
    "*://rdd.me/*",
    "*://rde.me/*",
    "*://rdz.me/*",
    "*://re.pn/*",
    "*://read.bi/*",
    "*://readthis.ca/*",
    "*://reallytinyurl.com/*",
    "*://rebrick.it/*",
    "*://redd.it/*",
    "*://redir.ec/*",
    "*://redir.fr/*",
    "*://redirects.ca/*",
    "*://redirx.com/*",
    "*://redu.it/*",
    "*://ref.so/*",
    "*://reise.lc/*",
    "*://relink.fr/*",
    "*://relyt.us/*",
    "*://rem.ax/*",
    "*://retwedia.com/*",
    "*://retwt.me/*",
    "*://reut.rs/*",
    "*://revolver2.com/*",
    "*://rfi.my/*",
    "*://rhjr.net/*",
    "*://ri.ms/*",
    "*://rickroll.it/*",
    "*://ringcentr.al/*",
    "*://ringit.us/*",
    "*://rivva.de/*",
    "*://riz.cz/*",
    "*://riz.gd/*",
    "*://rly.cc/*",
    "*://rnc.ag/*",
    "*://rnk.me/*",
    "*://rnkpr.com/*",
    "*://rock.li/*",
    "*://rockcenter.co/*",
    "*://rod.gs/*",
    "*://roflc.at/*",
    "*://rol.la/*",
    "*://rol.st/*",
    "*://rpplfr.me/*",
    "*://rsmonkey.com/*",
    "*://rt.nu/*",
    "*://rt.se/*",
    "*://rt2.ca/*",
    "*://ru.ly/*",
    "*://rubyurl.com/*",
    "*://rurl.org/*",
    "*://ruv.me/*",
    "*://rwjf.ws/*",
    "*://rww.to/*",
    "*://rww.tw/*",
    "*://s-url.fr/*",
    "*://s.dv.nu/*",
    "*://s.gnoss.us/*",
    "*://s.hbr.org/*",
    "*://s.nyt.com/*",
    "*://s.osky.co/*",
    "*://s.rlp.de/*",
    "*://s.whcc.com/*",
    "*://s3nt.com/*",
    "*://s4c.in/*",
    "*://s7y.us/*",
    "*://safe.mn/*",
    "*://safelinks.ru/*",
    "*://safm.co/*",
    "*://sagyap.tk/*",
    "*://sai.ly/*",
    "*://sameurl.com/*",
    "*://sarcas.ms/*",
    "*://sbn.to/*",
    "*://sbux.co/*",
    "*://sc.org/*",
    "*://sch.mp/*",
    "*://sched.co/*",
    "*://scifri.me/*",
    "*://scoble.it/*",
    "*://scri.bi/*",
    "*://scrnch.me/*",
    "*://scty.asia/*",
    "*://sdtk.fm/*",
    "*://sdu.sk/*",
    "*://sdut.us/*",
    "*://seati.ms/*",
    "*://secret.ly/*",
    "*://sed.cx/*",
    "*://see.sc/*",
    "*://seeme.at/*",
    "*://segue.se/*",
    "*://selnd.com/*",
    "*://selz.co/*",
    "*://send.gd/*",
    "*://seph.me/*",
    "*://ser.bz/*",
    "*://setd.es/*",
    "*://sewat.ch/*",
    "*://sforce.co/*",
    "*://sftlyr.com/*",
    "*://sfu.ca/*",
    "*://sfy.co/*",
    "*://sgfnow.co/*",
    "*://sgizmo.com/*",
    "*://sgk.mn/*",
    "*://sh.st/*",
    "*://shadyurl.com/*",
    "*://shar.as/*",
    "*://shar.es/*",
    "*://shebpr.es/*",
    "*://shim.net/*",
    "*://shink.de/*",
    "*://sho.pe/*",
    "*://shorl.com/*",
    "*://short.cc/*",
    "*://short.ie/*",
    "*://short.pk/*",
    "*://short.to/*",
    "*://shorten.ws/*",
    "*://shortenurl.com/*",
    "*://shorterlink.com/*",
    "*://shortio.com/*",
    "*://shortlinks.co.uk/*",
    "*://shortly.nl/*",
    "*://shortn.me/*",
    "*://shortna.me/*",
    "*://shortquik.com/*",
    "*://shortr.me/*",
    "*://shorturl.com/*",
    "*://shortz.me/*",
    "*://shoturl.us/*",
    "*://shout.to/*",
    "*://show.my/*",
    "*://shpws.me/*",
    "*://shredu/*",
    "*://shredurl.com/*",
    "*://shrinkify.com/*",
    "*://shrinkr.com/*",
    "*://shrinkster.com/*",
    "*://shrinkurl.us/*",
    "*://shrt.fr/*",
    "*://shrt.in/*",
    "*://shrt.st/*",
    "*://shrt.ws/*",
    "*://shrten.com/*",
    "*://shrtl.com/*",
    "*://shrtn.com/*",
    "*://shrtnd.com/*",
    "*://shrunkin.com/*",
    "*://shurl.net/*",
    "*://shw.me/*",
    "*://shy.si/*",
    "*://shz.am/*",
    "*://sicax.net/*",
    "*://signon.org/*",
    "*://simp.ly/*",
    "*://simurl.com/*",
    "*://simurl.net/*",
    "*://simurl.org/*",
    "*://simurl.us/*",
    "*://sina.lt/*",
    "*://sitelutions.com/*",
    "*://siteo.us/*",
    "*://sk.gy/*",
    "*://sk.ype.ms/*",
    "*://skl.sh/*",
    "*://skr.sk/*",
    "*://skroc.pl/*",
    "*://sl.ly/*",
    "*://slate.me/*",
    "*://slidesha.re/*",
    "*://slki.ru/*",
    "*://sm.drpepper.com/*",
    "*://smallr.com/*",
    "*://smallr.net/*",
    "*://smart.cr/*",
    "*://smarturl.it/*",
    "*://smashed.by/*",
    "*://smf.is/*",
    "*://smfu.in/*",
    "*://smgm.us/*",
    "*://smith.gl/*",
    "*://smll.co/*",
    "*://smq.tc/*",
    "*://smsh.me/*",
    "*://smurl.com/*",
    "*://smurl.name/*",
    "*://sn.im/*",
    "*://sn.vc/*",
    "*://snadr.it/*",
    "*://snd.sc/*",
    "*://snip.ly/*",
    "*://snipie.com/*",
    "*://snipr.com/*",
    "*://snipurl.com/*",
    "*://snkr.me/*",
    "*://snow.sh/*",
    "*://sns.mx/*",
    "*://snsw.us/*",
    "*://snurl.com/*",
    "*://soc.li/*",
    "*://social.bestbuy.com/*",
    "*://social.jcp.com/*",
    "*://social.vzw.com/*",
    "*://social.zune.net/*",
    "*://sockroll.com/*",
    "*://some.ly/*",
    "*://song.ly/*",
    "*://soo.gd/*",
    "*://soup.ps/*",
    "*://sp2.ro/*",
    "*://spdr.mn/*",
    "*://spe.com/*",
    "*://spedr.com/*",
    "*://spn.sr/*",
    "*://spon.de/*",
    "*://sportsgrid.com/*",
    "*://spoti.fi/*",
    "*://spr.ly/*",
    "*://sptnkne.ws/*",
    "*://sq6.ru/*",
    "*://sqrl.it/*",
    "*://squ.re/*",
    "*://sqze.it/*",
    "*://srnk.net/*",
    "*://srs.li/*",
    "*://ssl.gs/*",
    "*://st8.fm/*",
    "*://stan4d.us/*",
    "*://stargaz.tt/*",
    "*://starstar.to/*",
    "*://starturl.com/*",
    "*://statigr.am/*",
    "*://stickurl.com/*",
    "*://stjr.nl/*",
    "*://stks.co/*",
    "*://stlra.ms/*",
    "*://stonet.co/*",
    "*://stpmvt.com/*",
    "*://striking.ly/*",
    "*://stry.me/*",
    "*://sturly.com/*",
    "*://styleite.com/*",
    "*://su.pr/*",
    "*://subar.us/*",
    "*://suntm.es/*",
    "*://sups.us/*",
    "*://surl.co.uk/*",
    "*://surl.hu/*",
    "*://surl.it/*",
    "*://surl.me/*",
    "*://sux.cz/*",
    "*://svy.mk/*",
    "*://sy.pe/*",
    "*://t-mo.co/*",
    "*://t.cn/*",
    "*://t.co/*",
    "*://t.lh.com/*",
    "*://t.st/*",
    "*://t.uber.com/*",
    "*://t.usnews.com/*",
    "*://ta.gd/*",
    "*://tabzi.com/*",
    "*://takemyfile.com/*",
    "*://tau.pe/*",
    "*://tbd.ly/*",
    "*://tbf.me/*",
    "*://tcrn.ch/*",
    "*://tdjt.cz/*",
    "*://techme.me/*",
    "*://techpin.io/*",
    "*://techre.vu/*",
    "*://tek.io/*",
    "*://tempo.ai/*",
    "*://tgr.me/*",
    "*://tgr.ph/*",
    "*://tgt.bz/*",
    "*://th8.us/*",
    "*://thd.co/*",
    "*://theatln.tc/*",
    "*://thebea.st/*",
    "*://thebraiser.com/*",
    "*://thecow.me/*",
    "*://thecp.me/*",
    "*://thedc.com/*",
    "*://thedrum.com/*",
    "*://thekitc.hn/*",
    "*://thesa.us/*",
    "*://thesent.nl/*",
    "*://theso.co/*",
    "*://thetim.es/*",
    "*://thkp.gs/*",
    "*://thkpr.gs/*",
    "*://thndr.it/*",
    "*://thr.cm/*",
    "*://thrdl.es/*",
    "*://thrl.st/*",
    "*://ti.me/*",
    "*://tighturl.com/*",
    "*://tilt.tc/*",
    "*://timesurl.at/*",
    "*://timmil.es/*",
    "*://tin.li/*",
    "*://tini.cc/*",
    "*://tini.us/*",
    "*://tiniuri.com/*",
    "*://tiny.cc/*",
    "*://tiny.lt/*",
    "*://tiny.ly/*",
    "*://tiny.ms/*",
    "*://tiny.pl/*",
    "*://tinyarro.ws/*",
    "*://tinyarrows.com/*",
    "*://tinylink.com/*",
    "*://tinylink.in/*",
    "*://tinypl.us/*",
    "*://tinysong.com/*",
    "*://tinytw.it/*",
    "*://tinyuri.ca/*",
    "*://tinyurl.com/*",
    "*://tinyurl.hu/*",
    "*://tixsu.com/*",
    "*://tk./*",
    "*://tkt.ly/*",
    "*://tl.gd/*",
    "*://tldis.it/*",
    "*://tldr.sk/*",
    "*://tllg.net/*",
    "*://tlrk.it/*",
    "*://tmblr.co/*",
    "*://tmi.me/*",
    "*://tmout.us/*",
    "*://tmoutchi.us/*",
    "*://tmvs.tv/*",
    "*://tmz.me/*",
    "*://tnat.in/*",
    "*://tncr.ws/*",
    "*://tnij.org/*",
    "*://tnne.ws/*",
    "*://tnw.to/*",
    "*://tny.com/*",
    "*://tny.cz/*",
    "*://to./*",
    "*://to.je/*",
    "*://to.ly/*",
    "*://to.pbs.org/*",
    "*://to.vg/*",
    "*://togoto.us/*",
    "*://tohle.de/*",
    "*://tolu.na/*",
    "*://tommyjo.hn/*",
    "*://toms.sh/*",
    "*://tota2.com/*",
    "*://totc.us/*",
    "*://toysr.us/*",
    "*://tpm.ly/*",
    "*://tpmr.com/*",
    "*://tprk.us/*",
    "*://tptq.com/*",
    "*://tr.im/*",
    "*://tr.my/*",
    "*://tr5.in/*",
    "*://tra.kz/*",
    "*://traceurl.com/*",
    "*://trackurl.it/*",
    "*://trcb.me/*",
    "*://trck.me/*",
    "*://trg.li/*",
    "*://trib.al/*",
    "*://trib.in/*",
    "*://trick.ly/*",
    "*://trii.us/*",
    "*://trim.li/*",
    "*://trkr.ws/*",
    "*://trkurl.com/*",
    "*://trn.st/*",
    "*://trndbl.co/*",
    "*://troni.me/*",
    "*://trumpink.lt/*",
    "*://trunc.it/*",
    "*://truncurl.com/*",
    "*://tsort.us/*",
    "*://tspne.ws/*",
    "*://tsta.rs/*",
    "*://tubeurl.com/*",
    "*://tumblr.com/*",
    "*://turo.us/*",
    "*://tvnews.co/*",
    "*://tw.appstore.com/*",
    "*://tw.medicalexpress.com/*",
    "*://tw.nbcsports.com/*",
    "*://tw0.us/*",
    "*://tw1.us/*",
    "*://tw2.us/*",
    "*://tw5.us/*",
    "*://tw6.us/*",
    "*://tw8.us/*",
    "*://tw9.us/*",
    "*://twa.lk/*",
    "*://twaud.io/*",
    "*://tweet.me/*",
    "*://tweetburner.com/*",
    "*://tweetl.com/*",
    "*://tweez.me/*",
    "*://twet.fr/*",
    "*://twhite.me/*",
    "*://twhub.com/*",
    "*://twi.gy/*",
    "*://twi.im/*",
    "*://twip.us/*",
    "*://twirl.at/*",
    "*://twit.ac/*",
    "*://twitclicks.com/*",
    "*://twitpic.com/*",
    "*://twitterurl.net/*",
    "*://twitterurl.org/*",
    "*://twitthis.com/*",
    "*://twittu.ms/*",
    "*://twiturl.de/*",
    "*://twitzap.com/*",
    "*://twl.sh/*",
    "*://twlr.me/*",
    "*://twlv.net/*",
    "*://twrt.me/*",
    "*://twtr.to/*",
    "*://twtr.us/*",
    "*://twurl.cc/*",
    "*://twurl.nl/*",
    "*://txex.es/*",
    "*://txt.bo/*",
    "*://u.bb/*",
    "*://u.mavrev.com/*",
    "*://u.nu/*",
    "*://u.pw/*",
    "*://u.to/*",
    "*://u76.org/*",
    "*://uafly.co/*",
    "*://uapp.ly/*",
    "*://ub0.cc/*",
    "*://uby.es/*",
    "*://ucam.me/*",
    "*://ucla.in/*",
    "*://ug.cz/*",
    "*://uiop.me/*",
    "*://ulimit.com/*",
    "*://ulmt.in/*",
    "*://ulu.lu/*",
    "*://umurl.us/*",
    "*://unfaker.it/*",
    "*://uni.vi/*",
    "*://uninews.us/*",
    "*://unlc.us/*",
    "*://untp.beer/*",
    "*://untp.it/*",
    "*://unvrs.al/*",
    "*://updating.me/*",
    "*://upwr.me/*",
    "*://upzat.com/*",
    "*://ur.ly/*",
    "*://ur1.ca/*",
    "*://urbanup.com/*",
    "*://urbn.cc/*",
    "*://urbo.co/*",
    "*://urizy.com/*",
    "*://url.ag/*",
    "*://url.az/*",
    "*://url.co.uk/*",
    "*://url.go.it/*",
    "*://url.ie/*",
    "*://url.inc-x.eu/*",
    "*://url.lotpatrol.com/*",
    "*://url2.fr/*",
    "*://url360.me/*",
    "*://url4.eu/*",
    "*://url5.org/*",
    "*://urlao.com/*",
    "*://urlbee.com/*",
    "*://urlborg.com/*",
    "*://urlbrief.com/*",
    "*://urlcorta.es/*",
    "*://urlcover.com/*",
    "*://urlcut.com/*",
    "*://urlcutter.com/*",
    "*://urlenco.de/*",
    "*://urlg.info/*",
    "*://urlhawk.com/*",
    "*://urli.nl/*",
    "*://urlin.it/*",
    "*://urlkiss.com/*",
    "*://urloo.com/*",
    "*://urlpire.com/*",
    "*://urls.fr/*",
    "*://urls.im/*",
    "*://urlshorteningservicefortwitter.com/*",
    "*://urltea.com/*",
    "*://urlu.ms/*",
    "*://urlvi.b/*",
    "*://urlvi.be/*",
    "*://urlx.ie/*",
    "*://urlz.at/*",
    "*://urlz.fr/*",
    "*://urlzen.com/*",
    "*://urub.us/*",
    "*://usanet.tv/*",
    "*://usat.ly/*",
    "*://use.my/*",
    "*://uservoice.com/*",
    "*://ussoc.cr/*",
    "*://ustre.am/*",
    "*://utfg.sk/*",
    "*://uverse.us/*",
    "*://uxm.ag/*",
    "*://v.gd/*",
    "*://v.ht/*",
    "*://v.zite.com/*",
    "*://v1m.net/*",
    "*://v5.gd/*",
    "*://vaaa.fr/*",
    "*://vado.it/*",
    "*://valv.im/*",
    "*://vaza.me/*",
    "*://vb.ly/*",
    "*://vbly.us/*",
    "*://vd55.com/*",
    "*://vdirect.com/*",
    "*://verd.in/*",
    "*://vevo.ly/*",
    "*://vgn.am/*",
    "*://vgn.me/*",
    "*://vi.ly/*",
    "*://via.me/*",
    "*://viddy.it/*",
    "*://viigo.im/*",
    "*://virg.co/*",
    "*://virg.in/*",
    "*://virl.com/*",
    "*://vl.am/*",
    "*://vm.lc/*",
    "*://vnty.fr/*",
    "*://vnty.us/*",
    "*://voizle.com/*",
    "*://volu.sn/*",
    "*://vov.li/*",
    "*://vox.com/*",
    "*://vrge.co/*",
    "*://vrl.ht/*",
    "*://vrsn.cc/*",
    "*://vsb.li/*",
    "*://vsll.eu/*",
    "*://vt802.us/*",
    "*://vtc.es/*",
    "*://vult.re/*",
    "*://vur.me/*",
    "*://vv.vg/*",
    "*://vz.to/*",
    "*://vzturl.com/*",
    "*://w.fullsail.edu/*",
    "*://w0r.me/*",
    "*://w1p.fr/*",
    "*://w33.us/*",
    "*://w34.us/*",
    "*://w3t.org/*",
    "*://w55.de/*",
    "*://wa9.la/*",
    "*://waa.ai/*",
    "*://walmarturl.com/*",
    "*://wapo.st/*",
    "*://wapurl.co.uk/*",
    "*://washex.am/*",
    "*://wb1.eu/*",
    "*://wbtrnd.co/*",
    "*://wbur.fm/*",
    "*://we.tl/*",
    "*://web99.eu/*",
    "*://webalias.com/*",
    "*://wed.li/*",
    "*://welcome.to/*",
    "*://wervirg.in/*",
    "*://wet.pt/*",
    "*://wfp.to/*",
    "*://wfts.tv/*",
    "*://wh.gov/*",
    "*://wideo.fr/*",
    "*://widg.me/*",
    "*://wigs.ly/*",
    "*://win.gs/*",
    "*://wipi.es/*",
    "*://wire.ms/*",
    "*://wis.ms/*",
    "*://with.me/*",
    "*://wj.la/*",
    "*://wjf.im/*",
    "*://wkrg.com/*",
    "*://woo.ly/*",
    "*://wp.me/*",
    "*://wp.mu/*",
    "*://wpbeg.in/*",
    "*://wpo.st/*",
    "*://wrd.cm/*",
    "*://wrdm.ag/*",
    "*://wsm.co/*",
    "*://wtc.la/*",
    "*://wthms.co/*",
    "*://wu.cz/*",
    "*://ww7.fr/*",
    "*://wwd.us/*",
    "*://wwy.me/*",
    "*://wwz.rs/*",
    "*://wxch.nl/*",
    "*://x.co/*",
    "*://x.hypem.com/*",
    "*://x.nu/*",
    "*://x.se/*",
    "*://x.up.com/*",
    "*://x.vu/*",
    "*://x10.mx/*",
    "*://x2c.eu/*",
    "*://x2c.eumx/*",
    "*://xav.cc/*",
    "*://xbx.ms/*",
    "*://xeeurl.com/*",
    "*://xgd.in/*",
    "*://xib.me/*",
    "*://xil.in/*",
    "*://xl8.eu/*",
    "*://xlinkz.info/*",
    "*://xlurl.de/*",
    "*://xn--1ci.ws/*",
    "*://xn--3fi.ws/*",
    "*://xn--5gi.ws/*",
    "*://xn--9gi.ws/*",
    "*://xn--bih.ws/*",
    "*://xn--cwg.ws/*",
    "*://xn--egi.ws/*",
    "*://xn--fwg.ws/*",
    "*://xn--hgi.ws/*",
    "*://xn--l3h.ws/*",
    "*://xn--odi.ws/*",
    "*://xn--ogi.ws/*",
    "*://xn--rei.ws/*",
    "*://xn--vgi.ws/*",
    "*://xoe.cz/*",
    "*://xr.com/*",
    "*://xrl.in/*",
    "*://xrl.us/*",
    "*://xrt.me/*",
    "*://xrx.sm/*",
    "*://xt3.me/*",
    "*://xtu.me/*",
    "*://xua.me/*",
    "*://xub.me/*",
    "*://xurl.es/*",
    "*://xurl.jp/*",
    "*://xurls.co/*",
    "*://xxsurl.de/*",
    "*://xzb.cc/*",
    "*://y.ahoo.it/*",
    "*://yagoa.fr/*",
    "*://yagoa.me/*",
    "*://yatuc.com/*",
    "*://yau.sh/*",
    "*://ye-s.com/*",
    "*://ye.pe/*",
    "*://yeca.eu/*",
    "*://yect.com/*",
    "*://yep.it/*",
    "*://yfrog.com/*",
    "*://yhoo.it/*",
    "*://yiyd.com/*",
    "*://yogh.me/*",
    "*://yon.ir/*",
    "*://youfap.me/*",
    "*://yourls.org/*",
    "*://youtu.be/*",
    "*://ysear.ch/*",
    "*://yu2.it/*",
    "*://yuarel.com/*",
    "*://yyv.co/*",
    "*://z.pe/*",
    "*://z0p.de/*",
    "*://z9.fr/*",
    "*://zSMS.net/*",
    "*://zagat.bz/*",
    "*://zagg.to/*",
    "*://zan.gy/*",
    "*://zapit.nu/*",
    "*://zapt.in/*",
    "*://zapwow.me/*",
    "*://zd.net/*",
    "*://zeek.ir/*",
    "*://zi.ma/*",
    "*://zi.me/*",
    "*://zi.mu/*",
    "*://zi.pe/*",
    "*://ziglr.us/*",
    "*://zip.li/*",
    "*://zip.net/*",
    "*://zipmyurl.com/*",
    "*://zite.to/*",
    "*://zkr.cz/*",
    "*://zkrat.me/*",
    "*://zkrt.cz/*",
    "*://zoo.tl/*",
    "*://zoodl.com/*",
    "*://zootit.com/*",
    "*://zpag.es/*",
    "*://zpr.io/*",
    "*://zti.me/*",
    "*://zud.me/*",
    "*://zurl.ws/*",
    "*://zxq.net/*",
    "*://zyva.org/*",
    "*://zz.gd/*",
    "*://zzang.kr/*",
    "*://zzb.bz/*"
];

/**
 * An array of AMP cache domains., represented as domains and paths.
 * This representation facilitates parsing AMP urls in `LinkResolution`.
 * @constant
 * @type{Array<string>}
 */
const ampCacheDomains = [
    "amp.cloudflare.com", // Cloudflare AMP Cache
    "cdn.ampproject.org", // Google AMP Cache
    "www.bing-amp.com" // Microsoft Bing AMP Cache
];

/**
 * An array of AMP viewers, represented as domains with paths.
 * This representation facilitates parsing AMP urls in `LinkResolution`.
 * @constant
 * @type{Array<string>}
 */
const ampViewerDomainsAndPaths = [
    "www.google.com/amp" // Google AMP Viewer
];

/**
 * A RegExp that matches and parses AMP cache and viewer URLs. If there is a match, the RegExp provides several
 * named capture groups.
 *   * AMP Cache Matches
 *     * `ampCacheSubdomain` - The subdomain, which should be either a reformatted version of the
 *       URL domain or a hash of the domain. If there is no subdomain, this capture group
 *       is `undefined`.
 *     * `ampCacheDomain` - The domain for the AMP cache.
 *     * `ampCacheContentType` - The content type, which is either `c` for an HTML document, `i` for
 *        an image, or `r` for another resource. 
 *     * `ampCacheIsSecure` - Whether the AMP cache loads the resource via HTTPS. If it does, this
 *        capture group has the value `s/`. If it doesn't, this capture group is `undefined`.
 *     * `ampCacheUrl` - The underlying URL, without a specified scheme (i.e., `http://` or `https://`).
 *  * AMP Viewer Matches
 *     * `ampViewerDomainAndPath` - The domain and path for the AMP viewer.
 *     * `ampViewerUrl` - The underlying URL, without a specified scheme (i.e., `http://` or `https://`).
 * @see {@link https://developers.google.com/amp/cache/overview}
 * @see {@link https://amp.dev/documentation/guides-and-tutorials/learn/amp-caches-and-cors/amp-cache-urls/}
 * @constant
 * @type {RegExp}
 */
new RegExp(
  // AMP cache regular expression
  `(?:^https?://(?:(?<ampCacheSubdomain>[a-zA-Z0-9\\-\\.]*)\\.)?(?<ampCacheDomain>${ampCacheDomains.map(escapeRegExpString).join("|")})/(?<ampCacheContentType>c|i|r)/(?<ampCacheIsSecure>s/)?(?<ampCacheUrl>.*)$)`
  + `|` +
  // AMP viewer regular expression
  `(?:^https?://(?<ampViewerDomainAndPath>${ampViewerDomainsAndPaths.map(escapeRegExpString).join("|")})/(?<ampViewerUrl>.*)$)`
  , "i");

/**
 * A RegExp for known URL shorteners, based on the match patterns loaded from `urlShortenerMatchPatterns.js`.
 * @constant
 * @type{RegExp}
 */
matchPatternsToRegExp(urlShortenerMatchPatterns);

var pageNavigationContentScript = "data:application/javascript;base64,KGZ1bmN0aW9uICgpIHsKICAgICd1c2Ugc3RyaWN0JzsKCiAgICAvKioKICAgICAqIENvbnRlbnQgc2NyaXB0IGZvciB0aGUgcGFnZU5hdmlnYXRpb24gbW9kdWxlLgogICAgICoKICAgICAqICMgS25vd24gSXNzdWVzCiAgICAgKiAgICogV2hlbiBzZW5kaW5nIHBhZ2UgZGF0YSBkdXJpbmcgYSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQsIHNvbWV0aW1lcwogICAgICogICAgIEZpcmVmb3ggZ2VuZXJhdGVzIGFuIGVycm9yICgiUHJvbWlzZSByZXNvbHZlZCB3aGlsZSBjb250ZXh0IGlzIGluYWN0aXZlIikKICAgICAqICAgICBiZWNhdXNlIHRoZSBjb250ZW50IHNjcmlwdCBleGVjdXRpb24gZW52aXJvbm1lbnQgaXMgdGVybWluYXRpbmcgd2hpbGUgdGhlCiAgICAgKiAgICAgbWVzc2FnZSBzZW5kaW5nIFByb21pc2UgcmVtYWlucyBvcGVuLiBUaGlzIGVycm9yIGRvZXMgbm90IGFmZmVjdCBmdW5jdGlvbmFsaXR5LAogICAgICogICAgIGJlY2F1c2Ugd2UgZG8gbm90IGRlcGVuZCBvbiByZXNvbHZpbmcgdGhlIFByb21pc2UgKGkuZS4sIGEgcmVzcG9uc2UgdG8gdGhlCiAgICAgKiAgICAgcGFnZSB2aXNpdCBzdG9wIG1lc3NhZ2UpLgogICAgICogQG1vZHVsZSB3ZWJTY2llbmNlLnBhZ2VOYXZpZ2F0aW9uLmNvbnRlbnQKICAgICAqLwogICAgLy8gVGVsbCBlc2xpbnQgdGhhdCBwYWdlTWFuYWdlciBpc24ndCBhY3R1YWxseSB1bmRlZmluZWQKICAgIC8qIGdsb2JhbCBwYWdlTWFuYWdlciAqLwoKICAgIC8vIEZ1bmN0aW9uIGVuY2Fwc3VsYXRpb24gdG8gd2FpdCBmb3IgcGFnZU1hbmFnZXIgbG9hZAogICAgY29uc3QgcGFnZU5hdmlnYXRpb24gPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgLyoqCiAgICAgICAgICogSG93IGxvbmcgdGhlIHBhZ2UgaGFzIGhhZCB0aGUgdXNlcidzIGF0dGVudGlvbi4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBhdHRlbnRpb25EdXJhdGlvbiA9IDA7CgogICAgICAgIC8qKgogICAgICAgICAqIFdoZW4gdGhlIHBhZ2UgYXR0ZW50aW9uIHN0YXRlIHdhcyBsYXN0IHVwZGF0ZWQuCiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KICAgICAgICBsZXQgbGFzdEF0dGVudGlvblVwZGF0ZVRpbWUgPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBIb3cgbG9uZyB0aGUgcGFnZSBoYXMgcGxheWVkIGF1ZGlvLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCiAgICAgICAgbGV0IGF1ZGlvRHVyYXRpb24gPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBXaGVuIHRoZSBwYWdlIGxhc3QgYmVnYW4gcGxheWluZyBhdWRpby4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBsYXN0QXVkaW9VcGRhdGVUaW1lID0gMDsKCiAgICAgICAgLyoqCiAgICAgICAgICogSG93IGxvbmcgdGhlIHBhZ2UgaGFzIHNpbXVsdGFuZW91c2x5IGhhZCBhdHRlbnRpb24gYW5kIHBsYXllZCBhdWRpby4gVGhpcyB2YWx1ZSBpcwogICAgICAgICAqIGEgdXNlZnVsIGFwcHJveGltYXRpb24gb2YgdmlkZW8gdmlld2luZyB0aW1lLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCiAgICAgICAgbGV0IGF0dGVudGlvbkFuZEF1ZGlvRHVyYXRpb24gPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBIb3cgb2Z0ZW4gKGluIG1pbGxpc2Vjb25kcykgdG8gY2hlY2sgbWF4aW11bSBwYWdlIHNjcm9sbCBkZXB0aC4KICAgICAgICAgKiBAY29uc3RhbnQKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGNvbnN0IHNjcm9sbERlcHRoVXBkYXRlSW50ZXJ2YWwgPSAxMDAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBIb3cgb2Z0ZW4gKGluIG1pbGxpc2Vjb25kcykgYWZ0ZXIgdGhlIGZpcnN0IHRpbWUgdGhlIHBhZ2UgZ2FpbnMgYXR0ZW50aW9uIChvciBhZnRlcgogICAgICAgICAqIHBhZ2UgdmlzaXQgc3RhcnQgaWYgYHNjcm9sbERlcHRoV2FpdEZvckF0dGVudGlvbmAgaXMgYGZhbHNlYCkgdG8gYmVnaW4gY2hlY2tpbmcgdGhlCiAgICAgICAgICogbWF4aW11bSByZWxhdGl2ZSBzY3JvbGwgZGVwdGguIEEgZGVsYXkgaXMgaGVscGZ1bCBiZWNhdXNlIHNvbWUgcGFnZXMgaGF2ZSBwbGFjZWhvbGRlcgogICAgICAgICAqIGNvbnRlbnQgd2hpbGUgbG9hZGluZyAoZS5nLiwgb24gWW91VHViZSkgb3IgbGF6aWx5IGxvYWQgY29udG50IChlLmcuLCBvbiBUd2l0dGVyKS4KICAgICAgICAgKiBAY29uc3RhbnQKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGNvbnN0IHNjcm9sbERlcHRoVXBkYXRlRGVsYXkgPSAyMDAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBUaGUgbWluaW11bSBwYWdlIGhlaWdodCByZXF1aXJlZCAoaW4gcGl4ZWxzLCB1c2luZyBgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodGAgcmF0aGVyCiAgICAgICAgICogdGhhbiBgc2Nyb2xsSGVpZ2h0YCBvciBgY2xpZW50SGVpZ2h0YCB0byBhdm9pZCBjbGFtcGluZyB0byBzY3JlZW4gc2l6ZSkgdG8gY2hlY2sgdGhlIG1heGltdW0KICAgICAgICAgKiByZWxhdGl2ZSBzY3JvbGwgZGVwdGguIEEgbWluaW11bSBoZWlnaHQgaXMgaGVscGZ1bCBiZWNhdXNlIHNvbWUgcGFnZXMgaGF2ZSBwbGFjZWhvbGRlciBjb250ZW50CiAgICAgICAgICogd2hpbGUgbG9hZGluZyAoZS5nLiwgb24gWW91VHViZSkgb3IgbGF6aWx5IGxvYWQgY29udG50IChlLmcuLCBvbiBUd2l0dGVyKS4KICAgICAgICAgKiBAY29uc3RhbnQKICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGNvbnN0IHNjcm9sbERlcHRoTWluaW11bUhlaWdodCA9IDUwOwoKICAgICAgICAvKioKICAgICAgICAgKiBUaGUgZmlyc3QgdGltZSB0aGUgcGFnZSBoYWQgYXR0ZW50aW9uLCBvciAwIGlmIHRoZSBwYWdlIGhhcyBuZXZlciBoYWQgYXR0ZW50aW9uLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCiAgICAgICAgbGV0IGZpcnN0QXR0ZW50aW9uVGltZSA9IDA7CgogICAgICAgIC8qKgogICAgICAgICAqIFRoZSBtYXhpbXVtIHJlbGF0aXZlIHNjcm9sbCBkZXB0aCwgZGVmaW5lZCBhcyB0aGUgZGVwdGggb2YgdGhlIGJvdHRvbSBvZgogICAgICAgICAqIHRoZSBjb250ZW50IHdpbmRvdyBkaXZpZGVkIGJ5IHRoZSBkZXB0aCBvZiB0aGUgcGFnZToKICAgICAgICAgKiAoYHdpbmRvdy5zY3JvbGxZYCArIGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0YCkgLyBgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodGAuCiAgICAgICAgICogTm90ZSB0aGF0IGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0YCBhbmQgYGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRgCiAgICAgICAgICogaW5jbHVkZSBwYWRkaW5nIGJ1dCBub3QgbWFyZ2luIG9yIGJvcmRlci4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBtYXhSZWxhdGl2ZVNjcm9sbERlcHRoID0gMDsKCiAgICAgICAgLyoqCiAgICAgICAgICogQW4gaW50ZXJ2YWwgdGltZXIgSUQgZm9yIGNoZWNraW5nIHNjcm9sbCBkZXB0aC4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBzY3JvbGxEZXB0aEludGVydmFsSWQgPSAwOwoKICAgICAgICBjb25zdCBwYWdlVmlzaXRTdGFydCA9IGZ1bmN0aW9uICh7IHRpbWVTdGFtcCB9KSB7CiAgICAgICAgICAgIC8vIFJlc2V0IHBhZ2UgYXR0ZW50aW9uIGFuZCBwYWdlIGF1ZGlvIHRyYWNraW5nCiAgICAgICAgICAgIGF0dGVudGlvbkR1cmF0aW9uID0gMDsKICAgICAgICAgICAgbGFzdEF0dGVudGlvblVwZGF0ZVRpbWUgPSB0aW1lU3RhbXA7CiAgICAgICAgICAgIGZpcnN0QXR0ZW50aW9uVGltZSA9IHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24gPyB0aW1lU3RhbXAgOiAwOwogICAgICAgICAgICBhdWRpb0R1cmF0aW9uID0gMDsKICAgICAgICAgICAgbGFzdEF1ZGlvVXBkYXRlVGltZSA9IHRpbWVTdGFtcDsKICAgICAgICAgICAgYXR0ZW50aW9uQW5kQXVkaW9EdXJhdGlvbiA9IDA7CgogICAgICAgICAgICAvLyBSZXNldCBzY3JvbGwgZGVwdGggdHJhY2tpbmcgYW5kIHNldCBhbiBpbnRlcnZhbCB0aW1lciBmb3IgY2hlY2tpbmcgc2Nyb2xsIGRlcHRoCiAgICAgICAgICAgIG1heFJlbGF0aXZlU2Nyb2xsRGVwdGggPSAwOwogICAgICAgICAgICBzY3JvbGxEZXB0aEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgIGlmKCgoKGZpcnN0QXR0ZW50aW9uVGltZSA+IDApICYmICgoRGF0ZS5ub3coKSAtIGZpcnN0QXR0ZW50aW9uVGltZSkgPj0gc2Nyb2xsRGVwdGhVcGRhdGVEZWxheSkpKSAmJgogICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ID49IHNjcm9sbERlcHRoTWluaW11bUhlaWdodCkpCiAgICAgICAgICAgICAgICAgICAgbWF4UmVsYXRpdmVTY3JvbGxEZXB0aCA9IE1hdGgubWluKAogICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChtYXhSZWxhdGl2ZVNjcm9sbERlcHRoLCAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpLAogICAgICAgICAgICAgICAgICAgICAgICAxKTsKICAgICAgICAgICAgfSwgc2Nyb2xsRGVwdGhVcGRhdGVJbnRlcnZhbCk7CiAgICAgICAgfTsKICAgICAgICBpZihwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydGVkKQogICAgICAgICAgICBwYWdlVmlzaXRTdGFydCh7IHRpbWVTdGFtcDogcGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRUaW1lIH0pOwogICAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZVZpc2l0U3RhcnQuYWRkTGlzdGVuZXIocGFnZVZpc2l0U3RhcnQpOwoKICAgICAgICBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0b3AuYWRkTGlzdGVuZXIoKHsgdGltZVN0YW1wIH0pID0+IHsKICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBhdHRlbnRpb24gYW5kIGF1ZGlvIGR1cmF0aW9ucwogICAgICAgICAgICBpZihwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uKQogICAgICAgICAgICAgICAgYXR0ZW50aW9uRHVyYXRpb24gKz0gdGltZVN0YW1wIC0gbGFzdEF0dGVudGlvblVwZGF0ZVRpbWU7CiAgICAgICAgICAgIGlmKHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdWRpbykKICAgICAgICAgICAgICAgIGF1ZGlvRHVyYXRpb24gKz0gdGltZVN0YW1wIC0gbGFzdEF1ZGlvVXBkYXRlVGltZTsKICAgICAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZUhhc0F0dGVudGlvbiAmJiBwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8pCiAgICAgICAgICAgICAgICBhdHRlbnRpb25BbmRBdWRpb0R1cmF0aW9uICs9IHRpbWVTdGFtcCAtIE1hdGgubWF4KGxhc3RBdHRlbnRpb25VcGRhdGVUaW1lLCBsYXN0QXVkaW9VcGRhdGVUaW1lKTsKCiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCB0aW1lciBmb3IgY2hlY2tpbmcgc2Nyb2xsIGRlcHRoCiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsRGVwdGhJbnRlcnZhbElkKTsKCiAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLnNlbmRNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJ3ZWJTY2llbmNlLnBhZ2VOYXZpZ2F0aW9uLnBhZ2VEYXRhIiwKICAgICAgICAgICAgICAgIHBhZ2VJZDogcGFnZU1hbmFnZXIucGFnZUlkLAogICAgICAgICAgICAgICAgdXJsOiBwYWdlTWFuYWdlci51cmwsCiAgICAgICAgICAgICAgICByZWZlcnJlcjogcGFnZU1hbmFnZXIucmVmZXJyZXIsCiAgICAgICAgICAgICAgICBwYWdlVmlzaXRTdGFydFRpbWU6IHBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0YXJ0VGltZSwKICAgICAgICAgICAgICAgIHBhZ2VWaXNpdFN0b3BUaW1lOiB0aW1lU3RhbXAsCiAgICAgICAgICAgICAgICBhdHRlbnRpb25EdXJhdGlvbiwKICAgICAgICAgICAgICAgIGF1ZGlvRHVyYXRpb24sCiAgICAgICAgICAgICAgICBhdHRlbnRpb25BbmRBdWRpb0R1cmF0aW9uLAogICAgICAgICAgICAgICAgbWF4UmVsYXRpdmVTY3JvbGxEZXB0aCwKICAgICAgICAgICAgICAgIHByaXZhdGVXaW5kb3c6IGJyb3dzZXIuZXh0ZW5zaW9uLmluSW5jb2duaXRvQ29udGV4dAogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCiAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlQXR0ZW50aW9uVXBkYXRlLmFkZExpc3RlbmVyKCh7IHRpbWVTdGFtcCB9KSA9PiB7CiAgICAgICAgICAgIC8vIElmIHRoZSBwYWdlIGp1c3QgZ2FpbmVkIGF0dGVudGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIHN0b3JlIHRoZSB0aW1lIHN0YW1wCiAgICAgICAgICAgIGlmKHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24gJiYgKGZpcnN0QXR0ZW50aW9uVGltZSA8IHBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0YXJ0VGltZSkpCiAgICAgICAgICAgICAgICBmaXJzdEF0dGVudGlvblRpbWUgPSB0aW1lU3RhbXA7CgogICAgICAgICAgICAvLyBJZiB0aGUgcGFnZSBqdXN0IGxvc3QgYXR0ZW50aW9uLCBhZGQgdG8gdGhlIGF0dGVudGlvbiBkdXJhdGlvbgogICAgICAgICAgICAvLyBhbmQgcG9zc2libHkgdGhlIGF0dGVudGlvbiBhbmQgYXVkaW8gZHVyYXRpb24KICAgICAgICAgICAgaWYoIXBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24pIHsKICAgICAgICAgICAgICAgIGF0dGVudGlvbkR1cmF0aW9uICs9IHRpbWVTdGFtcCAtIGxhc3RBdHRlbnRpb25VcGRhdGVUaW1lOwogICAgICAgICAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZUhhc0F1ZGlvKQogICAgICAgICAgICAgICAgICAgIGF0dGVudGlvbkFuZEF1ZGlvRHVyYXRpb24gKz0gdGltZVN0YW1wIC0gTWF0aC5tYXgobGFzdEF0dGVudGlvblVwZGF0ZVRpbWUsIGxhc3RBdWRpb1VwZGF0ZVRpbWUpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGxhc3RBdHRlbnRpb25VcGRhdGVUaW1lID0gdGltZVN0YW1wOwogICAgICAgIH0pOwoKICAgICAgICBwYWdlTWFuYWdlci5vblBhZ2VBdWRpb1VwZGF0ZS5hZGRMaXN0ZW5lcigoeyB0aW1lU3RhbXAgfSkgPT4gewogICAgICAgICAgICAvLyBJZiB0aGUgcGFnZSBqdXN0IGxvc3QgYXVkaW8sIGFkZCB0byB0aGUgYXVkaW8gZHVyYXRpb24KICAgICAgICAgICAgLy8gYW5kIHBvc3NpYmx5IHRoZSBhdHRlbnRpb24gYW5kIGF1ZGlvIGR1cmF0aW9uCiAgICAgICAgICAgIGlmKCFwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8pIHsKICAgICAgICAgICAgICAgIGF1ZGlvRHVyYXRpb24gKz0gdGltZVN0YW1wIC0gbGFzdEF1ZGlvVXBkYXRlVGltZTsKICAgICAgICAgICAgICAgIGlmKHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24pCiAgICAgICAgICAgICAgICAgICAgYXR0ZW50aW9uQW5kQXVkaW9EdXJhdGlvbiArPSB0aW1lU3RhbXAgLSBNYXRoLm1heChsYXN0QXR0ZW50aW9uVXBkYXRlVGltZSwgbGFzdEF1ZGlvVXBkYXRlVGltZSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgbGFzdEF1ZGlvVXBkYXRlVGltZSA9IHRpbWVTdGFtcDsKICAgICAgICB9KTsKICAgIH07CgogICAgLy8gV2FpdCBmb3IgcGFnZU1hbmFnZXIgbG9hZAogICAgaWYgKCJwYWdlTWFuYWdlciIgaW4gd2luZG93KQogICAgICAgIHBhZ2VOYXZpZ2F0aW9uKCk7CiAgICBlbHNlIHsKICAgICAgICBpZighKCJwYWdlTWFuYWdlckhhc0xvYWRlZCIgaW4gd2luZG93KSkKICAgICAgICAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkID0gW107CiAgICAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkLnB1c2gocGFnZU5hdmlnYXRpb24pOwogICAgfQoKfSgpKTsK";

/**
 * This module measures properties of webpage navigation.
 *
 * @module webScience.pageNavigation
 */

/**
 * Additional information about the page data event.
 * @typedef {Object} PageDataDetails
 * @property {number} pageId - The ID for the page, unique across browsing sessions.
 * @property {number} tabId - The ID for the tab containing the page, unique to the browsing session.
 * @property {number} windowId - The ID for the window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @property {string} url - The URL of the page loading in the tab, without any hash.
 * @property {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @property {number} pageVisitStartTime - The time when the underlying event fired.
 * @property {boolean} privateWindow - Whether the page is in a private window.
 * @interface
 */

/**
 * A callback function for the page data event.
 * @callback pageDataCallback
 * @param {PageDataDetails} details - Additional information about the page data event.
 */

/**
 * Options when adding a page data event listener.
 * @typedef {Object} PageDataOptions
 * @property {Array<string>} [matchPattern=[]] - The webpages of interest for the measurement, specified with WebExtensions match patterns.
 * @property {boolean} [privateWindows=false] - Whether to measure pages in private windows.
 */

/**
 * Function to start measurement when a listener is added
 * TODO: deal with multiple listeners with different match patterns
 * @param {pageDataCallback} listener - new listener being added
 * @param {PageDataOptions} options - configuration for the events to be sent to this listener
 */
function addListener(listener, options) {
    startMeasurement(options);
}

/**
 * Function to end measurement when the last listener is removed
 * @param {pageDataCallback} listener - listener that was just removed
 */
function removeListener(listener) {
    if (!this.hasAnyListeners()) {
        stopMeasurement();
    }
}

/**
 * @type {Events.Event<pageDataCallback, PageDataOptions>}
 */
const onPageData = new Event({
    addListenerCallback: addListener,
    removeListenerCallback: removeListener});

/**
 * The registered page navigation content script.
 * @type {RegisteredContentScript|null}
 */
let registeredContentScript = null;

/**
 * Whether to notify the page data listener about private windows.
 */
let notifyAboutPrivateWindows = false;

/**
 * A function that is called when the content script sends a page data event message.
 * @param {PageData} pageData - Information about the page.
 */
function pageDataListener(pageData) {
    // If the page is in a private window and the module should not measure private windows,
    // ignore the page
    if(!notifyAboutPrivateWindows && pageData.privateWindow)
        return;

    // Delete the type string from the content script message
    // There isn't (yet) a good way to document this in JSDoc, because there isn't support
    // for object inheritance
    delete pageData.type;

    onPageData.notifyListeners([ pageData ]);
}

/**
 * Start a navigation measurement. Note that only one measurement is currently supported per extension.
 * @param {PageDataOptions} options - A set of options for the measurement.
 */
async function startMeasurement({
    matchPatterns = [ ],
    privateWindows = false
}) {
    await initialize$1();

    notifyAboutPrivateWindows = privateWindows;

    registeredContentScript = await browser.contentScripts.register({
        matches: matchPatterns,
        js: [{
            code: unpack(pageNavigationContentScript)
        }],
        runAt: "document_start"
    });

    registerListener("webScience.pageNavigation.pageData", pageDataListener,
    {
        pageId: "string",
        url: "string",
        referrer: "string",
        pageVisitStartTime: "number",
        pageVisitStopTime: "number",
        attentionDuration: "number",
        audioDuration: "number",
        attentionAndAudioDuration: "number",
        maxRelativeScrollDepth: "number",
        privateWindow: "boolean"
    });
}

/**
 * Stop a navigation measurement.
 */
function stopMeasurement() {
    unregisterListener("webScience.pageNavigation.pageData", pageDataListener);
    registeredContentScript.unregister();
    registeredContentScript = null;
    notifyAboutPrivateWindows = false;
}

/**
 * This module stores Article Contents from pages
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.ArticleContents
 */

const debugLog$1 = getDebuggingLog();

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
let storage = null;
let initialized$3 = false;

let listeners = [];

/**
 * Start an article contents study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function startMeasurement$1 ({
    domains = []
}) {

  if (initialized$3){
    return   
  }
  initialized$3 = true;

  storage = await new KeyValueStorage('WebScience.Measurements.ArticleContents');

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new Counter('WebScience.Measurements.ArticleContents.nextPageId')).initialize();

  // Build the URL matching set for content scripts
  let contentScriptMatches = domainsToMatchPatternsWithPath(domains, true);

  // Register the content script for storing Article Contents
  await browser.contentScripts.register({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/content-scripts/Readability.js'
      },
      {
        file: '/src/content-scripts/page-content.js'
      }
    ],
    runAt: 'document_idle'
  });

  // Handle page depth events
  registerListener('WebScience.articleContent', async (depthInfo, sender, sendResponse) => {
    let pageId = await nextPageIdCounter.getAndIncrement();
    depthInfo.url = normalizeUrl(sender.url);
    depthInfo.tabId = sender.tab.id;
    for (let listener of listeners) { listener(depthInfo); }
    storage.set(pageId.toString(), depthInfo);
    debugLog$1(JSON.stringify(depthInfo));
  }, {
    type: 'string',
    url: 'string',
    title: 'string',
    text: 'string'
  });
}

/**
 * This is a copy from web-science matching.js
 * But it adds a /* to the end, so that it only matches domains with paths
 * i.e. matches sfchronicle.com/path/to/article
 * Doesn't match sfchronicle.com (I don't want the text contents of the homepage)
 * 
 * Generates a set of match patterns for a set of domains. The match patterns will use the special
 * "*" wildcard scheme (matching "http", "https", "ws", and "wss") and the special "/*" wildcard
 * path (matching any path).
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string[]} Match patterns for the domains in the set.
 */
function domainsToMatchPatternsWithPath(domains, matchSubdomains = true) {
  return domains.map(domain => { return `*://${matchSubdomains ? "*." : ""}${domain}/*/*` });
}

/**
 * This module measures advertisement info on news pages
 *
 * Brian Chivers, 3/19/2021
 * @module WebScience.Measurements.Advertisements
 */

const debugLog$2 = getDebuggingLog();

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
let storage$1 = null;
let initialized$4 = false;

let listeners$1 = [];

/**
 * Start an advertisements study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function startMeasurement$2 ({
  domains = []
}) {
  if (initialized$4) {
    return
  }
  initialized$4 = true;

  storage$1 = await new KeyValueStorage('WebScience.Measurements.Advertisements');

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new Counter('WebScience.Measurements.Advertisements.nextPageId')).initialize();

  // Build the URL matching set for content scripts
  let contentScriptMatches = domainsToMatchPatterns(domains, true);

  // Register the content script for measuring advertisement info
  // The CSS selectors file is needed to find ads on the page
  await browser.contentScripts.register ({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/ad_css_selectors.js'
      },
      {
        file: '/src/content-scripts/page-ads.js'
      }
      ],
    runAt: 'document_idle'
  });

  // Handle page depth events
  registerListener('WebScience.advertisements', async (depthInfo, sender, sendResponse) => {
    let pageId = await nextPageIdCounter.getAndIncrement();
    depthInfo.url = normalizeUrl(sender.url);
    depthInfo.tabId = sender.tab.id;
    for (var listener of listeners$1) { listener(depthInfo); }
      storage$1.set(pageId.toString(), depthInfo);
      debugLog$2(JSON.stringify(depthInfo));
    }, {
      type: 'string',
      url: 'string',
      ads: 'object'
    }
  );
}

// domains.js - Brian Chivers, 3/19/2021
//
// This file contains domain names that we care about.
// Information from this study will only be collected about
// the below domains.
const destinationDomains = [
    "cnn.com",
    "sfchronicle.com",
    "yourbigsky.com",
    "northpimanews.com"
];

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function initialize$2 () {

  // Configure navigation collection
  startMeasurement({
    domains: destinationDomains,
    trackUserAttention: true
  });

  // Configure link exposure collection
  // WebScience.Utilities.LinkResolution.initialize()
  // WebScience.Measurements.LinkExposure.startMeasurement({
  // domains: destinationDomains,
  // privateWindows: false
  // })

  // Start Article Contents Module
  startMeasurement$1({
    domains: destinationDomains
  });

  // Start Advertisements Module
  startMeasurement$2({
    domains: destinationDomains
  });
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const rally = new Rally();
rally.initialize(
  // A sample key id used for encrypting data.
  "sample-invalid-key-id",
  // A sample *valid* JWK object for the encryption.
  {
    "kty":"EC",
    "crv":"P-256",
    "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
    "kid":"Public key used in JWS spec Appendix A.3 example"
  },
  // The following constant is automatically provided by
  // the build system.
  true,
).then(resolve => {
  // Initialize the study and start it.
  initialize$2();
}, reject =>{
  // Do not start the study in this case. Something
  // went wrong.
});