import Children from "./Children";
export default function Parent() {
    const getData = (data) => {
        console.log(data);
      };
    
    return <Children sendData={getData} />;
}
