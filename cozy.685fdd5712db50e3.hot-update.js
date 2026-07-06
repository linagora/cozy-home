"use strict";
self["webpackHotUpdatecozy_home"]("cozy", {
"./node_modules/cozy-search/dist/components/helpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  formatConversationDate: () => (formatConversationDate),
  getDescriptionOfConversation: () => (getDescriptionOfConversation),
  getNameOfConversation: () => (getNameOfConversation),
  makeConversationId: () => (makeConversationId),
  sanitizeChatContent: () => (sanitizeChatContent)
});
const makeConversationId = () => `${Date.now()}-${Math.floor(Math.random() * 90000) + 10000}`;
/**
 * Sanitize chat content by removing special sources tags like
 * [REF]...[/REF] or [doc_X] that are not currently handled.
 *
 * @param {string} content - content to sanitize
 * @returns {string} sanitized content
 */
const sanitizeChatContent = content => {
    if (!content) {
        return '';
    }
    return (content
        // Remove REFdoc_1/REF
        .replace(/\s?\[REF\][\s\S]*?\[\/REF\]/g, '')
        // Remove [REF]doc_1[/REF]
        .replace(/\s?REF[\s\S]*?\/REF/g, '')
        // remove « [doc_1] »
        .replace(/\s?\[doc_\d+\]/g, '')
        // remove « [Source 1] », « [Source 4, 6] » or « [Source 4, Source 6] »
        .replace(/\s?\[Source\s+\d+(?:\s*,\s*(?:Source\s+)?\d+)*\]/g, '')
        // remove « [Sources: 1, 3, 6] » citations, with optional empty link parens
        .replace(/\s?\[Sources?:\s*\d+(?:\s*,\s*\d+)*\s*\](?:\([^)]*\))?/g, ''));
};
const formatConversationDate = (dateString, t, lang) => {
    if (!dateString)
        return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime()))
        return '';
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isToday = date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();
    const isYesterday = date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear();
    if (isToday || isYesterday) {
        const timeStr = date.toLocaleTimeString(lang, {
            hour: 'numeric',
            minute: '2-digit'
        });
        return `${isToday ? t('assistant.time.today') : t('assistant.time.yesterday')}, ${timeStr}`;
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
const getNameOfConversation = conversation => {
    var _a, _b, _c;
    return (conversation.name ||
        ((_c = (_a = conversation.messages) === null || _a === void 0 ? void 0 : _a[((_b = conversation.messages) === null || _b === void 0 ? void 0 : _b.length) - 2]) === null || _c === void 0 ? void 0 : _c.content));
};
/**
 * Get description of the conversation
 * Since we don't have rule for description of the conversation
 * So temporary we get the last answer from assistant as description of the conversation
 */
const getDescriptionOfConversation = conversation => {
    var _a, _b;
    const content = (_b = (_a = conversation.messages) === null || _a === void 0 ? void 0 : _a[conversation.messages.length - 1]) === null || _b === void 0 ? void 0 : _b.content;
    return content && sanitizeChatContent(content);
};


}),

});
//# sourceMappingURL=cozy.685fdd5712db50e3.hot-update.js.map