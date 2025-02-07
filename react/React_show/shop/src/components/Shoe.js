import { useNavigate } from "react-router-dom";

function Shoe({shoes}) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        {shoes.map((item, index) => {
          const i = index + 1;
          return (
            <div className="col-md-4" key={index}>
              <img
                src={`https://codingapple1.github.io/shop/shoes${i}.jpg`}
                width="80%"
                onClick={() => {
                  console.log("home");
                  navigate(`/detail/${item.id}`);
                }}
              />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shoe;
