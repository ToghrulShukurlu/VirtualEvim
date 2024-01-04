import "./style.scss";
import { Select } from "antd";

const Banner = ({ bg }) => {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: ` linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),url(${bg})`,
        }}
      >
        <div className="content">
          <h1 style={{ display: "block" }}>Ətraflı baxış</h1>
          <div className="select-group">
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170, margin:'10px' }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 170 }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
