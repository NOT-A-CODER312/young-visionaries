import { useRouter } from "next/router";
import { filtereList, charitySiteList } from "../../List/charityList";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Charity() {
  // Sub backwards to gert valid number
  // make persons chose charity organizations that they want to send money
  const router = useRouter();
  const [filterListState, setFilteredListState] = useState("");
  const [form, setForm] = useState(null);

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
      </div>
    );
  }
}
