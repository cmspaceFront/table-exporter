System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/table-exporter-v2/src/setting/setting.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */



class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.updateAllAvailableFields = () => {
            const useDataSources = this.props.useDataSources || [];
            let fieldsMap = {};
            useDataSources.forEach(ds => {
                var _a;
                const realDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(ds.dataSourceId);
                const schema = (_a = realDs === null || realDs === void 0 ? void 0 : realDs.getSchema) === null || _a === void 0 ? void 0 : _a.call(realDs);
                const fields = (schema === null || schema === void 0 ? void 0 : schema.fields)
                    ? Object.values(schema.fields).map((f) => ({
                        name: f.jimuName || f.name,
                        alias: f.alias || f.label || f.jimuName || f.name,
                    }))
                    : [];
                fieldsMap[ds.dataSourceId] = fields;
            });
            this.setState({ fieldsMap });
        };
        this.updateFilterFields = (dataSourceId, key, value) => {
            const filterFields = Object.assign({}, this.props.config.filterFields);
            if (!filterFields[dataSourceId])
                filterFields[dataSourceId] = {};
            filterFields[dataSourceId][key] = value;
            this.props.onSettingChange({
                id: this.props.id,
                config: Object.assign(Object.assign({}, this.props.config), { filterFields })
            });
        };
        this.updateConfigField = (field, value) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: Object.assign(Object.assign({}, this.props.config), { [field]: value })
            });
        };
        this.state = { fieldsMap: {} };
    }
    componentDidMount() {
        this.updateAllAvailableFields();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.useDataSources !== this.props.useDataSources) {
            this.updateAllAvailableFields();
        }
    }
    render() {
        const { config, useDataSources } = this.props;
        const { fieldsMap } = this.state;
        const filterFields = config.filterFields || {};
        // Для селекторов BIG/SMALL table
        const dsOptions = (useDataSources || []).map(ds => ({
            value: ds.dataSourceId,
            label: ds.label || ds.dataSourceId
        }));
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 14, color: "#fff", background: "#212126", padding: 20 } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 22 } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: useDataSources, isMultiple: true, onChange: dsArr => {
                        this.props.onSettingChange({ id: this.props.id, useDataSources: dsArr });
                        setTimeout(this.updateAllAvailableFields, 200);
                    }, widgetId: this.props.id })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { background: "#252542", borderRadius: 9, padding: 12, marginBottom: 18 } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 10, fontWeight: 500 } }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { style: { marginBottom: 4 } }, "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A (BIG TABLE)"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { style: { width: "100%", marginBottom: 8 }, value: config.bigTableId || "", onChange: e => this.updateConfigField("bigTableId", e.target.value) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "" }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"),
                    dsOptions.map(ds => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: ds.value, value: ds.value }, ds.label))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { style: { width: "100%", marginBottom: 16 }, value: config.bigTableLabel || "", placeholder: "\u041B\u0435\u0439\u0431\u043B \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430", onChange: e => this.updateConfigField("bigTableLabel", e.target.value) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { style: { marginBottom: 4 } }, "\u041C\u0430\u043B\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A (SMALL TABLE)"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { style: { width: "100%", marginBottom: 8 }, value: config.smallTableId || "", onChange: e => this.updateConfigField("smallTableId", e.target.value) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "" }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"),
                    dsOptions.map(ds => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: ds.value, value: ds.value }, ds.label))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { style: { width: "100%" }, value: config.smallTableLabel || "", placeholder: "\u041B\u0435\u0439\u0431\u043B \u043C\u0430\u043B\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430", onChange: e => this.updateConfigField("smallTableLabel", e.target.value) })),
            (useDataSources || []).map(ds => {
                const dsFields = fieldsMap[ds.dataSourceId] || [];
                const dsFilters = filterFields[ds.dataSourceId] || {};
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: ds.dataSourceId, style: { marginBottom: 18, padding: 12, background: "#232337", borderRadius: 9 } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 600, marginBottom: 7 } }, ds.label || ds.dataSourceId),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 6 } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { style: { width: "100%", marginTop: 5 }, value: dsFilters.filterField || "", onChange: e => this.updateFilterFields(ds.dataSourceId, "filterField", e.target.value), disabled: !dsFields.length }, dsFields.map((f) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: f.name, value: f.name }, f.alias || f.name))))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "\u0412\u0442\u043E\u0440\u043E\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { style: { width: "100%", marginTop: 5 }, value: dsFilters.filterField2 || "", onChange: e => this.updateFilterFields(ds.dataSourceId, "filterField2", e.target.value), disabled: dsFields.length < 2 },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "" }, "\u0411\u0435\u0437 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0444\u0438\u043B\u044C\u0442\u0440\u0430"),
                            dsFields.filter(f => f.name !== dsFilters.filterField).map((f) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { key: f.name, value: f.name }, f.alias || f.name)))))));
            })));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YWJsZS1leHBvcnRlci12Mi9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBUUk7QUFFd0Q7QUFDaEI7QUFFNUMsTUFBTSxPQUFRLFNBQVEsNENBQUssQ0FBQyxhQUcxQztJQUVDLFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUZmLG1CQUFjLEdBQUcsb0RBQVMsQ0FBQyxDQUFDLHNEQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQWMzRCw2QkFBd0IsR0FBRyxHQUFHLEVBQUU7WUFDOUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO1lBQ3ZELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFOztnQkFDMUIsTUFBTSxNQUFNLEdBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFB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LCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLEVBQUUsK0dBQTZCOzRCQUM1QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUNqRSwrQ0FBQywyQ0FBTSxJQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBVSxDQUNqRSxDQUFDLENBQ0ssQ0FDTCxDQUNGLENBQ1AsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNFLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RhYmxlLWV4cG9ydGVyLXYyL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBSZWFjdCxcbiAganN4LFxuICBJbW11dGFibGUsXG4gIERhdGFTb3VyY2VUeXBlcyxcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXG4gIFVzZURhdGFTb3VyY2UsXG59IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIFRleHRJbnB1dCwgTGFiZWwgfSBmcm9tIFwiamltdS11aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4sXG4gIHsgZmllbGRzTWFwOiB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IHsgbmFtZTogc3RyaW5nOyBhbGlhcz86IHN0cmluZyB9W10gfSB9XG4+IHtcbiAgc3VwcG9ydGVkVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZmllbGRzTWFwOiB7fSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVBbGxBdmFpbGFibGVGaWVsZHMoKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy51c2VEYXRhU291cmNlcyAhPT0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykge1xuICAgICAgdGhpcy51cGRhdGVBbGxBdmFpbGFibGVGaWVsZHMoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQWxsQXZhaWxhYmxlRmllbGRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyB8fCBbXTtcbiAgICBsZXQgZmllbGRzTWFwID0ge307XG4gICAgdXNlRGF0YVNvdXJjZXMuZm9yRWFjaChkcyA9PiB7XG4gICAgICBjb25zdCByZWFsRHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHMuZGF0YVNvdXJjZUlkKTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHJlYWxEcz8uZ2V0U2NoZW1hPy4oKTtcbiAgICAgIGNvbnN0IGZpZWxkcyA9IHNjaGVtYT8uZmllbGRzXG4gICAgICAgID8gT2JqZWN0LnZhbHVlcyhzY2hlbWEuZmllbGRzKS5tYXAoKGY6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIG5hbWU6IGYuamltdU5hbWUgfHwgZi5uYW1lLFxuICAgICAgICAgICAgYWxpYXM6IGYuYWxpYXMgfHwgZi5sYWJlbCB8fCBmLmppbXVOYW1lIHx8IGYubmFtZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgOiBbXTtcbiAgICAgIGZpZWxkc01hcFtkcy5kYXRhU291cmNlSWRdID0gZmllbGRzO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWVsZHNNYXAgfSk7XG4gIH07XG5cbiAgdXBkYXRlRmlsdGVyRmllbGRzID0gKGRhdGFTb3VyY2VJZCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlckZpZWxkcyA9IHsgLi4udGhpcy5wcm9wcy5jb25maWcuZmlsdGVyRmllbGRzIH07XG4gICAgaWYgKCFmaWx0ZXJGaWVsZHNbZGF0YVNvdXJjZUlkXSkgZmlsdGVyRmllbGRzW2RhdGFTb3VyY2VJZF0gPSB7fTtcbiAgICBmaWx0ZXJGaWVsZHNbZGF0YVNvdXJjZUlkXVtrZXldID0gdmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgIGZpbHRlckZpZWxkc1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUNvbmZpZ0ZpZWxkID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxuICAgICAgICBbZmllbGRdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgdXNlRGF0YVNvdXJjZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWVsZHNNYXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZmlsdGVyRmllbGRzID0gY29uZmlnLmZpbHRlckZpZWxkcyB8fCB7fTtcblxuICAgIC8vINCU0LvRjyDRgdC10LvQtdC60YLQvtGA0L7QsiBCSUcvU01BTEwgdGFibGVcbiAgICBjb25zdCBkc09wdGlvbnMgPSAodXNlRGF0YVNvdXJjZXMgfHwgW10pLm1hcChkcyA9PiAoe1xuICAgICAgdmFsdWU6IGRzLmRhdGFTb3VyY2VJZCxcbiAgICAgIGxhYmVsOiBkcy5sYWJlbCB8fCBkcy5kYXRhU291cmNlSWRcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiBcIiNmZmZcIiwgYmFja2dyb3VuZDogXCIjMjEyMTI2XCIsIHBhZGRpbmc6IDIwIH19PlxuICAgICAgICB7Lyog0JjRgdGC0L7Rh9C90LjQutC4INC00LDQvdC90YvRhSAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIyIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgICAgPHNwYW4+0JjRgdGC0L7Rh9C90LjQutC4INC00LDQvdC90YvRhTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgdHlwZXM9e3RoaXMuc3VwcG9ydGVkVHlwZXN9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICBpc011bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2RzQXJyID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogdGhpcy5wcm9wcy5pZCwgdXNlRGF0YVNvdXJjZXM6IGRzQXJyIH0pO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMudXBkYXRlQWxsQXZhaWxhYmxlRmllbGRzLCAyMDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDQktGL0LHQvtGAIEJJR19UQUJMRSDQuCBTTUFMTF9UQUJMRSAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMyNTI1NDJcIiwgYm9yZGVyUmFkaXVzOiA5LCBwYWRkaW5nOiAxMiwgbWFyZ2luQm90dG9tOiAxOCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAsIGZvbnRXZWlnaHQ6IDUwMCB9fT7QntGB0L3QvtCy0L3Ri9C1INC40YHRgtC+0YfQvdC40LrQuCDQtNCw0L3QvdGL0YU8L2Rpdj5cbiAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19PtCR0L7Qu9GM0YjQvtC5INC40YHRgtC+0YfQvdC40LogKEJJRyBUQUJMRSk8L0xhYmVsPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luQm90dG9tOiA4IH19XG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmJpZ1RhYmxlSWQgfHwgXCJcIn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlQ29uZmlnRmllbGQoXCJiaWdUYWJsZUlkXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+0J3QtSDQstGL0LHRgNCw0L3QvjwvT3B0aW9uPlxuICAgICAgICAgICAge2RzT3B0aW9ucy5tYXAoZHMgPT5cbiAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2RzLnZhbHVlfSB2YWx1ZT17ZHMudmFsdWV9Pntkcy5sYWJlbH08L09wdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Cb3R0b206IDE2IH19XG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmJpZ1RhYmxlTGFiZWwgfHwgXCJcIn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JvQtdC50LHQuyDQsdC+0LvRjNGI0L7Qs9C+INC40YHRgtC+0YfQvdC40LrQsFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZUNvbmZpZ0ZpZWxkKFwiYmlnVGFibGVMYWJlbFwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+0JzQsNC70YvQuSDQuNGB0YLQvtGH0L3QuNC6IChTTUFMTCBUQUJMRSk8L0xhYmVsPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luQm90dG9tOiA4IH19XG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnNtYWxsVGFibGVJZCB8fCBcIlwifVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVDb25maWdGaWVsZChcInNtYWxsVGFibGVJZFwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPtCd0LUg0LLRi9Cx0YDQsNC90L48L09wdGlvbj5cbiAgICAgICAgICAgIHtkc09wdGlvbnMubWFwKGRzID0+XG4gICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtkcy52YWx1ZX0gdmFsdWU9e2RzLnZhbHVlfT57ZHMubGFiZWx9PC9PcHRpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5zbWFsbFRhYmxlTGFiZWwgfHwgXCJcIn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JvQtdC50LHQuyDQvNCw0LvQvtCz0L4g0LjRgdGC0L7Rh9C90LjQutCwXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlQ29uZmlnRmllbGQoXCJzbWFsbFRhYmxlTGFiZWxcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDQpNC40LvRjNGC0YDRiyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YHQu9C+0Y8gKi99XG4gICAgICAgIHsodXNlRGF0YVNvdXJjZXMgfHwgW10pLm1hcChkcyA9PiB7XG4gICAgICAgICAgY29uc3QgZHNGaWVsZHMgPSBmaWVsZHNNYXBbZHMuZGF0YVNvdXJjZUlkXSB8fCBbXTtcbiAgICAgICAgICBjb25zdCBkc0ZpbHRlcnMgPSBmaWx0ZXJGaWVsZHNbZHMuZGF0YVNvdXJjZUlkXSB8fCB7fTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2RzLmRhdGFTb3VyY2VJZH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxOCwgcGFkZGluZzogMTIsIGJhY2tncm91bmQ6IFwiIzIzMjMzN1wiLCBib3JkZXJSYWRpdXM6IDkgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDcgfX0+e2RzLmxhYmVsIHx8IGRzLmRhdGFTb3VyY2VJZH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+0J/QtdGA0LLRi9C5INCw0YLRgNC40LHRg9GCINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogNSB9fVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RzRmlsdGVycy5maWx0ZXJGaWVsZCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVGaWx0ZXJGaWVsZHMoZHMuZGF0YVNvdXJjZUlkLCBcImZpbHRlckZpZWxkXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHNGaWVsZHMubGVuZ3RofVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkc0ZpZWxkcy5tYXAoKGYpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2YubmFtZX0gdmFsdWU9e2YubmFtZX0+e2YuYWxpYXMgfHwgZi5uYW1lfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPtCS0YLQvtGA0L7QuSDQsNGC0YDQuNCx0YPRgiDQtNC70Y8g0YTQuNC70YzRgtGA0LDRhtC40Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IDUgfX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkc0ZpbHRlcnMuZmlsdGVyRmllbGQyIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZUZpbHRlckZpZWxkcyhkcy5kYXRhU291cmNlSWQsIFwiZmlsdGVyRmllbGQyXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkc0ZpZWxkcy5sZW5ndGggPCAyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj7QkdC10Lcg0LLRgtC+0YDQvtCz0L4g0YTQuNC70YzRgtGA0LA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtkc0ZpZWxkcy5maWx0ZXIoZiA9PiBmLm5hbWUgIT09IGRzRmlsdGVycy5maWx0ZXJGaWVsZCkubWFwKChmKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtmLm5hbWV9IHZhbHVlPXtmLm5hbWV9PntmLmFsaWFzIHx8IGYubmFtZX08L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==