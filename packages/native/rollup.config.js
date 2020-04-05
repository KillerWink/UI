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
            name: '@killerui/native',
            file: `${dist}/bundle.umd.js`,
            format: 'umd',
            globals: {
                'react': 'React',
                '@emotion/native': '@emotion/native',
                'emotion-theming': 'emotion-theming',
                'prop-types': 'PropTypes',
                'react-native': 'react-native',
                'react-native-reanimated': 'react-native-reanimated',
                'react-native-gesture-handler': 'react-native-gesture-handler',
                '@react-navigation/native': '@react-navigation/native',
                '@react-navigation/stack': '@react-navigation/stack',
                'react-native-shared-element': 'react-native-shared-element',
                'react-navigation-shared-element': 'react-navigation-shared-element',
                'react-native-safe-area-context': 'react-native-safe-area-context',
                '@react-native-community/masked-view': '@react-native-community/masked-view',
                'react-native-screens': 'react-native-screens'
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
    external: [
        'react',
        '@emotion/native',
        'emotion-theming',
        'prop-types',
        'react-native',
        'react-native-reanimated',
        'react-native-gesture-handler',
        '@react-navigation/native',
        '@react-navigation/stack',
        'react-native-shared-element',
        'react-navigation-shared-element',
        'react-native-safe-area-context',
        '@react-native-community/masked-view',
        'react-native-screens'
    ]
};
