import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Login from "./paginas/Login";
import { LandinPage } from "./paginas/LandinPage";
import { Register } from "./paginas/Register";
import { Forgot } from "./paginas/Forgot";
import { NotFound } from "./paginas/NotFound";
import Dashboard from "./layout/Dashboard";
import Gestion1 from "./paginas/Gestion1";
import Gestion2 from "./paginas/Gestion2";
import Gestion3 from "./paginas/Gestion3";
import Visualizar from "./paginas/Visualizar";
import Crear1 from "./paginas/Crear1";
import Crear2 from "./paginas/crear2";
import Crear3 from "./paginas/crear3";
import Actualizar from "./paginas/Actualizar";
import Perfil from "./paginas/Perfil";
import Inicio from "./paginas/Inicio"
import { Confirmar } from "./paginas/Confirmar";
import Restablecer from "./paginas/Restablecer";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./routes/PrivateRoute";
import CambiarContra from "./paginas/CambiarContra";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<LandinPage />} />

            <Route path="/" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot/:id" element={<Forgot />} />
              <Route path="confirmar/:token" element={<Confirmar />} />
              <Route
                path="recuperar-password/:token"
                element={<Restablecer />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route
              path="dashboard/*"
              element={
                <PrivateRoute>
                  <Routes>
                    <Route element={<Dashboard />}>
                      <Route index element={<Inicio />} />
                      <Route path="Perfil" element={<Perfil />} />
                      <Route path="Gestion1" element={<Gestion1 />} />
                      <Route path="Gestion2" element={<Gestion2 />} />
                      <Route path="Gestion3" element={<Gestion3 />} />
                      <Route path="visualizar/:id" element={<Visualizar />} />
                      <Route path="crear1" element={<Crear1 />} />
                      <Route path="Crear2" element={<Crear2 />} />
                      <Route path="Crear3" element={<Crear3 />} />
                      <Route path="actualizar/:id" element={<Actualizar />} />
                      <Route path="CambiarContra" element={<CambiarContra />} />
                    </Route>
                  </Routes>
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
