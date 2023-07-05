import React from "react";

function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          className="w-28"
          src="https://www.meliuz.com.br/blog/wp-content/uploads/2020/09/solo3-pdp-p9-club_navy.png.medium.1x-756x1024.png"
          alt="Logo Produto"
        />
        <strong>Preço: R$1000</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 text-white font-medium flex items-center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-2 text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">
          SubTotal: 10000
        </strong>
      </section>

      <p className="font-bold mt-4">Total: 10000</p>
    </div>
  );
}

export default Cart;
