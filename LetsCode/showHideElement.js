/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
function App() {
    const [visible, setVisible] = React.useState(true);
    
    return (
      <>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'} Element Below</button>
  
        {visible && <div>Toggle Challenge</div>}
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));