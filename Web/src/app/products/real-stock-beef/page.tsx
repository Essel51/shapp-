// File: /src/app/products/real-stock-beef/page.tsx

export default function ProductDetail() {
  // Mock data from your CSV
  const product = {
    item_name: "Campbells Real Stock Beef 1L",
    category: "Stocks/Soups",
    store: "Pak'nSave",
    brand: "Campbells",
    pack_size: "1L",
    price: 4.99,
    unit_price: 0.00499,
    last_updated: "30/06/2026",
    notes: "Receipt import",
    active: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <button className="text-gray-700 text-xl">←</button>
        <h1 className="text-xl font-semibold text-gray-900">
          Product Details
        </h1>
        <button className="text-gray-700 text-xl">⚙</button>
      </header>

      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {product.item_name}
        </h2>

        <div className="text-gray-700 space-y-1">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Store:</strong> {product.store}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Pack Size:</strong> {product.pack_size}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Unit Price:</strong> ${product.unit_price}</p>
          <p><strong>Last Updated:</strong> {product.last_updated}</p>
          <p><strong>Active:</strong> {product.active ? "Yes" : "No"}</p>
        </div>
      </div>

      {/* Editable Fields */}
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            defaultValue={product.item_name}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Category</label>
          <input
            type="text"
            defaultValue={product.category}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Store</label>
          <input
            type="text"
            defaultValue={product.store}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Brand</label>
          <input
            type="text"
            defaultValue={product.brand}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Pack Size</label>
          <input
            type="text"
            defaultValue={product.pack_size}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            defaultValue={product.price}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Unit Price</label>
          <input
            type="number"
            step="0.00001"
            defaultValue={product.unit_price}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Notes</label>
          <textarea
            defaultValue={product.notes}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-gray-700">Active</label>
          <input type="checkbox" defaultChecked={product.active} />
        </div>

        {/* Save Button */}
        <button className="w-full bg-green-600 text-white p-3 rounded-lg text-lg font-semibold">
          Save Changes
        </button>
      </form>
    </div>
  );
}

