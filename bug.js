```javascript
//In your Tailwind config file (tailwind.config.js)
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```html
<!--In your html file -->
<div class="bg-red-500 p-4">
  <p>This is some text</p>
</div>
```
This code will not work because the content section in your tailwind config file is not correctly configured to pick up your html and js files.