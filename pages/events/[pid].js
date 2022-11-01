import { useRouter } from "next/router";
import { filtereList, charitySiteList } from "../../List/charityList";
import { useEffect, useState } from "react";
import Image from "next/image";
import Cards from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../components/card/cardUtils";

export default function Charity() {
  // Sub backwards to gert valid number
  // make persons chose charity organizations that they want to send money
  const router = useRouter();
  const [filterListState, setFilteredListState] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [issuer, setIssuer] = useState("");
  const [formData, setFormData] = useState(null);
  const [form, setForm] = useState(null);
  const [chAmount, setChAmount] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.name === "name") {
      setName(target.value);
    } else if (focus === "amount") {
      // const newValue = target.value.slice(2);
      // const dollarAmount = "$" + newValue;
      if (!isNaN(target.value)) setChAmount(target.value);
    }

    // setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setFormData(formData);
    form.reset();
  };

  useEffect(() => {
    const filteredList = filtereList(charitySiteList, router.query.pid);
    if (filteredList !== undefined) {
      setFilteredListState(filteredList[0]);
      // console.log(filteredList, router.query.pid);
    }
  }, [router.query.pid]);
  // console.log(filterListState, "fsdfd");
  if (filterListState === undefined) {
    return <div>404 Page not found</div>;
  } else if (filterListState.img !== undefined) {
    return (
      <div className="main-ch-div">
        <div className="ch-title">{filterListState.title}</div>
        <div className="img-ch">
          <Image
            // src="/netflix.jpg"
            layout="responsive"
            src={filterListState.img}
            height={40}
            width={70}
            // quality={100}
            priority
          />
        </div>
        <div className="img-ch para">{filterListState.body}</div>
        <br />
        <br />
        <div>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </div>

        <form
          className="cardForm"
          ref={(c) => setForm(c)}
          onSubmit={handleSubmit}
        >
          <input
            type="tel"
            name="amount"
            placeholder="Amount To Donate $USD"
            pattern="[\d ]"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={chAmount}
            className="cardNumber inputCss"
          />
          <select
            className={"select"}
            // value={betLabel}
            // onChange={onSetBetLabel}
          >
            <option value="OHMATDYT">OHMATDYT</option>
            <option value="International Rescue Commitee">
              International Rescue Commitee
            </option>
            <option value="UNICEF">UNICEF</option>
          </select>
          <div className="form-group">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="cardNumber inputCss"
            />
            <small>E.g.: 49..., 51..., 36..., 37...</small>
          </div>

          <input
            name="name"
            component="input"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="inputCss"
          />
          <div className="validExpire">
            <input
              type="tel"
              name="expiry"
              className="form-control inputCss"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              className="form-control inputCss"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-blue btn-block">PAY</button>
          </div>
        </form>
      </div>
    );
  }
}
