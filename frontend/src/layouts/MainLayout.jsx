import Header from "../components/Header";
import TopNavbar from "../components/TopNavbar";
import FooterNav from "../components/FooterNav";

function MainLayout({ children }) {

  return (

    <div className="app-container">

      {/* Header */}

      <Header />

      {/* Navigation */}

      <TopNavbar />

      {/* Main Content */}

      <main className="main-content">

        {children}

      </main>

      {/* Footer */}

      <FooterNav />

    </div>

  );

}

export default MainLayout;