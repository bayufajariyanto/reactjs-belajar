import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Monique - Cut the shoulder bodycon dress" category="Dress" />
      <ReviewItems />

    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="product.jpeg" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  } else if (isDiscount === "coming") {
    return (
      <p>Akan ada diskon...</p>
    );
  } else {
    return (
      null
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];

  const listBenefits = benefits.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Price">IDR 225.000</p>
        <p className="Info">
          Cuci dengan tangan secara terpisah
          Jangan cuci mesin
          Jangan pakai pemutih
          Jangan dikeringkan dengan mesin pengering
          Jemur dengan dibalik
          Setrika dengan suhu sedang
          Cuci kering dengan perchoroethylene
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  console.log(`Membeli ${e}`);

}

export default App;
