import React from "react";
import {
  CreditCard,
  Navigation2,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const Logobar = () => {
  return (
    <>
      <div className="bg-red-200 h-auto">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-red-700">
            <div>
              <div>
                <span>
                  {" "}
                  <CreditCard />
                  Scotia Bank Card
                </span>
              </div>
              <div>
                <span>
                  <Navigation2 />
                </span>
                <span>Store Location</span>
              </div>
            </div>
          </div>
          <div className="bg-red-800">Image</div>
          <div className="bg-red-900">
            <div>
              <span>
                <input type="text" />
              </span>

              <span>
                <Search />
              </span>
            </div>
            <div>
              <span>Sign in</span>
              <span>
                <User />
              </span>
            </div>
            <div>
              <span>
                <ShoppingCart />
              </span>
              <span>Bag (0)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logobar;
