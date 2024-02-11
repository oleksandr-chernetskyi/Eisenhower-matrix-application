import React from 'react';

export const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Eisenhower Matrix Notebook</h1>
      </header>
      <main>
        <section id="important-urgent">
          <h2>Important & Urgent</h2>
          <ul className="task-list">
            Task items will go here
          </ul>
        </section>
        <section id="important-not-urgent">
          <h2>Important & Not Urgent</h2>
          <ul className="task-list">
            Task items will go here
          </ul>
        </section>
        <section id="not-important-urgent">
          <h2>Not Important & Urgent</h2>
          <ul className="task-list">
            Task items will go here
          </ul>
        </section>
        <section id="not-important-not-urgent">
          <h2>Not Important & Not Urgent</h2>
          <ul className="task-list">
            Task items will go here
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Eisenhower Matrix Notebook</p>
      </footer>
    </>
  );
};
