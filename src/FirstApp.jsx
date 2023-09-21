// function getMessage(saludo) {
//   return `Hola , ${saludo}`
// }

import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  return (
    //esto es un fragmento <>

    <>
      <h1>{title}</h1>
      {/* <h1>{JSON.stringify(getMessage('john'))}</h1> */}
      {/* <code>{JSON.stringify(newMessage) }</code> */}
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "there is no subtitle",
  title: "there is no title",
};


//organizar de forma acendente 
//Ctrl + Shift + P
//Sort Lines Ascending