module.exports = {
    extends: ['react-app', 'react-app/jest', 'airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
      // React scope no longer necessary with new JSX transform
      'react/react-in-jsx-scope': 'off',
      // Allow .js files to use JSX syntax
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    },
  }
 