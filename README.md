# Generate Component and Screen:
For React Native project use Typescript. :smile:
1. Clone prject.
2. Run _yarn_
3. Run _yarn link_
4. Run _generate screen <screen_name>_ to generate a .tsx file in screens folder, import in screens/index.js stack-navigation and add screen to stack.
5. Run _generate component <component_name>_ to generate a .tsx file in component folder, import in components/index.js.

Project structure:
<pre>
src
|--...
|--components
|  |--index.ts
|--navigation
|  |--stack-navigation.tsx
|--screens
|  |--index.ts
|--...
</pre>

To custom for an other project, edit Common.js file.
