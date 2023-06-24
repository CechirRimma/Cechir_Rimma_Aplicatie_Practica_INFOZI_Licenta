import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-opacity-75 ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://freight.cargo.site/t/original/i/2a0d70f3e45fa18d0533174eced6c97bfdca7fa90dc137cd4ab614e14aa0916d/aliv-fin1-1.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] `}
        >
          Colecția cea mai bună <br /> Pentru decorarea casei voastre
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fff]">
        Realizate de catre maestrii artizani din materiale de cea mai buna calitate: fier sau sticla calita sau laminata si cu finisaje superioare din lemn sau din otel inoxidabil tratat cu straturi de culoare; aceste elemente importante ofera produselor noastre un aspect deosebit.
          <br /> 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[17px]">
                    Cumpără Acum 
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
