var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var _this = this;
var asyncFunctionObjects = [
    {
        func: function (input) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // @ts-ignore
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({ value: input.value * 2 });
                        }, 1000);
                    })];
            });
        }); },
        description: "Multiply by 2",
    },
    {
        func: function (input) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // @ts-ignore
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({ value: input.value + 3 });
                        }, 1000);
                    })];
            });
        }); },
        description: "Add 3",
    },
    {
        func: function (input) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // @ts-ignore
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({ value: input.value - 5 });
                        }, 1000);
                    })];
            });
        }); },
        description: "Subtract 5",
    },
    {
        func: function (input) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // @ts-ignore
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({ value: input.value / 2 });
                        }, 1000);
                    })];
            });
        }); },
        description: "Divide by 2",
    },
    {
        func: function (input) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // @ts-ignore
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({ value: input.value * input.value });
                        }, 1000);
                    })];
            });
        }); },
        description: "Square the value",
    }
];
// @ts-ignore
function processData() {
    return __awaiter(this, void 0, void 0, function () {
        var result, objData, _a, _b, _c, _i, fun;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    result = { value: 10 };
                    _a = asyncFunctionObjects;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 3];
                    fun = _c;
                    console.log(asyncFunctionObjects[fun].description);
                    return [4 /*yield*/, asyncFunctionObjects[fun].func(result)];
                case 2:
                    objData = _d.sent();
                    result = objData;
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
// Run the processData function
processData();
// ```
// //
// // ### Explanation:
// //
// //     1. **Data Interface**:
// // The `Data` interface remains the same, defining a structure with a `value` property.
// //
// // 2. **AsyncFunctionObject Interface**:
// // We define an `AsyncFunctionObject` interface that contains:
// //     - `func`: an asynchronous function.
// // - `description`: a string to describe the function, which is useful for logging.
// //
// //      3. **asyncFunctionObjects Array**:
// // This array contains objects that conform to the `AsyncFunctionObject` interface. Each object has an asynchronous function and a description.
// //
// // 4. **processData Function**:
// // - We initialize the `result` variable with the initial input object `{ value: 10 }`.--done
// // - We use a `for` loop to iterate over each object in the `asyncFunctionObjects` array. --done
// // - Before calling the function, we log the current state with the corresponding description. --done
// // - We call the `func` of the current object with the current `result` and await its completion. --done
// // - We update the `result` variable with the output of the current function. --done
// // - After calling the function, we log the updated state with the corresponding description.
// // - Finally, we log the final `result`.
// //
// //     This implementation allows you to follow each step of the sequence with clear logging, demonstrating the changes made by each asynchronous function. The added descriptions provide context for each step in the process.
