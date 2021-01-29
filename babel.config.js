const presets = ["next/babel"];
// const plugins = [];

module.exports = (api) => {
    api.cache(true);
    return {
        babelrcRoots: ["."],
        presets,
        // plugins: ["@babel/plugin-syntax-dynamic-import", "@loadable/babel-plugin"],
    };
};
