import React from "react";
import "./index.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        { name: 'The Seattle Dog', price: '$9.99' },
        { name: 'Piroshkies', price: '$7.99' },
        { name: 'Clam Chowder', price: '$12.99' }
      ],
      hours: {
        Sunday: '10:00 AM - 10:00 PM',
        Monday: '11:30 AM - 09:00 PM',
        Tuesday: '11:30 AM - 09:00 PM',
        Wednesday: '11:30 AM - 09:00 PM',
        Thursday: '11:30 AM - 09:00 PM',
        Friday: '10:00 AM - 10:00 PM',
        Saturday: '10:00 AM - 10:00 PM'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">5610 Restaurant</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">New Dishes</h2>
            <div className="list-group">
              {this.state.dishes.map(dish => (
                <a key={dish.name} href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  {dish.name}
                  <span className="badge badge-primary badge-pill">{dish.price}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Open Hours</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.state.hours).map(day => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{this.state.hours[day]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
            integrity="sha384-BpHpCJlFPZwIaLlzwktAdbFvNUwiE1yEN9Kq3nJSe8vJSiHojZwY0Wy91+xyWc34"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </div>
    );
  }
}

export default HomePage;
