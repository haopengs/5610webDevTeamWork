import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '555-555-5555',
      shifts: [
        { date: '2023-04-12', startTime: '8AM', endTime: '5PM' },
        { date: '2023-04-14', startTime: '1PM', endTime: '9PM' },
        { date: '2023-04-16', startTime: '8AM', endTime: '6PM' },
        { date: '2023-04-17', startTime: '4AM', endTime: '7PM' }
      ]
    };
  }

  render() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const thisWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const thisWeekShifts = this.state.shifts.filter(shift => {
      const shiftDate = new Date(shift.date);
      return shiftDate >= thisWeekStart && shiftDate < new Date(thisWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    });
    const weeklyShiftsByDay = daysOfWeek.map(day => ({
      name: day,
      shifts: thisWeekShifts.filter(shift => new Date(shift.date).getDay() === daysOfWeek.indexOf(day))
    }));

    return (
      <div>
        <h1>Profile</h1>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phone}</p>
        <h2>Upcoming Shifts</h2>
        <table>
          <thead>
            <tr>
              {daysOfWeek.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {weeklyShiftsByDay.map(({ name, shifts }) => (
                <td key={name}>
                  {shifts.length > 0 ? (
                    <ul>
                      {shifts.map(shift => (
                        <li key={`${shift.date}-${shift.startTime}-${shift.endTime}`}>
                          {shift.startTime} - {shift.endTime}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No shifts</p>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
