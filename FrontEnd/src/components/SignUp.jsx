import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser, setErrorMessage } from "../redux/features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [signUpDetails, setSignUpDetails] = useState({ firstName: "", lastName: "", mobile: "", email: "", password: "", confirmPassword: "", address: "", landmark: "", city: "", state: "", country: "", pincode: "" });
    const { isLoggedIn, status, errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (isLoggedIn) {
            setSignUpDetails({ firstName: "", lastName: "", mobile: "", email: "", password: "", confirmPassword: "", address: "", landmark: "", city: "", state: "", country: "", pincode: "" });
            navigate("/");
        }
    }, [isLoggedIn])

    const submitHandler = (e) => {
        e.preventDefault();
        if (signUpDetails.password === signUpDetails.confirmPassword) {
            dispatch(signUpUser(signUpDetails));
        }else{
            setErrorMessage("Password and Confirm Password Does Not Match");
        }
    };
    return (
        <div className="bg-primary flex flex-col justify-center w-full px-8 py-2">
            {status === 'rejected' && <div>
                {errorMessage}
            </div>}
            <h1 className="text-6xl text-black font-bold font-[monospace] max-sm:text-4xl">Create a new Account</h1>
            <form
                onSubmit={submitHandler}
                className="w-1/2 grid grid-cols-2 mt-4 self-center gap-4 boxShadow-lg max-sm:w-full"
            >
                <h1 className="col-span-2 text-center text-2xl text-black font-bold font-[monospace] pb-2 border-b-2 border-black">Sign Up</h1>
                <div className="col-span-2 grid grid-cols-2 items-center gap-2">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={signUpDetails.firstName}
                        onChange={changeHandler}
                        className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                        />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={signUpDetails.lastName}
                        onChange={changeHandler}
                        className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                        />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={signUpDetails.email}
                    onChange={changeHandler}
                    className="col-span-2 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                    value={signUpDetails.mobile}
                    onChange={changeHandler}
                    className="col-span-2 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={signUpDetails.password}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1  border-2 border-coral-red"
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    value={signUpDetails.confirmPassword}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1  border-2 border-coral-red"
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    value={signUpDetails.address}
                    onChange={changeHandler}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="text"
                    name="landmark"
                    placeholder="Landmark"
                    required
                    value={signUpDetails.landmark}
                    onChange={changeHandler}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    value={signUpDetails.city}
                    onChange={changeHandler}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    required
                    value={signUpDetails.state}
                    onChange={changeHandler}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    value={signUpDetails.country}
                    onChange={changeHandler}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    required
                    value={signUpDetails.pincode}
                    onChange={changeHandler}
                    className="col-span-1 text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
                />
                <Link to="/login" className="col-span-2 hover:text-blue-400 font-monospace" >Already have an Account</Link>
                <input
                    type="submit"
                    value="SignUp"
                    className="col-span-2 py-1 px-4 rounded-md bg-black text-white"
                />
            </form>
        </div>
    );
}

// function SignUp() {
//     const [signUpDetails, setSignUpDetails] = useState({ firstName: "", lastName: "", mobile: "", email: "", password: "", confirmPassword: "", address: "", landmark: "", city: "", state: "", country: "", pincode: "" });
//     const { isLoggedIn, status, errorMessage } = useSelector((state) => state.user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const changeHandler = (e) => {
//         setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
//     };

//     useEffect(() => {
//         if (isLoggedIn) {
//             setSignUpDetails({ firstName: "", lastName: "", mobile: "", email: "", password: "", confirmPassword: "", address: "", landmark: "", city: "", state: "", country: "", pincode: "" });
//             navigate("/");
//         }
//     }, [isLoggedIn])

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (signUpDetails.password === signUpDetails.confirmPassword) {
//             dispatch(signUpUser(signUpDetails));
//         }else{
//             setErrorMessage("Password and Confirm Password Does Not Match");
//         }
//     };
//     return (
//         <div className="bg-primary flex flex-col justify-center items-center w-full h-screen">
//             {status === 'rejected' && <div>
//                 {errorMessage}
//             </div>}
//             <form
//                 onSubmit={submitHandler}
//                 className="flex flex-col justify-start items-center gap-4 boxShadow-lg"
//             >
//                 <p className="text-2xl">SignUp</p>
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     required
//                     value={signUpDetails.firstName}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     required
//                     value={signUpDetails.lastName}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     required
//                     value={signUpDetails.mobile}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={signUpDetails.email}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={signUpDetails.password}
//                     className="text-center text-coral-red placeholder-coral-red py-1  border-2 border-coral-red"
//                     onChange={changeHandler}
//                 />
//                 <input
//                     type="password"
//                     name="confirmPassword"
//                     placeholder="Confirm Password"
//                     required
//                     value={signUpDetails.confirmPassword}
//                     className="text-center text-coral-red placeholder-coral-red py-1  border-2 border-coral-red"
//                     onChange={changeHandler}
//                 />
//                 <input
//                     type="text"
//                     name="address"
//                     placeholder="Address"
//                     required
//                     value={signUpDetails.address}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="landmark"
//                     placeholder="Landmark"
//                     required
//                     value={signUpDetails.landmark}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     required
//                     value={signUpDetails.city}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="state"
//                     placeholder="State"
//                     required
//                     value={signUpDetails.state}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="country"
//                     placeholder="Country"
//                     required
//                     value={signUpDetails.country}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="text"
//                     name="pincode"
//                     placeholder="Pincode"
//                     required
//                     value={signUpDetails.pincode}
//                     onChange={changeHandler}
//                     className="text-center text-coral-red placeholder-coral-red py-1 border-2 border-coral-red"
//                 />
//                 <input
//                     type="submit"
//                     value="SignUp"
//                     className="border-2 border-coral-red py-1 px-4 rounded-md bg-coral-red text-white"
//                 />
//             </form>
//         </div>
//     );
// }

export default SignUp;
