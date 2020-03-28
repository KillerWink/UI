module.exports = function(api) {
    api.cache(true);
    return {
        presets: ["@babel/preset-react", "@babel/env"],
        plugins: ["emotion"],
        env: {
            build: {
                ignore: [
                    '__tests__',
                ],
            },
        },
        ignore: ['node_modules'],
    };
};
