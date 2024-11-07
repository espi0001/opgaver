import ListItem from "./ListItem";
const List = () => {
  return (
    <div>
      <section>
        <h1>Done</h1>
        <ListItem />
      </section>
      <section>
        <h1>Todo</h1>
        <ListItem />
      </section>
    </div>
  );
};

export default List;
