import TextUpdater from './TextUpdater'
import FocusBlurExample from './FocusBlurExample'
import Binding from './Binding'
import ProductCard from './ProductCard'
import MouseMessage from './MouseMessage'
export default function App(){
  return (
    <>
    {/* <Greetings ></Greetings>  */}
    <FocusBlurExample />
    <TextUpdater />
    <MouseMessage></MouseMessage>
    <Binding></Binding>
    <ProductCard></ProductCard>
    </>
  )
}