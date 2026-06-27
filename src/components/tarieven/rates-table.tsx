type RateRow = { item: string; price: string };

export function RatesTable({ rows }: { rows: readonly RateRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-westeraam-blue">
              <th scope="col" className="px-5 py-4 font-semibold text-white sm:px-6 sm:text-base">
                Onderdeel
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-white sm:px-6 sm:text-base">
                Prijs
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.item} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-4 text-gray-800 sm:px-6 sm:py-5">{row.item}</td>
                <td className="px-5 py-4 font-semibold text-westeraam-orange sm:px-6 sm:py-5">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
