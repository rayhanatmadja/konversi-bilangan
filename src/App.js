import React from "react";

const App = () => {
  return (
    <div class="w-full max-w-xs">
      <div>
        <h1>Konversi Bilangan</h1>
      </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="input">
            Input Bilangan
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input"
            type="number"
            placeholder="Input bilangan..."
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <select>
            <option>Biner</option>
            <option>Oktal</option>
            <option>Desimal</option>
            <option>HexaDesimal</option>
          </select>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Hitung
          </button>
        </div>
        <div>
          <h2>Hasil : </h2>
        </div>
      </form>
    </div>
  );
};

export default App;
