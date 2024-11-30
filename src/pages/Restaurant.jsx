import RestaurantDetail from "../componenets/RestaurantDetail";
import RestaurantProducts from "../componenets/RestaurantProducts";

const Restaurant = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>
      <div className="container">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default Restaurant;
