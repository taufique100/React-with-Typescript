# React with TypeScript Learning Guide

## Topics Covered

### 1. Basic & Advanced Props
- Understanding props in functional and class components
- Using optional and required props
- Defining prop types with TypeScript

### 2. Events & Styles
- Handling DOM events with TypeScript
- Styling components using inline styles and CSS modules

### 3. useState
- Using useState with primitive and complex data types
- Type inference and explicit type annotations

### 4. useReducer
- Managing state with useReducer
- Defining action and state types

### 5. Context API
- Creating and using context with TypeScript
- Type safety for context value

### 6. useRef
- Using useRef for DOM references and mutable objects

### 7. Class Components
- Writing class components with TypeScript
- Defining state and props in class components

### 8. Component as Props
- Passing components as props
- Ensuring type safety with React.ComponentType

### 9. Generics
- Using generics for reusable components
- Defining flexible types with generic parameters

### 10. Restricting Props
- Limiting the types of props with union and intersection types

### 11. Template Literals & Exclude
- Leveraging TypeScript template literal types
- Excluding specific types using Exclude

### 12. Wrapping HTML & Omit
- Wrapping standard HTML elements with custom components
- Using Omit to exclude props from types

### 13. Extracting Component Prop Types
- Extracting and reusing prop types with React.ComponentProps

### 14. Polymorphic Components
- Creating polymorphic components with type safety

---

## Setting up React with Vite and TypeScript

Follow these steps to set up a new React project with Vite and TypeScript:

### 1. Install Node.js
Ensure that you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### 2. Create a Vite Project
Run the following command to create a new project:
```bash
npm create vite@latest my-react-ts-app -- --template react-ts
```

### 3. Navigate to the Project Directory
```bash
cd my-react-ts-app
```

### 4. Install Dependencies
Install the necessary dependencies:
```bash
npm install
```

### 5. Start the Development Server
Run the development server to start the project:
```bash
npm run dev
```

### 6. Configure TypeScript (Optional)
If you need additional TypeScript configuration, edit the `tsconfig.json` file as required.

### 7. Build the Project
To create a production build, use the following command:
```bash
npm run build
```

### 8. Preview the Build
To preview the production build locally:
```bash
npm run preview
```

---

This guide covers key topics to enhance your understanding of React with TypeScript while providing a streamlined setup process using Vite. Happy coding!
