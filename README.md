# React Native Meteor Boilerplate
:rocket: Simple way to get started when building React Native Apps with a Meteor backend :rocket:

![demo](http://recordit.co/Z22oJh8gnE.gif)

This boilerplate is heavily inspired in @spencercarli [boilerplate's](https://github.com/spencercarli/react-native-meteor-boilerplate) and his courses and posts.

## What do you get in this Boilerplate

### Meteor
- [x] [Airbnb ESlint configuration](https://www.npmjs.com/package/eslint-config-airbnb) + meteor adaptations: [eslint-meteor-plugin](https://github.com/dferber90/eslint-plugin-meteor)  and [eslint-import-resolver-meteor](https://github.com/clayne11/eslint-import-resolver-meteor)
- [x] Meteor with accounts-password
- [ ] Meteor without blaze

### React Native
- [x] [Airbnb ESlint configuration](https://www.npmjs.com/package/eslint-config-airbnb) + RN adaptations
- [x] [react-native-meteor](https://github.com/inProgress-team/react-native-meteor)
- [x] [react-native-elements](https://github.com/react-native-training/react-native-elements)
- [x] [React-navigation](https://reactnavigation.org)
- [x] [React-Native-Dropdown-Alert](https://github.com/testshallpass/react-native-dropdownalert)
- [x] Screen: Welcome
- [x] Screen: Sign up
- [x] Screen: Sign in
- [x] Screen: User profile, with Gravatar integration.
- [ ] Redux
- [ ] Offline config

### Dev Tools Included
- [x] [React Native Devtools](https://github.com/facebook/react-devtools/blob/master/packages/react-devtools/README.md)

Run `npm run devtools`, after running `react-native run-ios` or `react-native run-android`.

- [x] [React Native Debugger](https://github.com/jhen0409/react-native-debugger)


First go an install React Native Debugger in your machine. After install run `npm run rndebugger-setup`. This modifies the RN packager to set React Native Debugger to be the default debugger. Great isn't it :sunglasses:


## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone repo
- In `/MeteorApp` and run `meteor npm install`. Once finished run `meteor` to start de Meteor app.
- In `/ReactNativeApp` and run `npm install`, once finish run `npm run rndebugger-setup` to configure React Native Debugger.
- Once finished `react-native run-ios` or `react-native run-android`. :rocket:
