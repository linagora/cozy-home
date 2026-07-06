"use strict";
self["webpackHotUpdatecozy_home"]("cozy", {
"./node_modules/cozy-search/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1782511818303
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
"./node_modules/cozy-search/dist/components/Conversations/ConversationComposer.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react2 = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _ConversationBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationBar.js"));

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "composerContainer": "styles__composerContainer___3bNfY",
  "composerActions": "styles__composerActions___2xQEH",
  "conversationBar": "styles__conversationBar___2J-Us",
  "conversationBar--mobile": "styles__conversationBar--mobile___1jdg8",
  "conversationViewport": "styles__conversationViewport___24jYX",
  "conversationBar-input": "styles__conversationBar-input___2DfdZ",
  "chatConversation": "styles__chatConversation___2EmkA",
  "conversationHeaderBar": "styles__conversationHeaderBar___C8tlD",
  "conversationList": "styles__conversationList___2GCzV",
  "conversationList--container": "styles__conversationList--container___2xRAG",
  "conversationList--hidden": "styles__conversationList--hidden___20BsT",
  "conversationListItem--selected": "styles__conversationListItem--selected___2jCyB",
  "menuToggler": "styles__menuToggler___39GfB",
  "menuToggler--disabled": "styles__menuToggler--disabled___15vd4",
  "conversationChips-container": "styles__conversationChips-container___327dE",
  "conversationChips-startIcon": "styles__conversationChips-startIcon___1yOVn",
  "conversationChips-chipIcon": "styles__conversationChips-chipIcon___1wmF-",
  "conversationChips-deleteIcon": "styles__conversationChips-deleteIcon___s9C40",
  "is-warning": "styles__is-warning___3sa0v",
  "conversationChips-chip": "styles__conversationChips-chip___2PqQv",
  "cozyThread-messageContent": "styles__cozyThread-messageContent___2HjdB",
  "conversation-list-item": "styles__conversation-list-item___rQapI",
  "conversation-list-item-action": "styles__conversation-list-item-action___qiuKm",
  "conversation-list-item--selected--light": "styles__conversation-list-item--selected--light___3WvIn",
  "conversation-list-item--selected--dark": "styles__conversation-list-item--selected--dark___JDQlY",
  "conversation-list-item--wider": "styles__conversation-list-item--wider___2Tl2c",
  "conversation-list-item-divider": "styles__conversation-list-item-divider___2LOP1",
  "conversation-list-item-text": "styles__conversation-list-item-text___31VBM",
  "conversation-list-item-title": "styles__conversation-list-item-title___3je_6",
  "conversation-list-item-meta": "styles__conversation-list-item-meta___3Zk-r",
  "conversation-list-item-subtitle": "styles__conversation-list-item-subtitle___3e_h0"
};

var ConversationComposer = function ConversationComposer() {
  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var composerRuntime = (0, _react.useComposerRuntime)();
  var isRunning = (0, _react.useThread)(function (state) {
    return state.isRunning;
  });
  var isThreadEmpty = (0, _react.useThread)(function (state) {
    return state.messages.length === 0;
  });

  var _useChatComponents = (0, _ChatComponentsContext.useChatComponents)(),
      ComposerExtras = _useChatComponents.ComposerExtras;

  var value = (0, _react.useComposer)(function (state) {
    return state.text;
  });
  var isEmpty = (0, _react.useComposer)(function (state) {
    return state.isEmpty;
  });
  var handleSend = (0, _react2.useCallback)(function () {
    composerRuntime.send();
  }, [composerRuntime]);
  var handleCancel = (0, _react2.useCallback)(function () {
    composerRuntime.cancel();
  }, [composerRuntime]);
  var handleKeyDown = (0, _react2.useCallback)(function (ev) {
    if (!isMobile) {
      if (ev.shiftKey && ev.key === 'Enter') {
        return;
      }

      if (ev.key === 'Enter') {
        ev.preventDefault();
        handleSend();
      }
    }
  }, [isMobile, handleSend]);
  return /*#__PURE__*/_react2.default.createElement(_react.ComposerPrimitive.Root, {
    className: (0, _classnames.default)('u-w-100 u-maw-7 u-mh-auto u-bxz', styles['composerContainer'])
  }, /*#__PURE__*/_react2.default.createElement("div", {
    className: "u-flex u-flex-items-start u-flex-justify-between"
  }, /*#__PURE__*/_react2.default.createElement(_ConversationBar.default, {
    value: value,
    isEmpty: isEmpty,
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/_react2.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-shrink-0"
  }, /*#__PURE__*/_react2.default.createElement(_Buttons.default, (0, _extends2.default)({
    size: "small",
    className: "u-miw-auto u-w-2 u-h-2 u-bdrs-circle u-flex-shrink-0",
    classes: {
      label: 'u-flex u-w-auto'
    }
  }, isRunning ? {
    label: /*#__PURE__*/_react2.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Stop,
      size: 12
    }),
    onClick: handleCancel
  } : {
    variant: 'primary',
    label: /*#__PURE__*/_react2.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Paperplane,
      size: 12,
      rotate: -45
    }),
    onClick: handleSend
  })))), /*#__PURE__*/_react2.default.createElement("div", {
    className: (0, _classnames.default)('u-flex u-flex-items-center u-flex-justify-between', styles['composerActions'])
  }, /*#__PURE__*/_react2.default.createElement(ComposerExtras, {
    disabled: !isThreadEmpty
  })));
};

var _default = ConversationComposer;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/ConversationListItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Divider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Divider/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _CozyTheme = __webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

var _AssistantAvatar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantAvatar.js"));

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var styles = {
  "composerContainer": "styles__composerContainer___3bNfY",
  "composerActions": "styles__composerActions___2xQEH",
  "conversationBar": "styles__conversationBar___2J-Us",
  "conversationBar--mobile": "styles__conversationBar--mobile___1jdg8",
  "conversationViewport": "styles__conversationViewport___24jYX",
  "conversationBar-input": "styles__conversationBar-input___2DfdZ",
  "chatConversation": "styles__chatConversation___2EmkA",
  "conversationHeaderBar": "styles__conversationHeaderBar___C8tlD",
  "conversationList": "styles__conversationList___2GCzV",
  "conversationList--container": "styles__conversationList--container___2xRAG",
  "conversationList--hidden": "styles__conversationList--hidden___20BsT",
  "conversationListItem--selected": "styles__conversationListItem--selected___2jCyB",
  "menuToggler": "styles__menuToggler___39GfB",
  "menuToggler--disabled": "styles__menuToggler--disabled___15vd4",
  "conversationChips-container": "styles__conversationChips-container___327dE",
  "conversationChips-startIcon": "styles__conversationChips-startIcon___1yOVn",
  "conversationChips-chipIcon": "styles__conversationChips-chipIcon___1wmF-",
  "conversationChips-deleteIcon": "styles__conversationChips-deleteIcon___s9C40",
  "is-warning": "styles__is-warning___3sa0v",
  "conversationChips-chip": "styles__conversationChips-chip___2PqQv",
  "cozyThread-messageContent": "styles__cozyThread-messageContent___2HjdB",
  "conversation-list-item": "styles__conversation-list-item___rQapI",
  "conversation-list-item-action": "styles__conversation-list-item-action___qiuKm",
  "conversation-list-item--selected--light": "styles__conversation-list-item--selected--light___3WvIn",
  "conversation-list-item--selected--dark": "styles__conversation-list-item--selected--dark___JDQlY",
  "conversation-list-item--wider": "styles__conversation-list-item--wider___2Tl2c",
  "conversation-list-item-divider": "styles__conversation-list-item-divider___2LOP1",
  "conversation-list-item-text": "styles__conversation-list-item-text___31VBM",
  "conversation-list-item-title": "styles__conversation-list-item-title___3je_6",
  "conversation-list-item-meta": "styles__conversation-list-item-meta___3Zk-r",
  "conversation-list-item-subtitle": "styles__conversation-list-item-subtitle___3e_h0"
};

var ConversationListItem = function ConversationListItem(_ref) {
  var _conversation$cozyMet;

  var conversation = _ref.conversation,
      selected = _ref.selected,
      onOpenConversation = _ref.onOpenConversation,
      disableAction = _ref.disableAction;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var _useCozyTheme = (0, _CozyTheme.useCozyTheme)(),
      theme = _useCozyTheme.type;

  var _useChatComponents = (0, _ChatComponentsContext.useChatComponents)(),
      ConversationActions = _useChatComponents.ConversationActions;

  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    onClick: function onClick() {
      return onOpenConversation(conversation._id);
    },
    className: (0, _classnames.default)('u-ov-hidden u-flex-column u-pv-half u-ph-1', styles['conversation-list-item'], (0, _defineProperty2.default)({}, styles["conversation-list-item--selected--".concat(theme)], selected)),
    selected: selected
  }, !disableAction && /*#__PURE__*/_react.default.createElement(ConversationActions, {
    buttonClassName: styles['conversation-list-item-action'],
    conversation: conversation
  }), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    className: "u-m-0",
    primaryTypographyProps: {
      component: 'div',
      className: styles['conversation-list-item-text']
    },
    secondaryTypographyProps: {
      component: 'div',
      className: styles['conversation-list-item-text']
    },
    primary: /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)('u-ellipsis u-db u-pb-half', styles['conversation-list-item-title'])
    }, (0, _helpers.getNameOfConversation)(conversation)),
    secondary: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)('u-db u-ellipsis', styles['conversation-list-item-subtitle'])
    }, (0, _helpers.getDescriptionOfConversation)(conversation)), /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)('u-flex u-flex-items-center', styles['conversation-list-item-subtitle'], styles['conversation-list-item-meta'])
    }, /*#__PURE__*/_react.default.createElement(_AssistantAvatar.default, {
      assistant: conversation.assistant,
      isSmall: true
    }), (0, _helpers.formatConversationDate)((_conversation$cozyMet = conversation.cozyMetadata) === null || _conversation$cozyMet === void 0 ? void 0 : _conversation$cozyMet.updatedAt, t, lang)))
  }), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    className: styles['conversation-list-item-divider']
  }));
}; // Memoized so a re-render of the conversation list only re-renders items
// whose props actually changed (typically just the previously- and
// newly-selected items). This avoids rebuilding every item's ActionsMenu
// popover on each conversation switch.


var _default = /*#__PURE__*/_react.default.memo(ConversationListItem);

exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Sidebar/index.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Divider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Divider/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _LoadMore = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/LoadMore/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _useConversation2 = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/hooks/useConversation.js"));

var _useFetchConversations = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/hooks/useFetchConversations.js"));

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

  var _useFetchConversation = (0, _useFetchConversations.default)(),
      conversations = _useFetchConversation.conversations,
      hasMore = _useFetchConversation.hasMore,
      fetchMore = _useFetchConversation.fetchMore; // When the sidebar is closed on mobile, the toggle sits over the scrolling
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
  }))), /*#__PURE__*/_react.default.createElement("div", null, sidebarOpen && (0, _cozyFlags.default)('cozy.assistant.search-conversation.enabled') && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
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
//# sourceMappingURL=cozy.beb57eede581a0d1.hot-update.js.map