import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BasicForm from "./pages/BasicForm";
import ReactHookForm from "./pages/ReactHookForm";
import Validation from "./pages/Validation";
import ZodValidation from "./pages/ZodValidation";
import ComplexValidation from "./pages/ComplexValidation";
import CustomMask from "./pages/CustomMask";
import MaterialUIForm from "./pages/MaterialUIForm";
import PerformanceOptimization from "./pages/PerformanceOptimization";
import DynamicFields from "./pages/DynamicFields";
import FormStateManagement from "./pages/FormStateManagement";
import ReactHookFormMask from "./pages/ReactHookFormMask";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="basic-form" element={<BasicForm />} />
          <Route path="react-hook-form" element={<ReactHookForm />} />
          <Route path="validation" element={<Validation />} />
          <Route path="zod-validation" element={<ZodValidation />} />
          <Route path="complex-validation" element={<ComplexValidation />} />
          <Route path="custom-mask" element={<CustomMask />} />
          <Route path="react-hook-form-mask" element={<ReactHookFormMask />} />
          <Route path="material-ui-form" element={<MaterialUIForm />} />
          <Route
            path="performance-optimization"
            element={<PerformanceOptimization />}
          />
          <Route path="dynamic-fields" element={<DynamicFields />} />
          <Route
            path="form-state-management"
            element={<FormStateManagement />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
