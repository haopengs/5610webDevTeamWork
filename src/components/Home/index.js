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
      <div>
        <h1>5610 Restaurant</h1>
        <h2>New Dishes</h2>
        <ul>
          {this.state.dishes.map(dish => (
            <li key={dish.name}>
              {dish.name} - {dish.price}
            </li>
          ))}
        </ul>
        <h2>Open Hours</h2>
        <table>
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
    );
  }
}

export default HomePage;

  