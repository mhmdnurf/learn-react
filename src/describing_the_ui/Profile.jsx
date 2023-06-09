export function Profile() {
  return (
      <img src="https://i.imgur.com/MK3eW3As.jpg" style={{
        margin: 20
      }} alt="Muhammad Zakaria" />
  );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    )
}
