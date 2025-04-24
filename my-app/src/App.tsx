import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Main content goes here */}
        <h1 className="text-center text-2xl">Welcome to My App</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
