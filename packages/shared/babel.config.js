module.exports = function(api) {
    api.cache(true);
    return {
        presets: [["@babel/env", {
            "modules" : false,
            "targets" : {
                "browsers" : "> 0.25%, ie 11, not op_mini all, not dead",
                "node" : 8
            }
        }], "@babel/preset-react"],
        plugins: ["emotion", "@babel/plugin-proposal-class-properties"],
        env: {
            build: {
                ignore: [
                    '__tests__',
                ],
            },
        }
    };
};
