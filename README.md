# Todo List App

This is a simple Todo List application built with React and TypeScript. The app allows users to add, edit, and delete todo items, with support for multiple edits and improved accessibility features.

## Features

- **Add Todo**: Users can add new todo items by entering text and pressing the "Add Todo" button or the Enter key.
- **Edit Todo**: Users can edit existing todo items. When editing, the input field is focused, and users can save changes by pressing the "Save" button or the Enter key.
- **Cancel Edit**: Users can cancel the edit operation by pressing the "Cancel" button or the Escape key, reverting the todo item to its original state.
- **Delete Todo**: Users can delete todo items by pressing the "Delete" button.
- **Keyboard Navigation**: The application supports keyboard navigation, allowing users to tab through interactive elements and use Enter and Escape keys for actions.
- **Accessibility**: Improved accessibility with ARIA labels, roles, and screen reader support.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **CSS**: Styling the components with modern CSS techniques.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-list-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. **Add a Todo Item**:
    - Type your todo text in the input field.
    - Press the "Add Todo" button or the Enter key to add the item to the list.

2. **Edit a Todo Item**:
    - Click the "Edit" button next to a todo item.
    - Modify the text in the input field.
    - Press the "Save" button or the Enter key to save changes.
    - Press the "Cancel" button or the Escape key to discard changes.

3. **Delete a Todo Item**:
    - Press the "Delete" button next to a todo item to remove it from the list.

## Accessibility Features

- **ARIA Labels and Roles**: Added `aria-label` attributes to buttons and input fields to provide descriptive labels for screen readers. Added `role="listitem"` to each `li` element.
- **Keyboard Navigation**: Ensured all interactive elements are focusable and have a visible focus state.
- **Screen Reader Support**: Added visually hidden labels (using `.sr-only` class) to provide meaningful content for screen readers.

## CSS Enhancements

- **Flexbox Layout**: Used flexbox to align elements properly.
- **Focus Styles**: Added styles to highlight focused elements for better accessibility.
- **Modern Design**: Improved overall look and feel with modern CSS techniques, including shadows, colors, and spacing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

Feel free to customize and enhance this README file as needed.
