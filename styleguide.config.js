module.exports = {
    components: "components/**/*.ts",
    // sections: [
    //     {
    //         name: "components",
    //         components: "components/**/*.ts",
    //         // components: [
    //         //     path.join(cwd, 'src/**/*.jsx'),
    //         // ],
    //         // content: path.join(cwd, 'README.md'),
    //         // content: 'README.md',
    //         // ignore: ['**/__tests__/*.jsx']
    //     },
    // ],
    webpackConfig: {
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                },
            ],
        },
    },
};
