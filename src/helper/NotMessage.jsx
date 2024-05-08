import { isOpenFunc } from "./IsOpenFunc";

/* eslint-disable react/prop-types */
const NotMessage = ({ noti }) => {
  // const navigate = useNavigate();
  // console.log(noti.data);
  const handleIsOpen = async (id) => {
    isOpenFunc(id);
    // navigate(`/message/${id}`);
  };
  return (
    <div className="absolute top-14 z-30 w-52 h-40 bg-gray-600 px-2 py-2">
      <ul>
        {noti
          ? noti?.data?.map(
              (noty) =>
                !noty.isOpen && (
                  <li key={noty._id}>
                    <button
                      onClick={() => handleIsOpen(noty._id)}
                      className="border-2 w-full bg-purple-500 py-1 text-red-800"
                    >
                      {noty?.title?.slice(0, 20)}
                    </button>
                  </li>
                )
            )
          : "0"}
      </ul>
    </div>
  );
};

export default NotMessage;
