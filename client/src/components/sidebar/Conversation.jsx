import "./sidebar.css";
const Conversation = () => {
  return (
    <div className="flex justify-between items-center w-11/12">
      <div className="flex items-center">
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nvlmwygLKlmp7aC6rEIPSgNEcTLbi1TV5P1gVU-LSwImRRp9CzMZywB1PPC9JjeFWNU"
          alt=""
        />
        <h2> Sam Edwards</h2>
      </div>
      <span>🎅</span>
    </div>
  );
};

export default Conversation;
