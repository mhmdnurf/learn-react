const user = {
    name: 'Muhammad Zakaria',
    theme: {
        color: 'white',
        listStyle: 'none'
    }
}


export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const desc = "Muhammad Zakaria";
  return (
    <img
      src={avatar}
      alt={desc}
      style={{
        borderRadius: 50,
      }}
    />
  );
}
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(date);
}

export default function ToDoList() {
  return (
    <>
      <h1>{user.name}'s Todos</h1>
      <h1>To Do List for {formatDate(today)}</h1>
      <ul style={user.theme}>
        <Avatar />
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}
