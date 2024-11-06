import PropTypes from "prop-types";
import { usepopupSessionshook } from "../../hooks/use_popupSessions_hook";
import Logo from "../../../../../assets/logopopup.png"; 

export const PopupInitSession = ({ showModal, setShowModal, setShowRegisterModal }) => {
  const {
    handleRegisterClick,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = usepopupSessionshook(showModal, setShowModal);

  return (
    <>
      {showModal && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="p-6 shadow-lg bg-white dark:bg-gray-900 rounded-lg duration-200 w-[400px] relative">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="text-center">
              <img src={Logo} alt="Logo" className="w-20 mx-auto mb-4" />
              <h2 className="mb-6 text-3xl font-bold">Iniciar Sesion</h2>
            </div>
            <form className="space-y-4">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Id:
                </label>
                <input
                  name="email"
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                  value={values.email}
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 pl-4 mb-2"
                  required
                />
                <span className="absolute right-3 top-9 text-orange-500">
                  📧 {/* Add an email icon here */}
                </span>
                {errors && errors.email && touched.email && (
                  <p className="text-xs text-red-600 font-semibold text-center">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password:
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 pl-4 mb-4"
                  required
                />
                <span className="absolute right-3 top-9 text-orange-500">
                  🔒 {/* Add a lock icon here */}
                </span>
                {errors && errors.password && touched.password && (
                  <p className="text-xs text-red-600 font-semibold text-center">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-orange-600 hover:text-orange-500"
                >
                  Has olvidado tu contraseña?
                </a>
              </div>
              <button
                type="button"
                className="block w-full px-4 py-2 mt-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 hover:scale-105 transition-transform duration-200"
                onClick={handleSubmit}
              >
                Iniciar sesion 
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 mt-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-100 hover:scale-105 transition-transform duration-200"
                onClick={() => {
                  setShowRegisterModal(true);
                  setShowModal(false);
                }}
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

PopupInitSession.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowRegisterModal: PropTypes.func.isRequired,
};
