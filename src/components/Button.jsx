const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 mx-2 bg-slate-100 font-semibold rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
