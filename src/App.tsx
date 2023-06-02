import './App.css'
import { WysiwygEditor } from './features/editor/WysiwygEditor'
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  const image = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAUCAYAAADIpHLKAAAAAXNSR0IArs4c6QAABAhJREFUaEPtWyuPVUEM%2FlaiSTAYsiFBIEiwgOYfgAAUAsEjQSAJj5UIEhIEAgUIBHhCggF%2BABJDMEgSHJZ0c7vp7Z2e03Z6yMLOcXcz09P52q%2BvObuF8QwEBgImAlsDm4HAQMBGYBBkeMdAYAKBQZDhHgMBB0HOAHgK4CKAr8Z6WnMMwKtiRC8BeAngGYDbAH4DoHd9Eu85C%2BBzx3tPALgP4AaAn0E5hwA8BnCtQJ%2B7AB6u5HyZwdurJsk8KrDz7ju8suV5teFywsbaXlEZer9UqQqnKVykjdd8jTMIKXgSwHEAzw2SLEEQNtILYRRNVg95pw7P76A1RMYIQRg42qvJGyUtvfuK0IF%2B3%2BkkCTuWDC5eglDQeALg1kRQ9MhiHRgPkvsawKME0eT72G4UGHc8ihSsobNQwNnzE0kQyg5vATwwSLIEQRjM66sMwQ75Q4FCStMTBUpGpncJglhOFI3arUDAZ%2F2YdCSZATIE2XCGhINZZyAHO5fIalIFwph0jAa1xDH2tmzYWxKEohtFSXpaJPkbBGGjExFkSZUxJpOD0j09Mnr3gMiZqNcBWqSJ6MVBg%2FZkSixyvO1E0JE6VmUhfW4dOCO49KydJMhNAL8mSGIRhA9zakIzq47UClmA95ZZurzpAdHKclGZPTpJPC4kCNLqq0j%2FTO9ARKUyjco17meicjR20Qwdxd5aP0kQKrG%2BryItZxJqTqk%2FoGi%2BRAbRjv8vEETX3FHjyLIv40i6rMk4E2cvsjf3VpnegQcssnzNyNFZqaKHidqF1m9kLt2D0ISKFl0FcG%2F1BiYJ%2FayeYmnj7neCMIBvOksTwjKbiXR9nyGI5TzRrGYNGqJypD49ezOkaGUv%2Bttuv9siCDNJk4Qa52%2BNhjJTYlnN3X4mSCU52CjR0rGFTyVBovpYzhyVw3hkg0YFMTRJd3tMiyAWSbITF%2BsAejpV2aRXRqUlyEH6RR2JS5oWnhX3BVF9rOFJVA6fp3dwUUGUNZ%2BcIogmyekFSiwNcPWYlwHrSdsV5LCmMj168dkyGWRKn8h0zgpo2XMtNRXzEsfVg2hh3JO8B3AkObN3Tw3ELTpfPLWiEd9Iey%2FrLIPNyfFeVs3JofPruX6rmfXIadXMeszrkaP1aQ0fPHI0tnK8zl9deORwRl27qFOH9cjhLCsHIN6%2FpQgiu%2Fve29EW%2BVq3uXLSQ3s0ETxAeUqsOTlTJY2c3MzJkdGePzWpOBcTL0MQ3luhT5W95jKPB2cvGVrrTIJ4U1D1up6USmB96PxGi51kyLEt%2B7%2Fi3DqxeQ9S7fheeVYNO7d%2FLtLM7a%2FoTTwZyqvH0MeHVJXdrbeZ32L51FtmVc8Hd8toNKQeNATklwVrl7fj%2F0EOmiuM84YQ%2BAMjoL8tRA1B2wAAAABJRU5ErkJggg%3D%3D\" data-fr-image-pasted=\"true\" data-mathml=\"<math xmlns='http://www.w3.org/1998/Math/MathML'><mi mathvariant='normal'>ℕ</mi><mo>=</mo><mfenced close='}' open='{'><mrow><mn>0</mn><mo>,</mo><mo>&nbsp;</mo><mn>1</mn><mo>,</mo><mo>&nbsp;</mo><mn>2</mn><mo>,</mo><mo>&nbsp;</mo><mn>3</mn><mo>,</mo><mo>&nbsp;</mo><mn>4</mn><mo>,</mo><mo>&nbsp;</mo><mn>5</mn><mo>,</mo><mo>&nbsp;</mo><mn>6</mn><mo>,</mo><mo>&nbsp;</mo><mn>7</mn><mo>,</mo><mo>&nbsp;</mo><mo>.</mo><mo>.</mo><mo>.</mo></mrow></mfenced></math>\" class=\"Wirisformula fr-fic fr-dib fr-draggable\" role=\"math\" alt=\"straight natural numbers equals open curly brackets 0 comma space 1 comma space 2 comma space 3 comma space 4 comma space 5 comma space 6 comma space 7 comma space... close curly brackets\" style=\"box-sizing: inherit; cursor: pointer; padding: 0px 1px; user-select: none; position: relative; max-width: calc(100% - 10px); display: inline-block; float: none; vertical-align: bottom; margin-left: 5px; margin-right: 5px; height: 20px; width: 200px;\">";

  return (
    <div className="App">
      {/* <Counter /> */}
      
       <ThemeProvider theme={theme}>
        <WysiwygEditor readOnly={false} value={image} />
       </ThemeProvider>
    </div>
  )
}

export default App
