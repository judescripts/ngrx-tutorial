# DevToys.io - NgRx Tutorial Application

This project demonstrates the integration of NgRx in an Angular standalone application. It includes state management for a simple item list with actions, reducers, effects, and selectors.

*This is for educational purpose only. DO NOT use in production*

***

## Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v18 or higher)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/ngrx-tutorial.git
cd ngrx-tutorial
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Application

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/`. You should see the item list application running.

## Project Structure

```plaintext
ngrx-tutorial/
├── src/
│   ├── app/
│   │   ├── item/
│   │   │   ├── item.actions.ts
│   │   │   ├── item.effects.ts
│   │   │   ├── item.model.ts
│   │   │   ├── item.reducer.ts
│   │   │   ├── item.selectors.ts
│   │   │   ├── item.service.ts
│   │   │   ├── in-memory-data.service.ts
│   │   │   ├── item-list.component.ts
│   │   │   ├── item-list.component.html
│   │   │   ├── item-list.component.css
│   │   ├── app.config.ts
│   │   ├── app.component.ts
│   ├── main.ts
```

## Summary

This project is a practical example of integrating NgRx into an Angular standalone application. The application includes:

- **State Management:** Using NgRx for managing the state of an item list.
- **Actions:** Defining actions for loading and adding items.
- **Reducers:** Handling state changes based on actions.
- **Effects:** Managing side effects such as fetching data from a mock backend.
- **Selectors:** Selecting and deriving data from the state.
- **In-Memory Web API:** Mock backend for simulating API calls.

By following this setup, you can understand how to implement NgRx in your Angular applications to manage state efficiently and maintain a clean architecture.
