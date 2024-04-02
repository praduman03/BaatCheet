const Message = () => {
  const bubbleBgColor = "#724ff9";
  const shakeClass = "animate-shake";

  return (
    <div className={`chat chat-end m-2`}>
      <div
        className={`chat-bubble chat-bubble-primary text-white ${bubbleBgColor} ${shakeClass}`}
      >
        <p>Hello long time no see!</p>
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center pt-2">
        14:23
      </div>
    </div>
  );
};

export default Message;
