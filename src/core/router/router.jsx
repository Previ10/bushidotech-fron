import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Homepage } from '../../Features/products/Presentation/Pages/homepage';
import { Layout } from '../utils/layout';
import { ProcesorsPage } from '../../Features/products/Presentation/Pages/Procesors_page';
import { PlacavideoPage } from '../../Features/products/Presentation/Pages/Placavideos_page';
import { MotherboardsPage } from '../../Features/products/Presentation/Pages/Motherboards_page';
import { PerifericosPage } from '../../Features/products/Presentation/Pages/Perifericos_page';
import ProductDetail from "../../Features/products/Presentation/procedetallado/ProductDetail";
import ProductPlaca from "../../Features/products/Presentation/placadetallado/ProductPlaca";
import ProductMother from "../../Features/products/Presentation/motherdetallado/ProductMother";
import ProductPeriferico from "../../Features/products/Presentation/perifericodetallado/ProductPeriferico";
import TermsAndConditions from "../../Features/products/Presentation/Pages/TermsAndConditions";
import { CreateProductPage } from '../../Features/products/Presentation/Pages/createProduct_page';
import { RouterGuard } from './router_guard';


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path='/dashboard' element={<Homepage />} />
                    <Route path='/procesadores' element={<ProcesorsPage />} />
                    <Route path='/placadevideo' element={<PlacavideoPage />} />
                    <Route path='/motherboards' element={<MotherboardsPage />} />
                    <Route path='/perifericos' element={<PerifericosPage />} />
                    <Route path="/terms-conditions" element={<TermsAndConditions />} />

                    <Route path="/create-product" element={
                        <RouterGuard>
                            <CreateProductPage />
                        </RouterGuard>
                    } />

                    {/* Ruta para la página de favoritos */}
                

                    {/* Rutas para los detalles de productos */}
                    <Route path="/procesadores/:id" element={<ProductDetail />} />
                    <Route path="/placavideo/:id" element={<ProductPlaca />} />
                    <Route path="/motherboards/:id" element={<ProductMother />} />
                    <Route path="/perifericos/:id" element={<ProductPeriferico />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
