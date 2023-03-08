// Vite 配置请见: https://cn.vitejs.dev/config/

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import Components from 'unplugin-vue-components/vite';

export default defineConfig(({ mode }) => {
  const envConfig = loadEnv(mode, process.cwd());

  const VITE_PORT = Number(envConfig.VITE_PORT);
  return {
      server: {
          port: VITE_PORT
      },
      plugins: [
          vue(),
          // 自动引用组件
          Components({
              dirs: ['src/components', 'src/views'],
              resolvers: [],
              dts: 'src/components.d.ts',
              include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
              types: [ ]
          })
      ],
      build: {
          sourcemap: true
      },
      resolve: {
          // 路径别名
          alias: {
              '@': resolve('./src'),

              '@models': resolve('./src/utils/models'),
              '@components': resolve('./src/components'),
              //'@service': resolve('./src/api/service'),

              //'@router': resolve('./src/router'),
              //'@store': resolve('./src/store'),
              '@assets': resolve('./src/assets'),

              //'@utils': resolve('./src/utils'),
              //'@storage': resolve('./src/utils/storage')
          },
          extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
      },
      define: {
          __APP_ENV__: envConfig.APP_ENV
      }
  };
});

function resolve(p: string) {
  return path.resolve(__dirname, p);
}
