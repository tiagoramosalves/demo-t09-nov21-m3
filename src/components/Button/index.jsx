import "./styles.css";
// children é a palavra reservada para acessar o conteúdo
const ButtonComp = ({ children }) => {
  return (
    <>
      <button className="button-1">{children}</button>

      <h2>Texto com o botão</h2>
    </>
  );
};

export default ButtonComp;