const { useState } = React;

const App = () => (
    <div>
        <h3>Grocery List</h3>
        <GroceryList items={['Coffee', 'Coffee filters', 'Eggs', 'Spam']}/>
    </div>
  )

  const GroceryList = (props) => {
    const onListItemClick = function(event) {
      console.log('I got clicked');
    };

    return (
      <ul>
        {/* <li onClick={onListItemClick}>{props.items[0]}</li> */}
        {props.items.map((item) => (
          <GroceryListItem item={item} />
        ))}
     </ul>
    )
}

const GroceryListItem = (props) => {

  const [isHover, setIsHover] = useState(false);
  const style = {
    fontWeight: isHover ? 'bold' : 'normal'
  };

  return (
    <li style={style}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}>
    {props.item}
    </li>
  )
};


ReactDOM.render(<App/>, document.getElementById("app"));
