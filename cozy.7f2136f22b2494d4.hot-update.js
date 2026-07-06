"use strict";
self["webpackHotUpdatecozy_home"]("cozy", {
"./node_modules/cozy-search/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1782587463698
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
//# sourceMappingURL=cozy.7f2136f22b2494d4.hot-update.js.map