// bai 1
// import React, { Component } from 'react';

// class ListCourse extends Component {
//   render() {
//     return (
//       <div className="list-course">
//         <h2>Danh sách khóa học</h2>
//         <ul>
//           <li>1. HTML</li>
//           <li>2. CSS</li>
//           <li>3. JavaScript</li>
//           <li>4. ReactJS</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default ListCourse;


// bai 2
// import React, { Component } from 'react';

// class Calculation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstNumber: 0,
//       secondNumber: 0,
//       result: 0,
//       operator: '',
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleCalculate = (operator) => {
//     const { firstNumber, secondNumber } = this.state;
//     let result = 0;

//     switch (operator) {
//       case '+':
//         result = firstNumber + secondNumber;
//         break;
//       case '-':
//         result = firstNumber - secondNumber;
//         break;
//       case '*':
//         result = firstNumber * secondNumber;
//         break;
//       case '/':
//         if (secondNumber === 0) {
//           alert('Cannot divide by zero!');
//           return;
//         }
//         result = firstNumber / secondNumber;
//         break;
//       default:
//         break;
//     }

//     this.setState({ result, operator });
//   };

//   render() {
//     const { firstNumber, secondNumber, result, operator } = this.state;

//     return (
//       <div className="calculator">
//         <h1>Calculator</h1>
//         <div className="input-fields">
//           <input
//             type="number"
//             name="firstNumber"
//             value={firstNumber}
//             onChange={this.handleChange}
//             placeholder="First Number"
//           />
//           <select name="operator" value={operator} onChange={this.handleChange}>
//             <option value="+">+</option>
//             <option value="-">-</option>
//             <option value="*">*</option>
//             <option value="/">/</option>
//           </select>
//           <input
//             type="number"
//             name="secondNumber"
//             value={secondNumber}
//             onChange={this.handleChange}
//             placeholder="Second Number"
//           />
//         </div>
//         <button onClick={() => this.handleCalculate('+')}>+</button>
//         <button onClick={() => this.handleCalculate('-')}>-</button>
//         <button onClick={() => this.handleCalculate('*')}>*</button>
//         <button onClick={() => this.handleCalculate('/')}>/</button>
//         <div className="result">
//           <h2>Result: {result}</h2>
//         </div>
//       </div>
//     );
//   }
// }

// export default Calculation;

// bai 3
// import React, { Component } from 'react';

// class UserInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         fullName: 'Nguyễn Văn A',
//         gender: 'Nam',
//         dateOfBirth: '06/03/2024',
//         email: 'nva@gmail.com',
//         address: 'Thanh Xuân, Hà Nội',
//       },
//     };
//   }

//   render() {
//     const { user } = this.state;

//     return (
//       <div className="user-info">
//         <h2>Thông tin cá nhân</h2>
//         <div className="user-details">
//           <p>Họ và tên: {user.fullName}</p>
//           <p>Giới tính: {user.gender}</p>
//           <p>Ngày sinh: {user.dateOfBirth}</p>
//           <p>Email: {user.email}</p>
//           <p>Địa chỉ: {user.address}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserInfo;

//bai 4
// import React from 'react';

// const ColorBox = ({ color }) => {
//   const styles = {
//     width: 200,
//     height: 200,
//     backgroundColor: color,
//   };

//   return (
//     <div style={styles}>
//     
//     </div>
//   );
// };

// export default ColorBox;

//bai 5

// import React from 'react';

// const ColorBox = ({ color }) => {
//   const styles = {
//     width: 200,
//     height: 200,
//     backgroundColor: color,
//   };

//   return (
//     <div style={styles}>
//       <p>{color}</p>
//     </div>
//   );
// };

// export default ColorBox;

//bai 6
// import React from 'react';

// const formatName = (user) => {
//   return `${user.lastName} ${user.firstName}`;
// };

// function FormatName() {
//   const user = {
//     firstName: 'Nguyễn Văn',
//     lastName: 'Nam',
//   };

//   return (
//     <div className="format-name">
//       <h2>Họ và tên: {formatName(user)}</h2>
//     </div>
//   );
// }

// export default FormatName;

//bai 7