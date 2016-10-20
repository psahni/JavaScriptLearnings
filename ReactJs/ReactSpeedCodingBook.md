* ReactSpeed.com

* Page 4

What we love about React and companion libraries like Redux is how they
introduce constraints and flexibility at the same time. A very difficult goal to
achieve when writing generic libraries and frameworks. React and Redux seem
to have done so elegantly. Growing GitHub stars and cross-industry adoption is
proof of this achievement.

To us React is about thinking in design and architectural patterns. It is more
than making choices about which framework or library to use, or how to use
these. We rapidly raise our thinking to design, requirements, solving real-world
problems, that our apps are expected to address.


* Page 5

Create custom React Speed UI library using Flexbox and PostCSS, with goals including
responsive design, single page app components, ease of customization,
reusable code, and high performance.

Apply Behavior-Driven Development techniques to create a comprehensive
testing strategy for your apps. This includes ESLint and StyleLint to provide
in-editor coding guidance on industry best practices for JavaScript and CSS.
Use Mocha to describe specs. Chai for writing assertions. Sinon to spy on
methods and events. We also learn about Enzyme for simple yet powerful React
component level testing.

* Page 6

ThoughtWorks Technology Radar ranks technologies based on
  * -> Adopt > Trial > Assess > Hold relative ranking.


* Page 13

We recognize that React is at its core a simpler library representing the View
pattern, while Angular 2 is a complete framework offering Model, View, and
Controller architectural patterns.

React is actually an ecosystem of well designed and highly popular libraries,
open sourced mostly by Facebook (React, React Native, Immutable, Flow, Relay,
GraphQL), other leading developers (Redux, React Material UI, React Router),
and industry leaders (Flipboard React Canvas, Airbnb Enzyme).
React + Redux for instance offer the Model (Store), View (React, Actions), and
Controller (Reducers) pattern to compare on equal grounds with the Angular 2
stack.

* Page 13

Why Learn React ?
Why Learn Angular 2 ?

As you are making “hopefully informed” decisions all along your learning
and development journey, you become a more thorough developer, designer,
architect in the long haul. If you make your decisions by evaluating pros-cons
of architectural and design patterns, you are becoming a better developer.


Page 15

Webpack. Modern day packaging, module bundling, build pipeline automation
tooling.

Design Patterns and Object Oriented principles. Composition, Inheritance,
Singletons, Pure Functions, Immutability, and many others are core concepts
helping you in doing good development in general.

Page 19 & Page 20 onwards
Installing starter dependencies

1. node
2. clone the application
3. react
4. react-dom
5. webpack and webpack-dev-server
6. html generation plugin

* Babel Info
  npm install --save-dev babel-core
  npm install --save-dev babel-loader
  npm install --save-dev babel-preset-es2015
  npm install --save-dev babel-preset-react
  npm install --save-dev babel-preset-react-hmre

- Babel compiles React JSX and ES6 to ES5 JavaScript. We need babel-loader as Webpack Babel loader for JSX file types.
So babel integrates with webpack.

- Presets in Babel are collection of dependencies.

- .babelrc: Babel configuration is defined in this file.

* Configure webpack-dev-server - Page 27
