# ima-plugin-managed-component

The `AbstractMangedComponent` is an extension of the
[IMA](https://github.com/seznam/IMA.js-skeleton)'s `AbstractComponent`,
providing API for easier registration of DOM, event bus, dispatcher, timeout
and interval listeners, which are **automatically** bound to the component's
instance (`this`) and are automatically deregistered from the
`componentWillUnmount()` callback (unless completed or manually deregistered
prior to the callback's execution).

## Installation

Install the plugin as an npm module:

```
npm install --save ima-plugin-managed-component
```

Next you need to add the plugin to your vendors. Open the `app/build.js` file
of your IMA application, and add the following element to the `vendors.common`
array:

```javascript
'ima-plugin-managed-component'
```

With that the build process is configured and you may start using this plugin
(you may need to restart your `dev` process):

```javascript
import AbstractComponent from 'ima/page/AbstractComponent';
import abstractManagedComponentFactory from 'ima-plugin-managed-component';
const AbstractManagedComponent = abstractManagedComponentFactory(
  AbstractComponent
);

export default class MyReactComponent extends AbstractManagedComponent {
  // TODO
}
```

Note: it may be practical to define a base class for react components in your
application that extends from the `AbstractManagedComponent` class to make
extending the class easier.
