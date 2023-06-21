const React = craftercms.libs.React;
const { useRef } = craftercms.libs.React;
const React__default = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
const { useDispatch } = craftercms.libs.ReactRedux;
const { createAction } = craftercms.libs.ReduxToolkit;
const { createCustomDocumentEventListener } = craftercms.utils.dom;
const Button = craftercms.libs.MaterialUI.Button && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Button, 'default') ? craftercms.libs.MaterialUI.Button['default'] : craftercms.libs.MaterialUI.Button;
const TextField = craftercms.libs.MaterialUI.TextField && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.TextField, 'default') ? craftercms.libs.MaterialUI.TextField['default'] : craftercms.libs.MaterialUI.TextField;
const CssBaseline = craftercms.libs.MaterialUI.CssBaseline && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.CssBaseline, 'default') ? craftercms.libs.MaterialUI.CssBaseline['default'] : craftercms.libs.MaterialUI.CssBaseline;
const Container = craftercms.libs.MaterialUI.Container && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Container, 'default') ? craftercms.libs.MaterialUI.Container['default'] : craftercms.libs.MaterialUI.Container;
const Box = craftercms.libs.MaterialUI.Box && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Box, 'default') ? craftercms.libs.MaterialUI.Box['default'] : craftercms.libs.MaterialUI.Box;
const Grid = craftercms.libs.MaterialUI.Grid && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Grid, 'default') ? craftercms.libs.MaterialUI.Grid['default'] : craftercms.libs.MaterialUI.Grid;
const Typography = craftercms.libs.MaterialUI.Typography && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Typography, 'default') ? craftercms.libs.MaterialUI.Typography['default'] : craftercms.libs.MaterialUI.Typography;
const { get, post } = craftercms.utils.ajax;
const { capitalize, unstable_useId } = craftercms.libs.MaterialUI;
const { styled, useThemeProps } = craftercms.libs.MaterialUI;
const CircularProgress = craftercms.libs.MaterialUI.CircularProgress && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.CircularProgress, 'default') ? craftercms.libs.MaterialUI.CircularProgress['default'] : craftercms.libs.MaterialUI.CircularProgress;
const generateUtilityClass = craftercms.libs.MaterialUI.generateUtilityClass && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.generateUtilityClass, 'default') ? craftercms.libs.MaterialUI.generateUtilityClass['default'] : craftercms.libs.MaterialUI.generateUtilityClass;
const generateUtilityClasses = craftercms.libs.MaterialUI.generateUtilityClasses && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.generateUtilityClasses, 'default') ? craftercms.libs.MaterialUI.generateUtilityClasses['default'] : craftercms.libs.MaterialUI.generateUtilityClasses;
const ToolsPanelListItemButton = craftercms.components.ToolsPanelListItemButton && Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton, 'default') ? craftercms.components.ToolsPanelListItemButton['default'] : craftercms.components.ToolsPanelListItemButton;
const Tooltip = craftercms.libs.MaterialUI.Tooltip && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Tooltip, 'default') ? craftercms.libs.MaterialUI.Tooltip['default'] : craftercms.libs.MaterialUI.Tooltip;
const IconButton = craftercms.libs.MaterialUI.IconButton && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.IconButton, 'default') ? craftercms.libs.MaterialUI.IconButton['default'] : craftercms.libs.MaterialUI.IconButton;
const SystemIcon = craftercms.components.SystemIcon && Object.prototype.hasOwnProperty.call(craftercms.components.SystemIcon, 'default') ? craftercms.components.SystemIcon['default'] : craftercms.components.SystemIcon;
const { Button: Button$1, buttonClasses } = craftercms.libs.MaterialUI;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// endregion
// region Path Selection Dialog
const showPathSelectionDialog = /*#__PURE__*/ createAction('SHOW_PATH_SELECTION_DIALOG');
const closePathSelectionDialog = /*#__PURE__*/ createAction('CLOSE_PATH_SELECTION_DIALOG');
const pathSelectionDialogClosed = /*#__PURE__*/ createAction('PATH_SELECTION_CLOSED');
// endregion
// region Widget Dialog
const showWidgetDialog = /*#__PURE__*/ createAction('SHOW_WIDGET_DIALOG');
// endregion

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const showSystemNotification = /*#__PURE__*/ createAction('SHOW_SYSTEM_NOTIFICATION');

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// region Batch Actions
const batchActions = /*#__PURE__*/ createAction('BATCH_ACTIONS');
// endregion
// region dispatch DOM Event
const dispatchDOMEvent = /*#__PURE__*/ createAction('DISPATCH_DOM_EVENT');
// endregion

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  Object.keys(slots).forEach(
  // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        const utilityClass = getUtilityClass(key);
        if (utilityClass !== '') {
          acc.push(utilityClass);
        }
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
      }
      return acc;
    }, []).join(' ');
  });
  return output;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=React__default,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

function getLoadingButtonUtilityClass(slot) {
  return generateUtilityClass('MuiLoadingButton', slot);
}
const loadingButtonClasses = generateUtilityClasses('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
var loadingButtonClasses$1 = loadingButtonClasses;

const _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];
const useUtilityClasses = ownerState => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${capitalize(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${capitalize(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${capitalize(loadingPosition)}`]
  };
  const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

// TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core
const rootShouldForwardProp = prop => prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';
const LoadingButtonRoot = styled(Button, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${loadingButtonClasses$1.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${loadingButtonClasses$1.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => _extends({
  [`& .${loadingButtonClasses$1.startIconLoadingStart}, & .${loadingButtonClasses$1.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${loadingButtonClasses$1.loading}`]: {
    color: 'transparent'
  }
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  [`& .${loadingButtonClasses$1.startIconLoadingStart}, & .${loadingButtonClasses$1.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  [`& .${loadingButtonClasses$1.startIconLoadingStart}, & .${loadingButtonClasses$1.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
const LoadingButtonLoadingIndicator = styled('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${capitalize(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, ownerState.loadingPosition === 'start' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  left: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'start' && ownerState.variant === 'text' && {
  left: 6
}, ownerState.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === 'end' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  right: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'end' && ownerState.variant === 'text' && {
  right: 6
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  position: 'relative',
  left: -10
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  position: 'relative',
  right: -10
}));
const LoadingButton = /*#__PURE__*/React.forwardRef(function LoadingButton(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiLoadingButton'
  });
  const {
      children,
      disabled = false,
      id: idProp,
      loading = false,
      loadingIndicator: loadingIndicatorProp,
      loadingPosition = 'center',
      variant = 'text'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const id = unstable_useId(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/jsxRuntime.exports.jsx(CircularProgress, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = _extends({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? /*#__PURE__*/jsxRuntime.exports.jsx(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState: ownerState,
    children: loadingIndicator
  }) : null;
  return /*#__PURE__*/jsxRuntime.exports.jsxs(LoadingButtonRoot, _extends({
    disabled: disabled || loading,
    id: id,
    ref: ref
  }, other, {
    variant: variant,
    classes: classes,
    ownerState: ownerState,
    children: [ownerState.loadingPosition === 'end' ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === 'end' ? loadingButtonLoadingIndicator : children]
  }));
});
var LoadingButton$1 = LoadingButton;

/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var HttpUtils = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            get(url).subscribe({
                next: function (response) {
                    resolve(response);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    },
    post: function (url, body, headers) {
        return new Promise(function (resolve, reject) {
            post(url, body, headers).subscribe({
                next: function (response) {
                    resolve(response);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    }
};

/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var API_WRITE_CONTENT = '/studio/api/1/services/api/1/content/write-content.json';
var StudioAPI = {
    writeContent: function (siteId, path, fileName, contentType, body) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!siteId || !path || !fileName || !contentType || !body) {
                            return [2 /*return*/, false];
                        }
                        url = "".concat(API_WRITE_CONTENT, "?site=").concat(siteId, "&phase=onSave&path=").concat(path, "&fileName=").concat(fileName, "&contentType=").concat(contentType, "&unlock=true");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, HttpUtils.post(url, body)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res.status === 200];
                    case 3:
                        e_1 = _a.sent();
                        console.log('Error while uploading content', e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};

/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function App() {
    var _this = this;
    var _a = React__default.useState('/site'), path = _a[0], setPath = _a[1];
    var _b = React__default.useState(''), content = _b[0], setContent = _b[1];
    var _c = React__default.useState(false), processing = _c[0], setProcessing = _c[1];
    var dispatch = useDispatch();
    var inputRef = useRef(null);
    var siteId = craftercms.getStore().getState().sites.active;
    var handleSelectPath = function () {
        var rootPath = '/site';
        var callbackId = 'pathSelectionDialogCallback';
        var callbackAccept = 'accept';
        dispatch(showPathSelectionDialog({
            rootPath: rootPath ,
            initialPath: path,
            showCreateFolderOption: false,
            allowSwitchingRootPath: !rootPath,
            stripXmlIndex: true,
            onClosed: batchActions([dispatchDOMEvent({ id: callbackId, action: 'close' }), pathSelectionDialogClosed()]),
            onOk: batchActions([dispatchDOMEvent({ id: callbackId, action: callbackAccept }), closePathSelectionDialog()])
        }));
        createCustomDocumentEventListener(callbackId, function (detail) {
            if (detail.action === callbackAccept) {
                var path_1 = detail.path;
                setPath(path_1);
            }
        });
    };
    var onFileChange = function (event) {
        var file = event.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.readAsText(event.target.files[0], 'UTF-8');
        reader.onload = function (e) {
            setContent(e.target.result);
        };
        reader.onerror = function (e) {
            dispatch(showSystemNotification({
                message: "Error while reading file. Please try again.",
                options: { variant: 'error' }
            }));
        };
    };
    var handleUploadXMLFile = function () { return __awaiter(_this, void 0, void 0, function () {
        var parser, xmlDoc, contentTypeNode, fileNameNode, contentType, fileName, contentFullPath, res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!content) {
                        return [2 /*return*/];
                    }
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(content, 'text/xml');
                    contentTypeNode = xmlDoc.evaluate('/*/content-type', xmlDoc, null, XPathResult.ANY_TYPE, null).iterateNext();
                    fileNameNode = xmlDoc.evaluate('/*/file-name', xmlDoc, null, XPathResult.ANY_TYPE, null).iterateNext();
                    if (!contentTypeNode || !fileNameNode) {
                        dispatch(showSystemNotification({
                            message: 'Invalid XML document. Cannot upload content'
                        }));
                        return [2 /*return*/];
                    }
                    contentType = contentTypeNode.childNodes[0].nodeValue;
                    fileName = fileNameNode.childNodes[0].nodeValue;
                    contentFullPath = "".concat(path, "/").concat(fileName);
                    setProcessing(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, StudioAPI.writeContent(siteId, contentFullPath, fileName, contentType, content)];
                case 2:
                    res = _a.sent();
                    if (res) {
                        dispatch(showSystemNotification({
                            message: 'Content uploaded to the destination.'
                        }));
                        setContent('');
                        inputRef.current.value = null;
                    }
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    dispatch(showSystemNotification({
                        message: "Error while uploading content: ".concat(e_1.message)
                    }));
                    return [3 /*break*/, 5];
                case 4:
                    setProcessing(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(CssBaseline, null),
        React__default.createElement(Container, { maxWidth: "sm", sx: {
                padding: 10
            } },
            React__default.createElement(Box, { sx: { flexGrow: 1 } },
                React__default.createElement(Grid, { container: true, spacing: 4 },
                    React__default.createElement(Grid, { xs: 12, sx: { display: 'inline-flex', marginTop: '30px', alignItems: 'center' } },
                        React__default.createElement(Grid, { xs: 8 },
                            React__default.createElement(TextField, { id: "path-read-only-input", label: "Path to upload", value: path, InputProps: {
                                    readOnly: true
                                }, fullWidth: true, size: "small" })),
                        React__default.createElement(Grid, { xs: 4, sx: { textAlign: 'center' } },
                            React__default.createElement(Button, { variant: "contained", onClick: handleSelectPath, disabled: processing, sx: {
                                    minWidth: '130px'
                                } }, "Select Path"))),
                    React__default.createElement(CssBaseline, null),
                    React__default.createElement(Grid, { xs: 12, sx: { display: 'inline-flex', marginTop: '30px', alignItems: 'center' } },
                        React__default.createElement(Grid, { xs: 8 },
                            React__default.createElement("input", { ref: inputRef, type: "file", accept: ".xml", onChange: onFileChange, onClick: function () { inputRef.current.value = null; } })),
                        React__default.createElement(Grid, { xs: 4, sx: { textAlign: 'center' } },
                            React__default.createElement(LoadingButton$1, { variant: "contained", onClick: handleUploadXMLFile, loading: processing, disabled: !content, loadingPosition: "start", sx: {
                                    minWidth: '130px'
                                } }, "Upload Content"))),
                    React__default.createElement(Box, { component: "div", sx: {
                            marginTop: 1,
                            width: '100%',
                            minHeight: '50vh',
                            height: '50vh',
                            overflow: "hidden",
                            overflowY: "scroll",
                            wordWrap: "break-word",
                            bgcolor: function (theme) {
                                return theme.palette.mode === 'dark' ? '#121212' : 'grey.100';
                            },
                            color: function (theme) {
                                return theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800';
                            },
                            border: '1px solid',
                            borderColor: function (theme) {
                                return theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300';
                            },
                            borderRadius: 2
                        } },
                        React__default.createElement(Typography, { variant: "body2", gutterBottom: true }, content)))))));
}

/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function OpenContentUploadPanelButton(props) {
    var dispatch = useDispatch();
    var _a = props.title, title = _a === void 0 ? 'Content Upload' : _a, _b = props.icon, icon = _b === void 0 ? { id: '@mui/icons-material/FileUploadOutlined' } : _b;
    return (React.createElement(ToolsPanelListItemButton, { icon: icon, title: title, onClick: function () {
            return dispatch(showWidgetDialog({
                title: title,
                extraProps: props,
                widget: { id: 'org.craftercms.plugin.contentupload.dialog' }
            }));
        } }));
}

/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function OpenContentUploadToolbarButton(props) {
    var _a;
    var dispatch = useDispatch();
    var _b = props.title, title = _b === void 0 ? 'Content Upload' : _b, _c = props.tooltip, tooltip = _c === void 0 ? title : _c, _d = props.useIcon, useIcon = _d === void 0 ? true : _d, _e = props.useIconWithText, useIconWithText = _e === void 0 ? false : _e, _f = props.buttonSize, buttonSize = _f === void 0 ? 'small' : _f, _g = props.dialogTitle, dialogTitle = _g === void 0 ? title : _g, _h = props.icon, icon = _h === void 0 ? { id: '@mui/icons-material/FileUploadOutlined' } : _h;
    // Protection against confusion of using the two props combined (i.e. useIcon, useIconWithText)...
    if (useIconWithText) {
        useIcon = false;
    }
    var handleClick = function () {
        return dispatch(showWidgetDialog({
            title: dialogTitle,
            extraProps: props,
            widget: { id: 'org.craftercms.plugin.contentupload.dialog' }
        }));
    };
    var applyTooltip = function (children) {
        return useIcon || props.tooltip ? React.createElement(Tooltip, { title: tooltip }, children) : children;
    };
    return applyTooltip(useIcon ? (React.createElement(IconButton, { size: buttonSize, onClick: handleClick },
        React.createElement(SystemIcon, { icon: icon }))) : (React.createElement(Button$1, { size: buttonSize, onClick: handleClick, startIcon: useIconWithText ? React.createElement(SystemIcon, { icon: icon }) : void 0, sx: (_a = {}, _a[".".concat(buttonClasses.startIcon)] = { mr: 0.5 }, _a) }, title)));
}

/*
 * Copyright (C) 2007-2023 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var plugin = {
    locales: undefined,
    scripts: undefined,
    stylesheets: undefined,
    id: 'org.craftercms.plugin.contentupload',
    widgets: {
        'org.craftercms.plugin.contentupload.dialog': App,
        'org.craftercms.plugin.contentupload.openContentUploadPanelButton': OpenContentUploadPanelButton,
        'org.craftercms.plugin.contentupload.openContentUploadToolbarButton': OpenContentUploadToolbarButton
    }
};

export { App as Dialog, OpenContentUploadPanelButton, OpenContentUploadToolbarButton, plugin as default };
