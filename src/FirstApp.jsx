// function getMessage(saludo) {
//   return `Hola , ${saludo}`
// }

export const FirstApp = ({title}) => {
  
  if (!title) {
    throw new Error("El titulo no existe");
  }
  return (
    //esto es un fragmento <>

    <>
      <h1>{title}</h1>
      {/* <h1>{JSON.stringify(getMessage('john'))}</h1> */}
      {/* <code>{JSON.stringify(newMessage) }</code> */}
      <p>Cotamo</p>
    </>
  );
};
