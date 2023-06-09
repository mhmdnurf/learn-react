const Item = ({ name, isPacked }) => {
  return (
    <li className="item">{isPacked ? <del> {name + " ✔"} </del> : name} </li>
  );
};

const PackingList = () => {
  return (
    <>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </section>
    </>
  );
};

export default PackingList;
