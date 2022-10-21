(() => {
  var __webpack_modules__ = {
    7116: function(module, exports) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (function(global, factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ module ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
          __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          var mod;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, (function(module) {
        "use strict";
        if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
          const wrapAPIs = extensionAPIs => {
            const apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: false
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: true
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
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
            const isThenable = value => value && typeof value === "object" && typeof value.then === "function";
            const makeCallback = (promise, metadata) => (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) {
                promise.reject(new Error(extensionAPIs.runtime.lastError.message));
              } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                promise.resolve(callbackArgs[0]);
              } else {
                promise.resolve(callbackArgs);
              }
            };
            const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => function asyncFunctionWrapper(target, ...args) {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise(((resolve, reject) => {
                if (metadata.fallbackToNoCallback) {
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                    target[name](...args);
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
              }));
            };
            const wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
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
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
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
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
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
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            }));
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve => {
                  wrappedSendResponse = function(response) {
                    if (!loggedSendResponseDeprecationWarning) {
                      console.warn(SEND_RESPONSE_DEPRECATION_WARNING, (new Error).stack);
                      loggedSendResponseDeprecationWarning = true;
                    }
                    didCallSendResponse = true;
                    resolve(response);
                  };
                }));
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = promise => {
                  promise.then((msg => {
                    sendResponse(msg);
                  }), (error => {
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
                  })).catch((err => {
                    console.error("Failed to send onMessage rejected reply", err);
                  }));
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            }));
            const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
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
              return new Promise(((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              }));
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
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
          }
          module.exports = wrapAPIs(chrome);
        } else {
          module.exports = browser;
        }
      }));
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var browser_polyfill = __webpack_require__(7116);
    var browser_polyfill_default = __webpack_require__.n(browser_polyfill);
    const WINDOW_PROVIDER_TARGET = "tally-window-provider";
    const PROVIDER_BRIDGE_TARGET = "tally-provider-bridge";
    const EXTERNAL_PORT_NAME = "tally-external";
    const INTERNAL_PORT_NAME = "tally-internal";
    function getType(arg) {
      return Object.prototype.toString.call(arg).slice("[object ".length, -1);
    }
    function runtime_typechecks_isObject(arg) {
      return getType(arg) === "Object";
    }
    function isArray(arg) {
      return Array.isArray(arg);
    }
    function isUndefined(arg) {
      return typeof arg === "undefined";
    }
    function runtime_typechecks_isString(arg) {
      return getType(arg) === "String";
    }
    function runtime_typechecks_isNumber(arg) {
      return getType(arg) === "Number";
    }
    function isMessageEvent(arg) {
      return arg instanceof MessageEvent;
    }
    function isRPCRequestParamsType(arg) {
      return runtime_typechecks_isObject(arg) || isArray(arg);
    }
    function isWindowResponseEvent(arg) {
      return isMessageEvent(arg) && runtime_typechecks_isString(arg.origin) && !isUndefined(arg.source) && runtime_typechecks_isObject(arg.data) && runtime_typechecks_isString(arg.data.id) && runtime_typechecks_isString(arg.data.target) && !isUndefined(arg.data.result);
    }
    function isPortResponseEvent(arg) {
      return runtime_typechecks_isObject(arg) && runtime_typechecks_isString(arg.id) && !isUndefined(arg.result);
    }
    const AllowedQueryParamPage = {
      signTransaction: "/sign-transaction",
      dappPermission: "/dapp-permission",
      signData: "/sign-data",
      personalSignData: "/personal-sign"
    };
    function isAllowedQueryParamPage(url) {
      return Object.values(AllowedQueryParamPage).includes(url);
    }
    function isTallyInternalCommunication(arg) {
      return runtime_typechecks_isObject(arg) && arg.id === "tallyHo";
    }
    function isTallyConfigPayload(arg) {
      return runtime_typechecks_isObject(arg) && arg.method === "tally_getConfig";
    }
    function isTallyAccountPayload(arg) {
      return runtime_typechecks_isObject(arg) && arg.method === "tally_accountChanged" && isArray(arg.address);
    }
    const EIP1193_ERROR_CODES = {
      userRejectedRequest: {
        code: 4001,
        message: "The user rejected the request."
      },
      unauthorized: {
        code: 4100,
        message: "The requested method and/or account has not been authorized by the user."
      },
      unsupportedMethod: {
        code: 4200,
        message: "The Provider does not support the requested method."
      },
      disconnected: {
        code: 4900,
        message: "The Provider is disconnected from all chains."
      },
      chainDisconnected: {
        code: 4901,
        message: "The Provider is not connected to the requested chain."
      }
    };
    class EIP1193Error extends Error {
      constructor(eip1193Error) {
        super(eip1193Error.message);
        this.eip1193Error = eip1193Error;
      }
      toJSON() {
        return this.eip1193Error;
      }
    }
    function isEIP1193ErrorCodeNumber(code) {
      return isNumber(code) && Object.values(EIP1193_ERROR_CODES).map((e => e.code)).includes(code);
    }
    function isEIP1193Error(arg) {
      return isObject(arg) && isNumber(arg.code) && isEIP1193ErrorCodeNumber(arg.code) && isString(arg.message);
    }
    const windowOriginAtLoadTime = window.location.origin;
    const INJECTED_WINDOW_PROVIDER_SOURCE = "(() => {\n  \"use strict\";\n  var __webpack_modules__ = {\n    7187: module => {\n      var R = typeof Reflect === \"object\" ? Reflect : null;\n      var ReflectApply = R && typeof R.apply === \"function\" ? R.apply : function ReflectApply(target, receiver, args) {\n        return Function.prototype.apply.call(target, receiver, args);\n      };\n      var ReflectOwnKeys;\n      if (R && typeof R.ownKeys === \"function\") {\n        ReflectOwnKeys = R.ownKeys;\n      } else if (Object.getOwnPropertySymbols) {\n        ReflectOwnKeys = function ReflectOwnKeys(target) {\n          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n        };\n      } else {\n        ReflectOwnKeys = function ReflectOwnKeys(target) {\n          return Object.getOwnPropertyNames(target);\n        };\n      }\n      function ProcessEmitWarning(warning) {\n        if (console && console.warn) console.warn(warning);\n      }\n      var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n        return value !== value;\n      };\n      function EventEmitter() {\n        EventEmitter.init.call(this);\n      }\n      module.exports = EventEmitter;\n      module.exports.once = once;\n      EventEmitter.EventEmitter = EventEmitter;\n      EventEmitter.prototype._events = undefined;\n      EventEmitter.prototype._eventsCount = 0;\n      EventEmitter.prototype._maxListeners = undefined;\n      var defaultMaxListeners = 10;\n      function checkListener(listener) {\n        if (typeof listener !== \"function\") {\n          throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n        }\n      }\n      Object.defineProperty(EventEmitter, \"defaultMaxListeners\", {\n        enumerable: true,\n        get: function() {\n          return defaultMaxListeners;\n        },\n        set: function(arg) {\n          if (typeof arg !== \"number\" || arg < 0 || NumberIsNaN(arg)) {\n            throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + \".\");\n          }\n          defaultMaxListeners = arg;\n        }\n      });\n      EventEmitter.init = function() {\n        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        }\n        this._maxListeners = this._maxListeners || undefined;\n      };\n      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n        if (typeof n !== \"number\" || n < 0 || NumberIsNaN(n)) {\n          throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + \".\");\n        }\n        this._maxListeners = n;\n        return this;\n      };\n      function _getMaxListeners(that) {\n        if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n        return that._maxListeners;\n      }\n      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n        return _getMaxListeners(this);\n      };\n      EventEmitter.prototype.emit = function emit(type) {\n        var args = [];\n        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n        var doError = type === \"error\";\n        var events = this._events;\n        if (events !== undefined) doError = doError && events.error === undefined; else if (!doError) return false;\n        if (doError) {\n          var er;\n          if (args.length > 0) er = args[0];\n          if (er instanceof Error) {\n            throw er;\n          }\n          var err = new Error(\"Unhandled error.\" + (er ? \" (\" + er.message + \")\" : \"\"));\n          err.context = er;\n          throw err;\n        }\n        var handler = events[type];\n        if (handler === undefined) return false;\n        if (typeof handler === \"function\") {\n          ReflectApply(handler, this, args);\n        } else {\n          var len = handler.length;\n          var listeners = arrayClone(handler, len);\n          for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);\n        }\n        return true;\n      };\n      function _addListener(target, type, listener, prepend) {\n        var m;\n        var events;\n        var existing;\n        checkListener(listener);\n        events = target._events;\n        if (events === undefined) {\n          events = target._events = Object.create(null);\n          target._eventsCount = 0;\n        } else {\n          if (events.newListener !== undefined) {\n            target.emit(\"newListener\", type, listener.listener ? listener.listener : listener);\n            events = target._events;\n          }\n          existing = events[type];\n        }\n        if (existing === undefined) {\n          existing = events[type] = listener;\n          ++target._eventsCount;\n        } else {\n          if (typeof existing === \"function\") {\n            existing = events[type] = prepend ? [ listener, existing ] : [ existing, listener ];\n          } else if (prepend) {\n            existing.unshift(listener);\n          } else {\n            existing.push(listener);\n          }\n          m = _getMaxListeners(target);\n          if (m > 0 && existing.length > m && !existing.warned) {\n            existing.warned = true;\n            var w = new Error(\"Possible EventEmitter memory leak detected. \" + existing.length + \" \" + String(type) + \" listeners \" + \"added. Use emitter.setMaxListeners() to \" + \"increase limit\");\n            w.name = \"MaxListenersExceededWarning\";\n            w.emitter = target;\n            w.type = type;\n            w.count = existing.length;\n            ProcessEmitWarning(w);\n          }\n        }\n        return target;\n      }\n      EventEmitter.prototype.addListener = function addListener(type, listener) {\n        return _addListener(this, type, listener, false);\n      };\n      EventEmitter.prototype.on = EventEmitter.prototype.addListener;\n      EventEmitter.prototype.prependListener = function prependListener(type, listener) {\n        return _addListener(this, type, listener, true);\n      };\n      function onceWrapper() {\n        if (!this.fired) {\n          this.target.removeListener(this.type, this.wrapFn);\n          this.fired = true;\n          if (arguments.length === 0) return this.listener.call(this.target);\n          return this.listener.apply(this.target, arguments);\n        }\n      }\n      function _onceWrap(target, type, listener) {\n        var state = {\n          fired: false,\n          wrapFn: undefined,\n          target,\n          type,\n          listener\n        };\n        var wrapped = onceWrapper.bind(state);\n        wrapped.listener = listener;\n        state.wrapFn = wrapped;\n        return wrapped;\n      }\n      EventEmitter.prototype.once = function once(type, listener) {\n        checkListener(listener);\n        this.on(type, _onceWrap(this, type, listener));\n        return this;\n      };\n      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n        checkListener(listener);\n        this.prependListener(type, _onceWrap(this, type, listener));\n        return this;\n      };\n      EventEmitter.prototype.removeListener = function removeListener(type, listener) {\n        var list, events, position, i, originalListener;\n        checkListener(listener);\n        events = this._events;\n        if (events === undefined) return this;\n        list = events[type];\n        if (list === undefined) return this;\n        if (list === listener || list.listener === listener) {\n          if (--this._eventsCount === 0) this._events = Object.create(null); else {\n            delete events[type];\n            if (events.removeListener) this.emit(\"removeListener\", type, list.listener || listener);\n          }\n        } else if (typeof list !== \"function\") {\n          position = -1;\n          for (i = list.length - 1; i >= 0; i--) {\n            if (list[i] === listener || list[i].listener === listener) {\n              originalListener = list[i].listener;\n              position = i;\n              break;\n            }\n          }\n          if (position < 0) return this;\n          if (position === 0) list.shift(); else {\n            spliceOne(list, position);\n          }\n          if (list.length === 1) events[type] = list[0];\n          if (events.removeListener !== undefined) this.emit(\"removeListener\", type, originalListener || listener);\n        }\n        return this;\n      };\n      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n        var listeners, events, i;\n        events = this._events;\n        if (events === undefined) return this;\n        if (events.removeListener === undefined) {\n          if (arguments.length === 0) {\n            this._events = Object.create(null);\n            this._eventsCount = 0;\n          } else if (events[type] !== undefined) {\n            if (--this._eventsCount === 0) this._events = Object.create(null); else delete events[type];\n          }\n          return this;\n        }\n        if (arguments.length === 0) {\n          var keys = Object.keys(events);\n          var key;\n          for (i = 0; i < keys.length; ++i) {\n            key = keys[i];\n            if (key === \"removeListener\") continue;\n            this.removeAllListeners(key);\n          }\n          this.removeAllListeners(\"removeListener\");\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n          return this;\n        }\n        listeners = events[type];\n        if (typeof listeners === \"function\") {\n          this.removeListener(type, listeners);\n        } else if (listeners !== undefined) {\n          for (i = listeners.length - 1; i >= 0; i--) {\n            this.removeListener(type, listeners[i]);\n          }\n        }\n        return this;\n      };\n      function _listeners(target, type, unwrap) {\n        var events = target._events;\n        if (events === undefined) return [];\n        var evlistener = events[type];\n        if (evlistener === undefined) return [];\n        if (typeof evlistener === \"function\") return unwrap ? [ evlistener.listener || evlistener ] : [ evlistener ];\n        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n      }\n      EventEmitter.prototype.listeners = function listeners(type) {\n        return _listeners(this, type, true);\n      };\n      EventEmitter.prototype.rawListeners = function rawListeners(type) {\n        return _listeners(this, type, false);\n      };\n      EventEmitter.listenerCount = function(emitter, type) {\n        if (typeof emitter.listenerCount === \"function\") {\n          return emitter.listenerCount(type);\n        } else {\n          return listenerCount.call(emitter, type);\n        }\n      };\n      EventEmitter.prototype.listenerCount = listenerCount;\n      function listenerCount(type) {\n        var events = this._events;\n        if (events !== undefined) {\n          var evlistener = events[type];\n          if (typeof evlistener === \"function\") {\n            return 1;\n          } else if (evlistener !== undefined) {\n            return evlistener.length;\n          }\n        }\n        return 0;\n      }\n      EventEmitter.prototype.eventNames = function eventNames() {\n        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n      };\n      function arrayClone(arr, n) {\n        var copy = new Array(n);\n        for (var i = 0; i < n; ++i) copy[i] = arr[i];\n        return copy;\n      }\n      function spliceOne(list, index) {\n        for (;index + 1 < list.length; index++) list[index] = list[index + 1];\n        list.pop();\n      }\n      function unwrapListeners(arr) {\n        var ret = new Array(arr.length);\n        for (var i = 0; i < ret.length; ++i) {\n          ret[i] = arr[i].listener || arr[i];\n        }\n        return ret;\n      }\n      function once(emitter, name) {\n        return new Promise((function(resolve, reject) {\n          function errorListener(err) {\n            emitter.removeListener(name, resolver);\n            reject(err);\n          }\n          function resolver() {\n            if (typeof emitter.removeListener === \"function\") {\n              emitter.removeListener(\"error\", errorListener);\n            }\n            resolve([].slice.call(arguments));\n          }\n          eventTargetAgnosticAddListener(emitter, name, resolver, {\n            once: true\n          });\n          if (name !== \"error\") {\n            addErrorHandlerIfEventEmitter(emitter, errorListener, {\n              once: true\n            });\n          }\n        }));\n      }\n      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n        if (typeof emitter.on === \"function\") {\n          eventTargetAgnosticAddListener(emitter, \"error\", handler, flags);\n        }\n      }\n      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n        if (typeof emitter.on === \"function\") {\n          if (flags.once) {\n            emitter.once(name, listener);\n          } else {\n            emitter.on(name, listener);\n          }\n        } else if (typeof emitter.addEventListener === \"function\") {\n          emitter.addEventListener(name, (function wrapListener(arg) {\n            if (flags.once) {\n              emitter.removeEventListener(name, wrapListener);\n            }\n            listener(arg);\n          }));\n        } else {\n          throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + typeof emitter);\n        }\n      }\n    }\n  };\n  var __webpack_module_cache__ = {};\n  function __webpack_require__(moduleId) {\n    var cachedModule = __webpack_module_cache__[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    var module = __webpack_module_cache__[moduleId] = {\n      exports: {}\n    };\n    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n    return module.exports;\n  }\n  var __webpack_exports__ = {};\n  (() => {\n    const WINDOW_PROVIDER_TARGET = \"tally-window-provider\";\n    const PROVIDER_BRIDGE_TARGET = \"tally-provider-bridge\";\n    const EXTERNAL_PORT_NAME = \"tally-external\";\n    const INTERNAL_PORT_NAME = \"tally-internal\";\n    function getType(arg) {\n      return Object.prototype.toString.call(arg).slice(\"[object \".length, -1);\n    }\n    function isObject(arg) {\n      return getType(arg) === \"Object\";\n    }\n    function isArray(arg) {\n      return Array.isArray(arg);\n    }\n    function isUndefined(arg) {\n      return typeof arg === \"undefined\";\n    }\n    function isString(arg) {\n      return getType(arg) === \"String\";\n    }\n    function isNumber(arg) {\n      return getType(arg) === \"Number\";\n    }\n    function isMessageEvent(arg) {\n      return arg instanceof MessageEvent;\n    }\n    function isRPCRequestParamsType(arg) {\n      return isObject(arg) || isArray(arg);\n    }\n    function isWindowResponseEvent(arg) {\n      return isMessageEvent(arg) && isString(arg.origin) && !isUndefined(arg.source) && isObject(arg.data) && isString(arg.data.id) && isString(arg.data.target) && !isUndefined(arg.data.result);\n    }\n    function isPortResponseEvent(arg) {\n      return isObject(arg) && isString(arg.id) && !isUndefined(arg.result);\n    }\n    const AllowedQueryParamPage = {\n      signTransaction: \"/sign-transaction\",\n      dappPermission: \"/dapp-permission\",\n      signData: \"/sign-data\",\n      personalSignData: \"/personal-sign\"\n    };\n    function isAllowedQueryParamPage(url) {\n      return Object.values(AllowedQueryParamPage).includes(url);\n    }\n    function isTallyInternalCommunication(arg) {\n      return isObject(arg) && arg.id === \"tallyHo\";\n    }\n    function isTallyConfigPayload(arg) {\n      return isObject(arg) && arg.method === \"tally_getConfig\";\n    }\n    function isTallyAccountPayload(arg) {\n      return isObject(arg) && arg.method === \"tally_accountChanged\" && isArray(arg.address);\n    }\n    const EIP1193_ERROR_CODES = {\n      userRejectedRequest: {\n        code: 4001,\n        message: \"The user rejected the request.\"\n      },\n      unauthorized: {\n        code: 4100,\n        message: \"The requested method and/or account has not been authorized by the user.\"\n      },\n      unsupportedMethod: {\n        code: 4200,\n        message: \"The Provider does not support the requested method.\"\n      },\n      disconnected: {\n        code: 4900,\n        message: \"The Provider is disconnected from all chains.\"\n      },\n      chainDisconnected: {\n        code: 4901,\n        message: \"The Provider is not connected to the requested chain.\"\n      }\n    };\n    class EIP1193Error extends Error {\n      constructor(eip1193Error) {\n        super(eip1193Error.message);\n        this.eip1193Error = eip1193Error;\n      }\n      toJSON() {\n        return this.eip1193Error;\n      }\n    }\n    function isEIP1193ErrorCodeNumber(code) {\n      return isNumber(code) && Object.values(EIP1193_ERROR_CODES).map((e => e.code)).includes(code);\n    }\n    function isEIP1193Error(arg) {\n      return isObject(arg) && isNumber(arg.code) && isEIP1193ErrorCodeNumber(arg.code) && isString(arg.message);\n    }\n    var events = __webpack_require__(7187);\n    function _defineProperty(obj, key, value) {\n      if (key in obj) {\n        Object.defineProperty(obj, key, {\n          value,\n          enumerable: true,\n          configurable: true,\n          writable: true\n        });\n      } else {\n        obj[key] = value;\n      }\n      return obj;\n    }\n    const impersonateMetamaskWhitelist = [ \"opensea.io\", \"app.lyra.finance\", \"matcha.xyz\", \"bridge.umbria.network\", \"galaxy.eco\", \"galxe.com\", \"dydx.exchange\", \"app.euler.finance\", \"kwenta.io\", \"stargate.finance\", \"etherscan.io\", \"swapr.eth.link\", \"apex.exchange\" ];\n    class TallyWindowProvider extends events.EventEmitter {\n      constructor(transport) {\n        super();\n        _defineProperty(this, \"chainId\", \"0x1\");\n        _defineProperty(this, \"connected\", false);\n        _defineProperty(this, \"isTally\", true);\n        _defineProperty(this, \"isMetaMask\", false);\n        _defineProperty(this, \"isWeb3\", true);\n        _defineProperty(this, \"bridgeListeners\", new Map);\n        _defineProperty(this, \"providerInfo\", {\n          label: \"Tally Ho!\",\n          injectedNamespace: \"tally\",\n          iconURL: \"TODO\",\n          identityFlag: \"isTally\",\n          checkIdentity: provider => !!provider && !!provider.isTally\n        });\n        _defineProperty(this, \"requestID\", 0n);\n        this.transport = transport;\n        const internalListener = event => {\n          let result;\n          if (isWindowResponseEvent(event) && isTallyInternalCommunication(event.data)) {\n            if (event.origin !== this.transport.origin || event.source !== window || event.data.target !== WINDOW_PROVIDER_TARGET) {\n              return;\n            }\n            ({result} = event.data);\n          } else if (isPortResponseEvent(event) && isTallyInternalCommunication(event)) {\n            ({result} = event);\n          } else {\n            return;\n          }\n          if (isTallyConfigPayload(result)) {\n            var _window$walletRouter;\n            (_window$walletRouter = window.walletRouter) === null || _window$walletRouter === void 0 ? void 0 : _window$walletRouter.shouldSetTallyForCurrentProvider(result.defaultWallet, result.shouldReload);\n            if (impersonateMetamaskWhitelist.some((host => window.location.host.includes(host)))) {\n              this.isMetaMask = result.defaultWallet;\n            }\n            if (result.chainId && result.chainId !== this.chainId) {\n              this.handleChainIdChange.bind(this)(result.chainId);\n            }\n          } else if (isTallyAccountPayload(result)) {\n            this.handleAddressChange.bind(this)(result.address);\n          }\n        };\n        this.transport.addEventListener(internalListener);\n      }\n      async enable() {\n        return this.request({\n          method: \"eth_requestAccounts\"\n        });\n      }\n      isConnected() {\n        return this.connected;\n      }\n      send(methodOrRequest, paramsOrCallback) {\n        if (typeof methodOrRequest === \"string\" && typeof paramsOrCallback !== \"function\") {\n          return this.request({\n            method: methodOrRequest,\n            params: paramsOrCallback\n          });\n        }\n        if (isObject(methodOrRequest) && typeof paramsOrCallback === \"function\") {\n          return this.sendAsync(methodOrRequest, paramsOrCallback);\n        }\n        return Promise.reject(new Error(\"Unsupported function parameters\"));\n      }\n      sendAsync(request, callback) {\n        return this.request(request).then((response => callback(null, {\n          result: response,\n          id: request.id,\n          jsonrpc: request.jsonrpc\n        })), (error => callback(error, null)));\n      }\n      request(arg) {\n        const {method, params = []} = arg;\n        if (typeof method !== \"string\") {\n          return Promise.reject(new Error(`unsupported method type: ${method}`));\n        }\n        const sendData = {\n          id: this.requestID.toString(),\n          target: PROVIDER_BRIDGE_TARGET,\n          request: {\n            method,\n            params\n          }\n        };\n        this.requestID += 1n;\n        this.transport.postMessage(sendData);\n        return new Promise(((resolve, reject) => {\n          const listener = event => {\n            let id;\n            let result;\n            if (isWindowResponseEvent(event)) {\n              if (event.origin !== this.transport.origin || event.source !== window || event.data.target !== WINDOW_PROVIDER_TARGET) {\n                return;\n              }\n              ({id, result} = event.data);\n            } else if (isPortResponseEvent(event)) {\n              ({id, result} = event);\n            } else {\n              return;\n            }\n            if (sendData.id !== id) return;\n            this.transport.removeEventListener(this.bridgeListeners.get(sendData.id));\n            this.bridgeListeners.delete(sendData.id);\n            const {method: sentMethod} = sendData.request;\n            if (isEIP1193Error(result)) {\n              reject(result);\n            }\n            if (!this.connected) {\n              this.connected = true;\n              this.emit(\"connect\", {\n                chainId: this.chainId\n              });\n            }\n            if (sentMethod === \"wallet_switchEthereumChain\" || sentMethod === \"wallet_addEthereumChain\") {\n              if (result === null) {\n                this.handleChainIdChange.bind(this)(sendData.request.params[0].chainId);\n              }\n            } else if (sentMethod === \"eth_chainId\" || sentMethod === \"net_version\") {\n              if (typeof result === \"string\" && Number(this.chainId) !== Number(result)) {\n                this.handleChainIdChange.bind(this)(result);\n              }\n            } else if ((sentMethod === \"eth_accounts\" || sentMethod === \"eth_requestAccounts\") && Array.isArray(result) && result.length !== 0) {\n              this.handleAddressChange.bind(this)(result);\n            }\n            resolve(result);\n          };\n          this.bridgeListeners.set(sendData.id, listener);\n          this.transport.addEventListener(this.bridgeListeners.get(sendData.id));\n        }));\n      }\n      handleChainIdChange(chainId) {\n        this.chainId = chainId;\n        this.emit(\"chainChanged\", chainId);\n        this.emit(\"networkChanged\", Number(chainId).toString());\n      }\n      handleAddressChange(address) {\n        if (this.selectedAddress !== address[0]) {\n          this.selectedAddress = address[0];\n          this.emit(\"accountsChanged\", address);\n        }\n      }\n    }\n    Object.defineProperty(window, \"tally\", {\n      value: new TallyWindowProvider({\n        postMessage: data => window.postMessage(data, window.location.origin),\n        addEventListener: fn => window.addEventListener(\"message\", fn, false),\n        removeEventListener: fn => window.removeEventListener(\"message\", fn, false),\n        origin: window.location.origin\n      }),\n      writable: false,\n      configurable: false\n    });\n    if (!window.walletRouter) {\n      Object.defineProperty(window, \"walletRouter\", {\n        value: {\n          currentProvider: window.tally,\n          lastInjectedProvider: window.ethereum,\n          tallyProvider: window.tally,\n          providers: [ ...new Set([ window.tally, ...window.ethereum ? Array.isArray(window.ethereum.providers) ? [ ...window.ethereum.providers, window.ethereum ] : [ window.ethereum ] : [], window.tally ]) ],\n          shouldSetTallyForCurrentProvider(shouldSetTally, shouldReload = false) {\n            if (shouldSetTally && this.currentProvider !== this.tallyProvider) {\n              this.currentProvider = this.tallyProvider;\n            } else if (!shouldSetTally && this.currentProvider === this.tallyProvider) {\n              this.currentProvider = this.lastInjectedProvider ?? this.tallyProvider;\n            }\n            if (shouldReload && (window.location.href.includes(\"app.uniswap.org\") || window.location.href.includes(\"galxe.com\"))) {\n              setTimeout((() => {\n                window.location.reload();\n              }), 1e3);\n            }\n          },\n          getProviderInfo(provider) {\n            return provider.providerInfo || {\n              label: \"Injected Provider\",\n              injectedNamespace: \"ethereum\",\n              iconURL: \"TODO\"\n            };\n          },\n          setSelectedProvider() {},\n          addProvider(newProvider) {\n            if (!this.providers.includes(newProvider)) {\n              this.providers.push(newProvider);\n            }\n            this.lastInjectedProvider = newProvider;\n          }\n        },\n        writable: false,\n        configurable: false\n      });\n    }\n    let cachedWindowEthereumProxy;\n    let cachedCurrentProvider;\n    Object.defineProperty(window, \"ethereum\", {\n      get() {\n        if (!window.walletRouter) {\n          throw new Error(\"window.walletRouter is expected to be set to change the injected provider on window.ethereum.\");\n        }\n        if (cachedWindowEthereumProxy && cachedCurrentProvider === window.walletRouter.currentProvider) {\n          return cachedWindowEthereumProxy;\n        }\n        cachedWindowEthereumProxy = new Proxy(window.walletRouter.currentProvider, {\n          get(target, prop, receiver) {\n            if (window.walletRouter && !(prop in window.walletRouter.currentProvider) && prop in window.walletRouter) {\n              if ((window.location.href.includes(\"app.uniswap.org\") || window.location.href.includes(\"kwenta.io\") || window.location.href.includes(\"galxe.com\")) && prop === \"providers\") {\n                return null;\n              }\n              return window.walletRouter[prop];\n            }\n            return Reflect.get(target, prop, receiver);\n          }\n        });\n        cachedCurrentProvider = window.walletRouter.currentProvider;\n        return cachedWindowEthereumProxy;\n      },\n      set(newProvider) {\n        var _window$walletRouter;\n        (_window$walletRouter = window.walletRouter) === null || _window$walletRouter === void 0 ? void 0 : _window$walletRouter.addProvider(newProvider);\n      },\n      configurable: false\n    });\n  })();\n})();\n//# sourceMappingURL=window-provider.js.map";
    function connectProviderBridge() {
      const port = browser_polyfill_default().runtime.connect({
        name: EXTERNAL_PORT_NAME
      });
      window.addEventListener("message", (event => {
        if (event.origin === windowOriginAtLoadTime && event.source === window && event.data.target === PROVIDER_BRIDGE_TARGET) {
          if (event.data.request.method === "eth_requestAccounts") {
            const faviconElements = window.document.querySelectorAll("link[rel*='icon']");
            const largestFavicon = [ ...faviconElements ].sort((el => {
              var _el$sizes;
              return parseInt((_el$sizes = el.sizes) === null || _el$sizes === void 0 ? void 0 : _el$sizes.toString().split("x")[0], 10);
            }))[0];
            const faviconUrl = (largestFavicon === null || largestFavicon === void 0 ? void 0 : largestFavicon.href) ?? "";
            const {title} = window.document ?? "";
            event.data.request.params.push(title, faviconUrl);
          }
          console.log(`%c content: inpage > background: ${JSON.stringify(event.data)}`, "background: #bada55; color: #222");
          port.postMessage(event.data);
        }
      }));
      port.onMessage.addListener((data => {
        console.log(`%c content: background > inpage: ${JSON.stringify(data)}`, "background: #222; color: #bada55");
        window.postMessage({
          ...data,
          target: WINDOW_PROVIDER_TARGET
        }, windowOriginAtLoadTime);
      }));
      port.postMessage({
        request: {
          method: "tally_getConfig",
          origin: windowOriginAtLoadTime
        }
      });
    }
    function injectTallyWindowProvider() {
      if (document.contentType !== "text/html") return;
      try {
        const container = document.head || document.documentElement;
        const scriptTag = document.createElement("script");
        scriptTag.setAttribute("async", "false");
        scriptTag.textContent = INJECTED_WINDOW_PROVIDER_SOURCE;
        container.insertBefore(scriptTag, container.children[0]);
      } catch (e) {
        throw new Error(`Tally: oh nos the content-script failed to initilaize the Tally window provider.\n        ${e}\n        It's time for a seppuku...🗡`);
      }
    }
    injectTallyWindowProvider();
    connectProviderBridge();
  })();
})();
//# sourceMappingURL=provider-bridge.js.map