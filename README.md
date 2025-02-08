# Tailwind CSS - Styles Not Being Applied

This repository demonstrates a common issue encountered when using Tailwind CSS: styles not being applied to HTML elements. This issue usually stems from an incorrectly configured `content` array within the `tailwind.config.js` file.

## Problem

Despite including Tailwind classes in your HTML, the corresponding styles aren't applied.

## Solution

The solution involves ensuring the `content` array in `tailwind.config.js` correctly points to the directories or files containing your HTML and JavaScript files.  This allows Tailwind to scan and interpret the classes used in those files.

## Steps to Reproduce

1. Clone this repository.
2. Observe that the styles in `index.html` won't be applied, due to the incorrect content property.
3. Examine the corrected `tailwind.config.js` file in the `solution` branch to see the proper configuration for the content array. 
4. Run `npm install`
5. Run `npm run build` to see that the styles are now correctly applied.