const { override, addBabelPlugin } = require('customize-cra');

// Exportamos a função 'override' para sobreescrever algumas funcionalidades do webpack
module.exports = override(
  // Utilizamos a função 'addBabelPlugin' para adicionar um novo plugin
  addBabelPlugin([
    // Informamos o nome do plugin na primeira posição do array
    'babel-plugin-root-import',
    // E as configurações na segunda posição
    {
      paths: [
        {
          rootPathSuffix: 'src',
        },
        {
          rootPathPrefix: '@components/',
          rootPathSuffix: 'src/components',
        },
        {
          rootPathPrefix: '@store/',
          rootPathSuffix: 'src/store',
        },
      ],
    },
  ])
);
