import { Link } from "react-router-dom";
import "./homepage.styles.css";

const HomePage = () => {
  const pages = [
    { name: "Basic Form", path: "/basic-form" },
    { name: "React Hook Form", path: "/react-hook-form" },
    { name: "Validation", path: "/validation" },
    { name: "Zod Validation", path: "/zod-validation" },
    { name: "Complex Validation", path: "/complex-validation" },
    { name: "Custom Mask", path: "/custom-mask" },
    { name: "React Hook Form Mask", path: "/react-hook-form-mask" },
    { name: "Material UI Form", path: "/material-ui-form" },
    { name: "Performance Optimization", path: "/performance-optimization" },
    { name: "Dynamic Fields", path: "/dynamic-fields" },
    { name: "Form State Management", path: "/form-state-management" },
  ];

  return (
    <div className="container">
      <h1 className="title" onClick={() => (window.location.href = "/")}>
        React Hook Form Kullanımları
      </h1>
      <div className="button-grid">
        {pages.map((page, index) => (
          <Link key={index} className="button" to={page.path}>
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
