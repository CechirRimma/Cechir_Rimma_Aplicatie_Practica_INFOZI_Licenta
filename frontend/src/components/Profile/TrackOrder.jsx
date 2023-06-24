import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Procesare" ? (
          <h1 className="text-[20px]">Comanda dumneavoastră este în curs de procesare în magazin.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
           Comanda dumneavoastră este în drum către partenerul de livrare.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Comanda dumneavoastră este în drum cu partenerul nostru de livrare.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Comanda dumneavoastră se află în orașul dumneavoastră. Curierul nostru o va livra.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
          Curierul nostru se pregătește să livreze comanda dumneavoastră.
          </h1>
        ) : data?.status === "Livrare" ? (
          <h1 className="text-[20px]">Comanda dumneavoastră a fost livrată!</h1>
        ) : data?.status === "Procesare returnare" ? (
          <h1 className="text-[20px]">Rambursarea dumneavoastră este în curs de procesare!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Rambursarea dumneavoastră a fost efectuată cu succes!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
