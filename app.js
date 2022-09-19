// TODO
const GroceryList = () => (
    <div>
        <h3>Grocery List</h3>
        <GroceryListItem items={['Coffee', 'Coffee filters']}/>
    </div>
);

const GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
)

const Coffee = () => (
    <li>Coffee</li>
);


const CoffeeFilters = () => (
    <li>Coffee filters</li>
);

ReactDOM.render(<GroceryList/>, document.getElementById("app"));
