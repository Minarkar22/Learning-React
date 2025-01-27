import ProductList from "@/components/ProductList";
import CounterWithReducer from "@/components/reducer/CounterWithReducer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
        <h1 className="text-xl italic">Welcome</h1>
        {/* <ProductList/> */}
        <CounterWithReducer/>
    </div>
  );
}
