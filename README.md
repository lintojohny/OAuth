# #Google OAuth

Setting up an OAuth integration for signin

1. Provide the user with a link to the authentication system that includes what data you’d like the user to give your application access to (scopes), your client ID, and a redirect URL

2. When the user clicks the link and grants access to your application, they will be redirected back to your application with a security code in the query string

3. PassportJS will help us with a large chunk of the Googe OAuth process.

4. When the user clicks ‘Login,’ Passport kicks in and forwards the request to Google. Google prompts the user for permission, and then kicks back a code (in the form of a query string) to our server.

5. Your application’s server uses the security code, client ID, and client secret to request an access token & bearer token

6. The access token and bearer token are used to fetch the user’s profile information on their behalf

7. The profile information can be used to either verify them against an existing user in your system or create a new user

## Eslint and prettier config - With VS Code

This repo follows wes bos eslint and prettier setup [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos)

To add eslint and prettier to your VSCode You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
  // These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```
