"use strict";
self["webpackHotUpdatecozy_home"]("cozy", {
"./node_modules/cozy-search/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1782511901932
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
"./node_modules/cozy-search/dist/components/Sidebar/index.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Divider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Divider/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _LoadMore = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/LoadMore/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

var _ConversationStoreContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ConversationStoreContext.js");

var _useConversation2 = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/hooks/useConversation.js"));

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _PrettyScrollbar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Containers/PrettyScrollbar.js"));

var _ConversationList = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationList.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "sidebar-container": "styles__sidebar-container___155dK",
  "sidebar-overlay--mobile": "styles__sidebar-overlay--mobile___vvKHu",
  "menu-toggle-floating": "styles__menu-toggle-floating___2GTmQ"
};

var Sidebar = function Sidebar(_ref) {
  var _cx;

  var className = _ref.className;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useParams = (0, _reactRouterDom.useParams)(),
      currentConversationId = _useParams.conversationId;

  var _useConversation = (0, _useConversation2.default)(),
      createNewConversation = _useConversation.createNewConversation,
      goToConversation = _useConversation.goToConversation;

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      isOpenSearchConversation = _useAssistant.isOpenSearchConversation,
      setIsOpenSearchConversation = _useAssistant.setIsOpenSearchConversation;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useState = (0, _react.useState)(!isMobile),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      sidebarOpen = _useState2[0],
      setSidebarOpen = _useState2[1];

  var _useChatComponents = (0, _ChatComponentsContext.useChatComponents)(),
      useSearchConversationEnabled = _useChatComponents.useSearchConversationEnabled;

  var searchConversationEnabled = useSearchConversationEnabled();

  var _useConversationStore = (0, _ConversationStoreContext.useConversationStore)().useConversations(),
      conversations = _useConversationStore.conversations,
      hasMore = _useConversationStore.hasMore,
      fetchMore = _useConversationStore.fetchMore; // When the sidebar is closed on mobile, the toggle sits over the scrolling
  // conversation and must read as a distinct floating button, not blend into
  // the text behind it.


  var isFloatingToggle = !sidebarOpen && isMobile;

  var onToggleSidebar = function onToggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  };

  var onToggleSearch = function onToggleSearch() {
    setIsOpenSearchConversation(!isOpenSearchConversation);

    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  var onCreateNewConversation = function onCreateNewConversation() {
    createNewConversation();

    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-flex u-flex-column u-h-100 u-bdw-1', className, (_cx = {
      'u-w-auto': !sidebarOpen
    }, (0, _defineProperty2.default)(_cx, styles['sidebar-container'], sidebarOpen), (0, _defineProperty2.default)(_cx, 'u-left-0 u-pos-absolute', isMobile), _cx))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-justify-between u-ph-1 u-pv-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-flex', (0, _defineProperty2.default)({
      'u-bdrs-circle': isFloatingToggle
    }, styles['menu-toggle-floating'], isFloatingToggle))
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "medium",
    edge: "start",
    className: "u-bdrs-6",
    onClick: onToggleSidebar,
    "aria-label": t('assistant.sidebar.toggle_sidebar')
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Menu,
    "aria-hidden": "true"
  }))), /*#__PURE__*/_react.default.createElement("div", null, sidebarOpen && searchConversationEnabled && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "medium",
    edge: "end",
    className: "u-bdrs-6",
    onClick: onToggleSearch,
    "aria-label": t('assistant.sidebar.toggle_search')
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Magnifier,
    "aria-hidden": "true"
  })), sidebarOpen && isMobile && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "medium",
    className: "u-bdrs-6",
    onClick: onToggleSidebar,
    "aria-label": t('assistant.sidebar.close_sidebar')
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.CrossSmall,
    "aria-hidden": "true"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-ph-1 u-pb-half"
  }, sidebarOpen ? /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    className: "u-w-100 u-bdrs-6",
    label: t('assistant.sidebar.create_new'),
    startIcon: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Plus
    }),
    fullWidth: true,
    variant: "primary",
    onClick: onCreateNewConversation
  }) : isMobile ? null : /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "medium",
    className: "u-bg-primaryColor u-white u-bdrs-6",
    onClick: onCreateNewConversation,
    "aria-label": t('assistant.sidebar.create_new')
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Plus,
    "aria-hidden": "true"
  }))), sidebarOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-ph-1 u-pv-half"
  }, t('assistant.sidebar.recent_chats')), /*#__PURE__*/_react.default.createElement(_PrettyScrollbar.default, {
    className: "u-flex-auto u-ov-auto u-pb-half"
  }, /*#__PURE__*/_react.default.createElement(_ConversationList.default, {
    conversations: conversations,
    currentConversationId: currentConversationId,
    onOpenConversation: goToConversation
  }), hasMore && /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-justify-center u-mt-1"
  }, /*#__PURE__*/_react.default.createElement(_LoadMore.default, {
    fetchMore: fetchMore,
    label: t('assistant.sidebar.conversation.actions.load_more')
  }))))), isMobile && sidebarOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: styles['sidebar-overlay--mobile'],
    onClick: onToggleSidebar,
    "aria-hidden": "true"
  }), sidebarOpen && !isMobile && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    orientation: "vertical",
    flexItem: true
  }));
};

var _default = Sidebar;
exports["default"] = _default;

}),

});
//# sourceMappingURL=cozy.7cb18b5d3a971ba3.hot-update.js.map