export declare class Path_helper {
    /**
     * 无论在什么环境下都返回真实的app_path, 仅在win打包下可用
     *
     * @static
     * @returns
     * @memberof Path_helper
     */
    static get_app_path(): string;
    /**
     * 是否在打包环境下运行
     *
     * @static
     * @returns {boolean}
     * @memberof Path_helper
     */
    static is_packaged(): boolean;
}
