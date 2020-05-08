import React from "react";
import Counter from "../../components/Counter/Counter";
import TodoList from "../../components/TodoList.component";

function Home() {
  return (
    <div className="Home">
      <TodoList />
      <Counter />
    </div>
  );
}

export default Home;
