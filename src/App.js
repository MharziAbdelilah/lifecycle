import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize component state
    this.state = {
      Person: {
        Name: "abdelilah mharzi",
        bio: "A software engineer with a passion for coding.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false, // Flag to toggle profile display
      mountedTime: 0, // Time since component was mounted
    };
    this.intervalId = null; // Interval ID for updating mountedTime
  }

  // Method to toggle the profile display
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    // Start an interval to update mountedTime every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Lifecycle method called before the component is unmounted
  componentWillUnmount() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.intervalId);
  }

  render() {
    const { Person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        {/* Button to toggle profile display */}
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {/* Display profile if shows is true */}
        {shows && (
          <div>
            <h1>{Person.Name}</h1>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt="Profile" />
            <p>{Person.profession}</p>
          </div>
        )}
        {/* Display time since component was mounted */}
        <p>Component has been mounted for {mountedTime} seconds.</p>
      </div>
    );
  }
}

export default App;
