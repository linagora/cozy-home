"use strict";
self["webpackHotUpdatecozy_home"]("cozy", {
"./node_modules/cozy-search/dist/actions/share.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.share = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _makeActionComponent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/actions/makeActionComponent.js"));

var share = function share(_ref) {
  var t = _ref.t;
  var label = t('assistant.sidebar.conversation.actions.share');
  return {
    name: 'share',
    icon: _twakeIcons.Share,
    label: label,
    Component: (0, _makeActionComponent.default)(label, _twakeIcons.Share),
    action: function action() {// TO DO: Add action to share due to this action does not exist yet in backend, we will implement it later
    }
  };
};

exports.share = share;

}),
"./node_modules/cozy-search/dist/components/Assistant/AssistantAvatar.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Avatar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Avatar/index.js"));

var styles = {
  "assistant-container": "styles__assistant-container___2WDzp",
  "knowledge-panel--light": "styles__knowledge-panel--light___1dZvc",
  "knowledge-panel--dark": "styles__knowledge-panel--dark___3IGQc",
  "trigger-button": "styles__trigger-button___yyIz8",
  "assistant-icon": "styles__assistant-icon___1VM6i",
  "assistant-icon--small": "styles__assistant-icon--small___3D9po",
  "assistant-icon--composer": "styles__assistant-icon--composer___1i3dU",
  "menu-item": "styles__menu-item___1jvWN",
  "create-item": "styles__create-item___3ZARq",
  "menu-item-icon-button": "styles__menu-item-icon-button___2q_ct",
  "menu-item-actions": "styles__menu-item-actions___1ykUi",
  "chip": "styles__chip___16BPR",
  "selected-item--mobile": "styles__selected-item--mobile___gxVpw"
};

var AssistantAvatar = function AssistantAvatar(_ref) {
  var assistant = _ref.assistant,
      isSmall = _ref.isSmall,
      className = _ref.className;
  if (!assistant) return null;
  var iconClassName = (0, _classnames.default)(styles['assistant-icon'], (0, _defineProperty2.default)({}, styles['assistant-icon--small'], isSmall), className);

  if (!assistant.icon) {
    return /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.AssistantColor,
      className: iconClassName
    });
  }

  return /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    src: assistant.icon,
    alt: assistant.name,
    size: isSmall ? 12 : 24,
    className: iconClassName
  });
};

var _default = AssistantAvatar;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Assistant/AssistantContainer.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _CozyTheme = __webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _PrettyScrollbar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Containers/PrettyScrollbar.js"));

var _Conversation = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Conversation.js"));

var _CozyAssistantRuntimeProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CozyAssistantRuntimeProvider.js"));

var _SearchConversation = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchConversation.js"));

var _Sidebar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Sidebar/index.js"));

var _TwakeKnowledgePanel = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/TwakeKnowledgePanel.js"));

var styles = {
  "assistant-container": "styles__assistant-container___2WDzp",
  "knowledge-panel--light": "styles__knowledge-panel--light___1dZvc",
  "knowledge-panel--dark": "styles__knowledge-panel--dark___3IGQc",
  "trigger-button": "styles__trigger-button___yyIz8",
  "assistant-icon": "styles__assistant-icon___1VM6i",
  "assistant-icon--small": "styles__assistant-icon--small___3D9po",
  "assistant-icon--composer": "styles__assistant-icon--composer___1i3dU",
  "menu-item": "styles__menu-item___1jvWN",
  "create-item": "styles__create-item___3ZARq",
  "menu-item-icon-button": "styles__menu-item-icon-button___2q_ct",
  "menu-item-actions": "styles__menu-item-actions___1ykUi",
  "chip": "styles__chip___16BPR",
  "selected-item--mobile": "styles__selected-item--mobile___gxVpw"
};

var AssistantContainer = function AssistantContainer() {
  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      isOpenSearchConversation = _useAssistant.isOpenSearchConversation,
      openedKnowledgePanel = _useAssistant.openedKnowledgePanel,
      setOpenedKnowledgePanel = _useAssistant.setOpenedKnowledgePanel;

  var _useCozyTheme = (0, _CozyTheme.useCozyTheme)(),
      theme = _useCozyTheme.type;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-flex u-ov-hidden u-h-100', styles['assistant-container'])
  }, /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    className: "u-pb-0-t u-pb-1"
  }), /*#__PURE__*/_react.default.createElement(_PrettyScrollbar.default, {
    className: "u-flex-auto u-flex u-flex-column u-pb-0-t u-pb-1 u-ov-hidden"
  }, isOpenSearchConversation && (0, _cozyFlags.default)('cozy.assistant.search-conversation.enabled') ? /*#__PURE__*/_react.default.createElement(_SearchConversation.default, null) : /*#__PURE__*/_react.default.createElement(_CozyAssistantRuntimeProvider.default, null, /*#__PURE__*/_react.default.createElement(_Conversation.default, null))), openedKnowledgePanel && (0, _cozyFlags.default)('cozy.assistant.source-knowledge.enabled') && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-h-100 u-maw-7 u-pl-half', styles["knowledge-panel--".concat(theme)])
  }, /*#__PURE__*/_react.default.createElement(_TwakeKnowledgePanel.default, {
    onClose: function onClose() {
      return setOpenedKnowledgePanel(undefined);
    }
  })));
};

var _default = AssistantContainer;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Assistant/AssistantSelection.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _ActionsMenu = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/index.js"));

var _ActionsMenuItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem.js"));

var _Chips = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Chips/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _constants = __webpack_require__("./node_modules/cozy-search/dist/components/constants.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

var _AssistantAvatar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantAvatar.js"));

var _AssistantSelectionItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantSelectionItem.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "assistant-container": "styles__assistant-container___2WDzp",
  "knowledge-panel--light": "styles__knowledge-panel--light___1dZvc",
  "knowledge-panel--dark": "styles__knowledge-panel--dark___3IGQc",
  "trigger-button": "styles__trigger-button___yyIz8",
  "assistant-icon": "styles__assistant-icon___1VM6i",
  "assistant-icon--small": "styles__assistant-icon--small___3D9po",
  "assistant-icon--composer": "styles__assistant-icon--composer___1i3dU",
  "menu-item": "styles__menu-item___1jvWN",
  "create-item": "styles__create-item___3ZARq",
  "menu-item-icon-button": "styles__menu-item-icon-button___2q_ct",
  "menu-item-actions": "styles__menu-item-actions___1ykUi",
  "chip": "styles__chip___16BPR",
  "selected-item--mobile": "styles__selected-item--mobile___gxVpw"
};

var AssistantSelection = function AssistantSelection(_ref) {
  var _useQuery;

  var className = _ref.className,
      disabled = _ref.disabled;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var buttonRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      setIsOpenCreateAssistant = _useAssistant.setIsOpenCreateAssistant,
      setAssistantIdInAction = _useAssistant.setAssistantIdInAction,
      setIsOpenDeleteAssistant = _useAssistant.setIsOpenDeleteAssistant,
      setIsOpenEditAssistant = _useAssistant.setIsOpenEditAssistant,
      selectedAssistantId = _useAssistant.selectedAssistantId,
      setSelectedAssistantId = _useAssistant.setSelectedAssistantId;

  (0, _react.useEffect)(function () {
    if (disabled) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false);
    }
  }, [disabled]);
  var assistantsQuery = (0, _queries.buildAssistantsQuery)();
  var assistants = ((_useQuery = (0, _cozyClient.useQuery)(assistantsQuery.definition, assistantsQuery.options)) === null || _useQuery === void 0 ? void 0 : _useQuery.data) || [];

  var handleClick = function handleClick() {
    if (disabled) return;
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleCreate = function handleCreate() {
    setIsOpenCreateAssistant(true);
    handleClose();
  };

  var selectedAssistant = assistants.find(function (assistant) {
    return assistant._id === selectedAssistantId;
  }) || _constants.DEFAULT_ASSISTANT;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    ref: buttonRef
  }, disabled && isMobile ? /*#__PURE__*/_react.default.createElement(_AssistantAvatar.default, {
    assistant: selectedAssistant
  }) : /*#__PURE__*/_react.default.createElement(_Chips.default, (0, _extends2.default)({
    icon: /*#__PURE__*/_react.default.createElement(_AssistantAvatar.default, {
      className: styles['assistant-icon--composer'],
      assistant: selectedAssistant
    }),
    label: isMobile ? /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Dropdown,
      size: 16
    }) : selectedAssistant.name
  }, disabled ? {
    className: styles['chip'],
    'aria-disabled': true
  } : {
    clickable: true,
    onClick: handleClick
  }))), open && /*#__PURE__*/_react.default.createElement(_ActionsMenu.default, {
    open: true,
    ref: buttonRef,
    onClose: handleClose,
    actions: [],
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }, assistants.map(function (assistant) {
    return /*#__PURE__*/_react.default.createElement(_AssistantSelectionItem.default, {
      key: assistant._id,
      assistant: assistant,
      onClose: handleClose,
      onSelect: function onSelect() {
        return setSelectedAssistantId(assistant._id);
      },
      selectedAssistant: selectedAssistant,
      setIsOpenDeleteAssistant: setIsOpenDeleteAssistant,
      setAssistantIdInAction: setAssistantIdInAction,
      setIsOpenEditAssistant: setIsOpenEditAssistant
    });
  }), /*#__PURE__*/_react.default.createElement(_AssistantSelectionItem.default, {
    assistant: _constants.DEFAULT_ASSISTANT,
    onClose: handleClose,
    onSelect: function onSelect() {
      return setSelectedAssistantId(_constants.DEFAULT_ASSISTANT.id);
    },
    selectedAssistant: selectedAssistant,
    disableActions: true
  }), /*#__PURE__*/_react.default.createElement(_ActionsMenuItem.default, {
    onClick: handleCreate,
    className: (0, _classnames.default)(styles['menu-item'], styles['create-item'])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-justify-center u-w-1-half u-mr-half"
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Plus,
    size: 16
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1"
  }, t('assistant_create.title'))))));
};

var _default = AssistantSelection;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Assistant/AssistantSelectionItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _ActionsMenuItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem.js"));

var _Badge = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Badge/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _AssistantAvatar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantAvatar.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "assistant-container": "styles__assistant-container___2WDzp",
  "knowledge-panel--light": "styles__knowledge-panel--light___1dZvc",
  "knowledge-panel--dark": "styles__knowledge-panel--dark___3IGQc",
  "trigger-button": "styles__trigger-button___yyIz8",
  "assistant-icon": "styles__assistant-icon___1VM6i",
  "assistant-icon--small": "styles__assistant-icon--small___3D9po",
  "assistant-icon--composer": "styles__assistant-icon--composer___1i3dU",
  "menu-item": "styles__menu-item___1jvWN",
  "create-item": "styles__create-item___3ZARq",
  "menu-item-icon-button": "styles__menu-item-icon-button___2q_ct",
  "menu-item-actions": "styles__menu-item-actions___1ykUi",
  "chip": "styles__chip___16BPR",
  "selected-item--mobile": "styles__selected-item--mobile___gxVpw"
};

var AssistantSelectionItem = function AssistantSelectionItem(_ref) {
  var _cx, _cx2;

  var assistant = _ref.assistant,
      onClose = _ref.onClose,
      onSelect = _ref.onSelect,
      selectedAssistant = _ref.selectedAssistant,
      setAssistantIdInAction = _ref.setAssistantIdInAction,
      setIsOpenDeleteAssistant = _ref.setIsOpenDeleteAssistant,
      setIsOpenEditAssistant = _ref.setIsOpenEditAssistant,
      _ref$disableActions = _ref.disableActions,
      disableActions = _ref$disableActions === void 0 ? false : _ref$disableActions;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var handleSelect = function handleSelect(assistant) {
    onSelect(assistant);
    onClose();
  };

  var assistantId = assistant._id || assistant.id;

  var handleDelete = function handleDelete(e) {
    setAssistantIdInAction(assistantId);
    setIsOpenDeleteAssistant(true);
    onClose();
    e.stopPropagation();
  };

  var handleEdit = function handleEdit(e) {
    setAssistantIdInAction(assistantId);
    setIsOpenEditAssistant(true);
    onClose();
    e.stopPropagation();
  };

  var isSelected = (0, _react.useMemo)(function () {
    return (selectedAssistant === null || selectedAssistant === void 0 ? void 0 : selectedAssistant._id) === assistantId;
  }, [selectedAssistant === null || selectedAssistant === void 0 ? void 0 : selectedAssistant._id, assistantId]);
  return /*#__PURE__*/_react.default.createElement(_ActionsMenuItem.default, {
    onClick: function onClick() {
      return handleSelect(assistant);
    },
    className: styles['menu-item']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, isMobile && isSelected ? /*#__PURE__*/_react.default.createElement(_Badge.default, {
    badgeContent: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Check,
      size: 10,
      className: styles['selected-item--mobile']
    }),
    variant: "standard",
    size: "small",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    overlap: "circular"
  }, /*#__PURE__*/_react.default.createElement(_AssistantAvatar.default, {
    assistant: assistant
  })) : /*#__PURE__*/_react.default.createElement(_AssistantAvatar.default, {
    assistant: assistant
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1"
  }, assistant.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-justify-between"
  }, isSelected && !isMobile && /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Check,
    className: "u-success"
  }), !disableActions && /*#__PURE__*/_react.default.createElement("div", {
    className: styles['menu-item-actions']
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "Edit assistant",
    size: "small",
    className: (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, styles['menu-item-icon-button'], !isMobile || !isSelected && isMobile), (0, _defineProperty2.default)(_cx, 'u-db', isSelected && isMobile), _cx)),
    onClick: handleEdit
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Pen,
    color: "var(--primaryColor)"
  })), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "Delete assistant",
    size: "small",
    className: (0, _classnames.default)((_cx2 = {}, (0, _defineProperty2.default)(_cx2, styles['menu-item-icon-button'], !isMobile || !isSelected && isMobile), (0, _defineProperty2.default)(_cx2, 'u-db', isSelected && isMobile), _cx2)),
    onClick: handleDelete
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Trash,
    className: "u-error"
  })))));
};

var _default = AssistantSelectionItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/AssistantDesktop.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchBar.js"));

var _SearchProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchProvider.js"));

var AssistantDesktop = function AssistantDesktop(_ref) {
  var componentsProps = _ref.componentsProps,
      _ref$searchOptions = _ref.searchOptions,
      searchOptions = _ref$searchOptions === void 0 ? {} : _ref$searchOptions;
  (0, _twakeI18n.useExtendI18n)(_locales.locales);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mh-auto u-w-100 u-maw-100"
  }, /*#__PURE__*/_react.default.createElement(_SearchProvider.default, {
    searchOptions: searchOptions
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    componentsProps: componentsProps
  })));
};

AssistantDesktop.propTypes = {
  componentsProps: _propTypes.default.shape({
    SearchBarDesktop: _propTypes.default.shape({
      elevation: _propTypes.default.number,
      size: _propTypes.default.string,
      hasHalfBorderRadius: _propTypes.default.bool,
      className: _propTypes.default.string,
      disabledHover: _propTypes.default.bool
    })
  })
};
var _default = AssistantDesktop;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/AssistantIcon/TwakeAssistantIcon.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TwakeAssistantIcon = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var TwakeAssistantIcon = function TwakeAssistantIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 22 22",
    fill: "none"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.094.305a1.5 1.5 0 012.351.79l.005.02 1.581 6.135a1 1 0 00.718.719l6.136 1.58.016.005a1.5 1.5 0 010 2.892l-.016.004-6.135 1.581a1 1 0 00-.719.719l-1.582 6.135-.005.02a1.5 1.5 0 01-2.889 0l-.005-.02-1.581-6.135a1.001 1.001 0 00-.719-.719L1.115 12.45l-.023-.006a1.5 1.5 0 010-2.886l.023-.006L7.25 7.968a1 1 0 00.719-.718L9.55 1.115l.005-.02a1.5 1.5 0 01.538-.79zM11 3.503l1.095 4.247a3.002 3.002 0 002.155 2.155L18.498 11l-4.248 1.095a3.001 3.001 0 00-2.155 2.155L11 18.497 9.905 14.25a3 3 0 00-2.155-2.156L3.504 11 7.75 9.904A3 3 0 009.905 7.75L11 3.503zM19 1a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V5h-1a1 1 0 110-2h1V2a1 1 0 011-1zM3 15a1 1 0 011 1 1 1 0 110 2 1 1 0 11-2 0 1 1 0 110-2 1 1 0 011-1z"
  }));
};

exports.TwakeAssistantIcon = TwakeAssistantIcon;

}),
"./node_modules/cozy-search/dist/components/AssistantMobile.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.AssistantMobile = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/SearchBar/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var styles = {
  "searchBarDesktop--result": "styles__searchBarDesktop--result___2bQQy",
  "suggestionsPlaceholder": "styles__suggestionsPlaceholder___y-vsv",
  "search-bar-icon": "styles__search-bar-icon___1affF",
  "search-bar--mobile": "styles__search-bar--mobile___1CSb2"
};

var AssistantMobile = function AssistantMobile(_ref) {
  var componentsProps = _ref.componentsProps;
  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname;

  (0, _twakeI18n.useExtendI18n)(_locales.locales);
  return /*#__PURE__*/_react.default.createElement(_SearchBar.default, (0, _extends2.default)({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.SearchBar, {
    size: "medium",
    icon: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      className: (0, _classnames.default)('u-ml-1 u-mr-half', styles['search-bar-icon']),
      icon: _twakeIcons.Magnifier,
      size: 16
    }),
    type: "button",
    onClick: function onClick() {
      return navigate("connected/search?returnPath=".concat(pathname));
    } // FIXME this route is related to home app

  }));
};

exports.AssistantMobile = AssistantMobile;
AssistantMobile.propTypes = {
  componentsProps: _propTypes.default.shape({
    SearchBar: _propTypes.default.shape({
      className: _propTypes.default.string
    })
  })
};
var _default = AssistantMobile;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/AssistantProvider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAssistant = exports["default"] = exports.AssistantContext = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _constants = __webpack_require__("./node_modules/cozy-search/dist/components/constants.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AssistantContext = /*#__PURE__*/_react.default.createContext();
/**
 * @returns {import('./AssistantProvider').AssistantContextValue}
 */


exports.AssistantContext = AssistantContext;

var useAssistant = function useAssistant() {
  var context = (0, _react.useContext)(AssistantContext);

  if (!context) {
    throw new Error('useAssistant must be used within a AssistantProvider');
  }

  return context;
};

exports.useAssistant = useAssistant;

var AssistantProvider = function AssistantProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpenCreateAssistant = _useState2[0],
      setIsOpenCreateAssistant = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isOpenDeleteAssistant = _useState4[0],
      setIsOpenDeleteAssistant = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isOpenEditAssistant = _useState6[0],
      setIsOpenEditAssistant = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      assistantIdInAction = _useState8[0],
      setAssistantIdInAction = _useState8[1];

  var _useState9 = (0, _react.useState)(_constants.DEFAULT_ASSISTANT._id),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      selectedAssistantId = _useState10[0],
      setSelectedAssistantId = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      isOpenSearchConversation = _useState12[0],
      setIsOpenSearchConversation = _useState12[1];

  var _useState13 = (0, _react.useState)({
    drive: [],
    mail: [],
    chat: []
  }),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      selectedTwakeKnowledge = _useState14[0],
      setSelectedTwakeKnowledge = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      openedKnowledgePanel = _useState16[0],
      setOpenedKnowledgePanel = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      websearchEnabled = _useState18[0],
      setWebsearchEnabled = _useState18[1];

  var value = (0, _react.useMemo)(function () {
    return {
      isOpenCreateAssistant: isOpenCreateAssistant,
      isOpenDeleteAssistant: isOpenDeleteAssistant,
      isOpenEditAssistant: isOpenEditAssistant,
      assistantIdInAction: assistantIdInAction,
      selectedAssistantId: selectedAssistantId,
      isOpenSearchConversation: isOpenSearchConversation,
      openedKnowledgePanel: openedKnowledgePanel,
      selectedTwakeKnowledge: selectedTwakeKnowledge,
      setAssistantIdInAction: setAssistantIdInAction,
      setIsOpenDeleteAssistant: setIsOpenDeleteAssistant,
      setIsOpenCreateAssistant: setIsOpenCreateAssistant,
      setIsOpenEditAssistant: setIsOpenEditAssistant,
      setSelectedAssistantId: setSelectedAssistantId,
      setIsOpenSearchConversation: setIsOpenSearchConversation,
      setOpenedKnowledgePanel: setOpenedKnowledgePanel,
      setSelectedTwakeKnowledge: setSelectedTwakeKnowledge,
      websearchEnabled: websearchEnabled,
      setWebsearchEnabled: setWebsearchEnabled
    };
  }, [isOpenCreateAssistant, isOpenDeleteAssistant, isOpenEditAssistant, assistantIdInAction, selectedAssistantId, isOpenSearchConversation, openedKnowledgePanel, selectedTwakeKnowledge, websearchEnabled]);
  return /*#__PURE__*/_react.default.createElement(AssistantContext.Provider, {
    value: value
  }, children);
};

var _default = /*#__PURE__*/_react.default.memo(AssistantProvider);

exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Containers/PrettyScrollbar.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var styles = {
  "pretty-scrollbar": "styles__pretty-scrollbar___1-Jwd"
};

var PrettyScrollbar = function PrettyScrollbar(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, styles['pretty-scrollbar'])
  }, children);
};

var _default = PrettyScrollbar;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/Conversation.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react2 = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _ConversationComposer = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationComposer.js"));

var _AssistantMessage = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Messages/AssistantMessage.js"));

var _UserMessage = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Messages/UserMessage.js"));

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

var Conversation = function Conversation(_ref) {
  var className = _ref.className;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var isThreadEmpty = (0, _react.useThread)(function (state) {
    return state.messages.length === 0;
  });
  return /*#__PURE__*/_react2.default.createElement(_react.ThreadPrimitive.Root, {
    className: (0, _classnames.default)('u-flex u-flex-column u-flex-items-center u-h-100', className, {
      'u-flex-justify-between': !isThreadEmpty,
      'u-flex-justify-center': isThreadEmpty
    })
  }, /*#__PURE__*/_react2.default.createElement(_react.ThreadPrimitive.Empty, null, /*#__PURE__*/_react2.default.createElement("h2", {
    className: "u-w-100 u-maw-7 u-mh-auto u-mb-3 u-fw-normal u-ta-center"
  }, t('assistant.message.welcome'))), /*#__PURE__*/_react2.default.createElement(_react.ThreadPrimitive.Viewport, {
    autoScroll: true,
    className: (0, _classnames.default)('u-w-100 u-bxz u-ov-auto u-mb-1', styles.conversationViewport, {
      'u-flex-auto': !isThreadEmpty
    })
  }, /*#__PURE__*/_react2.default.createElement("div", {
    className: "u-maw-7 u-mh-auto"
  }, /*#__PURE__*/_react2.default.createElement(_react.ThreadPrimitive.Messages, {
    components: {
      UserMessage: _UserMessage.default,
      AssistantMessage: _AssistantMessage.default
    }
  }))), /*#__PURE__*/_react2.default.createElement(_ConversationComposer.default, null));
};

var _default = Conversation;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/ConversationActions.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _ActionsMenu = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/index.js"));

var _Actions = __webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/Actions/index.js");

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _CozyDialogs = __webpack_require__("./node_modules/cozy-ui/transpiled/react/CozyDialogs/index.js");

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _TextField = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/TextField/index.js"));

var _Alert = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Alert/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _delete = __webpack_require__("./node_modules/cozy-search/dist/actions/delete.js");

var _rename = __webpack_require__("./node_modules/cozy-search/dist/actions/rename.js");

var _share = __webpack_require__("./node_modules/cozy-search/dist/actions/share.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ConversationActions = function ConversationActions(_ref) {
  var buttonClassName = _ref.buttonClassName,
      conversation = _ref.conversation;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var client = (0, _cozyClient.useClient)();

  var _useAlert = (0, _Alert.useAlert)(),
      showAlert = _useAlert.showAlert;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showRenameDialog = _useState4[0],
      setShowRenameDialog = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showDeleteDialog = _useState6[0],
      setShowDeleteDialog = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      newName = _useState8[0],
      setNewName = _useState8[1];

  var anchorRef = (0, _react.useRef)(null);

  var toggleMenu = function toggleMenu(e) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    setIsMenuOpen(function (prev) {
      return !prev;
    });
  };

  var handleOpenRename = function handleOpenRename() {
    setNewName((0, _helpers.getNameOfConversation)(conversation) || '');
    setShowRenameDialog(true);
  };

  var handleRename = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return client.save(_objectSpread(_objectSpread({}, conversation), {}, {
                _type: _queries.CHAT_CONVERSATIONS_DOCTYPE,
                name: newName.trim()
              }));

            case 3:
              setShowRenameDialog(false);
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              showAlert({
                message: t('assistant.default_error'),
                severity: 'error'
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleRename() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return client.destroy(_objectSpread(_objectSpread({}, conversation), {}, {
                _type: _queries.CHAT_CONVERSATIONS_DOCTYPE
              }));

            case 3:
              setShowDeleteDialog(false);
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              showAlert({
                message: t('assistant.default_error'),
                severity: 'error'
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function handleDelete() {
      return _ref3.apply(this, arguments);
    };
  }();

  var actions = (0, _Actions.makeActions)([_rename.rename, (0, _cozyFlags.default)('cozy.assistant.conversation-sharing.enabled') && _share.share, _delete.remove].filter(Boolean), {
    t: t,
    onRename: handleOpenRename,
    onDelete: function onDelete() {
      return setShowDeleteDialog(true);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: buttonClassName,
    size: "small",
    ref: anchorRef,
    onClick: toggleMenu
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Dots
  })), isMenuOpen && /*#__PURE__*/_react.default.createElement(_ActionsMenu.default, {
    ref: anchorRef,
    open: true,
    actions: actions,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    autoClose: true,
    onClose: toggleMenu
  }), showRenameDialog && /*#__PURE__*/_react.default.createElement(_CozyDialogs.ConfirmDialog, {
    open: true,
    title: t('assistant.sidebar.conversation.actions.rename'),
    content: /*#__PURE__*/_react.default.createElement(_TextField.default, {
      autoFocus: true,
      fullWidth: true,
      variant: "outlined",
      value: newName,
      onChange: function onChange(e) {
        return setNewName(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter' && newName.trim()) {
          handleRename();
        }
      }
    }),
    actions: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
      variant: "secondary",
      label: t('assistant_create.buttons.cancel'),
      onClick: function onClick() {
        return setShowRenameDialog(false);
      }
    }), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
      label: t('assistant_edit.buttons.edit'),
      onClick: handleRename,
      disabled: !newName.trim()
    })),
    onClose: function onClose() {
      return setShowRenameDialog(false);
    }
  }), showDeleteDialog && /*#__PURE__*/_react.default.createElement(_CozyDialogs.ConfirmDialog, {
    open: true,
    title: t('conversation_delete.title'),
    content: t('conversation_delete.content'),
    actions: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
      variant: "secondary",
      label: t('conversation_delete.buttons.cancel'),
      onClick: function onClick() {
        return setShowDeleteDialog(false);
      }
    }), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
      color: "error",
      label: t('conversation_delete.buttons.confirm'),
      onClick: handleDelete
    })),
    onClose: function onClose() {
      return setShowDeleteDialog(false);
    }
  }));
};

var _default = ConversationActions;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/ConversationBar.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react2 = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/SearchBar/index.js"));

var _useEventListener = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/hooks/useEventListener.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _excluded = ["value", "isEmpty", "onKeyDown"];

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

var ConversationBar = function ConversationBar(_ref) {
  var value = _ref.value,
      isEmpty = _ref.isEmpty,
      onKeyDown = _ref.onKeyDown,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var inputRef = (0, _react2.useRef)(); // to adjust input height for multiline when typing in it
  // eslint-disable-next-line react-hooks/refs

  (0, _useEventListener.default)(inputRef.current, 'input', function () {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = "".concat(inputRef.current.scrollHeight, "px");
    }
  });

  var handleKeyDown = function handleKeyDown(e) {
    if (isEmpty) return;
    onKeyDown(e);
  };

  return /*#__PURE__*/_react2.default.createElement(_SearchBar.default, (0, _extends2.default)({}, props, {
    elevation: 0,
    className: (0, _classnames.default)(styles['conversationBar'], (0, _defineProperty2.default)({}, styles['conversationBar--mobile'], isMobile)),
    icon: null,
    size: "auto",
    placeholder: t('assistant.search.placeholder'),
    value: value,
    disabledClear: true,
    disabledHover: true,
    componentsProps: {
      inputBase: {
        inputRef: inputRef,
        className: 'u-pv-0 u-pl-0',
        rows: 1,
        multiline: true,
        inputProps: {
          className: styles['conversationBar-input']
        },
        autoFocus: !isMobile,
        inputComponent: _react.ComposerPrimitive.Input,
        onKeyDown: handleKeyDown
      }
    }
  }));
};

var _default = ConversationBar;
exports["default"] = _default;

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
"./node_modules/cozy-search/dist/components/Conversations/ConversationList.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _List = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/List/index.js"));

var _ConversationListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationListItem.js"));

var ConversationList = function ConversationList(_ref) {
  var conversations = _ref.conversations,
      currentConversationId = _ref.currentConversationId,
      disableAction = _ref.disableAction,
      divider = _ref.divider,
      onOpenConversation = _ref.onOpenConversation,
      _ref$ItemComponent = _ref.ItemComponent,
      ItemComponent = _ref$ItemComponent === void 0 ? _ConversationListItem.default : _ref$ItemComponent;
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    dense: false,
    className: "u-w-100 u-p-0"
  }, conversations === null || conversations === void 0 ? void 0 : conversations.map(function (conversation) {
    return /*#__PURE__*/_react.default.createElement(ItemComponent, {
      key: conversation._id,
      disableAction: disableAction,
      conversation: conversation,
      selected: conversation._id === currentConversationId,
      onOpenConversation: onOpenConversation,
      divider: divider
    });
  }));
};

var _default = ConversationList;
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
"./node_modules/cozy-search/dist/components/Conversations/ConversationListItemWider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

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

var ConversationListItemWider = function ConversationListItemWider(_ref) {
  var _conversation$cozyMet;

  var conversation = _ref.conversation,
      selected = _ref.selected,
      divider = _ref.divider,
      disableAction = _ref.disableAction,
      onOpenConversation = _ref.onOpenConversation;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var _useCozyTheme = (0, _CozyTheme.useCozyTheme)(),
      theme = _useCozyTheme.type;

  var _useChatComponents = (0, _ChatComponentsContext.useChatComponents)(),
      ConversationActions = _useChatComponents.ConversationActions;

  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    divider: divider,
    button: true,
    onClick: function onClick() {
      return onOpenConversation(conversation._id);
    },
    className: (0, _classnames.default)('u-bdrs-0 u-ov-hidden u-flex u-flex-items-center u-flex-justify-between u-w-100 u-pv-half u-ph-1', styles['conversation-list-item'], styles['conversation-list-item--wider'], (0, _defineProperty2.default)({}, styles["conversation-list-item--selected--".concat(theme)], selected)),
    selected: selected
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_AssistantAvatar.default, {
    assistant: conversation.assistant,
    className: "u-mr-half u-w-1 u-h-1"
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    className: "u-pr-1",
    primary: /*#__PURE__*/_react.default.createElement("div", {
      className: "u-flex u-flex-items-center"
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "h6",
      className: "u-ellipsis u-mb-half"
    }, (0, _helpers.getNameOfConversation)(conversation)), !disableAction && /*#__PURE__*/_react.default.createElement(ConversationActions, {
      buttonClassName: (0, _classnames.default)(styles['conversation-list-item-action']),
      conversation: conversation
    })),
    secondary: /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "h6",
      className: "u-coolGrey"
    }, (0, _helpers.getDescriptionOfConversation)(conversation))
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: "u-miw-4 u-fz-xsmall u-ta-right u-dn-s"
  }, (0, _helpers.formatConversationDate)((_conversation$cozyMet = conversation.cozyMetadata) === null || _conversation$cozyMet === void 0 ? void 0 : _conversation$cozyMet.updatedAt, t, lang)));
}; // Memoized for the same reason as ConversationListItem: skip re-rendering
// list items whose props are unchanged on a conversation switch.


var _default = /*#__PURE__*/_react.default.memo(ConversationListItemWider);

exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/CozyComposerExtras.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _react2 = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _AssistantSelection = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantSelection.js"));

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _TwakeKnowledgeSelector = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/TwakeKnowledgeSelector.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CozyComposerExtras = function CozyComposerExtras(_ref) {
  var disabled = _ref.disabled;
  var isRunning = (0, _react2.useThread)(function (state) {
    return state.isRunning;
  });

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      setOpenedKnowledgePanel = _useAssistant.setOpenedKnowledgePanel,
      websearchEnabled = _useAssistant.websearchEnabled,
      setWebsearchEnabled = _useAssistant.setWebsearchEnabled;

  var handleToggleWebsearch = (0, _react.useCallback)(function () {
    if (isRunning) return;
    setWebsearchEnabled(function (prev) {
      return !prev;
    });
  }, [isRunning, setWebsearchEnabled]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _cozyFlags.default)('cozy.assistant.create-assistant.enabled') && /*#__PURE__*/_react.default.createElement(_AssistantSelection.default, {
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_TwakeKnowledgeSelector.default, {
    className: "u-ml-auto",
    onSelectTwakeKnowledge: setOpenedKnowledgePanel,
    websearchEnabled: websearchEnabled,
    onToggleWebsearch: handleToggleWebsearch
  }));
};

var _default = CozyComposerExtras;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/Sources/CozySourcesWithFilesQuery.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _Sources = __webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/Sources.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

var _excluded = ["data"];
var WEB_SOURCE_TYPE = 'web';

var CozySourcesWithFilesQuery = function CozySourcesWithFilesQuery(_ref) {
  var messageId = _ref.messageId,
      sources = _ref.sources;
  var fileIds = [];
  var emails = [];
  var urls = [];
  sources.forEach(function (source) {
    if (source.sourceType === WEB_SOURCE_TYPE) urls.push(source);else if (source.doctype === _queries.EMAIL_DOCTYPE) emails.push(source);else fileIds.push(source.id);
  });
  var enabled = fileIds.length > 0;
  var filesByIds = (0, _queries.buildFilesByIds)(fileIds, enabled);

  var _useQuery = (0, _cozyClient.useQuery)(filesByIds.definition, filesByIds.options),
      fetchedFiles = _useQuery.data,
      queryResult = (0, _objectWithoutProperties2.default)(_useQuery, _excluded);

  var isLoading = (0, _cozyClient.isQueryLoading)(queryResult);
  var files = fetchedFiles || [];
  if (isLoading && enabled || files.length === 0 && emails.length === 0 && urls.length === 0) return null;
  return /*#__PURE__*/_react.default.createElement(_Sources.Sources, {
    messageId: messageId,
    files: files,
    emails: emails,
    urls: urls
  });
};

var _default = CozySourcesWithFilesQuery;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/Sources/EmailSourceItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyLogger = _interopRequireDefault(__webpack_require__("./node_modules/cozy-logger/dist/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var styles = {
  "sourcesItem": "styles__sourcesItem___204Zw"
};

var EmailSourceItem = function EmailSourceItem(_ref) {
  var email = _ref.email;
  var client = (0, _cozyClient.useClient)();

  if (!client) {
    _cozyLogger.default.info('Client not available for EmailSourceItem');

    return null;
  } // FIXME: This prefix removal is a temporary workaround for tmail indexing.
  // The tmail_ prefix have to be removed from tmail indexing


  var TMAIL_PREFIX = 'tmail_';
  var emailId = email.id.startsWith(TMAIL_PREFIX) ? email.id.slice(TMAIL_PREFIX.length) : email.id;
  var docUrl = (0, _cozyClient.generateWebLink)({
    slug: 'mail',
    cozyUrl: client.getStackClient().uri,
    subDomainType: client.getInstanceOptions().subdomain,
    hash: "/bridge/dashboard/".concat(emailId)
  });
  var emailDate = email['datetime'] ? new Date(email['datetime']).toISOString().slice(0, 10) : '';
  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: styles['sourcesItem'],
    component: "a",
    href: docUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    button: true
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Mail,
    size: 32
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: "".concat(emailDate, " - ").concat(email['email.subject']),
    secondary: "".concat(email['email.preview'])
  }));
};

var _default = EmailSourceItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/Sources/FileSourcesItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _file = __webpack_require__("./node_modules/cozy-client/dist/models/file.js");

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _getIconForSearchResult = __webpack_require__("./node_modules/cozy-search/dist/components/Search/getIconForSearchResult.js");

var styles = {
  "sourcesItem": "styles__sourcesItem___204Zw"
};

var getSlug = function getSlug(file) {
  if ((0, _file.isNote)(file)) {
    return 'notes';
  }

  if ((0, _file.isDocs)(file)) {
    return 'docs';
  }

  return 'drive';
};

var getHash = function getHash(file, slug) {
  if (slug === 'notes') {
    return "/n/".concat(file._id);
  }

  if (slug === 'docs') {
    return "/bridge/docs/".concat(file.metadata.externalId);
  }

  return "/folder/".concat(file.dir_id, "/file/").concat(file._id);
};

var FileSourcesItem = function FileSourcesItem(_ref) {
  var file = _ref.file;
  var client = (0, _cozyClient.useClient)();
  var slug = getSlug(file);
  var hash = getHash(file, slug);
  var docUrl = (0, _cozyClient.generateWebLink)({
    slug: slug,
    cozyUrl: client === null || client === void 0 ? void 0 : client.getStackClient().uri,
    subDomainType: client === null || client === void 0 ? void 0 : client.getInstanceOptions().subdomain,
    hash: hash
  });
  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: styles['sourcesItem'],
    component: "a",
    href: docUrl,
    target: "_blank",
    button: true
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: (0, _getIconForSearchResult.getDriveMimeTypeIcon)(file),
    size: 32
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: file.name,
    secondary: file.path.replace(file.name, '')
  }));
};

var _default = FileSourcesItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Conversations/Sources/Sources.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Sources = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _Box = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Box/index.js"));

var _Chips = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Chips/index.js"));

var _Grow = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Grow/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _EmailSourceItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/EmailSourceItem.js"));

var _FileSourcesItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/FileSourcesItem.js"));

var _WebSourceItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/WebSourceItem.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Sources = function Sources(_ref) {
  var messageId = _ref.messageId,
      files = _ref.files,
      emails = _ref.emails,
      urls = _ref.urls;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showSources = _useState2[0],
      setShowSources = _useState2[1];

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var ref = (0, _react.useRef)();

  var handleShowSources = function handleShowSources() {
    setShowSources(function (v) {
      return !v;
    });
  }; // we want to scroll down to the sources button when it is displayed


  (0, _react.useEffect)(function () {
    var _ref$current;

    (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollIntoView(false);
  }, []);
  (0, _react.useEffect)(function () {
    if (showSources) {
      var _ref$current2;

      var innerContainer = (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.closest('.cozyDialogContent');

      if (!innerContainer) {
        var _ref$current3;

        (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.scrollIntoView(false);
        return;
      }

      var sourcesBottom = ref.current.getBoundingClientRect().bottom;
      var innerContainerBottom = innerContainer.getBoundingClientRect().bottom;

      if (sourcesBottom > innerContainerBottom) {
        ref.current.scrollIntoView(false);
      }
    }
  }, [showSources]);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    ref: ref,
    className: "u-mt-1-half"
  }, /*#__PURE__*/_react.default.createElement(_Chips.default, {
    className: "u-mb-1",
    icon: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.MultiFiles,
      className: "u-ml-half"
    }),
    label: t('assistant.sources', files.length + emails.length + urls.length),
    deleteIcon: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      className: "u-h-1",
      icon: _twakeIcons.Right,
      rotate: showSources ? 90 : 0
    }),
    clickable: true,
    onClick: handleShowSources,
    onDelete: handleShowSources
  }), /*#__PURE__*/_react.default.createElement(_Grow.default, {
    in: showSources,
    style: {
      transformOrigin: '0 0 0'
    },
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement("div", null, files.map(function (file) {
    return /*#__PURE__*/_react.default.createElement(_FileSourcesItem.default, {
      key: "".concat(messageId, "-").concat(file._id),
      file: file
    });
  }), emails.map(function (email) {
    return /*#__PURE__*/_react.default.createElement(_EmailSourceItem.default, {
      key: "".concat(messageId, "-").concat(email.id),
      email: email
    });
  }), urls === null || urls === void 0 ? void 0 : urls.map(function (url, index) {
    return /*#__PURE__*/_react.default.createElement(_WebSourceItem.default, {
      key: "".concat(messageId, "-").concat(url.url || index),
      source: url
    });
  }))));
};

exports.Sources = Sources;

}),
"./node_modules/cozy-search/dist/components/Conversations/Sources/WebSourceItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var styles = {
  "sourcesItem": "styles__sourcesItem___204Zw"
};

var isHttpUrl = function isHttpUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url.trim());
};

var WebSourceItem = function WebSourceItem(_ref) {
  var source = _ref.source;
  var url = source.url,
      title = source.title;
  if (!isHttpUrl(url)) return null;
  var displayTitle = title || url;
  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: styles['sourcesItem'],
    component: "a",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    button: true
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Globe,
    size: 32,
    color: "var(--primaryColor)"
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: displayTitle,
    secondary: url
  }));
};

var _default = WebSourceItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CozyAssistantRuntimeProvider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _react2 = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _useRealtime3 = _interopRequireDefault(__webpack_require__("./node_modules/cozy-realtime/dist/useRealtime.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Spinner = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Spinner/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _CozyRealtimeChatAdapter = __webpack_require__("./node_modules/cozy-search/dist/components/adapters/CozyRealtimeChatAdapter.js");

var _StreamBridge = __webpack_require__("./node_modules/cozy-search/dist/components/adapters/StreamBridge.js");

var _constants = __webpack_require__("./node_modules/cozy-search/dist/components/constants.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var log = (0, _cozyMinilog.default)('🔍 [CozyAssistantRuntimeProvider]');

var convertMessagesToThreadMessages = function convertMessagesToThreadMessages(messages) {
  if (!messages) return [];
  return messages.map(function (msg, idx) {
    return {
      id: msg.id || "msg-".concat(idx),
      role: msg.role,
      content: (0, _helpers.sanitizeChatContent)(msg.content),
      metadata: msg.role === 'assistant' && msg.sources ? {
        custom: {
          sources: msg.sources
        }
      } : undefined
    };
  });
};

var ConversationLoader = function ConversationLoader(_ref) {
  var _conversation$relatio4, _conversation$relatio5, _conversation$relatio6;

  var children = _ref.children,
      conversationId = _ref.conversationId;

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      setSelectedAssistantId = _useAssistant.setSelectedAssistantId;

  var conversationQuery = (0, _queries.buildChatConversationQueryById)(conversationId);
  var queryResult = (0, _cozyClient.useQuery)(conversationQuery.definition, conversationQuery.options);
  var conversation = queryResult.data;
  var isLoading = (0, _cozyClient.isQueryLoading)(queryResult);
  var initialMessages = (0, _react2.useMemo)(function () {
    return convertMessagesToThreadMessages(conversation === null || conversation === void 0 ? void 0 : conversation.messages);
  }, [conversation === null || conversation === void 0 ? void 0 : conversation.messages]);
  (0, _react2.useEffect)(function () {
    var _conversation$relatio, _conversation$relatio2, _conversation$relatio3;

    setSelectedAssistantId((conversation === null || conversation === void 0 ? void 0 : (_conversation$relatio = conversation.relationships) === null || _conversation$relatio === void 0 ? void 0 : (_conversation$relatio2 = _conversation$relatio.assistant) === null || _conversation$relatio2 === void 0 ? void 0 : (_conversation$relatio3 = _conversation$relatio2.data) === null || _conversation$relatio3 === void 0 ? void 0 : _conversation$relatio3._id) || _constants.DEFAULT_ASSISTANT._id);
  }, [conversation === null || conversation === void 0 ? void 0 : (_conversation$relatio4 = conversation.relationships) === null || _conversation$relatio4 === void 0 ? void 0 : (_conversation$relatio5 = _conversation$relatio4.assistant) === null || _conversation$relatio5 === void 0 ? void 0 : (_conversation$relatio6 = _conversation$relatio5.data) === null || _conversation$relatio6 === void 0 ? void 0 : _conversation$relatio6._id, setSelectedAssistantId]);

  if (isLoading) {
    return /*#__PURE__*/_react2.default.createElement("div", {
      className: "u-flex u-flex-items-center u-flex-justify-center u-h-100 u-w-100"
    }, /*#__PURE__*/_react2.default.createElement(_Spinner.default, {
      size: "xxlarge"
    }));
  }

  return /*#__PURE__*/_react2.default.createElement(CozyAssistantRuntimeProviderInner, {
    key: conversationId,
    conversationId: conversationId,
    initialMessages: initialMessages
  }, children);
};

var CozyAssistantRuntimeProviderInner = function CozyAssistantRuntimeProviderInner(_ref2) {
  var children = _ref2.children,
      conversationId = _ref2.conversationId,
      initialMessages = _ref2.initialMessages;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var client = (0, _cozyClient.useClient)();
  var streamBridgeRef = (0, _react2.useRef)(new _StreamBridge.StreamBridge());
  var messagesIdRef = (0, _react2.useRef)([]);
  var cancelledMessageIdsRef = (0, _react2.useRef)(new Set());
  var currentStreamingMessageIdRef = (0, _react2.useRef)(null);

  var _useAssistant2 = (0, _AssistantProvider.useAssistant)(),
      selectedAssistantId = _useAssistant2.selectedAssistantId,
      websearchEnabled = _useAssistant2.websearchEnabled;

  (0, _react2.useEffect)(function () {
    messagesIdRef.current = initialMessages.map(function (m) {
      return m.id;
    }).filter(function (id) {
      return !!id;
    });
  }, [initialMessages]);
  (0, _react2.useEffect)(function () {
    streamBridgeRef.current.setCleanupCallback(function () {
      try {
        if (currentStreamingMessageIdRef.current) {
          cancelledMessageIdsRef.current.add(currentStreamingMessageIdRef.current);
          currentStreamingMessageIdRef.current = null;
        }
      } catch (error) {
        log.error('Error during StreamBridge cleanup callback:', error);
      }
    });
  }, []);
  var handleConversationChange = (0, _react2.useCallback)(function (res) {
    try {
      if (res._id === conversationId && res.messages) {
        var newIds = res.messages.map(function (m) {
          return m.id;
        });
        var lastAssistantMsg = res.messages.filter(function (m) {
          return m.role === 'assistant';
        }).pop();

        if (lastAssistantMsg && !messagesIdRef.current.includes(lastAssistantMsg.id)) {
          if (currentStreamingMessageIdRef.current && currentStreamingMessageIdRef.current !== lastAssistantMsg.id) {
            cancelledMessageIdsRef.current.add(currentStreamingMessageIdRef.current);
          }

          currentStreamingMessageIdRef.current = lastAssistantMsg.id;
        }

        messagesIdRef.current = newIds;
      }
    } catch (error) {
      log.error('Error handling conversation change:', error);
    }
  }, [conversationId]);
  (0, _useRealtime3.default)(client, (0, _defineProperty2.default)({}, _queries.CHAT_CONVERSATIONS_DOCTYPE, {
    created: handleConversationChange,
    updated: handleConversationChange
  }), [conversationId]);
  (0, _useRealtime3.default)(client, (0, _defineProperty2.default)({}, _queries.CHAT_EVENTS_DOCTYPE, {
    created: function created(res) {
      if (cancelledMessageIdsRef.current.has(res._id)) {
        if (res.object === 'done' || res.object === 'error') {
          cancelledMessageIdsRef.current.delete(res._id);
        }

        return;
      } // Track which message is currently streaming
      // When a different message starts, mark the old one as cancelled


      if (res.object === 'delta') {
        if (currentStreamingMessageIdRef.current && currentStreamingMessageIdRef.current !== res._id) {
          cancelledMessageIdsRef.current.add(currentStreamingMessageIdRef.current);
        }

        currentStreamingMessageIdRef.current = res._id;
      }

      try {
        if (res.object === 'delta' && res.content !== undefined) {
          streamBridgeRef.current.onDelta(conversationId, res.content, res.position);
        }

        if (res.object === 'sources') {
          streamBridgeRef.current.onSources(conversationId, res.content);
        }

        if (res.object === 'done') {
          streamBridgeRef.current.onDone(conversationId);
          currentStreamingMessageIdRef.current = null;
        }

        if (res.object === 'error') {
          log.error('LLM error:', res.message);
          streamBridgeRef.current.onError(conversationId, new Error('LLM error'));
          currentStreamingMessageIdRef.current = null;
        }
      } catch (error) {
        log.error('Error handling chat real-time event:', error);
      }
    }
  }), [conversationId]);
  var adapter = (0, _react2.useMemo)(function () {
    return (0, _CozyRealtimeChatAdapter.createCozyRealtimeChatAdapter)({
      client: client,
      conversationId: conversationId,
      assistantId: selectedAssistantId,
      websearchEnabled: websearchEnabled
    }, t, // eslint-disable-next-line react-hooks/refs -- streamBridgeRef is stable and only read inside adapter.run(), not during render
    streamBridgeRef);
  }, [client, conversationId, selectedAssistantId, websearchEnabled, t]);
  var runtime = (0, _react.useLocalRuntime)(adapter, {
    initialMessages: initialMessages
  });
  (0, _react2.useEffect)(function () {
    var streamBridge = streamBridgeRef.current;
    return function () {
      try {
        streamBridge.cleanup(conversationId);
      } catch (error) {
        log.error('Error cleaning up StreamBridge on unmount:', error);
      }
    };
  }, [conversationId]);
  return /*#__PURE__*/_react2.default.createElement(_react.AssistantRuntimeProvider, {
    runtime: runtime
  }, children);
};
/**
 * Provider that sets up assistant-ui runtime with Cozy's backend.
 * Must be used within a route that provides conversationId param.
 */


var CozyAssistantRuntimeProvider = function CozyAssistantRuntimeProvider(_ref3) {
  var children = _ref3.children;

  var _useParams = (0, _reactRouterDom.useParams)(),
      conversationId = _useParams.conversationId;

  if (!conversationId) {
    return null;
  }

  return /*#__PURE__*/_react2.default.createElement(ConversationLoader, {
    conversationId: conversationId
  }, children);
};

var CozyAssistantErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CozyAssistantErrorBoundary, _React$Component);

  var _super = _createSuper(CozyAssistantErrorBoundary);

  function CozyAssistantErrorBoundary(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CozyAssistantErrorBoundary);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleRetry", function () {
      _this.setState({
        hasError: false,
        error: null
      });
    });
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  (0, _createClass2.default)(CozyAssistantErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      log.error('Assistant Runtime UI crashed:', error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/_react2.default.createElement("div", {
          className: "u-flex u-flex-column u-flex-items-center u-flex-justify-center u-h-100 u-w-100 u-ta-center"
        }, /*#__PURE__*/_react2.default.createElement(_Typography.default, {
          variant: "h4",
          className: "u-mb-1",
          color: "error"
        }, this.props.t('assistant.default_error')), /*#__PURE__*/_react2.default.createElement(_Buttons.default, {
          label: this.props.t('assistant.actions.reload'),
          onClick: this.handleRetry,
          variant: "secondary"
        }));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);
  return CozyAssistantErrorBoundary;
}(_react2.default.Component);

var CozyAssistantRuntimeProviderWithErrorBoundary = function CozyAssistantRuntimeProviderWithErrorBoundary(props) {
  var _useI18n2 = (0, _twakeI18n.useI18n)(),
      t = _useI18n2.t;

  return /*#__PURE__*/_react2.default.createElement(CozyAssistantErrorBoundary, {
    t: t
  }, /*#__PURE__*/_react2.default.createElement(CozyAssistantRuntimeProvider, props));
};

var _default = CozyAssistantRuntimeProviderWithErrorBoundary;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/ApiKeyStep.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Box = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Box/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _TextField = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/TextField/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _CozyTheme = __webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/helpers.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ApiKeyStep = function ApiKeyStep(_ref) {
  var formData = _ref.formData,
      selectedProvider = _ref.selectedProvider,
      onChange = _ref.onChange;

  var _useCozyTheme = (0, _CozyTheme.useCozyTheme)(),
      theme = _useCozyTheme.type;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _ref2 = selectedProvider || {},
      id = _ref2.id,
      providerName = _ref2.name;

  var _ref3 = formData || {},
      _ref3$model = _ref3.model,
      model = _ref3$model === void 0 ? '' : _ref3$model,
      _ref3$baseUrl = _ref3.baseUrl,
      baseUrl = _ref3$baseUrl === void 0 ? '' : _ref3$baseUrl,
      _ref3$apiKey = _ref3.apiKey,
      apiKey = _ref3$apiKey === void 0 ? '' : _ref3$apiKey,
      _ref3$encryptedApiKey = _ref3.encryptedApiKey,
      encryptedApiKey = _ref3$encryptedApiKey === void 0 ? '' : _ref3$encryptedApiKey;

  var isCustomModel = id === 'custom';
  var isModelUnsupported = (0, _helpers.checkIfModelUnsupported)(selectedProvider, model);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-column u-gap-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    className: "u-mb-1 u-c-text-secondary"
  }, isCustomModel ? t('assistant_create.steps.configuration.custom_provider_description') : t('assistant_create.steps.configuration.description')), isCustomModel && /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.configuration.url.label')), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    placeholder: t('assistant_create.steps.configuration.url.placeholder'),
    value: baseUrl,
    onChange: onChange('baseUrl'),
    variant: "outlined",
    type: "text"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.configuration.model.label')), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    placeholder: t('assistant_create.steps.configuration.model.placeholder'),
    value: model,
    onChange: onChange('model'),
    variant: "outlined",
    type: "text",
    error: isModelUnsupported,
    helperText: isModelUnsupported ? t('assistant_create.steps.configuration.model.unsupported') : undefined
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.configuration.api_key.label')), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    placeholder: encryptedApiKey ? '••••••••••••' : t('assistant_create.steps.configuration.api_key.placeholder'),
    value: apiKey,
    onChange: onChange('apiKey'),
    variant: "outlined",
    type: showPassword ? 'text' : 'password',
    InputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        onClick: function onClick() {
          return setShowPassword(function (prev) {
            return !prev;
          });
        },
        "aria-label": showPassword ? t('assistant.hide') : t('assistant.show')
      }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
        icon: _twakeIcons.Eye
      }))
    }
  })), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "block",
    border: 1,
    borderColor: "var(--dividerColor)",
    borderRadius: 8,
    padding: 2,
    className: (0, _classnames.default)({
      'u-bg-primaryBackgroundLight': theme === 'light',
      'u-bg-coolGrey': theme === 'dark'
    })
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.configuration.no_key')), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('assistant_create.steps.configuration.generate', {
    provider: !isCustomModel ? providerName : t('assistant_create.steps.configuration.custom_provider')
  })))));
};

var _default = ApiKeyStep;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/AssistantDialogContent.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ApiKeyStep = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/ApiKeyStep.js"));

var _BasicInfoStep = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/BasicInfoStep.js"));

var _ProviderSelectionStep = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/ProviderSelectionStep.js"));

var _useAssistantDialog = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/useAssistantDialog.js");

var AssistantDialogContent = function AssistantDialogContent(_ref) {
  var step = _ref.step,
      formData = _ref.formData,
      selectedProvider = _ref.selectedProvider,
      onChange = _ref.onChange,
      onAvatarChange = _ref.onAvatarChange,
      onProviderSelect = _ref.onProviderSelect,
      onModelSelect = _ref.onModelSelect;

  switch (step) {
    case _useAssistantDialog.STEPS.BASIC_INFO:
      return /*#__PURE__*/_react.default.createElement(_BasicInfoStep.default, {
        name: formData.name,
        description: formData.description,
        icon: formData.icon,
        onChange: onChange,
        onAvatarChange: onAvatarChange
      });

    case _useAssistantDialog.STEPS.MODEL_SELECTION:
      return /*#__PURE__*/_react.default.createElement(_ProviderSelectionStep.default, {
        selectedProvider: selectedProvider,
        onSelect: onProviderSelect
      });

    case _useAssistantDialog.STEPS.API_KEY:
      return /*#__PURE__*/_react.default.createElement(_ApiKeyStep.default, {
        formData: formData,
        selectedProvider: selectedProvider,
        onChange: onChange,
        onModelSelect: onModelSelect
      });

    default:
      return null;
  }
};

var _default = AssistantDialogContent;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/BasicInfoStep.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _TextField = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/TextField/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "BasicInfoStep": "styles__BasicInfoStep___2r0eM",
  "avatar-container": "styles__avatar-container___kJ_64",
  "avatar-image": "styles__avatar-image___2Mkxj",
  "file-input": "styles__file-input___2fB5n",
  "ModelSelectionStep": "styles__ModelSelectionStep___1auXB",
  "grid-container": "styles__grid-container___3wOus",
  "grid-container--mobile": "styles__grid-container--mobile___uCAg1",
  "model-card": "styles__model-card___fbAqF",
  "model-card--selected": "styles__model-card--selected___3hKq3",
  "model-card--openrag--light": "styles__model-card--openrag--light___1vabR",
  "model-card--openrag--dark": "styles__model-card--openrag--dark___1x0sK",
  "icon-container": "styles__icon-container___1vaTp",
  "icon-container--google": "styles__icon-container--google___3gtC7",
  "icon-container--custom": "styles__icon-container--custom___1_EFK",
  "icon-container--openai": "styles__icon-container--openai___3DsoO",
  "check-icon": "styles__check-icon___3uPUk",
  "CreateAssistantDialog": "styles__CreateAssistantDialog___1dSe_",
  "close-button": "styles__close-button___3jc_w"
};

var BasicInfoStep = function BasicInfoStep(_ref) {
  var name = _ref.name,
      description = _ref.description,
      icon = _ref.icon,
      onChange = _ref.onChange,
      onAvatarChange = _ref.onAvatarChange;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var fileInputRef = (0, _react.useRef)(null);

  var handleAvatarClick = function handleAvatarClick() {
    var _fileInputRef$current;

    (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
  };

  var handleFileChange = function handleFileChange(event) {
    var file = event.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onloadend = function () {
        onAvatarChange(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-column u-gap-1 ".concat(styles.BasicInfoStep)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    className: "u-mb-1 u-c-text-secondary"
  }, t('assistant_create.steps.basic_info.description')), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.basic_info.avatar')), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-justify-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": t('assistant_create.steps.basic_info.avatar'),
    className: "u-w-3 u-h-3 u-flex u-flex-justify-center u-flex-items-center u-c-pointer u-bd-1 u-bd-coolGrey u-ov-hidden ".concat(styles['avatar-container']),
    onClick: handleAvatarClick
  }, icon ? /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: "Avatar",
    className: "u-w-100 u-h-100 u-obj-cover ".concat(styles['avatar-image'])
  }) : /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Plus
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    ref: fileInputRef,
    onChange: handleFileChange,
    className: styles['file-input'],
    accept: "image/*",
    "data-testid": "avatar-input"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.basic_info.name')), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    placeholder: t('assistant_create.steps.basic_info.name_placeholder'),
    value: name,
    onChange: onChange('name'),
    variant: "outlined"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: "u-mb-half"
  }, t('assistant_create.steps.basic_info.instructions')), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    multiline: true,
    rows: 6,
    placeholder: t('assistant_create.steps.basic_info.instructions_placeholder'),
    value: description,
    onChange: onChange('description'),
    variant: "outlined"
  })));
};

var _default = BasicInfoStep;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/Provider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _CozyTheme = __webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var styles = {
  "BasicInfoStep": "styles__BasicInfoStep___2r0eM",
  "avatar-container": "styles__avatar-container___kJ_64",
  "avatar-image": "styles__avatar-image___2Mkxj",
  "file-input": "styles__file-input___2fB5n",
  "ModelSelectionStep": "styles__ModelSelectionStep___1auXB",
  "grid-container": "styles__grid-container___3wOus",
  "grid-container--mobile": "styles__grid-container--mobile___uCAg1",
  "model-card": "styles__model-card___fbAqF",
  "model-card--selected": "styles__model-card--selected___3hKq3",
  "model-card--openrag--light": "styles__model-card--openrag--light___1vabR",
  "model-card--openrag--dark": "styles__model-card--openrag--dark___1x0sK",
  "icon-container": "styles__icon-container___1vaTp",
  "icon-container--google": "styles__icon-container--google___3gtC7",
  "icon-container--custom": "styles__icon-container--custom___1_EFK",
  "icon-container--openai": "styles__icon-container--openai___3DsoO",
  "check-icon": "styles__check-icon___3uPUk",
  "CreateAssistantDialog": "styles__CreateAssistantDialog___1dSe_",
  "close-button": "styles__close-button___3jc_w"
};

var GeminiLogo = function GeminiLogo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0_20306_34597)"
  }, /*#__PURE__*/_react.default.createElement("mask", {
    id: "mask0_20306_34597",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "34",
    height: "34"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.972 0c.356 0 .666.243.753.588a20.345 20.345 0 0 0 1.046 3.09c1.125 2.615 2.67 4.904 4.63 6.865 1.963 1.961 4.252 3.506 6.866 4.632 1 .43 2.034.78 3.09 1.045a.776.776 0 0 1 0 1.505 20.346 20.346 0 0 0-3.09 1.046c-2.615 1.125-4.904 2.67-6.865 4.63-1.961 1.963-3.506 4.252-4.631 6.866-.431 1-.78 2.034-1.047 3.09a.777.777 0 0 1-.752.588.776.776 0 0 1-.752-.589 20.36 20.36 0 0 0-1.046-3.089c-1.125-2.615-2.67-4.904-4.631-6.865-1.962-1.961-4.25-3.506-6.866-4.631-1-.431-2.033-.78-3.089-1.047A.778.778 0 0 1 0 16.973c0-.356.243-.666.588-.752a20.345 20.345 0 0 0 3.09-1.046c2.615-1.126 4.904-2.67 6.865-4.632 1.961-1.96 3.506-4.25 4.632-6.865.43-1 .78-2.033 1.045-3.089A.777.777 0 0 1 16.972 0z",
    fill: "#000"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.972 0c.356 0 .666.243.753.588a20.345 20.345 0 0 0 1.046 3.09c1.125 2.615 2.67 4.904 4.63 6.865 1.963 1.961 4.252 3.506 6.866 4.632 1 .43 2.034.78 3.09 1.045a.776.776 0 0 1 0 1.505 20.346 20.346 0 0 0-3.09 1.046c-2.615 1.125-4.904 2.67-6.865 4.63-1.961 1.963-3.506 4.252-4.631 6.866-.431 1-.78 2.034-1.047 3.09a.777.777 0 0 1-.752.588.776.776 0 0 1-.752-.589 20.36 20.36 0 0 0-1.046-3.089c-1.125-2.615-2.67-4.904-4.631-6.865-1.962-1.961-4.25-3.506-6.866-4.631-1-.431-2.033-.78-3.089-1.047A.778.778 0 0 1 0 16.973c0-.356.243-.666.588-.752a20.345 20.345 0 0 0 3.09-1.046c2.615-1.126 4.904-2.67 6.865-4.632 1.961-1.96 3.506-4.25 4.632-6.865.43-1 .78-2.033 1.045-3.089A.777.777 0 0 1 16.972 0z",
    fill: "url(#paint0_linear_20306_34597)"
  })), /*#__PURE__*/_react.default.createElement("g", {
    mask: "url(#mask0_20306_34597)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M-3.065 26.538c3.922 1.393 8.43-1.219 10.068-5.833 1.64-4.614-.212-9.484-4.134-10.877-3.922-1.393-8.43 1.219-10.07 5.833-1.637 4.614.214 9.484 4.136 10.877z",
    fill: "#FFE432",
    filter: "url(#filter0_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.349 11.324c5.387 0 9.756-4.464 9.756-9.97 0-5.508-4.368-9.972-9.756-9.972S4.592-4.153 4.592 1.353c0 5.507 4.368 9.971 9.757 9.971z",
    fill: "#FC413D",
    filter: "url(#filter1_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.557 43.21c5.625-.275 9.896-6.404 9.54-13.69-.356-7.287-5.205-12.972-10.83-12.697-5.624.276-9.895 6.405-9.54 13.692.357 7.286 5.205 12.97 10.83 12.695z",
    fill: "#00B95C",
    filter: "url(#filter2_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.557 43.21c5.625-.275 9.896-6.404 9.54-13.69-.356-7.287-5.205-12.972-10.83-12.697-5.624.276-9.895 6.405-9.54 13.692.357 7.286 5.205 12.97 10.83 12.695z",
    fill: "#00B95C",
    filter: "url(#filter3_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.19 38.803c4.715-2.87 5.977-9.403 2.819-14.594-3.158-5.192-9.541-7.074-14.257-4.206-4.715 2.87-5.978 9.404-2.82 14.595 3.16 5.191 9.543 7.074 14.258 4.205z",
    fill: "#00B95C",
    filter: "url(#filter4_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M35.25 22.489c5.3 0 9.597-4.138 9.597-9.241 0-5.104-4.297-9.241-9.596-9.241-5.3 0-9.597 4.137-9.597 9.241s4.297 9.24 9.597 9.24z",
    fill: "#3186FF",
    filter: "url(#filter5_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M-6.834 21.417c4.88 3.71 12.01 2.546 15.923-2.601 3.915-5.147 3.132-12.328-1.748-16.04C2.46-.933-4.668.23-8.583 5.378c-3.914 5.147-3.13 12.329 1.749 16.04z",
    fill: "#FBBC04",
    filter: "url(#filter6_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.173 26.902c5.824 4.005 13.545 2.89 17.244-2.492 3.7-5.38 1.977-12.99-3.848-16.994-5.825-4.005-13.545-2.89-17.245 2.491-3.7 5.382-1.977 12.99 3.848 16.995z",
    fill: "#3186FF",
    filter: "url(#filter7_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M28.76-1.222c1.482 2.015-.422 5.932-4.253 8.75-3.831 2.818-8.137 3.468-9.62 1.454-1.481-2.015.423-5.933 4.253-8.75 3.831-2.818 8.138-3.469 9.62-1.454z",
    fill: "#749BFF",
    filter: "url(#filter8_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.595 8.423c5.925-5.495 7.958-12.935 4.542-16.618-3.416-3.682-10.988-2.213-16.912 3.282C-1.7.583-3.733 8.023-.317 11.705c3.416 3.683 10.988 2.214 16.912-3.282z",
    fill: "#FC413D",
    filter: "url(#filter9_f_20306_34597)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.451 28.162c3.521 2.52 7.564 2.902 9.03.855 1.465-2.048-.201-5.75-3.723-8.27-3.52-2.52-7.563-2.904-9.029-.856-1.465 2.047.2 5.75 3.722 8.27z",
    fill: "#FFEE48",
    filter: "url(#filter10_f_20306_34597)"
  }))), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter0_f_20306_34597",
    x: "-10.37",
    y: "6.88",
    width: "20.544",
    height: "22.607",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "1.287",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter1_f_20306_34597",
    x: "-7.848",
    y: "-21.058",
    width: "44.393",
    height: "44.822",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "6.22",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter2_f_20306_34597",
    x: "-10.868",
    y: "6.238",
    width: "41.561",
    height: "47.557",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "5.288",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter3_f_20306_34597",
    x: "-10.868",
    y: "6.238",
    width: "41.561",
    height: "47.557",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "5.288",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter4_f_20306_34597",
    x: "-10.382",
    y: "8.086",
    width: "41.706",
    height: "42.634",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "5.288",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter5_f_20306_34597",
    x: "15.605",
    y: "-6.043",
    width: "39.292",
    height: "38.581",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "5.025",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter6_f_20306_34597",
    x: "-20.182",
    y: "-8.502",
    width: "40.872",
    height: "41.197",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "4.554",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter7_f_20306_34597",
    x: "4.241",
    y: "-3.121",
    width: "41.26",
    height: "40.56",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "4.067",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter8_f_20306_34597",
    x: "7.107",
    y: "-9.671",
    width: "29.435",
    height: "27.101",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "3.639",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter9_f_20306_34597",
    x: "-8.122",
    y: "-16.371",
    width: "37.064",
    height: "36.252",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "3.074",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("filter", {
    id: "filter10_f_20306_34597",
    x: "-7.411",
    y: "10.966",
    width: "29.032",
    height: "26.977",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react.default.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    stdDeviation: "3.804",
    result: "effect1_foregroundBlur_20306_34597"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "paint0_linear_20306_34597",
    x1: "9.649",
    y1: "22.712",
    x2: "27.28",
    y2: "7.848",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#4893FC"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: ".27",
    stopColor: "#4893FC"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: ".777",
    stopColor: "#969DFF"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#BD99FE"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_20306_34597"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0 0h34v34H0z"
  }))));
};

GeminiLogo.defaultProps = {
  width: "34",
  height: "34",
  viewBox: "0 0 34 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var MetaLogo = function MetaLogo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0_20306_34592)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.856 15.636c0 1.363.299 2.41.69 3.043.513.83 1.277 1.18 2.057 1.18 1.005 0 1.925-.249 3.698-2.7 1.42-1.966 3.094-4.724 4.22-6.453l1.906-2.93c1.325-2.035 2.858-4.296 4.616-5.83C22.478.696 24.026 0 25.583 0c2.616 0 5.108 1.516 7.014 4.358 2.087 3.114 3.1 7.035 3.1 11.082 0 2.406-.474 4.174-1.281 5.57-.78 1.351-2.299 2.7-4.855 2.7v-3.85c2.189 0 2.735-2.011 2.735-4.313 0-3.28-.765-6.92-2.45-9.52-1.195-1.845-2.744-2.972-4.449-2.972-1.843 0-3.326 1.39-4.994 3.87-.886 1.317-1.796 2.922-2.818 4.733l-1.124 1.992c-2.26 4.006-2.832 4.919-3.962 6.424-1.98 2.637-3.67 3.636-5.896 3.636-2.64 0-4.31-1.143-5.344-2.866C.415 19.44 0 17.598 0 15.499l3.856.137z",
    fill: "#0081FB"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.041 4.63C4.809 1.906 7.36 0 10.286 0c1.694 0 3.379.502 5.138 1.938 1.924 1.57 3.975 4.156 6.533 8.418l.918 1.529c2.214 3.69 3.474 5.587 4.212 6.482.948 1.15 1.612 1.493 2.475 1.493 2.188 0 2.735-2.011 2.735-4.313l3.401-.107c0 2.406-.474 4.174-1.281 5.57-.78 1.351-2.3 2.7-4.855 2.7-1.59 0-2.997-.345-4.553-1.813-1.197-1.127-2.596-3.13-3.672-4.93l-3.202-5.348c-1.606-2.684-3.08-4.685-3.933-5.59-.917-.975-2.096-2.152-3.978-2.152-1.524 0-2.817 1.069-3.9 2.704L3.041 4.63z",
    fill: "url(#paint0_linear_20306_34592)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.223 3.877c-1.523 0-2.817 1.069-3.9 2.704-1.53 2.31-2.467 5.75-2.467 9.055 0 1.363.299 2.41.69 3.043l-3.287 2.165C.415 19.44 0 17.598 0 15.499 0 11.68 1.048 7.703 3.04 4.63 4.808 1.906 7.36 0 10.285 0l-.062 3.877z",
    fill: "url(#paint1_linear_20306_34592)"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "paint0_linear_20306_34592",
    x1: "7.573",
    y1: "14.524",
    x2: "32.153",
    y2: "15.765",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#0064E1"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: ".4",
    stopColor: "#0064E1"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: ".83",
    stopColor: "#0073EE"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#0082FB"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "paint1_linear_20306_34592",
    x1: "5.586",
    y1: "17.255",
    x2: "5.586",
    y2: "8.193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#0082FB"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "1",
    stopColor: "#0064E0"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_20306_34592"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0 0h36v23.71H0z"
  }))));
};

MetaLogo.defaultProps = {
  width: "36",
  height: "24",
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var MistralLogo = function MistralLogo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0_20306_34631)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.644 0H4.822v4.777h4.822V0zM28.93 0h-4.82v4.777h4.82V0z",
    fill: "#FFD800"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.465 4.776H4.822v4.776h9.643V4.776zM28.932 4.776h-9.643v4.776h9.643V4.776z",
    fill: "#FFAF00"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M28.932 9.552H4.822v4.777h24.11V9.552z",
    fill: "#FF8205"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.644 14.33H4.822v4.777h4.822V14.33zM19.286 14.33h-4.821v4.777h4.821V14.33zM28.93 14.33h-4.82v4.777h4.82V14.33z",
    fill: "#FA500F"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.467 19.11H0v4.776h14.467v-4.777zM33.756 19.11H19.29v4.776h14.467v-4.777z",
    fill: "#E10500"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_20306_34631"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0 0h34v23.985H0z"
  }))));
};

MistralLogo.defaultProps = {
  width: "34",
  height: "24",
  viewBox: "0 0 34 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenAILogo = function OpenAILogo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0_20306_34587)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M31.485 13.933a8.403 8.403 0 0 0-.72-6.9 8.52 8.52 0 0 0-9.15-4.078 8.444 8.444 0 0 0-6.34-2.822 8.533 8.533 0 0 0-8.111 5.883 8.432 8.432 0 0 0-5.62 4.078 8.498 8.498 0 0 0 1.05 9.962 8.372 8.372 0 0 0 .72 6.888 8.519 8.519 0 0 0 9.162 4.09 8.412 8.412 0 0 0 6.329 2.833 8.533 8.533 0 0 0 8.11-5.883 8.385 8.385 0 0 0 5.61-4.078 8.479 8.479 0 0 0-1.04-9.962v-.011zM28.857 8.14a6.348 6.348 0 0 1 .754 4.227c-.045-.035-.137-.08-.194-.115L22.7 8.37a1.126 1.126 0 0 0-1.108 0l-7.87 4.547V9.58l6.5-3.758a6.319 6.319 0 0 1 8.635 2.319zm-15.136 6.934l3.313-1.92 3.313 1.92v3.827l-3.313 1.92-3.313-1.92v-3.827zm1.542-12.737c1.485 0 2.913.514 4.056 1.462-.046.023-.137.08-.206.114l-6.717 3.873c-.343.194-.549.56-.549.96v9.093l-2.89-1.668V8.655a6.326 6.326 0 0 1 6.318-6.329l-.012.012zm-11.8 8.864a6.335 6.335 0 0 1 3.29-2.775v7.985c0 .4.205.754.548.96l7.86 4.534-2.902 1.68-6.489-3.747a6.325 6.325 0 0 1-2.307-8.637zm1.77 14.657a6.27 6.27 0 0 1-.754-4.227c.046.034.137.08.194.114l6.718 3.885a1.126 1.126 0 0 0 1.108 0l7.86-4.547v3.336l-6.5 3.747c-3.028 1.736-6.89.708-8.637-2.308h.011zm13.583 5.803a6.303 6.303 0 0 1-4.044-1.462c.07-.036.138-.074.206-.114l6.717-3.873c.342-.194.56-.56.548-.96v-9.081l2.89 1.668v7.505c0 3.495-2.833 6.329-6.317 6.329v-.012zm11.812-8.865a6.306 6.306 0 0 1-3.29 2.765v-7.985c0-.4-.206-.766-.548-.96l-7.871-4.546 2.89-1.668 6.5 3.747a6.315 6.315 0 0 1 2.308 8.636l.011.011z",
    fill: "#000"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0_20306_34587"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0 0h34v34H0z"
  }))));
};

OpenAILogo.defaultProps = {
  width: "34",
  height: "34",
  viewBox: "0 0 34 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ICONS = {
  TwakeWorkplace: _twakeIcons.TwakeWorkplace,
  GeminiLogo: GeminiLogo,
  OpenAILogo: OpenAILogo,
  MistralLogo: MistralLogo,
  MetaLogo: MetaLogo,
  PlusSmall: _twakeIcons.PlusSmall
};

var Provider = function Provider(_ref) {
  var _cx;

  var selectedProvider = _ref.selectedProvider,
      provider = _ref.provider,
      onSelect = _ref.onSelect;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useCozyTheme = (0, _CozyTheme.useCozyTheme)(),
      theme = _useCozyTheme.type;

  var isSelected = (selectedProvider === null || selectedProvider === void 0 ? void 0 : selectedProvider.id) === provider.id;
  var isOpenRag = provider.id === 'openrag';
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)('u-p-1 u-c-pointer u-flex u-flex-row u-flex-items-center', styles['model-card'], (_cx = {}, (0, _defineProperty2.default)(_cx, styles['model-card--selected'], isSelected), (0, _defineProperty2.default)(_cx, styles["model-card--openrag--".concat(theme)], isOpenRag), _cx)),
    onClick: function onClick() {
      return onSelect(provider);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-flex u-flex-items-center u-flex-justify-center u-flex-shrink-0 u-mr-1', styles['icon-container'], styles["icon-container--".concat(provider.id)])
  },
  /* FIXME: the twake icon is not rendered properly with Icon */
  isOpenRag ? /*#__PURE__*/_react.default.createElement(_twakeIcons.TwakeWorkplace, {
    width: 40,
    height: 40
  }) : /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: ICONS[provider.icon],
    size: 40,
    preserveColor: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex-grow-1"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    className: "u-flex u-flex-justify-between u-flex-items-start"
  }, provider.id === 'custom' ? t(provider.name) : provider.name), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    className: "u-mt-half u-c-text-secondary"
  }, t(provider.description))), isSelected && /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Check,
    className: "u-c-white u-bg-primary u-br-circle u-p-half ".concat(styles['check-icon']),
    size: 12
  }));
};

var _default = Provider;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/ProviderSelectionStep.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Alert = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Alert/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _Provider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/Provider.js"));

var providers = [{
  id: "openrag",
  name: "Twake",
  models: ["openrag"],
  description: "assistant_create.steps.provider_selection.openrag.description",
  icon: "TwakeLogo",
  external: false
}, {
  id: "google",
  name: "Google",
  models: ["gemini-3-pro", "gemini-3-pro-001", "gemini-3-flash", "gemini-2.5-pro", "gemini-2.5-flash", "gemini-nano-banana-pro"],
  description: "assistant_create.steps.provider_selection.google.description",
  icon: "GeminiLogo",
  baseUrl: "https://generativelanguage.googleapis.com/v1beta",
  external: true
}, {
  id: "openai",
  name: "OpenAI",
  models: ["gpt-5.1", "gpt-5-2025-11-14", "o3", "o4-mini", "gpt-5-mini", "gpt-4.1-mini", "sora-v2"],
  unsupportedModels: ["o1", "o1-mini", "o1-preview"],
  description: "assistant_create.steps.provider_selection.openai.description",
  icon: "OpenAILogo",
  baseUrl: "https://api.openai.com/v1",
  external: true
}, {
  id: "mistral_ai",
  name: "Mistral AI",
  models: ["mistral-large-3", "mistral-large-2512", "mistral-medium-3.1", "ministral-3b", "ministral-8b", "ministral-14b", "codestral-2", "devstral-small-2", "pixtral-large-2502"],
  description: "assistant_create.steps.provider_selection.mistral_ai.description",
  icon: "MistralLogo",
  baseUrl: "https://api.mistral.ai/v1",
  external: true
}, {
  id: "meta",
  name: "Meta",
  models: ["meta-llama/Llama-4-Scout-17B-16E-Instruct", "meta-llama/Llama-4-Maverick-402B-Instruct", "meta-llama/Llama-3.3-70B-Instruct", "meta-llama/Llama-3.2-90B-Vision-Instruct"],
  description: "assistant_create.steps.provider_selection.meta.description",
  icon: "MetaLogo",
  baseUrl: "https://api.llama.com/v1",
  external: true
}, {
  id: "custom",
  name: "assistant_create.steps.provider_selection.custom.name",
  description: "assistant_create.steps.provider_selection.custom.description",
  icon: "PlusSmallIcon",
  external: true
}];
var styles = {
  "BasicInfoStep": "styles__BasicInfoStep___2r0eM",
  "avatar-container": "styles__avatar-container___kJ_64",
  "avatar-image": "styles__avatar-image___2Mkxj",
  "file-input": "styles__file-input___2fB5n",
  "ModelSelectionStep": "styles__ModelSelectionStep___1auXB",
  "grid-container": "styles__grid-container___3wOus",
  "grid-container--mobile": "styles__grid-container--mobile___uCAg1",
  "model-card": "styles__model-card___fbAqF",
  "model-card--selected": "styles__model-card--selected___3hKq3",
  "model-card--openrag--light": "styles__model-card--openrag--light___1vabR",
  "model-card--openrag--dark": "styles__model-card--openrag--dark___1x0sK",
  "icon-container": "styles__icon-container___1vaTp",
  "icon-container--google": "styles__icon-container--google___3gtC7",
  "icon-container--custom": "styles__icon-container--custom___1_EFK",
  "icon-container--openai": "styles__icon-container--openai___3DsoO",
  "check-icon": "styles__check-icon___3uPUk",
  "CreateAssistantDialog": "styles__CreateAssistantDialog___1dSe_",
  "close-button": "styles__close-button___3jc_w"
};

var ProviderSelectionStep = function ProviderSelectionStep(_ref) {
  var selectedProvider = _ref.selectedProvider,
      onSelect = _ref.onSelect;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-flex u-flex-column', styles.ModelSelectionStep)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    className: "u-mb-1 u-c-text-secondary"
  }, t('assistant_create.steps.provider_selection.description')), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles['grid-container'], (0, _defineProperty2.default)({}, styles['grid-container--mobile'], isMobile))
  }, providers.map(function (provider) {
    return /*#__PURE__*/_react.default.createElement(_Provider.default, {
      key: provider.id,
      provider: provider,
      selectedProvider: selectedProvider,
      onSelect: onSelect
    });
  })), (selectedProvider === null || selectedProvider === void 0 ? void 0 : selectedProvider.external) && /*#__PURE__*/_react.default.createElement(_Alert.default, {
    severity: "primary",
    className: "u-mt-1"
  }, t('assistant_create.steps.provider_selection.external_warning')));
};

var _default = ProviderSelectionStep;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/helpers.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSelectedProviderById = exports.checkIfModelUnsupported = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var providers = [{
  id: "openrag",
  name: "Twake",
  models: ["openrag"],
  description: "assistant_create.steps.provider_selection.openrag.description",
  icon: "TwakeLogo",
  external: false
}, {
  id: "google",
  name: "Google",
  models: ["gemini-3-pro", "gemini-3-pro-001", "gemini-3-flash", "gemini-2.5-pro", "gemini-2.5-flash", "gemini-nano-banana-pro"],
  description: "assistant_create.steps.provider_selection.google.description",
  icon: "GeminiLogo",
  baseUrl: "https://generativelanguage.googleapis.com/v1beta",
  external: true
}, {
  id: "openai",
  name: "OpenAI",
  models: ["gpt-5.1", "gpt-5-2025-11-14", "o3", "o4-mini", "gpt-5-mini", "gpt-4.1-mini", "sora-v2"],
  unsupportedModels: ["o1", "o1-mini", "o1-preview"],
  description: "assistant_create.steps.provider_selection.openai.description",
  icon: "OpenAILogo",
  baseUrl: "https://api.openai.com/v1",
  external: true
}, {
  id: "mistral_ai",
  name: "Mistral AI",
  models: ["mistral-large-3", "mistral-large-2512", "mistral-medium-3.1", "ministral-3b", "ministral-8b", "ministral-14b", "codestral-2", "devstral-small-2", "pixtral-large-2502"],
  description: "assistant_create.steps.provider_selection.mistral_ai.description",
  icon: "MistralLogo",
  baseUrl: "https://api.mistral.ai/v1",
  external: true
}, {
  id: "meta",
  name: "Meta",
  models: ["meta-llama/Llama-4-Scout-17B-16E-Instruct", "meta-llama/Llama-4-Maverick-402B-Instruct", "meta-llama/Llama-3.3-70B-Instruct", "meta-llama/Llama-3.2-90B-Vision-Instruct"],
  description: "assistant_create.steps.provider_selection.meta.description",
  icon: "MetaLogo",
  baseUrl: "https://api.llama.com/v1",
  external: true
}, {
  id: "custom",
  name: "assistant_create.steps.provider_selection.custom.name",
  description: "assistant_create.steps.provider_selection.custom.description",
  icon: "PlusSmallIcon",
  external: true
}];
/**
 * Get the provider corresponding to a given model name.
 * If no provider matches, return the custom provider.
 * @param {string} providerId - The ID of the provider.
 * @returns {object} The provider object.
 */

var getSelectedProviderById = function getSelectedProviderById(providerId) {
  return providers.find(function (provider) {
    return provider.id === providerId;
  }) || _objectSpread({}, providers.find(function (provider) {
    return provider.id === 'custom';
  }));
};
/**
 * Check whether the given model is unsupported by the provider.
 * @param {object} provider - The provider object.
 * @param {string} model - The model name.
 * @returns {boolean} True if the model is unsupported.
 */


exports.getSelectedProviderById = getSelectedProviderById;

var checkIfModelUnsupported = function checkIfModelUnsupported(provider, model) {
  var unsupportedModels = (provider === null || provider === void 0 ? void 0 : provider.unsupportedModels) || [];
  return unsupportedModels.includes(model === null || model === void 0 ? void 0 : model.trim());
};

exports.checkIfModelUnsupported = checkIfModelUnsupported;

}),
"./node_modules/cozy-search/dist/components/CreateAssistantSteps/useAssistantDialog.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAssistantDialog = exports.STEPS = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__("./node_modules/react/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _Alert = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Alert/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var _constants = __webpack_require__("./node_modules/cozy-search/dist/components/constants.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/helpers.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var log = (0, _cozyMinilog.default)('[AssistantDialog]');
var STEPS = {
  BASIC_INFO: 0,
  MODEL_SELECTION: 1,
  API_KEY: 2
};
/**
 * Hook to manage the state and logic of Assistant Dialogs (Create/Edit).
 * @param {Object} props
 * @param {Function} props.onClose - Function to close the dialog
 * @param {Object} [props.initialData] - Initial formData
 */

exports.STEPS = STEPS;

var useAssistantDialog = function useAssistantDialog(_ref) {
  var onClose = _ref.onClose,
      _ref$initialData = _ref.initialData,
      initialData = _ref$initialData === void 0 ? {} : _ref$initialData;
  (0, _twakeI18n.useExtendI18n)(_locales.locales);

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useAlert = (0, _Alert.useAlert)(),
      showAlert = _useAlert.showAlert;

  var _useState = (0, _react.useState)(STEPS.BASIC_INFO),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = (0, _react.useState)(initialData.selectedProvider || null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectedProvider = _useState4[0],
      setSelectedProvider = _useState4[1];

  var _useState5 = (0, _react.useState)(_objectSpread({
    name: '',
    description: '',
    icon: null,
    model: '',
    baseUrl: '',
    apiKey: ''
  }, initialData)),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      formData = _useState6[0],
      setFormData = _useState6[1];

  var canSubmit = (0, _react.useMemo)(function () {
    return step === STEPS.API_KEY || step === STEPS.MODEL_SELECTION && (selectedProvider === null || selectedProvider === void 0 ? void 0 : selectedProvider.id) === _constants.OPENRAG_MODEL;
  }, [step, selectedProvider === null || selectedProvider === void 0 ? void 0 : selectedProvider.id]);

  var handleChange = function handleChange(field) {
    return function (event) {
      var _event$target;

      var value = ((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value) !== undefined ? event.target.value : event;
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2.default)({}, field, value));
      });
    };
  };

  var handleChangeModel = function handleChangeModel(value) {
    handleChange('model')({
      target: {
        value: value
      }
    });
    setSelectedProvider(function (prev) {
      return prev ? _objectSpread(_objectSpread({}, prev), {}, {
        model: value
      }) : prev;
    });
  };

  var handleAvatarChange = function handleAvatarChange(avatarData) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        icon: avatarData
      });
    });
  };

  var handleProviderSelection = function handleProviderSelection(provider) {
    setFormData(function (prev) {
      var _provider$baseUrl, _provider$models$, _provider$models;

      return _objectSpread(_objectSpread({}, prev), {}, {
        baseUrl: (_provider$baseUrl = provider.baseUrl) !== null && _provider$baseUrl !== void 0 ? _provider$baseUrl : '',
        model: (_provider$models$ = (_provider$models = provider.models) === null || _provider$models === void 0 ? void 0 : _provider$models[0]) !== null && _provider$models$ !== void 0 ? _provider$models$ : '',
        apiKey: '',
        encryptedApiKey: '',
        providerId: provider.id
      });
    });
    setSelectedProvider(_objectSpread(_objectSpread({}, provider), {}, {
      name: provider.id === 'custom' ? undefined : provider.name
    }));
  };

  var handleBack = function handleBack() {
    if (step === STEPS.BASIC_INFO) {
      onClose();
    } else {
      setStep(function (prev) {
        return prev - 1;
      });
    }
  };
  /**
   * Handles the Next button click.
   * @param {Function} onSubmit - Async function to execute on the final step (Create/Edit).
   */


  var handleNext = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(onSubmit) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!canSubmit) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return onSubmit(formData);

            case 4:
              onClose();
              _context.next = 8;
              break;

            case 7:
              setStep(function (prev) {
                return prev + 1;
              });

            case 8:
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              log.error('Error in handleNext:', _context.t0);
              showAlert({
                message: t('assistant.default_error'),
                severity: 'error'
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function handleNext(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var isNextDisabled = function isNextDisabled(isAllowToSkipApiKey) {
    var _formData$name;

    switch (step) {
      case STEPS.BASIC_INFO:
        return !((_formData$name = formData.name) !== null && _formData$name !== void 0 && _formData$name.trim());

      case STEPS.MODEL_SELECTION:
        return !selectedProvider;

      case STEPS.API_KEY:
        {
          var _formData$apiKey, _formData$model, _formData$baseUrl;

          var isCustom = (selectedProvider === null || selectedProvider === void 0 ? void 0 : selectedProvider.id) === 'custom';
          var apiKeyMissing = !((_formData$apiKey = formData.apiKey) !== null && _formData$apiKey !== void 0 && _formData$apiKey.trim()) && !isAllowToSkipApiKey;
          var modelMissing = !((_formData$model = formData.model) !== null && _formData$model !== void 0 && _formData$model.trim());
          var baseUrlMissing = isCustom && !((_formData$baseUrl = formData.baseUrl) !== null && _formData$baseUrl !== void 0 && _formData$baseUrl.trim());
          var modelUnsupported = (0, _helpers.checkIfModelUnsupported)(selectedProvider, formData.model);
          return apiKeyMissing || modelMissing || baseUrlMissing || modelUnsupported;
        }

      default:
        return false;
    }
  };

  return {
    step: step,
    setStep: setStep,
    formData: formData,
    setFormData: setFormData,
    selectedProvider: selectedProvider,
    setSelectedProvider: setSelectedProvider,
    handleChange: handleChange,
    handleAvatarChange: handleAvatarChange,
    handleProviderSelection: handleProviderSelection,
    handleBack: handleBack,
    handleNext: handleNext,
    isNextDisabled: isNextDisabled,
    handleChangeModel: handleChangeModel,
    canSubmit: canSubmit
  };
};

exports.useAssistantDialog = useAssistantDialog;

}),
"./node_modules/cozy-search/dist/components/Icons/AiText.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/ai-text.svg` to regenerate;
function SvgAiText(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 27 22",
    fill: "none"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.169 21.561h-4.17L7.592 0h4.821l7.602 21.561h-4.17l-5.758-17.14h-.169L4.17 21.562zm.137-8.454h11.37v3.138H4.306v-3.138zM26.759 0v21.561h-3.905V0h3.905z",
    fill: "#97A3B7"
  }));
}

var _default = SvgAiText;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Messages/AssistantMessage.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react2 = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Alert = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Alert/index.js"));

var _Box = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Box/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _MarkdownText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Messages/MarkdownText.js"));

var _TwakeAssistantIcon = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantIcon/TwakeAssistantIcon.js");

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

var useIsErrorMessage = function useIsErrorMessage() {
  return (0, _react.useMessage)(function (s) {
    var _s$metadata, _s$metadata$custom;

    return ((_s$metadata = s.metadata) === null || _s$metadata === void 0 ? void 0 : (_s$metadata$custom = _s$metadata.custom) === null || _s$metadata$custom === void 0 ? void 0 : _s$metadata$custom.isError) === true;
  });
};

var AssistantMessage = function AssistantMessage() {
  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var isThinking = (0, _react.useMessage)(function (s) {
    var _s$status;

    return ((_s$status = s.status) === null || _s$status === void 0 ? void 0 : _s$status.type) === 'requires-action';
  });
  var isError = useIsErrorMessage();
  var messageId = (0, _react.useMessage)(function (s) {
    return s.id;
  });
  var sources = (0, _react.useMessage)(function (s) {
    var _s$metadata2, _s$metadata2$custom;

    return (_s$metadata2 = s.metadata) === null || _s$metadata2 === void 0 ? void 0 : (_s$metadata2$custom = _s$metadata2.custom) === null || _s$metadata2$custom === void 0 ? void 0 : _s$metadata2$custom.sources;
  });

  var _useChatComponents = (0, _ChatComponentsContext.useChatComponents)(),
      SourcesRenderer = _useChatComponents.SourcesRenderer;

  return /*#__PURE__*/_react2.default.createElement(_react.MessagePrimitive.Root, {
    className: "u-mt-1-half"
  }, isThinking && /*#__PURE__*/_react2.default.createElement(_Box.default, {
    display: "flex",
    alignItems: "center",
    gridGap: 12
  }, /*#__PURE__*/_react2.default.createElement(_twakeIcons.Icon, {
    icon: _TwakeAssistantIcon.TwakeAssistantIcon,
    size: 24,
    className: "u-mh-half",
    color: "var(--primaryColor)"
  }), /*#__PURE__*/_react2.default.createElement(_Typography.default, {
    variant: "h6",
    display: "inline"
  }, t('assistant.message.running'))), isError ? /*#__PURE__*/_react2.default.createElement(_Alert.default, {
    severity: "error"
  }, t('assistant.default_error')) : /*#__PURE__*/_react2.default.createElement(_react.MessagePrimitive.Content, {
    components: {
      Text: _MarkdownText.default
    }
  }), (sources === null || sources === void 0 ? void 0 : sources.length) > 0 && /*#__PURE__*/_react2.default.createElement(SourcesRenderer, {
    messageId: messageId,
    sources: sources
  }));
};

var _default = AssistantMessage;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Messages/MarkdownText.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _react2 = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Markdown = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Markdown/index.js"));

var MarkdownText = function MarkdownText() {
  var textPart = (0, _react.useMessagePartText)();
  if (!(textPart !== null && textPart !== void 0 && textPart.text)) return null;
  return /*#__PURE__*/_react2.default.createElement(_Markdown.default, {
    content: textPart.text
  });
};

var _default = MarkdownText;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Messages/UserMessage.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__("./node_modules/@assistant-ui/react/dist/index.js");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react2 = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Box = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Box/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _CozyTheme = __webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js");

var styles = {
  "cozyThread-user-messages": "styles__cozyThread-user-messages___3Hfj-",
  "cozyThread-user-messages--light": "styles__cozyThread-user-messages--light___1jBny",
  "cozyThread-user-messages--dark": "styles__cozyThread-user-messages--dark___1Om3B"
};

var UserMessage = function UserMessage() {
  var _useCozyTheme = (0, _CozyTheme.useCozyTheme)(),
      theme = _useCozyTheme.type;

  return /*#__PURE__*/_react2.default.createElement(_react.MessagePrimitive.Root, {
    className: "u-mt-1"
  }, /*#__PURE__*/_react2.default.createElement(_Box.default, {
    display: "block",
    border: 0,
    borderRadius: 10,
    padding: 0.5,
    className: (0, _classnames.default)('u-ml-auto', styles['cozyThread-user-messages'], styles["cozyThread-user-messages--".concat(theme)])
  }, /*#__PURE__*/_react2.default.createElement(_react.MessagePrimitive.Parts, {
    components: {
      Text: function Text(_ref) {
        var text = _ref.text;
        return /*#__PURE__*/_react2.default.createElement(_Typography.default, null, text);
      }
    }
  })));
};

var _default = UserMessage;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/NoResultItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var NoResultItem = function NoResultItem() {
  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: t('assistant.search.noItem')
  }));
};

var _default = NoResultItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/NotEnoughItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var NotEnoughItem = function NotEnoughItem() {
  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: t('assistant.search.notEnough')
  }));
};

var _default = NotEnoughItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/ResultMenu.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Paper/index.js"));

var _Popper = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Popper/index.js"));

var _ResultMenuContent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/ResultMenuContent.js"));

/* eslint-disable react-hooks/refs */
var styles = {
  "resultMenu": "styles__resultMenu___o76q-",
  "resultMenu-inner": "styles__resultMenu-inner___2Lf0d",
  "resultMenuItem": "styles__resultMenuItem___3-bLe"
};

var ResultMenu = function ResultMenu(_ref) {
  var anchorRef = _ref.anchorRef,
      listRef = _ref.listRef,
      onClear = _ref.onClear;
  return /*#__PURE__*/_react.default.createElement(_Popper.default, {
    style: {
      width: anchorRef.current.offsetWidth,
      zIndex: 'var(--zIndex-popover)'
    },
    anchorEl: anchorRef.current,
    open: Boolean(anchorRef.current),
    placement: "bottom-start"
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: styles['resultMenu'],
    square: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles['resultMenu-inner']
  }, /*#__PURE__*/_react.default.createElement(_ResultMenuContent.default, {
    ref: listRef,
    onClear: onClear
  }))));
};

var _default = ResultMenu;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/ResultMenuContent.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cozyDataproxyLib = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/index.js");

var _List = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/List/index.js"));

var _ListItemSkeleton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Skeletons/ListItemSkeleton.js"));

var _NoResultItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/NoResultItem.js"));

var _NotEnoughItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/NotEnoughItem.js"));

var _ResultMenuItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/ResultMenuItem.js"));

var _SearchProvider = __webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchProvider.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchResult = function SearchResult(_ref) {
  var onClear = _ref.onClear;

  var _useSearch = (0, _SearchProvider.useSearch)(),
      isLoading = _useSearch.isLoading,
      results = _useSearch.results,
      selectedIndex = _useSearch.selectedIndex,
      searchValue = _useSearch.searchValue;

  if (isLoading && !(results !== null && results !== void 0 && results.length)) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItemSkeleton.default, {
      hasSecondary: true
    }), /*#__PURE__*/_react.default.createElement(_ListItemSkeleton.default, {
      hasSecondary: true
    }), /*#__PURE__*/_react.default.createElement(_ListItemSkeleton.default, {
      hasSecondary: true
    }));
  }

  if (!isLoading && !(results !== null && results !== void 0 && results.length)) {
    if (searchValue.length >= 3) {
      return /*#__PURE__*/_react.default.createElement(_NoResultItem.default, null);
    } else {
      return /*#__PURE__*/_react.default.createElement(_NotEnoughItem.default, null);
    }
  }

  return results.map(function (result, idx) {
    return /*#__PURE__*/_react.default.createElement(_ResultMenuItem.default, {
      key: result.id || idx,
      icon: result.icon,
      slug: result.slug,
      url: result.url,
      primaryText: result.primary,
      secondaryText: result.secondary,
      secondaryUrl: result.secondaryUrl,
      query: searchValue,
      highlightQuery: "true",
      selected: selectedIndex === idx,
      onClear: onClear
    });
  });
};

var ResultMenuContent = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var onClear = _ref2.onClear;

  var _useDataProxy = (0, _cozyDataproxyLib.useDataProxy)(),
      dataProxyServicesAvailable = _useDataProxy.dataProxyServicesAvailable;

  return /*#__PURE__*/_react.default.createElement(_List.default, {
    ref: ref
  }, dataProxyServicesAvailable && /*#__PURE__*/_react.default.createElement(SearchResult, {
    onClear: onClear
  }));
});
ResultMenuContent.displayName = 'ResultMenuContent';
var _default = ResultMenuContent;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/ResultMenuItem.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _AppIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui-plus/dist/AppIcon/index.js"));

var _SuggestionItemTextHighlighted = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/SuggestionItemTextHighlighted.js"));

var _SuggestionItemTextSecondary = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/SuggestionItemTextSecondary.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "resultMenu": "styles__resultMenu___o76q-",
  "resultMenu-inner": "styles__resultMenu-inner___2Lf0d",
  "resultMenuItem": "styles__resultMenuItem___3-bLe"
};

var ResultMenuItem = function ResultMenuItem(_ref) {
  var icon = _ref.icon,
      url = _ref.url,
      primaryText = _ref.primaryText,
      secondaryText = _ref.secondaryText,
      secondaryUrl = _ref.secondaryUrl,
      slug = _ref.slug,
      selected = _ref.selected,
      query = _ref.query,
      _ref$highlightQuery = _ref.highlightQuery,
      highlightQuery = _ref$highlightQuery === void 0 ? false : _ref$highlightQuery,
      onClear = _ref.onClear;
  var itemRef = (0, _react.useRef)();
  var iconComponent = icon.type === 'component' ? /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: icon.component,
    size: 32
  }) : icon.type === 'app' ? /*#__PURE__*/_react.default.createElement(_AppIcon.default, {
    app: icon.app
  }) : icon;
  var primary = highlightQuery ? /*#__PURE__*/_react.default.createElement(_SuggestionItemTextHighlighted.default, {
    text: primaryText,
    query: query
  }) : primaryText;
  var secondary = highlightQuery ? /*#__PURE__*/_react.default.createElement(_SuggestionItemTextSecondary.default, {
    text: secondaryText,
    query: query,
    slug: slug,
    url: secondaryUrl
  }) : secondaryText;
  (0, _react.useEffect)(function () {
    if (selected) {
      var _itemRef$current;

      itemRef === null || itemRef === void 0 ? void 0 : (_itemRef$current = itemRef.current) === null || _itemRef$current === void 0 ? void 0 : _itemRef$current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [selected]);
  return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    component: "a",
    href: url,
    ref: itemRef,
    size: "small",
    selected: selected,
    className: styles.resultMenuItem,
    onClick: onClear
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, iconComponent), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: primary,
    secondary: secondary
  }));
};

var _default = ResultMenuItem;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/SuggestionItemTextHighlighted.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var normalizeString = function normalizeString(str) {
  return str.toString().toLowerCase().replace(/\//g, ' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ');
};
/**
 * Add <b> on part that equlas query into each result
 *
 * @param {Array} searchResult - list of results
 * @param {string} query - search input
 * @returns list of results with the query highlighted
 */


var highlightQueryTerms = function highlightQueryTerms(searchResult, query) {
  var normalizedQueryTerms = normalizeString(query);
  var normalizedResultTerms = normalizeString(searchResult);
  var matchedIntervals = [];
  var spacerLength = 1;
  var currentIndex = 0;
  normalizedResultTerms.forEach(function (resultTerm) {
    normalizedQueryTerms.forEach(function (queryTerm) {
      var index = resultTerm.indexOf(queryTerm);

      if (index >= 0) {
        matchedIntervals.push({
          from: currentIndex + index,
          to: currentIndex + index + queryTerm.length
        });
      }
    });
    currentIndex += resultTerm.length + spacerLength;
  }); // matchedIntervals can overlap, so we merge them.
  // - sort the intervals by starting index
  // - add the first interval to the stack
  // - for every interval,
  // - - add it to the stack if it doesn't overlap with the stack top
  // - - or extend the stack top if the start overlaps and the new interval's top is bigger

  var mergedIntervals = matchedIntervals.sort(function (intervalA, intervalB) {
    return intervalA.from > intervalB.from;
  }).reduce(function (computedIntervals, newInterval) {
    if (computedIntervals.length === 0 || computedIntervals[computedIntervals.length - 1].to < newInterval.from) {
      computedIntervals.push(newInterval);
    } else if (computedIntervals[computedIntervals.length - 1].to < newInterval.to) {
      computedIntervals[computedIntervals.length - 1].to = newInterval.to;
    }

    return computedIntervals;
  }, []); // create an array containing the entire search result, with special characters, and the intervals surrounded y `<b>` tags

  var slicedOriginalResult = mergedIntervals.length > 0 ? [/*#__PURE__*/_react.default.createElement("span", {
    key: "0"
  }, searchResult.slice(0, mergedIntervals[0].from))] : searchResult;

  for (var i = 0, l = mergedIntervals.length; i < l; ++i) {
    slicedOriginalResult.push( /*#__PURE__*/_react.default.createElement("span", {
      className: "u-primaryColor"
    }, searchResult.slice(mergedIntervals[i].from, mergedIntervals[i].to)));
    if (i + 1 < l) slicedOriginalResult.push( /*#__PURE__*/_react.default.createElement("span", null, searchResult.slice(mergedIntervals[i].to, mergedIntervals[i + 1].from)));
  }

  if (mergedIntervals.length > 0) slicedOriginalResult.push( /*#__PURE__*/_react.default.createElement("span", null, searchResult.slice(mergedIntervals[mergedIntervals.length - 1].to, searchResult.length)));
  return slicedOriginalResult;
};

var SuggestionItemTextHighlighted = function SuggestionItemTextHighlighted(_ref) {
  var text = _ref.text,
      query = _ref.query;
  if (!text) return null;
  var textHighlighted = highlightQueryTerms(text, query);

  if (Array.isArray(textHighlighted)) {
    return textHighlighted.map(function (item, idx) {
      return _objectSpread(_objectSpread({}, item), {}, {
        key: idx
      });
    });
  }

  return textHighlighted;
};

var _default = SuggestionItemTextHighlighted;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/ResultMenu/SuggestionItemTextSecondary.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Link = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Link/index.js"));

var _Breakpoints = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js"));

var _AppLinker = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui-plus/dist/AppLinker/index.js"));

var _SuggestionItemTextHighlighted = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/SuggestionItemTextHighlighted.js"));

/**
 * Code copied and adapted from cozy-drive
 *
 * See source: https://github.com/cozy/cozy-drive/blob/fbe2df67199683b23a40f476ccdacb00ee027459/src/modules/search/components/SuggestionItemTextSecondary.jsx
 */
var SuggestionItemTextSecondary = function SuggestionItemTextSecondary(_ref) {
  var text = _ref.text,
      query = _ref.query,
      url = _ref.url,
      slug = _ref.slug;

  var _useBreakpoints = (0, _Breakpoints.default)(),
      isMobile = _useBreakpoints.isMobile;

  if (isMobile || !url) {
    return /*#__PURE__*/_react.default.createElement(_SuggestionItemTextHighlighted.default, {
      text: text,
      query: query
    });
  }

  var app = {
    slug: slug
  };
  return /*#__PURE__*/_react.default.createElement(_AppLinker.default, {
    app: app,
    href: url
  }, function (_ref2) {
    var href = _ref2.href,
        _onClick = _ref2.onClick;
    return /*#__PURE__*/_react.default.createElement(_Link.default, {
      color: "textSecondary",
      underline: "hover",
      href: href,
      onClick: function onClick(e) {
        e.stopPropagation();

        if (typeof _onClick == 'function') {
          _onClick(e);
        }
      }
    }, /*#__PURE__*/_react.default.createElement(_SuggestionItemTextHighlighted.default, {
      text: text,
      query: query,
      slug: slug
    }));
  });
};

var _default = SuggestionItemTextSecondary;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/AssistantButton.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AssistantButton = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _InputAdornment = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/InputAdornment/index.js"));

var _TwakeAssistantIcon = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantIcon/TwakeAssistantIcon.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var AssistantButton = function AssistantButton(_ref) {
  var size = _ref.size;
  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname;

  var onClick = function onClick() {
    var conversationId = (0, _helpers.makeConversationId)();
    navigate("assistant/".concat(conversationId, "?returnPath=").concat(pathname));
  };

  return /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
    position: "end",
    className: "u-mr-half"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: onClick,
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _TwakeAssistantIcon.TwakeAssistantIcon,
    size: size === 'medium' ? 24 : 16
  })));
};

exports.AssistantButton = AssistantButton;

}),
"./node_modules/cozy-search/dist/components/Search/AssistantLink.js": (function (__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _cozyHelpers = __webpack_require__("./node_modules/cozy-search/dist/components/cozyHelpers.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var AssistantLink = function AssistantLink(_ref) {
  var children = _ref.children;
  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname;

  var openAssistant = function openAssistant() {
    if (!(0, _cozyHelpers.isAssistantEnabled)()) return;
    var conversationId = (0, _helpers.makeConversationId)();
    navigate("assistant/".concat(conversationId, "?returnPath=").concat(pathname));
  };

  return children({
    openAssistant: openAssistant
  });
};

var _default = AssistantLink;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/Icons/DocsIcon.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

// TODO: should be moved in cozy-ui
var DocsIcon = function DocsIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 32 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.6305 29.5812C22.7983 29.2538 23.9166 28.6562 24.6505 27.6003C25.3749 26.5663 25.5789 25.2547 25.5789 23.9925V5.50099C25.5789 5.17358 25.5611 4.84557 25.5216 4.52148C26.1016 4.74961 26.5486 5.12658 26.8626 5.65239C27.2331 6.25024 27.4184 7.03757 27.4184 8.01435V26.7964C27.4184 28.1184 27.0942 29.1078 26.4458 29.7646C25.7974 30.4214 24.8207 30.7498 23.5155 30.7498H16.4209C16.5889 30.7204 16.7574 30.6901 16.9262 30.659C18.4067 30.3944 19.9713 30.0354 21.6185 29.5846L21.6305 29.5812Z",
    fill: "#C9191E"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.58203 26.405V7.5977C4.58203 6.45251 4.88938 5.58519 5.50408 4.99575C6.1272 4.40631 6.95242 4.08212 7.97972 4.02318C9.49542 3.93055 10.9311 3.80425 12.2868 3.64425C13.6425 3.47584 14.9393 3.28217 16.1771 3.06324C17.4234 2.8443 18.6359 2.60011 19.8148 2.33065C21.0274 2.04435 21.9578 2.1875 22.6062 2.7601C23.2546 3.33269 23.5788 4.24632 23.5788 5.50099V23.9925C23.5788 25.0956 23.3893 25.9166 23.0104 26.4555C22.6315 27.0029 21.9915 27.4028 21.0905 27.6554C19.4906 28.0933 17.9833 28.4386 16.5687 28.6912C15.154 28.9522 13.7731 29.1501 12.4258 29.2848C11.0785 29.4196 9.69751 29.5248 8.28286 29.6006C7.11241 29.668 6.20299 29.4238 5.5546 28.868C4.90622 28.3207 4.58203 27.4997 4.58203 26.405ZM9.20865 11.0124C11.0635 10.8944 12.7632 10.7131 14.3075 10.4683C14.6822 10.4072 15.0564 10.3436 15.4291 10.2776C15.8192 10.2085 16.1013 9.86859 16.1013 9.47337C16.1013 8.96154 15.638 8.57609 15.135 8.66189C14.846 8.71118 14.5555 8.75909 14.2635 8.80562C12.7346 9.04923 11.0452 9.22998 9.19523 9.3477C8.91819 9.36558 8.69776 9.45188 8.55608 9.62391C8.42209 9.78661 8.35645 9.98229 8.35645 10.2053C8.35645 10.4321 8.43296 10.6295 8.58568 10.7918L8.58783 10.7939C8.75336 10.9595 8.96369 11.0311 9.20865 11.0124ZM9.20801 15.206C11.0631 15.088 12.763 14.9066 14.3075 14.6619C15.8588 14.4089 17.3936 14.1138 18.9112 13.7766C19.2191 13.7081 19.4498 13.6003 19.5652 13.433C19.6786 13.2721 19.7347 13.0876 19.7347 12.8832C19.7347 12.6526 19.6469 12.454 19.476 12.2926C19.2921 12.1189 19.0348 12.0784 18.7304 12.1411L18.7285 12.1415C17.2823 12.4694 15.794 12.7553 14.2635 12.9992C12.7346 13.2428 11.0452 13.4235 9.19523 13.5413C8.91819 13.5591 8.69776 13.6454 8.55608 13.8175C8.42276 13.9794 8.35645 14.1705 8.35645 14.3863C8.35645 14.6203 8.43209 14.8223 8.58558 14.9854L8.59 14.9896C8.75499 15.1449 8.96316 15.2155 9.20551 15.2062L9.20801 15.206ZM9.20847 19.3994C11.0634 19.2729 12.7631 19.0874 14.3075 18.8427C15.8589 18.5982 17.3934 18.3073 18.9112 17.97C19.2199 17.9014 19.4508 17.7891 19.566 17.6127C19.6783 17.4529 19.7347 17.2733 19.7347 17.0766C19.7347 16.8461 19.6469 16.6474 19.476 16.4861C19.2921 16.3123 19.0348 16.2718 18.7304 16.3345L18.729 16.3348C17.2827 16.6543 15.7942 16.9361 14.2635 17.18C12.7345 17.4236 11.045 17.6086 9.19495 17.7347C8.91804 17.7526 8.69771 17.8389 8.55608 18.0109C8.42276 18.1728 8.35645 18.3639 8.35645 18.5797C8.35645 18.8137 8.43209 19.0158 8.58558 19.1789L8.59 19.183C8.75499 19.3383 8.96316 19.4089 9.20551 19.3996L9.20847 19.3994ZM14.3075 23.007C12.7632 23.2518 11.0635 23.4331 9.20867 23.5512C8.9637 23.5698 8.75337 23.4982 8.58783 23.3326L8.58572 23.3305C8.433 23.1682 8.35645 22.9708 8.35645 22.7441C8.35645 22.521 8.42209 22.3253 8.55608 22.1626C8.69776 21.9906 8.91827 21.9043 9.19531 21.8864C11.0453 21.7687 12.7346 21.588 14.2635 21.3443C14.5555 21.2978 14.846 21.2499 15.135 21.2006C15.638 21.1148 16.1013 21.5003 16.1013 22.0121C16.1013 22.4073 15.8192 22.7472 15.4291 22.8163C15.0564 22.8823 14.6822 22.9459 14.3075 23.007Z",
    fill: "#000091"
  }));
};

var _default = DocsIcon;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/Icons/EncryptedFolderIcon.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var EncryptedFolderIcon = function EncryptedFolderIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    opacity: "0.34",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.9657 1C13.5206 1 14.2876 1.3125 14.6803 1.6995L16 3H30.0059C31.1072 3 32 3.89498 32 4.997V27.003C32 28.1059 31.1107 29 29.9983 29H2.00174C0.896211 29 0 28.1001 0 27.0088V1.99653C0 1.44616 0.448999 1 1.00472 1H12.9657Z",
    fill: "#297EF2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 1C0.447715 1 0 1.44772 0 2V6C0 6.55228 0.447716 7 1 7H13.5858C13.851 7 14.1054 6.89464 14.2929 6.70711L15.7071 5.29289C15.8946 5.10536 16.149 5 16.4142 5H32C32 3.89543 31.1046 3 30 3H16.4142C16.149 3 15.8946 2.89464 15.7071 2.70711L14.2929 1.29289C14.1054 1.10536 13.851 1 13.5858 1H1ZM10 15.9954V24.0046C10 24.5543 10.4558 25 11.0025 25H20.9975C21.5512 25 22 24.5443 22 24.0046V15.9954C22 15.4457 21.5561 15 21 15H20V13C20 10.794 18.2053 9 16 9C13.794 9 12 10.794 12 13V15H11C10.4477 15 10 15.4557 10 15.9954ZM16 11C14.8968 11 14 12.1215 14 13.5V15H18V13.5C18 12.1215 17.1028 11 16 11ZM17.5 19C17.5 18.172 16.8265 17.5 16 17.5C15.172 17.5 14.5 18.172 14.5 19C14.5 19.552 14.803 20.032 15.25 20.29V22.75C15.25 23.1625 15.586 23.5 16 23.5C16.4125 23.5 16.75 23.1625 16.75 22.75V20.29C17.1955 20.032 17.5 19.552 17.5 19Z",
    fill: "#297EF2"
  }));
};

var _default = EncryptedFolderIcon;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/NotFoundConversation.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var NotFoundConversation = function NotFoundConversation() {
  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-column u-flex-items-center u-flex-justify-center u-h-100 u-w-100 u-ta-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-justify-center u-w-3 u-h-3 u-bdrs-circle u-mb-1"
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Assistant,
    color: "textSecondary",
    size: "24"
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4",
    className: "u-mb-1"
  }, t('assistant.search_conversation.not_found_title')), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "textSecondary",
    className: "u-maw-20"
  }, t('assistant.search_conversation.not_found_desc')));
};

var _default = NotFoundConversation;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/SearchBar.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _SearchBarDesktop = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchBarDesktop.js"));

var _SearchBarMobile = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchBarMobile.js"));

var _SearchProvider = __webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchProvider.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchBar = function SearchBar(_ref) {
  var componentsProps = _ref.componentsProps;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useSearch = (0, _SearchProvider.useSearch)(),
      clearSearch = _useSearch.clearSearch,
      setSelectedIndex = _useSearch.setSelectedIndex,
      delayedSetSearchValue = _useSearch.delayedSetSearchValue;

  var handleClear = function handleClear() {
    setInputValue('');
    clearSearch();
  };

  var handleChange = function handleChange(ev) {
    setSelectedIndex(0);
    delayedSetSearchValue(ev.target.value);
    setInputValue(ev.target.value);
  };

  if (isMobile) {
    return /*#__PURE__*/_react.default.createElement(_SearchBarMobile.default, {
      value: inputValue,
      onClear: handleClear,
      onChange: handleChange
    });
  }

  return /*#__PURE__*/_react.default.createElement(_SearchBarDesktop.default, (0, _extends2.default)({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.SearchBarDesktop, {
    value: inputValue,
    onClear: handleClear,
    onChange: handleChange
  }));
};

var _default = SearchBar;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/SearchBarDesktop.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _ClickAwayListener = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ClickAwayListener/index.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/SearchBar/index.js"));

var _AssistantButton = __webpack_require__("./node_modules/cozy-search/dist/components/Search/AssistantButton.js");

var _SearchProvider = __webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchProvider.js");

var _ResultMenu = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/ResultMenu.js"));

var _cozyHelpers = __webpack_require__("./node_modules/cozy-search/dist/components/cozyHelpers.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "searchBarDesktop--result": "styles__searchBarDesktop--result___2bQQy",
  "suggestionsPlaceholder": "styles__suggestionsPlaceholder___y-vsv",
  "search-bar-icon": "styles__search-bar-icon___1affF",
  "search-bar--mobile": "styles__search-bar--mobile___1CSb2"
};

var SearchBarDesktop = function SearchBarDesktop(_ref) {
  var value = _ref.value,
      onClear = _ref.onClear,
      onChange = _ref.onChange,
      elevation = _ref.elevation,
      size = _ref.size,
      hasHalfBorderRadius = _ref.hasHalfBorderRadius,
      className = _ref.className,
      disabledHover = _ref.disabledHover;

  var _useSearch = (0, _SearchProvider.useSearch)(),
      searchValue = _useSearch.searchValue,
      results = _useSearch.results,
      selectedIndex = _useSearch.selectedIndex,
      setSelectedIndex = _useSearch.setSelectedIndex;

  var searchRef = (0, _react.useRef)();
  var listRef = (0, _react.useRef)();

  var handleKeyDown = function handleKeyDown(ev) {
    var _listRef$current;

    var listElementCount = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.childElementCount;

    if (ev.key === 'ArrowDown') {
      ev.preventDefault();

      if (selectedIndex === listElementCount - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(function (v) {
          return v + 1;
        });
      }
    }

    if (ev.key === 'ArrowUp') {
      ev.preventDefault();

      if (selectedIndex === 0) {
        setSelectedIndex(listElementCount - 1);
      } else {
        setSelectedIndex(function (v) {
          return v - 1;
        });
      }
    }

    if (ev.key === 'Escape') {
      ev.preventDefault();
      onClear();
    }

    if (ev.key === 'Enter') {
      ev.preventDefault();

      if (selectedIndex !== undefined) {
        var _results$selectedInde;

        var onClickFn = results === null || results === void 0 ? void 0 : (_results$selectedInde = results[selectedIndex]) === null || _results$selectedInde === void 0 ? void 0 : _results$selectedInde.onClick;
        onClear();
        onClickFn();
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_ClickAwayListener.default, {
    onClickAway: onClear
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    elevation: elevation,
    className: (0, _classnames.default)(className, searchValue && hasHalfBorderRadius ? styles['searchBarDesktop--result'] : ''),
    ref: searchRef,
    size: size,
    icon: size === 'large' ? /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      className: (0, _classnames.default)('u-mh-1', styles['search-bar-icon']),
      icon: _twakeIcons.Magnifier,
      size: 24
    }) : /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      className: (0, _classnames.default)('u-ml-1 u-mr-half', styles['search-bar-icon']),
      icon: _twakeIcons.Magnifier,
      size: 16
    }),
    value: value,
    componentsProps: {
      inputBase: {
        onKeyDown: handleKeyDown,
        endAdornment: (0, _cozyHelpers.isAssistantEnabled)() && /*#__PURE__*/_react.default.createElement(_AssistantButton.AssistantButton, {
          size: size
        })
      }
    },
    disabledClear: true,
    disabledFocus: value !== '',
    disabledHover: disabledHover,
    onChange: onChange
  }), searchValue && /*#__PURE__*/_react.default.createElement(_ResultMenu.default, {
    listRef: listRef,
    anchorRef: searchRef,
    onClear: onClear
  })));
};

SearchBarDesktop.defaultProps = {
  size: 'large',
  elevation: 0
};
var _default = SearchBarDesktop;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/SearchBarMobile.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/SearchBar/index.js"));

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

var SearchBarMobile = function SearchBarMobile(_ref) {
  var value = _ref.value,
      onClear = _ref.onClear,
      onChange = _ref.onChange;

  var handleClear = function handleClear() {
    onClear();
  };

  return /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    className: styles['conversationBar'],
    size: "auto",
    icon: null,
    value: value,
    componentsProps: {
      inputBase: {
        inputProps: {
          className: styles['conversationBar-input']
        },
        autoFocus: true
      }
    },
    onChange: onChange,
    onClear: handleClear
  });
};

var _default = SearchBarMobile;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/SearchConversation.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js"));

var _escapeRegExp = _interopRequireDefault(__webpack_require__("./node_modules/lodash/escapeRegExp.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Dialog/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/SearchBar/index.js"));

var _Spinner = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Spinner/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _NotFoundConversation = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/NotFoundConversation.js"));

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/Search/helpers.js");

var _useConversation2 = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/hooks/useConversation.js"));

var _useFetchConversations = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/hooks/useFetchConversations.js"));

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _ConversationList = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationList.js"));

var _ConversationListItemWider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationListItemWider.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "searchBarDesktop--result": "styles__searchBarDesktop--result___2bQQy",
  "suggestionsPlaceholder": "styles__suggestionsPlaceholder___y-vsv",
  "search-bar-icon": "styles__search-bar-icon___1affF",
  "search-bar--mobile": "styles__search-bar--mobile___1CSb2"
};

var SearchConversationContainer = function SearchConversationContainer(_ref) {
  var children = _ref.children,
      isMobile = _ref.isMobile;
  return !isMobile ? /*#__PURE__*/_react.default.createElement("div", {
    className: "u-w-100 u-h-100 u-flex u-flex-items-center u-flex-justify-center"
  }, children) : /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    fullScreen: true,
    open: true,
    className: "u-w-100 u-h-100"
  }, children);
};

var SearchConversation = function SearchConversation() {
  var _cx;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useState = (0, _react.useState)(undefined),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchStr = _useState4[0],
      setSearchStr = _useState4[1];

  var _useConversation = (0, _useConversation2.default)(),
      createNewConversation = _useConversation.createNewConversation,
      goToConversation = _useConversation.goToConversation;

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      setIsOpenSearchConversation = _useAssistant.setIsOpenSearchConversation;

  var _useFetchConversation = (0, _useFetchConversations.default)({
    query: query
  }),
      conversations = _useFetchConversation.conversations,
      isLoading = _useFetchConversation.isLoading;

  var groupedConversations = (0, _react.useMemo)(function () {
    return (0, _helpers.groupConversationsByDate)(conversations || []);
  }, [conversations]);
  var debouncedFetchConversations = (0, _react.useMemo)(function () {
    return (0, _debounce.default)( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(value) {
        var fetchQuery;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // FIXME: This fallback query is highly inefficient.
                // It bypasses index usage, forcing CouchDB to scan the entire database,
                // deserialize every document, and then evaluate the regex via `$elemMatch`.
                // Furthermore, it restricts us from doing fuzzy-search.
                // We need a dedicated task to migrate this to an efficient client-side search approach.
                fetchQuery = value ? {
                  messages: {
                    $elemMatch: {
                      content: {
                        $regex: (0, _escapeRegExp.default)(value)
                      }
                    }
                  }
                } : undefined;
                setQuery(fetchQuery);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), 300);
  }, [setQuery]);
  (0, _react.useEffect)(function () {
    return function () {
      debouncedFetchConversations.cancel();
    };
  }, [debouncedFetchConversations]);

  var handleSearchChange = function handleSearchChange(e) {
    var newQuery = e.target.value;
    setSearchStr(newQuery);
    debouncedFetchConversations(newQuery);
  };

  return /*#__PURE__*/_react.default.createElement(SearchConversationContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-h-100 u-flex u-flex-column u-flex-items-start u-ov-hidden', {
      'u-w-7 u-mh-half': !isMobile,
      'u-w-100': isMobile
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-w-100 u-bxz', {
      'u-mv-2': !isMobile,
      'u-p-1': isMobile
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-w-100"
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    elevation: 1,
    disabledHover: !!isMobile,
    className: (0, _classnames.default)('u-flex-auto u-miw-0', (_cx = {}, (0, _defineProperty2.default)(_cx, styles['search-bar--mobile'], isMobile), (0, _defineProperty2.default)(_cx, 'u-mb-2', !isMobile), _cx)),
    placeholder: t('assistant.search_conversation.placeholder'),
    size: "medium",
    value: searchStr,
    onChange: handleSearchChange
  }), isMobile && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    className: "u-ml-half u-flex-shrink-0",
    onClick: function onClick() {
      return setIsOpenSearchConversation(false);
    },
    "aria-label": t('assistant.search_conversation.close')
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Cross
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    label: t('assistant.search_conversation.new_chat'),
    variant: "secondary",
    startIcon: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Plus
    }),
    onClick: createNewConversation,
    size: "large",
    className: (0, _classnames.default)({
      'u-ml-half-t u-bdrs-6': !isMobile,
      'u-mt-1 u-bdrs-7 u-bdw-1': isMobile
    })
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-ov-auto u-flex-auto u-w-100 u-pos-relative"
  }, isLoading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-items-center u-flex-justify-center u-p-2"
  }, /*#__PURE__*/_react.default.createElement(_Spinner.default, {
    size: "xxlarge"
  })) : groupedConversations.map(function (group, index) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: group.dayTimestamp
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "subtitle1",
      color: "textSecondary",
      className: (0, _classnames.default)('u-mb-half u-ml-1 u-ml-half-t', {
        'u-mt-1': index > 0
      })
    }, group.key === 'today' ? t('assistant.search_conversation.recent') : group.key === 'yesterday' ? t('assistant.time.yesterday') : (0, _helpers.formatDayLabel)(group.dayTimestamp, lang)), /*#__PURE__*/_react.default.createElement(_ConversationList.default, {
      divider: true,
      disableAction: true,
      conversations: group.items,
      onOpenConversation: goToConversation,
      ItemComponent: _ConversationListItemWider.default
    }));
  }), !isLoading && (conversations === null || conversations === void 0 ? void 0 : conversations.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundConversation.default, null))));
};

var _default = SearchConversation;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/SearchProvider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSearch = exports["default"] = exports.SearchContext = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _useFetchResult2 = __webpack_require__("./node_modules/cozy-search/dist/components/Search/useFetchResult.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchContext = /*#__PURE__*/_react.default.createContext();

exports.SearchContext = SearchContext;

var useSearch = function useSearch() {
  var context = (0, _react.useContext)(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};

exports.useSearch = useSearch;

var SearchProvider = function SearchProvider(_ref) {
  var children = _ref.children,
      _ref$searchOptions = _ref.searchOptions,
      searchOptions = _ref$searchOptions === void 0 ? {} : _ref$searchOptions;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectedIndex = _useState4[0],
      setSelectedIndex = _useState4[1];

  var _useFetchResult = (0, _useFetchResult2.useFetchResult)(searchValue, searchOptions),
      isLoading = _useFetchResult.isLoading,
      results = _useFetchResult.results;

  var delayedSetSearchValue = (0, _react.useMemo)(function () {
    return (0, _debounce.default)(setSearchValue, 250);
  }, [setSearchValue]);
  var clearSearch = (0, _react.useCallback)(function () {
    setSearchValue('');
    setSelectedIndex();
  }, []);
  var value = (0, _react.useMemo)(function () {
    return {
      searchValue: searchValue,
      setSearchValue: setSearchValue,
      delayedSetSearchValue: delayedSetSearchValue,
      isLoading: isLoading,
      clearSearch: clearSearch,
      selectedIndex: selectedIndex,
      setSelectedIndex: setSelectedIndex,
      results: results
    };
  }, [searchValue, delayedSetSearchValue, isLoading, clearSearch, selectedIndex, results]);
  return /*#__PURE__*/_react.default.createElement(SearchContext.Provider, {
    value: value
  }, children);
};

var _default = /*#__PURE__*/_react.default.memo(SearchProvider);

exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Search/getFileMimetype.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getFileMimetype = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _mimeTypes = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/node_modules/mime-types/index.js"));

var getMimetypeFromFilename = function getMimetypeFromFilename(name) {
  return _mimeTypes.default.lookup(name) || 'application/octet-stream';
};

var mappingMimetypeSubtype = {
  word: 'text',
  text: 'text',
  zip: 'zip',
  pdf: 'pdf',
  spreadsheet: 'sheet',
  excel: 'sheet',
  sheet: 'sheet',
  presentation: 'slide',
  powerpoint: 'slide'
};

var getFileMimetype = function getFileMimetype(collection) {
  return function () {
    var mime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var mimetype = mime === 'application/octet-stream' ? getMimetypeFromFilename(name.toLowerCase()) : mime;

    var _mimetype$split = mimetype.split('/'),
        _mimetype$split2 = (0, _slicedToArray2.default)(_mimetype$split, 2),
        type = _mimetype$split2[0],
        subtype = _mimetype$split2[1];

    if (collection[type]) {
      return type;
    }

    if (type === 'application') {
      var existingType = subtype.match(Object.keys(mappingMimetypeSubtype).join('|'));
      return existingType ? mappingMimetypeSubtype[existingType[0]] : undefined;
    }

    return undefined;
  };
};

exports.getFileMimetype = getFileMimetype;

}),
"./node_modules/cozy-search/dist/components/Search/getIconForSearchResult.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getIconForSearchResult = exports.getDriveMimeTypeIcon = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _get = _interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js"));

var _file = __webpack_require__("./node_modules/cozy-client/dist/models/file.js");

var _DocsIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/Icons/DocsIcon.js"));

var _EncryptedFolderIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/Icons/EncryptedFolderIcon.js"));

var _getFileMimetype = __webpack_require__("./node_modules/cozy-search/dist/components/Search/getFileMimetype.js");

var getIconForSearchResult = function getIconForSearchResult(searchResult) {
  if (searchResult.doc._type === 'io.cozy.apps') {
    return {
      type: 'app',
      app: searchResult.doc
    };
  }

  if (searchResult.slug === 'notes') {
    return {
      type: 'component',
      component: _twakeIcons.FileTypeNote
    };
  }

  if (searchResult.slug === 'drive') {
    return {
      type: 'component',
      component: getDriveMimeTypeIcon(searchResult.doc)
    };
  }

  if (searchResult.slug === 'contacts') {
    return {
      type: 'component',
      component: _twakeIcons.Contacts
    };
  }

  return {
    type: 'component',
    component: _twakeIcons.FileTypeFiles
  };
};
/**
 * Returns the appropriate icon for a given file based on its mime type and other properties.
 *
 * This method has been copied from cozy-drive
 *
 * See source: https://github.com/cozy/cozy-drive/blob/fbe2df67199683b23a40f476ccdacb00ee027459/src/lib/getMimeTypeIcon.js
 *
 * @param {import('cozy-client/types/types').IOCozyFile} file - The io.cozy.files .
 * @param {Object} [options] - Additional options.
 * @param {boolean} [options.isEncrypted] - Indicates whether the file is encrypted. Default is false.
 * @returns {import('react').ReactNode} - The icon corresponding to the file's mime type.
 */


exports.getIconForSearchResult = getIconForSearchResult;

var getDriveMimeTypeIcon = function getDriveMimeTypeIcon(file) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$isEncrypted = _ref.isEncrypted,
      isEncrypted = _ref$isEncrypted === void 0 ? false : _ref$isEncrypted;

  var isDirectory = file.type === 'directory';
  var name = file.name,
      mime = file.mime;

  if (isEncrypted) {
    return _EncryptedFolderIcon.default;
  }

  if (isDirectory) {
    return _twakeIcons.FileTypeFolder;
  } else if ((0, _file.isNote)(file)) {
    return _twakeIcons.FileTypeNote;
  } else if ((0, _file.isDocs)(file)) {
    return _DocsIcon.default;
  } else {
    var iconsByMimeType = {
      audio: _twakeIcons.FileTypeAudio,
      bin: _twakeIcons.FileTypeBin,
      code: _twakeIcons.FileTypeCode,
      image: _twakeIcons.FileTypeImage,
      pdf: _twakeIcons.FileTypePdf,
      slide: _twakeIcons.FileTypeSlide,
      sheet: _twakeIcons.FileTypeSheet,
      text: _twakeIcons.FileTypeText,
      video: _twakeIcons.FileTypeVideo,
      zip: _twakeIcons.FileTypeZip
    };
    var type = (0, _getFileMimetype.getFileMimetype)(iconsByMimeType)(mime, name);
    return (0, _get.default)(iconsByMimeType, type, _twakeIcons.FileTypeFiles);
  }
};

exports.getDriveMimeTypeIcon = getDriveMimeTypeIcon;

}),
"./node_modules/cozy-search/dist/components/Search/helpers.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.groupConversationsByDate = exports.formatDayLabel = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var startOfDay = function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
};

var formatDayLabel = function formatDayLabel(timestamp, lang) {
  return new Date(timestamp).toLocaleDateString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};
/**
 * Groups conversations by calendar day based on their updatedAt date.
 * Returns an ordered array of buckets so today appears first, then yesterday,
 * then each earlier day descending.
 *
 * @param {Array} conversations - The list of conversations to group.
 * @returns {Array<{ key: string, dayTimestamp: number, items: Array }>}
 */


exports.formatDayLabel = formatDayLabel;

var groupConversationsByDate = function groupConversationsByDate(conversations) {
  if (!conversations || conversations.length === 0) return [];
  var now = new Date();
  var todayTs = startOfDay(now);
  var yesterdayTs = todayTs - 86400000;
  var buckets = new Map();
  conversations.forEach(function (conv) {
    var _conv$cozyMetadata;

    var raw = ((_conv$cozyMetadata = conv.cozyMetadata) === null || _conv$cozyMetadata === void 0 ? void 0 : _conv$cozyMetadata.updatedAt) || Date.now();
    var dayTs = startOfDay(new Date(raw));
    if (!buckets.has(dayTs)) buckets.set(dayTs, []);
    buckets.get(dayTs).push(conv);
  });
  return (0, _toConsumableArray2.default)(buckets.entries()).sort(function (a, b) {
    return b[0] - a[0];
  }).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        dayTimestamp = _ref2[0],
        items = _ref2[1];

    var key;
    if (dayTimestamp === todayTs) key = 'today';else if (dayTimestamp === yesterdayTs) key = 'yesterday';else key = 'date';
    return {
      key: key,
      dayTimestamp: dayTimestamp,
      items: items
    };
  });
};

exports.groupConversationsByDate = groupConversationsByDate;

}),
"./node_modules/cozy-search/dist/components/Search/useFetchResult.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useFetchResult = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = __webpack_require__("./node_modules/react/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyDataproxyLib = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _getIconForSearchResult = __webpack_require__("./node_modules/cozy-search/dist/components/Search/getIconForSearchResult.js");

var _excluded = ["maxRetries", "delay"];
var log = (0, _cozyMinilog.default)('🔍 [useFetchResult]');

var searchWithRetry = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dataProxy, searchValue) {
    var options,
        _options$maxRetries,
        maxRetries,
        _options$delay,
        delay,
        searchOptions,
        currentDelay,
        attempt,
        searchResults,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            _options$maxRetries = options.maxRetries, maxRetries = _options$maxRetries === void 0 ? 5 : _options$maxRetries, _options$delay = options.delay, delay = _options$delay === void 0 ? 500 : _options$delay, searchOptions = (0, _objectWithoutProperties2.default)(options, _excluded);
            currentDelay = delay; // Make several search attemps in case it is not ready yet

            attempt = 0;

          case 4:
            if (!(attempt < maxRetries)) {
              _context.next = 17;
              break;
            }

            _context.next = 7;
            return dataProxy.search(searchValue, searchOptions);

          case 7:
            searchResults = _context.sent;

            if (!searchResults) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", searchResults);

          case 10:
            log.info("Search attempt ".concat(attempt + 1, " failed, retrying in ").concat(currentDelay, " ms..."));
            _context.next = 13;
            return new Promise(function (resolve) {
              return setTimeout(resolve, currentDelay);
            });

          case 13:
            currentDelay *= 2; // Exponential backoff

          case 14:
            attempt++;
            _context.next = 4;
            break;

          case 17:
            log.error("Search failed after ".concat(maxRetries, " attempts"));
            return _context.abrupt("return", []);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function searchWithRetry(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var useFetchResult = function useFetchResult(searchValue) {
  var searchOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var client = (0, _cozyClient.useClient)();
  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useState = (0, _react.useState)({
    isLoading: true,
    results: null,
    searchValue: null
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var dataProxy = (0, _cozyDataproxyLib.useDataProxy)();
  (0, _react.useEffect)(function () {
    var fetch = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(searchValue, searchOptions) {
        var searchResults, results;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (dataProxy.dataProxyServicesAvailable) {
                  _context2.next = 3;
                  break;
                }

                log.log('DataProxy services are not available. Skipping search...');
                return _context2.abrupt("return");

              case 3:
                setState({
                  isLoading: true,
                  results: null,
                  searchValue: searchValue
                });
                _context2.next = 6;
                return searchWithRetry(dataProxy, searchValue, searchOptions);

              case 6:
                searchResults = _context2.sent;
                results = searchResults.map(function (r) {
                  // Begin Retrocompatibility code, to be removed when following PR is merged: https://github.com/cozy/cozy-web-data-proxy/pull/10
                  r.slug = r.slug || r.type;
                  r.subTitle = r.subTitle || r.name; // End Retrocompatibility code

                  var icon = (0, _getIconForSearchResult.getIconForSearchResult)(r);
                  return {
                    id: r.doc._id,
                    icon: icon,
                    slug: r.slug,
                    url: r.url,
                    secondaryUrl: r.secondaryUrl,
                    primary: r.title,
                    secondary: r.subTitle,
                    onClick: function onClick() {
                      if (r.slug === client.appMetadata.slug) {
                        try {
                          var url = new URL(r.url);
                          var hash = url.hash.replace('#', '');
                          navigate(hash);
                        } catch (_unused) {
                          window.open(r.url);
                        }
                      } else {
                        window.open(r.url);
                      }
                    }
                  };
                });
                setState({
                  isLoading: false,
                  results: results,
                  searchValue: searchValue
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetch(_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }();

    if (searchValue) {
      if (searchValue !== state.searchValue) {
        fetch(searchValue, searchOptions);
      }
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState({
        isLoading: true,
        results: null,
        searchValue: null
      });
    }
  }, [dataProxy, searchValue, state.searchValue, setState]);
  return {
    isLoading: state.isLoading,
    results: state.results
  };
};

exports.useFetchResult = useFetchResult;

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
"./node_modules/cozy-search/dist/components/TwakeKnowledges/ChatKnowledge.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Checkbox/index.js"));

var _List = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var styles = {
  "source-panel": "styles__source-panel___1r13x",
  "source-panel-header": "styles__source-panel-header___2i_pd",
  "source-panel-description": "styles__source-panel-description___JL2br",
  "source-panel-search": "styles__source-panel-search___2_jsF",
  "source-panel-content": "styles__source-panel-content___1YU9a",
  "source-panel-footer": "styles__source-panel-footer___i_u77",
  "section-header": "styles__section-header___3qiTb",
  "nested-item": "styles__nested-item___1Guh8",
  "drive-tree-item": "styles__drive-tree-item___30uL0",
  "clear-all-button": "styles__clear-all-button___2lTyP",
  "date-label": "styles__date-label___3gPZY",
  "mail-preview": "styles__mail-preview___Vm-RW",
  "chat-header-actions": "styles__chat-header-actions___2nLD5",
  "header-clear-all": "styles__header-clear-all___3dOMJ",
  "knowledge-chips-icon": "styles__knowledge-chips-icon___2AIB6"
};

var ChatKnowledge = function ChatKnowledge(_ref) {
  var selectedItems = _ref.selectedItems,
      onToggleItems = _ref.onToggleItems,
      onClearItems = _ref.onClearItems;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var chats = [{
    id: 'chat1',
    name: 'Team Discussion'
  }, {
    id: 'chat2',
    name: 'Project Updates'
  }, {
    id: 'chat3',
    name: 'General Chat'
  }, {
    id: 'chat4',
    name: 'Support'
  }];

  var handleClearAll = function handleClearAll() {
    onClearItems(chats.map(function (c) {
      return c.id;
    }));
  };

  var selectedCount = chats.filter(function (c) {
    return selectedItems.includes(c.id);
  }).length;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles['chat-header-actions']
  }, selectedCount > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "text",
    size: "small",
    label: t('assistant.twake_knowledges.clear_all'),
    onClick: handleClearAll,
    className: styles['header-clear-all']
  })), /*#__PURE__*/_react.default.createElement(_List.default, null, chats.map(function (chat) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      key: chat.id,
      button: true,
      onClick: function onClick() {
        return onToggleItems([chat.id]);
      }
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      checked: selectedItems.includes(chat.id),
      onChange: function onChange() {
        return onToggleItems([chat.id]);
      }
    })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Comment,
      color: "var(--primaryColor)"
    })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
      primary: chat.name
    }));
  })));
};

var _default = ChatKnowledge;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/TwakeKnowledges/DriveKnowledge.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Checkbox/index.js"));

var _Collapse = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Collapse/index.js"));

var _List = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "source-panel": "styles__source-panel___1r13x",
  "source-panel-header": "styles__source-panel-header___2i_pd",
  "source-panel-description": "styles__source-panel-description___JL2br",
  "source-panel-search": "styles__source-panel-search___2_jsF",
  "source-panel-content": "styles__source-panel-content___1YU9a",
  "source-panel-footer": "styles__source-panel-footer___i_u77",
  "section-header": "styles__section-header___3qiTb",
  "nested-item": "styles__nested-item___1Guh8",
  "drive-tree-item": "styles__drive-tree-item___30uL0",
  "clear-all-button": "styles__clear-all-button___2lTyP",
  "date-label": "styles__date-label___3gPZY",
  "mail-preview": "styles__mail-preview___Vm-RW",
  "chat-header-actions": "styles__chat-header-actions___2nLD5",
  "header-clear-all": "styles__header-clear-all___3dOMJ",
  "knowledge-chips-icon": "styles__knowledge-chips-icon___2AIB6"
}; // Dummy children used to simulate that each folder holds more content.

var MY_DRIVE_SUBFOLDERS = ['Archive', 'Documents', 'Meetings'];
var SHARED_SUBFOLDERS = ['Documents', 'Reports', 'Archive'];

var makeChildren = function makeChildren(parentId, subfolderNames) {
  return subfolderNames.map(function (name) {
    return {
      id: "".concat(parentId, "-").concat(name.toLowerCase()),
      name: name
    };
  });
};

var makeFolders = function makeFolders(names, subfolderNames) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return names.map(function (name) {
    var id = "".concat(prefix).concat(name.toLowerCase().replace(/\s+/g, '-'));
    return {
      id: id,
      name: name,
      children: makeChildren(id, subfolderNames)
    };
  });
};

var MY_DRIVE_FOLDERS = makeFolders(['Admin', 'Business', 'HR', 'Legal', 'Perso', 'Projects', 'Tech'], MY_DRIVE_SUBFOLDERS);
var SHARED_FOLDERS = makeFolders(['Design', 'Marketing', 'Sales'], SHARED_SUBFOLDERS, 'shared-');

var flattenIds = function flattenIds(nodes) {
  return nodes.reduce(function (ids, node) {
    return ids.concat(node.id, flattenIds(node.children || []));
  }, []);
};

var DriveTreeItem = function DriveTreeItem(_ref) {
  var item = _ref.item,
      depth = _ref.depth,
      selectedItems = _ref.selectedItems,
      onToggleItem = _ref.onToggleItem;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var hasChildren = item.children && item.children.length > 0;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    className: styles['drive-tree-item'],
    style: {
      paddingLeft: "".concat(2 + depth * 1.5, "rem")
    },
    onClick: function onClick() {
      return onToggleItem([item.id]);
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    className: "u-c-pointer",
    style: {
      visibility: hasChildren ? 'visible' : 'hidden'
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      if (hasChildren) setIsOpen(function (open) {
        return !open;
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: isOpen ? _twakeIcons.Dropdown : _twakeIcons.Right
  })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    checked: selectedItems.includes(item.id),
    tabIndex: -1,
    disableRipple: true
  })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.FileTypeFolder,
    color: "var(--primaryColor)"
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: item.name
  })), hasChildren && /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: isOpen,
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    component: "div",
    disablePadding: true
  }, item.children.map(function (child) {
    return /*#__PURE__*/_react.default.createElement(DriveTreeItem, {
      key: child.id,
      item: child,
      depth: depth + 1,
      selectedItems: selectedItems,
      onToggleItem: onToggleItem
    });
  }))));
};

var DriveSection = function DriveSection(_ref2) {
  var title = _ref2.title,
      folders = _ref2.folders,
      selectedItems = _ref2.selectedItems,
      onToggleItem = _ref2.onToggleItem,
      onClearSection = _ref2.onClearSection;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var allIds = flattenIds(folders);
  var selectedCount = allIds.filter(function (id) {
    return selectedItems.includes(id);
  }).length;
  var allSelected = allIds.length > 0 && selectedCount === allIds.length;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: styles['section-header']
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    className: "u-c-pointer",
    onClick: function onClick() {
      return setIsOpen(function (open) {
        return !open;
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: isOpen ? _twakeIcons.Dropdown : _twakeIcons.Right
  })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    checked: allSelected,
    indeterminate: selectedCount > 0 && !allSelected,
    onClick: function onClick() {
      if (allSelected) {
        onClearSection(allIds);
      } else {
        onToggleItem(allIds.filter(function (id) {
          return !selectedItems.includes(id);
        }));
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.FileTypeFolder,
    className: styles['section-icon']
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: title
  }), selectedCount > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    className: styles['clear-all-button'],
    variant: "text",
    size: "small",
    label: t('assistant.twake_knowledges.clear_all'),
    onClick: function onClick(e) {
      e.stopPropagation();
      onClearSection(allIds);
    }
  })), /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: isOpen
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    component: "div",
    disablePadding: true
  }, folders.map(function (folder) {
    return /*#__PURE__*/_react.default.createElement(DriveTreeItem, {
      key: folder.id,
      item: folder,
      depth: 0,
      selectedItems: selectedItems,
      onToggleItem: onToggleItem
    });
  }))));
};

var DriveKnowledge = function DriveKnowledge(_ref3) {
  var selectedItems = _ref3.selectedItems,
      onToggleItems = _ref3.onToggleItems,
      onClearItems = _ref3.onClearItems;

  var _useI18n2 = (0, _twakeI18n.useI18n)(),
      t = _useI18n2.t;

  return /*#__PURE__*/_react.default.createElement(_List.default, null, /*#__PURE__*/_react.default.createElement(DriveSection, {
    title: t('assistant.twake_knowledges.my_drive'),
    folders: MY_DRIVE_FOLDERS,
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }), /*#__PURE__*/_react.default.createElement(DriveSection, {
    title: t('assistant.twake_knowledges.shared_with_me'),
    folders: SHARED_FOLDERS,
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }));
};

var _default = DriveKnowledge;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/TwakeKnowledges/MailKnowledge.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Checkbox/index.js"));

var _Collapse = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Collapse/index.js"));

var _List = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/ListItemText/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "source-panel": "styles__source-panel___1r13x",
  "source-panel-header": "styles__source-panel-header___2i_pd",
  "source-panel-description": "styles__source-panel-description___JL2br",
  "source-panel-search": "styles__source-panel-search___2_jsF",
  "source-panel-content": "styles__source-panel-content___1YU9a",
  "source-panel-footer": "styles__source-panel-footer___i_u77",
  "section-header": "styles__section-header___3qiTb",
  "nested-item": "styles__nested-item___1Guh8",
  "drive-tree-item": "styles__drive-tree-item___30uL0",
  "clear-all-button": "styles__clear-all-button___2lTyP",
  "date-label": "styles__date-label___3gPZY",
  "mail-preview": "styles__mail-preview___Vm-RW",
  "chat-header-actions": "styles__chat-header-actions___2nLD5",
  "header-clear-all": "styles__header-clear-all___3dOMJ",
  "knowledge-chips-icon": "styles__knowledge-chips-icon___2AIB6"
};

var MailSection = function MailSection(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      items = _ref.items,
      selectedItems = _ref.selectedItems,
      onToggleItem = _ref.onToggleItem,
      onClearSection = _ref.onClearSection,
      showSeeMore = _ref.showSeeMore;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleToggleSection = function handleToggleSection() {
    setIsOpen(!isOpen);
  };

  var selectedCount = items.filter(function (item) {
    return selectedItems.includes(item.id);
  }).length;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: styles['section-header']
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    className: "u-c-pointer",
    onClick: handleToggleSection
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: isOpen ? _twakeIcons.Dropdown : _twakeIcons.Right
  })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    checked: items.length > 0 && items.every(function (item) {
      return selectedItems.includes(item.id);
    }),
    indeterminate: selectedCount > 0 && selectedCount < items.length,
    onClick: function onClick() {
      var allIds = items.map(function (i) {
        return i.id;
      });
      var allSelected = allIds.every(function (id) {
        return selectedItems.includes(id);
      });

      if (allSelected) {
        onClearSection(allIds);
      } else {
        onToggleItem(allIds.filter(function (id) {
          return !selectedItems.includes(id);
        }));
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: icon
  })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: title
  }), selectedCount > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    className: styles['clear-all-button'],
    variant: "text",
    size: "small",
    label: t('assistant.twake_knowledges.clear_all'),
    onClick: function onClick(e) {
      e.stopPropagation();
      onClearSection(items.map(function (i) {
        return i.id;
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: isOpen
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    component: "div",
    disablePadding: true
  }, items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      key: item.id,
      className: styles['nested-item'],
      button: true,
      onClick: function onClick() {
        return onToggleItem([item.id]);
      }
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      checked: selectedItems.includes(item.id),
      tabIndex: -1,
      disableRipple: true
    })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
      primary: item.subject,
      primaryTypographyProps: {
        noWrap: true
      },
      secondaryTypographyProps: {
        component: 'div'
      },
      secondary: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "caption",
        className: "u-db",
        noWrap: true
      }, item.from), /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body2",
        color: "textSecondary",
        className: styles['mail-preview'],
        noWrap: true
      }, item.preview))
    }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "caption",
      color: "textSecondary",
      className: styles['date-label']
    }, item.date));
  }), showSeeMore && /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: styles['nested-item']
  }, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "text",
    size: "small",
    label: t('assistant.twake_knowledges.see_more')
  })))));
};

var MailKnowledge = function MailKnowledge(_ref2) {
  var selectedItems = _ref2.selectedItems,
      onToggleItems = _ref2.onToggleItems,
      onClearItems = _ref2.onClearItems;

  var _useI18n2 = (0, _twakeI18n.useI18n)(),
      t = _useI18n2.t,
      lang = _useI18n2.lang;

  var today = new Date().toLocaleDateString(lang, {
    month: 'short',
    day: 'numeric'
  });
  var inboxItems = [{
    id: 'inbox-1',
    subject: 'Project timeline update',
    from: 'pm@twake.app',
    preview: 'The project timeline have been updated',
    date: today
  }, {
    id: 'inbox-2',
    subject: 'Your meeting transcript is ready!',
    from: 'noreply@linagora.com',
    preview: 'The transcript and summary of your visio meeting is ready',
    date: today
  }, {
    id: 'inbox-3',
    subject: 'New event from Isabelle Moreau',
    from: 'imoreau@linagora.com',
    preview: 'Isabelle Moreau has invited you',
    date: today
  }, {
    id: 'inbox-4',
    subject: 'Recap hebdomadaire OSSA',
    from: 'ossa@linagora.com',
    preview: 'Bulletin hebdomadaire OSSA',
    date: today
  }];
  var starredItems = [{
    id: 'mail4',
    subject: 'Important: Security Update',
    from: 'security@twake.app',
    preview: 'Please update your password',
    date: today
  }];
  return /*#__PURE__*/_react.default.createElement(_List.default, null, /*#__PURE__*/_react.default.createElement(MailSection, {
    title: t('assistant.twake_knowledges.inbox'),
    icon: _twakeIcons.Email,
    items: inboxItems,
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems,
    showSeeMore: true
  }), /*#__PURE__*/_react.default.createElement(MailSection, {
    title: t('assistant.twake_knowledges.starred'),
    icon: _twakeIcons.Star,
    items: starredItems,
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }), /*#__PURE__*/_react.default.createElement(MailSection, {
    title: t('assistant.twake_knowledges.sent'),
    icon: _twakeIcons.Paperplane,
    items: [],
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }), /*#__PURE__*/_react.default.createElement(MailSection, {
    title: t('assistant.twake_knowledges.draft'),
    icon: _twakeIcons.File,
    items: [],
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }), /*#__PURE__*/_react.default.createElement(MailSection, {
    title: t('assistant.twake_knowledges.outbox'),
    icon: _twakeIcons.Upload,
    items: [],
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }), /*#__PURE__*/_react.default.createElement(MailSection, {
    title: t('assistant.twake_knowledges.spam'),
    icon: _twakeIcons.Warn,
    items: [],
    selectedItems: selectedItems,
    onToggleItem: onToggleItems,
    onClearSection: onClearItems
  }));
};

var _default = MailKnowledge;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/TwakeKnowledges/TwakeKnowledgeChip.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Chips = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Chips/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = {
  "source-panel": "styles__source-panel___1r13x",
  "source-panel-header": "styles__source-panel-header___2i_pd",
  "source-panel-description": "styles__source-panel-description___JL2br",
  "source-panel-search": "styles__source-panel-search___2_jsF",
  "source-panel-content": "styles__source-panel-content___1YU9a",
  "source-panel-footer": "styles__source-panel-footer___i_u77",
  "section-header": "styles__section-header___3qiTb",
  "nested-item": "styles__nested-item___1Guh8",
  "drive-tree-item": "styles__drive-tree-item___30uL0",
  "clear-all-button": "styles__clear-all-button___2lTyP",
  "date-label": "styles__date-label___3gPZY",
  "mail-preview": "styles__mail-preview___Vm-RW",
  "chat-header-actions": "styles__chat-header-actions___2nLD5",
  "header-clear-all": "styles__header-clear-all___3dOMJ",
  "knowledge-chips-icon": "styles__knowledge-chips-icon___2AIB6"
};
var CHIP_CLASSES = {
  label: 'u-p-0',
  icon: 'u-m-0'
};

var TwakeKnowledgeChip = function TwakeKnowledgeChip(_ref) {
  var twakeKnowledge = _ref.twakeKnowledge,
      isLast = _ref.isLast,
      onSelect = _ref.onSelect;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      openedKnowledgePanel = _useAssistant.openedKnowledgePanel,
      selectedTwakeKnowledge = _useAssistant.selectedTwakeKnowledge,
      setSelectedTwakeKnowledge = _useAssistant.setSelectedTwakeKnowledge;

  var isPanelOpen = openedKnowledgePanel === twakeKnowledge.id;
  var hasSelection = selectedTwakeKnowledge[twakeKnowledge.id].length > 0;
  var isActive = isPanelOpen || hasSelection;
  var isPill = !isMobile || hasSelection;

  var handleClear = function handleClear() {
    setSelectedTwakeKnowledge(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2.default)({}, twakeKnowledge.id, []));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_Chips.default, {
    "aria-label": twakeKnowledge.label,
    icon: /*#__PURE__*/_react.default.createElement("img", {
      alt: "",
      "aria-hidden": "true",
      src: twakeKnowledge.icon,
      className: styles['knowledge-chips-icon']
    }),
    deleteIcon: hasSelection ? /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Cross,
      size: 16,
      style: {
        height: 16,
        width: 16,
        marginLeft: 10,
        marginRight: 0
      },
      color: "var(--primaryColor)"
    }) : undefined,
    onDelete: hasSelection ? handleClear : undefined,
    label: isMobile ? '' : twakeKnowledge.label,
    clickable: true,
    variant: isActive ? 'ghost' : 'default',
    classes: isMobile ? CHIP_CLASSES : {
      label: 'u-pl-half u-fz-tiny',
      icon: 'u-m-0'
    },
    className: (0, _classnames.default)('u-mr-0', {
      'u-w-auto u-ph-half': isPill,
      'u-mr-half': !isLast
    }),
    onClick: function onClick() {
      return onSelect(twakeKnowledge.id);
    }
  });
};

var _default = TwakeKnowledgeChip;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/TwakeKnowledges/TwakeKnowledgePanel.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Dialog/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Paper/index.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/SearchBar/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _ChatKnowledge = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/ChatKnowledge.js"));

var _DriveKnowledge = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/DriveKnowledge.js"));

var _MailKnowledge = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/MailKnowledge.js"));

var _tchat = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/assets/tchat.png"));

var _tdrive = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/assets/tdrive.png"));

var _tmail = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/assets/tmail.png"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = {
  "source-panel": "styles__source-panel___1r13x",
  "source-panel-header": "styles__source-panel-header___2i_pd",
  "source-panel-description": "styles__source-panel-description___JL2br",
  "source-panel-search": "styles__source-panel-search___2_jsF",
  "source-panel-content": "styles__source-panel-content___1YU9a",
  "source-panel-footer": "styles__source-panel-footer___i_u77",
  "section-header": "styles__section-header___3qiTb",
  "nested-item": "styles__nested-item___1Guh8",
  "drive-tree-item": "styles__drive-tree-item___30uL0",
  "clear-all-button": "styles__clear-all-button___2lTyP",
  "date-label": "styles__date-label___3gPZY",
  "mail-preview": "styles__mail-preview___Vm-RW",
  "chat-header-actions": "styles__chat-header-actions___2nLD5",
  "header-clear-all": "styles__header-clear-all___3dOMJ",
  "knowledge-chips-icon": "styles__knowledge-chips-icon___2AIB6"
};
var PANEL_CONFIG = {
  drive: {
    title: 'assistant.twake_knowledges.title_drive',
    desc: 'assistant.twake_knowledges.desc_drive',
    icon: _tdrive.default,
    Component: _DriveKnowledge.default,
    actionLabel: 'assistant.twake_knowledges.select_folders'
  },
  mail: {
    title: 'assistant.twake_knowledges.title_mail',
    desc: 'assistant.twake_knowledges.desc_mail',
    icon: _tmail.default,
    Component: _MailKnowledge.default,
    actionLabel: 'assistant.twake_knowledges.select_emails'
  },
  chat: {
    title: 'assistant.twake_knowledges.title_chat',
    desc: 'assistant.twake_knowledges.desc_chat',
    icon: _tchat.default,
    Component: _ChatKnowledge.default,
    actionLabel: 'assistant.twake_knowledges.select_messages'
  }
};

var TwakeKnowledgePanelContainer = function TwakeKnowledgePanelContainer(_ref) {
  var children = _ref.children,
      isMobile = _ref.isMobile;
  return !isMobile ? /*#__PURE__*/_react.default.createElement(_Paper.default, {
    elevation: 0,
    square: true,
    className: (0, _classnames.default)(styles['source-panel'], 'u-h-100')
  }, children) : /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    fullScreen: true,
    open: true
  }, children);
};

var TwakeKnowledgePanel = function TwakeKnowledgePanel(_ref2) {
  var onClose = _ref2.onClose;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      openedKnowledgePanel = _useAssistant.openedKnowledgePanel,
      selectedTwakeKnowledge = _useAssistant.selectedTwakeKnowledge,
      setSelectedTwakeKnowledge = _useAssistant.setSelectedTwakeKnowledge;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  (0, _react.useEffect)(function () {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedItems(selectedTwakeKnowledge[openedKnowledgePanel] || []);
  }, [openedKnowledgePanel, selectedTwakeKnowledge]);

  var handleToggleItems = function handleToggleItems(ids) {
    var allSelected = ids.every(function (id) {
      return selectedItems.includes(id);
    });

    if (allSelected) {
      setSelectedItems(function (prev) {
        return prev.filter(function (id) {
          return !ids.includes(id);
        });
      });
    } else {
      setSelectedItems(function (prev) {
        return (0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(ids))));
      });
    }
  };

  var handleClearItems = function handleClearItems(ids) {
    setSelectedItems(function (prev) {
      return prev.filter(function (id) {
        return !ids.includes(id);
      });
    });
  };

  var handleClearAll = function handleClearAll() {
    setSelectedItems([]);
  };

  var handleConfirm = function handleConfirm() {
    setSelectedTwakeKnowledge(_objectSpread(_objectSpread({}, selectedTwakeKnowledge), {}, (0, _defineProperty2.default)({}, openedKnowledgePanel, selectedItems)));
    onClose();
  };

  var config = PANEL_CONFIG[openedKnowledgePanel];
  if (!openedKnowledgePanel || !config) return null;
  var title = config.title,
      desc = config.desc,
      IconImg = config.icon,
      Component = config.Component,
      actionLabel = config.actionLabel;
  if (!openedKnowledgePanel) return null;
  return /*#__PURE__*/_react.default.createElement(TwakeKnowledgePanelContainer, {
    isMobile: isMobile
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles['source-panel-header']
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4",
    className: "u-flex u-flex-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: IconImg,
    alt: "",
    className: "u-mr-1"
  }), t(title)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Cross
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: styles['source-panel-description']
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary"
  }, t(desc))), /*#__PURE__*/_react.default.createElement("div", {
    className: styles['source-panel-search']
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    placeholder: t('assistant.twake_knowledges.search_placeholder'),
    size: "small"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: styles['source-panel-content']
  }, /*#__PURE__*/_react.default.createElement(Component, {
    selectedItems: selectedItems,
    onToggleItems: handleToggleItems,
    onClearItems: handleClearItems
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: styles['source-panel-footer']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "u-flex u-flex-justify-end u-flex-items-center"
  }, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    className: "u-mr-half",
    variant: "secondary",
    label: selectedItems.length > 0 ? t('assistant.twake_knowledges.clear_all') : t('assistant.twake_knowledges.cancel'),
    onClick: selectedItems.length > 0 ? handleClearAll : onClose
  }), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "primary",
    label: t(actionLabel),
    onClick: handleConfirm,
    disabled: selectedItems.length === 0
  }))));
};

var _default = TwakeKnowledgePanel;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/TwakeKnowledges/TwakeKnowledgeSelector.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _TwakeKnowledgeChip = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/TwakeKnowledgeChip.js"));

var _WebSearchChip = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/TwakeKnowledges/WebSearchChip.js"));

var _tchat = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/assets/tchat.png"));

var _tdrive = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/assets/tdrive.png"));

var _tmail = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/assets/tmail.png"));

var TwakeKnowledgeSelector = function TwakeKnowledgeSelector(_ref) {
  var className = _ref.className,
      onSelectTwakeKnowledge = _ref.onSelectTwakeKnowledge,
      websearchEnabled = _ref.websearchEnabled,
      onToggleWebsearch = _ref.onToggleWebsearch;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var websearchEnabledFlag = (0, _cozyFlags.default)('cozy.assistant.websearch.enabled');
  var sourceKnowledgeEnabledFlag = (0, _cozyFlags.default)('cozy.assistant.source-knowledge.enabled');
  var twakeKnowledges = [{
    id: 'chat',
    label: t('assistant.twake_knowledges.chat'),
    display: (0, _cozyFlags.default)('cozy.assistant.source-knowledge.chat.enabled'),
    icon: _tchat.default
  }, {
    id: 'drive',
    label: t('assistant.twake_knowledges.drive'),
    display: true,
    icon: _tdrive.default
  }, {
    id: 'mail',
    label: t('assistant.twake_knowledges.mail'),
    display: true,
    icon: _tmail.default
  }].filter(function (twakeKnowledge) {
    return twakeKnowledge.display;
  });

  if (!websearchEnabledFlag && !sourceKnowledgeEnabledFlag) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-flex u-flex-row u-flex-wrap u-flex-items-center u-flex-justify-end', className)
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: "u-mr-half u-fz-tiny u-coolGrey"
  }, t('assistant.twake_knowledges.search_in')), websearchEnabledFlag && /*#__PURE__*/_react.default.createElement(_WebSearchChip.default, {
    websearchEnabled: websearchEnabled,
    onToggleWebsearch: onToggleWebsearch
  }), sourceKnowledgeEnabledFlag && twakeKnowledges.map(function (twakeKnowledge, index) {
    return /*#__PURE__*/_react.default.createElement(_TwakeKnowledgeChip.default, {
      key: twakeKnowledge.id,
      twakeKnowledge: twakeKnowledge,
      isLast: index === twakeKnowledges.length - 1,
      onSelect: onSelectTwakeKnowledge
    });
  }));
};

var _default = TwakeKnowledgeSelector;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/TwakeKnowledges/WebSearchChip.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Chips = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Chips/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var CHIP_CLASSES = {
  label: 'u-p-0',
  icon: 'u-m-0'
};

var WebSearchChip = function WebSearchChip(_ref) {
  var websearchEnabled = _ref.websearchEnabled,
      onToggleWebsearch = _ref.onToggleWebsearch;

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  return /*#__PURE__*/_react.default.createElement(_Chips.default, {
    "aria-pressed": websearchEnabled,
    "aria-label": t('assistant.websearch.label'),
    title: t('assistant.websearch.label'),
    icon: /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
      icon: _twakeIcons.Planet,
      size: 16,
      style: {
        height: 16,
        width: 16,
        marginLeft: isMobile ? 0 : 8,
        marginRight: isMobile ? 0 : 6
      },
      color: websearchEnabled ? undefined : 'var(--secondaryTextColor)'
    }),
    label: isMobile ? '' : t('assistant.websearch.label'),
    clickable: true,
    variant: websearchEnabled ? 'ghost' : 'default',
    classes: isMobile ? CHIP_CLASSES : {
      label: 'u-pl-0 u-fz-tiny'
    },
    className: "u-mr-half",
    onClick: onToggleWebsearch
  });
};

var _default = WebSearchChip;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Views/AssistantDialog.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _CozyDialogs = __webpack_require__("./node_modules/cozy-ui/transpiled/react/CozyDialogs/index.js");

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _CozyTheme = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js"));

var _CreateAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/CreateAssistantDialog.js"));

var _DeleteAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/DeleteAssistantDialog.js"));

var _EditAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/EditAssistantDialog.js"));

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

var _CozyConversationStoreProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStoreProvider.js"));

var _useCozySearchConversationEnabled = __webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/useCozySearchConversationEnabled.js");

var _AssistantContainer = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantContainer.js"));

var _AssistantProvider = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js"));

var _ConversationActions = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationActions.js"));

var _CozyComposerExtras = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/CozyComposerExtras.js"));

var _CozySourcesWithFilesQuery = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/CozySourcesWithFilesQuery.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "assistantWrapper-mobile": "styles__assistantWrapper-mobile___1Zx2Y",
  "assistantWrapper-mobile--light": "styles__assistantWrapper-mobile--light___1tVm3",
  "assistantWrapper-mobile--dark": "styles__assistantWrapper-mobile--dark___3Z8Ya",
  "assistantWrapper-mobile--offset": "styles__assistantWrapper-mobile--offset___1Sa2x",
  "assistantWrapper-mobile--immersive": "styles__assistantWrapper-mobile--immersive___2DU6b",
  "assistantWrapper": "styles__assistantWrapper___3SLG6"
};

var AssistantDialog = function AssistantDialog() {
  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      isOpenCreateAssistant = _useAssistant.isOpenCreateAssistant,
      setIsOpenCreateAssistant = _useAssistant.setIsOpenCreateAssistant,
      isOpenEditAssistant = _useAssistant.isOpenEditAssistant,
      setIsOpenEditAssistant = _useAssistant.setIsOpenEditAssistant,
      isOpenDeleteAssistant = _useAssistant.isOpenDeleteAssistant,
      setIsOpenDeleteAssistant = _useAssistant.setIsOpenDeleteAssistant;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
      _useSearchParams2 = (0, _slicedToArray2.default)(_useSearchParams, 1),
      searchParams = _useSearchParams2[0];

  var onClose = function onClose() {
    try {
      var returnPath = searchParams.get('returnPath');

      if (returnPath) {
        navigate(returnPath);
      } else {
        navigate('..');
      }
    } catch (_unused) {
      navigate('..');
    }
  };

  return /*#__PURE__*/_react.default.createElement(_CozyDialogs.FixedDialog, {
    open: true,
    fullScreen: true,
    size: "full",
    disableGutters: true,
    componentsProps: {
      dialogTitle: {
        className: isMobile ? 'u-ph-0' : ''
      },
      dialogActions: {
        className: isMobile ? 'u-mh-half' : 'u-m-0'
      },
      divider: {
        className: 'u-dn'
      },
      dialogContent: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          padding: 0
        }
      }
    },
    title: " ",
    content: /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('u-w-100 u-flex u-flex-column u-ov-hidden', styles['assistantWrapper'])
    }, /*#__PURE__*/_react.default.createElement(_AssistantContainer.default, null)),
    actions: /*#__PURE__*/_react.default.createElement("div", {
      className: "u-w-100"
    }, isOpenCreateAssistant && /*#__PURE__*/_react.default.createElement(_CreateAssistantDialog.default, {
      open: isOpenCreateAssistant,
      onClose: function onClose() {
        return setIsOpenCreateAssistant(false);
      }
    }), isOpenEditAssistant && /*#__PURE__*/_react.default.createElement(_EditAssistantDialog.default, {
      open: isOpenEditAssistant,
      onClose: function onClose() {
        return setIsOpenEditAssistant(false);
      }
    }), isOpenDeleteAssistant && /*#__PURE__*/_react.default.createElement(_DeleteAssistantDialog.default, {
      open: isOpenDeleteAssistant,
      onClose: function onClose() {
        return setIsOpenDeleteAssistant(false);
      }
    })),
    onClose: onClose
  });
};

var AssistantDialogWithProviders = function AssistantDialogWithProviders() {
  return /*#__PURE__*/_react.default.createElement(_CozyTheme.default, {
    variant: "normal"
  }, /*#__PURE__*/_react.default.createElement(_AssistantProvider.default, null, /*#__PURE__*/_react.default.createElement(_ChatComponentsContext.ChatComponentsProvider, {
    components: {
      SourcesRenderer: _CozySourcesWithFilesQuery.default,
      ComposerExtras: _CozyComposerExtras.default,
      ConversationActions: _ConversationActions.default,
      useSearchConversationEnabled: _useCozySearchConversationEnabled.useCozySearchConversationEnabled
    }
  }, /*#__PURE__*/_react.default.createElement(_CozyConversationStoreProvider.default, null, /*#__PURE__*/_react.default.createElement(AssistantDialog, null)))));
};

var _default = AssistantDialogWithProviders;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Views/AssistantView.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _CozyTheme = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js"));

var _CreateAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/CreateAssistantDialog.js"));

var _DeleteAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/DeleteAssistantDialog.js"));

var _EditAssistantDialog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Views/EditAssistantDialog.js"));

var _ChatComponentsContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js");

var _CozyConversationStoreProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStoreProvider.js"));

var _useCozySearchConversationEnabled = __webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/useCozySearchConversationEnabled.js");

var _AssistantContainer = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Assistant/AssistantContainer.js"));

var _AssistantProvider = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js"));

var _ConversationActions = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/ConversationActions.js"));

var _CozyComposerExtras = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/CozyComposerExtras.js"));

var _CozySourcesWithFilesQuery = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Conversations/Sources/CozySourcesWithFilesQuery.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "assistantWrapper-mobile": "styles__assistantWrapper-mobile___1Zx2Y",
  "assistantWrapper-mobile--light": "styles__assistantWrapper-mobile--light___1tVm3",
  "assistantWrapper-mobile--dark": "styles__assistantWrapper-mobile--dark___3Z8Ya",
  "assistantWrapper-mobile--offset": "styles__assistantWrapper-mobile--offset___1Sa2x",
  "assistantWrapper-mobile--immersive": "styles__assistantWrapper-mobile--immersive___2DU6b",
  "assistantWrapper": "styles__assistantWrapper___3SLG6"
};

var AssistantView = function AssistantView() {
  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      isOpenCreateAssistant = _useAssistant.isOpenCreateAssistant,
      setIsOpenCreateAssistant = _useAssistant.setIsOpenCreateAssistant,
      isOpenEditAssistant = _useAssistant.isOpenEditAssistant,
      setIsOpenEditAssistant = _useAssistant.setIsOpenEditAssistant,
      isOpenDeleteAssistant = _useAssistant.isOpenDeleteAssistant,
      setIsOpenDeleteAssistant = _useAssistant.setIsOpenDeleteAssistant;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('u-w-100 u-flex u-flex-column u-ov-hidden', styles['assistantWrapper'], {
      'u-ph-1-t u-pb-1-t u-bxz': isMobile
    })
  }, /*#__PURE__*/_react.default.createElement(_AssistantContainer.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "u-w-100"
  }, isOpenCreateAssistant && /*#__PURE__*/_react.default.createElement(_CreateAssistantDialog.default, {
    open: isOpenCreateAssistant,
    onClose: function onClose() {
      return setIsOpenCreateAssistant(false);
    }
  }), isOpenEditAssistant && /*#__PURE__*/_react.default.createElement(_EditAssistantDialog.default, {
    open: isOpenEditAssistant,
    onClose: function onClose() {
      return setIsOpenEditAssistant(false);
    }
  }), isOpenDeleteAssistant && /*#__PURE__*/_react.default.createElement(_DeleteAssistantDialog.default, {
    open: isOpenDeleteAssistant,
    onClose: function onClose() {
      return setIsOpenDeleteAssistant(false);
    }
  })));
};

var AssistantViewWithProviders = function AssistantViewWithProviders() {
  return /*#__PURE__*/_react.default.createElement(_CozyTheme.default, {
    variant: "normal"
  }, /*#__PURE__*/_react.default.createElement(_AssistantProvider.default, null, /*#__PURE__*/_react.default.createElement(_ChatComponentsContext.ChatComponentsProvider, {
    components: {
      SourcesRenderer: _CozySourcesWithFilesQuery.default,
      ComposerExtras: _CozyComposerExtras.default,
      ConversationActions: _ConversationActions.default,
      useSearchConversationEnabled: _useCozySearchConversationEnabled.useCozySearchConversationEnabled
    }
  }, /*#__PURE__*/_react.default.createElement(_CozyConversationStoreProvider.default, null, /*#__PURE__*/_react.default.createElement(AssistantView, null)))));
};

var _default = AssistantViewWithProviders;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Views/CreateAssistantDialog.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _assistant = __webpack_require__("./node_modules/cozy-client/dist/models/assistant.js");

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Dialog = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Dialog/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _Alert = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Alert/index.js");

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var _AssistantDialogContent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/AssistantDialogContent.js"));

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/helpers.js");

var _useAssistantDialog2 = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/useAssistantDialog.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "BasicInfoStep": "styles__BasicInfoStep___2r0eM",
  "avatar-container": "styles__avatar-container___kJ_64",
  "avatar-image": "styles__avatar-image___2Mkxj",
  "file-input": "styles__file-input___2fB5n",
  "ModelSelectionStep": "styles__ModelSelectionStep___1auXB",
  "grid-container": "styles__grid-container___3wOus",
  "grid-container--mobile": "styles__grid-container--mobile___uCAg1",
  "model-card": "styles__model-card___fbAqF",
  "model-card--selected": "styles__model-card--selected___3hKq3",
  "model-card--openrag--light": "styles__model-card--openrag--light___1vabR",
  "model-card--openrag--dark": "styles__model-card--openrag--dark___1x0sK",
  "icon-container": "styles__icon-container___1vaTp",
  "icon-container--google": "styles__icon-container--google___3gtC7",
  "icon-container--custom": "styles__icon-container--custom___1_EFK",
  "icon-container--openai": "styles__icon-container--openai___3DsoO",
  "check-icon": "styles__check-icon___3uPUk",
  "CreateAssistantDialog": "styles__CreateAssistantDialog___1dSe_",
  "close-button": "styles__close-button___3jc_w"
};
var defaultProvider = (0, _helpers.getSelectedProviderById)('openrag');

var CreateAssistantDialog = function CreateAssistantDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose;
  (0, _twakeI18n.useExtendI18n)(_locales.locales);

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var client = (0, _cozyClient.useClient)();

  var _useAlert = (0, _Alert.useAlert)(),
      showAlert = _useAlert.showAlert;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useAssistantDialog = (0, _useAssistantDialog2.useAssistantDialog)({
    onClose: onClose,
    initialData: {
      selectedProvider: defaultProvider,
      model: defaultProvider.models[0]
    }
  }),
      step = _useAssistantDialog.step,
      formData = _useAssistantDialog.formData,
      selectedProvider = _useAssistantDialog.selectedProvider,
      canSubmit = _useAssistantDialog.canSubmit,
      handleBack = _useAssistantDialog.handleBack,
      handleNext = _useAssistantDialog.handleNext,
      handleChange = _useAssistantDialog.handleChange,
      handleProviderSelection = _useAssistantDialog.handleProviderSelection,
      handleAvatarChange = _useAssistantDialog.handleAvatarChange,
      isNextDisabled = _useAssistantDialog.isNextDisabled,
      handleChangeModel = _useAssistantDialog.handleChangeModel;

  var getTitle = function getTitle() {
    if (step === _useAssistantDialog2.STEPS.API_KEY) {
      return t('assistant_create.configure_api_key_title');
    }

    return t('assistant_create.title');
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _assistant.createAssistant)(client, {
                name: formData.name,
                prompt: formData.description,
                icon: formData.icon,
                model: formData.model,
                apiKey: formData.apiKey,
                baseUrl: formData.baseUrl,
                providerId: selectedProvider.id
              });

            case 2:
              showAlert({
                message: t('assistant_create.success'),
                severity: 'success'
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: open,
    onClose: onClose,
    maxWidth: "lg",
    fullScreen: !!isMobile,
    className: styles.CreateAssistantDialog
  }, /*#__PURE__*/_react.default.createElement(_Dialog.DialogTitle, {
    disableTypography: true
  }, getTitle()), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": t('assistant.dialog.close'),
    onClick: onClose,
    className: styles['close-button']
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Cross
  })), /*#__PURE__*/_react.default.createElement(_Dialog.DialogContent, null, /*#__PURE__*/_react.default.createElement(_AssistantDialogContent.default, {
    step: step,
    formData: formData,
    selectedProvider: selectedProvider,
    onChange: handleChange,
    onAvatarChange: handleAvatarChange,
    onProviderSelect: handleProviderSelection,
    onModelSelect: handleChangeModel
  })), /*#__PURE__*/_react.default.createElement(_Dialog.DialogActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "secondary",
    onClick: handleBack,
    label: t('assistant_create.buttons.cancel')
  }), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "primary",
    onClick: function onClick() {
      return handleNext(onSubmit);
    },
    disabled: isNextDisabled(),
    label: canSubmit ? t('assistant_create.buttons.create') : t('assistant_create.buttons.next')
  })));
};

var _default = CreateAssistantDialog;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Views/DeleteAssistantDialog.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Dialog = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Dialog/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _Alert = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Alert/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "BasicInfoStep": "styles__BasicInfoStep___2r0eM",
  "avatar-container": "styles__avatar-container___kJ_64",
  "avatar-image": "styles__avatar-image___2Mkxj",
  "file-input": "styles__file-input___2fB5n",
  "ModelSelectionStep": "styles__ModelSelectionStep___1auXB",
  "grid-container": "styles__grid-container___3wOus",
  "grid-container--mobile": "styles__grid-container--mobile___uCAg1",
  "model-card": "styles__model-card___fbAqF",
  "model-card--selected": "styles__model-card--selected___3hKq3",
  "model-card--openrag--light": "styles__model-card--openrag--light___1vabR",
  "model-card--openrag--dark": "styles__model-card--openrag--dark___1x0sK",
  "icon-container": "styles__icon-container___1vaTp",
  "icon-container--google": "styles__icon-container--google___3gtC7",
  "icon-container--custom": "styles__icon-container--custom___1_EFK",
  "icon-container--openai": "styles__icon-container--openai___3DsoO",
  "check-icon": "styles__check-icon___3uPUk",
  "CreateAssistantDialog": "styles__CreateAssistantDialog___1dSe_",
  "close-button": "styles__close-button___3jc_w"
};

var DeleteAssistantDialog = function DeleteAssistantDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose;
  (0, _twakeI18n.useExtendI18n)(_locales.locales);

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var client = (0, _cozyClient.useClient)();

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      assistantIdInAction = _useAssistant.assistantIdInAction,
      setAssistantIdInAction = _useAssistant.setAssistantIdInAction;

  var _useAlert = (0, _Alert.useAlert)(),
      showAlert = _useAlert.showAlert;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDeleting = _useState2[0],
      setIsDeleting = _useState2[1];

  var assistantQuery = (0, _queries.buildAssistantByIdQuery)(assistantIdInAction);

  var _ref2 = (0, _cozyClient.useQuery)(assistantQuery.definition, assistantQuery.options) || {},
      assistant = _ref2.data,
      fetchStatus = _ref2.fetchStatus;

  var isLoading = fetchStatus === 'loading' || fetchStatus === 'pending';
  var displayName = (assistant === null || assistant === void 0 ? void 0 : assistant.name) || assistantIdInAction || '...';

  var handleDeleteAssistant = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$client$query, assistantDoc, included, provider;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (assistantIdInAction) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setIsDeleting(true);
              _context.next = 6;
              return client.query(assistantQuery.definition());

            case 6:
              _yield$client$query = _context.sent;
              assistantDoc = _yield$client$query.data;
              included = _yield$client$query.included;
              _context.next = 11;
              return client.destroy(assistantDoc);

            case 11:
              provider = included === null || included === void 0 ? void 0 : included[0];

              if (!provider) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return client.destroy(provider);

            case 15:
              setAssistantIdInAction(null);
              onClose();
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](2);
              showAlert({
                message: t('assistant.default_error'),
                severity: 'error'
              });

            case 22:
              _context.prev = 22;
              setIsDeleting(false);
              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 19, 22, 25]]);
    }));

    return function handleDeleteAssistant() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: open,
    onClose: onClose,
    maxWidth: "sm",
    className: styles.CreateAssistantDialog
  }, /*#__PURE__*/_react.default.createElement(_Dialog.DialogTitle, {
    disableTypography: true
  }, t('assistant_delete.title')), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": t('assistant.dialog.close'),
    onClick: onClose,
    className: styles['close-button']
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Cross
  })), /*#__PURE__*/_react.default.createElement(_Dialog.DialogContent, null, t('assistant_delete.content', {
    name: displayName
  })), /*#__PURE__*/_react.default.createElement(_Dialog.DialogActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "text",
    onClick: onClose,
    label: t('assistant_delete.buttons.cancel')
  }), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "contained",
    color: "error",
    onClick: handleDeleteAssistant,
    disabled: isLoading || isDeleting || !assistantIdInAction,
    label: t('assistant_delete.buttons.confirm')
  })));
};

var _default = DeleteAssistantDialog;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Views/EditAssistantDialog.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _twakeIcons = __webpack_require__("./node_modules/@linagora/twake-icons/dist/index.cjs");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _assistant = __webpack_require__("./node_modules/cozy-client/dist/models/assistant.js");

var _Buttons = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js"));

var _Dialog = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-ui/transpiled/react/Dialog/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui/transpiled/react/IconButton/index.js"));

var _Alert = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Alert/index.js");

var _Breakpoints = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _AssistantDialogContent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/AssistantDialogContent.js"));

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/helpers.js");

var _useAssistantDialog2 = __webpack_require__("./node_modules/cozy-search/dist/components/CreateAssistantSteps/useAssistantDialog.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = {
  "BasicInfoStep": "styles__BasicInfoStep___2r0eM",
  "avatar-container": "styles__avatar-container___kJ_64",
  "avatar-image": "styles__avatar-image___2Mkxj",
  "file-input": "styles__file-input___2fB5n",
  "ModelSelectionStep": "styles__ModelSelectionStep___1auXB",
  "grid-container": "styles__grid-container___3wOus",
  "grid-container--mobile": "styles__grid-container--mobile___uCAg1",
  "model-card": "styles__model-card___fbAqF",
  "model-card--selected": "styles__model-card--selected___3hKq3",
  "model-card--openrag--light": "styles__model-card--openrag--light___1vabR",
  "model-card--openrag--dark": "styles__model-card--openrag--dark___1x0sK",
  "icon-container": "styles__icon-container___1vaTp",
  "icon-container--google": "styles__icon-container--google___3gtC7",
  "icon-container--custom": "styles__icon-container--custom___1_EFK",
  "icon-container--openai": "styles__icon-container--openai___3DsoO",
  "check-icon": "styles__check-icon___3uPUk",
  "CreateAssistantDialog": "styles__CreateAssistantDialog___1dSe_",
  "close-button": "styles__close-button___3jc_w"
};

var EditAssistantDialog = function EditAssistantDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose;
  (0, _twakeI18n.useExtendI18n)(_locales.locales);

  var _useI18n = (0, _twakeI18n.useI18n)(),
      t = _useI18n.t;

  var client = (0, _cozyClient.useClient)();

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      assistantIdInAction = _useAssistant.assistantIdInAction,
      setSelectedAssistantId = _useAssistant.setSelectedAssistantId;

  var _useAlert = (0, _Alert.useAlert)(),
      showAlert = _useAlert.showAlert;

  var _useBreakpoints = (0, _Breakpoints.useBreakpoints)(),
      isMobile = _useBreakpoints.isMobile;

  var _useAssistantDialog = (0, _useAssistantDialog2.useAssistantDialog)({
    onClose: onClose
  }),
      step = _useAssistantDialog.step,
      formData = _useAssistantDialog.formData,
      selectedProvider = _useAssistantDialog.selectedProvider,
      canSubmit = _useAssistantDialog.canSubmit,
      setFormData = _useAssistantDialog.setFormData,
      setSelectedProvider = _useAssistantDialog.setSelectedProvider,
      handleBack = _useAssistantDialog.handleBack,
      handleNext = _useAssistantDialog.handleNext,
      handleChange = _useAssistantDialog.handleChange,
      handleProviderSelection = _useAssistantDialog.handleProviderSelection,
      handleAvatarChange = _useAssistantDialog.handleAvatarChange,
      isNextDisabled = _useAssistantDialog.isNextDisabled,
      handleChangeModel = _useAssistantDialog.handleChangeModel;

  (0, _react.useEffect)(function () {
    if (!open || !assistantIdInAction) return;

    var fetchAssistant = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _assistant$relationsh, _assistant$relationsh2, _assistant$relationsh3, _assistant$relationsh4, _provider$auth, _provider$data, _provider$auth2, _provider$auth3, _provider$auth4, _provider$data2, _provider$auth5;

        var response, assistant, provider, providerId, selectProviderDefault;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return client.query((0, _cozyClient.Q)('io.cozy.ai.chat.assistants').getById(assistantIdInAction).include(['provider']));

              case 2:
                response = _context.sent;
                assistant = response.data;
                provider = response.included[0];
                providerId = assistant === null || assistant === void 0 ? void 0 : (_assistant$relationsh = assistant.relationships) === null || _assistant$relationsh === void 0 ? void 0 : (_assistant$relationsh2 = _assistant$relationsh.provider) === null || _assistant$relationsh2 === void 0 ? void 0 : (_assistant$relationsh3 = _assistant$relationsh2.data) === null || _assistant$relationsh3 === void 0 ? void 0 : (_assistant$relationsh4 = _assistant$relationsh3.metadata) === null || _assistant$relationsh4 === void 0 ? void 0 : _assistant$relationsh4.providerId;
                setFormData({
                  name: assistant.name || '',
                  description: assistant.prompt || '',
                  icon: assistant.icon || '',
                  model: (provider === null || provider === void 0 ? void 0 : (_provider$auth = provider.auth) === null || _provider$auth === void 0 ? void 0 : _provider$auth.login) || '',
                  baseUrl: (provider === null || provider === void 0 ? void 0 : (_provider$data = provider.data) === null || _provider$data === void 0 ? void 0 : _provider$data.baseUrl) || '',
                  apiKey: (provider === null || provider === void 0 ? void 0 : (_provider$auth2 = provider.auth) === null || _provider$auth2 === void 0 ? void 0 : _provider$auth2.apiKey) || '',
                  encryptedApiKey: (provider === null || provider === void 0 ? void 0 : (_provider$auth3 = provider.auth) === null || _provider$auth3 === void 0 ? void 0 : _provider$auth3.credentials_encrypted) || '',
                  providerId: providerId
                });
                selectProviderDefault = (0, _helpers.getSelectedProviderById)(providerId);
                setSelectedProvider(_objectSpread(_objectSpread({}, selectProviderDefault), {}, {
                  model: provider === null || provider === void 0 ? void 0 : (_provider$auth4 = provider.auth) === null || _provider$auth4 === void 0 ? void 0 : _provider$auth4.login,
                  baseUrl: provider === null || provider === void 0 ? void 0 : (_provider$data2 = provider.data) === null || _provider$data2 === void 0 ? void 0 : _provider$data2.baseUrl,
                  name: selectProviderDefault.id === 'custom' ? provider === null || provider === void 0 ? void 0 : (_provider$auth5 = provider.auth) === null || _provider$auth5 === void 0 ? void 0 : _provider$auth5.login : selectProviderDefault.name
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchAssistant() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchAssistant();
  }, [client, assistantIdInAction, open, setFormData, setSelectedProvider]);

  var getTitle = function getTitle() {
    if (step === _useAssistantDialog2.STEPS.API_KEY) {
      return t('assistant_edit.configure_api_key_title');
    }

    return t('assistant_edit.title');
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _assistant.editAssistant)(client, assistantIdInAction, {
                name: formData.name,
                prompt: formData.description,
                icon: formData.icon,
                model: formData.model,
                apiKey: formData.apiKey,
                baseUrl: formData.baseUrl,
                providerId: selectedProvider.id
              });

            case 2:
              setSelectedAssistantId(assistantIdInAction);
              showAlert({
                message: t('assistant_edit.success'),
                severity: 'success'
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: open,
    onClose: onClose,
    maxWidth: "lg",
    fullScreen: !!isMobile,
    className: styles.CreateAssistantDialog
  }, /*#__PURE__*/_react.default.createElement(_Dialog.DialogTitle, {
    disableTypography: true
  }, getTitle()), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": t('assistant.dialog.close'),
    onClick: onClose,
    className: styles['close-button']
  }, /*#__PURE__*/_react.default.createElement(_twakeIcons.Icon, {
    icon: _twakeIcons.Cross
  })), /*#__PURE__*/_react.default.createElement(_Dialog.DialogContent, null, /*#__PURE__*/_react.default.createElement(_AssistantDialogContent.default, {
    step: step,
    formData: formData,
    selectedProvider: selectedProvider,
    onChange: handleChange,
    onAvatarChange: handleAvatarChange,
    onProviderSelect: handleProviderSelection,
    onModelSelect: handleChangeModel
  })), /*#__PURE__*/_react.default.createElement(_Dialog.DialogActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "secondary",
    onClick: handleBack,
    label: t('assistant_edit.buttons.cancel')
  }), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    variant: "primary",
    onClick: function onClick() {
      return handleNext(onSubmit);
    },
    disabled: isNextDisabled(!!formData.encryptedApiKey),
    label: canSubmit ? t('assistant_edit.buttons.edit') : t('assistant_edit.buttons.next')
  })));
};

var _default = EditAssistantDialog;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/Views/SearchDialog.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _CozyDialogs = __webpack_require__("./node_modules/cozy-ui/transpiled/react/CozyDialogs/index.js");

var _CozyTheme = _interopRequireDefault(__webpack_require__("./node_modules/cozy-ui-plus/dist/providers/CozyTheme/index.js"));

var _twakeI18n = __webpack_require__("./node_modules/twake-i18n/dist/index.js");

var _locales = __webpack_require__("./node_modules/cozy-search/dist/locales/index.js");

var _AssistantProvider = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js"));

var _ResultMenuContent = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/ResultMenu/ResultMenuContent.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchBar.js"));

var _SearchProvider = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-search/dist/components/Search/SearchProvider.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchDialog = function SearchDialog() {
  (0, _twakeI18n.useExtendI18n)(_locales.locales);
  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
      _useSearchParams2 = (0, _slicedToArray2.default)(_useSearchParams, 1),
      searchParams = _useSearchParams2[0];

  var _useSearch = (0, _SearchProvider.useSearch)(),
      searchValue = _useSearch.searchValue;

  var onClose = function onClose() {
    try {
      var returnPath = searchParams.get('returnPath');

      if (returnPath) {
        navigate(returnPath);
      } else {
        navigate('..');
      }
    } catch (_unused) {
      navigate('..');
    }
  };

  return /*#__PURE__*/_react.default.createElement(_CozyDialogs.FixedDialog, {
    open: true,
    fullScreen: true,
    size: "full",
    disableGutters: true,
    componentsProps: {
      // don't touch padding-top in dialogTitle, there is a flagship override. Play with margin instead.
      dialogTitle: {
        className: 'u-ph-half u-pb-0 u-mt-2-half u-ov-visible'
      },
      divider: {
        className: 'u-dn'
      }
    },
    title: /*#__PURE__*/_react.default.createElement(_SearchBar.default, null),
    content: searchValue && /*#__PURE__*/_react.default.createElement(_ResultMenuContent.default, null),
    onClose: onClose
  });
};

var SearchDialogWithProviders = function SearchDialogWithProviders() {
  return /*#__PURE__*/_react.default.createElement(_CozyTheme.default, {
    variant: "normal"
  }, /*#__PURE__*/_react.default.createElement(_AssistantProvider.default, null, /*#__PURE__*/_react.default.createElement(_SearchProvider.default, null, /*#__PURE__*/_react.default.createElement(SearchDialog, null))));
};

var _default = SearchDialogWithProviders;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/components/adapters/CozyRealtimeChatAdapter.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createCozyRealtimeChatAdapter = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _awaitAsyncGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js"));

var _wrapAsyncGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js"));

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

var log = (0, _cozyMinilog.default)('🔍 [CozyRealtimeChatAdapter]');

/**
 * Finds the user query to send to the backend.
 * For new messages: gets the last user message
 * For reload: finds the last user message (may need to skip assistant messages)
 */
var findUserQuery = function findUserQuery(messages) {
  for (var i = messages.length - 1; i >= 0; i--) {
    var msg = messages[i];

    if (msg.role === 'user') {
      var textContent = msg.content.find(function (part) {
        return part.type === 'text';
      });

      if (textContent && textContent.type === 'text') {
        return textContent.text;
      }
    }
  }

  return null;
};
/**
 * Creates a ChatModelAdapter that integrates with Cozy's backend.
 * The adapter posts messages to the backend and yields streaming responses
 * from the WebSocket via StreamBridge.
 */


var createCozyRealtimeChatAdapter = function createCozyRealtimeChatAdapter(options, t, streamBridgeRef) {
  return {
    run: function run(_ref) {
      var messages = _ref.messages,
          abortSignal = _ref.abortSignal;
      return (0, _wrapAsyncGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var client, conversationId, assistantId, websearchEnabled, streamBridge, userQuery, stream, fullText, wasAborted, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, sanitizedText, finalText, sources;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = options.client, conversationId = options.conversationId, assistantId = options.assistantId, websearchEnabled = options.websearchEnabled;
                streamBridge = streamBridgeRef.current;
                userQuery = findUserQuery(messages);

                if (userQuery) {
                  _context.next = 6;
                  break;
                }

                log.error('No user message found in:', messages);
                return _context.abrupt("return");

              case 6:
                stream = streamBridge.createStream(conversationId);

                if (!(abortSignal !== null && abortSignal !== void 0 && abortSignal.aborted)) {
                  _context.next = 10;
                  break;
                }

                streamBridge.cleanup(conversationId);
                return _context.abrupt("return");

              case 10:
                _context.prev = 10;
                _context.next = 13;
                return {
                  content: [{
                    type: 'text',
                    text: ''
                  }],
                  status: {
                    type: 'requires-action',
                    reason: 'tool-calls'
                  }
                };

              case 13:
                _context.next = 15;
                return (0, _awaitAsyncGenerator2.default)(client.stackClient.fetchJSON('POST', "/ai/chat/conversations/".concat(conversationId), _objectSpread({
                  q: userQuery,
                  assistantID: assistantId
                }, websearchEnabled && {
                  websearch: true
                })));

              case 15:
                fullText = '';
                wasAborted = false;
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context.prev = 19;
                _iterator = _asyncIterator(stream);

              case 21:
                _context.next = 23;
                return (0, _awaitAsyncGenerator2.default)(_iterator.next());

              case 23:
                if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                  _context.next = 36;
                  break;
                }

                chunk = _step.value;

                if (!(abortSignal !== null && abortSignal !== void 0 && abortSignal.aborted)) {
                  _context.next = 29;
                  break;
                }

                wasAborted = true;
                streamBridge.cleanup(conversationId);
                return _context.abrupt("break", 36);

              case 29:
                fullText += chunk;
                sanitizedText = (0, _helpers.sanitizeChatContent)(fullText);
                _context.next = 33;
                return {
                  content: [{
                    type: 'text',
                    text: sanitizedText
                  }],
                  status: {
                    type: 'running'
                  }
                };

              case 33:
                _iteratorAbruptCompletion = false;
                _context.next = 21;
                break;

              case 36:
                _context.next = 42;
                break;

              case 38:
                _context.prev = 38;
                _context.t0 = _context["catch"](19);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 42:
                _context.prev = 42;
                _context.prev = 43;

                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context.next = 47;
                  break;
                }

                _context.next = 47;
                return (0, _awaitAsyncGenerator2.default)(_iterator.return());

              case 47:
                _context.prev = 47;

                if (!_didIteratorError) {
                  _context.next = 50;
                  break;
                }

                throw _iteratorError;

              case 50:
                return _context.finish(47);

              case 51:
                return _context.finish(42);

              case 52:
                if (wasAborted) {
                  _context.next = 58;
                  break;
                }

                finalText = (0, _helpers.sanitizeChatContent)(fullText);
                sources = streamBridge.getSources(conversationId);
                _context.next = 57;
                return _objectSpread({
                  content: [{
                    type: 'text',
                    text: finalText
                  }],
                  status: {
                    type: 'complete',
                    reason: 'stop'
                  }
                }, sources ? {
                  metadata: {
                    custom: {
                      sources: sources
                    }
                  }
                } : {});

              case 57:
                streamBridge.cleanup(conversationId);

              case 58:
                _context.next = 66;
                break;

              case 60:
                _context.prev = 60;
                _context.t1 = _context["catch"](10);
                log.error('Error:', _context.t1);
                streamBridge.cleanup(conversationId);
                _context.next = 66;
                return {
                  content: [{
                    type: 'text',
                    text: t('assistant.default_error')
                  }],
                  status: {
                    type: 'incomplete',
                    reason: 'error'
                  },
                  metadata: {
                    custom: {
                      isError: true
                    }
                  }
                };

              case 66:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[10, 60], [19, 38, 42, 52], [43,, 47, 51]]);
      }))();
    }
  };
};

exports.createCozyRealtimeChatAdapter = createCozyRealtimeChatAdapter;

}),
"./node_modules/cozy-search/dist/components/adapters/StreamBridge.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StreamBridge = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

/**
 * StreamBridge bridges WebSocket events from cozy-realtime to async iterables
 * that can be consumed by assistant-ui's ChatModelAdapter.
 *
 * The bridge receives push-based events from WebSocket and converts them
 * to a pull-based async iterator pattern.
 */
var StreamBridge = /*#__PURE__*/function () {
  function StreamBridge() {
    (0, _classCallCheck2.default)(this, StreamBridge);
    (0, _defineProperty2.default)(this, "streams", new Map());
    (0, _defineProperty2.default)(this, "cleanupCallback", null);
    (0, _defineProperty2.default)(this, "positionBuffers", new Map());
    (0, _defineProperty2.default)(this, "nextPositions", new Map());
    (0, _defineProperty2.default)(this, "sourcesMap", new Map());
  }

  (0, _createClass2.default)(StreamBridge, [{
    key: "setCleanupCallback",
    value:
    /**
     * Sets a callback to be invoked when cleanup is called.
     * This allows the provider to mark the current message as cancelled.
     */
    function setCleanupCallback(callback) {
      this.cleanupCallback = callback;
    }
    /**
     * Creates a new async iterable stream for a conversation.
     * The stream will yield string chunks as they arrive via onDelta().
     */

  }, {
    key: "createStream",
    value: function createStream(conversationId) {
      this.cleanup(conversationId);
      var queue = [];
      var resolveNext = null;
      var rejectNext = null;
      var isDone = false;
      var _error = null;
      var controller = {
        push: function push(chunk) {
          if (isDone) return;

          if (resolveNext) {
            resolveNext({
              value: chunk,
              done: false
            });
            resolveNext = null;
            rejectNext = null;
          } else {
            queue.push(chunk);
          }
        },
        complete: function complete() {
          if (isDone) return;
          isDone = true;

          if (resolveNext) {
            resolveNext({
              value: undefined,
              done: true
            });
            resolveNext = null;
            rejectNext = null;
          }
        },
        error: function error(err) {
          if (isDone) return;
          isDone = true;
          _error = err;

          if (rejectNext) {
            rejectNext(err);
            resolveNext = null;
            rejectNext = null;
          }
        },
        iterator: (0, _defineProperty2.default)({
          next: function next() {
            return new Promise(function (resolve, reject) {
              if (_error) {
                reject(_error);
                return;
              }

              if (queue.length > 0) {
                resolve({
                  value: queue.shift(),
                  done: false
                });
              } else if (isDone) {
                resolve({
                  value: undefined,
                  done: true
                });
              } else {
                if (resolveNext) {
                  reject(new Error('StreamBridge: concurrent next() calls are not supported'));
                  return;
                }

                resolveNext = resolve;
                rejectNext = reject;
              }
            });
          }
        }, Symbol.asyncIterator, function () {
          return this;
        })
      };
      this.streams.set(conversationId, controller);
      return controller.iterator;
    }
    /**
     * Called when a delta event is received from WebSocket.
     * When a position is provided, chunks are buffered and flushed in order.
     * Without a position, chunks are pushed directly in arrival order.
     */

  }, {
    key: "onDelta",
    value: function onDelta(conversationId, content, position) {
      var _this$nextPositions$g;

      var stream = this.streams.get(conversationId);
      if (!stream) return;

      if (position === undefined) {
        stream.push(content);
        return;
      } // Fast path: chunk arrived in order, no buffering needed


      var nextExpected = (_this$nextPositions$g = this.nextPositions.get(conversationId)) !== null && _this$nextPositions$g !== void 0 ? _this$nextPositions$g : 0;

      if (position === nextExpected) {
        stream.push(content);
        var next = nextExpected + 1; // Flush any previously buffered chunks that are now contiguous

        var _buffer = this.positionBuffers.get(conversationId);

        if (_buffer && _buffer.size > 0) {
          while (_buffer.has(next)) {
            stream.push(_buffer.get(next));

            _buffer.delete(next);

            next++;
          }

          if (_buffer.size === 0) {
            this.positionBuffers.delete(conversationId);
          }
        }

        this.nextPositions.set(conversationId, next);
        return;
      } // Out-of-order: buffer until the gap is filled


      var buffer = this.positionBuffers.get(conversationId);

      if (!buffer) {
        buffer = new Map();
        this.positionBuffers.set(conversationId, buffer);
      }

      buffer.set(position, content);
    }
    /**
     * Called when a 'done' event is received from WebSocket.
     * Completes the stream for the conversation.
     */

  }, {
    key: "onDone",
    value: function onDone(conversationId) {
      var stream = this.streams.get(conversationId);

      if (stream) {
        stream.complete();
        this.positionBuffers.delete(conversationId);
        this.nextPositions.delete(conversationId);
      }
    }
    /**
     * Called when a 'sources' event is received from WebSocket.
     * Stores sources for the conversation to be retrieved by the adapter.
     */

  }, {
    key: "onSources",
    value: function onSources(conversationId, sources) {
      if (!this.streams.has(conversationId)) return;
      this.sourcesMap.set(conversationId, sources);
    }
    /**
     * Returns stored sources for a conversation.
     */

  }, {
    key: "getSources",
    value: function getSources(conversationId) {
      return this.sourcesMap.get(conversationId);
    }
    /**
     * Called when an error occurs.
     * Errors the stream for the conversation.
     */

  }, {
    key: "onError",
    value: function onError(conversationId, error) {
      var stream = this.streams.get(conversationId);

      if (stream) {
        stream.error(error);
      }

      this.positionBuffers.delete(conversationId);
      this.nextPositions.delete(conversationId);
      this.sourcesMap.delete(conversationId);
    }
    /**
     * Cleans up the stream for a conversation.
     * Should be called when navigating away or on unmount.
     */

  }, {
    key: "cleanup",
    value: function cleanup(conversationId) {
      var stream = this.streams.get(conversationId);

      if (stream) {
        if (this.cleanupCallback) {
          this.cleanupCallback();
        }

        stream.complete();
        this.streams.delete(conversationId);
      }

      this.positionBuffers.delete(conversationId);
      this.nextPositions.delete(conversationId);
      this.sourcesMap.delete(conversationId);
    }
    /**
     * Checks if there's an active stream for a conversation.
     */

  }, {
    key: "hasStream",
    value: function hasStream(conversationId) {
      return this.streams.has(conversationId);
    }
  }]);
  return StreamBridge;
}();

exports.StreamBridge = StreamBridge;

}),
"./node_modules/cozy-search/dist/components/adapters/index.js": (function (__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "StreamBridge", ({
  enumerable: true,
  get: function get() {
    return _StreamBridge.StreamBridge;
  }
}));
Object.defineProperty(exports, "createCozyRealtimeChatAdapter", ({
  enumerable: true,
  get: function get() {
    return _CozyRealtimeChatAdapter.createCozyRealtimeChatAdapter;
  }
}));

var _StreamBridge = __webpack_require__("./node_modules/cozy-search/dist/components/adapters/StreamBridge.js");

var _CozyRealtimeChatAdapter = __webpack_require__("./node_modules/cozy-search/dist/components/adapters/CozyRealtimeChatAdapter.js");

}),
"./node_modules/cozy-search/dist/components/constants.js": (function (__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OPENRAG_MODEL = exports.FETCH_CONVERSATIONS_LIMIT = exports.DEFAULT_ASSISTANT = void 0;
var DEFAULT_ASSISTANT = {
  _id: 'default_ai_assistant',
  name: 'AI Assistant'
};
exports.DEFAULT_ASSISTANT = DEFAULT_ASSISTANT;
var FETCH_CONVERSATIONS_LIMIT = 50;
exports.FETCH_CONVERSATIONS_LIMIT = FETCH_CONVERSATIONS_LIMIT;
var OPENRAG_MODEL = 'openrag';
exports.OPENRAG_MODEL = OPENRAG_MODEL;

}),
"./node_modules/cozy-search/dist/components/cozyHelpers.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isAssistantEnabled = void 0;

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

// Cozy-only helpers kept out of `helpers.js` so the presentational view layer
// (which imports the date/name/description helpers) stays free of cozy-flags.
var isAssistantEnabled = function isAssistantEnabled() {
  return (0, _cozyFlags.default)('cozy.assistant.enabled');
};

exports.isAssistantEnabled = isAssistantEnabled;

}),
"./node_modules/cozy-search/dist/components/helpers.js": (function (__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sanitizeChatContent = exports.makeConversationId = exports.getNameOfConversation = exports.getDescriptionOfConversation = exports.formatConversationDate = void 0;

var makeConversationId = function makeConversationId() {
  return "".concat(Date.now(), "-").concat(Math.floor(Math.random() * 90000) + 10000);
};
/**
 * Sanitize chat content by removing special sources tags like
 * [REF]...[/REF] or [doc_X] that are not currently handled.
 *
 * @param {string} content - content to sanitize
 * @returns {string} sanitized content
 */


exports.makeConversationId = makeConversationId;

var sanitizeChatContent = function sanitizeChatContent(content) {
  if (!content) {
    return '';
  }

  return content // Remove REFdoc_1/REF
  .replace(/\s?\[REF\][\s\S]*?\[\/REF\]/g, '') // Remove [REF]doc_1[/REF]
  .replace(/\s?REF[\s\S]*?\/REF/g, '') // remove « [doc_1] »
  .replace(/\s?\[doc_\d+\]/g, '') // remove « [Source 1] », « [Source 4, 6] » or « [Source 4, Source 6] »
  .replace(/\s?\[Source\s+\d+(?:\s*,\s*(?:Source\s+)?\d+)*\]/g, '') // remove « [Sources: 1, 3, 6] » citations, with optional empty link parens
  .replace(/\s?\[Sources?:\s*\d+(?:\s*,\s*\d+)*\s*\](?:\([^)]*\))?/g, '');
};

exports.sanitizeChatContent = sanitizeChatContent;

var formatConversationDate = function formatConversationDate(dateString, t, lang) {
  if (!dateString) return '';
  var date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  var now = new Date();
  var yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  var isToday = date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  var isYesterday = date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();

  if (isToday || isYesterday) {
    var timeStr = date.toLocaleTimeString(lang, {
      hour: 'numeric',
      minute: '2-digit'
    });
    return "".concat(isToday ? t('assistant.time.today') : t('assistant.time.yesterday'), ", ").concat(timeStr);
  }

  return date.toLocaleDateString(lang, {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};
/**
 * Get name of the conversation
 * Since we don't have rule for conversation's name
 * So temporary we get the last question from user as name of the conversation
 */


exports.formatConversationDate = formatConversationDate;

var getNameOfConversation = function getNameOfConversation(conversation) {
  var _conversation$message, _conversation$message2, _conversation$message3;

  return conversation.name || ((_conversation$message = conversation.messages) === null || _conversation$message === void 0 ? void 0 : (_conversation$message2 = _conversation$message[((_conversation$message3 = conversation.messages) === null || _conversation$message3 === void 0 ? void 0 : _conversation$message3.length) - 2]) === null || _conversation$message2 === void 0 ? void 0 : _conversation$message2.content);
};
/**
 * Get description of the conversation
 * Since we don't have rule for description of the conversation
 * So temporary we get the last answer from assistant as description of the conversation
 */


exports.getNameOfConversation = getNameOfConversation;

var getDescriptionOfConversation = function getDescriptionOfConversation(conversation) {
  var _conversation$message4, _conversation$message5;

  var content = (_conversation$message4 = conversation.messages) === null || _conversation$message4 === void 0 ? void 0 : (_conversation$message5 = _conversation$message4[conversation.messages.length - 1]) === null || _conversation$message5 === void 0 ? void 0 : _conversation$message5.content;
  return content && sanitizeChatContent(content);
};

exports.getDescriptionOfConversation = getDescriptionOfConversation;

}),
"./node_modules/cozy-search/dist/components/queries.js": (function (__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.buildMyselfQuery = exports.buildFilesByIds = exports.buildChatConversationsQuery = exports.buildChatConversationQueryById = exports.buildAssistantsQuery = exports.buildAssistantByIdQuery = exports.FILES_DOCTYPE = exports.EMAIL_DOCTYPE = exports.CHAT_EVENTS_DOCTYPE = exports.CHAT_CONVERSATIONS_DOCTYPE = void 0;

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _constants = __webpack_require__("./node_modules/cozy-search/dist/components/constants.js");

var CONTACTS_DOCTYPE = 'io.cozy.contacts';
var CHAT_CONVERSATIONS_DOCTYPE = 'io.cozy.ai.chat.conversations';
exports.CHAT_CONVERSATIONS_DOCTYPE = CHAT_CONVERSATIONS_DOCTYPE;
var CHAT_EVENTS_DOCTYPE = 'io.cozy.ai.chat.events';
exports.CHAT_EVENTS_DOCTYPE = CHAT_EVENTS_DOCTYPE;
var FILES_DOCTYPE = 'io.cozy.files';
exports.FILES_DOCTYPE = FILES_DOCTYPE;
var EMAIL_DOCTYPE = 'com.linagora.email';
exports.EMAIL_DOCTYPE = EMAIL_DOCTYPE;

var defaultFetchPolicy = _cozyClient.fetchPolicies.olderThan(86400); // 24 hours


var buildFilesByIds = function buildFilesByIds(ids, enabled) {
  return {
    definition: (0, _cozyClient.Q)(FILES_DOCTYPE).getByIds(ids),
    options: {
      as: "".concat(FILES_DOCTYPE, "/").concat(ids.join('')),
      fetchPolicy: defaultFetchPolicy,
      enabled: enabled
    }
  };
};

exports.buildFilesByIds = buildFilesByIds;

var buildChatConversationQueryById = function buildChatConversationQueryById(id) {
  return {
    definition: (0, _cozyClient.Q)(CHAT_CONVERSATIONS_DOCTYPE).getById(id),
    options: {
      as: "".concat(CHAT_CONVERSATIONS_DOCTYPE, "/").concat(id),
      fetchPolicy: defaultFetchPolicy,
      singleDocData: true
    }
  };
};

exports.buildChatConversationQueryById = buildChatConversationQueryById;

var buildMyselfQuery = function buildMyselfQuery() {
  return {
    definition: (0, _cozyClient.Q)(CONTACTS_DOCTYPE).where({
      me: true
    }),
    options: {
      as: "".concat(CONTACTS_DOCTYPE, "/myself"),
      fetchPolicy: defaultFetchPolicy
    }
  };
};

exports.buildMyselfQuery = buildMyselfQuery;

var buildAssistantsQuery = function buildAssistantsQuery() {
  return {
    definition: function definition() {
      return (0, _cozyClient.Q)('io.cozy.ai.chat.assistants').where({}).include(['provider']).indexFields(['cozyMetadata.updatedAt']).sortBy([{
        'cozyMetadata.updatedAt': 'desc'
      }]);
    },
    options: {
      as: 'io.cozy.ai.chat.assistants/list',
      fetchPolicy: defaultFetchPolicy
    }
  };
};

exports.buildAssistantsQuery = buildAssistantsQuery;

var buildAssistantByIdQuery = function buildAssistantByIdQuery(id) {
  return {
    definition: function definition() {
      return (0, _cozyClient.Q)('io.cozy.ai.chat.assistants').getById(id).include(['provider']);
    },
    options: {
      as: 'io.cozy.ai.chat.assistants/' + id,
      fetchPolicy: defaultFetchPolicy,
      singleDocData: true,
      enabled: !!id
    }
  };
};

exports.buildAssistantByIdQuery = buildAssistantByIdQuery;

var buildChatConversationsQuery = function buildChatConversationsQuery() {
  return {
    definition: function definition(_ref) {
      var bookmark = _ref.bookmark,
          _ref$query = _ref.query,
          query = _ref$query === void 0 ? {} : _ref$query;
      return (0, _cozyClient.Q)(CHAT_CONVERSATIONS_DOCTYPE).where(query).indexFields(['cozyMetadata.updatedAt']).sortBy([{
        'cozyMetadata.updatedAt': 'desc'
      }]).include(['assistant']).offsetBookmark(bookmark).limitBy(_constants.FETCH_CONVERSATIONS_LIMIT);
    },
    options: function options(_ref2) {
      var _ref2$query = _ref2.query,
          query = _ref2$query === void 0 ? {} : _ref2$query;
      return {
        as: "".concat(CHAT_CONVERSATIONS_DOCTYPE, "/recent-").concat(JSON.stringify(query)),
        fetchPolicy: defaultFetchPolicy
      };
    }
  };
};

exports.buildChatConversationsQuery = buildChatConversationsQuery;

}),
"./node_modules/cozy-search/dist/contexts/ChatComponentsContext.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useChatComponents = exports.ChatComponentsProvider = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// These defaults are intentional no-ops: every ChatComponents slot is an
// OPTIONAL injection point, so rendering the views without a
// ChatComponentsProvider yields no extras/sources/actions rather than a crash.
// This differs deliberately from ConversationStore, which is REQUIRED data and
// therefore throws when its provider is missing.
var defaults = {
  SourcesRenderer: function SourcesRenderer() {
    return null;
  },
  ComposerExtras: function ComposerExtras() {
    return null;
  },
  ConversationActions: function ConversationActions() {
    return null;
  },
  useSearchConversationEnabled: function useSearchConversationEnabled() {
    return false;
  }
};
var ChatComponentsContext = /*#__PURE__*/(0, _react.createContext)(defaults);

var ChatComponentsProvider = function ChatComponentsProvider(_ref) {
  var components = _ref.components,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ChatComponentsContext.Provider, {
    value: _objectSpread(_objectSpread({}, defaults), components)
  }, children);
};

exports.ChatComponentsProvider = ChatComponentsProvider;

var useChatComponents = function useChatComponents() {
  return (0, _react.useContext)(ChatComponentsContext);
};

exports.useChatComponents = useChatComponents;

}),
"./node_modules/cozy-search/dist/contexts/ConversationStoreContext.js": (function (__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useConversationStore = exports.ConversationStoreProvider = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ConversationStoreContext = /*#__PURE__*/(0, _react.createContext)(null);

var ConversationStoreProvider = function ConversationStoreProvider(_ref) {
  var store = _ref.store,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ConversationStoreContext.Provider, {
    value: store
  }, children);
};

exports.ConversationStoreProvider = ConversationStoreProvider;

var useConversationStore = function useConversationStore() {
  var store = (0, _react.useContext)(ConversationStoreContext);

  if (!store) {
    throw new Error('useConversationStore must be used within a ConversationStoreProvider');
  }

  return store;
};

exports.useConversationStore = useConversationStore;

}),
"./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStore.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCozyConversationStore = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = __webpack_require__("./node_modules/react/index.js");

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

var _useFetchConversations = _interopRequireDefault(__webpack_require__("./node_modules/cozy-search/dist/hooks/useFetchConversations.js"));

// Hoisted to module scope so their identities are stable across renders (they
// capture nothing render-specific) and they don't need to appear in the store's
// useMemo deps — which would otherwise rebuild the store object every render.
var useConversations = function useConversations() {
  var _useFetchConversation = (0, _useFetchConversations.default)(),
      conversations = _useFetchConversation.conversations,
      hasMore = _useFetchConversation.hasMore,
      isLoading = _useFetchConversation.isLoading,
      fetchMore = _useFetchConversation.fetchMore;

  return {
    conversations: conversations,
    hasMore: hasMore,
    isLoading: isLoading,
    fetchMore: fetchMore
  };
};

var useConversationMessages = function useConversationMessages(conversationId) {
  var _res$data$messages, _res$data;

  var q = (0, _queries.buildChatConversationQueryById)(conversationId);
  var res = (0, _cozyClient.useQuery)(q.definition, q.options);
  return {
    messages: (_res$data$messages = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.messages) !== null && _res$data$messages !== void 0 ? _res$data$messages : [],
    isLoading: (0, _cozyClient.isQueryLoading)(res)
  };
}; // `createConversation` / `deleteConversation` / `renameConversation` fulfil the
// ConversationStore contract for standalone consumers. The Cozy app itself
// still mints ids via useConversation and mutates via ConversationActions, so
// in-app these are reached mainly through the seam, not called directly here.


var useCozyConversationStore = function useCozyConversationStore() {
  var client = (0, _cozyClient.useClient)();
  var createConversation = (0, _react.useCallback)(function () {
    return Promise.resolve((0, _helpers.makeConversationId)());
  }, []);
  var deleteConversation = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(conversationId) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (client) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return client.destroy({
                _type: _queries.CHAT_CONVERSATIONS_DOCTYPE,
                _id: conversationId
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [client]);
  var renameConversation = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(conversationId, name) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (client) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return client.save({
                _type: _queries.CHAT_CONVERSATIONS_DOCTYPE,
                _id: conversationId,
                name: name
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(), [client]);
  return (0, _react.useMemo)(function () {
    return {
      useConversations: useConversations,
      useConversationMessages: useConversationMessages,
      createConversation: createConversation,
      deleteConversation: deleteConversation,
      renameConversation: renameConversation
    };
  }, [createConversation, deleteConversation, renameConversation]);
};

exports.useCozyConversationStore = useCozyConversationStore;

}),
"./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStoreProvider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _ConversationStoreContext = __webpack_require__("./node_modules/cozy-search/dist/contexts/ConversationStoreContext.js");

var _CozyConversationStore = __webpack_require__("./node_modules/cozy-search/dist/contexts/cozy/CozyConversationStore.js");

var CozyConversationStoreProvider = function CozyConversationStoreProvider(_ref) {
  var children = _ref.children;
  var store = (0, _CozyConversationStore.useCozyConversationStore)();
  return /*#__PURE__*/_react.default.createElement(_ConversationStoreContext.ConversationStoreProvider, {
    store: store
  }, children);
};

var _default = CozyConversationStoreProvider;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/contexts/cozy/useCozySearchConversationEnabled.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCozySearchConversationEnabled = void 0;

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var useCozySearchConversationEnabled = function useCozySearchConversationEnabled() {
  return !!(0, _cozyFlags.default)('cozy.assistant.search-conversation.enabled');
};

exports.useCozySearchConversationEnabled = useCozySearchConversationEnabled;

}),
"./node_modules/cozy-search/dist/hooks/useConversation.js": (function (__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__("./node_modules/react/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/dist/index.js");

var _AssistantProvider = __webpack_require__("./node_modules/cozy-search/dist/components/AssistantProvider.js");

var _helpers = __webpack_require__("./node_modules/cozy-search/dist/components/helpers.js");

var useConversation = function useConversation() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var location = (0, _reactRouterDom.useLocation)();

  var _useAssistant = (0, _AssistantProvider.useAssistant)(),
      setIsOpenSearchConversation = _useAssistant.setIsOpenSearchConversation; // `useNavigate()` returns a new function whenever the location changes, and
  // `location` itself changes on every navigation. Keep both in refs so
  // `goToConversation` can stay referentially stable across renders. A stable
  // callback is required for `React.memo` on the conversation list items to
  // actually skip re-renders on every conversation switch.


  var navigateRef = (0, _react.useRef)(navigate);
  var locationRef = (0, _react.useRef)(location);
  (0, _react.useEffect)(function () {
    navigateRef.current = navigate;
    locationRef.current = location;
  }, [navigate, location]);
  var goToConversation = (0, _react.useCallback)(function (conversationId) {
    var _match$;

    var loc = locationRef.current; // Extract base path safely by identifying the start of '/assistant' if it exists.

    var match = loc.pathname.match(/^(.*?)(\/assistant(\/|$).*|$)/);
    var basePath = ((_match$ = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$ !== void 0 ? _match$ : loc.pathname).replace(/\/$/, '');
    var newPathname = "".concat(basePath, "/assistant/").concat(conversationId);
    setIsOpenSearchConversation(false);
    navigateRef.current({
      pathname: newPathname,
      search: loc.search,
      hash: loc.hash
    });
  }, [setIsOpenSearchConversation]);
  var createNewConversation = (0, _react.useCallback)(function () {
    goToConversation((0, _helpers.makeConversationId)());
  }, [goToConversation]);
  return {
    goToConversation: goToConversation,
    createNewConversation: createNewConversation
  };
};

var _default = useConversation;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/hooks/useFetchConversations.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _isEqual = _interopRequireDefault(__webpack_require__("./node_modules/lodash/isEqual.js"));

var _react = __webpack_require__("./node_modules/react/index.js");

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _useRealtime2 = _interopRequireDefault(__webpack_require__("./node_modules/cozy-realtime/dist/useRealtime.js"));

var _constants = __webpack_require__("./node_modules/cozy-search/dist/components/constants.js");

var _queries = __webpack_require__("./node_modules/cozy-search/dist/components/queries.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var log = (0, _cozyMinilog.default)('[useFetchConversations]');
/**
 * We use `client.query` manually instead of the `useQuery` hook from cozy-client
 * because `useQuery` currently drops the `included` array from its output state.
 * Without `included`, we cannot easily map the `assistant` relationship to each conversation.
 *
 * For more details on the cozy-client issue, see:
 * https://github.com/linagora/cozy-client/issues/1083
 *
 * @typedef {Object} Assistant
 * @property {string} _id
 * @property {string} name
 * @property {string} [icon]
 *
 * @typedef {Object} ConversationWithAssistant
 * @property {string} _id
 * @property {Array} messages
 * @property {Assistant} assistant - The assistant object bolted on from the query's `included` relationships, or the DEFAULT_ASSISTANT fallback.
 *
 * @param {Object} [props={}]
 * @param {Object} [props.query={}] - Optional query filters to pass to `where()`
 *
 * @returns {{
 *   conversations: ConversationWithAssistant[],
 *   hasMore: boolean,
 *   bookmark: string|null,
 *   isLoading: boolean,
 *   fetchMore: function(): Promise<void>,
 *   fetchConversations: function(string|null, Object): Promise<void>
 * }}
 */

var useFetchConversations = function useFetchConversations() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? {} : _ref$query;

  var client = (0, _cozyClient.useClient)();

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      conversations = _useState2[0],
      setConversations = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      hasMore = _useState4[0],
      setHasMore = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      bookmark = _useState6[0],
      setBookmark = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1];

  var previousQueryRef = (0, _react.useRef)();
  var latestRequestIdRef = (0, _react.useRef)(0);
  var conversationsQuery = (0, _react.useMemo)(function () {
    return (0, _queries.buildChatConversationsQuery)();
  }, []);
  var fetchConversations = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var bookmark,
        fetchQuery,
        requestId,
        _response$data,
        response,
        combinedData,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bookmark = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            fetchQuery = _args.length > 1 ? _args[1] : undefined;
            requestId = ++latestRequestIdRef.current;
            setIsLoading(true);
            _context.prev = 4;
            _context.next = 7;
            return client.query(conversationsQuery.definition({
              bookmark: bookmark,
              query: fetchQuery
            }));

          case 7:
            response = _context.sent;

            if (!(requestId !== latestRequestIdRef.current)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return");

          case 10:
            combinedData = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.map(function (conversation) {
              var _response$included;

              return _objectSpread(_objectSpread({}, conversation), {}, {
                assistant: ((_response$included = response.included) === null || _response$included === void 0 ? void 0 : _response$included.find(function (included) {
                  var _conversation$relatio, _conversation$relatio2, _conversation$relatio3;

                  return included._id === ((_conversation$relatio = conversation.relationships) === null || _conversation$relatio === void 0 ? void 0 : (_conversation$relatio2 = _conversation$relatio.assistant) === null || _conversation$relatio2 === void 0 ? void 0 : (_conversation$relatio3 = _conversation$relatio2.data) === null || _conversation$relatio3 === void 0 ? void 0 : _conversation$relatio3._id);
                })) || _constants.DEFAULT_ASSISTANT
              });
            })) || [];
            setConversations(function (prev) {
              return !bookmark ? combinedData : [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(combinedData));
            });
            setHasMore(response.next);
            setBookmark(response.bookmark);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            log.error('Error fetching conversations:', _context.t0);

          case 19:
            _context.prev = 19;

            if (requestId === latestRequestIdRef.current) {
              setIsLoading(false);
            }

            return _context.finish(19);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16, 19, 22]]);
  })), [client, conversationsQuery]);
  (0, _react.useEffect)(function () {
    if (!(0, _isEqual.default)(previousQueryRef.current, query)) {
      setConversations([]);
      setHasMore(false);
      setBookmark(null);
      previousQueryRef.current = query;
      fetchConversations(null, query);
    }
  }, [query, fetchConversations]);
  var refreshConversations = (0, _react.useCallback)(function () {
    fetchConversations(null, previousQueryRef.current);
  }, [fetchConversations]);
  (0, _useRealtime2.default)(client, (0, _defineProperty2.default)({}, _queries.CHAT_CONVERSATIONS_DOCTYPE, {
    created: refreshConversations,
    updated: refreshConversations,
    deleted: refreshConversations
  }), [refreshConversations]);
  var fetchMore = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!hasMore) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return fetchConversations(bookmark, previousQueryRef.current);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [hasMore, bookmark, fetchConversations]);
  return {
    conversations: conversations,
    hasMore: hasMore,
    bookmark: bookmark,
    isLoading: isLoading,
    fetchMore: fetchMore,
    fetchConversations: fetchConversations
  };
};

var _default = useFetchConversations;
exports["default"] = _default;

}),
"./node_modules/cozy-search/dist/locales/index.js": (function (__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.locales = void 0;
var en = {
  assistant: {
    search: {
      placeholder: "Describe a task",
      send: "Send",
      noItem: "No results",
      notEnough: "Your query must contain at least 3 characters"
    },
    websearch: {
      label: "Web search"
    },
    dialog: {
      close: "Close"
    },
    name: "Twake Assistant",
    default_username: "Anonymous",
    sources: "%{smart_count} source |||| %{smart_count} sources",
    suggestions: {
      find_file: "Search a file",
      reimbursements: "Check my repayments",
      reorganise_files: "Reorganise my files"
    },
    actions: {
      copy: "Copy",
      copied: "Copied to clipboard",
      reload: "Regenerate response",
      edit: "Edit",
      edited: "Message saved"
    },
    sidebar: {
      create_new: "Create",
      toggle_sidebar: "Toggle sidebar",
      toggle_search: "Toggle search",
      close_sidebar: "Close sidebar",
      recent_chats: "Recent",
      conversation: {
        actions: {
          "delete": "Delete",
          rename: "Rename",
          share: "Share",
          load_more: "Load more"
        }
      }
    },
    time: {
      today: "Today",
      yesterday: "Yesterday"
    },
    default_error: "An error occurred during response generation. Please try again",
    hide: "Hide",
    show: "Show",
    search_conversation: {
      placeholder: "Search in your conversations...",
      new_chat: "New Chat",
      recent: "Recent Conversations",
      older: "Older",
      not_found_title: "No conversations found",
      not_found_desc: "Click \"New Chat\" to begin a conversation or select from your recent chats",
      close: "Close"
    },
    message: {
      welcome: "How can I help you today?",
      running: "Assistant is running..."
    },
    twake_knowledges: {
      chat: "Chat",
      drive: "Drive",
      mail: "Email",
      title_drive: "Select Drive folders",
      title_mail: "Select Mail sources",
      title_chat: "Select Chat sources",
      title_default: "Select sources",
      desc_drive: "Selected items will be used to answer your questions.",
      desc_mail: "Selected emails will be used to answer your questions.",
      desc_chat: "Selected messages will be used to answer your questions.",
      search_placeholder: "Search",
      clear_all: "Clear all",
      see_more: "See more",
      cancel: "Cancel",
      select_folders: "Select folders",
      select_emails: "Select emails",
      select_messages: "Select messages",
      my_drive: "My Drive",
      shared_with_me: "Shared with me",
      inbox: "Inbox",
      starred: "Starred",
      sent: "Sent",
      draft: "Draft",
      outbox: "Outbox",
      spam: "Spam",
      search_in: "Search in"
    }
  },
  assistant_create: {
    title: "Create Assistant",
    steps: {
      basic_info: {
        description: "Customize your assistant's identity and behavior to match your specific needs.",
        avatar: "Avatar (optional)",
        name: "Name",
        name_placeholder: "Name your assistant",
        instructions: "Instructions (optional)",
        instructions_placeholder: "What does this assistant do? How should it behave? What should it avoid doing?",
        knowledge_base: "Knowledge Base (optional)",
        knowledge_base_placeholder: "Conversations may reveal some or all of the files that have been uploaded.",
        load_file: "Load files",
        from_drive: "From Drive",
        from_mail: "From Mail"
      },
      provider_selection: {
        description: "Choose the AI model that best matches your requirements.",
        by: "by",
        openrag: {
          description: "The AI assistant integrated into Twake, letting you work on your data without ever letting it leave your Workplace"
        },
        google: {
          description: "Gemini models provided by Google"
        },
        openai: {
          description: "GPT models provided by OpenAI"
        },
        mistral_ai: {
          description: "Mistral models provided by Mistral AI"
        },
        meta: {
          description: "Llama open models, provided by Meta"
        },
        custom: {
          name: "Add custom provider",
          description: "Configure your own AI provider"
        },
        external_warning: "Your data will be processed on external servers. This mode does not provide enhanced security protections."
      },
      configuration: {
        description: "Enter provider URL, model and your API key to configure the new assistant. Your key will be stored securely.",
        custom_provider_description: "Configure your custom AI provider settings",
        model: {
          label: "Model",
          placeholder: "Enter the model name of the provider",
          unsupported: "This model is not supported yet."
        },
        url: {
          label: "Base URL",
          placeholder: "https://api.example.com/v1"
        },
        api_key: {
          label: "API Key",
          placeholder: "sk-..."
        },
        no_key: "Don't have an API key?",
        generate: "You can generate a new API key from your %{provider} account dashboard.",
        custom_provider: "custom provider",
        read_docs: "Read here"
      }
    },
    buttons: {
      cancel: "Cancel",
      next: "Next",
      create: "Create"
    },
    configure_api_key_title: "Configure a new assistant",
    configure_api_key_description: "Enter provider URL, model and your API key to configure the new assistant. Your key will be stored securely.",
    from_drive: {
      actions: {
        cancel: "Cancel",
        add: "Add"
      }
    },
    success: "Assistant created successfully"
  },
  assistant_edit: {
    title: "Edit Assistant",
    buttons: {
      cancel: "Cancel",
      next: "Next",
      edit: "Edit"
    },
    configure_api_key_title: "Configure your assistant",
    success: "Assistant updated successfully"
  },
  conversation_delete: {
    title: "Delete conversation",
    content: "Are you sure you want to delete this conversation? This action cannot be undone.",
    buttons: {
      cancel: "Cancel",
      confirm: "Delete"
    }
  },
  assistant_delete: {
    title: "Delete AI Assistant",
    content: "Are you sure you want to delete %{name}? This action cannot be undone and will permanently remove this assistant from your Twake.",
    buttons: {
      cancel: "Cancel",
      confirm: "Delete"
    }
  }
};
var fr = {
  assistant: {
    search: {
      placeholder: "D\xE9crivez une t\xE2che",
      send: "Envoyer",
      noItem: "Aucun r\xE9sultat",
      notEnough: "Votre recherche doit contenir au moins 3 caract\xE8res"
    },
    websearch: {
      label: "Recherche web"
    },
    dialog: {
      close: "Fermer"
    },
    name: "Assistant Twake",
    default_username: "Anonyme",
    sources: "%{smart_count} source |||| %{smart_count} sources",
    suggestions: {
      find_file: "Rechercher un fichier",
      reimbursements: "V\xE9rifier mes remboursements",
      reorganise_files: "R\xE9organiser mes fichiers"
    },
    actions: {
      copy: "Copier",
      copied: "Copi\xE9 dans le presse-papiers",
      reload: "R\xE9g\xE9n\xE9rer la r\xE9ponse",
      edit: "Modifier",
      edited: "Message enregistr\xE9"
    },
    sidebar: {
      create_new: "Cr\xE9er",
      toggle_sidebar: "Basculer la barre lat\xE9rale",
      toggle_search: "Basculer la recherche",
      close_sidebar: "Fermer la barre lat\xE9rale",
      recent_chats: "R\xE9cent",
      conversation: {
        actions: {
          "delete": "Supprimer",
          rename: "Renommer",
          share: "Partager",
          load_more: "Charger plus"
        }
      }
    },
    time: {
      today: "Aujourd'hui",
      yesterday: "Hier"
    },
    default_error: "Une erreur est survenue lors de la g\xE9n\xE9ration de la r\xE9ponse. Veuillez r\xE9essayer",
    hide: "Masquer",
    show: "Afficher",
    search_conversation: {
      placeholder: "Rechercher dans vos conversations...",
      new_chat: "Nouvelle conversation",
      recent: "Conversations r\xE9centes",
      older: "Plus ancien",
      not_found_title: "Aucune conversation trouv\xE9e",
      not_found_desc: "Cliquez sur \"Nouvelle conversation\" pour commencer une conversation ou s\xE9lectionnez parmi vos discussions r\xE9centes",
      close: "Fermer"
    },
    message: {
      welcome: "Comment puis-je vous aider aujourd'hui ?",
      running: "Assistant en cours..."
    },
    twake_knowledges: {
      chat: "Chat",
      drive: "Drive",
      mail: "Email",
      title_drive: "S\xE9lectionner des dossiers Drive",
      title_mail: "S\xE9lectionner des sources d'email",
      title_chat: "S\xE9lectionner des sources de discussion",
      title_default: "S\xE9lectionner des sources",
      desc_drive: "Les \xE9l\xE9ments s\xE9lectionn\xE9s seront utilis\xE9s pour r\xE9pondre \xE0 vos questions.",
      desc_mail: "Les emails s\xE9lectionn\xE9s seront utilis\xE9s pour r\xE9pondre \xE0 vos questions.",
      desc_chat: "Les messages s\xE9lectionn\xE9s seront utilis\xE9s pour r\xE9pondre \xE0 vos questions.",
      search_placeholder: "Rechercher",
      clear_all: "Tout effacer",
      see_more: "Voir plus",
      cancel: "Annuler",
      select_folders: "S\xE9lectionner des dossiers",
      select_emails: "S\xE9lectionner des emails",
      select_messages: "S\xE9lectionner des messages",
      my_drive: "Mon Drive",
      shared_with_me: "Partag\xE9 avec moi",
      inbox: "Bo\xEEte de r\xE9ception",
      starred: "Favoris",
      sent: "Envoy\xE9",
      draft: "Brouillon",
      outbox: "Bo\xEEte d'envoi",
      spam: "Spam",
      search_in: "Rechercher dans"
    }
  },
  assistant_create: {
    title: "Cr\xE9er un assistant",
    steps: {
      basic_info: {
        description: "Personnalisez l'identit\xE9 et le comportement de votre assistant pour r\xE9pondre \xE0 vos besoins sp\xE9cifiques.",
        avatar: "Avatar (optionnel)",
        name: "Nom",
        name_placeholder: "Nommez votre assistant",
        instructions: "Instructions (optionnel)",
        instructions_placeholder: "Que fait cet assistant ? Comment doit-il se comporter ? Que doit-il \xE9viter de faire ?",
        knowledge_base: "Base de connaissances (optionnel)",
        knowledge_base_placeholder: "Les conversations peuvent r\xE9v\xE9ler une partie ou l'int\xE9gralit\xE9 des fichiers qui ont \xE9t\xE9 t\xE9l\xE9vers\xE9s.",
        load_file: "Charger des fichiers",
        from_drive: "Depuis Drive",
        from_mail: "Depuis Mail"
      },
      provider_selection: {
        description: "Choisissez le mod\xE8le d'IA qui correspond le mieux \xE0 vos besoins.",
        by: "par",
        openrag: {
          description: "L'assistant IA int\xE9gr\xE9 \xE0 Twake, pour travailler sur vos donn\xE9es sans jamais les faire sortir de votre Workplace"
        },
        google: {
          description: "Mod\xE8les Gemini fournis par Google"
        },
        openai: {
          description: "Mod\xE8les GPT fournis par OpenAI"
        },
        mistral_ai: {
          description: "Mod\xE8les Mistral fournis par Mistral AI"
        },
        meta: {
          description: "Mod\xE8les ouverts Llama, fournis par Meta"
        },
        custom: {
          name: "Ajouter un fournisseur personnalis\xE9",
          description: "Configurez votre propre fournisseur d'IA"
        },
        external_warning: "Vos donn\xE9es seront trait\xE9es sur des serveurs externes. Ce mode ne fournit pas de protections de s\xE9curit\xE9 renforc\xE9es."
      },
      configuration: {
        description: "Saisissez l'URL du fournisseur, le mod\xE8le et votre cl\xE9 API pour configurer le nouvel assistant. Votre cl\xE9 sera stock\xE9e de mani\xE8re s\xE9curis\xE9e.",
        custom_provider_description: "Configurez les param\xE8tres de votre fournisseur d'IA personnalis\xE9",
        model: {
          label: "Mod\xE8le",
          placeholder: "Entrez le nom du mod\xE8le du fournisseur",
          unsupported: "Ce mod\xE8le n'est pas encore pris en charge."
        },
        url: {
          label: "URL de base",
          placeholder: "https://api.example.com/v1"
        },
        api_key: {
          label: "Cl\xE9 API",
          placeholder: "sk-..."
        },
        no_key: "Vous n'avez pas de cl\xE9 API\xA0?",
        generate: "Vous pouvez g\xE9n\xE9rer une nouvelle cl\xE9 API depuis le tableau de bord de votre compte %{provider}.",
        custom_provider: "fournisseur personnalis\xE9",
        read_docs: "Lire ici"
      }
    },
    buttons: {
      cancel: "Annuler",
      next: "Suivant",
      create: "Cr\xE9er"
    },
    configure_api_key_title: "Configurer un nouvel assistant",
    configure_api_key_description: "Saisissez l'URL du fournisseur, le mod\xE8le et votre cl\xE9 API pour configurer le nouvel assistant. Votre cl\xE9 sera stock\xE9e de mani\xE8re s\xE9curis\xE9e.",
    from_drive: {
      actions: {
        cancel: "Annuler",
        add: "Ajouter"
      }
    },
    success: "Assistant cr\xE9\xE9 avec succ\xE8s"
  },
  assistant_edit: {
    title: "Modifier l'assistant",
    buttons: {
      cancel: "Annuler",
      next: "Suivant",
      edit: "Modifier"
    },
    configure_api_key_title: "Configurer votre assistant",
    success: "Assistant modifi\xE9 avec succ\xE8s"
  },
  conversation_delete: {
    title: "Supprimer la conversation",
    content: "\xCAtes-vous s\xFBr de vouloir supprimer cette conversation\xA0? Cette action ne peut pas \xEAtre annul\xE9e.",
    buttons: {
      cancel: "Annuler",
      confirm: "Supprimer"
    }
  },
  assistant_delete: {
    title: "Supprimer l'assistant",
    content: "\xCAtes-vous s\xFBr de vouloir supprimer %{name}\xA0? Cette action ne peut pas \xEAtre annul\xE9e et supprimera d\xE9finitivement cet assistant de votre Twake.",
    buttons: {
      cancel: "Annuler",
      confirm: "Supprimer"
    }
  }
};
var ru = {
  assistant: {
    search: {
      placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
      send: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      noItem: "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432",
      notEnough: "\u0412\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
    },
    dialog: {
      close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
    },
    name: "\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 Twake",
    default_username: "\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u043E",
    sources: "%{smart_count} \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A |||| %{smart_count} \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 |||| %{smart_count} \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432",
    suggestions: {
      find_file: "\u041D\u0430\u0439\u0442\u0438 \u0444\u0430\u0439\u043B",
      reimbursements: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432\u043E\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432",
      reorganise_files: "\u0420\u0435\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043E\u0438 \u0444\u0430\u0439\u043B\u044B"
    },
    sidebar: {
      create_new: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C",
      toggle_sidebar: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
      toggle_search: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
      close_sidebar: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
      recent_chats: "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",
      conversation: {
        actions: {
          "delete": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
          rename: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
          share: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
          load_more: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"
        }
      }
    },
    time: {
      today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
      yesterday: "\u0412\u0447\u0435\u0440\u0430"
    },
    default_error: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430",
    hide: "\u0421\u043A\u0440\u044B\u0442\u044C",
    show: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",
    search_conversation: {
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u0432 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430\u0445...",
      new_chat: "\u041D\u043E\u0432\u044B\u0439 \u0447\u0430\u0442",
      recent: "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438",
      older: "\u0421\u0442\u0430\u0440\u044B\u0435",
      not_found_title: "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      not_found_desc: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \"\u041D\u043E\u0432\u044B\u0439 \u0447\u0430\u0442\", \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0443, \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u043D\u0435\u0434\u0430\u0432\u043D\u0438\u0445 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043E\u043A",
      close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
    },
    actions: {
      copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
      copied: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
      reload: "\u041F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442",
      edit: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
      edited: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E"
    },
    message: {
      welcome: "\u041A\u0430\u043A \u044F \u043C\u043E\u0433\u0443 \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C \u0441\u0435\u0433\u043E\u0434\u043D\u044F?",
      running: "\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0437\u0430\u043F\u0443\u0449\u0435\u043D..."
    },
    twake_knowledges: {
      chat: "Chat",
      drive: "Drive",
      mail: "Email",
      title_drive: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u043F\u043A\u0438 \u0414\u0438\u0441\u043A\u0430",
      title_mail: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
      title_chat: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0447\u0430\u0442\u0430",
      title_default: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
      desc_drive: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.",
      desc_mail: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.",
      desc_chat: "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.",
      search_placeholder: "\u041F\u043E\u0438\u0441\u043A",
      clear_all: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      select_folders: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0438",
      select_emails: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0430",
      select_messages: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
      my_drive: "\u041C\u043E\u0439 \u0414\u0438\u0441\u043A",
      shared_with_me: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043C\u043D\u0435",
      inbox: "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435",
      starred: "\u041F\u043E\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435",
      sent: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435",
      draft: "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438",
      outbox: "\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435",
      spam: "\u0421\u043F\u0430\u043C",
      search_in: "\u041F\u043E\u0438\u0441\u043A \u0432"
    }
  },
  assistant_create: {
    title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430",
    steps: {
      basic_info: {
        description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438.",
        avatar: "\u0410\u0432\u0430\u0442\u0430\u0440 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
        name: "\u0418\u043C\u044F",
        name_placeholder: "\u041D\u0430\u0437\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430",
        instructions: "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
        instructions_placeholder: "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u044D\u0442\u043E\u0442 \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442? \u041A\u0430\u043A \u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u0435\u0431\u044F \u0432\u0435\u0441\u0442\u0438? \u0427\u0435\u0433\u043E \u0435\u043C\u0443 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044C?",
        knowledge_base: "\u0411\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u0438\u0439 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
        knowledge_base_placeholder: "\u0412 \u0445\u043E\u0434\u0435 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044B \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043B\u0438 \u0432\u0441\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B.",
        load_file: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B",
        from_drive: "\u0418\u0437 Drive",
        from_mail: "\u0418\u0437 Mail"
      },
      provider_selection: {
        description: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u0418\u0418, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0430\u0448\u0438\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C.",
        by: "\u043E\u0442",
        openrag: {
          description: "\u0418\u0418-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442, \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432 Twake, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u0430\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0438\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438, \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044F, \u0447\u0442\u043E \u043E\u043D\u0438 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043A\u0438\u043D\u0443\u0442 \u043F\u0440\u0435\u0434\u0435\u043B\u044B \u0432\u0430\u0448\u0435\u0433\u043E \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"
        },
        google: {
          description: "\u041C\u043E\u0434\u0435\u043B\u0438 Gemini \u043E\u0442 Google"
        },
        openai: {
          description: "\u041C\u043E\u0434\u0435\u043B\u0438 GPT \u043E\u0442 OpenAI"
        },
        mistral_ai: {
          description: "\u041C\u043E\u0434\u0435\u043B\u0438 Mistral \u043E\u0442 Mistral AI"
        },
        meta: {
          description: "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 Llama \u043E\u0442 Meta"
        },
        custom: {
          name: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430",
          description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0418\u0418"
        },
        external_warning: "\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445. \u042D\u0442\u043E\u0442 \u0440\u0435\u0436\u0438\u043C \u043D\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0445 \u043C\u0435\u0440 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438."
      },
      configuration: {
        description: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0432\u0430\u0448 API\u2011\u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430. \u0412\u0430\u0448 \u043A\u043B\u044E\u0447 \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D.",
        custom_provider_description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0418\u0418",
        model: {
          label: "\u041C\u043E\u0434\u0435\u043B\u044C",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430",
          unsupported: "\u042D\u0442\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F."
        },
        url: {
          label: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 URL",
          placeholder: "https://api.example.com/v1"
        },
        api_key: {
          label: "API-\u043A\u043B\u044E\u0447",
          placeholder: "sk-..."
        },
        no_key: "\u041D\u0435\u0442 API\u2011\u043A\u043B\u044E\u0447\u0430?",
        generate: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 API\u2011\u043A\u043B\u044E\u0447 \u0432 \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 %{provider}.",
        custom_provider: "\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440",
        read_docs: "\u0427\u0438\u0442\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C"
      }
    },
    buttons: {
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      next: "\u0414\u0430\u043B\u0435\u0435",
      create: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"
    },
    configure_api_key_title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430",
    configure_api_key_description: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0432\u0430\u0448 API\u2011\u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430. \u0412\u0430\u0448 \u043A\u043B\u044E\u0447 \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D.",
    from_drive: {
      actions: {
        cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
        add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
      }
    },
    success: "\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
  },
  assistant_edit: {
    title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430",
    buttons: {
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      next: "\u0414\u0430\u043B\u0435\u0435",
      edit: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
    },
    configure_api_key_title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430",
    success: "\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D"
  },
  conversation_delete: {
    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440",
    content: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.",
    buttons: {
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      confirm: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
    }
  },
  assistant_delete: {
    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430",
    content: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C %{name}? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438 \u043E\u043D\u043E \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u0434\u0430\u043B\u0438\u0442 \u044D\u0442\u043E\u0433\u043E \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430 \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043E Twake.",
    buttons: {
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
      confirm: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
    }
  }
};
var vi = {
  assistant: {
    search: {
      placeholder: "M\xF4 t\u1EA3 m\u1ED9t nhi\u1EC7m v\u1EE5",
      send: "G\u1EEDi",
      noItem: "Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3",
      notEnough: "Truy v\u1EA5n c\u1EE7a b\u1EA1n ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 3 k\xFD t\u1EF1"
    },
    dialog: {
      close: "\u0110\xF3ng"
    },
    name: "Tr\u1EE3 l\xFD Twake",
    default_username: "\u1EA8n danh",
    sources: "%{smart_count} ngu\u1ED3n |||| %{smart_count} ngu\u1ED3n",
    suggestions: {
      find_file: "T\xECm m\u1ED9t t\u1EC7p",
      reimbursements: "Ki\u1EC3m tra c\xE1c kho\u1EA3n ho\xE0n tr\u1EA3 c\u1EE7a t\xF4i",
      reorganise_files: "S\u1EAFp x\u1EBFp l\u1EA1i c\xE1c t\u1EC7p c\u1EE7a t\xF4i"
    },
    actions: {
      copy: "Sao ch\xE9p",
      copied: "\u0110\xE3 sao ch\xE9p v\xE0o b\u1ED9 nh\u1EDB t\u1EA1m",
      reload: "T\u1EA1o l\u1EA1i ph\u1EA3n h\u1ED3i",
      edit: "Ch\u1EC9nh s\u1EEDa",
      edited: "\u0110\xE3 l\u01B0u tin nh\u1EAFn"
    },
    sidebar: {
      create_new: "T\u1EA1o m\u1EDBi",
      toggle_sidebar: "B\u1EADt/t\u1EAFt thanh b\xEAn",
      toggle_search: "B\u1EADt/t\u1EAFt t\xECm ki\u1EBFm",
      close_sidebar: "\u0110\xF3ng thanh b\xEAn",
      recent_chats: "G\u1EA7n \u0111\xE2y",
      conversation: {
        actions: {
          "delete": "X\xF3a",
          rename: "\u0110\u1ED5i t\xEAn",
          share: "Chia s\u1EBB",
          load_more: "T\u1EA3i th\xEAm"
        }
      }
    },
    time: {
      today: "H\xF4m nay",
      yesterday: "H\xF4m qua"
    },
    default_error: "\u0110\xE3 x\u1EA3y ra l\u1ED7i, vui l\xF2ng th\u1EED l\u1EA1i",
    hide: "\u1EA8n",
    show: "Hi\u1EC7n",
    message: {
      welcome: "T\xF4i c\xF3 th\u1EC3 gi\xFAp g\xEC cho b\u1EA1n h\xF4m nay?",
      running: "Tr\u1EE3 l\xFD \u0111ang ch\u1EA1y..."
    },
    search_conversation: {
      placeholder: "T\xECm ki\u1EBFm trong c\xE1c cu\u1ED9c tr\xF2 chuy\u1EC7n...",
      new_chat: "Cu\u1ED9c tr\xF2 chuy\u1EC7n m\u1EDBi",
      recent: "Cu\u1ED9c tr\xF2 chuy\u1EC7n g\u1EA7n \u0111\xE2y",
      older: "C\u0169 h\u01A1n",
      not_found_title: "Kh\xF4ng t\xECm th\u1EA5y cu\u1ED9c tr\xF2 chuy\u1EC7n n\xE0o",
      not_found_desc: "Nh\u1EA5p v\xE0o \"Cu\u1ED9c tr\xF2 chuy\u1EC7n m\u1EDBi\" \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u m\u1ED9t cu\u1ED9c tr\xF2 chuy\u1EC7n ho\u1EB7c ch\u1ECDn t\u1EEB c\xE1c cu\u1ED9c tr\xF2 chuy\u1EC7n g\u1EA7n \u0111\xE2y c\u1EE7a b\u1EA1n",
      close: "\u0110\xF3ng"
    },
    twake_knowledges: {
      chat: "Chat",
      drive: "Drive",
      mail: "Email",
      title_drive: "Ch\u1ECDn th\u01B0 m\u1EE5c Drive",
      title_mail: "Ch\u1ECDn ngu\u1ED3n Email",
      title_chat: "Ch\u1ECDn ngu\u1ED3n Tr\xF2 chuy\u1EC7n",
      title_default: "Ch\u1ECDn ngu\u1ED3n",
      desc_drive: "C\xE1c m\u1EE5c \u0111\xE3 ch\u1ECDn s\u1EBD \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng \u0111\u1EC3 tr\u1EA3 l\u1EDDi c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n.",
      desc_mail: "C\xE1c email \u0111\xE3 ch\u1ECDn s\u1EBD \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng \u0111\u1EC3 tr\u1EA3 l\u1EDDi c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n.",
      desc_chat: "C\xE1c tin nh\u1EAFn \u0111\xE3 ch\u1ECDn s\u1EBD \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng \u0111\u1EC3 tr\u1EA3 l\u1EDDi c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n.",
      search_placeholder: "T\xECm ki\u1EBFm",
      clear_all: "X\xF3a t\u1EA5t c\u1EA3",
      cancel: "H\u1EE7y",
      select_folders: "Ch\u1ECDn th\u01B0 m\u1EE5c",
      select_emails: "Ch\u1ECDn email",
      select_messages: "Ch\u1ECDn tin nh\u1EAFn",
      my_drive: "Drive c\u1EE7a t\xF4i",
      shared_with_me: "\u0110\u01B0\u1EE3c chia s\u1EBB v\u1EDBi t\xF4i",
      inbox: "H\u1ED9p th\u01B0 \u0111\u1EBFn",
      starred: "C\xF3 g\u1EAFn sao",
      sent: "\u0110\xE3 g\u1EEDi",
      draft: "Nh\xE1p",
      outbox: "H\u1ED9p th\u01B0 \u0111i",
      spam: "Th\u01B0 r\xE1c",
      search_in: "T\xECm ki\u1EBFm trong"
    }
  },
  assistant_create: {
    title: "T\u1EA1o tr\u1EE3 l\xFD",
    steps: {
      basic_info: {
        description: "T\xF9y ch\u1EC9nh danh t\xEDnh v\xE0 h\xE0nh vi c\u1EE7a tr\u1EE3 l\xFD \u0111\u1EC3 ph\xF9 h\u1EE3p v\u1EDBi nhu c\u1EA7u c\u1EE7a b\u1EA1n.",
        avatar: "\u1EA2nh \u0111\u1EA1i di\u1EC7n (t\xF9y ch\u1ECDn)",
        name: "T\xEAn",
        name_placeholder: "\u0110\u1EB7t t\xEAn cho tr\u1EE3 l\xFD c\u1EE7a b\u1EA1n",
        instructions: "H\u01B0\u1EDBng d\u1EABn (t\xF9y ch\u1ECDn)",
        instructions_placeholder: "Tr\u1EE3 l\xFD n\xE0y l\xE0m g\xEC? N\xEAn h\xE0nh x\u1EED nh\u01B0 th\u1EBF n\xE0o? N\xEAn tr\xE1nh \u0111i\u1EC1u g\xEC?",
        knowledge_base: "C\u01A1 s\u1EDF tri th\u1EE9c (t\xF9y ch\u1ECDn)",
        knowledge_base_placeholder: "C\xE1c cu\u1ED9c tr\xF2 chuy\u1EC7n c\xF3 th\u1EC3 l\xE0m l\u1ED9 m\u1ED9t ph\u1EA7n ho\u1EB7c to\xE0n b\u1ED9 c\xE1c t\u1EC7p \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn.",
        load_file: "T\u1EA3i t\u1EC7p",
        from_drive: "T\u1EEB Drive",
        from_mail: "T\u1EEB Mail"
      },
      provider_selection: {
        description: "Ch\u1ECDn m\xF4 h\xECnh AI ph\xF9 h\u1EE3p nh\u1EA5t v\u1EDBi y\xEAu c\u1EA7u c\u1EE7a b\u1EA1n.",
        by: "b\u1EDFi",
        openrag: {
          description: "Tr\u1EE3 l\xFD AI \u0111\u01B0\u1EE3c t\xEDch h\u1EE3p v\xE0o Twake, cho ph\xE9p b\u1EA1n x\u1EED l\xFD d\u1EEF li\u1EC7u c\u1EE7a m\xECnh m\xE0 kh\xF4ng bao gi\u1EDD ph\u1EA3i \u0111\u01B0a d\u1EEF li\u1EC7u ra kh\u1ECFi Kh\xF4ng gian l\xE0m vi\u1EC7c c\u1EE7a b\u1EA1n"
        },
        google: {
          description: "C\xE1c m\xF4 h\xECnh Gemini do Google cung c\u1EA5p"
        },
        openai: {
          description: "C\xE1c m\xF4 h\xECnh GPT do OpenAI cung c\u1EA5p"
        },
        mistral_ai: {
          description: "C\xE1c m\xF4 h\xECnh Mistral do Mistral AI cung c\u1EA5p"
        },
        meta: {
          description: "C\xE1c m\xF4 h\xECnh m\u1EDF Llama do Meta cung c\u1EA5p"
        },
        custom: {
          name: "Th\xEAm nh\xE0 cung c\u1EA5p t\xF9y ch\u1EC9nh",
          description: "C\u1EA5u h\xECnh nh\xE0 cung c\u1EA5p AI c\u1EE7a ri\xEAng b\u1EA1n"
        },
        external_warning: "D\u1EEF li\u1EC7u c\u1EE7a b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c x\u1EED l\xFD tr\xEAn m\xE1y ch\u1EE7 b\xEAn ngo\xE0i. Ch\u1EBF \u0111\u1ED9 n\xE0y kh\xF4ng cung c\u1EA5p c\xE1c bi\u1EC7n ph\xE1p b\u1EA3o v\u1EC7 b\u1EA3o m\u1EADt n\xE2ng cao."
      },
      configuration: {
        description: "Nh\u1EADp URL nh\xE0 cung c\u1EA5p, m\xF4 h\xECnh v\xE0 kh\xF3a API c\u1EE7a b\u1EA1n \u0111\u1EC3 \u0111\u1ECBnh c\u1EA5u h\xECnh tr\u1EE3 l\xFD m\u1EDBi. Kh\xF3a c\u1EE7a b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF an to\xE0n.",
        custom_provider_description: "C\u1EA5u h\xECnh c\xE0i \u0111\u1EB7t nh\xE0 cung c\u1EA5p AI t\xF9y ch\u1EC9nh",
        model: {
          label: "M\xF4 h\xECnh",
          placeholder: "Nh\u1EADp t\xEAn m\xF4 h\xECnh c\u1EE7a nh\xE0 cung c\u1EA5p",
          unsupported: "M\xF4 h\xECnh n\xE0y ch\u01B0a \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3."
        },
        url: {
          label: "URL",
          placeholder: "https://api.example.com/v1"
        },
        api_key: {
          label: "Kh\xF3a API",
          placeholder: "sk-..."
        },
        no_key: "B\u1EA1n kh\xF4ng c\xF3 kh\xF3a API?",
        generate: "B\u1EA1n c\xF3 th\u1EC3 t\u1EA1o kh\xF3a API m\u1EDBi t\u1EEB b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n t\xE0i kho\u1EA3n %{provider} c\u1EE7a m\xECnh.",
        custom_provider: "nh\xE0 cung c\u1EA5p t\xF9y ch\u1EC9nh",
        read_docs: "\u0110\u1ECDc t\u1EA1i \u0111\xE2y"
      }
    },
    buttons: {
      cancel: "H\u1EE7y",
      next: "Ti\u1EBFp",
      create: "T\u1EA1o"
    },
    configure_api_key_title: "C\u1EA5u h\xECnh tr\u1EE3 l\xFD m\u1EDBi",
    configure_api_key_description: "Nh\u1EADp URL nh\xE0 cung c\u1EA5p, m\xF4 h\xECnh v\xE0 kh\xF3a API c\u1EE7a b\u1EA1n \u0111\u1EC3 \u0111\u1ECBnh c\u1EA5u h\xECnh tr\u1EE3 l\xFD m\u1EDBi. Kh\xF3a c\u1EE7a b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF an to\xE0n.",
    from_drive: {
      actions: {
        cancel: "H\u1EE7y",
        add: "Th\xEAm"
      }
    },
    success: "T\u1EA1o tr\u1EE3 l\xFD th\xE0nh c\xF4ng"
  },
  assistant_edit: {
    title: "Ch\u1EC9nh s\u1EEDa tr\u1EE3 l\xFD",
    buttons: {
      cancel: "H\u1EE7y",
      next: "Ti\u1EBFp",
      edit: "L\u01B0u"
    },
    configure_api_key_title: "C\u1EA5u h\xECnh tr\u1EE3 l\xFD c\u1EE7a b\u1EA1n",
    success: "Ch\u1EC9nh s\u1EEDa tr\u1EE3 l\xFD th\xE0nh c\xF4ng"
  },
  conversation_delete: {
    title: "X\xF3a cu\u1ED9c tr\xF2 chuy\u1EC7n",
    content: "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a cu\u1ED9c tr\xF2 chuy\u1EC7n n\xE0y? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.",
    buttons: {
      cancel: "H\u1EE7y",
      confirm: "X\xF3a"
    }
  },
  assistant_delete: {
    title: "X\xF3a tr\u1EE3 l\xFD",
    content: "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a %{name}? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 s\u1EBD x\xF3a v\u0129nh vi\u1EC5n tr\u1EE3 l\xFD n\xE0y kh\u1ECFi Twake c\u1EE7a b\u1EA1n.",
    buttons: {
      cancel: "H\u1EE7y",
      confirm: "X\xF3a"
    }
  }
};
var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
exports.locales = locales;

}),

});
//# sourceMappingURL=cozy.ed4f341b19b29537.hot-update.js.map