// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const dist = 'dist';

export default {
    input: 'src/index.js',
    output: [
        {
            file: `${dist}/bundle.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/bundle.esm.js`,
            format: 'esm'
        },
        {
            name: '@killerui/web',
            file: `${dist}/bundle.umd.js`,
            format: 'umd',
            globals: {
                'react': 'React',
                '@emotion': '@emotion',
                'emotion-theming': 'emotion-theming',
                'prop-types': 'PropTypes',
                'lottie-web': 'lottie-web'
            },
        },
    ],
    plugins: [
        resolve(),
        commonjs({
            include: /node_modules/
        }),
        json(),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
        })
    ],
    external: ['react', '@emotion', 'emotion-theming', 'prop-types', 'lottie-web']
};
