import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then(() => {
        e.target.email.value = "";
        e.target.password.value = "";
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }

        toast.success("User logged in successfully");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="container px-2 mx-auto">
      <Toaster />
      <div className="hero">
        <div className="flex-col md:flex-row-reverse hero-content">
          <div className="">
            <img
              className="hidden md:block lg:h-[600px]"
              src="/login.jpg"
              alt=""
            />
          </div>
          <div className="flex-shrink-0 w-full md:w-[400px] border-2 shadow-xl border-yellow-500 card">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="w-full input input-bordered"
                    required
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute text-2xl top-3 right-3"
                    ></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute text-2xl top-3 right-3"
                    ></AiOutlineEye>
                  )}
                </div>
              </div>
              <div className="mt-6 form-control">
                <button className="bg-yellow-500 hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-none">
                  LOGIN
                </button>
                <button
                  type="button"
                  className="h-[40px] mt-4 w-full text-center border border-black font-medium text-black rounded-3xl"
                  onClick={handleGoogleSignIn}
                >
                  Sign In With Google
                </button>
                <p className="mt-4 font-medium text-center text-gray-600">
                  New to this site?{" "}
                  <Link to="/register">
                    <span className="text-blue-700">Register</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
