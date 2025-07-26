import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["12,999", "11,999", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "299"];
    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["intuitive surface","designed for iPad Pro"],
        ["wireless", "optical orientation"],
        ["Pentatonix (PTX)", "A Cappella Powerhouse from Texas"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;