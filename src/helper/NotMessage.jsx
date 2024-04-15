/* eslint-disable react/prop-types */
const NotMessage = ({ noti }) => {
  console.log(noti.data);
  return (
    <div className="absolute top-14 z-30 w-52 h-40 bg-gray-600 px-2 py-2">
      <div>
        {noti
          ? noti?.data?.map((noty) => (
              <button
                key={noty._id}
                className="border-2 w-full bg-purple-500 px-2 py-1 text-red-800"
              >
                {noty.subject}
              </button>
            ))
          : "Hello"}
      </div>
    </div>
  );
};

export default NotMessage;
