const path = require('path');

module.exports = {
  '*.{ts,tsx}': [
    // 型のチェック: TypeScriptによる型の検証を実行
    () => 'tsc --incremental false --noEmit',
    // Lintのチェック: ファイルに対してLintを実行
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`,
    // Prettierのフォーマット: コードを整えるためにPrettierを実行
    "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'",
  ],
};
