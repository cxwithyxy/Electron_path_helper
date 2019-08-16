"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const util_1 = require("util");
const path_1 = require("path");
class Path_helper {
    /**
     * 无论在什么环境下都返回真实的app_path, 仅在win打包下可用
     *
     * @static
     * @returns
     * @memberof Path_helper
     */
    static get_app_path() {
        if (Path_helper.is_packaged()) {
            if (util_1.isUndefined(process.env.PORTABLE_EXECUTABLE_DIR)) {
                return path_1.dirname(electron_1.app.getPath("exe"));
            }
            return process.env.PORTABLE_EXECUTABLE_DIR;
        }
        return process.cwd();
    }
    /**
     * 是否在打包环境下运行
     *
     * @static
     * @returns {boolean}
     * @memberof Path_helper
     */
    static is_packaged() {
        return electron_1.app.isPackaged;
    }
}
exports.Path_helper = Path_helper;
