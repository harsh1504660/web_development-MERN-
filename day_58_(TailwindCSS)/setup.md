## How to setup tailwind css

step 1 : Run the following commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.conf.js file to include this file line:
```
content : ["*.html"]
```

Step 3 : Create src/input.css to inculde

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4 : Include the src/output.css file to your html

Step 5 : Run the follwoing command

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```