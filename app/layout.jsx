import "@styles/globals.css";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      {/* App starts here */}
      <main className="app">
        <Navbar />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
