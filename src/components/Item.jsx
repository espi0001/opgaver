import { IoCloseOutline } from "react-icons/io5";
const Item = () => {
  return (
    <div>
      <div>
        <header>
          <button className="flex items-center justify-between text-black">
            <span>Is it sunny in DK?</span>
            <span>
              <IoCloseOutline className="text-black" />
            </span>
          </button>
        </header>
        <section>
          <p className="text-black">YES</p>
        </section>
      </div>
    </div>
  );
};

export default Item;
