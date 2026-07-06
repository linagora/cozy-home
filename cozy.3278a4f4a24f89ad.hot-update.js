"use strict";
self["webpackHotUpdatecozy_home"]("cozy", {
"./node_modules/cozy-search/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1782511739544
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./node_modules/cozy-search/dist/actions/delete.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.remove = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _makeActionComponent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/actions/makeActionComponent.js"));

var remove = function remove(_ref) {
  var t = _ref.t,
      onDelete = _ref.onDelete;
  var label = t('assistant.sidebar.conversation.actions.delete');
  return {
    name: 'delete',
    icon: _twakeIcons.Trash,
    label: label,
    Component: (0, _makeActionComponent.default)(label, _twakeIcons.Trash, {
      className: 'u-error'
    }),
    action: function action() {
      onDelete();
    }
  };
};

exports.remove = remove;

}),
"./node_modules/cozy-search/dist/actions/makeActionComponent.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _ActionsMenuItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var makeActionComponent = function makeActionComponent(label, icon) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      className = _ref.className;

  var Component = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_ActionsMenuItem.default, (0, _extends2.default)({
      className: className
    }, props, {
      ref: ref
    }), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      className: className,
      icon: icon
    })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
      primary: label
    }));
  });
  Component.displayName = 'ActionComponent';
  return Component;
};

var _default = makeActionComponent;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/actions/rename.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.rename = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _makeActionComponent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/actions/makeActionComponent.js"));

var rename = function rename(_ref) {
  var t = _ref.t,
      onRename = _ref.onRename;
  var label = t('assistant.sidebar.conversation.actions.rename');
  return {
    name: 'rename',
    icon: _twakeIcons.Rename,
    label: label,
    Component: (0, _makeActionComponent.default)(label, _twakeIcons.Rename),
    action: function action() {
      onRename();
    }
  };
};

exports.rename = rename;

}),
"./node_modules/cozy-search/dist/index.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AiText", ({
  enumerable: true,
  get: function get() {
    return _AiText.default;
  }
}));
Object.defineProperty(exports, "AssistantDesktop", ({
  enumerable: true,
  get: function get() {
    return _AssistantDesktop.default;
  }
}));
Object.defineProperty(exports, "AssistantDialog", ({
  enumerable: true,
  get: function get() {
    return _AssistantDialog.default;
  }
}));
Object.defineProperty(exports, "AssistantLink", ({
  enumerable: true,
  get: function get() {
    return _AssistantLink.default;
  }
}));
Object.defineProperty(exports, "AssistantMessage", ({
  enumerable: true,
  get: function get() {
    return _AssistantMessage.default;
  }
}));
Object.defineProperty(exports, "AssistantMobile", ({
  enumerable: true,
  get: function get() {
    return _AssistantMobile.default;
  }
}));
Object.defineProperty(exports, "AssistantView", ({
  enumerable: true,
  get: function get() {
    return _AssistantView.default;
  }
}));
Object.defineProperty(exports, "ChatComponentsProvider", ({
  enumerable: true,
  get: function get() {
    return _ChatComponentsContext.ChatComponentsProvider;
  }
}));
Object.defineProperty(exports, "Conversation", ({
  enumerable: true,
  get: function get() {
    return _Conversation.default;
  }
}));
Object.defineProperty(exports, "ConversationStoreProvider", ({
  enumerable: true,
  get: function get() {
    return _ConversationStoreContext.ConversationStoreProvider;
  }
}));
Object.defineProperty(exports, "CozyAssistantRuntimeProvider", ({
  enumerable: true,
  get: function get() {
    return _CozyAssistantRuntimeProvider.default;
  }
}));
Object.defineProperty(exports, "CozyComposer", ({
  enumerable: true,
  get: function get() {
    return _ConversationComposer.default;
  }
}));
Object.defineProperty(exports, "CozyComposerExtras", ({
  enumerable: true,
  get: function get() {
    return _CozyComposerExtras.default;
  }
}));
Object.defineProperty(exports, "CozyConversationStoreProvider", ({
  enumerable: true,
  get: function get() {
    return _CozyConversationStoreProvider.default;
  }
}));
Object.defineProperty(exports, "CozySourcesWithFilesQuery", ({
  enumerable: true,
  get: function get() {
    return _CozySourcesWithFilesQuery.default;
  }
}));
Object.defineProperty(exports, "CreateAssistantDialog", ({
  enumerable: true,
  get: function get() {
    return _CreateAssistantDialog.default;
  }
}));
Object.defineProperty(exports, "SearchDialog", ({
  enumerable: true,
  get: function get() {
    return _SearchDialog.default;
  }
}));
Object.defineProperty(exports, "Sidebar", ({
  enumerable: true,
  get: function get() {
    return _Sidebar.default;
  }
}));
Object.defineProperty(exports, "Sources", ({
  enumerable: true,
  get: function get() {
    return _Sources.Sources;
  }
}));
Object.defineProperty(exports, "StreamBridge", ({
  enumerable: true,
  get: function get() {
    return _adapters.StreamBridge;
  }
}));
Object.defineProperty(exports, "UserMessage", ({
  enumerable: true,
  get: function get() {
    return _UserMessage.default;
  }
}));
Object.defineProperty(exports, "createCozyRealtimeChatAdapter", ({
  enumerable: true,
  get: function get() {
    return _adapters.createCozyRealtimeChatAdapter;
  }
}));
Object.defineProperty(exports, "locales", ({
  enumerable: true,
  get: function get() {
    return _locales.locales;
  }
}));
Object.defineProperty(exports, "useChatComponents", ({
  enumerable: true,
  get: function get() {
    return _ChatComponentsContext.useChatComponents;
  }
}));
Object.defineProperty(exports, "useConversationStore", ({
  enumerable: true,
  get: function get() {
    return _ConversationStoreContext.useConversationStore;
  }
}));
Object.defineProperty(exports, "useCozyConversationStore", ({
  enumerable: true,
  get: function get() {
    return _CozyConversationStore.useCozyConversationStore;
  }
}));
Object.defineProperty(exports, "useCozySearchConversationEnabled", ({
  enumerable: true,
  get: function get() {
    return _useCozySearchConversationEnabled.useCozySearchConversationEnabled;
  }
}));

var _AssistantLink = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/AssistantLink.js"));

var _AssistantDesktop = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/AssistantDesktop.js"));

var _AssistantMobile = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/AssistantMobile.js"));

var _AssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/AssistantDialog.js"));

var _CreateAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/CreateAssistantDialog.js"));

var _SearchDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/SearchDialog.js"));

var _AiText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Icons/AiText.js"));

var _CozyAssistantRuntimeProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CozyAssistantRuntimeProvider.js"));

var _ConversationComposer = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationComposer.js"));

var _adapters = __webpack_require__("./node_modules/cozy-search/dist/components/adapters/index.js");

var _AssistantView = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/AssistantView.js"));

var _Sidebar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Sidebar/index.js"));

var _Conversation = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Conversation.js"));

var _AssistantMessage = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Messages/AssistantMessage.js"));

var _UserMessage = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Messages/UserMessage.js"));

var _Sources = __webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/Sources.js");

var _ConversationStoreContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ConversationStoreContext.js");

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

var _CozyConversationStoreProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStoreProvider.js"));

var _CozyConversationStore = __webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStore.js");

var _useCozySearchConversationEnabled = __webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/useCozySearchConversationEnabled.js");

var _CozySourcesWithFilesQuery = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/CozySourcesWithFilesQuery.js"));

var _CozyComposerExtras = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/CozyComposerExtras.js"));

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

}),

});
//# sourceMappingURL=cozy.3278a4f4a24f89ad.hot-update.js.map