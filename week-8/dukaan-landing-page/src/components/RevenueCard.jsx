const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white-500 rounded shadow-md px-2 py-2">
      <div className="text-grey-700">{title} ?</div>
      <div className="flex justify-between pt-2">
        <div className="font-semibold text-2xl">$ {amount}</div>
        <div className="text-blue-700 underline">
          {orderCount ? (
            <div className="flex">
              <div>{orderCount} order(s)</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
