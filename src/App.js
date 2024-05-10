import Footer from './components/Footer'
import Products from './components/Products'
import Main from './components/Main'

const App = () => {

  const uname = 'Alice'

  return (
    <>
      <Main uname={uname} />
      <Products />
      <Footer />
    </>
  )
}

export default App


// Step 1 - function definition
// function App() {

//   return (
//     <div>
//       <h3>Hello Customer - JSX</h3>
//       <h4>Nice to have you back...</h4>
//       <p>we have new products for you</p>
//       <button>Read More...</button>
//     </div>
//   )
// }

// Step 2 - fat arrow
// const App = () => {

//   return (
//     <div>
//       <h3>Hello Customer - JSX</h3>
//       <h4>Nice to have you back...</h4>
//       <p>we have new products for you</p>
//       <button>Read More...</button>
//     </div>
//   )
// }

// Step 3 - using fragments
// const App = () => {

//   return (
//     <>
//       <h3>Hello Customer - JSX</h3>
//       <h4>Nice to have you back...</h4>
//       <p>we have new products for you</p>
//       <button>Read More...</button>
//     </>
//   )
// }

// Step 4 - using a new component
// const Main = () => {
//   return (
//     <>
//       <h3>Hello Customer - JSX</h3>
//       <h4>Nice to have you back...</h4>
//       <p>we have new products for you</p>
//       <button>Read More...</button>
//     </>
//   )
// }

// Step 5 - move to an external file
// const App = () => {

//   return (
//   //  <Main></Main>
//   <Main />
//   )
// }