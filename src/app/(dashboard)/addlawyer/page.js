"use client"
import { UploadPicture } from '@/utils/uploadPicture';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import Swal from 'sweetalert2';
const AddLawyerPage = () => {
    const {handleSubmit,register,reset,watch,formState: { errors },} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [experienceQn,setExperienceQn] = useState(1);
    const institute_1 = watch("instituteName_1");
    const institute_2 = watch("instituteName_2");
    const institute_3 = watch("instituteName_3");
    const experienceInfo = []
    const onSubmit = async (data) =>{
      setIsSubmitting(true)
      // const imageUrl = UploadPicture(data.image[0], data.name);
      UploadPicture(data.image[0], data.name)
      .then(imageUrl => {
         console.log(imageUrl);

         if(imageUrl?.data?.data?.display_url){
            const lawyerInfo = {
               name: data?.name,
               image: imageUrl?.data?.data?.display_url,
               designation: data?.designation,
               department: data?.department,
               experienceyear: data?.experienceyear,
               practiceArea: data?.practiceArea,
               contacts: {
                  address: data?.address,
                  email: data?.email,
                  phone: data?.phone
               },
               description: data?.description,
               languages: data?.languages,
               socialmedia: { 
                  facebook: data?.facebook ? data?.facebook : null,
                  linkedin: data?.linkedin ? data?.linkedin : null,
                  twitter: data?.twitter ? data?.twitter : null,
                  instagram: data?.instagram ? data?.instagram : null
               },
               experience: experienceInfo
            }
            if(data?.instituteName_1){
               experienceInfo.push({institutename: data?.instituteName_1, designation: data?.DG_1, department: data?.DP_1, startdate: data?.startdate_1, enddate: data?.enddate_1})
            }
            if(data?.instituteName_2){
               experienceInfo.push({institutename: data?.instituteName_2, designation: data?.DG_2, department: data?.DP_2, startdate: data?.startdate_2, enddate: data?.enddate_2})
            }
            if(data?.instituteName_3){
               experienceInfo.push({institutename: data?.instituteName_3, designation: data?.DG_3, department: data?.DP_3, startdate: data?.startdate_3, enddate: data?.enddate_3})
            }
            axios.post('/api/lawyers',lawyerInfo)
            .then(res => {
               if(res?.data){
                  setIsSubmitting(false);
                  reset();
                  Swal.fire({
                     icon: 'success',
                     title: 'Lawyer add successful',
                     showConfirmButton: false,
                     timer: 1500
                   })
               }
            })
         }
      })
    }
    const addexperience = () => {
      setExperienceQn(experienceQn+1)
    }
   
    return (
         <div className="w-full max-w-[700px] p-4 mx-auto">
			   <h2 className="mb-5 text-3xl font-extrabold">Add a New Lawyer</h2>

            <form onSubmit={handleSubmit(onSubmit)}  className="mt-6" >
               <label
                     htmlFor=""
                     className="block mb-5 text-xl rounded-xl rounded-br-none border-[#225559] border-b-2 font-semibold text-white"
                  >
                     <span className='bg-[#225559] py-1 rounded-xl rounded-br-none px-7 block w-fit'>Personal information*</span>
               </label>
               <div className="border-2 border-[#225559] p-5 rounded-lg">
                  <div className="mb-6">
                     <label htmlFor="name" className="block mb-1 text-[14px] font-semibold" >Lawyer Name* </label>
                     <input
                        {...register("name", {
                           required: "Name is required",
                        })}
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.name
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.name.message}
                        </p>
                     )}
                  </div>

                  <div className="mb-6">
                     <label htmlFor="image" className="block mb-1 text-[14px] font-semibold" > Lawyer Image* </label>
                     <input
                        {...register("image", {
                           required: "Lawyer Image is required",
                        })}
                        type="file"
                        id="image"
                        placeholder="Enter your name"
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.image
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.image && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.image.message}
                        </p>
                     )}
                  </div>

                  <div className="mb-6">
                     <label
                        htmlFor="department"
                        className="block mb-1 text-[14px] font-semibold"
                     >
                        Department*
                     </label>
                     <input
                        {...register("department", {
                           required: "Department is required"
                        })}
                        type="text"
                        id="department"
                        placeholder="Enter Department Name..."
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.department
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.department && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.department.message}
                        </p>
                     )}
                  </div>

                  <div className="mb-6">
                     <label
                        htmlFor="designation"
                        className="block mb-1 text-[14px] font-semibold"
                     >
                        Designation*
                     </label>
                     <input
                        {...register("designation", {
                           required: "Designation is required"
                        })}
                        type="text"
                        id="designation"
                        placeholder="Enter Lawyer Designation..."
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.designation
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.designation && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.designation.message}
                        </p>
                     )}
                  </div>

                  <div className="mb-6">
                     <label
                        htmlFor="languages"
                        className="block mb-1 text-[14px] font-semibold"
                     >
                        Languages*
                     </label>
                     <input
                        {...register("languages", {
                           required: "This filed is required"
                        })}
                        type="text"
                        id="languages"
                        placeholder="Enter Languages name..."
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.languages
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.languages && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.languages.message}
                        </p>
                     )}
                  </div>

                  <div className="mb-6">
                     <label
                        htmlFor="practiceArea"
                        className="block mb-1 text-[14px] font-semibold"
                     >
                        Practice Area*
                     </label>
                     <input
                        {...register("practiceArea", {
                           required: "PracticeArea is required"
                        })}
                        type="text"
                        id="designation"
                        placeholder="Enter Lawyer Practice Area..."
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.practiceArea
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.practiceArea && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.practiceArea.message}
                        </p>
                     )}
                  </div>

                  <div className="mb-6">
                     <label
                        htmlFor="experience"
                        className="block mb-1 text-[14px] font-semibold"
                     >
                        Experience*
                     </label>
                     <input
                        {...register("experienceyear", {
                           required: "This filed is required",
                           pattern: {
                              value: /^[0-9]/,
                              message: "Invalid Year",
                           }
                        })}
                        type="number"
                        id="designation"
                        placeholder="Enter Year..."
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.experience
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     />
                     {errors.experience && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.experience.message}
                        </p>
                     )}
                  </div>
                  
                  <div className="">
                     <label
                        htmlFor="Message"
                        className="block mb-1 text-[14px] font-semibold"
                     >
                        Lawyer Abouts*
                     </label>
                     <textarea
                        {...register("description", {
                           required: "This field is required",
                        })}
                        id="description"
                        rows={4}
                        placeholder="Enter Lawyer short Bio...."
                        className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                           errors.description
                              ? "border-red-500"
                              : "focus:border-[#35878bb6]"
                        }`}
                     ></textarea>
                     {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.description.message}
                        </p>
                     )}
                  </div>
               </div> 

               <label
                     htmlFor=""
                     className="block mt-7 mb-5 text-xl rounded-xl rounded-br-none border-[#225559] border-b-2 font-semibold text-white"
                  >
                     <span className='bg-[#225559] py-1 rounded-xl rounded-br-none px-7 block w-fit'>Contact*</span>
               </label>
               <div className="border-2 border-[#225559] p-5 rounded-lg">
                     <div className="mb-6">
                        <label htmlFor="address" className="block mb-1 text-[14px] font-semibold" >Lawyer Address* </label>
                        <input
                           {...register("address", {
                                 required: "Address is required"
                           })}
                           type="text"
                           id="address"
                           placeholder="Enter address.."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.address
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.address && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.address.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-6">
                        <label htmlFor="email" className="block mb-1 text-[14px] font-semibold" >Lawyer Email:* </label>
                        <input
                           {...register("email", {
                                 required: "Email is required",
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                 },
                           })}
                           type="text"
                           id="email"
                           placeholder="Enter Email ..."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.email
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.email && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.email.message}
                           </p>
                        )}
                     </div>
                     <div className="">
                        <label htmlFor="phone" className="block mb-1 text-[14px] font-semibold" > Phone* </label>
                        <input
                           {...register("phone", {
                                 required: "Phone is required"
                           })}
                           type="text"
                           id="phone"
                           placeholder="Enter Number ..."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.phone
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.phone && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.phone.message}
                           </p>
                        )}
                     </div>
               </div>
               
               <label
                     htmlFor=""
                     className="block mt-7 mb-5 text-xl rounded-xl rounded-br-none border-[#225559] border-b-2 font-semibold text-white"
                  >
                     <span className='bg-[#225559] py-1 rounded-xl rounded-br-none px-7 block w-fit'>Public Profiles.</span>
               </label>
               <div className=" border-2 border-[#225559] p-5 rounded-lg">
                     <div className="mb-6">
                        <label htmlFor="facebook" className="block mb-1 text-[14px] font-semibold" >Facebook: </label>
                        <input
                           {...register("facebook", {
                                 pattern: {
                                    value: /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i,
                                    message: "Invalid facebook link address",
                                 },
                           })}
                           type="text"
                           id="facebook"
                           placeholder="Enter Profiles Link (optional).."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.facebook
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.facebook && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.facebook.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-6">
                        <label htmlFor="email" className="block mb-1 text-[14px] font-semibold" >Linkedin: </label>
                        <input
                           {...register("linkedin", {
                                 pattern: {
                                    value: /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm,
                                    message: "Invalid linkedin link",
                                 },
                           })}
                           type="text"
                           id="linkedin"
                           placeholder="Enter Profiles Link (optional) .."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.linkedin
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.linkedin && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.linkedin.message}
                           </p>
                        )}
                     </div>
                     <div className="mb-6">
                        <label htmlFor="phone" className="block mb-1 text-[14px] font-semibold" > Twitter:</label>
                        <input
                           {...register("twitter", {
                                 pattern: {
                                    value: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
                                    message: "Invalid twitter link ",
                                 },
                           })}
                           type="text"
                           id="twitter"
                           placeholder="Enter Profiles Link (optional).."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.twitter
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.twitter && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.twitter.message}
                           </p>
                        )}
                     </div>
                     <div className="">
                        <label htmlFor="phone" className="block mb-1 text-[14px] font-semibold" >Instagram:</label>
                        <input
                           {...register("instagram", {
                                 pattern: {
                                    value: /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/im,
                                    message: "Invalid instagram link",
                                 },
                           })}
                           type="text"
                           id="twitter"
                           placeholder="Enter Profiles Link (optional).."
                           className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.instagram
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                           }`}
                        />
                        {errors.instagram && (
                           <p className="text-red-500 text-sm mt-1">
                                 {errors.instagram.message}
                           </p>
                        )}
                     </div>
               </div>

               <label
                     htmlFor="practiceArea"
                     className="block mb-5 mt-7 text-xl rounded-xl rounded-br-none border-[#225559] border-b-2 font-semibold text-white"
                  >
                     <span className='bg-[#225559] py-1 rounded-xl rounded-br-none px-7 block w-fit'>Experience</span>
               </label>

{(experienceQn >= 1) &&                      
               <div className=" border-2 border-[#225559] p-5 rounded-lg relative ex_1">
                  <div className={`child absolute top-1 gap-4 bg-[#225559] p-2 text-white rounded-lg right-1 `}>
                     <span className={`cursor-pointer ${experienceQn > 1 && "hidden"}`} onClick={addexperience}><FaPlus className='text-xl font-bold '/></span>
                     {/* <span className={`cursor-pointer ${experienceQn > 1 && "hidden"}`} onClick={() => clearExperience_1}><FaTrash className='text-xl font-bold cursor-pointer'/></span> */}
                  </div>
                  
                  <div className="mb-6">
                        <label htmlFor="instituteName_1" className="block mb-1 text-[14px] font-semibold" >Institute Name:* </label>
                        <input
                              {...register("instituteName_1")}
                              type="text"
                              id="instituteName_1"
                              placeholder="Enter Institute Name..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.instituteName_1
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <div className="mb-6">
                        <label htmlFor="DG_1" className="block mb-1 text-[14px] font-semibold" >Designation:* </label>
                        <input
                              {...register("DG_1")}
                              type="text"
                              required = {institute_1 ? true : false}
                              id="DG_1"
                              placeholder="Enter designation..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.DG_1
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                     <div className="mb-6">
                        <label htmlFor="DP_1" className="block mb-1 text-[14px] font-semibold" >Department:* </label>
                        <input
                              {...register("DP_1")}
                              type="text"
                              id="DP_1"
                              required = {institute_1 ? true : false}
                              placeholder="Enter Email ..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.DP_1
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                  </div>  

                  <div className="grid grid-cols-2 gap-8">
                     <div className="">
                        <label htmlFor="startdate_1" className="block mb-1 text-[14px] font-semibold" > Start Date: </label>
                        <input
                              {...register("startdate_1",)}
                              type="date"
                              id="startdate_1_1"
                              required = {institute_1 ? true : false}
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.startdate_1_1
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                     <div className="">
                        <label htmlFor="enddate_1" className="block mb-1 text-[14px] font-semibold" >End Date: </label>
                        <input
                              {...register("enddate_1")}
                              type="date"
                              id="enddate_1"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.enddate_1
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                  </div>         
               </div>
}

{(experienceQn >= 2) &&                      
               <div className=" border-2 border-[#225559] mt-8 p-5 rounded-lg relative ex_1">
                  <div className={`child absolute top-1 gap-4 bg-[#225559] p-2 text-white rounded-lg right-1 `}>
                     <span className={`cursor-pointer ${experienceQn > 2 && "hidden"}`} onClick={addexperience}><FaPlus className='text-xl font-bold '/></span>
                     {/* <span className={`cursor-pointer ${experienceQn > 2 && "hidden"}`} onClick={clearExperience_2} ><FaTrash className='text-xl font-bold cursor-pointer'/></span> */}
                  </div>
                  
                  <div className="mb-6">
                        <label htmlFor="instituteName_2" className="block mb-1 text-[14px] font-semibold" >Institute Name:* </label>
                        <input
                              {...register("instituteName_2")}
                              type="text"
                              id="instituteName_2"
                              placeholder="Enter Institute Name..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.instituteName_2
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <div className="mb-6">
                        <label htmlFor="DG_2" className="block mb-1 text-[14px] font-semibold" >Designation:* </label>
                        <input
                              {...register("DG_2")}
                              type="text"
                              id="DG_2"                                       
                              required = {institute_2 ? true : false}
                              placeholder="Enter designation..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.DG_2
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                     <div className="mb-6">
                        <label htmlFor="DP_2" className="block mb-1 text-[14px] font-semibold" >Department:* </label>
                        <input
                              {...register("DP_2")}
                              type="text"
                              id="DP_2"
                              required = {institute_2 ? true : false}
                              placeholder="Enter Email ..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.DP_2
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                  </div>  

                  <div className="grid grid-cols-2 gap-8">
                     <div className="">
                        <label htmlFor="startdate_2" className="block mb-1 text-[14px] font-semibold" > Start Date: </label>
                        <input
                              {...register("startdate_2",)}
                              type="date"
                              id="startdate_2"
                              required = {institute_2 ? true : false}
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.startdate_2
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                     <div className="">
                        <label htmlFor="enddate_2" className="block mb-1 text-[14px] font-semibold" >End Date: </label>
                        <input
                              {...register("enddate_2")}
                              type="date"
                              id="enddate_2"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.enddate_2
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                  </div>         
               </div>
}

{(experienceQn >= 3) &&                      
               <div className=" border-2 border-[#225559] mt-8 p-5 rounded-lg relative ex_1">
                  <div className={`child absolute top-1 gap-4 bg-[#225559] p-2 text-white rounded-lg right-1 `}>
                     <span className={`cursor-pointer ${experienceQn > 2 && "hidden"}`} onClick={addexperience}><FaPlus className='text-xl font-bold '/></span>
                     {/* <span className={`cursor-pointer`} onClick={() => {clearExperience_3; setValue("instituteName_1", "dsfsdds")}}><FaTrash className='text-xl font-bold cursor-pointer'/></span> */}
                  </div>
                  
                  <div className="mb-6">
                        <label htmlFor="instituteName_3" className="block mb-1 text-[14px] font-semibold" >Institute Name:* </label>
                        <input
                              {...register("instituteName_3")}
                              type="text"
                              id="instituteName_3"
                              placeholder="Enter Institute Name..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.instituteName_3
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <div className="mb-6">
                        <label htmlFor="DG_3" className="block mb-1 text-[14px] font-semibold" >Designation:* </label>
                        <input
                              {...register("DG_3")}
                              type="text"
                              id="DG_3"
                              required = {institute_3 ? true : false}
                              placeholder="Enter designation..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.DG_3
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                     <div className="mb-6">
                        <label htmlFor="DP_3" className="block mb-1 text-[14px] font-semibold" >Department:* </label>
                        <input
                              {...register("DP_3")}
                              type="text"
                              id="DP_3"                                 
                              required = {institute_3 ? true : false}
                              placeholder="Enter Email ..."
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.DP_3
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                  </div>  

                  <div className="grid grid-cols-2 gap-8">
                     <div className="">
                        <label htmlFor="startdate_3" className="block mb-1 text-[14px] font-semibold" > Start Date: </label>
                        <input
                              {...register("startdate_3",)}
                              type="date"
                              id="startdate_3"
                              required = {institute_3 ? true : false}
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.startdate_3
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                     <div className="">
                        <label htmlFor="enddate_3" className="block mb-1 text-[14px] font-semibold" >End Date: </label>
                        <input
                              {...register("enddate_3")}
                              type="date"
                              id="enddate_3"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.enddate_3
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                        />
                     </div>
                  </div>         
               </div>
}


               <div className="my-10 text-center">
                  <button
                     type="submit"
                     className="bg-[#225559] hover:bg-transparent border-2 border-[#225559] border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300"
                  >
                     {isSubmitting ? <span className="loading loading-dots loading-md"></span> : "Add Lawyer" }
                     {/* { "Request Appoinment" } */}
                  </button>
               </div>
            </form>
         </div>
    );
};

export default AddLawyerPage;