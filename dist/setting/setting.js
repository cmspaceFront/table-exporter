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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/table-exporter/src/setting/setting.tsx ***!
  \************************************************************************/
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
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 14, color: "#fff", background: "#212126", padding: 20 } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 22 } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: useDataSources, isMultiple: true, onChange: dsArr => {
                        this.props.onSettingChange({ id: this.props.id, useDataSources: dsArr });
                        setTimeout(this.updateAllAvailableFields, 200);
                    }, widgetId: this.props.id })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YWJsZS1leHBvcnRlci9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBUUk7QUFFd0Q7QUFDbEM7QUFFMUIsTUFBTSxPQUFRLFNBQVEsNENBQUssQ0FBQyxhQUcxQztJQUVDLFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUZmLG1CQUFjLEdBQUcsb0RBQVMsQ0FBQyxDQUFDLHNEQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQWMzRCw2QkFBd0IsR0FBRyxHQUFHLEVBQUU7WUFDOUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO1lBQ3ZELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFOztnQkFDMUIsTUFBTSxNQUFNLEdBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUUsTUFBTSxNQUFNLEdBQUcsWUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsc0RBQUksQ0FBQztnQkFDckMsTUFBTSxNQUFNLEdBQUcsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE1BQU07b0JBQzNCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQzVDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJO3dCQUMxQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUk7cUJBQ2xELENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNQLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBRUYsdUJBQWtCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hELE1BQU0sWUFBWSxxQkFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztnQkFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pFLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sa0NBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQ3BCLFlBQVksR0FDYjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQXZDQSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUztRQUMxQixJQUFJLFNBQVMsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQStCRCxNQUFNO1FBQ0osTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBRS9DLE9BQU8sQ0FDTCx3REFBSyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBRTdFLHdEQUFLLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7Z0JBQzlCLHdEQUFLLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7b0JBQzdCLDJKQUE2QixDQUN6QjtnQkFDTiwrQ0FBQyxxRkFBa0IsSUFDakIsaUJBQWlCLFFBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUMxQixjQUFjLEVBQUUsY0FBYyxFQUM5QixVQUFVLEVBQUUsSUFBSSxFQUNoQixRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RSxVQUFVLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNqRCxDQUFDLEVBQ0QsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUN2QixDQUNFO1lBRUwsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMvQixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEQsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RELE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFO29CQUN6Ryx3REFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBRyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQU87b0JBQ3JGLHdEQUFLLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7d0JBQzdCLCtOQUEwQzt3QkFDMUMsK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFDdEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRSxFQUNsQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdEYsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFFekIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDbkIsK0NBQUMsMkNBQU0sSUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQVUsQ0FDakUsQ0FBQyxDQUNLLENBQ0w7b0JBQ047d0JBQ0UsK05BQTBDO3dCQUMxQywrQ0FBQywyQ0FBTSxJQUNMLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUN0QyxLQUFLLEVBQUUsU0FBUyxDQUFDLFlBQVksSUFBSSxFQUFFLEVBQ25DLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUN2RixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUU3QiwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxFQUFFLCtHQUE2Qjs0QkFDNUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDakUsK0NBQUMsMkNBQU0sSUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQVUsQ0FDakUsQ0FBQyxDQUNLLENBQ0wsQ0FDRixDQUNQLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDRSxDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90YWJsZS1leHBvcnRlci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsXG4gIGpzeCxcbiAgSW1tdXRhYmxlLFxuICBEYXRhU291cmNlVHlwZXMsXG4gIERhdGFTb3VyY2VNYW5hZ2VyLFxuICBVc2VEYXRhU291cmNlLFxufSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIjtcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uIH0gZnJvbSBcImppbXUtdWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+LFxuICB7IGZpZWxkc01hcDogeyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiB7IG5hbWU6IHN0cmluZzsgYWxpYXM/OiBzdHJpbmcgfVtdIH0gfVxuPiB7XG4gIHN1cHBvcnRlZFR5cGVzID0gSW1tdXRhYmxlKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSk7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZpZWxkc01hcDoge30gfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlQWxsQXZhaWxhYmxlRmllbGRzKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXMgIT09IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlQWxsQXZhaWxhYmxlRmllbGRzKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUFsbEF2YWlsYWJsZUZpZWxkcyA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgfHwgW107XG4gICAgbGV0IGZpZWxkc01hcCA9IHt9O1xuICAgIHVzZURhdGFTb3VyY2VzLmZvckVhY2goZHMgPT4ge1xuICAgICAgY29uc3QgcmVhbERzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzLmRhdGFTb3VyY2VJZCk7XG4gICAgICBjb25zdCBzY2hlbWEgPSByZWFsRHM/LmdldFNjaGVtYT8uKCk7XG4gICAgICBjb25zdCBmaWVsZHMgPSBzY2hlbWE/LmZpZWxkc1xuICAgICAgICA/IE9iamVjdC52YWx1ZXMoc2NoZW1hLmZpZWxkcykubWFwKChmOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBmLmppbXVOYW1lIHx8IGYubmFtZSxcbiAgICAgICAgICAgIGFsaWFzOiBmLmFsaWFzIHx8IGYubGFiZWwgfHwgZi5qaW11TmFtZSB8fCBmLm5hbWUsXG4gICAgICAgICAgfSkpXG4gICAgICAgIDogW107XG4gICAgICBmaWVsZHNNYXBbZHMuZGF0YVNvdXJjZUlkXSA9IGZpZWxkcztcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmllbGRzTWFwIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUZpbHRlckZpZWxkcyA9IChkYXRhU291cmNlSWQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJGaWVsZHMgPSB7IC4uLnRoaXMucHJvcHMuY29uZmlnLmZpbHRlckZpZWxkcyB9O1xuICAgIGlmICghZmlsdGVyRmllbGRzW2RhdGFTb3VyY2VJZF0pIGZpbHRlckZpZWxkc1tkYXRhU291cmNlSWRdID0ge307XG4gICAgZmlsdGVyRmllbGRzW2RhdGFTb3VyY2VJZF1ba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxuICAgICAgICBmaWx0ZXJGaWVsZHNcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHVzZURhdGFTb3VyY2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZmllbGRzTWFwIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpbHRlckZpZWxkcyA9IGNvbmZpZy5maWx0ZXJGaWVsZHMgfHwge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiBcIiNmZmZcIiwgYmFja2dyb3VuZDogXCIjMjEyMTI2XCIsIHBhZGRpbmc6IDIwIH19PlxuICAgICAgICB7Lyog0JjRgdGC0L7Rh9C90LjQuiDQtNCw0L3QvdGL0YUgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICAgIDxzcGFuPtCY0YHRgtC+0YfQvdC40LrQuCDQtNCw0L3QvdGL0YU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgIHR5cGVzPXt0aGlzLnN1cHBvcnRlZFR5cGVzfVxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgaXNNdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtkc0FyciA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIHVzZURhdGFTb3VyY2VzOiBkc0FyciB9KTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZUFsbEF2YWlsYWJsZUZpZWxkcywgMjAwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qINCk0LjQu9GM0YLRgNGLINC00LvRjyDQutCw0LbQtNC+0LPQviDRgdC70L7RjyAqL31cbiAgICAgICAgeyh1c2VEYXRhU291cmNlcyB8fCBbXSkubWFwKGRzID0+IHtcbiAgICAgICAgICBjb25zdCBkc0ZpZWxkcyA9IGZpZWxkc01hcFtkcy5kYXRhU291cmNlSWRdIHx8IFtdO1xuICAgICAgICAgIGNvbnN0IGRzRmlsdGVycyA9IGZpbHRlckZpZWxkc1tkcy5kYXRhU291cmNlSWRdIHx8IHt9O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17ZHMuZGF0YVNvdXJjZUlkfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE4LCBwYWRkaW5nOiAxMiwgYmFja2dyb3VuZDogXCIjMjMyMzM3XCIsIGJvcmRlclJhZGl1czogOSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNyB9fT57ZHMubGFiZWwgfHwgZHMuZGF0YVNvdXJjZUlkfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj7Qn9C10YDQstGL0Lkg0LDRgtGA0LjQsdGD0YIg0LTQu9GPINGE0LjQu9GM0YLRgNCw0YbQuNC4PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiA1IH19XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZHNGaWx0ZXJzLmZpbHRlckZpZWxkIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZUZpbHRlckZpZWxkcyhkcy5kYXRhU291cmNlSWQsIFwiZmlsdGVyRmllbGRcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkc0ZpZWxkcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2RzRmllbGRzLm1hcCgoZikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17Zi5uYW1lfSB2YWx1ZT17Zi5uYW1lfT57Zi5hbGlhcyB8fCBmLm5hbWV9PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JLRgtC+0YDQvtC5INCw0YLRgNC40LHRg9GCINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogNSB9fVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RzRmlsdGVycy5maWx0ZXJGaWVsZDIgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlRmlsdGVyRmllbGRzKGRzLmRhdGFTb3VyY2VJZCwgXCJmaWx0ZXJGaWVsZDJcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RzRmllbGRzLmxlbmd0aCA8IDJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPtCR0LXQtyDQstGC0L7RgNC+0LPQviDRhNC40LvRjNGC0YDQsDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2RzRmllbGRzLmZpbHRlcihmID0+IGYubmFtZSAhPT0gZHNGaWx0ZXJzLmZpbHRlckZpZWxkKS5tYXAoKGYpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2YubmFtZX0gdmFsdWU9e2YubmFtZX0+e2YuYWxpYXMgfHwgZi5uYW1lfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9